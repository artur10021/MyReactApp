import classes from "./Post.module.css"
function Post(props){

    

    return(
        <div className={classes.postWrapper}>
            <img src="https://static-cse.canva.com/blob/652716/1600w-2so4RyuRmfc.09b968ec.jpg" className={classes.img} />          
             <span> {props.postMassege} </span>
             <div> 
             <span >like: {props.likes} </span>
             </div>

        </div>
    );
}
export default Post;