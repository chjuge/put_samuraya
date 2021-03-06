const CURRENT_VALUE_TEXT_AREA = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case CURRENT_VALUE_TEXT_AREA:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: Object.keys(state.messages).length, message: action.newMessageBody}]
            };

        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
