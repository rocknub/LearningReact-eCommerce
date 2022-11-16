import React from "react";
import "./Home"
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const listProducts = () => {
    
    fetch('http://localhost:8888/php/listUsers.php', {
      method: 'GET'
    }).then(async function (response) {
      let data = await response.json();

      for (let i = 0; data.length; i++) {
        document.getElementById('users').innerHTML += data[i].nome + "<br>";
        console.log(data[i]);
      }
    })
  }

  return (
    <div className="header">

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">Solo eShop</h2>
        </div>
      </Link>


      <div className="header__search">
        <input type="text" className="header__searchInput" placeHolder="Insert search input..." />
        <SearchIcon className="header__searchIcon" />
        <div className="header__test">
          <button className="redButton" onClick={listProducts}>Show Users</button>
        </div>
      </div>

      <div className="header__nav">

        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header;
