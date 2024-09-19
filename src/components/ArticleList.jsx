import { useEffect, useState } from "react";
import { getArticles } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
import "../CSS/ArticleCards.css";
import { ArticleCards } from "./ArticleCards";
import { CannotLoadData } from "./ErrorMessages";
import { useParams, useSearchParams } from "react-router-dom";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  // const { slug } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  console.dir(searchParams)

  console.dir(setSearchParams)

  const topic = searchParams.get("topic")
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setTopic = (slug) => {
    const newTopic = new URLSearchParams(searchParams)
    newTopic.set("topic", slug)
    setSearchParams(newTopic)
  }
// console.log(slug)

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    <CannotLoadData/>
  }

  return (
    <section>
      <label htmlFor="topics">Topics: </label>
      <select name="topics" id="topics">
        <option onClick={() => setTopic("coding")} value="coding">Coding</option>
        <option onClick={() => setTopic("football")} value="football">Football</option>
        <option onClick={() => setTopic("cooking")} value="cooking">Cooking</option>
      </select>
      <ArticleCards articles={articles} />
    </section>
  )
};
