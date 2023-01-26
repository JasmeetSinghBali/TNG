import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { WBPROCESSING_QUEUE } from './constants';

@Injectable()
export class AppService {
  
  // ✨ inject the bullmq registered at app module
  constructor(@InjectQueue(WBPROCESSING_QUEUE) private readonly wbprocessingQueue: Queue){}

  getHello(): string {
    return 'Hello World!';
  }
  // ✨ PRODUCER: push message/job to wbprocessing bull mq that is already registered at app module level
  async wbprocessing(){
    // 📝 priority for the job,delay,timeout can be passed as second object to .add method as options
    await this.wbprocessingQueue.add({
      fileName: './file.mp3'
    });
  }
}
