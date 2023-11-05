import { useState } from 'react'
import '../styles/ballot.css'

export default function Ballot(props) {
    const [disableVote, setDisableVote] = useState(false)
    const [upVoteCount, setUpVoteCount] = useState('')
    const [downVoteCount, setDownVoteCount] = useState('')
    const [upVotePct, setUpVotePct] = useState('')
    const [downVotePct, setDownVotePct] = useState('')

    const mediaID = props.id
    const handleVote = (vote) => {
        // submit vote and user's id/ip/whatever to db
        
        if (vote == 1) {
            props.media.up_votes++
        } else {
            props.media.down_votes++
        }
        
        setDisableVote(true)
        setUpVoteCount(props.media.up_votes)
        setUpVotePct(`${props.media.up_votes / (props.media.up_votes + props.media.down_votes) * 100} %`)
        setDownVoteCount(props.media.down_votes)
        setDownVotePct(`${props.media.down_votes / (props.media.up_votes + props.media.down_votes) * 100} %`)
    }

    return (
        <div className="ballot-container">
            <button className="ballot-button" id="up-vote" onClick={ () => { handleVote(1) }} disabled={disableVote}>
                ISEKAI
                <div>{upVoteCount}</div>
                <div>{upVotePct}</div>
            </button>
            <button className="ballot-button" id="down-vote" onClick={ () => { handleVote(-1) }} disabled={disableVote}>
                NOT
                <div>{downVoteCount}</div>
                <div>{downVotePct}</div>
            </button>
        </div>
    )
}