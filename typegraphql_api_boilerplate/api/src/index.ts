import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from 'express';
import { buildSchema  } from 'type-graphql';
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";




const main = async ()=>{
    
    // establish connection with postgres on basis of ormconfig.json
    await createConnection();

    const schema = await buildSchema({
        resolvers: [RegisterResolver],
    });

    const apolloServer = new ApolloServer({ schema });

    const app = Express();

    apolloServer.applyMiddleware({app});

    app.listen(5000,()=>{
        console.log(`Server Started at http://localhost:5000/graphql`);
    })
}
main();
