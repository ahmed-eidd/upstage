import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';

const PrevArrow = ({className, style, onClick}) => {
  return <i onClick={onClick} style={style} className={extendClasses(className,'fas fa-chevron-left')}></i>;
};

export default PrevArrow;
