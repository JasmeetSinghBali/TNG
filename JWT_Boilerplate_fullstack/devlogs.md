> ## 🎨 Blueprint ( How the snippet was made!!)

> Step-1 Set Up typeorm

- [x] npm i -g typeorm
- [x] generate boilerplate server side code with typeorm

                typeorm init --name backend --database postgres

- [x] make sure to edit example.ormconfig.json and remove example prefix from the filename
- [x] some basic configs

  - [x] remove readme inside backend
  - [x] update tsconfig.json a/c to your requirements
  - [x] update package.json

                # upgrade all the dependency
                npm i -g npm-check-updates
                ncu -u
                npm install

- [x] create database in postgres & edit ormconfig.json database field
- [x] cd backend -> npm run start

                # if everything setup correctly then this is output in terminal
                Inserting a new user into the database...
                Saved a new user with id: 1
                Loading users from the database...
                Loaded users:  [ User { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 } ]
                Here you can setup and run express/koa/any other framework.

> Step -2 Setup graphql server with express

- [x] npm i express apollo-server-express graphql --save
- [x] dev depend , types for express and graphql(apollo already comes with types)

                    # for autocompletion and types for express and graphql package
                    npm i @types/express  @types/graphql --save-dev

- [x] **🎈 changes in index.ts inside src**

                            # remove or comment out the createConnection function completely
                            import express from 'express';
                            const api = express();

                            # a lambda function calling itself
                            # executes automatically when index.ts is compiled
                            # all the asynchronous code can be written here
                            (async()=>{})()

- [x] visit localhost:5000 & localhost:5000/graphql to check everything is set up correctly

> Step-3 Set up typegraphql

- [x] npm i type-graphql --save
- [x] build schema in better way via type-graphql refer **src-> UserResolver.ts** and then use that inside of index.ts to build Schema

> Step-4 Register Resolver (mutation) refer UserResolver.ts and entity->User.ts

              # Register user
               mutation{
                 register(email: "John@doe.co" , password: "12345")
               }

              # Retrieve all Users
              {
                users {
                  email
                  id
                }
              }


> Step-5 Login Users 30:15
