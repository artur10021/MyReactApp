import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
function MyPosts(){
    return(
        <div className={classes.items}>
             <div className={classes.items}> avatar</div>
             <div>my posts:</div>
             <textarea>text a post</textarea>
             <button>Add post</button>
             <Post postMassege="Hi, how are you?" likes="15"/>
             <Post postMassege="I, hope you will enjoy my proect!" likes="20"/>
             

             
        </div>
    );
}
export default MyPosts;