import React from 'react'
import styles from "./Content.module.css"
import Left from './Left/Left'
import Feed from './Feed/Feed'
import Right from './Right/Right'
import Dialogs from './Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Content = () => {
  return (
    <div className={styles.content}>
      <Left />
      <BrowserRouter>
        <Routes>
          <Route path='feed' element={<Feed />} />
          <Route path='dialogs' element={<Dialogs />} />
        </Routes>
      </BrowserRouter>
      <Right />
    </div>
  )
}

export default Content
