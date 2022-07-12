import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CamperCreatedEvent } from "./camper-created.event";

/**handles the event of new camper being created */
@EventsHandler(CamperCreatedEvent)
export class CamperCreatedEventHandler implements IEventHandler{
    // camperId passed as data when camper-created.event.ts emits an event
    async handle({camperId}: CamperCreatedEvent) {
        // can dispatch email
        // or trigger a job or cron job in backegorund etc....
        console.log('camper Created',camperId);
    }
}