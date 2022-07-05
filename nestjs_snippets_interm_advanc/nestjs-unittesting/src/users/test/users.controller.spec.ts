import { Test } from "@nestjs/testing"
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
        })
    })
})