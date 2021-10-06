import React from 'react'
import classes from './GridBox.module.scss'

const GridBox = ({children}) => {
  return (
    <div className={classes.GridBox}>
      {children} 
    </div>
  )
}

export default GridBox
