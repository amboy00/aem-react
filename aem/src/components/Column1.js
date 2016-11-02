import React, { Component } from 'react';

export default class Column1 extends Component {
  render() {
    const { link, image } = this.props.html;

    return (
      <div className="refresh__column-1">
        <a href={link}>
          <img src={image} />
        </a>
      </div>
    );
  }
}
