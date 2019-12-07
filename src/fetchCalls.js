export const retrieveAllMovies = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(movies => movies.results)
        .catch(error => console.log(error))
}



export const retrieveAllCharacters = (characters) => {
    const characterInfo = characters.map(character => {
        return getCharacterData(character)
            .then(character => ({
                name: character[0],
                homeWorld: character[1].home,
                population: character[1].population,
                species: console.log(character)
            
            }))
    })
    return Promise.all(characterInfo)
}
    
const getCharacterData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(character => {
            const { name } = character;
            const homeWorld = getHomeWorld(character.homeworld);
            const population = getPopulation(character.population);
            const species = getSpecies(character.species);
            console.log(homeWorld)
                // const films = getFilms(charcter.films)
                return Promise.all([name, homeWorld])
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
    
const getPopulation = (populationUrl) => {
        return fetch(populationUrl)
            .then(response => response.json())
            .then(data => data.population)
}

const getSpecies = (speciesUrl) => {
    return fetch(speciesUrl)
        .then(response => response.json())
        .then(data => data)
}
