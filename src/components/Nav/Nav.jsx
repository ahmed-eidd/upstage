import React from 'react';
import classes from './Nav.module.scss';
import Logo from '../../assests/Home/logoz.png';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__logo }>
        <img
          src={Logo}
          alt='logo'
          className={ classes.nav__logo__img }
        />
      </div>
      <ul className={ classes.nav__links }>
        <li className={ classes.nav__item }>
          <a href='index.html' className={ classes.nav__link }>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            About Us
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Theatre Professionals
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Contact Us
          </a>
        </li>
        <li className='nav__item'>
          <a href='Pages/upstageDB.html' className='nav__link'>
            Upstage DB
          </a>
        </li>
      </ul>
      <div className='nav__btns'>
        <button className='btn-white'>
          <a href='/Pages/login.html'>Login</a>
        </button>
        <button className='btn-red'>Sign up</button>
      </div>
      <div className='burger'>
        <div className='line line-1' />
        <div className='line line-2' />
        <div className='line line-3' />
      </div>
    </nav>
  );
};

export default Nav;
