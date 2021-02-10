import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {props.messagesElements}
                </div>
                <div>
                    <textarea
                        value={props.newMessageBody}
                        placeholder='Enter your message'
                        onChange={props.onSendMessageChange}></textarea></div>
                <div>
                    <button onClick={props.onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;