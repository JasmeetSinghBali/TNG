import { Resolver, Query, Mutation , Arg, ObjectType, Field} from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from './entity/User';


import dotenv from 'dotenv';
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

    // 🧨 Logs in User and return access token & refresh token
    // ✨Promise <LoginResponse>✨ typescript check that the mutation return type as an object with access token
    @Mutation(()=> LoginResponse)
    async login(
        @Arg('email') email: string,
        @Arg('password') password: string
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
        return {
            // signing/creating a token with payload as userId,userEmail
            // with signing secret that can be anything stored in .env
            accessToken: sign({userId: user.id, userEmail: user.email}, process.env.JWT_SIGNING_SECRET as string,{ expiresIn: "15m" })
        };

        }catch(err){
            console.log(err);
            return {
                accessToken: `💀 Something went wrong..\n ${err}`
            }
        }
        
    }
}