import React from "react";
import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "./api";
import { LoadingScreen } from "./LoadingScreen";
import { CommentError } from "./CommentError";
import { NoComments } from "./NoComments";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Votes } from "./Votes";
import "../CSS/Links.css";
import "../CSS/Comments.css";

export const Comments = ({ comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [noComments, setNoComments] = useState(true)

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleID(article_id).then(({comments}) => {
      if (comments.length === 0) {
          setIsLoading(false)
          setNoComments(true)
      } else {
          setComments(comments);
          setNoComments(false)
          setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (noComments) {
    return <NoComments />
  }

  return (
    <section className="comment-section">
      {comments.map((comment) => {
        return (
          <article className="comment-card" key={comment.comment_id}>
            <Link className="default-link" to={`/users/${comment.username}`}>
              {" "}
              {/* will need to change this from {comment.username} to {users.username} to link to users */}
              <h4>{comment.author}</h4>
            </Link>

            <p className="dates">
              {new Date(comment.created_at).toLocaleTimeString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{comment.body}</p>
            <Votes article_id={article_id} votes={comment.votes} />
            <p>Votes: {comment.votes}</p>
          </article>
        );
      })}
    </section>
  );
};
