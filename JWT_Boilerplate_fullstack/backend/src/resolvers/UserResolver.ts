import { Resolver, Query, Mutation , Arg, ObjectType, Field, Ctx, UseMiddleware, Int} from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { User } from '../entity/User';
import { MyContext } from '../context/MyContext';

import dotenv from 'dotenv';
import { createAccessToken, createRefreshToken } from '../services/JWTService';
import { isAuthMiddleware } from '../middlewares/isAuthMiddleware';
import { sendRefreshToken } from '../services/sendRefreshToken';
import { getConnection } from 'typeorm';

dotenv.config();

// ✨ Custom return type for log in mutation
@ObjectType()
class LoginResponse{
    @Field()
    accessToken: string
};

// 🍖Graphql Schema goes here🍖
@Resolver()
export class UserResolver{
    
    @Query(()=> String)
    hello(){
        return 'hi'
    }

    // ✨protected route example with UseMiddleware typegraphql✨
    // UseMiddleware runs the callback code before going to next, next represents when we are done with current middleware logics
    @Query(()=> String)
    @UseMiddleware(isAuthMiddleware)
    protectedRouteExample(
        @Ctx() { payload }: MyContext
        ){
        console.log(payload);
        return `user id: ${payload!.userId}, email: ${payload!.userEmail}`;
    }

    // 🧨returns all the user in the users db from postgres
    @Query(()=> [User])
    users(){
        return User.find();
    }
    
    // 🧨Register new user
    @Mutation(()=> Boolean)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string
    ){
        const hashedPassword = await hash(password,12);
        try{
            await User.insert({
                email,
                password: hashedPassword
            });
            // on success in registering a new user in db
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    // 🏷 Only for testing out the tokenVersion revoking of refresh token functionality
    // =================== DONT INCLUDE THIS MUTATION AT PRODUCTION LEVEL ==============
    @ Mutation(()=>Boolean)
    async revokeRefreshTokensForUser(
        @Arg('userId',()=>Int) userId: number
    ){
        // establishing connection, finding User entity and incrementing the userId field by 1
        await getConnection()
            .getRepository(User)
            .increment({id:userId},'tokenVersion',1);
        
        return true;
    }

    // 🧨 Logs in User and return access token & refresh token
    // ✨Promise <LoginResponse>✨ typescript check that the mutation return type as an object with access token
    @Mutation(()=> LoginResponse)
    async login(
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Ctx() { res }: MyContext
    ): Promise <LoginResponse>{
        try{
            // 🎇check user exists with the given email in DB?
        const user = await User.findOne({where:{ email }});
        if(!user){
            throw new Error('🕶 Email Not Found');
        }
        // 🎇check password is correct
        const valid = await  compare(password,user.password);
        if(!valid){
            throw new Error('🐱‍👤Wrong Password..')
        }

        
        
        // if above checks are true then user logs in gets access token
        // ✔ storing refresh token as cookie, different payload can be given apart from user id,email also
        // Make sure to use different secret for refresh token sign & access token sign
        sendRefreshToken(res,createRefreshToken(user));

        return {
            // signing/creating a token with payload as userId,userEmail
            // with signing secret that can be anything stored in .env
            accessToken: createAccessToken(user)
        };

        }catch(err){
            console.log(err);
            return {
                accessToken: `💀 Something went wrong..\n ${err}`
            }
        }
        
    }
}