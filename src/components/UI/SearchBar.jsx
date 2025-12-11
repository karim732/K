import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
const initialStyles = {
  bgColor: "",
  borderColor: "",
  iconColor: "",
};
const reducer = (state, action) => {
  const focusStyles = {
    bgColor: "white",
    borderColor: "#1d9bf0",
    iconColor: "#1d9bf0",
  };
  return action.type === "focus" ? focusStyles : initialStyles;
};

const SearchBar = () => {
  const [style, dispatch] = useReducer(reducer, initialStyles);
  const searchInputHandler = () => {
    dispatch({ type: "focus" });
  };
  const clearFocusHandler = () => {
    dispatch({ type: "blur" });
  };
  return (
    <label
      className={classes["search-bar"] + " d-flex rounded-pill"}
      onFocus={searchInputHandler}
      onBlur={clearFocusHandler}
      style={{ backgroundColor: style.bgColor, borderColor: style.borderColor }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        className={classes["search-icon"]}
        pull="left"
        color={style.iconColor}
      />
      <input
        type="text"
        className={classes["search-input"]}
        placeholder="Search"
        style={{ backgroundColor: style.bgColor }}
      />
    </label>
  );
};

export default SearchBar;
