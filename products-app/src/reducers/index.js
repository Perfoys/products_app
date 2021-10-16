import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { productsReducer } from "./products";
import { productReducer } from "./product";
import { addReducer } from "./add";
import { deleteReducer } from "./delete";
import { updateReducer } from "./update";



export default combineReducers({
    products: productsReducer,
    product: productReducer,
    add: addReducer,
    delete: deleteReducer,
    update: updateReducer,
    login: loginReducer,
})
