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

const updateVotesByArticleID = (articleID, num) => {
    return api.patch(`/articles/${articleID}`, { inc_votes : num })
}

export { getArticles, getArticleByID, searchData, getCommentsByArticleID, updateVotesByArticleID }