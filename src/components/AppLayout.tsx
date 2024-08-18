import Header from "./Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => (
  <div className="flex flex-col mx-auto min-h-screen">
    <Header />
    <Outlet />
  </div>
);

export default AppLayout;
