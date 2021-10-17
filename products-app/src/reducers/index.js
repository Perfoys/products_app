import { combineReducers } from "redux";
import { loginReducer } from "./login";
import app from "./app";



export default combineReducers({
    app,
    user: loginReducer,
})
