import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };

    return (
      <Slider {...settings}>
        {this.props.html.map(slide => {
          return <div dangerouslySetInnerHTML={{ __html: slide }} />;
        })}
      </Slider>
    );
  }
}
