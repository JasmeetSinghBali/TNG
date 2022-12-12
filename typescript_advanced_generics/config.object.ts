/**
 * @Aim is that /does-not-exist shud report an type infer error as it does not exist in routes,
 * @note fetchers is the object to pass keys that matches the route name that exist routes array
 */
export const configObject = {
    routes: ['/','/about','/contact'],
    fetchers: {
        "/does-not-exist":()=>{
            return {};
        },
    },
};

/**
 * @Solution defining a generic object interface , 
 * and then a configObj maker with idetical generic argument and previosly defined generic object
 * and use this configObj maker to declare and define the routes(possible string paths) & fetchers(check existance of the string path & what each path return)
 * 
 */

interface ConfigObject<TRoute extends string>{
    routes: TRoute[];
    fetchers: {
        [exist in TRoute]?:() => any;
    };
}

const makeConfigObj = <TRoute extends string>(config : ConfigObject<TRoute>) => config;

export const configObject2 = makeConfigObj({
    routes: ['/','/about','/contact'],
    fetchers: {
        // ✔ does-not-exist is not a valid route in routes array type infer check working properly
        "/does-not-exist":()=>{
            return {}
        },
        "/":()=>{
            return "type inferences works for objects"
        },
        // ✨ autocompletion for the possible valid routes "/", "/about", "/contact"
    }
})

