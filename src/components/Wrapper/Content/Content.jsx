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
import DialogPage from './Dialogs/DialogPage/DialogPage'
const Content = (props) => {
  return (
    <div className={styles.content}>
      <Left />
      <Routes>
        <Route path='/feed/' element={<Feed FeedPage={props.state.FeedPage} dispatch={props.dispatch}  />} />
        <Route path='/dialogs/*' element={<Dialogs DialogsPage={props.state.DialogsPage} dispatch={props.dispatch}/>} />
        <Route path="/dialogs/:id" element={<DialogPage dialogs={props.state.DialogsPage} messages={props.state.DialogsPage} dispatch={props.dispatch}/>} />
        <Route path='friends' element={<Friends FriendsPage={props.state.FriendsPage} />} />
        <Route path='courses' element={<Courses CoursesPage={props.state.CoursesPage} />} />
        <Route path='music' element={<Music MusicPage={props.state.MusicPage} />} />
        <Route path='videos' element={<Videos VideosPage={props.state.VideosPage} />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
      <Right />
    </div>
  )
}

export default Content
