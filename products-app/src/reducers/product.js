import { GETALL_SUCCESS, GETALL_FAIL } from "../actions/types";

const initialState = {
    products: []
}

export const getAllReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GETALL_SUCCESS:
            return {
                ...state,
                products: payload,
            }
        case GETALL_FAIL:
            return {
                ...state,
            }
        default: 
            return {
                ...state,
        }

    }
}
