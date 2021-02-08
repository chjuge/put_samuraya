const CURRENT_VALUE_TEXT_AREA = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Ready to fight????' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' }
        ],
        newMessageBody: ''
    }
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case CURRENT_VALUE_TEXT_AREA:
            state.dialogsPage.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE: {
            let body = state.dialogsPage.newMessageBody;
            debugger;
            state.dialogsPage.newMessageBody = '';
            state.dialogsPage.messages.push({ id: 6, message: body });
            return state;
        }

        default: return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: CURRENT_VALUE_TEXT_AREA, body: body });
