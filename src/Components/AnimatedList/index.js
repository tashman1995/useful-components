import React, { useMemo, useContext, useEffect } from "react";
import { useTransition, animated } from "react-spring";

/**
 * This is dodgy and isn't reliable
 * @param {*} param0 
 * @returns 
 */
const AnimatedList = ({ list = [], Element }) => {

  const transitions = useTransition(list, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 100,
    config: (notification, index, phase, other) => (key) => {
      return phase === "enter" ? {} : { duration: 500 };
    },
  });

  return (
    <>
      {transitions((style, item) => (
        <div style={style}>
          <Element key={item.id} deleteFunc={() => {}} {...item} />
        </div>
        // <animated.div style={style}>
        //   <Element key={item.id} deleteFunc={() => {}} {...item} />
        // </animated.div>
        // <animated.div className={classes.message} style={style}>
      ))}
    </>
  );
};

export default AnimatedList;
