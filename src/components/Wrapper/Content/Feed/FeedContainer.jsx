import { connect } from 'react-redux'
import Feed from './Feed'
let mapStateToProps = (state) => {
  return {
    FeedPage: state.FeedPage
  }
}
let FeedContainer = connect(mapStateToProps)(Feed)
export default FeedContainer
