import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "./../../../Redax/profile-reducer"


function MyPosts(props) {

    let postsElements = props.posts.map((post) => <Post id={post.id} key={post.id} postMassege={post.postMessage} likes={post.likes} />)

    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChenge = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
        
    }

    return (
        <div className={classes.items}>
            <textarea onChange={onPostChenge} ref={newPostElem}  value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
            {postsElements}
        </div>
    );
}
export default MyPosts;