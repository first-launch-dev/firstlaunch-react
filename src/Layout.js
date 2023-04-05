import { Outlet } from "react-router-dom";
import Header from "./sections/header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;