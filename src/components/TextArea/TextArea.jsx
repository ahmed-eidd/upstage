import { ErrorMessage, Field } from 'formik';
import React from 'react';
import classes from './TextArea.module.scss'

const TextArea = ({
  name,
  label,
  placeholder,
  varient = 'outlined',
  style,
  ...props
}) => {
  const TextAreaStyle = () => {
    if (varient === 'outlined') {
      return classes.TextArea;
    } else if (varient === 'filled') {
      return classes.TextAreaGrey;
    }
  };
  return (
    <div className={classes.TextAreaContainer} style={style}>
      <label htmlFor={name}> {label}</label>
      <Field
        component='textarea' 
        name={name}
        {...props}
        className={TextAreaStyle()}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className={classes.ErrorMessage}>{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default TextArea;
