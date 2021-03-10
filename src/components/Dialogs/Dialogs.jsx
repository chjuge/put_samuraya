import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';
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

const maxLength = maxLengthCreator(100)

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    validate={[requiredField, maxLength]} 
                    value={props.newMessageBody}
                    placeholder='Enter your message'/>
                    </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs

