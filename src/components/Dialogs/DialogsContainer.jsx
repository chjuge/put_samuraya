import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';


const mapState = (state) => {
    return {
        dialogsElements: state.dialogsReducer.dialogs.map(d => <DialogItem name={d.name} id={d.id} />),
        messagesElements: state.dialogsReducer.messages.map(m => <Message message={m.message} id={m.id} />),
        newMessageBody: state.dialogsReducer.newMessageBody,
        isAuth: state.auth.isAuth
    }
};

const mapDispatch = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        onSendMessageChange: (e) => {
            dispatch(updateNewMessageBodyCreator(e.target.value));
        }
    }
};

const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);

export default DialogsContainer;
