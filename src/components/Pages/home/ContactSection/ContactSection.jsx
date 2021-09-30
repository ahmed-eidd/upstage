import React from 'react';
import Box from '../../../Box/Box';
import classes from './ContactSection.module.scss';
import FacebookIcon from '../../../Icons/FacebookIcon';
import PhoneIcon from '../../../Icons/PhoneIcon';
import MessageIcon from '../../../Icons/MessageIcon';
import LocationIcon from '../../../Icons/LocationIcon';
import ContactForm from './ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <Box className={classes.contact}>
      <div className={classes.contact__info}>
        <h4 className='heading-4'>CONTACT US</h4>
        <div className={classes.contact__info__cont}>
          <PhoneIcon className={classes.contact__info__icon} />
          <p className={classes.contact__info__paragraph}>
            <span className='strong-p'>Phone</span>
            <br />
            864-777-9311
          </p>
        </div>
        <div className={classes.contact__info__cont}>
          <MessageIcon className={classes.contact__info__icon} />
          <p className={classes.contact__info__paragraph}>
            <span className='strong-p'>Email</span>
            <br />
            support@myupstage.com
          </p>
        </div>
        <div className={classes.contact__info__cont}>
          <FacebookIcon className={classes.contact__info__icon} />
          <p className={classes.contact__info__paragraph}>
            <span className='strong-p'>Facebook</span>
            <br />
            facebook.com/ATasteOfTheater
          </p>
        </div>
        <div className={classes.contact__info__cont}>
          <LocationIcon className={classes.contact__info__icon} />
          <p className={classes.contact__info__paragraph}>
            <span className='strong-p'>Address</span>
            <br />
            2150 S. Canalport, Chigao, IL 60608
          </p>
        </div>
      </div>
      <div className={classes.contact__form}>
        <ContactForm />
        {/*   <h4 className='heading-4'>SEND US YOUR COMMENTS</h4>
          <div className={ classes.contact__form__box }>
            <input
              className={ classes.contact__form__input }
              type='text'
              placeholder='Full Name'
              required
              autoComplete='none'
            />
            <input
              className='classes.contact__form__input'
              type='email'
              placeholder='Email'
              required
              autoComplete='none'
            />
            <input
              className='classes.contact__form__input'
              type='text'
              placeholder='Phone'
              required
              autoComplete='none'
            />
            <input
              className='classes.contact__form__input'
              type='text'
              placeholder='Your Message'
              required
              autoComplete='none'
            />
            <button className='btn-red' type='submit'>
              submit
            </button>
          </div> */}
      </div>
    </Box>
  );
};

export default ContactSection;
