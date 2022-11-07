import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderNav />
        </div>
    );
};

export default Header;