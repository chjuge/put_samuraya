import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    let onSendMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}> 
            <div className={s.dialogs_items}> 
                {dialogsElements}
            </div>
            <div className={s.messages}> 
                <div>
                    {messagesElements}
                </div>
                <div><textarea value={newMessageBody} 
                    placeholder='Enter your message'
                    onChange={onSendMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;