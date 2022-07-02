import { Field,InputType, Int } from "@nestjs/graphql";
import {IsNotEmpty, IsOptional} from 'class-validator';
// 🎯 used for updateing the user 
@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field(()=> Int,{nullable: true})
    @IsOptional()
    @IsNotEmpty()
    age?: number;

    @Field({nullable: true})
    @IsOptional()
    isSubscribed?: boolean;

}