import React from "react";
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}

export default Login;

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login">Login:</label>
                <Field type="text" placeholder="login" name={"login"} component={"input"} /></div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" placeholder="password" name={"password"} component={"input"}/></div>
            <div>
                <Field type="checkbox" component={"input"} name={"rememberMe"}/>Remember me</div>
            <div>
                <button>Login</button></div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm)