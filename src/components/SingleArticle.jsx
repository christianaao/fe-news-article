import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { getArticleByID } from "./api";

export const SingleArticle = () => {

    const [article, setArticle] = useState({})

    const { article_id } = useParams()
    console.log(article_id)

    useEffect(() => {
        getArticleByID(article_id)
        .then((articleData) => {
            setArticle(articleData)
        })
    }, [article_id])

    if (!article) {
        return <h2>Article Not Found</h2>
    }

    return (
        <section>
            <p>Article ID: {article_id}</p>
        </section>
    )
}