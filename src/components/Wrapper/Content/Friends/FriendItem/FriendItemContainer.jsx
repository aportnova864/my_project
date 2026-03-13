import { connect } from "react-redux"
import FriendItem from "./FriendItem"
import { removeFriendActionCreator } from "../../../../../redux/friends-reducer"
let mapStateToProps = (state) => {
    return {
        FriendsData: state.FriendsPage.FriendsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        removeFriend: (id) => {
            dispatch(removeFriendActionCreator(id))
        }
    }
}
const FriendItemContainer = connect(mapStateToProps, mapDispatchToProps)(FriendItem)
export default FriendItemContainer