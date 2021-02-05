import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx';


const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Ready to fight????' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}> {/*"dialogs"*/}
            <div className={s.dialogs_items}> {/*"items"*/}
                {dialogsElements}
            </div>
            <div className={s.messages}> {/*messages*/}
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;