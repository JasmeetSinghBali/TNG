import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**db connection */
@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        /**calling the consturctor of PrismaClient */
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:123@localhost:5434/nest?schema=public',
                }
            }
        })
    }
}
