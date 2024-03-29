import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { selectorToken } from "store/auth/selectors"


const PrivateRoute = ({ children }) => {
    const token = useSelector(selectorToken)
    const location = useLocation()
    return token ? children : <Navigate to='/'state={location}/>
}

export default PrivateRoute