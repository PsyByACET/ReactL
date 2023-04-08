const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    newMessageBody: '',
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "im fine"},
        {id: 4, message: "kek"},
        {id: 5, message: "Leha pidor"}
    ],
    dialogs: [
        {id: 1, name: "Andry"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Bogdan"},
        {id: 4, name: "Dimas"},
        {id: 5, name: "Leha"}
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message:body});
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        default:
            return state
    }


}

export const sendMessageCreater = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreater = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
};

export default dialogsReducer;