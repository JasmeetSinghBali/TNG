import { InjectModel } from "@nestjs/mongoose";
import { CamperSchema } from "./camper.schema";

@InjectModel()
export class CamperDtoRepository{
    constructor(
        @InjectModel(CamperSchema.name)
        private readonly camperModel: Model<CamperSchema>
    ){}

    async findAll(): Promise<CamperDto>{
        const campers = await this.camperModel.find({})
        return campers.map(camper=>{
            const allergiesLower = camper.allergies.map(allergy =>  allergy.toLocaleLowerCase());
            const isAllergicToPenuts = allergiesLower.includes('peanuts');
            return {
                ...camper,
                isAllergicToPenuts,
            };
        });
    }
}