import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

// All full redux object is one big json object
export default combineReducers({
  user: userReducer
});
