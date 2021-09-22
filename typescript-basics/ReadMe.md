> ## TypeScript Basics

> typescript is open source and superset of javascript
> offers additional features to javascript including static types
> using type is completely optional
> compiles down to regular js
> can be used for both frontend and backend Node.js
> includes most of the features from ES6 and ES7 syntax(arrow,classes etc..)
> types from 3rd party liberaries can be added with type definations


> Advantages of typescript

- More robust
- Easy to spot bugs
- predictability
- readibility
- popular

> Features

- [x] .ts or .tsx extensions
- [x] TSC typescript compiler is used to compile .ts file down to js
- [x] can watch files and report error at compile time
- [x] tsconfig.json file is used to configure how typescript works


> Basic setup for typescript

                # install ts compiler globally or locally your call
                npm i -g typescript
                tsc.cmd -v


                # to compile a typescript file with typescript compiler
                cd typescript-basics
                tsc.cmd index

                # the moment we compile , it creates a new javascript file with the same name just in .js extension

- **whenever we compile the typescript file it converts into ES5 version of javascript, to make sure that the ts compiler converts into ES6 or ant specific ES syntax we have to make a tsconfig.json and mention the custom configs a/c to our project needs.**

- **We can also watch files i.e automatically detect changes and then compile with the --watch flag**

                    tsc.cmd --watch index

- **however their is no need to watch changes as all the errors in typescript are shown in vs code**

> ## IMPORTANT Setting Up tsconfig.json
                        
                        cd projectFolder
                        tsc.cmd --init
                        # creates a tsconfig.json file

                        # see the compilerOptions target section
                        # to convert the ts code to ES6 syntax specifiy ES6 rather than ES5
                        
                        "target": "es5"

                        # being in the project folder i.e typescript-basics
                        tsc.cmd
                        # automatically detects any .ts files and compiles them 


> folder structure and tsconfig.json outdir and rootdir settings

- **In ts based projects generally the ts and js file are not in the same directory**

- **below is an example how a index.js and index.ts files are structured in project the dist folder which is going to get deployed goes in dist while the src folder contains the .ts files** 
                        
                        src
                          index.ts
                        dist
                          index.js
                          

                        # inside tsconfig.json
                        outDir: "./dist"
                        rootDir: "./src"


                        cd typescript-basics
                        tsc.cmd --watch
                        # compiles index.ts inside src
                        # creates index.js inside of dist

