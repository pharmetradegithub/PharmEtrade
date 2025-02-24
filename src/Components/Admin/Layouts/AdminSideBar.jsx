import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../../assets/logo_05.png";
import logo from "../../../assets/Icons/Logo_white.png";
import profile from "../../../assets/ProfileSetting.png";
import { useSelector } from "react-redux";
import sellerIcon from "../../../assets/Dashboard_icon.png";
import banner from "../../../assets/Icons/banners.png";
import useradmin from "../../../assets/Icons/Useradmin.png";
import Retailpharmacy from "../../../assets/Icons/Retailpharmacy.png";
import Generalmerchandise from "../../../assets/Icons/Generalmerchandise.png";
import Pharmacydistributor from "../../../assets/Icons/Pharmacydistributor.png";
import Retailcustomer from "../../../assets/Icons/Retailcustomer.png";
import Products from "../../../assets/Icons/Products.png";
import Allproducts from "../../../assets/Icons/Allproducts.png";
import RXproducts from "../../../assets/Icons/RXproducts.png";
import OTCproducts from "../../../assets/Icons/OTCproducts.png";
import Offeredproducts from "../../../assets/Icons/Offeredproducts.png";
import Payment from "../../../assets/Icons/Payment.png";
import Paymentreceived from "../../../assets/Icons/Paymentreceived.png";
import Paymentsend from "../../../assets/Icons/Paymentsend.png";
import Settlements from "../../../assets/Icons/Settlements.png";
import Reports from "../../../assets/Icons/Reports.png";
import chatIcon from "../../../assets/Dashboard_icon.png";
import customerIcon from "../../../assets/Dashboard_icon.png";
import ordersIcon from "../../../assets/Dashboard_icon.png";
import orderListIcon from "../../../assets/Dashboard_icon.png";
import customerListIcon from "../../../assets/Dashboard_icon.png";
import orderDetailsIcon from "../../../assets/Dashboard_icon.png";

function AdminSidebar() {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [isImgDropdownOpen, setIsImgDropdownOpen] = useState(false);
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  // const [isSettlementDropdownOpen, setIsSettlementDropdownOpen] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isBannerDropdownOpen, setIsBannerDropdownOpen] = useState(false);
  const user = useSelector((state) => state.user?.user || []);



  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/loginadminEtrade");
  };

  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
    // setIsChatDropdownOpen(false);
    setIsCustomerDropdownOpen(false);
  };
  const toggleImgDropdown = () => {
    setIsImgDropdownOpen(!isImgDropdownOpen);
    // setIsChatDropdownOpen(false);
    // setIsCustomerDropdownOpen(false);
  };

  const togglePaymentDropdown = () => {
    setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
    // setIsChatDropdownOpen(false);
    // setIsCustomerDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    
  };

  // const toggleCustomerDropdown = () => {
  //   setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
  //   setIsSellerDropdownOpen(false);
  //   // setIsChatDropdownOpen(false);
  // };

  // const toggleDashboardDropdown = () => {
  //   setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
  // };

  // const toggleBannerDropdown = () => {
  //   setIsBannerDropdownOpen(!isBannerDropdownOpen);
  // };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    
    {
      label: "Dashboard",
      icon: sellerIcon,
      to: "/pharmEtradeadmin", // Direct link to the Dashboard page
    },

    // {
    //   label: "Banners",
    //   icon: banner,
    //   to: "/pharmEtradeadmin/AdminBanners",
    
    // },
    {
      label: "Image",
      icon: banner,
      isOpen: isImgDropdownOpen,
      toggleDropdown: toggleImgDropdown,
      links: [
        {
          to: "/pharmEtradeadmin/AdminBanners",
          label: "Banners",
          icon: banner,
        },
        {
          to: "/pharmEtradeadmin/AdminOffersImgUpload",
          label: "Offers",
          icon: banner,
        },
      ],
    },
    {
      label: "User Administration",
      icon: useradmin,
      isOpen: isSellerDropdownOpen,
      toggleDropdown: toggleSellerDropdown,
      links: [
        {
          to: "/pharmEtradeadmin/RetailPharmacyList",
          label: "Retail Pharmacy",
          icon: Retailpharmacy,
        },
        {
          to: "/pharmEtradeadmin/GeneralMerchandiseSellerList",
          label: "General Merchandise Seller",
          icon: Generalmerchandise,
        },
        {
          to: "/pharmEtradeadmin/PharmacyDistributorList",
          label: "Pharmacy Distributor",
          icon: Pharmacydistributor,
        },
        {
          to: "/pharmEtradeadmin/customerList",
          label: "Retail Customer",
          icon: Retailcustomer,
        },
      ],
    },

    {
      label: "Products",
      icon: Products,
      isOpen: isProductsDropdownOpen,
      toggleDropdown: toggleProductsDropdown,
      links: [
        {
          to: "/pharmEtradeadmin/products",
          label: "All Products",
          icon: Allproducts,
        },
        {
          to: "/pharmEtradeadmin/RxProducts",
          label: "Rx Products",
          icon: RXproducts,
        },
        {
          to: "/pharmEtradeadmin/OtcProducts",
          label: "OTC Products",
          icon: OTCproducts,
        },
        {
          to: "/pharmEtradeadmin/OfferedProducts",
          label: "Offered Products",
          icon: Offeredproducts,
        },
        {
          to: "/pharmEtradeadmin/TaxInformation",
          label: "State Tax Information",
          icon: Offeredproducts,
        },
      ],
    },
    //   to: "/pharmEtradeadmin/products", // Direct link to the Dashboard page
    // },


    {
      label: "Payment",
      icon: Payment,
      isOpen: isPaymentDropdownOpen,
      toggleDropdown: togglePaymentDropdown,
      links: [
        {
          to: "/pharmEtradeadmin/Incoming",
          label: "Payments Received",
          icon: Paymentreceived,
        },
        {
          to: "/pharmEtradeadmin/Outgoing",
          label: "Payments Send",
          icon: Paymentsend,
        },
        {
          to: "/pharmEtradeadmin/Settlement",
          label: "Settlements",
          icon: Settlements,
        },
        
      ],
      
    },

    {
      label: "Reports",
      icon: Reports,
      to: "/pharmEtradeadmin/reports", // Direct link to the Dashboard page
    },


  ];

  return (
    <div
      className={`p-2 overflow-scroll h-full w-full z-[100] font-normal font-sans flex flex-col shadow-lg ${isCollapsed ? "min-w-16 items-center" : "min-w-64"
        }`}
      style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
    >
      <div className="w-full flex flex-col justify-center items-center my-5">
        <Link to="">
          <img src={logo} className="w-44 mb-2" alt="Logo" />
        </Link>
        <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
          <div className="flex justify-center flex-col items-center">
            <img
              src={profile}
              className="w-10 h-10 rounded-full"
              alt="Profile"
            />
            <p className="text-base text-red-500 font-semibold my-1">Admin</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex medium:hidden items-center justify-end p-2">
          <button
            onClick={toggleCollapse}
            className="text-gray-700 hover:text-blue-900"
          >
            {isCollapsed ? (
              <FaBars className="w-6 h-6" />
            ) : (
              <FaTimes className="w-6 h-6" />
            )}
          </button>
        </div>

        <nav className="space-y-2 text-[16px]">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.links ? (
                <div
                  className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                  onClick={item.toggleDropdown}
                >
                  <div className="flex items-center">
                    <img src={item.icon} className="w-6 h-6" alt={item.label} />
                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  </div>
                  {!isCollapsed &&
                    (item.isOpen ? (
                      <FaChevronUp
                        className={`mr-2 ${item.links.length > 0 ? "" : "hidden"
                          }`}
                      />
                    ) : (
                      <FaChevronDown
                        className={`mr-2 ${item.links.length > 0 ? "" : "hidden"
                          }`}
                      />
                    ))}
                </div>
              ) : (
                // Direct navigation link for items without dropdowns (e.g., Dashboard)
                <Link
                  to={item.to}
                  onClick={() => handleClick(item.to)}
                  className={`flex items-center p-2 ${activeLink === item.to
                      ? "text-white bg-gray-400"
                      : "text-white"
                    } hover:text-white hover:bg-gray-400`}
                >
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              )}
              {item.isOpen && !isCollapsed && item.links && (
                <ul className="ml-6">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        onClick={() => handleClick(link.to)}
                        className={`flex items-center p-2 ${activeLink === link.to
                            ? "text-white bg-gray-400"
                            : "text-white"
                          } hover:text-white hover:bg-gray-400`}
                      >
                        <img
                          src={link.icon}
                          className="w-6 h-6"
                          alt={link.label}
                        />
                        <span className="ml-3">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <button
          className="text-white bg-red-600 mt-2 p-2 rounded-lg font-semibold"
        onClick={handleLogout}
        >
          Logout
        </button>








      </div>
    </div>
  );
}

export default AdminSidebar;
