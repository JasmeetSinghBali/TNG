import { Resolver, Query } from 'type-graphql';

// 🍖Graphql Schema goes here🍖
@Resolver()
export class UserResolver{
    
    @Query(()=> String)
    hello(){
        return 'hi'
    }   
}