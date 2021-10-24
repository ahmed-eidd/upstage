import React from 'react';
import classes from './AuthLayout.module.scss';
import AuthNav from './AuthNav/AuthNav';
import Logo from '../../assests/Home/logoz.png';

const AuthLayout = ({ children }) => {
  return (
    <div className={classes.AuthLayout}>
      <div className={classes.AuthLayout__NavContainer}>
        <div className={classes.AuthLayout__Nav}>
          <div className={classes.AuthLayout__Nav__Logo}>
            <img src={Logo} alt='logo' />
          </div>
          <div className={classes.AuthLayout__Nav__NavList}>
            <AuthNav to='#'>Home</AuthNav>
            <AuthNav to='#'>Contact Us</AuthNav>
            <AuthNav to='#'>About Us</AuthNav>
            <AuthNav to='#'>Login</AuthNav>
            <AuthNav to='#'>Sign Up</AuthNav>
            <AuthNav to='#'>Lookup / Upstage</AuthNav>
          </div>
        </div>
      </div>
      <div className={classes.AuthLayout__Main}>
        <div className={classes.AuthLayout__Main__Content}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
