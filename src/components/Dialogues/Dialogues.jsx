import React from "react"
import classes from "./Dialogues.module.css"
import Contact from "./DialoguesItems/contacts"
import Message from "./DialoguesItems/masseges"



function Dialogues(props) {

    let state = props.dialoguesPage;


    let contactsItems = state.contactsData.map((elem) => <Contact name={elem.name} key={elem.id} id={elem.id} imgMassegeAvatar={elem.img} />)
    let masseges = state.massegesData.map((elem) => <Message id={elem.id} key={elem.id} massegeText={elem.massegeText} />)
    let newMessageBody = state.newMassegeBody;

    let onSendMessageClick = () => {
        props.sendMassege();

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMassegeBody(body);
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