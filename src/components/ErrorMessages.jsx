export const InvalidComment = () => {
    return (
        <>
        <p className="vote-error" disabled>Please enter a valid comment</p>
        </>
    )
}

export const CommentError = () => {
    return (
        <h2>Unexpected error! Your comment has not been registered.</h2>
    )
}

export const NotLoggedInComment = () => {
    return (
        <>
        <p className="vote-error" disabled>Please login to post a comment</p>
        </>
    )
}