import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>
          <h3>  My posts  </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>
                    <Post message='Hi, how are you' likes='15'></Post>
                    <Post message='It is my first post' likes='20'></Post>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;