import React from 'react';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';

let newPostElement = React.createRef();

const mapState = (state) => {
    return {
        newPostElement: newPostElement,
        valueTextArea: state.profileReducer.newPostText,
        postElements: state.profileReducer.posts.map(p => <Post message={p.message} likes={p.likes} />),
    }
}

const mapDispatch = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: () => {
            dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);

export default MyPostsContainer;