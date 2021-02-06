import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state.js';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <h3>  My posts  </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText} />
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