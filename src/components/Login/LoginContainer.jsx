import Login from "./Login";
import { connect } from "react-redux";
import { login } from "../../redux/reduser/authReduser";



let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer;