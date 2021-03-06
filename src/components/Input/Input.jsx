import React from 'react';
import classes from './Input.module.scss';
import { ErrorMessage, Field } from 'formik';

const Input = ({
  name,
  label,
  placeholder,
  varient = 'outlined',
  style,
  ...props
}) => {
  const inputStyle = () => {
    if (varient === 'outlined') {
      return classes.input;
    } else if (varient === 'filled') {
      return classes.inputGrey;
    }
  };
  return (
    <div className={classes.inputContainer} style={style}>
      <label htmlFor={name}> {label}</label>
      <Field
        name={name}
        {...props}
        className={inputStyle()}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className={classes.ErrorMessage}>{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
