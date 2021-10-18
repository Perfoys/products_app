import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const persistConfig = {
    key: 'primary',
    storage,
    version: 1,
    stateReconciler: hardSet,
    whiteList: ['app']
  }

const persistedReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(persistedReducer, initialState, composedEnhancer);

export const persistor = persistStore(store);

