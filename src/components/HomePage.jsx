import { getArticleByID, getArticles } from "./api";
import { useState, useEffect } from "react";

export default function ItemsList (){
    const [items, setItems] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        getArticleByID() // not sure how to get multiple item searches e.g. for topics, users etc
        .then((items) => {
            setItems(items)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <section className="items-card">
            <ul>
            <p>{console.log(item)}</p>
               {items.map((item)=>
                <li key={item.item_id}>
                    {/* to add html tags */}
                </li>
               )}
            </ul>
        </section>
    )
}