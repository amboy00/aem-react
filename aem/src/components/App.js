import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="grid-container">
          <Header />
          <nav className="site-info" role="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <section className="body-content" role="main">
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}
