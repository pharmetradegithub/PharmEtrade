import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import LayoutSidebar from "./LayoutSidebar";
import LayoutNav from "./LayoutNav";


function LayoutPanel({ cartItems }) {
  return (
    // <div className="flex w-screen h-screen overflow-hidden bg-gray-100">
    //   <div className="w-64 h-full bg-blue">
    //     <LayoutSidebar />
    //   </div>
    //   <div
    //     className={`medium:w-[calc(100%-256px)] flex flex-col h-full w-[calc(100%-4rem)] `}
    //   >
    //     <LayoutNav cartItems={cartItems} />
    //     <Outlet />
    //   </div>
    // </div>

    <div className="flex w-screen h-screen overflow-x-hidden bg-gray-100">
      {/* Sidebar */}

      <div className="w-12 lg:w-64 bg-blue h-[52px] md:h-full top-[2%] md:top-0 absolute md:relative z-50">
        <LayoutSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col h-full w-full lg:w-[calc(100%-256px)] md:w-[calc(100%-4rem)]">
        <LayoutNav cartItems={cartItems} />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPanel;
