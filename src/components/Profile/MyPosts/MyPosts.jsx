import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is my first post', likes: 40 },
    ];

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
                    <Post message={postsData[0].message} likes={postsData[0].likes}></Post>
                    <Post message={postsData[1].message} likes={postsData[1].likes}></Post>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;