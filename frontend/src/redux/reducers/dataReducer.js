import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_LOADING,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from '../types'

// PRODUCT LIST
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        case PRODUCT_LIST_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_LIST_LOADING:
            return {
                loading: true
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

// PRODUCT DETAILS
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_DETAILS_LOADING:
            return {
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}