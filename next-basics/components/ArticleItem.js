import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({article}) => {
    return (
        
            <Link href={`/article/${article.id}`} >
                <a className={articleStyles.card}>
                    <h4 key = {article.id}>{article.title} &rarr;</h4>
                    <p>{article.excerpt}</p>
                </a>
            </Link>
        
    )
}

export default ArticleItem
