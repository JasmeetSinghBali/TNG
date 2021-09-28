import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { EmailAlreadyExist } from "./EmailAlreadyExist";

// some simple validation with class-validator
@InputType()
export class RegisterInput {
  
  @Field() 
  @Length(1,255,{message: "firstName must be atleast 1 character long and below 255 characters."})
  firstName: string;
  
  @Field()
  @Length(1,255) 
  lastName: string; 
  
  @Field()
  @IsEmail()
  @EmailAlreadyExist({message: 'Email already exists..'}) 
  email: string;
  
  @Field() 
  password: string;
}