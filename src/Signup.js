import React from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {

    const history = useHistory();

    const pStyle = {
        textAlign: "center",
    };

    const registerUser = () => {
        const form = document.getElementById('registerUser');
        const data = new FormData(form);

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;

        fetch('http://localhost:8888/php/registerUser.php', {
            method: "POST",
            body: data
        }).then(async function(result) {
            if (result.ok) {
                alert('Usuário criado com sucesso.\n Nome: ' + nome + '.\n E-mail: ' + email + '.');
                history.push('/login');
            } else {
                alert("Usuário não foi criado com sucesso. Por favor, tente mais tarde.")
            }
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
                <h1>Sign-up</h1>

                <form id="registerUser">
                    <h5>Name</h5>
                    <input type='text'name="nome" id='nome' placeHolder='Type your name...' />

                    <h5>E-mail</h5>
                    <input type='text' name="email" id='email' placeHolder='Type your e-mail...' />

                    <h5>Password</h5>
                    <input type='password' name="pw" id='pw' placeHolder='Type your password...' />


                    <p style={pStyle}>
                        By signing-in you agree to the eShop Website Conditions of Use & Sale.
                    </p>
                    <button type="button" onClick={registerUser} className='login__registerButton'>Create your eShop Account</button>
                </form>

            </div>
        </div>
    )
}

export default Login;