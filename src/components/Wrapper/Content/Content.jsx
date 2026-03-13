import styles from "./Content.module.css"
import Left from './Left/Left'
import Right from './Right/Right'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Music from './Music/Music'
import Videos from './Videos/Videos'
import Settings from './Settings/Settings'
import DialogPageContainer from './Dialogs/DialogPage/DialogPageContainer'
import DialogsContainer from './Dialogs/DialogsContainer'
import FeedContainer from './Feed/FeedContainer'
import FriendsContainer from "./Friends/FriendsContainer"
import SearchContainer from "../Nav/Search/SearchContainer"
import SearchUsersContainer from "../Nav/Search/SearchUsers/SearchUsersContainer"
import FriendWrapper from "./Friends/FriendPage/FriendWrapper"
import UserPage from "../Nav/Search/SearchUsers/UserPage"
const Content = () => {
  return (
    <div className={styles.content}>
      <Left />
      <Routes>
        <Route path='friends/:id' element={<FriendWrapper />} />
        <Route path='/search/' element={<SearchContainer />} />
        <Route path='/searchUsers/' element={<SearchUsersContainer />} />
        <Route path='/searchUsers/:id' element={<UserPage />} />
        <Route path='/feed/' element={<FeedContainer />} />
        <Route path='/dialogs/' element={<DialogsContainer />} />
        <Route path="/dialogs/:id" element={<DialogPageContainer />} />
        <Route path='friends' element={<FriendsContainer />} />
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
