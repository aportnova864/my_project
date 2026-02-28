let state = {
    DialogsPage: {
        DialogsData: [
            { id: 1, name: "Julia" },
            { id: 2, name: "Fedor" },
            { id: 3, name: "Sophiko" },
            { id: 4, name: "Elena" }
        ],
        MessagesData: [
            { id: 1, message: "Hi, Anna!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            { id: 4, message: "I love my life" }
        ],
    },
    FeedPage: {
        PostData: [
            { id: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", name: "Anna Portnova", likesCount: "50", time: "3 min ago" },
            { id: 2, text: "Updated profile image", name: "Julia Metreveli", likesCount: "150", time: "30 min ago" }
        ]
    }
}
export default state;