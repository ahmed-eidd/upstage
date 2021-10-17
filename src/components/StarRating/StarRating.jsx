import React from 'react';
import ReactStars from 'react-rating-stars-component';

const StarRating = ({ onChange, ...props }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const iconSize = {
    fontSize: '2.4rem',
  };
  return (
    <ReactStars
      {...props}
      count={5}
      onChange={onChange}
      isHalf={true}
      emptyIcon={<i style={iconSize} className='far fa-star'></i>}
      halfIcon={
        <i
          style={{ color: '#FF0C00', ...iconSize }}
          className='fa fa-star-half-alt'
        ></i>
      }
      filledIcon={
        <i style={{ color: '#FF0C00', ...iconSize }} className='fa fa-star'></i>
      }
    ></ReactStars>
  );
};

export default StarRating;
