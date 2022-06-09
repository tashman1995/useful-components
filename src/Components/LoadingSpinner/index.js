import React from 'react'
import classes from "./style.module.scss"

/**
 * Simple loading spinner
 * @returns 
 */
const LoadingSpinner = () => {
  return (
    <svg
      className={classes["loading-circle-spinner__circle-svg"]}
      viewBox="25 25 50 50">
      <circle
        className={classes["loading-circle-spinner__circle-stroke"]}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default LoadingSpinner