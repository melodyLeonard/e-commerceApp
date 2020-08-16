import Axios from 'axios'
import Cookie from 'js-cookie'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CART_SAVE_SHIPPING,
    CART_SAVE_PAYMENT
} from '../types'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {

        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({
            type: ADD_TO_CART, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
        const { cart: { cartItems } } = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {

    }
}

export const removeFromCart = (productId) => async (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId })
    const { cart: { cartItems } } = getState()
    Cookie.set("cartItems", JSON.stringify(cartItems))

}

export const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data })
}

export const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data })
}