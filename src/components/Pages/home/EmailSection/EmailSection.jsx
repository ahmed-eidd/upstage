import React from 'react';
import Button from '../../../Button/Button';
import classes from './EmailSection.module.scss';

const EmailSection = () => {
  return (
    <section className={classes.section__email}>
      <div className={classes.section__email__cont}>
        <i
          className={`fas fa-envelope-open-text ${classes.section__email__icon}`}
        />
        <div className={classes.section__email__text}>
          <h4 className='heading-4--black'>
            DON'T MISS <span className='red'> ANY UPDATE</span>
          </h4>
          <p className={classes.section__email__paragraph}>
            Sign up with your email to recive lastest updates
          </p>
        </div>
        <form className={classes.section__email__form}>
          <input
            type='email'
            placeholder='Enter Your Email Address'
            className={classes.section__email__form__input}
          />
          {/* <button className={ classes.btn-red  } type='submit'>
            Submit
          </button> */}
          <Button className={classes.section__email__form__btn}>Submit</Button>
        </form>
        <p className={classes.section__email__paragraph}>
          Don't worry, we won't spam your inbox.
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
