import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>R$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="Product" />

            <Link to="/checkout">
                <button onClick={addToBasket} className="product__button" >Add to Cart</button>
            </Link>

        </div>
    )
}

export default Product;