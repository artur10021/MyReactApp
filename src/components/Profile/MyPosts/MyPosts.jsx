import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "./../../../Redax/Redax"


function MyPosts(props) {

    let postsElements = props.posts.map((post) => <Post id={post.id} postMassege={post.postMessage} likes={post.likes} />)

    let newPostElem = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );

    }

    let onPostChenge = () => {
        let text = newPostElem.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return (
        <div className={classes.items}>
            <textarea onChange={onPostChenge} ref={newPostElem}  value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    );
}
export default MyPosts;