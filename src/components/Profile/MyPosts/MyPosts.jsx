import React from 'react';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    
    return (
        <div>
            <h3>  My posts  </h3>
            <div>
                <div>
                    <textarea
                        ref={props.newPostElement}
                        onChange={props.onPostChange}
                        value={props.valueTextArea} />
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>
                    {props.postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;