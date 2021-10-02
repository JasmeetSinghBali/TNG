import { Resolver, Query, Mutation , Arg} from 'type-graphql';
import { hash } from 'bcryptjs';
import { User } from './entity/User';

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
}