import { useState } from "react"
import { patchVotesByArticleID } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons"
import "../CSS/Votes.css"

export const Votes = ({article_id, votes}) => {

    const [votesCount, setVotesCount] = useState(0)
    
    const [error, setError] = useState(null)

    const [disableUpVote, setDisableUpVote] = useState(false)

    const [disableDownVote, setDisableDownVote] = useState(false)

    // const handleVote = (num) => {
    //     setVotesCount((currentVotesCount) => currentVotesCount + num)
    //     setDisableButton(true)
    //     setError(null)
    //     patchVotesByArticleID(article_id, num)
    //     .catch(() => {
    //         setVotesCount((currentVotesCount) => currentVotesCount - num)
    //         setError("Unexpected error! Your vote has not been registered.")
    //     })
    // }

    const incrementVote = () => {
        setVotesCount((currentVotesCount) => {
            return currentVotesCount + 1
        })
        setError(null)
        setDisableUpVote(true)
        patchVotesByArticleID(article_id, 1)
        .catch(() => {
            setVotesCount((currentVotesCount) => {
                return currentVotesCount - 1
            })
            setDisableUpVote(false)
            setError("Unexpected error! Your vote has not been registered.")
        })
    }

    const decrementVote = () => {
        setVotesCount((currentVotesCount) => {
            return currentVotesCount - 1
        })
        setError(null)
        setDisableDownVote(true)
        patchVotesByArticleID(article_id, -1)
        .catch(() => {
            setVotesCount((currentVotesCount) => {
                return currentVotesCount + 1
            })
            setDisableDownVote(false)
            setError("Unexpected error! Your vote has not been registered.")
        })
    }

    // if (disableDownVote) {
    //     setDisableUpVote(false)
    // } else if (disableUpVote) {
    //     setDisableDownVote(false)
    // }
    
    return (
        <section className="vote-section">
                <button aria-label="up-vote" className="up-vote-button" onClick={incrementVote} disabled={disableUpVote}><FontAwesomeIcon icon={faCircleUp} size={"1x"}/>
                </button>
                <p><span aria-hidden="true">{votesCount + votes}</span>
                    <span className="visually-hidden">Current vote count: {votesCount + votes}</span></p>
                <button aria-label="down-vote" className="down-vote-button" onClick={decrementVote} disabled={disableDownVote}><FontAwesomeIcon icon={faCircleDown} size={"1x"}/>
                </button>
            
            <>
                {error ? <p className="error-message">{error}</p> : null}
            </>
        </section>
    )
}