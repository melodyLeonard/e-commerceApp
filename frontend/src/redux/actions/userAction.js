import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_UI })
        const res = await axios.post('/login', userData);
        setAuthHeaders(res.data.token)
        dispatch(getUserData())
        dispatch({
            type: CLEAR_ERRORS
        })
        history.push('/')

    } catch (err) {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }

}

export const signupUser = (newUserData, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_UI })
        const res = await axios.post('/login', newUserData);
        setAuthHeaders(res.data.token)
        dispatch(getUserData())
        dispatch({
            type: CLEAR_ERRORS
        })
        history.push('/')

    } catch (err) {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }

}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('AuthToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
}

export const getUserData = () => async (dispatch) => {
    try {
        const res = await axios.get('/user')
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
    }
}

const setAuthHeaders = (token) => {
    const authToken = `Bearer ${token}`
    localStorage.setItem('AuthToken', authToken)
    axios.defaults.headers.common['Authorization'] = authToken;

}