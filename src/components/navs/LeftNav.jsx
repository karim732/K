import { useContext, useEffect, useState } from "react";
import { ScreenContext, SmMdSideNavContext } from "../pages/RootLayout";
import profile from "../../assets/profile.png";
import PrimaryButton from "../UI/PrimaryButton";

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
  faBookBookmark,
  faBoltLightning,
  faMoneyBills,
  faRectangleAd,
  faBriefcase,
  faGear,
  faRightFromBracket,
  faPlus,
  faFeatherPointed,
} from "@fortawesome/free-solid-svg-icons";
import KSymbol from "../UI/KSymbol";
import classes from "./LeftNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

const ListItems = [
  {
    id: 1,
    title: "Home",
    icon: faHouse,
  },
  { id: 2, title: "Explore", icon: faSearch },
  { id: 3, title: "Notifications", icon: faBell },
  { id: 4, title: "Messages", icon: faMessage },
  { id: 5, title: "BookMarks", icon: faBookBookmark },
  { id: 6, title: "Communities", icon: faUsers },
  { id: 7, title: "Premium", icon: faK },
  { id: 8, title: "Profile", icon: faUser },
  { id: 9, title: "More", icon: faEllipsis },
];

const SmMdListItems = [
  { id: 1, title: "Profile", icon: faUser },
  { id: 2, title: "Premium", icon: faK },
  { id: 3, title: "Lists", icon: faRectangleList },
  { id: 4, title: "BookMarks", icon: faBookBookmark },
  { id: 5, title: "Verified orgs", icon: faBoltLightning },
  { id: 6, title: "Monetization", icon: faMoneyBills },
  { id: 7, title: "Ads", icon: faRectangleAd },
  { id: 8, title: "Jobs", icon: faBriefcase },
  { id: 9, title: "Settings and privacy", icon: faGear },
  { id: 10, title: "Logout", icon: faRightFromBracket },
];

const SmMdLeftNav = ({ handleLogout }) => {
  const { setIsSmMdSideNavActive } = useContext(SmMdSideNavContext);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
      }}
      onClick={() => setIsSmMdSideNavActive(false)}
    >
      <div
        style={{
          width: "75%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "15px" }}>
          <div className="d-flex justify-content-between">
            <img src={profile} alt="profile pic" width="50px" />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  fontSize: "20px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  padding: "8px",
                  color: "#000000a8",
                }}
              />
            </div>
          </div>
          <div
            role="button"
            className="d-flex flex-column"
            onClick={handleLogout}
          >
            <span style={{ fontSize: "25px", fontWeight: "600" }}>
              Karimshaik73{" "}
            </span>
            <span style={{ fontSize: "20px" }}>@karimshaik73</span>
          </div>
        </div>
        <div>
          {SmMdListItems.map((item) => (
            <ListItem
              key={item?.key}
              item={item}
              handleLogout={item?.title === "Logout" ? handleLogout : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LeftNav = () => {
  const screen = useContext(ScreenContext);
  const { isSmMdSideNavActive } = useContext(SmMdSideNavContext);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsMediumScreen(["medium"].includes(screen));
  }, [screen]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  if (["small"].includes(screen)) {
    if (isSmMdSideNavActive) {
      return <SmMdLeftNav handleLogout={handleLogout} />;
    }
    return;
  }

  return (
    <div
      className={
        classes["left-nav"] + " d-flex flex-column justify-content-between"
      }
    >
      <ul>
        <li>
          <h2>
            <KSymbol />
          </h2>
        </li>
        {ListItems.map((item) => (
          <ListItem key={item.id} item={item} isMediumScreen={isMediumScreen} />
        ))}
        <li>
          <PrimaryButton
            border={"pill"}
            title={
              isMediumScreen ? (
                <FontAwesomeIcon icon={faFeatherPointed} />
              ) : (
                "Post"
              )
            }
            width="100%"
          />
        </li>
      </ul>
      <ul className={classes["profile-list"]}>
        <li onClick={handleLogout}>
          <img src={profile} alt="profile pic" width="40px" />
          {isMediumScreen || (
            <>
              <span className="flex-grow-1 d-flex flex-column">
                <span>Karimshaik73</span>
                <span>@karimshaik73</span>
              </span>
              <FontAwesomeIcon icon={faEllipsis} />
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
