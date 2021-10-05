import { User } from "./entity/User";
import { sign } from "jsonwebtoken";
import "dotenv/config";


export const createAccessToken = (user: User)=>{
    return sign(
        {userId: user.id,userEmail: user.email},
        process.env.JWT_SIGNING_SECRET as string,
        { expiresIn: "15m" }
        );
};

export const createRefreshToken = (user: User)=>{
    return sign(
        { userId: user.id, userEmail: user.email },
        process.env.REFRESH_SIGNING_SECRET as string,
        { expiresIn: "7d" }
    );
};