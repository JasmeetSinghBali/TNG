import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { usermodelInterface } from './interfaces/userModel';
import { UsersService } from './users.service';

// resolver has an anonymous function that returns the type that resolver is responsible for resolving
@Resolver(()=>usermodelInterface)
export class UsersResolver {

    // 📝for access of the user service in this userresolver we use constructor and inject the UsersService that we early declared as injectable
    constructor(private readonly usersService: UsersService){}
    // 🎈 in case of a real DB this function will be async and it will return promise rather than just the usermodelInterface
    @Query(()=>usermodelInterface,{name: 'user', nullable: true}) // tells nestjs what the return type is on the query via the anonymous function, we can provide the name of the query i.e route by default it will be the name of the method in this case getUser, nullable true means it will return null if we dont find a user
    getUser(@Args() getUserArgs: GetUserArgs): usermodelInterface{ // @Args() is a parameter decorator
        return this.usersService.getUser(getUserArgs);
    }

    // nullable true means that we can expect the items in the list to be null but not the list itself, if you want to allow both of them can be nullable then itemsAndList
    @Query(()=>[usermodelInterface],{name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): usermodelInterface[]{
        return this.usersService.getUsers(getUsersArgs);
    }

    // 🎯 Setup- Mutations (Update,Create,Delete)
    // anonymous function inside mutation decorator that defines the return type of this mutation
    @Mutation(()=>usermodelInterface)
    createUser(@Args('createUserData') createUserData: CreateUserInput ): usermodelInterface{
        return this.usersService.createUser(createUserData);
    }

    @Mutation(()=>usermodelInterface)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput ): usermodelInterface{
        return this.usersService.updateUser(updateUserData);
    }

    @Mutation(()=>usermodelInterface)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): usermodelInterface{
        return this.usersService.deleteUser(deleteUserData);
    }
}