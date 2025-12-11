import classes from "./ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ListItem = (props) => {
  return (
    <li className={classes["list-item"]} onClick={props?.handleLogout}>
      <FontAwesomeIcon
        icon={props.item.icon}
        style={{ width: "25px", height: "20px" }}
      />
      {props.isMediumScreen || <span>{props.item.title}</span>}
    </li>
  );
};

export default ListItem;
