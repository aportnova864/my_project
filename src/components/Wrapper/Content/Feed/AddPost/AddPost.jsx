import React from 'react'
import s from '../../../ContentItem.module.css'
import styles from './AddPost.module.css'
import st from '../../../SectionName.module.css'
const AddPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (
    <div className={`${s.ContentItem} ${styles.AddPost}`}>
      <div className={st.SectionName}>Add Post</div>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addPost}>Add Post</button>
    </div>
  )
}

export default AddPost
