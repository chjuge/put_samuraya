import { getAuthUserData } from "./authReducer";



let initialState = {
    initialized: false
}



const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-INITIALZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializeSuccess = () => ({ type: 'SET-INITIALZED' })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccess())
        })

}

export default appReducer