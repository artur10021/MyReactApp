import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
function Profile(){
    return(
        <div className={classes.content}>
            <img src="http://giftoftherapy.com/wp-content/uploads/2016/02/1000x300-parth-vintage-jyler-1.jpg"
            alt=""
             />
             <MyPosts></MyPosts>
        </div>
    );
}
export default Profile;