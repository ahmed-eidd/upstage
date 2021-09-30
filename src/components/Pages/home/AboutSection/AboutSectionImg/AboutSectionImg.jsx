import React from 'react'
import classes from './AboutSectionImg.module.scss'

const AboutSectionImg = ({img,alt}) => {
  return (
    <div className={classes.aboutSectionImg}>
      <img src={img} alt={alt} />
    </div>
  )
}

export default AboutSectionImg
