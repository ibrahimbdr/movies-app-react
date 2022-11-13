const INITIAL_STATE = {
    favMovies: []
}


export function favMoviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_FAV_MOVIES":
            return { ...state, favMovies: action.payload }

        default:
            return { ...state}
    }
}