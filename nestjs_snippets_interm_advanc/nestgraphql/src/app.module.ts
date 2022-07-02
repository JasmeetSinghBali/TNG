import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo';

@Module({
  // register graphqlmodule
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    // customized users entity UsersModule registered with app
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
