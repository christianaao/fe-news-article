import axios from "axios"

const api = axios.create({
    baseURL: "https://news-article-project.onrender.com/api/"
})

const searchData = (searchTerm) => {
    return api.get(`/${searchTerm}`)
    .then(({data}) => {
        console.log(data)
        console.dir(data)
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}

const getArticles = () => {
    return api.get("/articles")
    .then(({data}) => {
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}

const getArticleByID = (articleID) => {
    return api.get(`/articles/${articleID}`)
    .then(({data}) => {
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}
export { getArticles, getArticleByID, searchData }