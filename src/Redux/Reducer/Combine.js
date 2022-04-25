import { combineReducers } from "redux";
import reducerHome from "./Reducer";

export default combineReducers({
  home: reducerHome, 
});