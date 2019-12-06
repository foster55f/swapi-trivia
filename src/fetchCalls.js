export const retrieveAllMovies = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(movies => movies.results)
        .catch(error => console.log(error))
}

export const retrieveAllCharacters = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(movies => {
            
        })
    
        // .catch(error => console.log(error))
}