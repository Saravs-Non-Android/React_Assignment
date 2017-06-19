import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import login from "./reducers/loginReducer";
import profile from "./reducers/profileReducer";

export default createStore(
    // combineReducers({
    //     login,
    //     profile
    // }),
    // applyMiddleware(thunk, logger())
);