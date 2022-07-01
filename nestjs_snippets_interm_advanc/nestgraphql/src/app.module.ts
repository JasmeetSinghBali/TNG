import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  // register graphqlmodule
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    // customized users entity UsersModule registered with app
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
