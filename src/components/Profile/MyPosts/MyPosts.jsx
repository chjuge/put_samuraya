import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    const addCurrentPost = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div>
            <h3>  My posts  </h3>
            <div>
                <AddPostRedux onSubmit={addCurrentPost}/>
            </div>
            <div className={s.posts}>
                <div>
                    {props.postElements}
                </div>
            </div>
        </div>
    );
}

const AddPost = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPost'}
                    ref={props.newPostElement}
                    onChange={props.onPostChange}
                    value={props.valueTextArea} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


const AddPostRedux = reduxForm({ form: 'myposts' })(AddPost)

export default MyPosts;
