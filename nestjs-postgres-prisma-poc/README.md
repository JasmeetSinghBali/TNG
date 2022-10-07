> ## POC sample nestjs-prisma-postgres boilerplate

> Dev/Setup Notes:

- to run postgres docker instance

          docker-compose up devDB -d

- prisma setup

      # navigate to root project dir with package.json
      # prerequisite liberary
      1. prisma-cli > yarn add -D prisma
      2. prisma-client > yarn add @prisma/client

- access prisma cli

      npx prisma init
      # generates .env with postgres connection string & prisma folder with barebone schema.

- for prisma help

      npx prisma --help

- manually migrate & generate prisma schema [make sure the docker instance for postgres is up]

      npx prisma migrate dev
      # it will ask to reset the exisitng postgres data that is fine and only be asked in dev env not in prod so yes can be selected
      # enter name of the migration and thats it.
      # it will generate migrations folder

      npx prisma generate [no need to run seprately migrate dev cmd autoruns generate cmd as well]
      # generates typescript types for the schema in schema.prisma
      # that can be used now as typescript types anywhere in the application

- inspecting the database via prisma studio

      npx prisma studio
      # connect to postgres via .env connection url
      # provides GUI to interact/inspect the db
