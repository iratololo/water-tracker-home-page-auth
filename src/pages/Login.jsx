import { useDispatch } from "react-redux";

import { AuthForm } from "components/AuthForm/AuthForm"
import Container from "components/reuse/Container/Container"

import { loginThunk } from "store/auth/thunks";


const Login = () => {

    const dispatch = useDispatch();

    const login = ({email, password}) => {
        dispatch(loginThunk({email, password}))
    }

    return (
        <Container>
            <AuthForm type="login" description="Sign in" act={login}/>
        </Container>
    )
}

export default Login