import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <header className="header">
        <a href="#" title="Neiman Marcus" className="header__link-home">
          Neiman Marcus
        </a>

        <nav className="header__nav">
          <div className="nav__sign-in">
            <a href="#" className="sign-in__link">
              Sign In / Register
            </a>

            <ul className="sign-in__menu">
              <li>
                Your Account
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Address Book</a>
              </li>
              <li>
                <a href="#">Payment Information</a>
              </li>
              <li>
                <a href="#">NM Credit Card</a>
              </li>
              <li>
                <a href="#">My Favorites</a>
              </li>
            </ul>
          </div>

          <div className="nav__country">
            <a href="#">
              Change Country
            </a>
          </div>

          <div className="nav__checkout">
            <button className="checkout-button">
              CHECKOUT 1
            </button>
          </div>
        </nav>

        <form method="POST" action="#" className="header__search-form">
          <fieldset>
            <legend className="search-form__fieldset">Search our store</legend>
            <label htmlFor="search-input" className="search-form__label">Search</label>
            <input autoCorrect="off" size="" autoComplete="off" name="search-input" type="text" className="search-input" />
            <input name="search" type="submit" value="Search" className="icon-search headerSearchButton" />
          </fieldset>
        </form>

      </header>
    );
  }
}
