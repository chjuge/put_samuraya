import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form'
import { login } from "../redux/authReducer";
import { requiredField } from "../utils/validators/validators";
import { Input } from "./common/FormControls/FormControls";
import style from './common/FormControls/FormControls.module.css'

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login">Login:</label>
                <Field
                    type="text"
                    placeholder="Email"
                    name={"email"}
                    validate={[requiredField]}
                    component={Input} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field
                    type="password"
                    placeholder="password"
                    name={"password"}
                    validate={[requiredField]}
                    component={Input} /></div>
            <div>
                <Field type="checkbox" component={'input'} name={"rememberMe"} />Remember me</div>
            <div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <button>Login</button></div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)

//6eJL_hFK6AAbs3Q
//ruslankum2@mail.ru
//15023