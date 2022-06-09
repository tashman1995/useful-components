import React from "react";
import classes from "./style.module.scss";
import { useTransition, animated } from "react-spring";
import LoadingSpinner from "../LoadingSpinner";

/**
 * Either shows a loading spinner or the children of the component, animates between the two during transitions
 * @param {Boolean} param.loading If true, loading spinner is shown, if false children is shown
 */
const Loading = ({ children, loading }) => {
  // Animation config
  const transition = useTransition(loading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {transition((style, item) => {
        return item ? (
          <animated.div style={style} className={classes["loader__loader"]}>
            <div className={classes["loader__loader-container"]}>
              <LoadingSpinner />
            </div>
          </animated.div>
        ) : (
          <animated.div className={classes["loader__content"]} style={style}>
            {children}
          </animated.div>
        );
      })}
    </>
  );
};

export default Loading;
