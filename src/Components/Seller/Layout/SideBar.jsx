import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import dashboard from "../../../assets/Dashboard_icon.png";
import payout from "../../../assets/Payouts_icon.png";
import earnings from "../../../assets/Earnings_icon.png";
import review from "../../../assets/Review_icon.png";
import returnicon from "../../../assets/Returns_icon.png";
import quote from "../../../assets/RequestForQuote_icon.png";
import settings from "../../../assets/Settings_icon.png";
import sellerinfo from "../../../assets/Seller_info_icon.png";
import assign from "../../../assets/AssignProducts_icon.png";
import homeIcon from "../../../assets/Home_icon.png";
import productsIcon from "../../../assets/Products_icon.png";
import customersIcon from "../../../assets/Customers_icon.png";
import ordersIcon from "../../../assets/Orders_icon.png";
import requestedQuoteIcon from "../../../assets/RequestedForQuote_icon.png";
import quotedProductsIcon from "../../../assets/RequestedForQuote_icon.png";
import profileSettingIcon from "../../../assets/ProfileSetting_icon.png";
import upsShippingIcon from "../../../assets/UPSShipping_icon.png";
import fedexShippingIcon from "../../../assets/UPSShipping_icon.png";
import shippingSettingIcon from "../../../assets/ShippingSetting_icon.png";
import manageShippingIcon from "../../../assets/ManageShipping_icon.png";
import singleProductIcon from "../../../assets/AddSingleProduct.png";
import xlSheetIcon from "../../../assets/BulkProduct.png";

const Sidebar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQDropdownOpen, setIsQDropdownOpen] = useState(false);
  const [isSDropdownOpen, setIsSDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const toggleDropdown = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleQDropdown = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setIsQDropdownOpen(!isQDropdownOpen);
  };

  const toggleSDropdown = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setIsSDropdownOpen(!isSDropdownOpen);
  };

  const toggleProductsDropdown = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: dashboard,
      isOpen: isDropdownOpen,
      toggleDropdown: toggleDropdown,
      links: [
        { to: "/seller", label: "Home", icon: homeIcon },
        { to: "/seller/orders", label: "Orders", icon: ordersIcon },
        {
          label: "Products",
          icon: productsIcon,
          isOpen: isProductsDropdownOpen,
          toggleDropdown: toggleProductsDropdown,
          links: [
            // {
            //   to: "/seller/market-product-list",
            //   label: "Market Products List",
            //   icon: singleProductIcon,
            // },
            {
              // to: "/seller/add-single-product",
              to: "/seller/market-product-list",
              label: "Product",
              icon: singleProductIcon,
            },
            {
              to: "/seller/add-xl-sheet",
              label: "Add Bulk Products",
              icon: xlSheetIcon,
            },
          ],
        },
        { to: "/seller/customers", label: "Customers", icon: customersIcon },
      ],
    },
    {
      to: "/seller/payouts",
      label: "Pay Outs",
      icon: payout,
    },
    {
      to: "/seller/earnings",
      label: "Earnings",
      icon: earnings,
    },
    {
      to: "/seller/review",
      label: "Review",
      icon: review,
    },
    {
      to: "/seller/returns",
      label: "Returns",
      icon: returnicon,
    },
    {
      to: "/seller/assign-products",
      label: "Assign Products",
      icon: assign,
    },
    {
      to: "/seller/assign-product-list",
      label: "Assign Product List",
      icon: assign,
    },
    {
      label: "Request for Quote",
      icon: quote,
      isOpen: isQDropdownOpen,
      toggleDropdown: toggleQDropdown,
      links: [
        {
          to: "/seller/request-quote",
          label: "All Requested Quote",
          icon: requestedQuoteIcon,
        },
        {
          to: "/seller/quoted-product",
          label: "All Quoted Products",
          icon: quotedProductsIcon,
        },
      ],
    },
    {
      label: "Settings",
      icon: settings,
      isOpen: isSDropdownOpen,
      toggleDropdown: toggleSDropdown,
      links: [
        {
          to: "/seller/settings",
          label: "Profile Setting",
          icon: profileSettingIcon,
        },
        {
          to: "/seller/ups-shipping",
          label: "UPS Shipping",
          icon: upsShippingIcon,
        },
        {
          to: "/seller/fedex-shipping",
          label: "Fedex Shipping",
          icon: fedexShippingIcon,
        },
        {
          to: "/seller/shipping-settings",
          label: "Shipping Setting",
          icon: shippingSettingIcon,
        },
        {
          to: "/seller/manage-shipping",
          label: "Manage Multi Shipping",
          icon: manageShippingIcon,
        },
      ],
    },
    {
      to: "/user",
      label: "Seller Information",
      icon: sellerinfo,
    },
  ];

  return (
    <div
      className={`p-2 bg-blue absolute h-[calc(100%-80px)] overflow-scroll z-[100] font-normal flex flex-col shadow-lg ${
        isCollapsed ? "min-w-16 items-center" : "min-w-64"
      }`}
    >
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
            {item.label && item.links ? (
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
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ))}
              </div>
            ) : (
              <Link
                to={item.to}
                onClick={() => handleClick(item.to)}
                className={`flex items-center p-2 ${
                  activeLink === item.to
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
                    {link.label && link.links ? (
                      <div
                        className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                        onClick={link.toggleDropdown}
                      >
                        <div className="flex items-center">
                          <img
                            src={link.icon}
                            className="w-4 h-4"
                            alt={link.label}
                          />
                          <span className="ml-3">{link.label}</span>
                        </div>
                        {link.isOpen ? (
                          <FaChevronUp
                            className={`mr-2 ${
                              link.links.length > 0 ? "" : "hidden"
                            }`}
                          />
                        ) : (
                          <FaChevronDown
                            className={`mr-2 ${
                              link.links.length > 0 ? "" : "hidden"
                            }`}
                          />
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() => handleClick(link.to)}
                        className={`flex items-center p-2 ${
                          activeLink === link.to
                            ? "text-white bg-gray-400"
                            : "text-white"
                        } hover:text-white hover:bg-gray-400`}
                      >
                        <img
                          src={link.icon}
                          className="w-4 h-4"
                          alt={link.label}
                        />
                        <span className="ml-3">{link.label}</span>
                      </Link>
                    )}
                    {link.isOpen && !isCollapsed && link.links && (
                      <ul className="ml-6">
                        {link.links.map((sublink, subidx) => (
                          <li key={subidx}>
                            <Link
                              to={sublink.to}
                              onClick={() => handleClick(sublink.to)}
                              className={`flex items-center p-2 ${
                                activeLink === sublink.to
                                  ? "text-white bg-gray-400"
                                  : "text-white"
                              } hover:text-white hover:bg-gray-400`}
                            >
                              <img
                                src={sublink.icon}
                                className="w-4 h-4"
                                alt={sublink.label}
                              />
                              <span className="ml-3">{sublink.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
