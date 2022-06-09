import React from "react";
import Button from "../Button";
import Center from "../Center";
import FormInput from "../FormInput";
import Loading from "../Loading";
import SingleLineGrid from "../SingleLineGrid";
import classes from "./style.module.scss";

/**
 *
 * @param {Array} inputs Array of config objects for the FormInput component
 * @param {Function} onSubmit Function thats run when the submit button is clicked, passed in the form values
 * @param {JSX} children Allows custom JSX to be added to the bottom of the form instead of the submit button
 * @param {Object} values React state object that contains a key for each input element
 * @param {Function} setValues React state setting function for changing the values object
 * @param {Boolean} loading Whether or not the form will be loading or not
 * @returns
 */
const Form = ({
  inputs = [],
  onSubmit,
  children,
  values,
  setValues,
  loading = false,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    onSubmit && onSubmit(values);
  };

  const onChange = (e) => {
    let value;
    switch (e.target.type) {
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
    }
    setValues({ ...values, [e.target.name]: value });
  };

  return (
    <>
      <Loading loading={loading}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <SingleLineGrid
            vertical
            style={{ width: "100%", marginBottom: "3rem" }}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </SingleLineGrid>
          {children ? (
            children
          ) : (
            <Center>
              <Button color>Submit</Button>
            </Center>
          )}
        </form>
      </Loading>
    </>
  );
};

export default Form;
