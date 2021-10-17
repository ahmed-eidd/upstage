import React from 'react';
import Flex from '../../../../Flex/Flex';
import classes from './ProfessionalsIcon.module.scss';

const ProfessionalsIcon = ({ children, icon, title, title2 }) => {
  return (
    <Flex
      flexDir='column'
      justify='flex-start'
      align='center'
      gap='2.5rem'
      className={classes.Icon}
    >
      <div>
        <img src={icon} alt='Professionals Icon' />
      </div>
      <div className={classes.Icon__TitleContainer}>
      <h5 className={classes.Icon__Title}>{title}</h5>
      <span className={classes.Icon__Title}>{title2}</span>
      </div>
      <p className={classes.Icon__Text}>{children}</p>
    </Flex>
  );
};

export default ProfessionalsIcon;
