import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import { FilterQuery } from "mongoose"
import { User } from "../schemas/user.schema"
import { UsersRepository } from "../users.repository"
import { userStub } from "./stubs/user.stub"
import { UserModel } from "./support/user.model"

describe('UsersRepository',()=>{
    // refference to the actual user model & repository
    let usersRepository: UsersRepository;
    let userModel: UserModel;

    let userFilterQuery: FilterQuery<User>;

    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            providers: [
                UsersRepository,
                {   
                    // model token for helping nestjs for identifying the context of a module
                    provide: getModelToken(User.name),
                    // class to use to mock the function on the model like find, create, update, delete
                    useClass: UserModel
                }
            ]
        }).compile();
        usersRepository = moduleRef.get<UsersRepository>(UsersRepository);
        userModel = moduleRef.get<UserModel>(UserModel);

        // so that for each set have a filter query as this userId
        userFilterQuery = {
            userId: userStub().userId
        }

        jest.clearAllMocks();
    })

    describe('findOne',()=>{
        describe('when findOne is called',()=>{
            let user: User;

            beforeEach(async ()=>{
                // 📝 the spyOn tells jest to watch on the userModel for the findOne function so that it can later be expected wheather it was called
                jest.spyOn(userModel, 'findOne');
                user = await usersRepository.findOne(userFilterQuery);
            }) 
            test('then it should call user model',()=>{
                expect(userModel.findOne).toHaveBeenCalledWith(userFilterQuery, {_id: 0,__v:0});
            })
            test('then it should return the user',()=>{
                expect(user).toEqual(userStub());
            })
        })
    })
})