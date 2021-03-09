import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {props.messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}


const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newMessageBody'}
                    value={props.newMessageBody}
                    placeholder='Enter your message'
                    component={"textarea"} /></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs