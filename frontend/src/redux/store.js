import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import {
    productListReducer,
    productDetailsReducer
} from './reducers/dataReducer'

import { cartReducer } from './reducers/cartReducer'

import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'

const initialState = {}

const reducers = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    UI: uiReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)))


export default store;