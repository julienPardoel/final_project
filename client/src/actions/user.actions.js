import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

export const getUser = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        // if (res.data.errors) {
        //   dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        // } else {

        //   dispatch({ type: GET_USER_ERRORS, payload: "" });
        console.log(res)
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/`, {withCredentials: true,} )
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          });
      })
      .catch((err) => console.log(err));
  };
};
