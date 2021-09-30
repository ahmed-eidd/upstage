import { Formik } from 'formik';
import React from 'react';
import classes from './ContactForm.module.scss';
import FormGroup from '../../../../FormGroup/FormGroup';
import Input from '../../../../Input/Input';
import Button from '../../../../Button/Button';

const ContactForm = () => {
  return (
    <Formik initialValues={{ input: '' }}>
      {() => (
        <FormGroup
          formClassName={classes.contactForm}
          title='SEND US YOUR COMMENTS'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '5rem',
            }}
          >
            <Input placeholder='Full Name' name='input' />
            <Input placeholder='Email' name='input' />
          </div>
          <Input placeholder='Phone' name='input' />
          <Input placeholder='Your Message' name='input' />
          <Button style={{alignSelf: 'flex-start'}}>Send</Button>
        </FormGroup>
      )}
    </Formik>
  );
};

export default ContactForm;
