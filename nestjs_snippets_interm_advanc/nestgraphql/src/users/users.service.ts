import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { usermodelInterface } from "./interfaces/userModel";

// 📝 injectable so as to import providers into UsersService like to reach database repository
@Injectable()
export class UsersService {
    //🎈 instead of this hardcoded array here would be a database like nosql users collection
    private users: usermodelInterface[] = [];

    public createUser(createUserData: CreateUserInput): usermodelInterface{
        const user : usermodelInterface={
            userId: uuidv4(),
            ...createUserData // spread the data coming from resolvers
        }
        // insert the new user in DB
        this.users.push(user);

        return user;
    }

    public updateUser(updateUserData: UpdateUserInput): usermodelInterface{
        const user = this.users.find(user=>user.userId === updateUserData.userId);
        Object.assign(user,updateUserData);
        return user;
    }
    public getUser(getUserArgs: GetUserArgs): usermodelInterface{
        return this.users.find(user=>user.userId === getUserArgs.userId);
    }
    public getUsers(getUsersArgs: GetUsersArgs): usermodelInterface[]{
        return getUsersArgs.userIds.map(userId=>this.getUser({userId}))
    }
    public deleteUser(deleteUserData: DeleteUserInput): usermodelInterface{
     const userIndex = this.users.findIndex(user=>user.userId===deleteUserData.userId);
     const deletedUser = this.users[userIndex];
     this.users.splice(userIndex);

     return deletedUser;
    }
}