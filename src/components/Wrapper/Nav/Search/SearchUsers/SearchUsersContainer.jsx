import { connect } from "react-redux"
import SearchUsers from "./SearchUsers"
import { addFriendActionCreator, removeFriendActionCreator, setUsersActionCreator } from "../../../../../redux/friends-reducer"

let mapStateToProps = (state) => {
    return {
        UsersData: state.FriendsPage.UsersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (id) => {
            dispatch(addFriendActionCreator(id))
        },
        removeFriend: (id) => {
            dispatch(removeFriendActionCreator(id))
        },
        setUsers: (UsersData) => {
            dispatch(setUsersActionCreator(UsersData))
        }
    }
}
const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers)
export default SearchUsersContainer