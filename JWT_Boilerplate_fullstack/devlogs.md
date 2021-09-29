> 🎨 Blueprint ( How the snippet was made!!)

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
