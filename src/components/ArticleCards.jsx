import { useEffect, useState } from "react"
import { getArticles } from "./api"
import "../styling/ArticleCards.css";


export const ArticleCards = () => {

const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        .then((articleData) => {
            setArticles(articleData)
        })
    }, [])
    
    return (
        <section className="article-card">
            <p>{console.log(articles)}</p>
            {articles.map((article) => 
            <article key={article.article_id}>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title}/>
            <h3>Written By: {article.author}</h3>
            <h4>Topic: {article.topic}</h4>
            <p>{article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            </article>
        )}
        </section>
    )
}