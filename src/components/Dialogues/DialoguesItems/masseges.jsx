import classes from "./../Dialogues.module.css"

function Message(props) {
    return (

        <div>
            <div className={classes.message} > {props.massegeText}</div>
        </div>
    )
}

export default Message;