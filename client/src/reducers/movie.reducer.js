import {
    GET_MOVIE,
 } from "../actions/movie.actions";

const initialState = {};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {

    case GET_MOVIE:
      return action.payload;

    default:
      return state;
  }
}
