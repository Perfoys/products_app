import { DELETE_SUCCESS, DELETE_FAIL } from "./types";
import axios from "axios";

export const deleteProduct = (id) => async (dispatch) => {
    try {
        axios.delete(`https://fakestoreapi.com/products/${id}`);
        dispatch({ type: DELETE_SUCCESS, payload: id });
    }
    catch (error) {
        dispatch({ type: DELETE_FAIL });
    }
}