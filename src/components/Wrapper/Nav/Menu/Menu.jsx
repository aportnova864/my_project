import React from 'react'
import styles from './Menu.module.css'
const Menu = () => {
    return (
        <div>
            <ul>
                <li><a href="/feed">Home</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/friends">Friends</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    )
}

export default Menu
