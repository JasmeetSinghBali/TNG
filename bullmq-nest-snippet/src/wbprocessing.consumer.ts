import { Process,Processor } from "@nestjs/bull";
import { WBPROCESSING_QUEUE } from "./constants";
import { Job } from "bull";
import { Logger } from "@nestjs/common";

@Processor(WBPROCESSING_QUEUE)
export class WbProcessingConsumer {

    private readonly logger = new Logger(WbProcessingConsumer.name);

    // ✨ CONSUMER: function that will  process the job/message produced by producer must be decorated by Process decorator
    @Process()
    async wbprocessing(job: Job<unknown>){
        this.logger.log(JSON.stringify(job))
        this.logger.debug('Data:',job.data)
    }
}
