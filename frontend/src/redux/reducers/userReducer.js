import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST
} from '../types'


export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                loading: true
            };

        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            };

        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {
                loading: true
            };

        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            };

        case USER_SIGNUP_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {
                loading: true
            };

        case USER_UPDATE_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            };

        case USER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default: return state;
    }
}
