import { verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../context/MyContext";
import "dotenv/config";

// ✔ authorization: Bearer AccessTOken
export const isAuthMiddleware: MiddlewareFn<MyContext> = ({ context }, next)=>{
    const reqHeader = context.req.headers['authorization'];
    if(!reqHeader){
        throw new Error("🐱‍👤Not Authenticated");
    }
    try{
        const accessToken = reqHeader.split(' ')[1];
        // payload contains user id ,email that was used while signing jwt token to generate access token
        const payload = verify(accessToken, process.env.JWT_SIGNING_SECRET as string );
        // if user is logged in then the payload has id and email as specified in MyContext.ts
        context.payload = payload as any;

        
    }catch(err){
        console.log(err);
        throw new Error("Not Authenticated");
    }
    return next();
}
    