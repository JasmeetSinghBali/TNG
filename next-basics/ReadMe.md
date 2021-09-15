> # Next.js Basics

- [x] Prerequisite
    - [x] creating Reusable Components
    - [x] using JSX
    - [x] passing props
    - [x] using state

- **Next(framework) is combination of both frontend - backend frameworks It provides server side rendering & static generation** 

> ## React vs Next.js

- [x]  **in react entire application is loaded on the client side via javascript, request redirects to single html file javascript gets loaded and displays the application in the browser so it has fast interactive user interface vs older php type website where server compiles the data and use some template engine, so in php or server side rendering every time you want to load data a new request is made to backend for different route.**

- [x] **though the shortcoming of react apps client side rendering is it lacks SEO, as the source code do not contains the content that is bad for web crawlers.**

- [x] **Next.js overcomes this by rendering the first page as server side rendering rather than client side so it is better both performance and for SEO.**

> ## Next.js benefits
- [x] Easy page routing
- [x] API routes
- [x] Typescript & Saas
- [x] Static site generation(next export) i.e hosting on like a CDN
- [x] Easy deployement

> ## Getting started Nextjs

**https://nextjs.org/docs/getting-started**

                npm create-next-app appName --use-npm
                # --use-npm if you have installed both npm and yarn on your system this flag directs to initialize the project with npm
                
                cd appName
                npm run dev

- [x] **Anything inside public folder will be accesible from the browser**

                localhost:3000/favicon.ico

- [x] **we have styles for different components like Home.module.css for the index.js inside of pages**

- [x] **while importing styles the style should have a specific naming convention like for home page the style is Home.module.css where Home can be anything but .module.css is necessary**

- [x] **also it is not possible to import global styles inside of individual components/pages**

***

> ## Pages & Routing in Next

- **No need to use third party routers, no need to define routes simply put the different pages inside of pages folder and all pages are basically react components**

> #### To create a new page/route/component

                pages
                 - about.js
                # new file about.js

                # generate rafce template for react functional component

                # go to
                localhost:3000/about

***

> ## Head in Next.js
