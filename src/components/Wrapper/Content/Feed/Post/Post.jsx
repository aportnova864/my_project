import React from 'react'
import s from '../../../ContentItem.module.css'
import styles from './Post.module.css'
import st from '../../../SectionName.module.css'
import femaleIcon from "../../../../../assets/female_icon.jpg"
import DeleteButton from './Buttons/DeleteButton'
import EditButton from './Buttons/EditButton'
import LikesButton from './Buttons/LikesButton'
const Post = (props) => {
  return (
    <div className={`${s.ContentItem} ${styles.Post}`}>
      <div className={styles.NamePhotoTime}>
        <img src={femaleIcon} alt="profile_img" className={styles.PostImage} />
        <div>
          <div className={st.SectionName}>{props.name}</div>
          <div className={styles.Time}>{props.time}</div>
        </div>
      </div>
      <div className={styles.PostText}>{props.text}</div>
      <div className={styles.PostButtons}>
        <LikesButton likesCount = {props.likesCount}/> 
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  )
}

export default Post
