import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
    return (
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/51mVAgKOWgS._AC_SX679_.jpg" alt="" className="checkoutProductImage" />

            <div className="checkoutProductInfo">
                <div className="checkoutProductTitle"><p>Title</p></div>
                <p>
                    <small>R$</small>
                    <strong>20</strong>
                </p>

                <div className="checkoutProductRating">⭐️</div>
                <button>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;