import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
const AppLayout = () => (
  <div className="flex flex-col mx-auto min-h-screen">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default AppLayout;
