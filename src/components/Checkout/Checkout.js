import React from "react";
import CheckoutProduct from "./CheckoutProduct.js"
import Subtotal from "./Subtotal.js";

import "./Checkout.css"

const Checkout = () => {
    return (
        <div className="checkout">
           <div className="checkoutLeft">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkoutAd" />
                <h2 className="checkoutTitle">Your Shopping Cart</h2>
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
           </div>
           <div className="checkoutRight">
                <Subtotal />
           </div>
        </div>   
    );
}

export default Checkout;