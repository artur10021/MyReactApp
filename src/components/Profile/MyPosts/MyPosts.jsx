import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
function MyPosts(props) {

    let postsElements = props.posts.map((post) => <Post id={post.id} postMassege={post.postMessage} likes={post.likes} />)

    return (
        <div className={classes.items}>
            {postsElements}
        </div>
    );
}
export default MyPosts;