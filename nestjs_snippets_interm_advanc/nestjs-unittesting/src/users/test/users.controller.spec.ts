import { Test } from "@nestjs/testing"
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../schemas/user.schema";
import { UsersController } from "../users.controller"
import { UsersService } from "../users.service"
import { userStub } from "./stubs/user.stub";

// 📝 tell jest to automock user.service.ts
jest.mock('../users.service');

describe('UsersController',()=>{
    //📝 reff for user controller
    let usersController : UsersController;
    let usersService: UsersService;

    beforeEach(async()=>{
        //📝 grab the user controller via creating a test module refference for testing it with jest
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UsersController],
            // depend required by UserController
            providers:[UsersService]
        }).compile();
        
        //📝 register the original controller and service reff to the testing module ref
        usersController = moduleRef.get<UsersController>(UsersController);
        usersService = moduleRef.get<UsersService>(UsersService);
        
        // always better to do this as this prevent uncecessary debugging, this will clear the mocks for each calls
        jest.clearAllMocks();
    });

    // 📝 unit-test 1 for getUser method in user.controller.ts with given-when-then fashion
    describe('[given]getUser',()=>{
        // 🎯when-block
        describe('[when] get user is called',()=>{
            let user: User;
            // 🎯given-block
            beforeEach(async () => {
                user = await usersController.getUser(userStub().userId)
            })
            //🎯then-block (assertions actual expectation from the test)
            test('[then] it should call user service',()=>{
                expect(usersService.getUserById).toBeCalledWith(userStub().userId);
            })

            test('[then] it should also return a user',()=>{
                expect(user).toEqual(userStub());
            })
        })
    })
    // 📝 unit-test 2 for getUsers(all) method in user.controller.ts with given-when-then fashion
    describe('[given]get all users',()=>{
        // 🎯when-block
        describe('[when] getUsers is called',()=>{
            let users: User[];
            beforeEach(async () => {
                users = await usersController.getUsers();
            })
            //🎯then-block (assertions actual expectation from the test)
            test('[then] it should call user service',()=>{
                expect(usersService.getUsers).toHaveBeenCalled();
            })

            test('[then] it should also return list/array of users',()=>{
                expect(users).toEqual([userStub()]);
            })
        })
    })
    // 📝 unit-test 3 for createUser  method in user.controller.ts with given-when-then fashion
    describe('[given]create new user',()=>{
        // 🎯when-block
        describe('[when] createUsers is called',()=>{
            let user: User;
            let createUserDto: CreateUserDto;
            beforeEach(async () => {
                createUserDto = {
                    email: userStub().email,
                    age: userStub().age
                }
                user = await usersController.createUser(createUserDto);
            })
            //🎯then-block (assertions actual expectation from the test)
            test('[then] it should call user service user create',()=>{
                expect(usersService.createUser).toBeCalledWith(createUserDto.email,createUserDto.age);
            })

            test('[then] it should also return the newly created user',()=>{
                // 📝: IMP compare the original user created with controller and one with mock stub
                expect(user).toEqual(userStub());
            })
        })
    })
    // 📝 unit-test 4 for updatedUser  method in user.controller.ts with given-when-then fashion
    describe('[given]update new user',()=>{
        // 🎯when-block
        describe('[when] updateUser is called',()=>{
            let user: User;
            let updateUserDto: UpdateUserDto;
            beforeEach(async () => {
                updateUserDto = {
                    age: 23,
                    favoriteFoods: ['samosa']
                }
                user = await usersController.updateUser(userStub().userId,updateUserDto);
            })
            //🎯then-block (assertions actual expectation from the test)
            test('[then] it should call user service userUpdate',()=>{
                expect(usersService.updateUser).toHaveBeenCalledWith(userStub().userId,updateUserDto);
            })

            test('[then] it should also return the updated  user',()=>{
                // 📝: IMP compare the original user created with controller and one with mock stub
                expect(user).toEqual(userStub());
            })
        })
    })
})