import React from 'react'
import styles from './Feed.module.css'
import AddPost from './AddPost/AddPost'
import Post from './Post/Post'
const Center = (props) => {
  let PostsElements = props.FeedPage.PostData.map(post=><Post name={post.name} time={post.time} text={post.text} likesCount={post.likesCount}/>)
  return (
    <div className={styles.center}>
      <AddPost />
      {PostsElements}
    </div>
  )
}

export default Center
