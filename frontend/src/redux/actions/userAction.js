import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL
} from '../types'
import axios from 'axios'
import Cookie from 'js-cookie'


export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        const { data } = await axios.post('http://127.0.0.1:4000/api/users/signin', { email, password });
        const token = data.token
        if (token) {
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
            Cookie.set('userInfo', JSON.stringify(data))
        }
        dispatch({ type: USER_SIGNIN_FAIL, payload: data.msg })
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }

}

export const signup = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } })
    try {
        const { data } = await axios.post('http://127.0.0.1:4000/api/users/signup', { name, email, password });
        const token = data.token
        if (token) {
            dispatch({ type: USER_SIGNUP_SUCCESS, payload: data })
            Cookie.set('userInfo', JSON.stringify(data))
        }
        dispatch({ type: USER_SIGNUP_FAIL, payload: data.msg })
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message })
    }

}

