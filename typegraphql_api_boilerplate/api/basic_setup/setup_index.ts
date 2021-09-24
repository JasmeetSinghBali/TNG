import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from 'express';
import { buildSchema,Resolver,Query } from 'type-graphql';

/*
    a sample resolver with Query parameters as String as return type
    refer resolver section in bootstrap docs section
    with second parameter as name,nullable,description of the endpoint/query 
*/

@Resolver()
class HelloResolver {
  @Query(() => String, { name:"helloWorld", nullable: true , description: 'this endpoint spits back hello world message' })
  async hello() {
    return "Hello World";
  }
}

const main = async ()=>{
    
    /* Step-1  creating apolloserver instance
     requires typedef or schema can be done via type-graphql 
     refer https://typegraphql.com/docs/bootstrap.html#:~:text=After%20creating%20our%20resolvers%2C%20type,server%2C%20WebSockets%20or%20even%20MQTT.

     LINE -7 sample resolver
    */

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
