> ## JWT Node.js with Graphql and React Full Stack Snippet

**This is an advance boilerplate/snippet for a full stack app(server+client) with JWT authentication**

> Tech.

- Typescript
- GraphQL
- TypeGraphQL
- TypeORM
- PostgreSQL
- React
- Apollo

> Backend-

- Setup Graphql server using TypeGraphQL and TypeORM
- Register a User
- Login and create access and refresh tokens
- Authenticated mutations/queries
- Refresh the token
- Revoke tokens for a user

> Frontend-

- setup apollo and Graphql code generator
- react router
- register/login
- Persisting session on refresh
- handling expired tokens
- fetching current user in header

> 🎇Important Facts

- [x] entity dir refers to the schema of different tables inside of the postgreSQL database.
- [x] typeorm is the tool to interact,create and manage schema's and perform CRUD operations with the DB in a managable way.
- [x] to tell typeorm to create a table via specific schema in the ormconfig.json

                # via entity mapping
                entities: ["src/entity/**/*.ts"]

                # to automatically create table inside our db via schema/entity
                synchronize:true

- [x] and then in index.ts inside src just need to establish a connection
      await createConnection()

- [x] remember to store hashed password in db not plain passwords can use bcrypt or argon

> ## Test Backend

- npm run start
- localhost:5000/graphql

                                    # Test route
                                    # {
                                    #   hello
                                    # }

                                    # Register user
                                    # mutation{
                                    #   register(email: "John@doe.co" , password: "12345")
                                    # }

                                    # Retrieve all Users
                                    # {
                                    #   users {
                                    #     email
                                    #     id
                                    #   }
                                    # }

                                    # Login
                                    # mutation{
                                    #   login(email:"John@doe.co",password:"12345"){
                                    #     accessToken
                                    #   }
                                    # }

                                    # Protected Route exmplae
                                    # {
                                    #   protectedRouteExample
                                    # }

                                    # Revoking all refresh token by userId
                                    # mutation{
                                    #   revokeRefreshTokensForUser(userId: 1)

                                    # }
