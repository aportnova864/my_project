import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/feed-reducer'
import AddPost from './AddPost'
let mapStateToProps = (state) => {
  return {
    newPostText: state.FeedPage.newPostText,
    posts: state.FeedPage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}
let AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)
export default AddPostContainer
