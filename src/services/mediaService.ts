const apiBaseURL = 'https://isekai-or-not-api20231103201428.azurewebsites.net'

export async function getMedia(id: number) {
    let media = {}
    try {
        const res = await fetch(`${apiBaseURL}/api/media/${id}`)
            .then(res => { return res.json()})
        media = res[0]
    } catch(err) {
        throw err
    }
    
    return media
}