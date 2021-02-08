const ADD_POST = 'ADD-POST';
const CURRENT_VALUE_TEXT_AREA = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
            { id: 2, message: 'It is my first post', likes: 40 }
        ],
        newPostText: ''
    }
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likes: 0
            };
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = '';
            return state;
        }
        case CURRENT_VALUE_TEXT_AREA:
            state.profilePage.newPostText = action.newText;
            return state;

        default: return state;

    };
}
export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: CURRENT_VALUE_TEXT_AREA, newText: text })
