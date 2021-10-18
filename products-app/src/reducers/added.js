import { ADD_SUCCESS, ADD_FAIL, DELETE_SUCCESS, DELETE_FAIL, UPDATE_SUCCESS, UPDATE_FAIL } from "../actions/types";

const initialState = {
    products: []
}

export const addedReducer = (state=initialState, action) => {
    const { type, payload } = action;
    let { products } = state;

    switch(type) {
        case ADD_SUCCESS:
            return {
                ...state,
                products: [...products, payload],
            }
        case ADD_FAIL:
            return {
                ...state,
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                products: state.products.map((item) => { if (item.id == payload.id) return payload}),
            }
        case UPDATE_FAIL:
            return {
                ...state,
            }
        case DELETE_SUCCESS:
            products = state.products.filter((item, index) => index == payload);
            return {
                ...state,
                products,
            }
        case DELETE_FAIL:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}
