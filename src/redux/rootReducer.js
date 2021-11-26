import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import creamReducer from "./creams/creamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
});
export default rootReducer;
