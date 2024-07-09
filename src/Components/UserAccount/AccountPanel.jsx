


import React from "react";
import AccountSideBar from "./AccountSideBar";
import { Outlet } from "react-router-dom";
import AdminNav from "../Admin/Layout/AdminNav";

const AccountPanel = ({ topMargin }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center "  >
      <AdminNav/>
      <div className="flex-1 flex" >
        <AccountSideBar/>
        <Outlet/>
    </div>
    </div>
  );
};

export default AccountPanel;
