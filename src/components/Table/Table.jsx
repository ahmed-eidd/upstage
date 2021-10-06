import React from 'react'
import classes from './Table.module.scss'

const Table = ({children, allwhite}) => {
  return (
    <table className={!allwhite ? classes.Table : classes.TableAllWhite}>
      {children}
    </table>
  )
}

export default Table
