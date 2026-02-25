import React from 'react'
import styles from './Menu.module.css'
const Menu = () => {
    return (
        <div>
            <ul>
                <li><a href="/feed">Home</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Menu
