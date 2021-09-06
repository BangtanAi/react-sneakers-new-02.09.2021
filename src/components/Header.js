import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to="/">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      </Link>

      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerRight-price">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites">
          <li>
            <img
              className="headerRight-heart"
              width={18}
              height={18}
              src="/img/favorite.svg"
              alt="Heart"
            />
          </li>
        </Link>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
