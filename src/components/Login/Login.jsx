import React from 'react'
import css from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { MinLength, required } from '../../utilits/Validators/Validators'
import { Input } from '../common/FormController/FormController'
import { Navigate } from 'react-router';




const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={css.form}>
        <div>
            <p>Welcome</p>
        </div>
        <div>
            <Field name="loginEmail" component={Input} type="email" placeholder="Email" validate={[required]} />
        </div>
        <div>
            <Field name="loginPassword" component={Input} type="password" placeholder="Password" validate={[required, MinLength(8)]} />
        </div>
        <div>
            <Field name="rememberMe" component="input" type="checkbox" value="Remember me" />
        </div>

        {props.error && <div className={css.formErr}>{props.error}</div>}
        <button >Log in</button>
    </form>




}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.loginEmail, formData.loginPassword, formData.rememberMe)
    }
    if (props.isAuth) return <Navigate to="/profile" />
    return (
        <div className={css.container}>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={css.drop}>
                <div className={css.first}></div>
                <div className={css.second}></div>
                <div className={css.third}></div>
                <div className={css.fourth}></div>
                <div className={css.fiveth}></div>
            </div>
        </div>
    )

}

export default Login;