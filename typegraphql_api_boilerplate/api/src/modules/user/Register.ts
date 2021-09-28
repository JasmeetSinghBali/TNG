import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from 'bcryptjs';
import { User } from "../../entity/User";
import { RegisterInput } from "./register/Registerinput";


@Resolver()
export class RegisterResolver {
  @Query(() => String, { name:"helloWorld", nullable: true , description: '✔ API works perfectly' })
  async hello() {
    return "🔋 It works!!";
  }

  // resolver specific to graphql only
  
  // access the User object present in present with root decorator
  // @FieldResolver()
  // async name(@Root() parent: User){
  //     return `${parent.firstName} ${parent.lastName}`;
  // }
  
  // register user (POST request)
  @Mutation(() => User, { name:"Register", nullable: true , description: 'New User Registeration' })
  async register(
      @Arg('input') {email,firstName,lastName,password}: RegisterInput
    ): Promise<User> {
        // hashing password
        const hashedPassword = await bcrypt.hash(password,12);
        
        // interacting with User entity/ User schema
        // create new user with request body data and save to postgres db
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save();

        return user;
    }
}

