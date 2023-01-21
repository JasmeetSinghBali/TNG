import { Injectable,OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./kafka/consumer.service";

@Injectable()
export class Test01ConsumerService implements OnModuleInit{
    constructor(private readonly consumerService: ConsumerService){}

    // ✨ on server start subscribe to the test-01 topic produced by app.controller->app.service
    // via onModuleInit application(nest) lifecycle hook
    async onModuleInit() {
        
        await this.consumerService.consume(
            { topics: ['test-01'] },
            // ✨ for each message that is read from topic test-01 via consumer execute function specified as value of eachMessage
            { 
                eachMessage: async ({topic,partition,message})=>{
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString(),
                    });
                }, 
            },
        );
    }
}