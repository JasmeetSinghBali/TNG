import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  
  constructor(private readonly producerService:ProducerService){}

  async mockKafkaProducer(){
    await this.producerService.produce({
      topic: 'test-01',
      messages: [
        {
          value: 'Hello from kafka producer instance',
        },
      ],
    })
    return 'successfully produced message from kafka producer';
  }
}
