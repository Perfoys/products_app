import { getReducer } from "./get";
import { getAllReducer } from "./product";
import { addedReducer } from "./added";

const initialState = {}

const appReducer = (state=initialState, action) => {
    return {
        products: getAllReducer(state.products, action),
        product: getReducer(state.product, action),
        added: addedReducer(state.added, action)
    }
}

export default appReducer