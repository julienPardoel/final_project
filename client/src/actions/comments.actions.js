import axios from "axios";

export const GET_COMMENT = "GET_COMMENT";
export const POST_COMMENT = "ADD_COMMENT";

export const getComment = () => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/comments/`)
        .then((res) => {
  
          dispatch({ type: GET_COMMENT, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };

export const postComment = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/comments/`, data)
      .then((res) => {
        dispatch ({ type: POST_COMMENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};