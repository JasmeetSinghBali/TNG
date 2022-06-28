import { CacheInterceptor, CacheKey, CacheTTL, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

// CacheInterceptor now by default will cache the get routes if they are frequently hit i.e if hit twice will only enter the controller logic once
//@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 📝 caching via direct access of cache manager
  @Get()
  @CacheKey('some_route_cacheKeyCustomName') // and key of the cache for this route to set/retrive the cached item can be utlized in microservice /websocket based app
  @CacheTTL(60) // ttl of 60 seconds for which the cache will persist
  async cacheManager_caching(){
    return this.appService.cacheManager_caching();
  }
}
