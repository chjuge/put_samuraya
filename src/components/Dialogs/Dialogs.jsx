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

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ];

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Ready to fight????' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ];

    return (
        <div className={s.dialogs}> {/*"dialogs"*/}
            <div className={s.dialogs_items}> {/*"items"*/}
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>
            </div>
            <div className={s.messages}> {/*messages*/}
                <Message message={messagesData[0].message}></Message>
                <Message message={messagesData[1].message}></Message>
                <Message message={messagesData[2].message}></Message>
                <Message message={messagesData[3].message}></Message>
                <Message message={messagesData[4].message}></Message>
            </div>
        </div>
    );
}

export default Dialogs;