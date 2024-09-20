import { useEffect, useState } from "react";
import { getArticles } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
import "../CSS/ArticleCards.css";
import { ArticleCards } from "./ArticleCards";
import { CannotLoadData } from "./ErrorMessages";
import { useSearchParams } from "react-router-dom";
import "../CSS/Filters.css"

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams()
  
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const topic = searchParams.get("topic")

  const setSortByQuery = (sortQuery) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set("sort_by", sortQuery)
    setSearchParams(newParams)
  }

  const setOrderQuery = (direction) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set("order", direction)
    setSearchParams(newParams)
  }

  const setTopic = (topicFilter) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set("topic", topicFilter)
    console.log(topicFilter)
    setSearchParams(newParams)
  }

  console.log(topic, sortByQuery, orderQuery)

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortByQuery, orderQuery)
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
        <div className="filter-section">
          <label htmlFor="topics">Topics: </label>
          <select className="filter" name="topics" id="topics" value={topic || ""} onChange={event => setTopic(event.target.value)}>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>

          <label htmlFor="sort-by-query">Sort by: </label>
          <select className="filter" name="sort-by-query" id="sort-by-query" value={sortByQuery || ""} onChange={event => setSortByQuery(event.target.value)}>
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>

          <label htmlFor="order-query">Order: </label>
          <select className="filter" name="order-query" id="order-query" value={orderQuery || ""} onChange={event => setOrderQuery(event.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      <ArticleCards articles={articles} />
    </section>
  )
}