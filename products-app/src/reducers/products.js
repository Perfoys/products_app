import { PRODUCTS_SUCCESS, PRODUCTS_FAIL } from "../actions/types";

const initialState = {
    products: []
}

export const productsReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload,
            }
        case PRODUCTS_FAIL:
            return {
                ...state,
            }
        default: 
            return {
                ...state,
        }

    }
}