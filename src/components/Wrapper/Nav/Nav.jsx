import Logo from "./Logo/Logo"
import styles from "./Nav.module.css"
import Menu from './Menu/Menu'
import Options from './Options/Options'
import { NavLink } from "react-router-dom"
const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavLink to='/search'>Search</NavLink> 
      <Menu />
      <Options />
    </nav>
  )
}

export default Nav
