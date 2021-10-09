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

> Step-5 Login Users & return access tokens

- [x] login user and give them access and refresh tokens refer UserResolver.ts

> the promise helps typescript to check that login mutation returns an object with access token.

                            async login(
                        @Arg('email') email: string,
                        @Arg('password') password: string
                    ): Promise <LoginResponse>

> npm i jsonwebtoken --save for creation & signing and jwt tokens
> npm i @types/jsonwebtoken --save-dev

                    # Login
                    mutation{
                      login(email:"John@doe.co",password:"12345"){
                        accessToken
                      }
                    }

> Step-6 Generate and Return refresh tokens

**refresh token will be stored in a cookie named jid via res.cookie**

              # config apollo server to pass context to grab the req,res
              context: ({ req,res })=>({ req,res })

> now req and res can be accessed in graphql resolvers
> refer MyContext.ts & index.ts
> make sure to set request.credentials: "include" in the settings graphql playground

              # Login
                    mutation{
                      login(email:"John@doe.co",password:"12345"){
                        accessToken
                      }
                    }
              # a cookie is observed in the network tab in one of the graphql requests
              jid
              # or go the response headers set-cookie
              jid=LongRefreshTokenString

> Step -7 Protected Routes with isAuthMiddleware.ts

                            # Login
                            mutation{
                              login(email:"John@doe.co",password:"12345"){
                                accessToken
                              }
                            }

                            # Protected Route
                             {
                               protectedRouteExample
                             }
                            # headers(Use AccessToken recieved after mutation login response)
                            authorization : Bearer AccessToken

> Step-8 Handle case when someone make request with expired access token i.e Cookie based regeneration of new Refresh & new Access token via old refresh token inside request header cookies /refresh_token refer index.ts

**A seperate route to handle the refresh tokens refer index.ts**
**the refresh token can be grabbed from request header with cookie named as jid**
**use postman to investigate request header and add a cookie as localhost named jid**

- **for parsing the cookie**

                  npm i cookie-parser --save
                  npm i @types/cookie-parser --save-dev


                  # make a login graphql request
                  mutation{
                    login(email:"John@doe.co",password:"12345"){
                      accessToken
                    }
                  }

                  # and use the accessToken as cookie jid in postman to get new access token
                  # it should result in empty access token
                  # expected response
                  {
                    ok: false,
                    accessToken:''
                  }

> test out the /refresh_token route as

                  # make a login request from graphql
                  mutation{
                    login(email:"John@doe.co",password:"12345"){
                      accessToken
                    }
                  }

                  # while opening your dev tools clear the network request and make login request
                  # find the one which contains response cookie header as jid
                  # copy the jid in the  cookies tab containing the refresh token
                  # navigate to postman
                  jid: grabbedRefreshTokenFromResponseHeadersLoginRequestGraphql

                  POST /refresh_token

                  # expected response
                  # spits back new access token
                  {
                    ok: true,
                    accessToken:'457847852n435j2h3j4h2j3h4j2h3j4234'
                  }
