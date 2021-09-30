import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import AppStoreLogo from '../../../../assests/Home/App Store.png';
import GooglePlayLogo from '../../../../assests/Home/Google Play.png';
import HeaderForm from './HeaderForm/HeaderForm';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__main}>
        <h1 className='heading-1'>
          welcome to <span className='red-text'>upstage</span>
        </h1>
        <h2 className='heading-2'>All things theatre under one umbrella</h2>
        <div className={classes.header__main__icons}>
          <Link to='#'>
            <img
              className={classes.header__main__icon}
              src={AppStoreLogo}
              alt='app-store-icon'
            />
          </Link>
          <Link to='#'>
            <img
              className={classes.header__main__icon__google}
              src={GooglePlayLogo}
              alt='google-play-icon'
            />
          </Link>
        </div>
      </div>
      <HeaderForm />
    </header>
  );
};

export default Header;
