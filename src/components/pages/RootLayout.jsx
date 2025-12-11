import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../navs/LeftNav";
import RightNav from "../navs/RightNav";
import classes from "./RootLayout.module.css";

const screenType = (w) => {
  if ( w <= 480 ){
    return 'small'
  }
  else if ( w <= 768){
    return 'medium'
  }
  else if ( w <= 1279){
    return 'large'
  }
  else {
    return 'xlarge'
  }
}

export const ScreenContext = createContext(null);

export const SmMdSideNavContext = createContext()

const RootLayout = () => {

  const [isSmMdSideNavActive, setIsSmMdSideNavActive] = useState(false)

  const [screen, setScreen] = useState(screenType(window.innerWidth));
  useEffect(() => {
    // Function to update the width
    const handleResize = () => {
      setScreen(screenType(window.innerWidth));
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <ScreenContext.Provider value={screen}>
      <SmMdSideNavContext.Provider value={{isSmMdSideNavActive, setIsSmMdSideNavActive}}>
        <style>
                  {`
                  @media only screen and (max-width: 768px) {
                    .d-flex.container-fluid {
                          --bs-gutter-x: 0 !important;
                    }
                  }

          `}
        </style>
        <div className="d-flex container-fluid justify-content-around">
          <LeftNav />
          <main className={classes.main}>
            <Outlet />
          </main>
          <RightNav />
        </div>
      </SmMdSideNavContext.Provider>
    </ScreenContext.Provider>
  );
};

export default RootLayout;
