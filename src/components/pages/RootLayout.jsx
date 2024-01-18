import { Outlet } from "react-router-dom";
import LeftNav from "../navs/LeftNav";
import RightNav from "../navs/RightNav";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className="d-flex container-fluid justify-content-around">
      <LeftNav />
      <main className={classes.main}>
        <Outlet />
      </main>
      <RightNav />
    </div>
  );
};

export default RootLayout;
