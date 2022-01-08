> # 🚀 nestjs Orientations (👩‍🎓/👨‍🎓 Basics)

> ## 🧩 features

1. typescript(disciplined)
2. oops(SOLID principles)
3. scalable/testable/loosely coupled production grade architecture boilerplate setup

> ## 👶 steps(understanding the blueprint)

- npm i -g @nestjs/cli

                    # cmd line
                    nest -v

                    # config your nest backend
                    nest new nest-basics-api

                    # choices
                    npm or yarn or pnpm

> \***\*app.module.ts is the root of the api\*\***

> \***\*everything is imported inside app.module and then this is exported and bootstrapped inside main.ts to create the nest backend\*\***

> ## 🔧 building the api

> ### 1. 📩 Controllers

> \***\*Handles incoming request from client and sends back response\*\***

> \***\* ✏ never write the buisness logic inside the controllers\*\***

- In nest we define controllers via decorators that provide meta data about what functionality a particular code block will have

> \***\*the access decorators import @nestjs/common\*\***

                Controllers
                        |- student.controller.ts

                # student.controller.ts
                import { Controller } from @nestjs/common

                # Controller will tell nest that this is a controller based class

                @Controller('students')
                class StudentController {

                }

> \***\*every single route inside studentController is going to start as /students\*\***

> \***\*it can be specified with a @Get() decorator that this is a get request\*\***

                @Get()
                getStudents(){
                    // return all students data
                }

> \***\*make sure to import the student.controller.ts inside the app.module.ts\*\***

> ## ✔ running dev server first time

                    npm run start:dev
                    # make sure the main.ts is just under the src directory

- nested routes like /students/:studentId

                    @Get('/:studentId')
                    getStudentById(){
                        return "Get Student By Id"
                    }

> # 🐱‍🚀🐱‍🚀🐱‍🚀TIRED OF REPETATIVE CONTROLLERS SETUP🐱‍🚀🐱‍🚀🐱‍🚀

> ## Creating controllers through nestcli 🐱‍👤

- https://docs.nestjs.com/controllers

                    nest g controller <controllerName> --no-spec
                    # only add --no-spec flag if you dont need unit test file for this controller

> ### best practice is to put similir prefix routes in seprate controller

                    # to run tests
                    npm run test:watch

> ## 2. Request Objects (extracting pieces of info from request like params)

> make use @Param () decorator in Nest for GET

                    # student object in student ID
                    @Get('/:studentId')
                    getStudentById(
                        @Param () params: {studentId: string}
                    ) {
                        console.log(params)
                        return 'Get Student By Id';
                    }

- further it can be simplified while the required params can be destructured at the time of decorator defination

                    # @Param('destructuredObjectFromParams')
                    @Param ('studentId') studentId: string
                    console.log(studentId)

> make use @Body () decorator in Nest for POST

                    @Post()
                    createStudent(
                        @Body() body
                    ) {
                        return `Create's New Student with details\n ${JSON.stringify(body)}`;
                    }

> use @Body & @Parma together for PUT

                    @Put('/:studentId')
                    updateStudentById(
                        @Param('studentId') studentId: string,
                        @Body() body
                    ) {
                        return `Update's\n student id: ${JSON.stringify(studentId)}\n with new data ${body}`;
                    }

> Further their are @Query, @Session, @Next and @Ip() that can be useful refer- https://docs.nestjs.com/controllers#request-object

                    @Put('/:studentId')
                    updateTeacherOfStudentById(
                        @Param('teachersId') teachersId: string,
                        @Param('studentId') studentId: string,
                        @Ip() clientIP: string
                    ) {
                        return `clientIP: ${clientIP}\nUpdate's Teacher with ID: ${teachersId}\n Associated To Student With Id: ${studentId}`;
                    }

> DTO (data transfer objects)

- classes that define what type of data is transferred(received/sent in request/response)

                    - DataTransferObjects
                        * student.dto.ts

                    #student.dto.ts
                    export class CreateStudentDTO {
                        name: string;
                        teacher: string;
                    }

                    @Post()
                    createStudent(
                        @Body() body: CreateStudentDTO
                    ) {
                        return `Create's New Student with details\n ${JSON.stringify(body)}`;
                    }

- **_the idea is to make seperate DTO for individual functionalities_**

                    #student.dto.ts
                    export class CreateStudentDTO {
                        name: string;
                        teacher: string;
                    }
                    export class UpdateStudentDTO {
                        name: string;
                        teacher: string;
                    }

                    @Put('/:studentId')
                    updateStudentById(
                        @Param('studentId') studentId: string,
                        @Body() body: UpdateStudentDTO
                    ) {
                        return `Update's\n student id: ${studentId}\n with new data ${JSON.stringify(body)}`;
                    }

- **_further it must be noted that DTO can be made for response as well_**

                    /**Response DTO's */
                    export class FindStudentDTO{
                        id: string;
                        name: string;
                        teacher: string;
                    }

                    @Get()
                    getStudents() : FindStudentDTO[]{ // this means we expect to get an array in response of interface/DTO findstudent
                        return 'All Students';
                    }
                    @Get('/:studentId')
                    getStudentById(
                        @Param('studentId') studentId: string
                    ): FindStudentDTO { // since only one student is returned so without the [] to non-array type response
                        return `Get Student By Id ${studentId}`;
                    }

- **_Nesting the DataTransferObjects_**

                    import { StudentDTO } from "./student.dto";

                    /**Request DTO's */
                    export class TeacherDTO{
                        name: string;
                        students: StudentDTO
                    }

> # Providers(Services/Repositories/factories)
>
> manafacture response that will be sent to client i.e the logic is not contained in the controllers instead it is with the providers

- **_REQFLOW_**

                    Client->Controller(routes)--via DTO's ->Providers(services)---interact> DB

- **_RESFLOW_**

                    Providers(services) --manafacture response-->Controller--->Client

- **_Creating a service for student_**

                      -Services
                          * student.service.ts

                      #student.service.ts
                      @Injectable()
                      export class StudentService{

                      }
                      # @Injectable deocrator marks this class as a provider

- **_Bringing in bigGuns(OOP's) AND DONT FORGET TO TELL THE APPMODULE ABOUT THE SERVICE YOU JUST ADDED!!_**

                    @Injectable()
                    export class StudentService{
                        /**Usual OOPS
                        * make a call here to get you data and
                        * store it up top to be accesible by 'this' inside this class only
                        * by specifying it as 'private' member so it is not directly accesible outside this class
                        * const obj = new StudentService
                        * obj.students ---> ❌ Error
                        * 'readonly' so that it wont be manipulated
                        * */
                        private readonly students = students
                        getStudents(){
                            return this.students
                        }
                    }

- **Accessing the services(providers) inside controller superEasy with constructor DI**

                    /**(DI) StudentService
                    * @param studentService
                    * where we define the type as StudentService for studentService param....
                    * so this StudentService is now injected as DI
                    * inside of controller via the constructor
                    */
                    constructor(private readonly studentService: StudentService) {}

                    @Get()
                    getStudents() : FindStudentDTO[]{ // this means we expect to get an array in response of interface/DTO findstudent
                        return this.studentService.getStudents()
                    }

- **further the providers can injected as DI in other classes via constructor parameter injection using Nest's built in DI system**

- **refer student.controller.ts & student.service.ts**

> # Pipes refer - https://docs.nestjs.com/pipes

- **Class for validating & transforming client data**
- like transforming string to integer
- like validate client input's phone no,address,email etc...

- **Built in pipes with automatic returns with error and status codes the error message can be further modified a/c to requirement- https://docs.nestjs.com/pipes#built-in-pipes**

                # just need to pass a new instance of ParseUUIDPipe to check the param is a valid uuid if not it automatically returns appropriate error message
                @Get('/:studentId')
                getStudentById(
                    @Param('studentId', new ParseUUIDPipe()) studentId: string
                ): FindStudentDTO { // since only one student is returned so without the [] to non-array type response
                    return this.studentService.getStudentById(studentId)
                }

> # Modules(take it to another level)

- **every nest application has at least one root module**
- **best practice: to create multiple modules for each fucntionality of the application**
- **refer - https://docs.nestjs.com/modules**

                  - Modules
                      * student.module.ts
                  # student.module.ts
                    import { Module } from '@nestjs/common';
                    import { StudentController } from '../Controllers/student.controller';
                    import { StudentService } from '../Services/student.service';

                    @Module({
                        controllers: [StudentController],
                        providers: [StudentService]
                    })
                    export class StudentModule{}

- **With modules you could have complete seperate controllers,providers,services associated to only a particular feature to break down things and code clean & scalable**

> ## Cleaning app.module.ts

                    #app.module.ts (BEFORE)

                    import { Module } from '@nestjs/common';
                    import { StudentController } from 'src/api/Controllers/student.controller';
                    import { TeacherController } from 'src/api/Controllers/teacher.controller';
                    import { TeacherStudentController } from 'src/api/Controllers/teacher_student.controller';
                    import { StudentService } from 'src/api/Services/student.service';

                    @Module({
                    imports: [],
                    controllers: [StudentController, TeacherController, TeacherStudentController],
                    providers: [StudentService]
                    })
                    export class AppModule {}

                    #app.module.ts (AFTER)

                    import { Module } from '@nestjs/common';
                    import { StudentModule } from 'src/api/Modules/student.module';
                    import { TeacherModule } from 'src/api/Modules/teacher.module';


                    @Module({
                    imports: [TeacherModule,StudentModule],
                    })
                    export class AppModule {}

- **export modules if other modules are dependent on them and then import them inside the module that requires them**

                # student.module.ts --- needed by ---> teacher.module.ts
                    @Module({
                    controllers: [StudentController],
                    providers: [StudentService],
                    /**This is to be exported in case where
                    * this Student Service is needed by Teacher Module
                    */
                    exports: [StudentService]
                })

                # and then in teacher.module.ts
                import { Module } from '@nestjs/common';
                import { TeacherController } from '../Controllers/teacher.controller';
                import { TeacherStudentController } from '../Controllers/teacher_student.controller';
                import { StudentModule } from './student.module';


                @Module({
                    imports: [StudentModule],
                    controllers: [TeacherController,TeacherStudentController]
                })
                export class TeacherModule{}

> # Middlewares(https://docs.nestjs.com/middleware)
>
> built in Guards mech (https://docs.nestjs.com/security/authentication)

- **the minion that receives the request even before the controller(routes)**
- **generally used in authenticating & autorizing client request**
- **create a middleware and then inject it inside of module**

> ## 📚 refferences

- ⛑ https://docs.nestjs.com/
- 🧪 https://docs.nestjs.com/fundamentals/testing
