import axios from "axios"

const api = axios.create({
    baseURL: "https://news-article-project.onrender.com/api/"
})

const getArticles = () => {
    return api.get("/articles")
    .then(({data}) => {
        console.log(data)
        console.dir(data)
        return data
    })
}

export { getArticles }