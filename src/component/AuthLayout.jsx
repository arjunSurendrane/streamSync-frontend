/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AuthLayout() {
  return (
    <div>
      <Header />
      <div className="grid grid-flow-col">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
