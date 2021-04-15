import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";

export const getMovies = () => {
    return (dispatch) => {
      return axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr`)
        .then((res) => {
          dispatch({ type: GET_MOVIES, payload: res.data.results });
        })
        .catch((err) => console.log(err));

    };
  };

  export const getMovie = () => {
    return (dispatch) => {
      return axios
        .get(`https://api.themoviedb.org/3/find/{external_id}?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr&external_source=imdb_id`)
        .then((res) => {
          dispatch({ type: GET_MOVIE, payload: res.data });
        })
        .catch((err) => console.log(err));

    };
  };