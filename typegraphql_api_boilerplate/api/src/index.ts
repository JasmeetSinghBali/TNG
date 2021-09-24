import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from 'express';
import { buildSchema,Resolver,Query } from 'type-graphql';



@Resolver()
class HelloResolver {
  @Query(() => String, { name:"helloWorld", nullable: true , description: 'this endpoint spits back hello world message' })
  async hello() {
    return "Hello World";
  }
}

const main = async ()=>{
    

    const schema = await buildSchema({
        resolvers: [HelloResolver],
    });

    const apolloServer = new ApolloServer({schema});

    const app = Express();

    apolloServer.applyMiddleware({app});

    app.listen(5000,()=>{
        console.log(`Server Started at http://localhost:5000/graphql`);
    })
}
main();
