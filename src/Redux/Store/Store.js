import {  compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk  from "redux-thunk"
import combineReducers from "../Reducer/Combine"

const middlewareThunk = compose(
  applyMiddleware(thunk)
);
    
const store = createStore(combineReducers,middlewareThunk);

export default store;