import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}> {/*"dialogs"*/}
            <div className={s.dialogs_items}> {/*"items"*/}
                <DialogItem name='Dimych' id='1'></DialogItem>
                <DialogItem name='Andrey' id='2'></DialogItem>
                <DialogItem name='Sveta' id='3'></DialogItem>
                <DialogItem name='Sasha' id='4'></DialogItem>
                <DialogItem name='Viktor' id='5'></DialogItem>
                <DialogItem name='Valera' id='6'></DialogItem>
            </div>
            <div className={s.messages}> {/*messages*/}
                <Message message='Hi!'></Message>
                <Message message='How are you?'></Message>
                <Message message='Ready to fight????'></Message>
            </div>
        </div>
    );
}

export default Dialogs;