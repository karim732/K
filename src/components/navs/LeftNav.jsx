import profile from "../../assets/profile.png";

import ListItem from "./ListItem";
import {
  faHouse,
  faSearch,
  faBell,
  faMessage,
  faRectangleList,
  faUsers,
  faK,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import KSymbol from "../UI/KSymbol";
import classes from "./LeftNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems = [
  {
    id: 1,
    title: "Home",
    icon: faHouse,
  },
  { id: 2, title: "Explore", icon: faSearch },
  { id: 3, title: "Notifications", icon: faBell },
  { id: 4, title: "Messages", icon: faMessage },
  { id: 5, title: "Lists", icon: faRectangleList },
  { id: 6, title: "Communities", icon: faUsers },
  { id: 7, title: "Premium", icon: faK },
  { id: 8, title: "Profile", icon: faUser },
  { id: 9, title: "More", icon: faEllipsis },
];
const LeftNav = () => {
  return (
    <div
      className={
        classes["left-nav"] + " d-flex flex-column justify-content-between"
      }
    >
      <ul>
        <li style={{paddingInline:"15px"}}>
          <h2>
            <KSymbol />
          </h2>
        </li>
        {ListItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
        <li>
          <button type="button" className="btn btn-primary w-100 rounded-pill">
            Post
          </button>
        </li>
      </ul>
      <ul className={classes["profile-list"]}>
        <li>
          <img src={profile} alt="profile pic" width="40px" />
          <span className="flex-grow-1 d-flex flex-column">
            <span>Karimshaik73</span>
            <span>@karimshaik73</span>
          </span>
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
