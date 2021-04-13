import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";


export const getMovies = () => {
    return (dispatch) => {
      return axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=en-US&page=1`)
        .then((res) => {
          dispatch({ type: GET_MOVIES, payload: res.data });
          console.log(res.data);
        })
        .catch((err) => console.log(err));

    };
  };