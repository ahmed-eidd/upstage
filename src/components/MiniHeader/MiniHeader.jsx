import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './MiniHeader.module.scss';

const MiniHeader = ({ children, className }) => {
  return <div className={extendClasses(classes.MiniHeader, className)}>{children}</div>;
};

export default MiniHeader;
