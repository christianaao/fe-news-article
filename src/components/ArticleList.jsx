import { useRouter, useEffect, useState } from "react";
import { getArticles } from "./api";
import { LoadingScreen } from "./LoadingStatuses";
import "../CSS/ArticleCards.css";
import { ArticleCards } from "./ArticleCards";
import { CannotLoadData } from "./ErrorMessages";
import { Link, useParams, useSearchParams } from "react-router-dom";
// import { TopicMenu } from "./TopicMenu";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const { slug } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  // const router = useRouter()

  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

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

  console.log(slug, sortByQuery, orderQuery)

  useEffect(() => {
    setIsLoading(true);
    getArticles(slug, sortByQuery, orderQuery)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [slug, sortByQuery, orderQuery]);

  // function handleChange(event) {
  //   router.push(`/${event.target.value}`)
  // }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    <CannotLoadData/>
  }

  return (
    <section>
      <button onClick={() => setOrderQuery("ASC")}>ascending</button>
      <button onClick={() => setOrderQuery("DESC")}>descending</button>

      <label htmlFor="sort-by-query">Sort by: </label>
      <select name="sort-by-query" id="sort-by-query">
        <option onChange={() => setSortByQuery("created_at")} value="title">Date</option>
        <option onChange={() => setSortByQuery("title")} value="title">Title</option>
        <option onChange={() => setSortByQuery("author")} value="title">Author</option>
        <option onChange={() => setSortByQuery("votes")} value="title">Votes</option>
        <option onChange={() => setSortByQuery("comment_count")} value="title">Comments</option>
      </select>
      {/* <TopicMenu slug={slug}/> */}
      {/* <label htmlFor="topics">Topics: </label>
      <select name="topics" id="topics">
        <Link className="article-link" to="/articles/topic/coding"><option value="coding">Coding</option></Link>
        <option onClick={() => setTopic("football")} value="football">Football</option>
        <option onClick={() => setTopic("cooking")} value="cooking">Cooking</option>
        <option onClick={<Link className="article-link" to={`/articles/topic/coding`}></Link>} value="coding">Coding</option>
      </select> */}
      <ArticleCards articles={articles} />
    </section>
  )
}