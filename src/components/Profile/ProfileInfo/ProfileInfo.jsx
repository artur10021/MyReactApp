import React from "react";
import classes from "./ProfileInfo.module.css"
function ProfileInfo(props) {

    let newPostElem = React.createRef();
    let addPost = () => {
        let postText = newPostElem.current.value;
        props.addPost(postText);
        newPostElem.current.value = '';
    }

    return (
        <div className={classes.profileBody}>
            <img src="http://giftoftherapy.com/wp-content/uploads/2016/02/1000x300-parth-vintage-jyler-1.jpg" className={classes.profileBGImg} />
            <div > avatar</div>
            <div>my posts:</div>
            <textarea ref={newPostElem} />
            <button onClick={addPost}>Add post</button>
        </div>
    )
}
export default ProfileInfo;