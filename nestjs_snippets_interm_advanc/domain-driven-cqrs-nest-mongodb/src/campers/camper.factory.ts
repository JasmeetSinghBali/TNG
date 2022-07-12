/**factory for instantiating new camper objects for creating a new camper*/

import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { EntityFactory } from "src/database/entity.factory";
import { Camper } from "./Camper";
import { CamperEntityRepository } from "./db_related_operations/camper-entity.repository";
import { CamperCreatedEvent } from "./events/camper-created.event";

@Injectable()
export class CamperFactory implements EntityFactory<Camper>{
    constructor(private readonly camperEntityRepository: CamperEntityRepository){}
    
     async create(name: string, age: number, allergies: string[]): Promise<Camper>{
        // return the new camper
        const newCamper =  new Camper(
            new ObjectId().toHexString(),
            name,
            age,
            allergies
        );
        // 🎯 save the newCamper created in the repository i.e persist in db
        await this.camperEntityRepository.create(newCamper);
        // 📝:the entity Camper inherits from Aggregate Root, and aggregate root have this apply() method that broadcast events out to the system 
        // apply(eventToBroadcast)
        newCamper.apply(
            new CamperCreatedEvent(newCamper.getID())
        );
        return newCamper;
    }
}