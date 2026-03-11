import styles from './Feed.module.css'
import AddPostContainer from './AddPost/AddPostContainer'
import Post from './Post/Post'
const Feed = (props) => {
  let posts = props.FeedPage.PostData
  let PostsElements = posts.map(post=><Post name={post.name} time={post.time} text={post.text} likesCount={post.likesCount}/>)
  return (
    <div className={styles.center}>
      <AddPostContainer store={props.store} dispatch={props.dispatch} newPostText={props.FeedPage.newPostText} posts={posts}/>
      {PostsElements}
    </div>
  )
}

export default Feed
