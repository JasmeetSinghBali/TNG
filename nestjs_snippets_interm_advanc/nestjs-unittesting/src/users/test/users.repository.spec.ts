import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import { User } from "../schemas/user.schema"
import { UsersRepository } from "../users.repository"

describe('UsersRepository',()=>{
    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            providers: [
                UsersRepository,
                {   
                    // model token for helping nestjs for identifying the context of a module
                    provide: getModelToken(User.name),
                    // class to use to mock the function on the model like find, create, update, delete
                    useClass: 
                }
            ]
        })
    })
})