import { GET_MOVIES, GET_MOVIE } from "../actions/movies.actions";

const initialState = {};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;

    case GET_MOVIE:
      return action.payload;

    default:
      return state;
  }
}
