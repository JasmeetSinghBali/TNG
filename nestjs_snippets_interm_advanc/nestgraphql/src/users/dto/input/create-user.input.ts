import { Field,InputType } from "@nestjs/graphql";
import {IsNotEmpty, IsEmail} from 'class-validator';
// 🎯 used for creating new user request
@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    age: number;

}