import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**Global hence accessible to auth,bookmark,user now no need of manual imports 
 * This is responsible for instantiating common connection and DB interactions for all other entity auth,user,bookmark  */
@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
