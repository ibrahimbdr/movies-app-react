import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/movies";

const store = createStore(moviesReducer, composeWithDevTools());

export default store;