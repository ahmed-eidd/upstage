import React from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import TextArea from '../../components/TextArea/TextArea';
import classes from './PageSix.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import Flex from '../../components/Flex/Flex';
import Button from '../../components/Button/Button';
import StarRating from '../../components/StarRating/StarRating';

const ReviewModal = ({ open, onClose }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    time: yup.string().required(),
    note: yup.string().required(),
    rate: yup.number().required().default(3),
  });
  return (
    <Modal
      title='Add a Review'
      open={open}
      onClose={onClose}
      className={classes.ReviewModal}
    >
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={schema.cast()}
        validationSchema={schema}
      >
        {({ setFieldValue,values }) => (
          <Form className={classes.ReviewModal__Form}>
            <div className={classes.ReviewModal__Rating}>
              <StarRating onChange={(value) => setFieldValue('rate', value)} name='rate' value={values.rate} />
            </div>
            <Input varient='filled' placeholder='Name' name='name' />
            <Input
              varient='filled'
              placeholder='When have you seen this play?'
              name='time'
            />
            <TextArea name='note' varient='filled' placeholder='note' />
            <Flex justify='flex-end' align='center' gap='1rem'>
              <Button color='grey'>Cancel</Button>
              <Button type='submit'>Done</Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ReviewModal;
