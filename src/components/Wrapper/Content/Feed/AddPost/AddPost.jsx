import React from 'react'
import s from '../../../ContentItem.module.css'
import styles from './AddPost.module.css'
import st from '../../../SectionName.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/feed-reducer'

const AddPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <div className={`${s.ContentItem} ${styles.AddPost}`}>
      <div className={st.SectionName}>Add Post</div>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={addPost}>Add Post</button>
    </div>
  )  

}
export default AddPost
