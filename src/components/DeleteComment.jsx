import { deleteCommentByCommentID } from "./api"
import { DeleteCommentError } from "./ErrorMessages"
import { DeletingCommentButton } from "./LoadingStatuses"
import { useState } from "react"

export const DeleteComment = ({comment_id, setComments}) => {

    const [error, setError] = useState(null)

    const [isCommentDeleting, setIsCommentDeleting] = useState(false)

    const handleDelete = (event) => {
        event.preventDefault()
        setIsCommentDeleting(true)
        deleteCommentByCommentID(comment_id)
        .then(() => {
            setComments((commentsData) => {
                const renderedComments = commentsData.filter((comment) => {
                    return comment.comment_id !== comment_id
                })
                return renderedComments
            })
            setIsCommentDeleting(false)
            setError(null)
        })
        .catch((err) => {
            console.log(err);
            setError(err)
        })
    }
    
    if (error) {
        return <DeleteCommentError message={error.message}/>
    }

    function DeleteButton() {
        if (isCommentDeleting) {
            return <DeletingCommentButton/>
        } else {
            return (
                <button className="default-button delete" onClick={handleDelete}>Delete Comment</button>
            )
    }
}
    return (
        <div className="delete-button-section">
            <DeleteButton/>
        </div>
    )
}