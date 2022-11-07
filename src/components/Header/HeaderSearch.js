import React from "react";
import { Search } from "@material-ui/icons";

import "./Header.css";

const HeaderSearch = () => {
    return (
        <div className="headerSearch">
            <input type="text" className="headerSearchInput" placeHolder="Type your search here..." />
            <Search className="headerSearchIcon" />
        </div>
    );
}

export default HeaderSearch;