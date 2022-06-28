> # 🎁 Contains nestjs snippets for diff use-case & scenarios

> 1. Caching [ redis + unit testing ]

            nest new nestjs-redis

            cd nestjs-redis

            npm i cache-manager
            npm i -D @types/cache-manager

            npm run start:dev

- bootstrap the cache module in the app.modules.ts

- by default CacheModule.register() uses the in memory database we can also specify different store like redis in app.module.ts while registering the cachemodule
