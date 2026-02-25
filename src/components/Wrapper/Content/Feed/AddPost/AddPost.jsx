import React from 'react'
import s from '../../../ContentItem.module.css'
import styles from './AddPost.module.css'
import st from '../../../SectionName.module.css'
const AddPost = () => {
  return (
    <div className={`${s.ContentItem} ${styles.AddPost}`}>
      <div className={st.SectionName}>Add Post</div>
      <textarea></textarea>
      <button>Add Post</button>
    </div>
  )
}

export default AddPost
