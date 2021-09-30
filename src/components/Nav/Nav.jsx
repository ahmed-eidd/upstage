import React from 'react';
import classes from './Nav.module.scss';
import Logo from '../../assests/Home/logoz.png';
import NavItem from './NavItem/NavItem';
import Button from '../Button/Button';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__logo}>
        <img src={Logo} alt='logo' className={classes.nav__logo__img} />
      </div>
      <ul className={classes.nav__links}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/aboutus'>About Us</NavItem>
        <NavItem to='/professionals'>Theatre Proffessionals</NavItem>
        <NavItem to='/contactus'>Contact Us</NavItem>
        <NavItem to='/upstagedb'>Upstage DB</NavItem>
      </ul>
      <div className='nav__btns'>
        <Button type='link' varient='outlined' to='/login'>Login</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};

export default Nav;
