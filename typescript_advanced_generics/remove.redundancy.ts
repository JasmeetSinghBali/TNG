/**
 * @Aim - to remove data redundancy/duplication i.e making these DRY(dont repeat yourself)
 * @simulates a real response object data that can be of different types related to an success axios response
 */

interface UserData {
    data: {
        id: string;
        firstName: string;
        lastName: string;
    }
}

interface PostData {
    data: {
        title: string;
    }
}

interface CommentData {
    data: {
        comment: string;
    }
}


/**@Solution with data wrapper generic */

/**
 * @argument T act as function argument to infer the data when DataWrapper interface is used 
 * the T represents the generic,placeholder for any type that comes in
 * & <> is function call of this generic type
 * @note T can be called any arbitary name TData, TJson, Thing
 * @note more than one type argument can be pass to this interface <T1,T2,T3>
 */
interface DataWrapper<TData> {
    data: TData;
}
// or
// type DataWrapper<TData> {
//     data: TData;
// }

/** 
 * @representationOnly of DataWrapper, dataWrapper can be visualized as a dataWrapper function with thing or TData as functional argument that infers the data when its called with a specific structure of data */
const dataWrapper = (thing: any) => {
    return {
        data: thing
    }
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

/**
 * @callingGenericInterface calling DataWrapper Generic Interface with argument as type that replaces the generics placeholder TData
 */
type UserDTO = DataWrapper<{
    id: number;
    firstName: string;
    lastName: string;
}>
// or
// type UserDTO = DataWrapper<User>

const user: UserDTO ={
    data: {
        id: 1,
        firstName: 'Jason' ,
        lastName:  'Mamoa'
    }
}

type CommentDTO = DataWrapper<{
    comment: string;
}>

const comment: CommentDTO = {
    data:{
        comment: 'generics in typescript is noice.'
    }
}

type PostDTO = DataWrapper<{
    title: string;  
}>

const post: PostDTO = {
    data: {
        title: 'this is a post title'
    }
}