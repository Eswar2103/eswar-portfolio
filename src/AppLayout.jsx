import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
