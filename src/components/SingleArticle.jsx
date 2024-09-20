import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
import { Comments } from "./Comments";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";
import "../CSS/SingleArticle.css";
import { NewComment } from "./NewComment";
import { CannotLoadData } from "./ErrorMessages";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});

  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(article_id)
      .then((articleData) => {
      setArticle(articleData.article);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setError(err);
      setIsLoading(false)
    })
  }, [article_id]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (error) {
    return <CannotLoadData message={error.message}/>
  }

  return (
    <section>
      <article key={article_id}>
        <h3 className="article-header">
          Topic:{" "}
          <Link className="default-text default-link" to={`/articles?topic=${article.topic}`}>
            {article.topic}
          </Link>
        </h3>
        <h2 className="article-header">{article.title}</h2>
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-img article-header"
        />
        <h3>
          Written By:{" "}
          <Link
            className="default-text default-link"
            to={`/users/${article.username}`}
          >
            {article.author}
          </Link>
        </h3>{" "}
        {/*need to go to backend and complete task 17 to allow search by username*/}
        <p>
          {new Date(article.created_at).toLocaleTimeString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="article-body">{article.body}</p>
      </article>
      <section className="article-interaction">
        <h3>Let us know what you think!</h3>
        <div className="article-interaction-info">
          <Votes article_id={article_id} votes={article.votes} />
          <h5>{article.comment_count} Comments</h5>
        </div>
        <NewComment article_id={article_id} setComments={setComments} />
        <Comments comments={comments} setComments={setComments} />
      </section>
    </section>
  );
};
