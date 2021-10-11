import React from 'react'

const SliderArrow = ({img,className,style,onClick, left,right}) => {
  return (
    <img src={img} alt='arrow' className={className} style={{...style, width: 'auto' ,}} onClick={onClick} />
  )
}

export default SliderArrow
