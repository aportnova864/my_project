const ADD_FRIEND = 'ADD-FRIEND'
const REMOVE_FRIEND = 'REMOVE-FRIEND'
const SET_USERS = 'SET-USERS'
let initialState = {
    UsersData: [
        //{ id: 1, name: "Julia Metreveli", img: "", wrap: "", posts: [], isFriend: false },
        //{ id: 2, name: "Fedor Portnov", img: "", wrap: "", posts: [], isFriend: false },
        //{ id: 3, name: "Sophiko Portnova", img: "", wrap: "", posts: [], isFriend: false },
        //{ id: 4, name: "John Doe", img: "", wrap: "", posts: [], isFriend: false },
    ],
    FriendsData: []
}
const friendsReducer = (state = initialState, action) => {
    const friend = state.UsersData.find(f=>f.id===action.id);
    switch (action.type) {
        case ADD_FRIEND:
            if (!friend) return state
            if (state.FriendsData.some(f=>f.id===action.id)) return state
            return{
                ...state,
                UsersData: state.UsersData.map(user => user.id===action.id ? {...user, isFriend: true} : user),
                FriendsData: [...state.FriendsData, state.UsersData.find(u=>u.id===action.id)]
            }
        case REMOVE_FRIEND:
            return {
                ...state,
                UsersData: state.UsersData.map(user => user.id === action.id ? {...user, isFriend: false}: user),
                FriendsData: state.FriendsData.filter(f => f.id!==action.id)
            }
        case SET_USERS:
            return {
                ...state,
                UsersData: [...action.UsersData]
            }
        default:
            return state;
    }
}
export const addFriendActionCreator = (id) => ({type: ADD_FRIEND, id})
export const removeFriendActionCreator = (id) => ({type: REMOVE_FRIEND, id})
export const setUsersActionCreator = (UsersData) => ({type: SET_USERS, UsersData})
export default friendsReducer;