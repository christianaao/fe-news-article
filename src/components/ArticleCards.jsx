import "../CSS/ArticleCards.css";
import "../CSS/Links.css"
import React from "react";
import { Link } from "react-router-dom";

export const ArticleCards = (props) => {
  const { articles } = props;
  
  return (
    <section>
      {articles.map((article) => {
        return (
          <article className="article-card" key={article.article_id}>
              <Link className="article-link" to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
                <img src={article.article_img_url} alt={article.title} className="article-img"/>
              </Link>

              <h3>Written By: <Link className="default-text default-link" to={`/users/${article.username}`}>{article.author}</Link></h3>
              <h4>Topic: <Link className="default-text default-link" to={"/topics/"}>{article.topic}</Link></h4>
              <p>
                Created: {new Date(article.created_at).toLocaleDateString('en-GB')}
              </p>
              <p>
                Votes: {article.votes} | Comments: {article.comment_count}
              </p>
            </article>
        );
      })}
    </section>
  );
};
