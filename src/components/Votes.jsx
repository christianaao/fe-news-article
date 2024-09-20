import { useState } from "react"
import { patchVotesByArticleID } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons"
import "../CSS/Votes.css"
import { VoteError } from "./ErrorMessages"

export const Votes = ({article_id, votes}) => {

    const [votesCount, setVotesCount] = useState(0)
    
    const [error, setError] = useState(null)

    const handleVote = (num) => {
        setVotesCount((currentVotesCount) => currentVotesCount + num)
        setError(null)
        patchVotesByArticleID(article_id, num)
        .catch((err) => {
            console.log(err)
            setVotesCount((currentVotesCount) => currentVotesCount - num)
            setError(err)
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
                {error ? <VoteError message={error.message}/> : null}
            </>
        </section>
    )
}