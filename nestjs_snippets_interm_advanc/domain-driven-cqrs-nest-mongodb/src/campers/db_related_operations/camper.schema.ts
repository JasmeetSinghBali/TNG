import { Prop, Schema } from "@nestjs/mongoose";
import { IdentifiableEntitySchema } from "src/database/identifiable-entity.schema";

/**This is the schema of the campers document collection in mongoDB */
Schema({versionKey: false, collection: 'campers'})
export class CamperSchema extends IdentifiableEntitySchema{
    @Prop()
    readonly name: string;
    @Prop()
    readonly age: number;
    @Prop()
    readonly allergies: string[];
}