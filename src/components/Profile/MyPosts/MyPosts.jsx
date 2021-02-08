import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducerCopy.js';


const MyPosts = (props) => {
    let postElements = props.state.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator()); // dispatch('ADD-POST')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text)); //dispatch('UPDATE-NEW-POST-TEXT', text)
    }

    return (
        <div>
            <h3>  My posts  </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.state.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;