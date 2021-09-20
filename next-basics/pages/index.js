import Head from 'next/head';
import ArticleList from '../components/ArticleList';


export default function Home({articles}) {
  // console.log(articles);
  return (
    <>
      <Head>
        <title>Main section</title>
        <meta name='keywords' content='main section'/>
      </Head>
      <ArticleList articles={articles}/>
    </>
  )
}

export const getStaticProps = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}