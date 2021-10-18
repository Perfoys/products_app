import { UPDATE_SUCCESS, UPDATE_FAIL } from "./types";
import axios from "axios";

export const updateProduct = (product) => async (dispatch) => {
    try {
        const body = { title: product.title, price: product.price, description: product.description, image: product.image, category: product.category };
        axios.put(`https://fakestoreapi.com/products/${product.id}`, body);
        dispatch({ type: UPDATE_SUCCESS, payload: product});
    }
    catch (error) {
        dispatch({ type: UPDATE_FAIL })
    }
}