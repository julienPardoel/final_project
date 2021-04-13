import axios from "axios";

export const GET_MOVIE = "GET_MOVIE";

export const getMovie = (id) => {
    return (dispatch) => {
      return axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a`)
        .then((res) => {
            console.log(res.data.results);
          dispatch({ type: GET_MOVIE, payload: res.data.results});
        })
        .catch((err) => console.log(err));
    };
  };