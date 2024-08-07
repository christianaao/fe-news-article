import "./CSS/App.css"
import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import { SingleArticle } from './components/SingleArticle'
import { ArticleList } from "./components/ArticleList"
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Routes>
                <Route path="/" element={<ArticleList/>}/>
                <Route path="/articles/:article_id" element={<SingleArticle/>}/>
            </Routes>
        </div>
    )
}

export default App