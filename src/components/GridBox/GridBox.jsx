import React from 'react'
import { extendClasses } from '../../utilities/extendClasses'
import classes from './GridBox.module.scss'

const GridBox = ({children,addRows}) => {
  return (
    <div className={!addRows ? classes.GridBox : extendClasses(classes.GridBox, classes.AddRows)}>
      {children} 
    </div>
  )
}

export default GridBox
