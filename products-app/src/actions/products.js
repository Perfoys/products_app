import { GETALL_SUCCESS, GETALL_FAIL } from "./types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: GETALL_SUCCESS, payload: (await res).data})
    }
    catch (error) {
        dispatch({ type: GETALL_FAIL})
    }
}