import "reflect-metadata";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";
import { createConnection } from "typeorm";




// ✨lambda function for Async code✨
// wraps the entire code inside this lambda async function
(async()=>{

    const app = express();
    
    // Test Route
    // 🍳 _ is used when we dont care about that parameter🍳
    app.get('/',(_req, res)=>{
        res.status(200).json({
            message:'🐱‍🚀 jiaba muana!! Ayeee',
            status: '🔋 Up'
        });
    });

    // ✔ so that table are build inside db postgres a/c to schema mentioned in entity dir
    await createConnection();
    

    // 🎇Setting up apollo server with graphql schema via UserResolver.ts backed by type-graphql🎇
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({ req,res }) => ({ req,res })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    
    app.listen(5000,()=>{
        console.log('🔋 express server listening at http://localhost:5000 \n🌠 apollo-express-server with graphql listening at http://localhost:5000/graphql');
    });

})();

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
