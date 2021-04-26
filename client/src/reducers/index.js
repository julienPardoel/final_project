import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from './users.reducer';
import commentsReducer from "./comments.reducer";

export default combineReducers({
    userReducer,
    usersReducer,
    commentsReducer
  });
  