import Meta from '../../../components/Meta';
import {server} from '../../../config';
import Link from 'next/link';   
import {useRouter} from 'next/router';

const article = ({article}) => {
    // const router =  useRouter();
    // const {id} = router.query

    return (
        <>  
            <Meta title={article.title} description ={article.description} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>            
        </>
        
    )
}

export const getStaticProps = async(context)=>{
    const res = await fetch(`${server}/api/articles/${context.params.id}`);

    const article = await res.json();

    return {
        props:{
            article
        }
    }
}

// dynamic path generation
export const getStaticPaths = async()=>{
    const res = await fetch(`${server}/api/articles/`);

    const articles = await res.json();

    const ids = articles.map(article=> article.id );
    const paths= ids.map(id=>({params:{id:id.toString()}}));
    // now paths hold every id of the article
    // paths:{
    //     params:{
    //         id: '1',id:'2',id:'3'
    //     }
    // }
    return {
        paths,
        fallback: false
    }// fallback false returns 404 page if their is no valid id found in paths
}

// export const getServerSideProps = async(context)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props:{
//             article
//         }
//     }
// }

// much faster than serverProps and can be used when we just want to display static pages
// export const getStaticProps = async(context)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props:{
//             article
//         }
//     }
// }

// // dynamic path generation
// export const getStaticPaths = async()=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//     const articles = await res.json();

//     const ids = articles.map(article=> article.id );
//     const paths= ids.map(id=>({params:{id:id.toString()}}));
//     // now paths hold every id of the article
//     // paths:{
//     //     params:{
//     //         id: '1',id:'2',id:'3'
//     //     }
//     // }
//     return {
//         paths,
//         fallback: false
//     }// fallback false returns 404 page if their is no valid id found in paths
// }

export default article
