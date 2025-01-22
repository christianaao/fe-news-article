import "../CSS/LoadingStatuses.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export const LoadingScreen = () => {
    return (
        <>
        <h2><span aria-hidden="true">Loading...</span></h2>
        <p><span className="visually-hidden">Website is currently loading</span></p>
        </>
    )
}

export const LoadingPostButton = () => {
    return (
        <>
        <button className="default-button loading" disabled>Posting...</button>
        </>
    )
}

export const DeletingCommentButton = () => {
    return (
        <>
        <button className="delete-button-loading" disabled><FontAwesomeIcon icon={faSpinner} /></button>
        </>
    )
}

export const NoComments = () => {
    return (
        <h3>No comments here yet! Be the first to post a comment.</h3>
    )
}