import { Outlet } from "react-router-dom";
import Header from "../Header";

const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default CommonLayout;
