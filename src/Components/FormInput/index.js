import React, { useState } from "react";
import classes from "./style.module.scss";

/**
 * Single form input for use within the Form component. Currently supports normal inputs and textareas
 * @param {string} param.label Name of the input
 * @param {Function} param.onChange (Handled by Form component normally) Function thats run when the input value is changed
 * @param {string} param.errorMessage Error message to be shown when inputs criteria is not met (only shown once input has been focused)
 * @param {Object} param.inputProps Any custom attributes you can normally add to a html input 
 * @returns
 */
const FormInput = ({ label, onChange, id, errorMessage, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  // Sets focused to true so that now the error message can be shown if input criteria not met
  const handleFocus = (e) => {
    setFocused(true);
  };

  let InputTag;

  switch (inputProps.type) {
    case "textarea":
      InputTag = "textarea";
      break;
    default:
      InputTag = "input";
  }

  return (
    <div>
      <label className={classes.input__label}>{label}</label>

      <InputTag
        className={classes.input__input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={classes.input__error}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
