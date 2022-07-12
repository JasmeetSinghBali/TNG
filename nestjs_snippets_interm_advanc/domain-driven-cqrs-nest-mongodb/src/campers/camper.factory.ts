/**factory for instantiating new camper objects for creating a new camper*/

import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { EntityFactory } from "src/database/entity.factory";
import { Camper } from "./Camper";

@Injectable()
export class CamperFactory implements EntityFactory<Camper>{
    create(name: string, age: number, allergies: string[]){
        // return the new camper
        return new Camper(
            new ObjectId().toHexString(),
            name,
            age,
            allergies
        );
    }
}