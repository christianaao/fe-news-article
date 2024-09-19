import "./CSS/App.css"
import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import { SingleArticle } from './components/SingleArticle'
import { ArticleList } from "./components/ArticleList"
import SearchBar from "./components/SearchBar";
import { Topics } from "./components/Topics";
import { TopicArticle } from "./components/TopicArticles";

function App() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Routes>
                <Route path="/topics" element={<Topics/>}/>
                <Route path="/" element={<ArticleList/>}/>
                <Route path="/articles" element={<ArticleList/>}/>
                <Route path="/articles/:article_id" element={<SingleArticle/>}/>
                <Route path="/articles?topic=:slug" element={<TopicArticle/>}/>

            </Routes>
        </div>
    )
}

export default App