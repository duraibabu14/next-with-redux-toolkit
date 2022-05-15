import { combineReducers } from "redux";
import count from "./count/countSlice";
import user from "./count/userSlice";

const reducers = combineReducers({
  count,
  user,
});

export default reducers;
