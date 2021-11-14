import classes from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
        <div>
            <img src="http://giftoftherapy.com/wp-content/uploads/2016/02/1000x300-parth-vintage-jyler-1.jpg" className={classes.profileBGImg} />
            <div > avatar</div>
            <div>my posts:</div>
            <textarea>text a post</textarea>
            <button>Add post</button>
        </div>
    )
}
export default ProfileInfo;