// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { LoadingScreen } from "./LoadingStatuses";
// import { ArticleCards } from "./ArticleCards";
// import { getArticleByTopic } from "./api";
// import { CannotLoadData } from "./ErrorMessages";

// export const TopicArticle = () => {

//     const [articles, setArticle] = useState({});

//     const [isLoading, setIsLoading] = useState(true);

//     const [isError, setIsError] = useState(false);

//     const { slug } = useParams()

//     console.log(useParams)

//     console.dir(slug)

//     console.log(articles)

//     useEffect(() => {
//         setIsLoading(true);
//         getArticleByTopic(slug)
//         .then((articleData) => {
//             console.log(articleData)
//             setArticle(articleData.article)
//             setIsLoading(false)
//         })
//         .catch((err) => {
//             console.log(err)
//             setIsError(true);
//             setIsLoading(false)
//         })
//     }, [slug])

//     if (isLoading) {
//         return <LoadingScreen/>
//     }

//     if (isError) {
//         <CannotLoadData/>
//       }

//     return <ArticleCards articles={articles}/>
// }