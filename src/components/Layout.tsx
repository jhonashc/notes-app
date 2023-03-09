import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const AuthLayout = () => {
  return (
    <div className="grid w-screen h-screen">
      <Outlet />
    </div>
  );
};

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
};
