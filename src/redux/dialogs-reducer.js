const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'
let initialState = {
    DialogsData: [
        { id: 1, name: "Julia" },
        { id: 2, name: "Fedor" },
        { id: 3, name: "Sophiko" },
        { id: 4, name: "Elena" }
    ],
    MessagesData: [
        { id: 1, dialogId: 1, message: "Hi, how are you?" },
        { id: 2, dialogId: 1, message: "I am writing you from Georgia" },
        { id: 3, dialogId: 2, message: "Yo!" },
        { id: 4, dialogId: 2, message: "Long time no see!" },
        { id: 5, dialogId: 3, message: "Hi, have you seen this anime?" },
        { id: 6, dialogId: 3, message: "It's awesome! Season 1 is the best" },
        { id: 7, dialogId: 4, message: "Hi, how are you?" },
        { id: 8, dialogId: 4, message: "I love my life!" },
    ],
    newMessageBody: ""
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: state.MessagesData.length + 1,
                message: state.newMessageBody,
                dialogId: action.dialogId
            }
            state.MessagesData.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = (dialogId) => ({type: ADD_MESSAGE, dialogId: dialogId})
export const updateMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: messageText
    }
}
export default dialogsReducer;