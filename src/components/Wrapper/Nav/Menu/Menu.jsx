import React from 'react'
import styles from './Menu.module.css'
import {NavLink} from 'react-router-dom'
const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/feed">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/friends">Friends</NavLink>
                </li>
                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink to="/videos">Videos</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
