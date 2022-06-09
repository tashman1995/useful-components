import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import classes from "./style.module.scss";

/**
 * Represents a button
 * @param {Function} [param.onClick = () => {}] Function thats runs when the button is clicked
 * @param {ReactComponent} param.Icon Icon for the button if required
 * @param {Boolean} [param.color = false] True if you want a color button
 * @param {Object} [param.style={}] Custom style object
 * @param {boolean} [param.disabled = false] Whether or not the button is disabled
 */
const Button = ({
  onClick = () => {},
  Icon,
  children,
  color = false,
  transparent = false,
  style = {},
  disabled = false,
  loading,
  className
}) => {

  return (
    <button
      disabled={disabled || loading}
      onClick={() => onClick()}
      style={style}
      className={`${classes.button} ${color && classes["button--color"]}  ${
        transparent && classes["button--transparent"]
      } ${loading && classes["button--loading"]} ${className}`}>
      {Icon && <Icon className={classes.button__icon} />}
      {children}
      {loading && (
        <div className={classes.button__loader}>
          <LoadingSpinner />
        </div>
      )}
    </button>
  );
};

export default Button;
