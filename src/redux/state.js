import { rerenderEntireTree } from "../render";

let state = {
    DialogsPage: {
        DialogsData: [
            { id: 1, name: "Julia" },
            { id: 2, name: "Fedor" },
            { id: 3, name: "Sophiko" },
            { id: 4, name: "Elena" }
        ],
        MessagesData: [
            { id: 1, dialogId: 1, message: "Hi, how are you?"},
            { id: 2, dialogId: 1, message: "I am writing you from Georgia"},
            { id: 3, dialogId: 2, message: "Yo!"},
            { id: 4, dialogId: 2, message: "Long time no see!"},
            { id: 5, dialogId: 3, message: "Hi, have you seen this anime?"},
            { id: 6, dialogId: 3, message: "It's awesome! Season 1 is the best"},
            { id: 7, dialogId: 4, message: "Hi, how are you?"},
            { id: 8, dialogId: 4, message: "I love my life!"},
        ]
    },
    FeedPage: {
        PostData: [
            { id: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", name: "Anna Portnova", likesCount: 50, time: "3 min ago" },
            { id: 2, text: "Updated profile image", name: "Julia Metreveli", likesCount: 150, time: "30 min ago" }
        ]
    },
    FriendsPage: {
        FriendsData: [
            {id: 1, name: "Julia Metreveli", img: ""},
            {id: 2, name: "Fedor Portnov", img: ""},
            {id: 3, name: "Sophiko Portnova", img: ""},
            {id: 4, name: "John Doe", img: ""},
        ]
    },
    CoursesPage: {
        CoursesData: [
            {id:1, name: "JavaScript", themes: 50, points: 5000, img: ""}
        ]
    },
    MusicPage: {
        MusicData: [
            {id: 1, name: "Abc", author: "Abcde", duration: ""}
        ]
    },
    VideosPage: {
        VideosData: [
            {id: 1, name: "Abc", author: "Abcde", duration: ""}
        ]
    },
    SettingsPage: {}
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: postMessage,
        likesCount: 0
    }
    state.FeedPage.PostData.push(newPost);
    rerenderEntireTree(state);
}
export default state;