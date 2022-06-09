import React from "react";
import classes from "./style.module.scss";

/**
 * Styled container div
 * @param {*} param0 
 * @returns 
 */
const Container = ({ children, style }) => {
  return (
    <div className={classes.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
