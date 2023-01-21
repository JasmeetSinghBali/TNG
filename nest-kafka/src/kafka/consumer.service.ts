import { Injectable,OnApplicationShutdown } from "@nestjs/common";
import { Kafka,Consumer,ConsumerSubscribeTopics,ConsumerRunConfig } from "kafkajs";

@Injectable()
export class ConsumerService implements OnApplicationShutdown{
    private readonly kafka = new Kafka({
        // default local broker port-9092
        brokers: ['localhost:9092'],
    });

    // ✨ multiple consumers i.e array of consumers that can subscribe to different topics
    private readonly consumers: Consumer[] = [];

    // ✨ConsumerRunConfig specifies what needs to be done when message is read from topic while ConsumerSubscribeTopics helps to listen and read message from the beginning
    async consume(topic:ConsumerSubscribeTopics, config: ConsumerRunConfig){
        // instantiate the consumer instance with groupID as project name and connect consumer with server
        const consumer = this.kafka.consumer({groupId: 'nest-kafka'})
        await consumer.connect();
        
        // subscribe to the passed dynamic topic with dynamic execution instructions/config when this topic is read
        await consumer.subscribe(topic);
        await consumer.run(config);

        // finally push the new consumer into the consumers array
        this.consumers.push(consumer);
    }

    // disconnect all consumers on application shutdown
    async onApplicationShutdown() {
        for (const consumer of this.consumers){
            await consumer.disconnect();
        }
    }

}