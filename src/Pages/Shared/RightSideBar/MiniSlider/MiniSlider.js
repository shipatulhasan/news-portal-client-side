import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../../images/maxresdefault.jpg'
import img2 from '../../../../images/maxresdefault (1).jpg'


const MiniSlider = () => {
    return (
        <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
      
      </Carousel.Item>
   
    </Carousel>
    );
};

export default MiniSlider;