// import Card from "../UI/Card";
import SearchBar from "../UI/SearchBar";
import classes from "./RightNav.module.css";

import KPremium from "./../KPremium";
import Timeline from "./Timeline";

const RightNav = () => {
  return (
    <div className={classes["right-nav"] + " d-flex flex-column "}>
      <SearchBar />
      <KPremium />
      <Timeline />
    </div>
  );
};

export default RightNav;
