import React from 'react'
import styles from "./Content.module.css"
import Left from './Left/Left'
import Feed from './Feed/Feed'
import Right from './Right/Right'
import Dialogs from './Dialogs/Dialogs'
import { Route, Routes } from "react-router-dom"
import Friends from './Friends/Friends'
import Courses from './Courses/Courses'
import Music from './Music/Music'
import Videos from './Videos/Videos'
import Settings from './Settings/Settings'
const Content = (props) => {
  return (
    <div className={styles.content}>
      <Left />
      <Routes>
        <Route path='/feed/' element={<Feed FeedPage={props.state.FeedPage} />} />
        <Route path='/dialogs/*' element={<Dialogs DialogsPage={props.state.DialogsPage} />} />
        <Route path='friends' element={<Friends />} />
        <Route path='courses' element={<Courses />} />
        <Route path='music' element={<Music />} />
        <Route path='videos' element={<Videos />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
      <Right />
    </div>
  )
}

export default Content
