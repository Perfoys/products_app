import { GET_FAIL, GET_SUCCESS } from "./types";
import axios from "axios";

export const getProductById = (id) => async (dispatch) => {
    try {
        const res = axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({ type: GET_SUCCESS, payload: (await res).data});
    }
    catch (error) {
        dispatch({ type: GET_FAIL });
    }
}