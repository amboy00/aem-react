import React, { Component } from 'react';

export default class Column2 extends Component {
  render() {
    const { link1, image1, link2, image2 } = this.props.html;

    return (
      <div className="refresh__column-2">
        <div className="column-2__div">
          <a href={link1}>
            <img src={image1} />
          </a>
        </div>
        <div className="column-2__div">
          <a href={link2}>
            <img src={image2} />
          </a>
        </div>
      </div>
    );
  }
}
