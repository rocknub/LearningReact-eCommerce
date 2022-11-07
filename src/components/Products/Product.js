import React from "react";

import "./Product.css";

const Product = ({id, title, image, price, rating}) => {
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>R$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="ProductImage" />

            <button>Add to Cart</button>
        </div>
    );
}

export default Product;