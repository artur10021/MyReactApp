import React from "react"
import { connect } from "react-redux";
import { sendMassegeCreator, updateNewMassegeBodyCreator } from "../../Redax/dialogues-reduser"
import Dialogues from "./Dialogues"





const mapStateToProps = (state) => {
    return{
        dialoguesPage: state.dialoguesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{   
        sendMassege: () => {
            dispatch(sendMassegeCreator());
        },
        updateNewMassegeBody: (body) =>{
            dispatch(updateNewMassegeBodyCreator(body));
        },
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;