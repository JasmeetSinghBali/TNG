import {ArgsType,Field} from '@nestjs/graphql';
import {IsArray} from 'class-validator';

// 🎯arg for getting all users via list of userids
@ArgsType()
export class GetUsersArgs {
    @Field(()=>[String])
    @IsArray()
    userIds: string[];
}