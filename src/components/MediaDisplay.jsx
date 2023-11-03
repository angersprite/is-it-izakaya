import "../styles/media.css"

export default function MediaDisplay(props){
    return (
        <div className="card">
            <img className="media-main-image" src={props.media.imageURL} alt="media image" />
            <details>
                <summary id="title">{props.media.title}</summary>
                <p id="description">{props.media.description}</p>
            </details>
        </div>
    )
}