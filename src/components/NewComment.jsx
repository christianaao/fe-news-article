import { useState, useContext } from "react";
import { postCommentByArticleID } from "./api";
import { UserContext } from "../context/User";

export const NewComment = ({ article_id, setComments }) => {
  const { user, setUser } = useContext(UserContext);

  const [newCommentInput, setNewCommentInput] = useState("");

  const [invalidComment, setInvalidComment] = useState(null);

  function handleCommentChange(event) {
    const value = event.target.value;
    setNewCommentInput(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.username) {
      setInvalidComment("Please login to post a comment.");
    } else if (newCommentInput === "") {
      setInvalidComment("Please enter a valid comment");
    } else {
      setInvalidComment(null);
      return postCommentByArticleID(article_id, user.username, newCommentInput)
        .then((commentData) => {
          setComments((currentComments) => {
            return [commentData.data.comment, ...currentComments];
          });
          setNewCommentInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <section>
      <h2>Post a Comment</h2>
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
        <button className="default-button post-comment-button">Comment</button>
      </form>
    </section>
  );
};
