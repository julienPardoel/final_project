import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import moviesReducer from "./movies.reducer";
import movieReducer from "./movie.reducer";

export default combineReducers({
    userReducer,
    moviesReducer,
    movieReducer
  });
  