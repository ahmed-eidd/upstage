import React from 'react';
import classes from './Footer.module.scss';
import { extendClasses } from '../../utilities/extendClasses';
import PhoneRingingIcon from '../Icons/PhoneRingingIcon';
import MapIcon from '../../assests/Home/SVG/93-128@2x.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={extendClasses(classes.footer__box, classes.box_1)}>
        <h4 className='heading-4--white'>
          GET IN TOUCH <span className='red'>WITH US</span>
        </h4>
        <div className={classes.footer__icons}>
          <div className='footer__icons__wrapper'>
            <img className={classes.footer__img} src={MapIcon} alt='icon' />
            <p className={classes.footer__text}>
              2150 S. Canalport, Chicago, IL 60608
            </p>
            <p className={classes.footer__text}>P.O. Box 81325</p>
          </div>
          <div className={classes.footer__icons__wrapper}>
            <PhoneRingingIcon className={classes.footer__icon} />
            <p className={ classes.footer__number }>864-777-9311</p>
          </div>
        </div>
        <p className={classes.footer__copyright}>
          Privacy Policy &amp; Terms Of Use
        </p>
      </div>
      <div className={extendClasses(classes.footer__box, classes.box_2)}>
        <h4 className='heading-4--white'>
          FOLLOW<span className='red'>US</span>
        </h4>
        <ul className={classes.footer__items}>
          <li className={classes.footer__item}>
            <a
              href='https://www.facebook.com/ATasteOfTheater'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-facebook-f' />
            </a>
          </li>
          <li className={classes.footer__item}>
            <a
              href='https://twitter.com/theaterprogram'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li className={classes.footer__item}>
            <a
              href='https://www.youtube.com/user/ATasteOfTheater'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-youtube' />
            </a>
          </li>
          <li className={classes.footer__item}>
            <a
              href='https://soundcloud.com/afterworkprogram'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-soundcloud' />
            </a>
          </li>
        </ul>
        <p className={classes.footer__copyright}>Upstage © 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
