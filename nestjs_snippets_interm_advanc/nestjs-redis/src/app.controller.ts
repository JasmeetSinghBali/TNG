import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 📝 caching via direct access of cache manager
  @Get()
  async cacheManager_caching(){
    return this.appService.cacheManager_caching();
  }
}
