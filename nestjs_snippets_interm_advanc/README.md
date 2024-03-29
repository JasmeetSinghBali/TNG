> # 🎁 Contains nestjs snippets for diff use-case & scenarios

> 1. 🎯 Caching [ redis + unit testing ]

            nest new nestjs-redis

            cd nestjs-redis

            npm i cache-manager
            npm i -D @types/cache-manager

            npm run start:dev

- bootstrap the cache module in the app.modules.ts

- by default CacheModule.register() uses the in memory database we can also specify different store like redis in app.module.ts while registering the cachemodule

> ## Implementing caching (Testing/Mocking caching included as well)

> a) by directly accessing cache manager

- injecting cache manager to interact with it
  ref: app.controller.ts & app.service.ts

> b) caching at the route level via cacheInterceptor

- an entire controller can be decorated with @UseInterceptors(CacheInterceptors) ref: app.controller.ts

- **📝 IMP: to implement the cacheInterceptor to all the controllers at once , go to the app.module.ts and in providers array proved the APP_INTERCEPTOR(global interceptor) ref: app.module.ts**

- **📝IMP: custom key and ttl can be given for each route/controller via @CacheKey() & @CacheTTL()**

> ### 📝 IMP: Unit Testing for caching (Mocking CACHE_MANAGER depend in test)

- create new app.service.spec.ts in src

- keep running npm run start:dev
- other terminal npm run test app.service

> ## 📝 IMP: implement REDIS into the caching system

- make sure redis is running locally or in docker

            # install redis via brew
            brew install redis
            # to start a redis store
            brew services start redis

- to incorporate redis into cacheManager caching techniques

            # install
            npm i cache-manager-redis-store

            # go in app.module.ts
            # edit options object in CacheModule.register()

> 2. 🎯 Scalable nestjs + graphql server snippet/boilerplate

dependencies

- @nestjs/graphql
- graphql-tools
- graphql
- apollo-server-express
- @nestjs/apollo

            # after installing above dependency
            npm run start:dev

- removed app.controller , app.controller.spec & app.service.ts from src folder as no need its a graphql server

> **📚ref: IMP- https://docs.nestjs.com/graphql/quick-start**

- set up resolvers(request-handler)
- for each entity different folder would be their
- so all the resolvers, services and models will be inside users folder and each time a new entity is their just create a new seprate folder for it

            # 🎯Project-structure-api-graphql
            users(entity)
              -users.module.ts (export a class as UsersModule & register in the app.module.ts in root)
              -users.service.ts (db/repository interactions)
              -users.resolver.ts (request handler)

              * interfaces (refers to the data type of the reposi/DB)

              * dto(data transfer objects is for specifying type of the request coming in and response going out)
                - args (stands for arguments i.e in REST sense params)
                  - get-user.args.ts
                - input (request like creating user)
                  -create-user.input.ts
                  -update-user.input.ts

> 3. 🎯 Domain driven CQRS- command-query segregation model for write and read operations with events
