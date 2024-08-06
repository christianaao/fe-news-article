import "./styling/App.css"
import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import { ArticleCards } from './components/ArticleList'
import { SingleArticle } from './components/SingleArticle'
import SearchBar from "./components/SearchBar";
// import SearchResults from "./components/SearchResults";

function App() {
    return (
        <div>
            <Header/>
            {/* <SearchResults/> */}
            <SearchBar/>
            <SingleArticle/>
            <ArticleCards/>
            {/* <Routes>
                <Route path="/" element={HomePage}/>
                <Route path="/articles" element={ArticleCards}/>
                <Route path="/articles/:article_id" element={SingleArticle}/>
            </Routes> */}

        </div>
    )
}

export default App