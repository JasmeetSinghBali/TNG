import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseEntityRepository } from "src/database/base-entity.repository";
import { Camper } from "../Camper";
import { CamperSchemaFactory } from "./camper-schema.factory";
import { CamperSchema } from "./camper.schema";

/**📝: Used with combo of Camper .ts in campers dir for command related operations i.e Writes to DB */
@Injectable()
export class CamperEntityRepository extends BaseEntityRepository<CamperSchema,Camper>{
    constructor(
        @InjectModel(CamperSchema.name)
        camperModel: Model<CamperSchema>,
        camperSchemaFactory: CamperSchemaFactory
    ){
        super(camperModel, camperSchemaFactory)
    }
}