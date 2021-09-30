import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss';

const NavItem = ({ children, to }) => {
  return (
    <li className={classes.nav__item}>
      <NavLink className={classes.nav__link} to={to}>{children}</NavLink>
    </li>
  );
};

export default NavItem;
