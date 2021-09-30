import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Box.module.scss';

const Box = ({ children, className, style }) => {
  return <div className={extendClasses(classes.Box, className)} style={style}>{children}</div>;
};

export default Box;
