export const CannotLoadData = () => {
    return (
        <p className="error-message">Something went wrong. Could not load data.</p>
    )
}

export const InvalidComment = () => {
    return (
        <>
        <p className="error-message" disabled>Please enter a valid comment</p>
        </>
    )
}

export const CommentError = () => {
    return (
        <p className="error-message">Unexpected error! Your comment has not been registered.</p>
    )
}

export const DeleteCommentError = () => {
    return (
        <p className="error-message">Unexpected error! Your comment has not been deleted.</p>
    )
}

export const NotLoggedInComment = () => {
    return (
        <>
        <p className="error-message" disabled>Please login to post a comment</p>
        </>
    )
}