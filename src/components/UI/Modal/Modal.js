import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  const styles = props.show ? classes.modalVisible : classes.modalNotVisible;
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div className={styles}>{props.children}</div>
    </Aux>
  );
};

export default Modal;
