import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCamperCommand } from "./create-camper.command";

/**📝: Put all pieces together i.e use the db_related_operations reposi, schemaFactory and schema to finall create a new camper*/
@CommandHandler(CreateCamperCommand)
export class CreateCamperHandler implements ICommandHandler<CreateCamperCommand>{
    /**logic fo creating the new camper */
    async execute(command: CreateCamperCommand): Promise<void>{
        
    }
}