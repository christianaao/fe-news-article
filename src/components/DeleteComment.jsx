import { deleteCommentByCommentID } from "./api"
import { DeleteCommentError } from "./ErrorMessages"
import { useEffect, useState } from "react"
import { Comments } from "./Comments"

export const DeleteComment = ({comment_id, comments, setComments}) => {

    const [error, setError] = useState(false)

    // useEffect(() => {

    // })
    const handleDelete = (event) => {
        event.preventDefault()
        deleteCommentByCommentID(comment_id)
        .then(() => {
            console.dir(comments)
            setComments((commentsData) => {
                console.log(commentsData)
                commentsData - commentsData[0]
            })
            setError(false)
        })
        .catch((err) => {
            console.log(err);
            setError(true)
        })
    }

    // if(refreshComments) {
    //     return <Comments />
    // }

    if (error) {
        return <DeleteCommentError/>
    }

    return (
        <button onClick={handleDelete}>Delete Comment</button>
    )
}