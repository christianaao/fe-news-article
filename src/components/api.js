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

const getTopics = () => {
    return api.get("/topics")
    .then(({data}) => {
        return data
    })
}

const getArticles = (topic, sortByQuery, orderQuery) => {
    return api.get("/articles", { params: { topic: topic, sort_by: sortByQuery, order: orderQuery }})
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

const postCommentByArticleID = (article_id, username, body) => {
    return api.post(`/articles/${article_id}/comments`, { username : username, body : body})
}

const deleteCommentByCommentID = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}

export { getTopics, getArticles, getArticleByID, searchData, getCommentsByArticleID, patchVotesByArticleID, postCommentByArticleID, deleteCommentByCommentID }