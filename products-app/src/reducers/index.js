import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { productsReducer } from "./products";



export default combineReducers({
    products: productsReducer,
    login: loginReducer,
})
