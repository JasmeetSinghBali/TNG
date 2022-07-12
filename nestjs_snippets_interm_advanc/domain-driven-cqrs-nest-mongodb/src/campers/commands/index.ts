import { CreateCamperCommand } from "./create-camper/create-camper.command";
import { UpdateAllergiesHandler } from "./update-allergies/update-allergies.handler";

/**📝 future new command handlers need to be added to this array */
export const CamperCommandHandlers = [CreateCamperCommand, UpdateAllergiesHandler]