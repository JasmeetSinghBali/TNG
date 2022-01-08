import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from '../Controllers/student.controller';
import { ValidStudentMiddleware } from '../Middlewares/studentExists.middleware';
import { StudentService } from '../Services/student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    /**This is to be exported in case where
     * this Student Service is needed by Teacher Module
     */
    exports: [StudentService]
})
/**implement NestModule to add configuration i.e add middlewares like studentExist middleware */
export class StudentModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        /**specify for which routes via forRoutes where we want this middleware */
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        })
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        })
    }
}