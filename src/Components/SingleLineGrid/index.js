import React from "react";
import classes from "./style.module.scss";

/**
 * Creates a grid that places its childen in either a horizontal or vertical line with the provided gap
 * @param {Boolean} [param.vertical=false] default grid is horizontal, if vertical attribute its a vertical line
 * @param {string} [param.gap="2rem"] css valid value for the gap size
 */
const SingleLineGrid = ({
  children,
  vertical = false,
  gap = "2rem",
  style = {},
  className = "",
}) => {
  return (
    <div
      className={`${classes[`grid`]} ${
        classes[`grid--${vertical ? "vertical" : "horizontal"}`]
      } ${className}`}
      style={{ gap, ...style }}>
      {children}
    </div>
  );
};

export default SingleLineGrid;
