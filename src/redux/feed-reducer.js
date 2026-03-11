const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {
    PostData: [
        { id: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", name: "Anna Portnova", likesCount: 50, time: "3 min ago" },
        { id: 2, text: "Updated profile image", name: "Julia Metreveli", likesCount: 150, time: "30 min ago" }
    ],
    newPostText: "What's on your mind?"
};
const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export default feedReducer;