import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { CamperFactory } from "./camper.factory";
import { CampersController } from "./campers.controller";
import { CamperCommandHandlers } from "./commands";
import { CamperEntityRepository } from "./db_related_operations/camper-entity.repository";
import { CamperSchemaFactory } from "./db_related_operations/camper-schema.factory";
import { CamperSchema } from "./db_related_operations/camper.schema";
import { CamperEventsHandlers } from "./events";

@Module({
    imports: [
        CqrsModule,
        MongooseModule.forFeature(
            [
                {
                    name:CamperSchema.name,schema:SchemaFactory.createForClass(CamperSchema)
                }
            ]
            )
        ],
    controllers: [CampersController],
    providers: [
      CamperEntityRepository,
      CamperSchemaFactory,
      CamperFactory,
      ...CamperCommandHandlers,
      ...CamperEventsHandlers
    ],
  })
export class CampersModule{

}