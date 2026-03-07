const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'
let store = {
    _state: {
        DialogsPage: {
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
            newMessageBody: "s"
        },
        FeedPage: {
            PostData: [
                { id: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", name: "Anna Portnova", likesCount: 50, time: "3 min ago" },
                { id: 2, text: "Updated profile image", name: "Julia Metreveli", likesCount: 150, time: "30 min ago" }
            ],
            newPostText: 'abcde'
        },
        FriendsPage: {
            FriendsData: [
                { id: 1, name: "Julia Metreveli", img: "" },
                { id: 2, name: "Fedor Portnov", img: "" },
                { id: 3, name: "Sophiko Portnova", img: "" },
                { id: 4, name: "John Doe", img: "" },
            ]
        },
        CoursesPage: {
            CoursesData: [
                { id: 1, name: "JavaScript", themes: 50, points: 5000, img: "" }
            ]
        },
        MusicPage: {
            MusicData: [
                { id: 1, name: "Abc", author: "Abcde", duration: "" }
            ]
        },
        VideosPage: {
            VideosData: [
                { id: 1, name: "Abc", author: "Abcde", duration: "" }
            ]
        },
        SettingsPage: {}
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.FeedPage.newPostText,
                likesCount: 0
            }
            this._state.FeedPage.PostData.push(newPost);
            this._state.FeedPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.FeedPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.DialogsPage.newMessageBody = action.newMessage;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.DialogsPage.MessagesData.length + 1,
                message: this._state.DialogsPage.newMessageBody,
                dialogId: action.dialogId
            }
            this._state.DialogsPage.MessagesData.push(newMessage);
            this._state.DialogsPage.newMessageBody = '';
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const addMessageActionCreator = (dialogId) => ({type: ADD_MESSAGE, dialogId: dialogId})
export const updateMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: messageText
    }
}
export default store;
window.store = store;