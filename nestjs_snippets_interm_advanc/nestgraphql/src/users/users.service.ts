import { Injectable } from "@nestjs/common";
import { usermodelInterface } from "./interfaces/userModel";

// 📝 injectable so as to import providers into UsersService like to reach database repository
@Injectable()
export class UsersService {
    //🎈 instead of this hardcoded array here would be a database like nosql users collection
    private users: usermodelInterface[] = [];

    public createUser(): usermodelInterface{

    }

    public updateUser(): usermodelInterface{

    }
    public getUser(): usermodelInterface{

    }
    public getUsers(): usermodelInterface[]{

    }
    public deleteUser(): usermodelInterface{

    }
}