import '../styles/ballot.css'

export default function Ballot(props) {
    return (
        <div className="ballot-container">
            <button className="ballot-button" id="up-vote">YES</button>
            <button className="ballot-button" id="down-vote">NO</button>
        </div>
    )
}