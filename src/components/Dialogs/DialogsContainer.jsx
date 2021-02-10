import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducerCopy';
import Dialogs from './Dialogs.jsx';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsReducer.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator()); //dispatch('SEND-MESSAGE')
    };

    let onSendMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body)); //dispatch('UPDATE-NEW-MESSAGE-BODY', (body))
    }
    return (
        <Dialogs
        dialogsElements={dialogsElements}
        messagesElements={messagesElements}
        newMessageBody={newMessageBody}
        onSendMessageClick={onSendMessageClick}
        onSendMessageChange={onSendMessageChange}/>
    );
}

export default DialogsContainer;