import { stopSubmit } from "redux-form";
import { authAPI } from "../api/Api"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: 'SET-USER-DATA', payload: { userId, email, login, isAuth } })
export const logginIn = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setUserData(id, email, login, true))
        }
    })
}



export const login = (email, password, rememberMe) => (dispatch) => {


    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(logginIn())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', { _error: message }))

            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export default authReducer;