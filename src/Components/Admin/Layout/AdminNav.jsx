import React from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/Icons/Etrade.png";
import Logo from "../../../assets/Icons/logo.png";

const AdminNav = () => {
  function handleclicked() {
    navigate("/app");
  }

  let navigate = useNavigate();

  return (
    <div className="flex h-[80px] justify-between items-center border border-gray-300 bg-white p-4 font-ubuntu">
      <div className="font-bold text-xl cursor-pointer" onClick={handleclicked}>
        <img
          src={Logo}
          className="w-12 md:w-20 lg:w-36 xl:w-60 h-12 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FiUser className="w-6 h-6" />
        <div>Account Settings</div>
      </div>
    </div>
  );
};

export default AdminNav;
