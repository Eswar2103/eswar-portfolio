import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

function AppLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
