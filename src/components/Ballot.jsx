import { useState } from 'react'
import '../styles/ballot.css'

export default function Ballot(props) {
    const [disableVote, setDisableVote] = useState(false)
    const [upVoteText, setUpVoteText] = useState('ISEKAI')
    const [downVoteText, setDownVoteText] = useState('NOT')
    let upVotePct = 0
    let downVotePct = 0

    const mediaID = props.id
    const handleVote = (vote) => {
        // submit vote and user's id/ip/whatever to db
        
        if (vote == 1) {
            props.media.upVotes++
        } else {
            props.media.downVotes++
        }
        
        upVotePct = props.media.upVotes / (props.media.upVotes + props.media.downVotes) * 100
        downVotePct = props.media.downVotes / (props.media.upVotes + props.media.downVotes) * 100
        setDisableVote(true)
        setUpVoteText(`ISEKAI: ${props.media.upVotes} (${upVotePct}%)`)
        setDownVoteText(`NOT: ${props.media.downVotes} (${downVotePct}%)`)
    }

    return (
        <div className="ballot-container">
            <button className="ballot-button" id="up-vote" onClick={ () => { handleVote(1) }} disabled={disableVote}>{upVoteText}</button>
            <button className="ballot-button" id="down-vote" onClick={ () => { handleVote(-1) }} disabled={disableVote}>{downVoteText}</button>
        </div>
    )
}