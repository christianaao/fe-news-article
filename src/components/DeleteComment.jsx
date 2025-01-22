import { deleteCommentByCommentID } from "./api"
import { DeleteCommentError } from "./ErrorMessages"
import { DeletingCommentButton } from "./LoadingStatuses"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "../CSS/Delete.css"

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
                <button className="delete" onClick={handleDelete}> <FontAwesomeIcon icon={faTrash}/></button>
            )
    }
}
    return (
        <div className="delete-button-section">
            <DeleteButton/>
        </div>
    )
}