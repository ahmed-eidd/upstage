import React from 'react';
import classes from './DashboardNav.module.scss';
import avatar from '../../../assests/Login/avatar.jpg';

const DashboardNav = () => {
  return (
    <div className={classes.DashboardNav}>
      <div className={classes.DashboardNav__Account}>
        <p className={classes.DashboardNav__Account__Name}>Hello company</p>
        <div className={classes.DashboardNav__Account__Controls}>
          <div className={classes.DashboardNav__Account__Controls__Img}><img src={avatar} alt='avatar' /></div>
          <div className={classes.DashboardNav__Account__Controls__Name}>Account Profile</div>
          <i
            className={`fas fa-chevron-down ${classes.DashboardNav__Account__Controls__Icon}`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
