> # Next.js Basics with Minimal Boilerplate

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

- **Used in case of custom titles,metatags,keywords and description**

> ### **Quick source viewer extension that helps better to inspect the pages**

- **In case of react apps no content is visible hence it cannot be parsed by web crawlers only div's seen by web crawlers in react app's where next.js has the content in source code hence better SEO and parsing by the web crawlers**

***

> ## Layouts & CSS Modules (refer Layout.module.css -> Layout.js-> _add.js)

- [x] **in the _app.js it wraps all the components and props and one can have customized layouts like header,footer,navigation bar that could show up on every page**

                # example to add a appBar component to all the pages
                # just add the appBar component in the _app.js and it will show up for all the pages/components

- [x] **also global styles can be included in the _app.js that will be applied globally throughout the app**


> ### creating your own component (must add new components under components directory)

- [x] **to create components that are not routes make a seprate directory called components and add new components their**

> #### IMPORTANT Convention is to use lowercase for pages and uppercase for components

***

> ## Nav Component & Links(to go to home,about page) (refer Nav.js and Nav.module.css)

                            import Link from 'next/Link';

- [x] **IMPORTANT Also since we want the links to be on every page we can just import the Nav component inside of Layout and layout is already wrapped inside _app.js so both links and layout will be on every page**

***

> ## Conditional inline Styling jsx
                    
                    # example react component conditional styling
                    const component = ()=>{
                        const x = 5;
                        return(
                            <div>
                                <h1 className='title'>
                                    <span>Next.js</span> Basics
                                </h1>
                            </div>
                            <style jsx>
                                {`
                                    .title{
                                        color:${x > 3 ? 'red' : 'blue'};
                                    }
                                `}
                            </style>
                        )
                    }
                    
                    
***

> ## Custom Documents in Next.js
**https://nextjs.org/docs/advanced-features/custom-document**

- **say we want to add lang attribute the html tag this can be done via custom document in next.js**
- **IMPORTANT custom document is only rendered server side so cant have onclick events or stuff like that**

                # create _document.js inside of pages dir
                # refer _document.js
                # make sure every time you make changes to _document.js the server need to be restarted i.e run the command npm run dev again

                # use the quick source viewer and you will see lang attribute that we added to html tag

> #### **Better to avoid using the custom document , if the case is like to add meta tag instead use the next/head to add metatags to the pages**

***

> ## Data fetching in Next.js within pages

- [x] **like fetch data from api and then pass them as props to our pages**
- [x] **The way is to create functions inside of index.js(Home route) inside pages dir**

> #### IMPORTANT Three methods to fetch data
- [x] **getStaticProps that fetches data at build time**
- [x] **getServerSideProps that fetches data on every request which is slower than first method**
- [x] **getStaticPaths to dynamically generate paths based on the data fetched**

> ### getStaticProps
                    
                    # where apiResult holds the data fetched from internal or external api
                    return{
                        props:{
                            apiResult
                        }
                    }

                    # now this prop can be accessed inside the index.js by passing apiResult as prop to index.js component itself refer index.js
                    
                    const Home = ({apiResult})=>{
                        console.log(apiResult);
                    }

                    # then further this data can be passed as prop to other child components

***

> ## Nested Routing in Next.js

- **example route /app/articles/id that shows a detailed view of an article**

                        make a seperate folder as article inside of pages
                        make another dir called [id] inside of article
                        then index.js inside of [id] that defines a a single article

                        # to get particular article id next/router can be used refer index.js in article->[id]->index.js


---

> getServerSideProps (fetching data) (refer index.js in article->[id])

- **fetches the data at time of request**

                    the context holds the routes params of the page can be used to grab like a particular article id and then fetch data accordingly.

                    # just like staticProps the props can be returned which then can be grabbed by the page itself

> ## IMPORTANT it is always better though to use the combination of getStaticProps & getStaticPath to fetch data and then generate dynamic paths over getServerProps as the later is slow as it only fetches data on user request.

                        click on any article
                        then change the end id to say 20 though we only have 6 articles at the home still the 20 id post will be first fetched then dynamic path is set up with the getStaticPaths prop in next.

---

> Exporting a static website in next.js

                    next export

- **when deployment is done at vercel then everything is deployed however when we export it goes to a out directory that is just a static website**

                    # in package.json
                    "build": "next build && next export"

                    npm run build
                    # out dir is just a static website that can be exported

                    npm i -g serve --save
                    # serve the out folder at 8000 port
                    serve -s out -p 8000
                    
                    # go to loclhost://8000
                    # and this static website will be high speed as the data is prefetched.


                    
---

> Handling API Routes in Next.js (refer api dir)

- **much similar to express how we handle routes with some tweaks**
- **their can be external api calls, database calls from frontend via next.js**
- **Once we write our api calls inside api dir it is accessible in next.js by localhost:port/resource**
                    # automatically executes code 
                    localhost:3000/api/articles

---

> Using the API Data (refer pages->index.js)

- **to use the api fetched data inside of api dir to be used by frontend**

---

> Custom meta component (for SEO) either use thirdparty npm modules or refer Meta.js in components dir for example basic that is used in index .js article->[id] and ArticleItem

