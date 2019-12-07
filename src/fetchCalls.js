export const retrieveAllMovies = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(movies => movies.results)
        .catch(error => console.log(error))
}

export const retrieveAllCharacters = (characters) => {
    const characterInfo = characters.map(character => {
        return fetch(character)
            .then(response => response.json())
            .then(data => getHomeWorld(data.homeworld))
    })
}

const getHomeWorld = (homeworldUrl) => {
    return fetch(homeworldUrl)
        .then(response => response.json())
        .then(data => {
            return ({
                home: data.name,
                population: data.population
            })
        })
}