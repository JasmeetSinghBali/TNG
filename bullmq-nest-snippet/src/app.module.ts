import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WBPROCESSING_QUEUE } from './constants';
import { WbProcessingConsumer } from './wbprocessing.consumer';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HOST_BULLMQ_REDIS_URI: Joi.string().required(),
        HOST_BULLMQ_REDIS_PORT: Joi.string().required(),
        HOST_BULLMQ_REDIS_USERNAME: Joi.string().required(),
        HOST_BULLMQ_REDIS_PASSWORD: Joi.string().required()
      }),
      envFilePath: './src/.env'
    }),
    // ✨ setup-config bull for underlying redis datastore that persists message
    BullModule.forRoot({
      redis: {
        host: process.env.HOST_BULLMQ_REDIS_URI as string,
        port: parseInt(process.env.HOST_BULLMQ_REDIS_PORT as string),
        username: process.env.HOST_BULLMQ_REDIS_USERNAME as string,
        password: process.env.HOST_BULLMQ_REDIS_PASSWORD as string
      },
    }),
    // ✨ register queue & injection token, each object represent a queue with each object having name of the queue
    BullModule.registerQueue({
      name: WBPROCESSING_QUEUE, // wbprocessing refers to heavy computation processing task that act as injection token
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WbProcessingConsumer],
})
export class AppModule {}
