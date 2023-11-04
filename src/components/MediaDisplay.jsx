import "../styles/media.css"

export default function MediaDisplay(props){
    const detailsOpen = (window.innerWidth >= 600)

    return (
        <div className="card">
            <img className="media-main-image" src={props.media.imageURL} alt="media image" />
            <details open={detailsOpen}>
                <summary id="title">{props.media.title}</summary>
                <p id="description">{props.media.description}</p>
            </details>
        </div>
    )
}