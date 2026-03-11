import styles from "./Content.module.css"
import Left from './Left/Left'
import Right from './Right/Right'
import { Route, Routes } from "react-router-dom"
import Friends from './Friends/Friends'
import Courses from './Courses/Courses'
import Music from './Music/Music'
import Videos from './Videos/Videos'
import Settings from './Settings/Settings'
import DialogPageContainer from './Dialogs/DialogPage/DialogPageContainer'
import DialogsContainer from './Dialogs/DialogsContainer'
import FeedContainer from './Feed/FeedContainer'
const Content = () => {
  return (
    <div className={styles.content}>
      <Left />
      <Routes>
        <Route path='/feed/' element={<FeedContainer />} />
        <Route path='/dialogs/' element={<DialogsContainer />} />
        <Route path="/dialogs/:id" element={<DialogPageContainer />} />
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
