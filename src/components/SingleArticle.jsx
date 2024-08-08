import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { getArticleByID } from "./api";
import { LoadingScreen } from "./LoadingScreen";
import { Comments } from "./Comments";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";
import "../CSS/SingleArticle.css";

export const SingleArticle = () => {

    const [article, setArticle] = useState({})
    
    const [isLoading, setIsLoading] = useState(true)

    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticleByID(article_id)
        .then((articleData) => {
            setArticle(articleData.article)
            setIsLoading(false)
        })
    }, [article_id])

    if(isLoading) {
        return (
            <LoadingScreen/>
        )
    }

    return (
        <section>
            <article key={article_id}>
                <h4 className="article-header">Topic: <Link className="default-text default-link" to={"/topics/"}>{article.topic}</Link></h4>
                <h2 className="article-header">{article.title}</h2>
                <img src={article.article_img_url} alt={article.title} className="article-img article-header"/>
                <h3>Written By: <Link className="default-text default-link" to={`/users/${article.username}`}>{article.author}</Link></h3>
                <p>{new Date(article.created_at).toLocaleTimeString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit"})}</p>
                <p className="article-body">{article.body}</p>
            </article>
            <Votes article_id={article_id} votes={article.votes}/>
            <p>{article.votes}</p> 

            <h5>{article.comment_count} Comments</h5>
            <Comments/>
        </section>
    )
}