import { DELETE_SUCCESS, DELETE_FAIL, PRODUCT_FAIL } from "../actions/types";

const initialState = {}

export const deleteReducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case DELETE_SUCCESS:
            return {
                ...state,
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