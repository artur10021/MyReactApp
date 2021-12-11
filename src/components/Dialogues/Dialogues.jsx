import React from "react"
import { sendMassegeCreator, updateNewMassegeBodyCreator } from "../../Redax/Redax"
import classes from "./Dialogues.module.css"
import Contact from "./DialoguesItems/contacts"
import Message from "./DialoguesItems/masseges"



function Dialogues(props) {

    let state = props.store.getAppState().dialoguesPage;


    let contactsItems = state.contactsData.map((elem) => <Contact name={elem.name} id={elem.id} imgMassegeAvatar={elem.img} />)
    let masseges = state.massegesData.map((elem) => <Message id={elem.id} massegeText={elem.massegeText} />)
    let newMessageBody = state.newMassegeBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMassegeCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMassegeBodyCreator(body));
    }

    return (
        <div className={classes.dialogues}>
            <div className={classes.contacts}>
                <input className={classes.contactSearchInput} />
                {contactsItems}
            </div>
            <div className={classes.messages}>
                {masseges}
                <textarea placeholder="Text your message" onChange={onNewMessageChange} className={classes.massegeTextarea} value={newMessageBody}></textarea>
                <button onClick = {onSendMessageClick} >send massage</button>
            </div>
        </div>
    );
}
export default Dialogues;