import React from 'react';
import classes from './Dashboard.module.scss';
import DashboardItem from './DashboardItem/DashboardItem';
import Icon1 from '../../assests/Login/Group01.png';
import Icon2 from '../../assests/Login/Group02.png';
import Icon3 from '../../assests/Login/Group03.png';
import Icon4 from '../../assests/Login/Group04.png';
import Icon5 from '../../assests/Login/Group05.png';
import Icon6 from '../../assests/Login/Group06.png';
import Icon7 from '../../assests/Login/Group07.png';
import Icon8 from '../../assests/Login/Group08.png';
import Icon9 from '../../assests/Login/Group09.png';
import DashboardNav from './DashboardNav/DashboardNav';

const Dashboard = ({ children }) => {
  return (
    <div className={classes.Dashboard}>
      <DashboardNav />
      <div className={classes.Dashboard__DashboardItems}>
        <DashboardItem to='/addaplay' img={Icon1}>
          Add a Play
        </DashboardItem>
        <DashboardItem to='/catalogofplay' img={Icon2}>
          Catalog of Play
        </DashboardItem>
        <DashboardItem to='/personnel' img={Icon3}>
          Personnel
        </DashboardItem>
        <DashboardItem to='/calendar' img={Icon4}>
          Calendar
        </DashboardItem>
        <DashboardItem to='/submissions' img={Icon5}>
          Submissions
        </DashboardItem>
        <DashboardItem to='/auditions' img={Icon6}>
          Auditions
        </DashboardItem>
        <DashboardItem to='/rehearsals' img={Icon7}>
          Rehearsals
        </DashboardItem>
        <DashboardItem to='/search' img={Icon8}>
          Search
        </DashboardItem>
        <DashboardItem to='/dashboard' img={Icon9}>
          Dashboard
        </DashboardItem>
      </div>
      <div className={classes.Dashboard__Main}>
        <div className={classes.Dashboard__Main__Content}>{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
