import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

const Base = () => {
  const location = useLocation();
  const isOnlyOutlet = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <>
      {isOnlyOutlet || <NavBar></NavBar>}
      <Outlet></Outlet>
      {isOnlyOutlet || <Footer></Footer>}
    </>
  );
};

export default Base;
