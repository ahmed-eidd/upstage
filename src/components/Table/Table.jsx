import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Table.module.scss';

const Table = ({ children, allwhite, className }) => {
  return (
    <table
      className={extendClasses(
        !allwhite ? classes.Table : classes.TableAllWhite,
        className
      )}
    >
      {children}
    </table>
  );
};

export default Table;
