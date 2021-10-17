import { ADD_SUCCESS, ADD_FAIL } from "./types";
import axios from "axios";

export const addProduct = (product) => async (dispatch) => {
    try {
        const body = { title: product.title, price: product.price, description: product.description, image: product.image, category: product.category };
        const res = axios.post(`https://fakestoreapi.com/products`, body);

        dispatch({ type: ADD_SUCCESS, payload: product });
    }
    catch (error) {
        dispatch({ type: ADD_FAIL });
    }
}