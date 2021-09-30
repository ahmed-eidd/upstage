import { Formik } from 'formik';
import React from 'react';
import Button from '../../../../Button/Button';
import FormGroup from '../../../../FormGroup/FormGroup';
import Input from '../../../../Input/Input';
import classes from './HeaderForm.module.scss';
import * as yup from 'yup'

const HeaderForm = () => {
  const schema = yup.object().shape({
    date: yup.string().default('').required()
  })
  return (
    <Formik initialValues={schema.cast()} validationSchema={schema} >
      {() => (
        <>
          <FormGroup>
            <div action className={classes.header__forms}>
              <h5 className='heading-4'>Let's go see a play today</h5>
              <div className={classes.header__forms__inputs}>
                <Input name='date' placeholder='Date' />
                <Input name='place' placeholder='Place' />
                <Input name='playName' placeholder='Play Name' />
                <Input name='playType' placeholder='Play Time' />
              </div>
              <Button style={{ width: '70%' }}>Search</Button>
            </div>
          </FormGroup>
        </>
      )}
    </Formik>
  );
};

export default HeaderForm;
