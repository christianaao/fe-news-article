import { useState } from "react"
import { updateVotesByArticleID } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons"
import "../CSS/Votes.css"

export const Votes = ({article_id, votes}) => {

    const [votesCount, setVotesCount] = useState(0)

    const handleVote = (num) => {
        setVotesCount((currentVotesCount) => {
            return currentVotesCount + num
        })
        updateVotesByArticleID(article_id, num)
        .catch(() => {
            setVotesCount((currentVotesCount) => {
                return currentVotesCount - num
            })
        })
    }
    
console.log("current votes:", votes, "click count: ", votesCount)
    return (
        <section className="vote-section">
            <button className="up-vote-button" onClick={() => handleVote(1)}><FontAwesomeIcon icon={faCircleUp} size={"1x"}/>
            </button>
            <button className="down-vote-button" onClick={() => handleVote(-1)}><FontAwesomeIcon icon={faCircleDown} size={"1x"}/>
            <p>{votesCount + votes}{console.log("final vote amount: ", votesCount + votes)}</p>
            </button>
        </section>
    )
}