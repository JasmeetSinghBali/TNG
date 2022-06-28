import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  // inject cache manager for interacting with it
  // via the @Inject(tokenName)
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}

  async cacheManager_caching(){
    // set/get a cached item inmemory cacheManager while value can be anything ranging from string,number to object
    // while set in memory ttl(default in seconds) options can be specified i.e for what time this cached value will be persisted inmemory
    // also ttl given at this level will overwrite the global level ttl
    this.cacheManager.set('cached_item',{key: 32},{ttl: 10});
    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem)
    // delete a specific key inmemory cache
    await this.cacheManager.del('cached_item');
    const cachedItemDeleted = await this.cacheManager.get('cached_item');
    console.log(cachedItemDeleted)
    // delete everything inside cache via reset()
    await this.cacheManager.reset();
    return 'Hello World';
  }
}
