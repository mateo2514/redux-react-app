import { combineReducers } from "redux";
import consultReducer from "./consultReducer";


export default combineReducers({
    results: consultReducer
});