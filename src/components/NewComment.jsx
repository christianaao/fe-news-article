import { useState, useContext } from "react";
import { postCommentByArticleID } from "./api";
import { LoadingPostButton } from "./LoadingStatuses";
import { UserContext } from "../context/User";
import { CommentError, InvalidComment, NotLoggedInComment } from "./ErrorMessages";
import "../CSS/Comments.css"

export const NewComment = ({ article_id, setComments }) => {
  const { user, setUser } = useContext(UserContext);

  const [isloggedIn, setIsLoggedIn] = useState(true)

  const [newCommentInput, setNewCommentInput] = useState("");

  const [invalidComment, setInvalidComment] = useState(false);

  const [isCommentLoading, setIsCommentLoading] = useState(false);

  const [disableButton, setDisableButton] = useState(false);

  function handleCommentChange(event) {
    const value = event.target.value;
    setNewCommentInput(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.username) {
      setIsLoggedIn(false)
      setDisableButton(true)
    } else if (newCommentInput === "") {
      setInvalidComment(true);
      setDisableButton(true) //figure out how to make it refresh
    } else {
      setDisableButton(false)
      setInvalidComment(false);
      setIsCommentLoading(true);
      return postCommentByArticleID(article_id, user.username, newCommentInput)
        .then((commentData) => {
          setComments((currentComments) => {
            return [commentData.data.comment, ...currentComments];
          });
          setNewCommentInput("");
          setIsCommentLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // Error Handling
function CommentErrors() {
  if (!isloggedIn) {
    return <NotLoggedInComment />
  } else if (invalidComment) {
    return <InvalidComment/>
  }
}

  function CommentButton() {
    if (disableButton) {
      return (
      <button className="default-button loading" disabled>Comment</button>
      )
    } else if(isCommentLoading) {
      return <LoadingPostButton />
    } else {
      return (
        <button className="default-button">Comment</button>
      )
    }
  }

  return (
    <section>
      <h3 className="comment-section-header">Post a Comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-textarea"></label>
        <textarea
          aria-label="type-your-comment-here"
          id="comment-textarea"
          onChange={handleCommentChange}
          placeholder="Add a comment"
          value={newCommentInput}
          maxLength={2000}
          wrap="soft"
          rows={1}
          type="text"
        ></textarea>
        <div className="comment-error">{/* add error message for empty comment */}</div>
        {<CommentButton/>}
      </form>
        <div>
        {<CommentErrors/>}
        </div>
    </section>
  );
};
