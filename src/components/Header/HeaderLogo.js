import React from "react";
import { Storefront } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./Header.css";

const HeaderLogo = () => {
    return (
        <Link to="/" style={{ textDecoration: "none" }}>
            <div className="headerLogo">
                <Storefront className="headerLogoImage" fontSize="large" />
                <h2 className="headerLogoTitle">Solo eShop</h2>
            </div>
        </Link>
    );
}

export default HeaderLogo;