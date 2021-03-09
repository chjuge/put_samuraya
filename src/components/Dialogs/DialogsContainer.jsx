import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx';
import { sendMessageCreator,  } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';


const mapState = (state) => {
    return {
        dialogsElements: state.dialogsReducer.dialogs.map(d => <DialogItem name={d.name} id={d.id} />),
        messagesElements: state.dialogsReducer.messages.map(m => <Message message={m.message} id={m.id} />),
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
};

const mapDispatch = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
 
    }
};

export default compose(connect(mapState, mapDispatch),withAuthRedirect)(Dialogs)
