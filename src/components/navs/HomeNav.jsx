import { useContext } from 'react';
import { SmMdSideNavContext } from '../pages/RootLayout';
import KSymbol from '../UI/KSymbol';
import classes from './HomeNav.module.css';
import profile from '../../assets/profile.png';
const HomeNav = () =>{
    const {setIsSmMdSideNavActive} = useContext(SmMdSideNavContext)

    return <div className={classes["home--nav"]}>
        <img src={profile} alt="profile pic" width="35px" height="35px" onClick={()=> setIsSmMdSideNavActive(true)}/>
        <div style={{marginInline: "auto"}}>
            <KSymbol />
        </div>
        <a href="#">Get Premium</a>
    </div>
}

export default HomeNav;