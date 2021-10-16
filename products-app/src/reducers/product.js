import { PRODUCT_SUCCESS, PRODUCT_FAIL } from "../actions/types";

const initialState = {
    product: {}
}

export const productReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload,
            }
        case PRODUCT_FAIL:
            return {
                ...state,
            }
        default: 
            return {
                ...state,
            }
    }
}

