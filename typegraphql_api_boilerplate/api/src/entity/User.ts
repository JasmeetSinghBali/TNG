import { Field, ID, ObjectType, Root } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


// observer the @ decorators that are used in typeorm to distinguish between entity,column etc.
// Typeorm library uses the decorator function to shorten 
// the process of mapping a database table for you

// defines PostgreSQL Schema for User table id,fname,lname,email(unique),password 
// extending BaseEntity User.find() and User.create() at our disposal
// objecttype() to make sure that User is treated as object while returning from the register mutation endpoint

@ObjectType()
@Entity()
export class User extends BaseEntity{

    // decorating with @Field these columns will be exposed to graphql and graphql schema and the user requesting this resource can see them publically
    // with ID as graphql type which also helps in caching
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column('text',{ unique: true })
    email: string;

    // this is only graphql field type not stored in DB
    // combination of both fname+lname
    // @Field()
    // name: string;

    @Field()
    name(@Root() parent: User): string{
        return `${parent.firstName} ${parent.lastName}`;
    };


    @Column()
    password : string;

}