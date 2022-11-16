import React from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {
    const pStyle = {
        textAlign: "center",
    };

    const history = useHistory();

    const validateLogin = () => {

        fetch('http://localhost:8888/php/listUsers.php', {
            method: 'GET'
        }).then(async function (response) {
            const data = await response.json();

            validateResult(data);
        })
    }

    function validateResult(data) {
        let email = document.getElementById('email').value;
        let pw = document.getElementById('senha').value;

        for (let i = 0; data.length; i++) {
            if (data[i].email === email && data[i].pw === pw) {
                alert('Bem vindo: ' + data[i].nome);
                history.push('/admin');
            } else if (data[i].email !== null && data[i].pw !== null) {
                console.log('User_ID different from the actual Users_ID.');
            } else {
                alert('E-mail ou senha inválidos');
            }
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

                <form id="userArea">
                    <h5>E-mail</h5>
                    <input type='text' id='email' placeHolder='Type your e-mail...' />

                    <h5>Password</h5>
                    <input type='password' id='pw' placeHolder='Type your password...' />

                    <button type="button" onClick={validateLogin} className='login__signInButton'>Sign In</button>
                </form>

                <p style={pStyle}>
                    Click in the link below to sign-up
                </p>

                <Link to="/Signup">
                    <button type="button" className='login__registerButton'>Create your eShop Account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login;