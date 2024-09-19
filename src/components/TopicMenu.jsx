import { getArticles } from "./api";
import { useParams, useEffect, useHistory, useState } from "react";

export const TopicMenu = () => {

    const { slug } = useParams()

    console.log(slug)

    const [articles, setArticles] = useState([]);

    const [selectedTopic, setSelectedTopic] = useState("Topics")

    const handleClick = (event) => {
        setSelectedTopic(event.target.value)
        console.log(event.target.value)
        useEffect(() => {
            getArticles(event.target.value)
            .then((articleData) => {
                setArticles(articleData)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])
    }

    return (
        <section>
          <label htmlFor="topics">Topics: </label>
          <select name="topics" id="topics" value={selectedTopic} onChange={handleClick}>
            <option onChange={handleClick} value="coding">Coding</option>
            <option onChange={handleClick} value="football">Football</option>
            <option onChange={handleClick} value="cooking">Cooking</option>
          </select>
        </section>
      )
}