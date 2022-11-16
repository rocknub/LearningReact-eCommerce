import React from 'react';

import './Admin.css'

import { Link } from "react-router-dom";

function Admin() {
    const cStyle = {
        textAlign: "center",
    };

    const saveProduct = () => {
        const form = document.getElementById('registerProduct');
        const data = new FormData(form);

        fetch('http://localhost:8888/php/saveProduct.php', {
            method: "POST",
            body: data
        })
    }

    return (
        <div className='admin'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="admin__logo">
                    <h2 className="admin__logoTitle">Solo eShop Admin Panel</h2>
                </div>
            </Link>

            <div className='admin__container'>
                <h1 style={cStyle}>Add new products</h1>

                <form id='registerProduct'>
                    <h5>Title</h5>
                    <input type='text' name='title' id='title' placeHolder='Type product card title...' />

                    <h5>Image URL</h5>
                    <input type='text' name='imageurl' id='imageurl' placeHolder='Type product image url...' />

                    <h5>Price</h5>
                    <input type='text' name='price' id='price' placeHolder='Type product price...' />

                    <h5>Rating</h5>
                    <input type='text' name='rating' id='rating' placeHolder='Type product rating...' />

                    <button type='button' onClick={saveProduct} className='admin__sendButton'>Add new product</button>
                </form>

            </div>
        </div>
    )
}

export default Admin;