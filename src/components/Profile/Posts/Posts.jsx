import React from "react";
import cs from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import {required,MaxLength} from '../../../utilits/Validators/Validators';
import { Textarea } from '../../common/FormController/FormController';
import { Link } from 'react-router-dom';



const addPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={cs.newPostTextarea} name='newPost' component={Textarea} validate={[required, MaxLength(100)]}/>
        <button className={cs.postButton} type='submit'>Add new post</button>
    </form>
}

const PostReduxForm = reduxForm({form:"newPost"})(addPostForm)

const Posts = React.memo((props) => {
    let postElement = [...props.posts].reverse().map(
        post => <Post
            key={post.id}
            id={post.id}
            name={post.name}
            text={post.text}
            avatar={post.avatar}
            likes={post.likes}
        />
    );

    let onAddPost = (value) => props.addPost(value.newPost)
    return (
        <div className={cs.postArea}>

            <h2>My Posts</h2>

            <div className={cs.newPostArea}>
                {
                    !props.isAuth?<div>You can add a new post for User if you <Link to="/login">Login</Link> or <Link to="">Registration</Link> </div>
                    :<PostReduxForm onSubmit={onAddPost}/>
                }

            </div>

            <div className={cs.posts}>
                {postElement}
            </div>
        </div>
    );
})

export default Posts;