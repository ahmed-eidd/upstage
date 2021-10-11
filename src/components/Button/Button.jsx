import React from 'react';
import { Link } from 'react-router-dom';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Button.module.scss';

const Button = ({
  children,
  style,
  className,
  varient = 'filled',
  type = 'button',
  color = 'red',
  to,
  onClick,
}) => {
  return (
    <>
      {type === 'link' ? (
        <Link
          onClick={onClick}
          to={to}
          style={style}
          className={extendClasses(
            classes.btn,
            className,
            varient === 'filled' ? classes.filled : classes.outlined,
            color === 'grey' && classes.filledGrey,
            color === 'red' && classes.filledRed,
            color === 'black' && classes.filledBlack
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          style={style}
          className={extendClasses(
            classes.btn,
            className,
            varient === 'filled' ? classes.filled : classes.outlined,
            color === 'red' && classes.filledRed,
            color === 'black' && classes.filledBlack,
            color === 'grey' && classes.filledGrey
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
