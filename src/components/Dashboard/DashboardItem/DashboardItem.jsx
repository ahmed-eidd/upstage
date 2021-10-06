import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DashboardItem.module.scss';

const DashboardItem = ({ img, children, to }) => {
  return (
    <NavLink className={classes.DashboardItem} to={to}>
      <div className={classes.DashboardItem__Icon}>
        <img src={img} alt='dashboarditem' />
      </div>
      <p className={classes.DashboardItem__Name}>{children}</p>
    </NavLink>
  );
};

export default DashboardItem;
