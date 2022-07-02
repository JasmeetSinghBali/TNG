import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class usermodelInterface {
    @Field()
    userId: string;
    @Field()
    email: string;
    @Field(()=>Int)
    age: number;
    @Field({nullable: true}) // nullable true i.e can be null i.e optional
    isSubscribed?: boolean;
}