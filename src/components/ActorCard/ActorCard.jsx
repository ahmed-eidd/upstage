import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './ActorCard.module.scss';

const ActorCard = ({ img, className, role, name }) => {
  return (
    <div className={extendClasses(classes.ActorCard, className)}>
      <div className={classes.ActorCard__Img}>
        <img src={img} alt='actor/actress photo' />
      </div>
      <p className={classes.ActorCard__Name}>{name}</p>
      <p className={classes.ActorCard__Role}>Role: <span>{role}</span></p>
    </div>
  );
};

export default ActorCard;
