import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'

import {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer,
} from './reducers/dataReducer'

import { cartReducer } from './reducers/cartReducer'
import { userSigninReducer, userSignupReducer } from './reducers/userReducer'

const cartItems = Cookie.getJSON("cartItems") || []
const userInfo = Cookie.getJSON("userInfo") || null


const initialState = {
    cart: {
        cartItems,
        shipping: {},
        payment: {}
    },
    userSignin: { userInfo }
}

const reducers = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)))


export default store;