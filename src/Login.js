import React from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {
    const pStyle = {
        textAlign: "center",
    };

    const history = useHistory();

    const validateLogin = () => {
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;

        if (email === 'b@b' && senha === '123') {
            alert('Você logou como: Brian Mendes.'); //Add logged person name.
            history.push("/admin", "adminpanel");
        } else {
            alert('Usuario ou senha incorretos!')
        }
    }

    const registerUser = () => {
        const form = document.getElementById('userArea');
        const data = new FormData(form);

        fetch('./php/RegisterUser.php', {
            method: "POST",
            body: data
        })
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

                <form id="userArea">
                    <h5>E-mail</h5>
                    <input type='text' id='email' placeHolder='Type your e-mail...' />

                    <h5>Password</h5>
                    <input type='password' id='senha' placeHolder='Type your password...' />

                    <button onClick={validateLogin} className='login__signInButton'>Sign In</button>
                </form>

                <p style={pStyle}>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale.
                </p>

                <button onClick={registerUser} className='login__registerButton'>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;