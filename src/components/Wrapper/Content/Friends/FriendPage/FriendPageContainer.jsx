import { connect } from "react-redux"
import FriendPage from "./FriendPage"
let mapStateToProps = (state, ownProps) => {
debugger
    return {
        friend: state.FriendsPage.FriendsData.find(
            f => f.id === Number(ownProps.id)
        )
    }
}
const FriendPageContainer = connect(mapStateToProps)(FriendPage)
export default FriendPageContainer