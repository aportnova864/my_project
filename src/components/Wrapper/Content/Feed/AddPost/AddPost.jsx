import React from 'react'
import s from '../../../ContentItem.module.css'
import styles from './AddPost.module.css'
import st from '../../../SectionName.module.css'
const AddPost = (props) => {
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={`${s.ContentItem} ${styles.AddPost}`}>
      <div className={st.SectionName}>Add Post</div>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={onAddPost}>Add Post</button>
    </div>
  )  
}
export default AddPost
