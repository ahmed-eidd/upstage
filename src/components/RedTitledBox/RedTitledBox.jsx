import React from 'react'
import { extendClasses } from '../../utilities/extendClasses'
import classes from './RedTitledBox.module.scss';

const RedTitledBox = ({title,children,className}) => {
  return (
    <div className={extendClasses(classes.RedTitledBox,className)}>
        <h4 className={classes.RedTitledBox__Title}>{title}</h4>
        <div className={classes.RedTitledBox__Content}>

        {children}
        </div>
    </div>
  )
}

export default RedTitledBox
