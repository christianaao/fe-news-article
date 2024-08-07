import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { getArticleByID } from "./api";
import { LoadingScreen } from "./LoadingScreen";
import { Comments } from "./Comments";
import "../CSS/SingleArticle.css";

export const SingleArticle = () => {

    const [{article}, setArticle] = useState({})
    
    const [isLoading, setIsLoading] = useState(true)

    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticleByID(article_id)
        .then((articleData) => {
            setArticle(articleData)
            setIsLoading(false)
        })
    }, [article_id])

    if(isLoading) {
        return (
            <LoadingScreen/>
        )
    }

    if (!article) {
        return <h2>Article Not Found</h2>
    }

    return (
        <section>
            <article key={article_id}>
                <h4 className="article-header">Topic: {article.topic}</h4>
                <h2 className="article-header">{article.title}</h2>
                <img src={article.article_img_url} alt={article.title} className="article-img article-header"/>
                <h3>Written By: {article.author}</h3>
                <p>{new Date(article.created_at).toLocaleTimeString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit"})}</p>
                <p>Votes: {article.votes} | Comments: {article.comment_count}</p>
                <p className="article-body">{article.body}</p>
            </article>
            <Comments/>
        </section>
    )
}