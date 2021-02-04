import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}> {/*"dialogs"*/}
            <div className={s.dialogs_items}> {/*"items"*/}
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sveta
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Viktor
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Valera
                </div>
            </div>
            <div className={s.messages}> {/*messages*/}
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Weeeey</div>
            </div>
        </div>
    );
}

export default Dialogs;