import React from "react";
import { useEffect, useState } from "react"
import { getCommentsByArticleID } from "./api"
import { LoadingScreen } from "./LoadingScreen";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "../CSS/Links.css"
import "../CSS/Comments.css"

export const Comments = () => {

    const [{comments}, setComments] = useState([])

    console.dir(comments)
    const [isLoading, setIsLoading] = useState(true)

    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((commentsData) => {
            setComments(commentsData)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return (
            <LoadingScreen/>
        )
    }

    return (
        <section className="comment-section">
            {/* <h2>Comments</h2> */}
            {comments.map((comment) => {
                return (
                    <article className="comment-card" key={comment.comment_id}>
                        <Link className="user-link" to={`/users/${comment.username}`}>{/* will need to change this from {comment.username} to {users.username} to link to users */}
                            <h4>{comment.author}</h4>
                        </Link>

                        <p>{new Date(comment.created_at).toLocaleTimeString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit"})}</p>
                        <p>{comment.body}</p>
                        <p>{comment.votes}</p>
                    </article>
                )
            })}
        </section>
    )
}