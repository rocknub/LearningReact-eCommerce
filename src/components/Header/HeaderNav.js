import React from "react";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./Header.css";

const HeaderNav = () => {
    return (
        <div className="headerNav">
            <div className="headerNavItem">
                <span className="navItemOne">Hello Guest</span>
                <span className="navItemTwo">Sign In</span>
            </div>
            <div className="headerNavItem">
                <span className="navItemOne">Your</span>
                <span className="navItemTwo">Shop</span>
            </div>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="headerNavItem">
                    <ShoppingBasket className="headerNavItemBasket" />
                    <span className="navItemTwo navBasketCount">0</span>
                </div>
            </Link>
        </div>
    );
}

export default HeaderNav;