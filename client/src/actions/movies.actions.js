import axios from "axios";

export const GET_MOVIES_POP = "GET_MOVIES_POP";
export const GET_MOVIES_TOP = "GET_MOVIES_TOP";


// les plus populaires
export const getMoviesPop = () => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr`
      )
      .then((res) => {
        dispatch({ type: GET_MOVIES_POP, payload: res.data.results });
      })
      .catch((err) => console.log(err));
  };
};

// les mieux notés
export const getMoviesTop = () => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr`
      )
      .then((res) => {
        dispatch({ type: GET_MOVIES_TOP, payload: res.data.results });
      })
      .catch((err) => console.log(err));
  };
};
