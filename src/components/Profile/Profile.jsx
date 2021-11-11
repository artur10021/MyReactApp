import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
function Profile(){
    return(
        <div>
            <img src="http://giftoftherapy.com/wp-content/uploads/2016/02/1000x300-parth-vintage-jyler-1.jpg" className={classes.profileBGImg}/>
             <MyPosts></MyPosts>
        </div>
    );
}
export default Profile;