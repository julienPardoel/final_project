import {
  GET_MOVIES_POP,
  GET_MOVIES_TOP,
  GET_MOVIE,
} from "../actions/movies.actions";

const initialState = {};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_POP:
      return action.payload;

    case GET_MOVIES_TOP:
      return action.payload;

    case GET_MOVIE:
      return action.payload;

    default:
      return state;
  }
}
