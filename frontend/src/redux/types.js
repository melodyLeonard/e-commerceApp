//USER REDUCER TYPES

export const USER_SIGNIN_REQUEST = "[login] USER_SIGNIN_REQUEST"
export const USER_SIGNIN_SUCCESS = "[login] USER_SIGNIN_SUCCESS"
export const USER_SIGNIN_FAIL = "[login] USER_SIGNIN_FAIL"

export const USER_SIGNUP_REQUEST = "[signin] USER_SIGNUP_REQUEST"
export const USER_SIGNUP_SUCCESS = "[signin] USER_SIGNUP_SUCCESS"
export const USER_SIGNUP_FAIL = "[signin] USER_SIGNUP_FAIL"

export const USER_UPDATE_REQUEST = "[profile] USER_UPDATE_REQUEST"
export const USER_UPDATE_SUCCESS = "[profile] USER_UPDATE_SUCCESS"
export const USER_UPDATE_FAIL = "[profile] USER_UPDATE_FAIL"


export const USER_LOGOUT = "[profile] USER_LOGOUT"

//UI REDUCER TYPES
export const SET_ERRORS = "[ui] SET_ERRORS"
export const LOADING_UI = "[ui] LOADING_UI"
export const CLEAR_ERRORS = "[ui] CLEAR_ERRORS"


//  DATA REDUCER TYPES
export const PRODUCT_LIST_REQUEST = "[product] PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "[product] PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAIL = "[product] PRODUCT_LIST_FAIL"
export const PRODUCT_LIST_LOADING = "[product] PRODUCT_LIST_LOADING"


export const PRODUCT_SAVE_REQUEST = "[product] PRODUCT_SAVE_REQUEST"
export const PRODUCT_SAVE_SUCCESS = "[product] PRODUCT_SAVE_SUCCESS"
export const PRODUCT_SAVE_FAIL = "[product ] PRODUCT_SAVE_FAIL "


export const PRODUCT_DELETE_REQUEST = "[product] PRODUCT_DELETE_REQUEST"
export const PRODUCT_DELETE_SUCCESS = "[product] PRODUCT_DELETE_SUCCESS"
export const PRODUCT_DELETE_FAIL = "[product] PRODUCT_DELETE_FAIL"

export const PRODUCT_DETAILS_REQUEST = "[product details] PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_SUCCESS = "[product details] PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_LOADING = "[product details] PRODUCT_DETAILS_LOADING"
export const PRODUCT_DETAILS_FAIL = "[product details] PRODUCT_DETAILS_FAIL"

export const PRODUCT_REVIEW_SAVE_REQUEST = 'PRODUCT_REVIEW_SAVE_REQUEST';
export const PRODUCT_REVIEW_SAVE_SUCCESS = 'PRODUCT_REVIEW_SAVE_SUCCESS';
export const PRODUCT_REVIEW_SAVE_FAIL = 'PRODUCT_REVIEW_SAVE_FAIL';
export const PRODUCT_REVIEW_SAVE_RESET = 'PRODUCT_REVIEW_SAVE_RESET';

//CART TYPES
export const ADD_TO_CART = "[cart] ADD_TO_CART"
export const REMOVE_FROM_CART = "[cart] REMOVE_FROM_CART"
export const CART_SAVE_SHIPPING = "[shipping] CART_SAVE_SHIPPING"
export const CART_SAVE_PAYMENT = "[payment] CART_SAVE_PAYMENT"


//SIDEBAR TOGGLED
export const SHOW_SIDEBAR = "[sidebar] SHOW_SIDEBAR"

//ORDER

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL';

export const MY_ORDER_LIST_REQUEST = 'MY_ORDER_LIST_REQUEST';
export const MY_ORDER_LIST_SUCCESS = 'MY_ORDER_LIST_SUCCESS';
export const MY_ORDER_LIST_FAIL = 'MY_ORDER_LIST_FAIL';

export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL';

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST';
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS';
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL';

export const ORDER_DELETE_REQUEST = 'ORDER_DELETE_REQUEST';
export const ORDER_DELETE_SUCCESS = 'ORDER_DELETE_SUCCESS';
export const ORDER_DELETE_FAIL = 'ORDER_DELETE_FAIL';