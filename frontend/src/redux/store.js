import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'

import {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer,
    productReviewSaveReducer,
} from './reducers/dataReducer'

import { cartReducer } from './reducers/cartReducer'
import {
    userSigninReducer,
    userSignupReducer,
    userUpdateReducer,
} from './reducers/userReducer'

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    myOrderListReducer,
    orderListReducer,
    orderDeleteReducer,
} from './reducers/orderReducers';


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

    //user
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    userUpdate: userUpdateReducer,

    //product
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,

    //cart
    cart: cartReducer,

    //order
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)))


export default store;