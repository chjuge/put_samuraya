import React from 'react';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducerCopy.js';
import MyPosts from './MyPosts.jsx';


const MyPostsContainer = (props) => {
    let postElements = props.state.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator()); // dispatch('ADD-POST')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text)); //dispatch('UPDATE-NEW-POST-TEXT', text)
    }

    let value=props.state.profilePage.newPostText;

    return (
        <MyPosts 
        newPostElement={newPostElement}
        onPostChange={onPostChange}
        valueTextArea={value}
        addPost={addPost}
        postElements={postElements}
        />
    );
}

export default MyPostsContainer;