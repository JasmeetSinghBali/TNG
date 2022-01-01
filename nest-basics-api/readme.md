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

> ## 2. RequestObjects

> ## 📚 refferences

- ⛑ https://docs.nestjs.com/
- 🧪 https://docs.nestjs.com/fundamentals/testing
