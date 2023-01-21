import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { Test01ConsumerService } from './test-01.consumer.service';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, Test01ConsumerService],
})
export class AppModule {}
