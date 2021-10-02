import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

// 🎇schema for table named users with id,email,password as columns for postgres via typeorm🎇
@ObjectType()
@Entity("users")
export class User extends BaseEntity {

    // ✨Field column exposes id and email for user when query is made to retreived all users
    @Field(()=> Int )
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    email: string;

    @Column("text")
    password: string;

}

