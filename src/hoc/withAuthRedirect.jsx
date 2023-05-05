import { connect } from "react-redux";
import { Navigate } from "react-router";


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login" />

        return <Component {...props} />
    }
    let withStateRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return withStateRedirectComponent;
}
