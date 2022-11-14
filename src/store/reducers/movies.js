const INITIAL_STATE = {
    movies: [],
    favMovies: []
}


export function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_FAV_MOVIES":
            return { ...state, favMovies: action.payload }
        
        case "SET_MOVIES":
            return { ...state, movies: action.payload }

       
        default:
            return { ...state}
    }
}