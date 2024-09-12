import React from "react";

import Logo from "../../../assets/logo2.png";
import Search from "../../../assets/search.png";
import cartNav from "../../../assets/cartNav2.png";
import like from "../../../assets/wishlistnav_icon.png";
import compare from "../../../assets/CompareNav2.png";

import note from "../../../assets/Icons/Compare.png";

import join from "../../../assets/Join3d.png";
import Buy from "../../../assets/buy3d.png";
import sell from "../../../assets/sell3d.png";
import bid from "../../../assets/Bid3d.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../../../assets/add.png";
import warning from "../../../assets/Icons/warning2.png";
import linkedin from "../../../assets/linkedin_icon.png";
import facebook from "../../../assets/facebook_icon.png";
import insta from "../../../assets/instagram_icon.png";
import twitter from "../../../assets/twitter_icon.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import myaccount from "../../../assets/My Account.png";
import { TbTruckReturn } from "react-icons/tb";
// import Baby from "../../All Category/Baby";
// import Beauty from "../../All Category/Beauty";
// import Grocery from "../../All Category/Grocery";
// import HealthTopics from "../../All Category/HealthTopics";
// import Herbs from "../../All Category/Herbs";
// import Home from "../../All Category/Home";
// import Medicines from "../../All Category/Medicines";
// import PersonalCare from "../../All Category/PersonalCare";
// import Pets from "../../All Category/Pets";
// import SportsNutrition from "../../All Category/SportsNutrition";
// import Suppliments from "../../All Category/Suppliments";
import WhyPharma from "../NavLinks/WhyPharma";
import search from "../../../assets/search-icon.png";
import dropdown from "../../../assets/Down-arrow .png";
import { useSelector } from "react-redux";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";

function Nav({ topDivRef, Form_Data, TriggerAPI }) {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  const [selectedIndex, setSelectedIndex] = useState();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [popUps, setPopUps] = useState(<Baby />);

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (name) => {
    setPopUps(name);
  };

  const handleCatMouseLeave = () => {
    setPopUps(null);
  };

  const handleRedirect = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const MenuItems = [
    "Home",
    "Products",
    "Why PharmEtrade",
    "About Us",
    "Contact Us",
    "Request Demo",
  ];

  const [errorMessage, setErrorMessage] = useState("");

  const handleItemclick = (item) => {
    if (user?.accountTypeId == 1 && item.label === "SELL") {
      setErrorMessage(
        // "You have login as buyer contact us help@pharmetrade.com"
        <>
        You have login as buyer contact us {" "}
      
        <a href="  " className="text-blue-900 underline ">help@pharmetrade.com</a></>
      );
    } else {
      navigate(item.path);
    }
  };

  // Clear error message after 3 seconds
  // if (errorMessage) {
  //   setTimeout(() => setErrorMessage(""), 10000);
  // }

  const downDivItems = [
    // { label: "BUY", icon: Buy, path: "/layout" },
    // { label: "JOIN", icon: join, path: "/login" },
    // { label: "SELL", icon: sell, path:"/layout/addproduct" },
    // { label: "BID", icon: bid, path: "/bid" },
    { label: "BUY", icon: Buy, path: user ? "/layout" : "login" },
    { label: "JOIN", icon: join, path: "/login" },
    {
      label: "SELL",
      icon: sell,
      path: user ? "/layout/addproduct" : "/login",
    },
    { label: "BID", icon: bid, path: user ? "/bid" : "login" },
  ];

  const downSocialItems = [
    { icon: linkedin, path: "#" },
    { icon: facebook, path: "#" },
    { icon: insta, path: "#" },
    { icon: twitter, path: "#" },
  ];

  // const components = [
  //   { id: 1, name: "Deals", component: <Baby /> },
  //   { id: 2, name: "Brands ", component: <Beauty /> },
  //   { id: 3, name: "Generic", component: <HealthTopics /> },
  //   { id: 4, name: "Discount > 75%", component: <Home /> },
  //   { id: 5, name: "Discount > 50%", component: <Medicines /> },
  //   { id: 6, name: "Discount > 25%", component: <PersonalCare /> },
  //   { id: 7, name: "Expiring within 3 months", component: <Pets /> },
  //   { id: 8, name: "Expiring within 6 months", component: <SportsNutrition /> },
  //   { id: 9, name: "Expiring within 12 months", component: <Suppliments /> },
  //   { id: 10, name: "Whole saler item ", component: <Suppliments /> },
  //   { id: 11, name: "Pharmacy item ", component: <Suppliments /> },
  //   { id: 12, name: "Prescription Drugs ", component: <Suppliments /> },
  //   { id: 13, name: "OTC Products ", component: <Suppliments /> },
  //   { id: 14, name: "VAWD Sellers", component: <Suppliments /> },
  //   { id: 15, name: "Top Selling Products ", component: <Suppliments /> },
  //   { id: 16, name: "Buy Again  ", component: <Suppliments /> },
  // ];


  const components = [
    { id: 1, name: "Deals" },
    { id: 2, name: "Brands " },
    { id: 3, name: "Generic" },
    { id: 4, name: "Discount > 75%" },
    { id: 5, name: "Discount > 50%" },
    { id: 6, name: "Discount > 25%" },
    { id: 7, name: "Expiring within 3 months" },
    { id: 8, name: "Expiring within 6 months" },
    { id: 9, name: "Expiring within 12 months" },
    { id: 10, name: "Whole saler item " },
    { id: 11, name: "Pharmacy item " },
    { id: 12, name: "Prescription Drugs " },
    { id: 13, name: "OTC Products " },
    { id: 14, name: "VAWD Sellers" },
    { id: 15, name: "Top Selling Products " },
    { id: 16, name: "Buy Again  "},
  ];

  const handleCriteria =async (obj) => {
    let Criteria = {
      deals: null,
      brands: null,
      generics: null,
      discount: 0,
      expiring: 0,
      wholeSeller: null,
      pharmacyItems: null,
      prescriptionDrugs: null,
      otcProducts: null,
      vawdSeller: null,
      topSellingProducts: null,
      buyAgain: null,
    };
    if (obj.id == 1) {
      Criteria.deals = obj.name;
    }
    if (obj.id == 2) {
      Criteria.brands = obj.name;
    }
    if (obj.id == 3) {
      Criteria.generics = obj.name;
    }
    if (obj.id == 4) {
      Criteria.discount = 75;
    }
    if (obj.id == 5) {
      Criteria.discount = 50;
    }
    if (obj.id == 6) {
      Criteria.discount = 25;
    }
    if (obj.id == 7) {
      Criteria.expiring = 9;
    }
    if (obj.id == 8) {
      Criteria.expiring = 6;

    }
    if (obj.id == 9) {
      Criteria.expiring = 3;

    }
    if (obj.id == 10) {
      Criteria.wholeSeller = obj.name;
    }
    if (obj.id == 11) {
      Criteria.pharmacyItems = obj.name;

    }
    if (obj.id == 12) {
      Criteria.prescriptionDrugs = obj.name;

    }
    if (obj.id == 13) {
      Criteria.otcProducts = obj.name;

    }
    if (obj.id == 14) {
      Criteria.vawdSeller = obj.name;

    }
    if (obj.id == 15) {
      Criteria.topSellingProducts = obj.name;

    }
    if (obj.id == 16) {
      Criteria.buyAgain = obj.name;

    }
    await fetchCriteriaProductsApi(Criteria,obj.name);
    navigate('/products');

  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    if (MenuItems[index] === "Home") navigate("/app");
    else if (MenuItems[index] === "Products") navigate("/products");
    else if (MenuItems[index] === "Why PharmEtrade")
      navigate("/whypharmetrade");
    else if (MenuItems[index] === "About Us") navigate("/aboutus");
    else if (MenuItems[index] === "Contact Us") navigate("/contactus");
    else if (MenuItems[index] === "Request Demo") navigate("/requestdemo");
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  // const [popUps, setPopUps] = useState(<Baby />);
  const FormData = JSON.parse(localStorage.getItem("formData"));

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };
  const mouseUp = () => {
    setIsCategory(true);
  };
  const mouseDown = () => {
    setIsCategory(false);
  };
  function handleredirect() {
    navigate("/login");
  }

  function handleCart() {
    navigate("/cart");
  }

  function handleclick() {
    navigate("/wishlist");
  }

  function handleuser() {
    navigate("/user");
  }
  function handleorder() {
    navigate("/orderhistory");
  }
  function handlesignup() {
    navigate("/signup");
  }
  function hanldeUp(items) {
    setPopUps(items);
  }

  const [isContainerFocused, setIsContainerFocused] = useState(false);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const handleFocusIn = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(true);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(true);
    }
  };

  const handleFocusOut = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(false);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(false);
    }
  };

  return (
    <div
      ref={topDivRef}
      className=" fixed w-screen pt-1   z-10 bg-white text-grey-500"
    >
      <div className=" flex flex-col w-full justify-between ">
        <ul className=" text-3xl w-full  ">
          <div className="flex flex-row h-[60px] justify-between  gap-4 md:gap-12 lg:gap-10  items-center  text-xl bg-white text-gray-500 ">
            <div>
              <img
                src={Logo}
                onClick={() => navigate("/")}
                className="w-12 md:w-16 lg:w-32 xl:w-60 h-12 ml-2 md:ml-2 lg:ml-12 hover:cursor-pointer lg:overflow-x-hidden xl-0"
              />
            </div>
            <div className="  h-full   md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 px-4 items-center">
              <div className="flex gap-3 justify-around h-full items-center j">
                {MenuItems.map((item, index) => (
                  <li
                    className={`text-blue-900  hover:bg-slate-200  rounded-md flex justify-center p-1 px-1 items-center w-fit cursor-pointer font-medium text-[17px] ${
                      selectedIndex === index
                        ? "bg-slate-200 hover:text-blue-900 text-blue-900 border-0 font-semibold"
                        : "border-transparent border-2"
                    }`}
                    key={item}
                    onClick={() => handleSelect(index)}
                  >
                    {item}
                  </li>
                ))}
              </div>

              <div className=" flex  flex-row gap-4 text-md  items-center font-thin">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex  items-center" onClick={handleredirect}>
                    <img
                      src={add}
                      className="w-4 md:w-6 lg:w-8 h-8 cursor-pointer"
                      alt="clickable"
                      onClick={handleredirect}
                    />
                    {/* <div className="text-blue-900 hover:cursor-pointer ">
                      <div className="text-sm font-medium -mb-2">
                        Hello, Sign in
                      </div>
                      <div className="text-base font-semibold">
                        Account & Lists
                      </div>
                    </div> */}
                    <div className="text-blue-900 hover:cursor-pointer">
                      {user ? (
                        <>
                          <div className="text-sm font-medium -mb-2">
                            Hello, {user.firstName}
                          </div>
                          <div className="text-base font-semibold">
                            Account & Lists
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm font-medium -mb-2">
                            Hello, Sign in
                          </div>
                          <div className="text-base font-semibold">
                            Account & Lists
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {isPopupVisible && (
                    <div className="fixed flex z-10">
                      <div className="bg-white p-4 rounded shadow-lg w-64">
                        <div className="w-full flex ">
                          {user ? (
                            <li
                              className="cursor-pointer"
                              onClick={handleLogout}
                            >
                              <Link
                                to="/login"
                                className="bg-blue-900 text-white rounded px-2 py-1"
                              >
                                Logout
                              </Link>
                            </li>
                          ) : (
                            <a
                              className="bg-blue-900 text-white py-1 hover:cursor-pointer px-2 rounded"
                              onClick={handleRedirect}
                            >
                              Sign In
                            </a>
                          )}
                        </div>
                        <p
                          className=" text-base hover:cursor-pointer"
                          onClick={handlesignup}
                        >
                          New User?{" "}
                          <span className="text-blue-900 hover:text-red-500 hover:underline">
                            Start here
                          </span>
                        </p>
                        <h2
                          className="text-lg font-semibold cursor-pointer"
                          onClick={handleuser}
                        >
                          Your Account
                        </h2>
                        <ul>
                          <li className="">
                            <a
                              href="#"
                              className="text-lg text-blue-900"
                              onClick={handleorder}
                            >
                              Order List
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="text-blue-900"
                              onClick={handleclick}
                            >
                              Wishlist
                            </a>
                          </li>

                          <li>
                            <Link href="#" className="text-lg text-blue-900">
                              Account Settings
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <li className="relative cursor-pointer " onClick={handleCart}>
                  <a>
                    <img
                      src={cartNav}
                      className="w-1  md:w-3 lg:w-5 xl:w-7 pt-2 h-3 md:h-5 lg:h-7 xl:h-9  text-blue-900 hover:text-gray-400 hover:scale-110  duration-500"
                      // onClick={handleCart}
                    />
                  </a>
                  <div
                    className={`absolute  text-white rounded-full px-1 text-xs border bg-blue-900 top-1 left-2 font-medium `}
                  >
                    {cart.length}
                  </div>
                </li>
                <li>
                  <a>
                    <img
                      src={like}
                      onClick={handleclick}
                      className="w-1 md:w-3 lg:w-5 xl:w-7 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 cursor-pointer hover:scale-110 transition duration-300"
                    />{" "}
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src={compare}
                      // onClick={handleclick}
                      className="w-1  md:w-3 lg:w-5 xl:w-7 pt-2 h-3 md:h-5 lg:h-7 xl:h-9 hover:scale-110 transition duration-300"
                    />{" "}
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
        {/* down div elemenet  */}
        <div
          className="flex justify-evenly bg-gray-200 w-full h-fit flex-row  md:w-screen  
           items-center text-black  border-grey-500 shadow-lg "
        >
          <div className="flex gap-5 items-center justify-around text-blue-900 text-xs p-4 w-full md:w-fit">
            {downDivItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemclick(item)}
                className={`flex gap-1 items-center justify-center cursor-pointer font-semibold hover:text-black
                   ${ item.label === "SELL" &&
                  Form_Data?.userType === "Retail Customer"
                    ? "hidden"
                    : ""
                }`}
              >
                <img
                  src={item.icon}
                  className="max-w-8 max-h-8"
                  alt={item.label}
                />
                <div className="text-[15px] ml-1 ">{item.label}</div>
              </li>
            ))}
          </div>

          {errorMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
                <div className="flex justify-start items-center border-b border-black">
                  <img src={warning} className=" w-12 h-12" />
                  <p className="text-red-600 text-xl font-semibold mt-2">
                    Warning !
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-black mb-4">{errorMessage}</p>
                  <button
                    onClick={() => setErrorMessage("")}
                    className="bg-red-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex bg-white rounded-md items-center w-[40%] lg:gap-10">
            <div
              ref={dropdownRef}
              className={`w-full relative flex items-center ${
                isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
              }`}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              <button
                className={`h-12 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
                  isButtonFocused ? "ring-2 ring-blue-500" : ""
                } button-focus`}
                onClick={handleDropdownToggle}
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
              >
                All
                <span>
                  <img src={dropdown} className="h-4 w-4" />
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute z-10"
                  style={{ top: "30px", left: "0px" }}
                >
                  <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                    {components.map((items, index) => (
                      <ul onClick={() => handleCriteria(items)} key={index}>
                        <li className="">
                          <a
                            className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
                            onClick={() => handleItemClick(items.name)}
                            onMouseLeave={handleCatMouseLeave}
                          >
                            {items.name}
                          </a>
                          {/* {popUps === items.name && (
                            <div
                              className="absolute bg-white border border-gray-300 rounded shadow-lg"
                              style={{
                                top: "0%",
                                left: "100%",
                                width: "150px",
                              }}
                            >
                              {items.component}
                            </div>
                          )} */}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex w-full h-12 border container-focus">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-grow p-4 border-none focus:outline-none container-focus"
                />
                <a className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
                  <img src={search} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-5  items-center justify-around text-blue-900 text-xs p-4 w-full md:w-fit">
            {downSocialItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className="flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 "
              >
                <img
                  src={item.icon}
                  className="max-w-8 max-h-8"
                  alt={item.label}
                />
                {/* <div className="text-[15px] ml-1 ">{item.label}</div> */}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
