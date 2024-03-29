import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import css from "./Navigation.module.css"

import { selectorToken } from "store/auth/selectors"

const Navigation = () => {
  const token = useSelector(selectorToken)
  
  return (
      <nav className={css.navigation}>
          <ul className={css.list}>
            <li className={css.item}>
                <NavLink to='/contacts'>Contacts</NavLink>
              </li>
              {!token && <> <li className={css.item}>
                <NavLink className={css.button} to='/register'>Sign up</NavLink>
            </li>
            <li className={css.item}>
                <NavLink to='/login'>Sign in</NavLink>
            </li></>}
        </ul>
    </nav>
  )
}

export default Navigation