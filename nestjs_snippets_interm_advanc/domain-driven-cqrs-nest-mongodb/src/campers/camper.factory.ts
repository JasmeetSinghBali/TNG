/**factory for instantiating new camper objects for creating a new camper*/

import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { EntityFactory } from "src/database/entity.factory";
import { Camper } from "./Camper";
import { CamperCreatedEvent } from "./events/camper-created.event";

@Injectable()
export class CamperFactory implements EntityFactory<Camper>{
    create(name: string, age: number, allergies: string[]){
        // return the new camper
        const newCamper =  new Camper(
            new ObjectId().toHexString(),
            name,
            age,
            allergies
        );
        // 📝:the entity Camper inherits from Aggregate Root, and aggregate root have this apply() method that broadcast events out to the system 
        // apply(eventToBroadcast)
        newCamper.apply(
            new CamperCreatedEvent(newCamper.getID())
        );
        return newCamper;
    }
}