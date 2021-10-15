import { AUTH_SUCCESS, AUTH_FAIL } from "./types";
import axios from "axios";

export const userLogin = (user) => async (dispatch) => {
    try {
        const body = { username: user.username, password: user.password }
        const res = axios.post("https://fakestoreapi.com/auth/login", body);
        dispatch({ type: AUTH_SUCCESS, payload: (await res).data});
    }
    catch (error) {
        dispatch({ type: AUTH_FAIL })
    }
}