import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AuthNav.module.scss'

const AuthNav = ({children,to}) => {
  return (
    <Link to={to} className={classes.AuthNav}>
      {children}
    </Link>
  )
}

export default AuthNav
