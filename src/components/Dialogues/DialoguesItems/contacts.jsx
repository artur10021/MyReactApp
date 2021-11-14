import classes from "./../Dialogues.module.css"
import { NavLink } from "react-router-dom";
function Contact(props) {


    return (
        <div className={classes.contact}>
            <NavLink to={'/dialogues/' + props.id}>
                <img src={props.imgMassegeAvatar} className={classes.imgMassegeAvatar} />
                {props.name}
            </NavLink>
        </div>
    )
}
export default Contact;