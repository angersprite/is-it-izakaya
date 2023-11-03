export async function getMedia(id: number) {
    let media = {}
    if (id) {
        media = await fetch(`https://localhost:7121/api/media/${id}`)
    } else {
        media = await fetch(`https://localhost:7121/api/media`)
    }
    return media
}