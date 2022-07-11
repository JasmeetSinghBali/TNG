import { Injectable } from "@nestjs/common";
import { EntitySchemaFactory } from '../../database/entity-schema.factory'
import { Camper } from "../Camper";
import { CamperSchema } from "./camper.schema";

/**📝 an injectable(so that can be injected into repository directly later on) Factory/Class that creates object from schema and to the schema i.e schema->model(object) & model(object)-> schema */
@Injectable()
export class CamperSchemaFactory implements Entity SchemaFactory<CamperSchema,Camper>{
    /**Creating a schema given a camper domain model */
    create()
}