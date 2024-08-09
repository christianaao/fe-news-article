import { useState, useContext } from "react"
import { postCommentByArticleID } from "./api"
import { UserContext } from "../context/User"

export const NewComment = (article_id) => {

    const {user, setUser} = useContext(UserContext)

    const [newComment, setNewComment] = useState("")

    const [invalidComment, setInvalidComment] = useState(false)

    function handleCommentChange(event) {
        const value = event.target.value
        setNewComment(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!user.username) {
            setInvalidComment(true)
            alert("Please login to post a comment.")
        } else if (!newComment) {
            setInvalidComment(true)
        } else {
            setInvalidComment(false)
            return postCommentByArticleID(article_id, user.username, newComment)
            .then((commentData) => {
                setNewComment((currentComments) => [...currentComments, newComment])
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <section>
            <h2>Post a Comment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment-input"></label>
                <input
                    id="comment-input"
                    onChange={handleCommentChange}
                    placeholder="Add a comment"
                    value={newComment}
                    type="text"></input>
                <button className="default-button post-comment-button">Comment</button>
            </form>
        </section>
    )
}