import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from './NavItem.module.scss'

const NavItem = ({children}) => {
  return (
        <li className={ classes.nav__item }>
          <NavLink>{children}</NavLink>
        </li>
  )
}

export default NavItem
