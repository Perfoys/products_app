import { ADD_SUCCESS, ADD_FAIL } from "../actions/types";

const initialState = {
    addedproducts: []
}

export const addReducer = (state=initialState, action) => {
    const { type, payload } = action;
    let { addedproducts } = state;

    switch(type) {
        case ADD_SUCCESS:
            addedproducts = [...addedproducts, payload]
            return {
                ...state,
                addedproducts,
            }
        case ADD_FAIL:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}