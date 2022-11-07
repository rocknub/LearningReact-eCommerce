import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>R$0</strong>
                        </p>

                        <small className="subtotalGift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;