import React from "react";
import classes from "./style.module.scss";

const Center = ({ children }) => {
  return <div className={classes.center}>{children}</div>;
};

export default Center;
