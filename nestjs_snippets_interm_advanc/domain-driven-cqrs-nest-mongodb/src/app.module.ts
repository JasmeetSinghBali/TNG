import { Module } from '@nestjs/common';
import { CampersModule } from './campers/camper.module';
import { CampersController } from './campers/campers.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CampersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
