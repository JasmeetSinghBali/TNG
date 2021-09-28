> ## Typescript GraphQL based API (BACKEND) with postgreSQL- GENERALIZED BOILERPLATE

> Blueprint/ Dev Logs

- [x] npm init -y
- [x] setup type-graphql

  - [x] Core depend
    - [x] apollo-server-express
    - [x] express
    - [x] graphql
    - [x] reflect-metadata
    - [x] type-graphql
  - [x] Dev depend
    - [x] @types
      - [x] @types/express
      - [x] @types/graphql
      - [x] @types/node
    - [x] nodemon
    - [x] ts-node
    - [x] typescript
  - [x] add tsconfig.json(custom configs) to the root folder or tsc.cmd --init (default configs)
  - [x] **add src-> index.ts & dist in root project folder & refer code in basic_setup-> setup_index.ts**
  - [x] type-graphql schema bootstrapping https://typegraphql.com/docs/bootstrap.html#:~:text=After%20creating%20our%20resolvers%2C%20type,server%2C%20WebSockets%20or%20even%20MQTT.
  - [x] npm run start -> http://localhost:5000/graphql
  - [x] make a query {hello} returns with hello-world

- [x] 🎎 **Register Resolver(refer src->modules->user->Register.ts)**

  - [x] postgres + typeORM + type-graphql refer (https://typeorm.io/#/)

    - [x] setup ORM(object relation mapping to interact with relational database)
      - [x] add ormconfig.json refer https://typeorm.io/#/using-ormconfig
      - [x] npm i pg typeorm bcryptjs(for hashing passwords) for strong hashing use https://www.npmjs.com/package/argon2 (argon2)
      - [x] npm i @types/bcryptjs --save-dev
      - [x] add ormconfig.json in root folder (describes connection to the postgres DB)
        - [x] refer example.ormconfig.json
    - [x] setup postgres
      - [x] psql --help
      - [x] connect locally via cmd line
        - [x] psql -h localhost -p 5432 -U use
        - [x] enter password for user => postgres=#
    - [x] connection options ormconfig

      - [x] synchronize:true - creates DB schema automatically on every application launch only for developer env.
      - [x] logging - to see the sql queries that run
      - [x] Entities, or Entity Schemas, to be loaded and used for this connection.

                    src/entity/*.*
                    # includes all the files inside of entity wheather javascript or typescript

  - [x] **🧨 Creating User entity/User Schema refer User.ts inside src->entity**

                    import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

                    @Entity()
                    export class User {

                        @PrimaryGeneratedColumn()
                        id: number;

                        @Column()
                        firstName: string;

                        @Column()
                        lastName: string;

                        @Column()
                        isActive: boolean;

                    }
                    # in type orm specify type decorators to identify what fields they are

  - [x] **npm run start will now create a table user based on User.ts schema**

  - [x] **🎃 Register Mutation(POST request) for new user**

    - [x] **Transffered Register Resolver into seperate dir called src->modules->user->Register.js**

                            # for request body we give Arg
                            # @Arg('Argname') variableName: datatype
                            @Arg('firstName') firstName: string

    - [x] **🎇 To make sure that the endpoint returns the specific type mentioned in mutations or query callback we wrap our mutation or query callback in Promise.**

                            # so here we are expecting that the mutation/post callback returns user as promise.

                            async Register(): Promise<User>{
                                return 4; // results in error
                            }

    - [x] **🎇 We also need to make sure that both the callback return type and the mutation return type matches**

                            # we can do this by applying decorators to the User schema inside User.ts under entity dir

                                        @ObjectType()

    - [x] **🎇 decorating with field @Field these columns will be exposed to graphql and graphql schema and the user requesting this resource can see them publically**

    - [x] **🎇 we can access parent object in graphql via @Root decorators refer Register.ts @FieldResolver**

                                # test out mutation register schema
                                mutation{
                                    Register(firstName:'Jane' , lastName:'Doe', email:'jane2245@doe.com',password: '12345'){
                                        id
                                        firstName
                                        lastName
                                        email
                                    }
                                }

- [x] **✔ validation typegraphql refer RegisterInput.ts(register dir) and Register.ts inside of modules->user**

  - [x] adding validations to graphql resolver via decorator and built in methods of graphql

    - [x] **🦨 via class-validator, a class can be created and add tags or decorators any type of condition we want them to meet refer- https://typegraphql.com/docs/validation.html**

            npm i class-validator --save

            # specify a seperate dir as register,  modules->user->register->Registerinput.ts
            # Registerinput.ts

            import { IsEmail, Length } from "class-validator";
            import { Field, InputType } from "type-graphql";

            @InputType()
            export class RegisterInput {

              @Field()
              @Length(1,255)
              firstName: string;

              @Field()
              @Length(1,255)
              lastName: string;

              @Field()
              @IsEmail()
              email: string;

              @Field()
              password: string;
            }

            # So now mutation becomes inside graphql playground
              mutation{
              Register(
                input :
                {
                  firstName:"Jason",
                  lastName:"Mamoa",
                  email:"aqua@man.co",
                  password:"452345f"
                }
              ){
                id
                firstName
                lastName
                email
                name
              }
            }

  - [x] **🎇 further apollo server now automatically formats error messagesso that the end user can have proper understanding why the argument/input caused error done via ArgumentValidationError in type-graphql refer - https://typegraphql.com/docs/validation.html**
  - [x] **🎇 Custom decorators can be added too for validation check in graphql refer https://github.com/typestack/class-validator#custom-validation-decorators**

  - [x] **🎈 ts-node-dev(faster) & upgraded version of nodemon uses ts-node under the hood for compilation hence faster.**
  - [x] **🎈Inside tsconfig.json esModuleInterop:true & set allowSyntheticDefualtImports:true, this way we can get rid of as syntax while importing**
  - [x] **🎈 typegraphql way of adding the @Field resolver directly on the @ObjectType inside of user entity/schema instead of mentioning in the Register.ts**

- [ ] login
- [ ] authorization /middleware
- [ ] confirmation email
- [ ] forgot password/change
- [ ] logout
- [ ] write a test
- [ ] higher order resolvers
