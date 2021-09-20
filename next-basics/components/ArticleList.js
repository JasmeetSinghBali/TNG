import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            <h1>FakeData from jsonplaceholder...posts</h1>
            {articles.map((article)=>(
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

export default ArticleList
