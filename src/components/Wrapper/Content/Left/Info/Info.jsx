import s from "../../../ContentItem.module.css"
import React from 'react'
import st from '../../../SectionName.module.css'
import styles from "./Info.module.css"
import femaleIcon from "../../../../../assets/female_icon.jpg"
const Info = () => {
    return (
        <div className={s.ContentItem}>
            <img src={femaleIcon} alt="Anna Portnova" className={styles.ProfileImage} />
            <div className={st.SectionName}>Anna Portnova</div>
            <div>I love everyone!</div><hr />
            <div><div className={st.SectionName}>Friends</div>100</div>
        </div>
    )
}

export default Info
