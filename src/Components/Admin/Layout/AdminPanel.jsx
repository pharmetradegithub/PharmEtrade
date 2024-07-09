import React from "react";
import Sidebar from "./SideBar";
import AdminNav from "./AdminNav";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function AdminPanel() {
  const [IsOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col h-screen overflow-hidden  w-screen bg-gray-100 font-ubuntu">
      <AdminNav />
      <div className="flex w-screen overflow-hidden   ">
        <Sidebar isOpen={setIsOpen} />
        <div className="w-full h-full flex justify-end ">
          <div
            className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
