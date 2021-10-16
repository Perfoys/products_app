import { DELETE_SUCCESS, DELETE_FAIL } from "./types";
import axios from "axios";

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = axios.delete(`https://fakestoreapi.com/products/${id}`);
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
    }
    catch (error) {
        dispatch({ type: DELETE_FAIL });
    }
}