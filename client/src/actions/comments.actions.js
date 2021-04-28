import axios from "axios";

// export const GET_COMMENT = "GET_COMMENT";
export const POST_COMMENT = "POST_COMMENT";

// export const getComments = (id) => {
//     return (dispatch) => {
//       return axios
//         .get(`${process.env.REACT_APP_API_URL}api/comments/${id}` )
//         .then((res) => {
  
//           dispatch({ type: GET_COMMENT, payload: res.data });
//         })
//         .catch((err) => console.log(err));
//     };
//   };

export const postComment = (movieId, commenter, message) => {
  return (dispatch) => {
    return axios ({
        methode: "post",
        url: `${process.env.REACT_APP_API_URL}api/comments/${movieId}`,
        data: { movieId, commenter, message},
    })
      
      .then((res) => {
        dispatch({ type: POST_COMMENT, payload: { movieId } })
      })
      .catch((err) => console.log(err));
  };
};
