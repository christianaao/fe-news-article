import { useState, useContext } from "react"
import { postCommentByArticleID } from "./api"
import { UserContext } from "../context/User"

export const NewComment = ({article_id, setComments}) => {

    const {user, setUser} = useContext(UserContext)

    const [newCommentInput, setNewCommentInput] = useState("")

    const [invalidComment, setInvalidComment] = useState(false)

    function handleCommentChange(event) {
        const value = event.target.value
        setNewCommentInput(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!user.username) {
            setInvalidComment(true)
            alert("Please login to post a comment.")
        } else if (!newCommentInput) {
            setInvalidComment(true)
        } else {
            setInvalidComment(false)
            return postCommentByArticleID(article_id, user.username, newCommentInput)
            .then((commentData) => {
                setComments((currentComments) => {
                    return [commentData.data.comment, ...currentComments]
                })
                setNewCommentInput("")
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
                    value={newCommentInput}
                    type="text"></input>
                <button className="default-button post-comment-button">Comment</button>
            </form>
        </section>
    )
}