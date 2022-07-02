import { Field,InputType } from "@nestjs/graphql";
import {IsNotEmpty} from 'class-validator';
// 🎯 used for deleting the user 
@InputType()
export class DeleteUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
}