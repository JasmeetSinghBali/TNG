import {ArgsType,Field} from '@nestjs/graphql';
import {IsNotEmpty} from 'class-validator';

// 🎯arg for getting user by userId with validation via class-validators
// 📝npm i class-validator
@ArgsType()
export class GetUserArgs {
    @Field()
    @IsNotEmpty()
    userId: string;
}