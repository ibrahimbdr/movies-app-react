export function addFavMovies(data){
    
    return {
        type: "SET_FAV_MOVIES",
        payload: data
    }
}

export function addMovies(data){
    
    return {
        type: "SET_MOVIES",
        payload: data
    }
}
