import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
