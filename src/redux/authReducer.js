import { usersAPI } from "../api/Api"

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
                ...action.data,
                isAuth: true
            }   


        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({ type: 'SET-USER-DATA', data: { userId, email, login } })
export default authReducer;


export const logginIn = () => (dispatch) =>
{
    usersAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setUserData(id, email, login))
        }
    })
}