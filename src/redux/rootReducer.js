import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import creamReducer from "./creams/creamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
  user: userReducer,
});
export default rootReducer;
