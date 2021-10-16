import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { productsReducer } from "./products";
import { productReducer } from "./product";
import { addReducer } from "./add";



export default combineReducers({
    products: productsReducer,
    product: productReducer,
    add: addReducer,
    login: loginReducer,
})
