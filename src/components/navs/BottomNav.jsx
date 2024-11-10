import classes from "./BottomNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse,
    faSearch,
    faBell,
    faMessage,
    faUsers,
    faFeatherPointed
 } from "@fortawesome/free-solid-svg-icons";
 const bottomNavs = [faHouse, faSearch, faBell,faMessage,faUsers,]
const BottomNav = () => {

    return <div className={classes["bottom--nav"]}>
        <div className={classes["post"]}><FontAwesomeIcon icon={faFeatherPointed} /></div>
        
        <div className={classes["bottom--nav--icons"]}>

        {bottomNavs.map(icon => <FontAwesomeIcon icon={icon} />)}
        </div>
    </div>
}

export default BottomNav;