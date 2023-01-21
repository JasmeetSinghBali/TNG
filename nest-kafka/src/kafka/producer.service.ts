import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka,Producer,ProducerRecord } from "kafkajs";

@Injectable()
export class ProducerService implements OnModuleInit,OnApplicationShutdown{
    // ✨ instantiate kafka instance handler
    // Kafka takes object that specifies brokers or servers on which kafka server is listening on
    private readonly kafka = new Kafka({
        // default local broker port-9092
        brokers: ['localhost:9092'],
    });

    // intantiate the producer instance with kafka instance handler
    private readonly producer: Producer = this.kafka.producer();

    // ✨ connect server to the kafka & producer at startup via OnModuleInit that is nest lifecycle application hook
    async onModuleInit() {
        await this.producer.connect();
    }

    // 📝 method to produce messages/events
    async produce(record: ProducerRecord){
        await this.producer.send(record);
    }

    // 📝 when nest server stops the producer(kafka instance) is disconnected via OnApplicationShutdown lifecycle hook
    async onApplicationShutdown(signal?: string) {
        await this.producer.disconnect();
    }
}