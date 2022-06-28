import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';
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
      isGlobal: true, // will make this cache module globally available i.e no need to import this module in other module explicitely and mention it in app.module.ts
      // 📝: IMP providing store and socket for how to connect to this specific store
      store: redisStore,
      socket:{
        host: 'localhost',
        port: 6379,
      }  
    })
  ],
  controllers: [AppController],
  // 📝 the APP_INTERCEPTOR is global interceptor with specifying CacheInterceptor caching will be applied on every routes/controller in the app at once
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  }],
})
export class AppModule {}
