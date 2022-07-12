import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { EntitySchemaFactory } from '../../database/entity-schema.factory'
import { Camper } from "../Camper";
import { CamperSchema } from "./camper.schema";

/**📝 an injectable(so that can be injected into repository directly later on) Factory/Class that creates object from schema and to the schema i.e schema->model(object) & model(object)-> schema */
@Injectable()
export class CamperSchemaFactory implements EntitySchemaFactory<CamperSchema,Camper>{
    /**Creating a schema given a camper domain model, this schema can further be saved inside the mongodb as document */
    create(camper: Camper): CamperSchema{
        return{
            _id : new ObjectId(camper.getID()),
            name: camper.getName(),
            age: camper.getAge(),
            allergies: camper.getAllergies()
        };
    }

    /**Creating a domain model from  given a camper schema document from DB*/
    createFromSchema(camperSchema: CamperSchema): Camper {        
        return new Camper(
            camperSchema._id.toHexString(),
            camperSchema.name,
            camperSchema.age,
            camperSchema.allergies
        );
    }
}