import { useEffect, useState } from "react";
import { getArticles } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
// import { Link } from "react-router-dom";
import "../CSS/ArticleCards.css";
import { ArticleCards } from "./ArticleCards";
// import { response } from "express";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articleData) => {
        // if (!response.ok) {
        //     return Promise.reject()
        // }
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log("ERROR: ", error);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <h3>Something went wrong.</h3>;
  }

  return <ArticleCards articles={articles} />;
};
