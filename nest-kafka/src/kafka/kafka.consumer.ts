import { Consumer, ConsumerConfig, ConsumerSubscribeTopics, Kafka, Logger } from "kafkajs";
import { IConsumer } from "./consumer.interface";

export class KafkaConsumer implements  IConsumer{
    private readonly kafka: Kafka;
    private readonly consumer: Consumer;
    private readonly logger: Logger

    constructor(
        private readonly topic: ConsumerSubscribeTopics,
        config: ConsumerConfig,
        broker: string
    ){
        this.kafka = new Kafka({ brokers: { broker } });
        this.consumer = this.kafka.consumer(config);
        this.logger = new Logger(`${topic.topics}-${config.groupId}`);
    }

    async connect() {
        try{
            await this.consumer.connect();

        }catch(err: any){
            this.logger.error("Failed kafka connection to server",err);
            
        }
    }
}