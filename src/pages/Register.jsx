import { useDispatch } from "react-redux";

import { AuthForm } from "components/AuthForm/AuthForm"
import Container from "components/reuse/Container/Container"

import { signUpThunk } from "store/auth/thunks";

const Register = () => {
    const dispatch = useDispatch();

    const register = (body) => {
        dispatch(signUpThunk(body))
    }

    return (
        <Container>
            <AuthForm type="register" description="Sign up" act={register} />
        </Container>
    )
}

export default Register