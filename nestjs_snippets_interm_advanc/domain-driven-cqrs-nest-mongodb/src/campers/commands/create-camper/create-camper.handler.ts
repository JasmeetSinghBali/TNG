import { Inject } from "@nestjs/common";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CamperFactory } from "../../camper.factory";
import { CreateCamperCommand } from "./create-camper.command";

/**📝: Put all pieces together i.e use the db_related_operations reposi, schemaFactory and schema to finall create a new camper*/
@CommandHandler(CreateCamperCommand)
export class CreateCamperHandler implements ICommandHandler<CreateCamperCommand>{
    constructor(private readonly camperFactory: CamperFactory, private readonly eventPublisher: EventPublisher){}
    /**logic fo creating the new camper */
    async execute({ createCamperRequest }: CreateCamperCommand): Promise<void>{
        const {name,age,allergies} = createCamperRequest;
        const newCamper = this.eventPublisher.mergeObjectContext(await this.camperFactory.create(name,age,allergies));
        // commit() will apply all the events that are during the lifecycle of camper object creation
        // 📝: i.e will broadcast all events that are apply() via inheriting aggregate root for the Camper class entity
        newCamper.commit()
    }
}