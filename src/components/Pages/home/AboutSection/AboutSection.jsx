import React from 'react';
import Box from '../../../Box/Box';
import classes from './AboutSection.module.scss';
import AboutSectionImg from './AboutSectionImg/AboutSectionImg';
import Picture1 from '../../../../assests/Home/Picture2@2x.png'
import Picture2 from '../../../../assests/Home/Picture3@2x.png'
import Picture3 from '../../../../assests/Home/Picture4@2x.png'

const AboutSection = () => {
  return (
    <Box className={classes.aboutSection}>
      <h3 className='heading-3--red'>About Us</h3>
      <div className={classes.aboutSection__content}>
        <div className={classes.aboutSection__content__text}>
          <p className={classes.aboutSection__content__text__paragraph}>
            Upstage is the direct result of being a theatre company owner. As a
            theatre professional who is passionate about the stage, I
            continuously faced problem after problem trying to get a show off
            the ground.
          </p>
          <p className={classes.aboutSection__content__text__paragraph}>
            Some of these issues included finding the right theatre space to
            produce the show, finding the right actors, finding a production
            team, finding sponsors and everything in between.
          </p>
          <p className={classes.aboutSection__content__text__paragraph}>
            As a direct result of these challenges, I have created a product
            that will be the one stop shop for theatre professionals. A platform
            that will handle all aspects of theatre production needs from the
            writing of the play to the close of the curtain.
          </p>
          <p className={classes.aboutSection__content__text__paragraph}>
            Upstage will be the platform that all theatre professionals will use
            to manage their careers, performances, actors, production teams and
            help market performances to the public.
          </p>
        </div>
        <div className={classes.aboutSection__content__pictures}>
          <AboutSectionImg  img={Picture1} /> 
          <AboutSectionImg  img={Picture2}/> 
          <AboutSectionImg img={Picture1} /> 
          <AboutSectionImg img={Picture3} /> 
        </div>
      </div>
    </Box>
  );
};

export default AboutSection;
