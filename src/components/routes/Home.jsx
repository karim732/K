import classes from "./Home.module.css"
import { useContext, useEffect, useState, useRef  } from "react";
import { ScreenContext } from "../pages/RootLayout";
import HomeHeader from "../headers/HomeHeader";
import CreatePost from "../posts/CreatePost";
import HomeFeed from "../feed/HomeFeed";
import HomeNav from "../navs/HomeNav";
import BottomNav from "../navs/BottomNav";

const Home = () => {
  const screen = useContext(ScreenContext)
  const [ showBottomNav, setShowBottomNav ] = useState(true)
  const scrollContainerRef = useRef(null);

  const scrollContainer = scrollContainerRef.current;
  useEffect( () =>{
    console.log('ss',scrollContainer)
    let lastScrollY = window.scrollY;
    console.log('ls', lastScrollY)
    const handleScroll = () => {
      console.log('asdfg')
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowBottomNav(true); 
      } else {
        setShowBottomNav(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ scrollContainer ])

  return (
    <>
    <div className={classes["home--top--nav"]}>
      {['small'].includes(screen) && <HomeNav /> }
      <HomeHeader />
    </div>
      {!['small'].includes(screen) && <CreatePost /> }
      <HomeFeed  ref={scrollContainerRef}/>
      {['small'].includes(screen) && showBottomNav && <BottomNav /> }
    </>
  );
};

export default Home;
