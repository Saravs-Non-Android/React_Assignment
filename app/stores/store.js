import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import listReducer from "../reducers/listReducer";

export default createStore(
	listReducer,
  applyMiddleware(thunk, logger())
);
