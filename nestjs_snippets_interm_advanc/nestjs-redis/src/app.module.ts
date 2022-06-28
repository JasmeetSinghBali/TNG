import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // bootstrapped/registerd the CacheModule
  // with options 
  // 1. ttl(time the cached data will persist in the redis after which it will be deleted)
  imports: [
    CacheModule.register({
      //ttl: 60, // global
      //max: 1000, // number of items that can be cached at once
      isGlobal: true // will make this cache module globally available i.e no need to import this module in other module explicitely and mention it in app.module.ts 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
