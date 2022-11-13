import { combineReducers } from 'redux';
import { favMoviesReducer } from './movies'


export default combineReducers({
    fav_movies: favMoviesReducer
})

