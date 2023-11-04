const apiBaseURL = 'https://isekai-or-not-api20231103201428.azurewebsites.net'

export async function getMedia(id: number) {
    let media = {}
    if (id) {
        media = await fetch(`${apiBaseURL}/api/media/${id}`)
    } else {
        media = await fetch(`${apiBaseURL}/api/media`)
    }
    return media
}