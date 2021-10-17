import { getReducer } from "./get";
import { deleteReducer } from "./delete";
import { addReducer } from "./add";
import { updateReducer } from "./update";
import { getAllReducer } from "./product";

const initialState = {}

const appReducer = (state=initialState, action) => {
    return {
        products: getAllReducer(state.products, action),
        product: getReducer(state.product, action),
        addproducts: addReducer(state.addproducts, action),
        update: updateReducer(state.update, action),
        delete: deleteReducer(state.delete, action)
    }
}

export default appReducer