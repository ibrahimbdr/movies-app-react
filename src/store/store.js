import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { favMoviesReducer } from "./reducers/movies";

const store = createStore(favMoviesReducer, composeWithDevTools());

export default store;