import s from "../../../ContentItem.module.css"
import st from '../../../SectionName.module.css'
import styles from "./Suggestions.module.css"
import React from 'react'

const Suggestions = () => {
  return (
    <div className={`${s.ContentItem} ${styles.Suggestions}`}>
      <div className={st.SectionName}>Suggestions</div>
    </div>
  )
}

export default Suggestions
