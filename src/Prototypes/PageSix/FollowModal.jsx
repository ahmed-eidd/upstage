import { Form, Formik } from 'formik';
import React from 'react';
import Modal from '../../components/Modal/Modal';
import classes from './PageSix.module.scss';
import * as yup from 'yup';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Flex from '../../components/Flex/Flex';

const FollowModal = ({ open,onClose }) => {
  const schema = yup.object().shape({
    email: yup.string().email(),
  });

  return (
    <Modal onClose={onClose} title='Follow this play' className={classes.FollowModal} open={open}>
      <p className={classes.FollowModal__Text}>
        You have elected to follow the play Blood Brothers. If there are any
        performances or changes to the dates you will be notified.
      </p>
      <p className={classes.FollowModal__Text}>
        Please enter email address where notification are to be sent
      </p>
      <Formik initialValues={schema.cast()} validationSchema={schema}>
        {() => (
          <Form className={classes.FollowModal__Form}>
            <Input varient='filled' placeholder='Email Address' name='email' />
            <Flex justify='flex-end' align='center' gap='1rem'>
              <Button color='grey'>Cancel</Button>
              <Button>Done</Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default FollowModal;
