import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import css from "./Header.module.css"
import Navigation from "components/Navigation/Navigation"
import Container from "components/reuse/Container/Container"
import UserMenu from "components/UserMenu/UserMenu"

import { selectorProfile } from "store/auth/selectors"
import { logoutThunk } from "store/auth/thunks"

const Header = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectorProfile);
  
  const handlerLogOut = () => {
    dispatch(logoutThunk());
  }
  
  return (
      <header className={css.header}>
      <Container>
        <div className={css.navigation}>
          <Link className={css.logo} to='/'>contacts+</Link>
          <div className={css.menu}>
          <Navigation />
          {profile && <UserMenu handlerLogOut={handlerLogOut} />}</div>
        </div>
          </Container>
        </header>
  )
}

export default Header