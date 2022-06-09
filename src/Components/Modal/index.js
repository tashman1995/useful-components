import React from "react";
import classes from "./style.module.scss";
import { createPortal } from "react-dom";
import { useTransition, animated } from "react-spring";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faXmark } from "@fortawesome/free-solid-svg-icons";

  /**
   * Animated modal
   * @param {JSX} param.children JSX content for the modal to show
   * @param {Boolean} param.visible Whether or not the modal will be visible or not, typically react state
   * @param {Boolean} param.setVisible How to update the visibility, typically react state setting function
   * @returns 
   */
const Modal = ({ children, visible = false, setVisible }) => {
  const backdropTransition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const contentTransition = useTransition(visible, {
    from: { y: 30 },
    enter: { y: 0 },
    leave: { y: 30 },
  });

  return createPortal(
    <>
      {backdropTransition((style, item) => {
        return item ? (
          <animated.div style={style} className={classes["modal"]}>
            {/* Close button */}
            <button
              onClick={() => {
                setVisible(false);
              }}
              className={classes["modal__close"]}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {contentTransition((style, item) => {
              return item ? (
                <animated.div
                  style={style}
                  className={classes["modal__content"]}>
                  {children}
                </animated.div>
              ) : (
                ""
              );
            })}
          </animated.div>
        ) : (
          ""
        );
      })}
    </>,
    document.getElementById("modal_root")
  );
};

export default Modal;
