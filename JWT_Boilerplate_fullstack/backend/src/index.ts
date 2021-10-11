import "dotenv/config";
import "reflect-metadata";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { User } from "./entity/User";
import { createAccessToken, createRefreshToken } from "./JWTService";
import { sendRefreshToken } from "./sendRefreshToken";




// ✨lambda function for Async code✨
// wraps the entire code inside this lambda async function
(async()=>{

    const app = express();
    
    // ✨ cookie parsing middleware must run before any of the routes
    app.use(cookieParser());

    // Test Route
    // 🍳 _ is used when we dont care about that parameter🍳
    app.get('/',(_req, res)=>{
        res.status(200).json({
            message:'🐱‍🚀 jiaba muana!! Ayeee',
            status: '🔋 Up'
        });
    });
    
    // ✨ Cookie based regeneration of Refresh token when Access token expires
    // 🎆 Hit when access token expires, cookie only works on this route
    app.post("/refresh_token",async(req,res)=>{
        // Step-1 Grab the cookie header with the refresh token as key named jid via cookie-parser middleware
        //req.cookies-> {jid : 'secretRefreshTokenString'}

        const token = req.cookies.jid;
        if(!token){
            // sending back empty access token as the refresh token was not found in reqheaders cookie
            return res.send({ok: false, accessToken: '' });
        }

        // Step-2 Validate the refresh token
        let payload: any = null;
        try{
            // extracting the user details as payload from the jwt refresh token
            payload = verify(token,process.env.REFRESH_SIGNING_SECRET as string);  
        }catch(err){
            console.log(err);
            return res.send({ ok: false, accessToken: '' });
        }

        //Step-3 ✔ token is valid and we can send back new access token
        // payload has {userId:'',userEmail:'',tokenVersion: int}  refer JWTService.ts

        // 🍳 search the userid in db and grab the details 
        const user = await User.findOne({ id: payload.userId });

        if(!user){
            return res.send({ ok:false, accessToken:'' });
        }

        // 🍳 check wheather the tokenVersion matches with the saved tokenVersion inside User schema/entity
        if(user.tokenVersion !== payload.tokenVersion){
            // tokenVersion mismatch with postgres stored User
            // send empty token
            return res.send({ ok:false, accessToken:'' });
        }

        // ✨ create a new refresh token and pass it as cookie response header via sendRefreshToken Service
        sendRefreshToken(res, createRefreshToken(user) ); // sendRefreshToken(res,token) refer sendRefreshToken.ts

        // ✨ use the grabbed user details as payload for new accessToken generation
        return res.send({ ok:true, accessToken: createAccessToken(user) });
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
