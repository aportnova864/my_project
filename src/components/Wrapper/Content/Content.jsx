import React from 'react'
import styles from "./Content.module.css"
import Left from './Left/Left'
import Feed from './Feed/Feed'
import Right from './Right/Right'
import Dialogs from './Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Friends from './Friends/Friends'
import Courses from './Courses/Courses'
import Music from './Music/Music'
import Videos from './Videos/Videos'
import Settings from './Settings/Settings'
const Content = () => {
  return (
    <div className={styles.content}>
      <Left />
      <BrowserRouter>
        <Routes>
          <Route path='feed' element={<Feed />} />
          <Route path='dialogs' element={<Dialogs />} />
          <Route path='friends' element={<Friends />} />
          <Route path='courses' element={<Courses />} />
          <Route path='music' element={<Music />} />
          <Route path='videos' element={<Videos />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <Right />
    </div>
  )
}

export default Content
