import React from 'react'
import { extendClasses } from '../../utilities/extendClasses'

const NextArrow = ({style,className,onClick}) => {
  return (
   <i onClick={onClick} style={style} className={extendClasses(className,'fas fa-chevron-right')}></i>
  )
}

export default NextArrow
