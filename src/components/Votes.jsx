import { useEffect, useState } from "react"
import { updateVotesByArticleID } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons"
import "../CSS/Votes.css"

export const Votes = (article_id) => {

    const [votesCount, setVotesCount] = useState(0)

    useEffect(() => {
        updateVotesByArticleID(article_id)
        .then((votesData) => {
            setVotesCount(votesData)
        })
    }, [])
    
    const incrementVote = () => {
        setVotesCount((currentVotesCount) => {
            return currentVotesCount + 1
        })
        updateVotesByArticleID(article_id)
        .catch(() => {
            setVotesCount((currentVotesCount) => {
                return currentVotesCount - 1
            })
        })
    }

    const decrementVote = () => {
        setVotesCount((currentVotesCount) => {
            return currentVotesCount - 1
        })
        updateVotesByArticleID(article_id)
        .catch(() => {
            setVotesCount((currentVotesCount) => {
                return currentVotesCount + 1
            })
            return (
                // get help on how to show error message
                <p>Unexpected Error. Your vote has not been registered.</p>
            )
        })
    }

    return (
        <section className="vote-section">
            <button className="up-vote-button" onClick={incrementVote}><FontAwesomeIcon icon={faCircleUp} size={"2x"}/>
            </button>
            <p>{votesCount}</p>
            <button className="down-vote-button" onClick={decrementVote}><FontAwesomeIcon icon={faCircleDown} size={"2x"}/>
            </button>
        </section>
    )
}