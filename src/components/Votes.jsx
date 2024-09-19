import { useState } from "react"
import { patchVotesByArticleID } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons"
import "../CSS/Votes.css"

export const Votes = ({article_id, votes}) => {

    const [votesCount, setVotesCount] = useState(0)
    
    const [error, setError] = useState(null)

    const handleVote = (num) => {
        setVotesCount((currentVotesCount) => currentVotesCount + num)
        setError(null)
        patchVotesByArticleID(article_id, num)
        .catch(() => {
            setVotesCount((currentVotesCount) => currentVotesCount - num)
            setError("Unexpected error! Your vote has not been registered.")
        })
    }
    
    return (
        <section className="vote-section">
                <button aria-label="up-vote" className="up-vote-button" onClick={() => handleVote(1)}><FontAwesomeIcon icon={faCircleUp} size={"1x"}/>
                </button>
                <p><span aria-hidden="true">{votesCount + votes}</span>
                    <span className="visually-hidden">Current vote count: {votesCount + votes}</span></p>
                <button aria-label="down-vote" className="down-vote-button" onClick={() => handleVote(-1)}><FontAwesomeIcon icon={faCircleDown} size={"1x"}/>
                </button>
            <>
                {error ? <p className="vote-error">{error}</p> : null}
            </>
        </section>
    )
}