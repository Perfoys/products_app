import { GET_SUCCESS, GET_FAIL } from "../actions/types";

const initialState = {
    product: {}
}

export const getReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_SUCCESS:
            return {
                ...state,
                product: payload,
            }
        case GET_FAIL:
            return {
                ...state,
            }
        default: 
            return {
                ...state,
            }
    }
}
