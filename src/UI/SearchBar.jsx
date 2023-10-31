import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
const initialStyles = {
  bgColor: "",
  borderColor: "",
};
const reducer = (state, action) => {
  const focusStyles = {
    bgColor: "white",
    borderColor: "#0a58ca",
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
