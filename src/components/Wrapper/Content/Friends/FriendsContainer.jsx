import { connect } from 'react-redux'
import Friends from './Friends'
import { removeFriendActionCreator } from '../../../../redux/friends-reducer'

let mapStateToProps = (state) => {
    return {
        FriendsPage: state.FriendsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        removeFriend: (id) => {
            dispatch(removeFriendActionCreator(id))
        }
    }
}
let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer
