// General

export const CannotLoadData = ({message}) => {
    return (
        <div className="error-message">
            <h2>Error</h2>
            <h3>Something went wrong! Could not load data.</h3>
            <p>{message}</p>
        </div>
    )
}

// Votes

export const VoteError = ({message}) => {
    return (
        <div className="error-message">
            <h2>Error</h2>
            <h3>Unexpected error! Your vote has not been registered.</h3>
            <p>{message}</p>
        </div>
    )
}

// Comments

export const InvalidComment = () => {
    return (
        <p className="error-message" disabled>Please enter a valid comment.</p>
    )
}

export const CommentError = ({message}) => {
    return (
        <div className="error-message">
            <h2>Error</h2>
            <h3>Unexpected error! Your comment has not been registered.</h3>
            <p>{message}</p>
        </div>
    )
}

export const DeleteCommentError = ({message}) => {
    return (
        <div className="error-message">
            <h2>Error</h2>
            <h3>Unexpected error! Your comment has not been deleted.</h3>
            <p>{message}</p>
        </div>
    )
}

export const NotLoggedInComment = () => {
    return (
        <p className="error-message" disabled>Please login to post a comment.</p>
    )
}