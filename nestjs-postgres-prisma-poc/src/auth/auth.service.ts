import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService{

    constructor(private readonly prismaService:PrismaService){}

    signup(){
        return { msg: 'I have signed up' };
    }

    signin(){
        return { msg: 'I have signed in' };
    }

}