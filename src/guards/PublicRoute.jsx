import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { selectorToken } from "store/auth/selectors"


const PublicRoute = ({ children }) => {
    const token = useSelector(selectorToken)
    const {state:prevLocation} = useLocation()
    return !token ? children : <Navigate to={prevLocation ?? "/contacts"} />
}

export default PublicRoute