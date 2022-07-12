import { Query } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CamperQuery } from "./campers.queries";

@QueryHandler(CamperQuery)
export class CampersHandler implements IQueryHandler<CamperQuery>{
    async execute(query: CamperQuery): Promise<void> {
        
    }
}