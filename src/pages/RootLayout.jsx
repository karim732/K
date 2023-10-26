import { Outlet } from "react-router-dom";
import LeftNav from "../navs/LeftNav";
import RightNav from "../navs/RightNav";
const RootLayout = () => {
  return (
    <div className="d-flex container-fluid justify-content-around">
      <LeftNav />
      <main>
        <Outlet />
      </main>
      <RightNav />
    </div>
  );
};

export default RootLayout;
