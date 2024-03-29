import { BadRequestException } from "@nestjs/common";
import { AggregateRoot } from "@nestjs/cqrs"

/**📝This class act as Domain Model that will hold all the functionality within and the data that comes back from it*/
//🎯 and act as write or command operations model a/c to CQRS domain driven design
export class Camper extends AggregateRoot{
    /**📝 name,age and allergies are only accessible inside this Camper class as they are all private */
    constructor(
        private readonly _id: string,
        private readonly name: string,
        private readonly age: number,
        private allergies: string[],
    ){
        super();
    }

    /**📝 getters so that the data name,age,allergies that lives inside Camper domain model class can be transferred to schema so that it can update the actual db document */
    // NOTE- the javascript will return the pass by value i.e copy of the name and age because they are of primitive data type string and number
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    /**📝: passing a copy of the allergies array via spread operator as allergies is not a primitive data type so that it passes the pass by value(copy) not pass by reff(ACTUAL) for security reason to prevent the callers to mutate the actual allergies array of string*/
    getAllergies(){
        return [...this.allergies];
    }
    getID(){
        return this._id;
    }

    updateAllergies(allergies: string[]): void{
        const allergiesLower = allergies.map(allergy => allergy.toLowerCase())
        if(allergiesLower.includes('chocolate')){
            throw new BadRequestException('Allergy cannot be chocolate as this is a chocolate bar camp...')
        }
        this.allergies = allergies;
    }
}