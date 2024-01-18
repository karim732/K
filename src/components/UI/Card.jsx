import classes from "./Card.module.css";
const Card = ({ children }) => {
  return <div className={classes.card + " mt-3"}>{children}</div>;
};

export default Card;
