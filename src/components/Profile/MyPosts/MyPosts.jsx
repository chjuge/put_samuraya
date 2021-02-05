import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi! Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is my first post', likes: 40 },
    ];

    let postElements = posts.map(p => <Post message={p.message} likes={p.likes} />);

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
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;