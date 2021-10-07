import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './ProfileCard.module.scss';

const ProfileCard = ({ img, className, children }) => {
  return <div className={extendClasses(classes.ProfileCard, className)}>
    <div className={classes.ProfileCard__Img}>
      <img src={img} alt='avatar' />
    </div>
    {children}
  </div>;
};

export default ProfileCard;
