import { ErrorMessage, Field } from 'formik';
import React from 'react';
import classes from './Input.module.scss';

const Input = ({ name, label, placeholder, style, ...props }) => {
  return (
    <div className={classes.inputContainer} style={style}>
      <label htmlFor={name}> {label}</label>
      <Field
        name={name}
        {...props}
        className={classes.input}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}  >{(msg) => <p className={classes.ErrorMessage}>{msg}</p>}</ErrorMessage>
    </div>
  );
};

export default Input;
