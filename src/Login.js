import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {
    const pStyle = {
        textAlign: "center",
    };

    const history = useHistory();

    const validarCampos = () => {
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;

        if (email === 'brian@brian.com.br' && senha === '123') {
            history.push("/", "homepage");
        } else {
            alert('Usuario ou senha incorretos!')
        }
    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">Solo eShop</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' id='email' placeHolder='Type your e-mail...' />

                    <h5>Password</h5>
                    <input type='password' id='senha' placeHolder='Type your password...' />

                    <button onClick={validarCampos} className='login__signInButton'>Sign In</button>
                </form>

                <p style={pStyle}>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale.
                </p>

                <button className='login__registerButton'>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;