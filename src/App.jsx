import { useState } from 'react'
import "./styling/App.css"
import { Header } from './components/Header'
import { ArticleCards } from './components/ArticleCards'

function App() {
    return (
        <div>
            <Header/>
            <ArticleCards/>
        </div>
    )
}

export default App