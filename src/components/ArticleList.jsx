import { useEffect, useState } from "react"
import { getArticles } from "./api"
import "../styling/ArticleCards.css";
// import { response } from "express";

export const ArticleCards = () => {

const [articles, setArticles] = useState([])

const [isLoading, setIsLoading] = useState(true)

// const [isError, setIsError] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articleData) => {
            // if (!response.ok) {
            //     return Promise.reject()
            // }
            setArticles(articleData)
            setIsLoading(false)
        })
        // .catch((error) => {
        //     setIsError(true)
        //     setIsLoading(false)
        //     console.log("ERROR: ", error)
        // })
    }, [])

    if(isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }

    // if(isError) {
    //     return (
    //         <h3>Something went wrong.</h3>
    //     )
    // }

    return (
        <section className="article-card">
            {articles.map((article) => 
            <article key={article.article_id}>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title}/>
            <h3>Written By: {article.author}</h3>
            <h4>Topic: {article.topic}</h4>
            <p>Created: {new Date(article.created_at).toLocaleDateString()}</p>
            <p>Votes: {article.votes} | Comments: {article.comment_count}</p>
            </article>
        )}
        </section>
    )
}