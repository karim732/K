import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal} open>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
