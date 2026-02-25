import Logo from "./Logo/Logo"
import styles from "./Nav.module.css"
import Search from './Search/Search'
import Menu from './Menu/Menu'
import Options from './Options/Options'
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <Search />
      <Menu />
      <Options />
    </div>
  )
}

export default Nav
