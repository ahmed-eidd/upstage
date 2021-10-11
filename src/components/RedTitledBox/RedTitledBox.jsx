import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './RedTitledBox.module.scss';
import Slider from 'react-slick';
import PrevArrow from '../../assests/Login/down-arrow.png';
import NextArrow from '../../assests/Login/up-arrow.png';
import SliderArrow from './SliderArrow';

const RedTitledBox = ({
  title,
  children,
  className,
  slider,
  sliderClassName,
}) => {
  

  const settings = {
    infinite: true,
    speed: 500,
    dots: false,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: (
      <SliderArrow
        left
        img={NextArrow}
      />
    ),
    prevArrow: <SliderArrow right img={PrevArrow} />,
  };
  return (
    <div className={extendClasses(classes.RedTitledBox, className)}>
      <h4 className={classes.RedTitledBox__Title}>{title}</h4>
      <div className={extendClasses(classes.RedTitledBox__Content)}>
        {slider ? (
          <Slider
            className={extendClasses(classes.ContentSlider, sliderClassName)}
            {...settings}
          >
            {children}
          </Slider>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default RedTitledBox;
