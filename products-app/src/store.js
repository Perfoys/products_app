import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(AppReducer, initialState, composedEnhancer);

export default store;
