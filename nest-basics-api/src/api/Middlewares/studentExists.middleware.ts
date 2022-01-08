import { HttpException, Injectable,NestMiddleware } from "@nestjs/common";
import { Request,Response,NextFunction} from "express";
import { students } from "src/mockDB/db";

/**to mark it as DI and middleware */
@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    console.log(`This middleware was called 🐱‍🚀`)
    /**every middleware extending NestMiddleware should have a use method */
    use(req: Request,res:Response,next: NextFunction){
        const studentID = req.params.studentId;
        /**how some works is it returns true if any one value in the iteration pass the condition that we specify
         * mainly useful in lookup or finding/filtering by unique id on js arrays
         */
        const studentExs = students.some((student) => {
            return student.id === studentID
        })
        /**if false is returned i.e no student with this id found in our mock db */
        if(!studentExs){
            /**throwing error is Nest via HttpException */
            throw new HttpException("Student not found",400)
        }
        next()
    }
}