import axios from "axios"

const api = axios.create({
    baseURL: "https://news-article-project.onrender.com/api/"
})

const searchData = (searchTerm) => {
    return api.get(`/${searchTerm}`)
    .then(({data}) => {
        return data
    })
}

const getArticles = () => {
    return api.get("/articles")
    .then(({data}) => {
        return data
    })
}

const getArticleByID = (articleID) => {
    return api.get(`/articles/${articleID}`)
    .then(({data}) => {
        return data
    })
}

const getCommentsByArticleID = (articleID) => {
    return api.get(`/articles/${articleID}/comments`)
    .then(({data}) => {
        return data
    })
}

const patchVotesByArticleID = (articleID, num) => {
    return api.patch(`/articles/${articleID}`, { inc_votes : num })
}

const postCommentByArticleID = ({article_id}, username, body) => {
    console.log(article_id)
    return api.post(`/articles/${article_id}`, { username : username, body : body})
}
export { getArticles, getArticleByID, searchData, getCommentsByArticleID, patchVotesByArticleID, postCommentByArticleID}