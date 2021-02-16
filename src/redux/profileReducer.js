let initialState = {
    profile: null,
    posts: [
        { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is my first post', likes: 40 }
    ],
    newPostText: '',
    isFetching: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, { id: Object.keys(state.posts).length + 1, message: state.newPostText, likes: 0 }],
                newPostText: ''
            };
        }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };

        case 'SET-USER-PROFILE':
            return { ...state, profile: action.profile }

        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default: return state;

    };
}
export default profileReducer;

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
export const setToggleIsFethcing = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching });
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile });