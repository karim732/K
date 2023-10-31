import SearchBar from "../UI/SearchBar";
import classes from "./RightNav.module.css";

const RightNav = () => {
  return (
    <div className={classes["right-nav"] + " d-flex flex-column "}>
      <SearchBar />
    </div>
  );
};

export default RightNav;
