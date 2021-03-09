import { profileAPI } from "../api/Api";

let initialState = {
    profile: null,
    posts: [
        { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is my first post', likes: 40 }
    ],
    isFetching: false,
    status: '',
    newPostText: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, { id: Object.keys(state.posts).length + 1, message: action.newPostText, likes: 0 }],
            };
        }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };

        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state, status: action.status
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default: return state;

    };
}
export default profileReducer;

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText});
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
export const setToggleIsFethcing = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching });
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile });
export const setSatus = (status) => ({ type: 'SET-STATUS', status });

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(setToggleIsFethcing(true))
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
        dispatch(setToggleIsFethcing(false));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setSatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        console.log(status)
        if (response.data.resultCode === 0)
            dispatch(setSatus(status));
    })
}