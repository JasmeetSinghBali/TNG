import { Field,InputType } from "@nestjs/graphql";
import {IsNotEmpty, IsOptional} from 'class-validator';
// 🎯 used for updateing the user 
@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field()
    @IsOptional()
    @IsNotEmpty()
    age?: number;

    @Field()
    @IsOptional()
    isSubscribed?: boolean;

}