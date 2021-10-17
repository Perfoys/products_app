import { UPDATE_SUCCESS, UPDATE_FAIL } from "../actions/types";

const initialState = {
    product: {}
}

export const updateReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case UPDATE_SUCCESS:
            return {
                ...state,
                payload,
            }
        case UPDATE_FAIL:
            return {
                ...state,
            }
        default: 
            return {
                ...state,
            }
    }
}