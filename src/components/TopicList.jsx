import { useEffect, useState } from "react";
import { getTopics } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
import { CannotLoadData } from "./ErrorMessages";
import { Link } from "react-router-dom";
import "../CSS/Topics.css"

export const Topics = () => {

    const [topics, setTopics] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getTopics()
        .then((topicsData) => {
            setTopics(topicsData)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadingScreen />;
    }
    
    if (isError) {
        return <CannotLoadData/>
    }

    return (
        <section className="section">
            {topics.map((topic) => {
                return (
                    <article className="topic-card" key={topic.slug}>
                        <Link className="article-link" to={`/articles/topic/${topic.slug}`}>
                        <h2>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</h2>
                        </Link>
                        <p>{topic.description}</p>
                    </article>
                )
            })}
        </section>
    )
}