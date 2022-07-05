import { Test } from "@nestjs/testing"
import 
import { UsersController } from "../users.controller"
import { UsersService } from "../users.service"

describe('UsersController',()=>{
    beforeEach(async()=>{
        //📝 grab the user controller via creating a test module refference for testing it with jest
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UsersController],
            // depend required by UserController
            providers:[UsersService]
        }).compile();
    })
})