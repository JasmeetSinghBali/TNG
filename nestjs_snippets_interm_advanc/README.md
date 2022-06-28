> # 🎁 Contains nestjs snippets for diff use-case & scenarios

> 1.🎯 Caching [ redis + unit testing ]

            nest new nestjs-redis

            cd nestjs-redis

            npm i cache-manager
            npm i -D @types/cache-manager

            npm run start:dev

- bootstrap the cache module in the app.modules.ts

- by default CacheModule.register() uses the in memory database we can also specify different store like redis in app.module.ts while registering the cachemodule

> ## Implementing caching

> a) by directly accessing cache manager

- injecting cache manager to interact with it
  ref: app.controller.ts & app.service.ts

> b) caching at the route level via cacheInterceptor

- an entire controller can be decorated with @UseInterceptors(CacheInterceptors) ref: app.controller.ts

- **📝 IMP: to implement the cacheInterceptor to all the controllers at once , go to the app.module.ts and in providers array proved the APP_INTERCEPTOR(global interceptor) ref: app.module.ts**

- **📝IMP: custom key and ttl can be given for each route/controller via @CacheKey() & @CacheTTL()**
