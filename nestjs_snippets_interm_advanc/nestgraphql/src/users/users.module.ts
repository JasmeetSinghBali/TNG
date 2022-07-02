import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    // register the userResolver & userService in user entity user.module.ts
    providers: [UsersResolver,UsersService]
})
export class UsersModule {}