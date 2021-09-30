import React from 'react';
import classes from './Cover.module.scss';

const Cover = ({img, alt}) => {
  return (
    <div className={classes.Cover}>
      <img
        src={img}
        alt={alt}
      />
    </div>
  );
};

export default Cover;
