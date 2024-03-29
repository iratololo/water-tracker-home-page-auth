import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header/Header"

import { selectorProfile, selectorToken } from "store/auth/selectors";
import { refreshThunk } from "store/auth/thunks";

const Layout = () => {
  const profile = useSelector(selectorProfile);
  const token = useSelector(selectorToken)
  const dispatch = useDispatch();

  useEffect(() => {
    !profile && token && dispatch(refreshThunk())
  }, [profile,dispatch, token])
  
  return (
      <>
          <Header />
          <main>
              <Outlet/>
          </main>
    </>
  )
}

export default Layout