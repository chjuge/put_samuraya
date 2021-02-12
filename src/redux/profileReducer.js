const ADD_POST = 'ADD-POST';
const CURRENT_VALUE_TEXT_AREA = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is my first post', likes: 40 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: Object.keys(state.posts).length + 1, message: state.newPostText, likes: 0 }],
                newPostText: ''
            };
        }
        case CURRENT_VALUE_TEXT_AREA:
            return {
                ...state,
                newPostText: action.newText
            };

        default: return state;

    };
}
export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: CURRENT_VALUE_TEXT_AREA, newText: text })
