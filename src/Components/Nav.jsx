import React from "react";
// import Logo from "../assets/Icons/Etrade.png";
// import Logo from "../assets/Icons/logo.png";
import Logo from "../assets/logo_04.png";
import Search from "../assets/search.png";
import Buy from "../assets/Buy.png";
import Cart from "../assets/Cart.png";
import bid from "../assets/Bid.png";
import like from "../assets/Icons/Favorate.png";
import note from "../assets/Icons/Compare.png";
import sale from "../assets/Sell.png";
import hand from "../assets/Join.png";
import BackgroundImage from "../assets/BackgroundImage.png";
import { Link, useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../assets/add.png";
// import linkedin from "../assets/linkedin.png";

import linkedin from "../assets/Icons/linkedin_icon.png";
import facebook from "../assets/Icons/facebook_icon.png";
import insta from "../assets/Icons/instagram_icon.png";
import twitter from "../assets/Icons/twitter_icon.png";
// import facebook from "../assets/facebook.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
// import { useNavbarContext } from "./NavbarContext";
import myaccount from "../assets/My Account.png";

function Nav({ topDivRef, cartItems }) {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [inputText, setInputText] = useState("");

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  function handleredirect() {
    console.log("hello");
    navigate("/login");
  }
  function handleClick() {
    navigate("/signup");
  }

  function handleCart() {
    navigate("/cart");
  }
  function handleclicked() {
    navigate("/app");
  }
  function handleclick() {
    navigate("/wishlist");
  }
  function handleBuy() {
    navigate("/products");
  }
  function handleAdmin() {
    navigate("/admin");
  }
  function handleuser() {
    navigate("/user");
  }
  function handleorder() {
    navigate("/orderhistory");
  }
  return (
    <div
      ref={topDivRef}
      className=" fixed top-0 w-fit lg:w-screen md:w-screen z-10 bg-white h-fit lg:px-0 text-grey-500"
      style={{ paddingLeft: "0px", paddingTop: "0px" }}
    >
      <div className=" flex  flex-col justify-between ">
        <ul className=" text-3xl ">
          {/* Top div logo home  */}
          <div
            className="flex flex-row  gap-4 md:gap-12 lg:gap-10 lg:justify-between   xl:justify-between items-center  text-xl fontbg-white text-gray-500 "
            // style={{ fontFamily: "helveticaNeue" }}
          >
            <div>
              <li>
                <img
                  src={Logo}
                  onClick={handleclicked}
                  className="w-12 md:w-20 lg:w-36 xl:w-64 h-14 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
                />
              </li>
            </div>
            <div className=" hidden  md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6   2xl:pr-36 items-center">
              <li
                className="text-blue-900 w-fit cursor-pointer  font-medium hover:text-green-400 text-lg"
                onClick={handleclicked}
              >
                Home
              </li>
              <li
                className="text-blue-900 w-fit cursor-pointer font-medium hover:text-green-400 text-lg "
                onClick={handleBuy}
              >
                Products{" "}
              </li>
              <li className=" text-blue-900 font-medium hover:text-green-400 text-lg">
                Why ParamETrade
              </li>
              <li className="text-blue-900 font-medium hover:text-green-400 text-lg">
                About Us
              </li>
              <li className="text-blue-900 font-medium hover:text-green-400 text-lg">
                Contact Us{" "}
              </li>
              <li className="text-blue-900 font-medium hover:text-green-400 text-lg">
                Offers
              </li>

              <div
                className="hidden md:flex flex-row md:gap-2 lg:gap-2 xl:gap-4 text-md items-center font-thin"
                style={{ marginRight: 2 }}
              >
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center" onClick={handleredirect}>
                    <img
                      src={add}
                      className="w-6 md:w-8 lg:w-10 h-10 cursor-pointer"
                      alt="clickable"
                      onClick={handleredirect}
                    />
                    <div className="text-blue-900 text-base">
                      <div className="text-base font-medium ">
                        Hello, Sign in
                      </div>
                      <div className="text-lg font-semibold">
                        Account & Lists
                      </div>
                    </div>
                  </div>
                  {isPopupVisible && (
                    <div className="fixed flex z-10">
                      <div className="bg-white p-4 rounded shadow-lg w-64">
                        <div className="w-full justify-center items-center">
                          <button
                            className="bg-blue-900 text-white py-1 px-2 rounded mb-2"
                            onClick={handleredirect}
                          >
                            Sign In
                          </button>
                        </div>
                        <p className="mb-1 text-lg">New customer? Start here</p>
                        <h2
                          className="text-lg font-semibold cursor-pointer"
                          onClick={handleuser}
                        >
                          Your Account
                        </h2>
                        <ul>
                          <li className="mb-2">
                            <a
                              href="#"
                              className="text-lg text-blue-900"
                              onClick={handleorder}
                            >
                              Order List
                            </a>
                          </li>
                          <li className="mb-2">
                            <a
                              href="#"
                              className="text-blue-900"
                              onClick={handleclick}
                            >
                              Wishlist
                            </a>
                          </li>
                          <li className="mb-2">
                            <Link to="/admin" className="text-lg text-blue-900">
                              Seller Dashboard
                            </Link>
                          </li>
                          <li>
                            <a href="#" className="text-lg text-blue-900">
                              Account Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                {/* <li className="">
                  <button
                    className="  text-gray-500  text-md  font-thin  "
                    onClick={handleClick}
                  >
                    <p className=" font-thin"> Signup / </p>
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={handleredirect}
                    className=" text-gray-500 text-md font-thin text-md"
                  >
                    Signin
                  </button>
                </li> */}

                <li className="relative">
                  <button>
                    {/* <img
                      src={Cart}
                      className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-10 lg:h-10 xl:h-12"
                      onClick={handleCart}
                    /> */}
                    <FiShoppingCart
                      className="w-6  md:w-8 lg:w-10 xl:w-12 pt-2 h-8 md:h-8 lg:h-8 xl:h-10 text-blue-900 hover:text-gray-400 hover:scale-110 transi duration-500"
                      onClick={handleCart}
                    />
                  </button>
                  <div
                    className={`absolute -top-2  text-blue-900 right-4 font-semibold ${
                      cartItems.length == 0 ? "hidden" : ""
                    }`}
                  >
                    {cartItems.length}
                  </div>
                </li>
                <li>
                  <button>
                    <img
                      src={like}
                      onClick={handleclick}
                      className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-12 lg:h-14 xl:h-16 hover:scale-110 transition duration-300"
                    />{" "}
                  </button>
                </li>
              </div>
            </div>
          </div>
        </ul>
        {/* down div elemenet  */}
        <div
          className="flex flex-row w-16  md:w-screen   xl:gap-20  2xl:gap-12 lg:w-screen md:gap-20
         xl:w-screen items-center h-fit text-black border-2 border-grey-500 shadow-lg  lg:px-0 lg:h-fit bg-gray-200"
        >
          <div
            className="flex items-center xl:w-100vh  md:ml-2 xl:ml-20 2xl:ml-24 lg:ml-12 lg:gap-10 "
            // style={{ width: "100vh" }}
          >
            <div
              className="relative flex items-center xl:w-full "
              // style={{ width: "100vh" }}
            >
              <select className="h-fit py-2 md:w-12 text-[12px] lg:w-20 px-5 text-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All categories</option>
                <option>Allegies</option>
                <option>Bath & Body</option>
                <option>Cough Cold & flu</option>
                <option>Digestive Health</option>
                <option>Drug</option>
                <option>Eye Care</option>
                <option>Ear Nose & Throat Care</option>
                <option>First Aid</option>
                <option>Foot Care</option>
                <option>Home Test Monitoring</option>
                <option>Incontinence</option>
                <option>Pain Relief & Management</option>
                <option>Pediatric Care</option>
                <option>Personal Care</option>
                <option>Pet</option>
                <option>Presciption & Packaging</option>

                {/* Add more options here */}
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full md:w-72 lg:w-80 xl:w-full py-1 px-4 border border-gray-300 focus:outline-none rounded-r-md focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 flex items-center justify-center h-full px-2  bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.85-2.15A7 7 0 1113 5a7 7 0 015 12.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" ">
            <ul className="list-none text-lg md:ml-10  font-normal">
              <div
                className=" xl:gap-10 grid grid-rows-2 grid-cols-2 md:flex md:flex-row md:gap-4 lg:gap-2  xl:justify-between text-gray-500    items-center py-2 px-2 lg:px-0 "
                // style={{ fontFamily: "helveticaNeue" }}
              >
                <div
                  className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer"
                  onClick={handleBuy}
                >
                  <img src={Buy} className="w-fit h-8" />
                  <li className="text-base">Buy</li>
                </div>
                <div
                  className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer"
                  onClick={handleClick}
                >
                  <img src={hand} className="w-fit  h-8" />
                  <li className="text-base">Join</li>
                </div>
                <div
                  className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer"
                  onClick={handleAdmin}
                >
                  <img src={sale} className="w-fit  h-8" />
                  <li className="text-base">Sell</li>
                </div>
                <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer">
                  <img src={bid} className="w-fit  h-8" />
                  <li className="text-base">Bid</li>
                </div>
                <div className="flex flex-row gap-1 lg:gap-2 ml-3 items-center">
                  <img src={linkedin} className="w-fit  h-8" />
                  {/* <FaLinkedin className="w-fit  h-7 text-blue-900" /> */}
                  <li className="text-base">LinkedIn</li>
                </div>
                <div className="flex flex-row gap-1 lg:gap-2 items-center">
                  <img src={facebook} className="w-fit  h-6" />
                  {/* <FaFacebook className="w-fit  h-7 text-blue-900" /> */}
                  <li className="text-base">Facebook</li>
                </div>
                <div className="flex flex-row gap-1 lg:gap-2 items-center">
                  <img src={insta} className="w-fit  h-6" />
                  {/* <FaInstagramSquare  className="w-fit  h-7 text-blue-900" /> */}
                  <li className="text-base">Insta</li>
                </div>
                <div className="flex flex-row gap-1 lg:gap-2 items-center">
                  <img src={twitter} className="w-fit  h-6" />
                  {/* <FaInstagramSquare  className="w-fit  h-7 text-blue-900" /> */}
                  <li className="text-base">Twitter</li>
                </div>

                {/* <div className="flex flex-row gap-2 items-center">
                      <button>
                         <img src={note} className="w-fit  h-10" />{" "}
                      </button>
                    </div> */}

                <div className="flex flex-row gap-2 items-center"></div>
                <div className="flex flex-row gap-2 items-center"></div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;



// import React from "react";
// // import Logo from "../assets/Icons/Etrade.png";
// // import Logo from "../assets/Icons/logo.png";
// import Logo from "../assets/logo_04.png";
// import Search from "../assets/search.png";
// import Buy from "../assets/Buy.png";
// import Cart from "../assets/Cart.png";
// import bid from "../assets/Bid.png";
// import like from "../assets/Icons/Favorate.png";
// import note from "../assets/Icons/Compare.png";
// import sale from "../assets/Sell.png";
// import hand from "../assets/Join.png";
// import BackgroundImage from "../assets/BackgroundImage.png";
// import { Link, useNavigate } from "react-router-dom";
// import menu from "../assets/menu.png";
// import { useState, useEffect, useRef } from "react";
// import add from "../assets/add.png";
// // import linkedin from "../assets/linkedin.png";

// import linkedin from "../assets/Icons/linkedin_icon.png";
// import facebook from "../assets/Icons/facebook_icon.png";
// import insta from "../assets/Icons/instagram_icon.png";
// import twitter from "../assets/Icons/twitter_icon.png";
// // import facebook from "../assets/facebook.png";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoLogoInstagram } from "react-icons/io";
// import { FiShoppingCart } from "react-icons/fi";
// // import { useNavbarContext } from "./NavbarContext";
// import myaccount from "../assets/My Account.png";


// function Nav({ topDivRef, cartItems }) {
//   let navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("");
//   const [inputText, setInputText] = useState("");

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setIsPopupVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPopupVisible(false);
//   };

//   function handleredirect() {
//     console.log("hello");
//     navigate("/login");
//   }
//   function handleClick() {
//     navigate("/signup");
//   }

//   function handleCart() {
//     navigate("/cart");
//   }
//   function handleclicked() {
//     navigate("/app");
//   }
//   function handleclick() {
//     navigate("/wishlist");
//   }
//   function handleBuy() {
//     navigate("/products");
//   }
//   function handleAdmin() {
//     navigate("/admin");
//   }
//   function handleuser() {
//     navigate("/user");
//   }
//   function handleorder() {
//     navigate("/orderhistory");
//   }
//   return (
//     <div
//       ref={topDivRef}
//       className=" fixed top-0 w-fit lg:w-screen md:w-screen z-10 bg-white h-fit lg:px-0 text-grey-500"
//       style={{ paddingLeft: "0px", paddingTop: "0px" }}
//     >
//       <div className=" flex  flex-col justify-center ">
//         <ul className=" text-3xl ">
//           {/* Top div logo home  */}
//           <div
//             className="flex flex-row gap-8 md:gap-12 lg:gap-20 xl:justify-between items-center  text-xl fontbg-white text-gray-500 "
//             // style={{ fontFamily: "helveticaNeue" }}
//           >
//             <div>
//               <li>
//                 <img
//                   src={Logo}
//                   onClick={handleclicked}
//                   className="w-12 md:w-20 lg:w-36 xl:w-64 h-14 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
//                 />
//               </li>
//             </div>
//             <div className=" hidden  md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6  items-center">
//               <li className="text-blue-900 w-fit cursor-pointer  font-medium hover:text-green-400 text-lg" onClick={handleclicked}>
//                 Home
//               </li>
//               <li className="text-blue-900 w-fit cursor-pointer font-medium hover:text-green-400 text-lg " onClick={handleBuy}>Products </li>
//               <li className=" text-blue-900 font-medium hover:text-green-400 text-lg">Why ParamETrade</li>
//               <li className="text-blue-900 font-medium hover:text-green-400 text-lg">About Us</li>
//               <li className="text-blue-900 font-medium hover:text-green-400 text-lg">Contact Us </li>
//               <li className="text-blue-900 font-medium hover:text-green-400 text-lg">Offers</li>

//               <div
//                 className="hidden md:flex flex-row md:gap-2 lg:gap-2 xl:gap-4 text-md items-center font-thin"
//                 style={{ marginRight: 2 }}
//               >
//                 <div
//                   className="relative"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="flex items-center" onClick={handleredirect}>
//                     <img
//                       src={add}
//                       className="w-6 md:w-8 lg:w-10 h-10 cursor-pointer"
//                       alt="clickable"
//                       onClick={handleredirect}
//                     />
//                     <div className="text-blue-900 text-base">
//                       <div className="text-base font-medium ">
//                         Hello, Sign in
//                       </div>
//                       <div className="text-lg font-semibold">
//                         Account & Lists
//                       </div>
//                     </div>
//                   </div>
//                   {isPopupVisible && (
//                     <div className="fixed flex z-10">
//                       <div className="bg-white p-4 rounded shadow-lg w-64">
//                         <div className="w-full justify-center items-center">
//                           <button
//                             className="bg-blue-900 text-white py-1 px-2 rounded mb-2"
//                             onClick={handleredirect}
//                           >
//                             Sign In
//                           </button>
//                         </div>
//                         <p className="mb-1 text-lg">New customer? Start here</p>
//                         <h2 className="text-lg font-semibold cursor-pointer"
//                         onClick={handleuser}>
//                           Your Account
//                         </h2>
//                         <ul>
//                           <li className="mb-2">
//                             <a href="#" className="text-lg text-blue-900" onClick={handleorder}>
//                               Order List
//                             </a>
//                           </li>
//                           <li className="mb-2">
//                             <a
//                               href="#"
//                               className="text-blue-900"
//                               onClick={handleclick}
//                             >
//                               Wishlist
//                             </a>
//                           </li>
//                           <li className="mb-2">
//                             <Link to="/admin" className="text-lg text-blue-900">
//                               Seller Dashboard
//                             </Link>
//                           </li>
//                           <li>
//                             <a href="#" className="text-lg text-blue-900">
//                               Account Settings
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 {/* <li className="">
//                   <button
//                     className="  text-gray-500  text-md  font-thin  "
//                     onClick={handleClick}
//                   >
//                     <p className=" font-thin"> Signup / </p>
//                   </button>
//                 </li>
//                 <li className="">
//                   <button
//                     onClick={handleredirect}
//                     className=" text-gray-500 text-md font-thin text-md"
//                   >
//                     Signin
//                   </button>
//                 </li> */}

//                 <li className="relative">
//                   <button>
//                     {/* <img
//                       src={Cart}
//                       className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-10 lg:h-10 xl:h-12"
//                       onClick={handleCart}
//                     /> */}
//                     <FiShoppingCart
//                       className="w-6  md:w-8 lg:w-10 xl:w-12 pt-2 h-8 md:h-8 lg:h-8 xl:h-10 text-blue-900 hover:text-gray-400 hover:scale-110 transi duration-500"
//                       onClick={handleCart}
//                     />
//                   </button>
//                   <div
//                     className={`absolute -top-2  text-blue-900 right-4 font-semibold ${
//                       cartItems.length == 0 ? "hidden" : ""
//                     }`}
//                   >
//                     {cartItems.length}
//                   </div>
//                 </li>
//                 <li>
//                   <button>
//                     <img
//                       src={like}
//                       onClick={handleclick}
//                       className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-12 lg:h-14 xl:h-16 hover:scale-110 transition duration-300"
//                     />{" "}
//                   </button>
//                 </li>
//               </div>
//             </div>
//           </div>
//         </ul>
//         {/* down div elemenet  */}
//         <div
//           className="flex flex-row w-16  md:w-screen   xl:gap-20  2xl:gap-12 lg:w-screen md:gap-20
//          xl:w-screen items-center h-fit text-black border-2 border-grey-500 shadow-lg  lg:px-0 lg:h-fit bg-gray-200"
//         >
//           <div
//             className="flex items-center xl:w-100vh  md:ml-2 xl:ml-20 2xl:ml-24 lg:ml-12 lg:gap-10 "
//             // style={{ width: "100vh" }}
//           >
//             <div
//               className="relative flex items-center xl:w-full "
//               // style={{ width: "100vh" }}
//             >
//               <select className="h-fit py-2 md:w-12 text-[12px] lg:w-20 px-5 text-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>All categories</option>
//                 <option>Allegies</option>
//                 <option>Bath & Body</option>
//                 <option>Cough Cold & flu</option>
//                 <option>Digestive Health</option>
//                 <option>Drug</option>
//                 <option>Eye Care</option>
//                 <option>Ear Nose & Throat Care</option>
//                 <option>First Aid</option>
//                 <option>Foot Care</option>
//                 <option>Home Test Monitoring</option>
//                 <option>Incontinence</option>
//                 <option>Pain Relief & Management</option>
//                 <option>Pediatric Care</option>
//                 <option>Personal Care</option>
//                 <option>Pet</option>
//                 <option>Presciption & Packaging</option>

//                 {/* Add more options here */}
//               </select>
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="w-full md:w-72 lg:w-80 xl:w-full py-1 px-4 border border-gray-300 focus:outline-none rounded-r-md focus:ring-2 focus:ring-blue-500"
//               />
//               <button className="absolute right-0 flex items-center justify-center h-full px-2  bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <svg
//                   className="w-3 h-3"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-4.35-4.35m1.85-2.15A7 7 0 1113 5a7 7 0 015 12.35z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className=" ">
//             <ul className="list-none text-lg md:ml-10  font-normal">
//               <div
//                 className=" xl:gap-10 grid grid-rows-2 grid-cols-2 md:flex md:flex-row md:gap-4 lg:gap-2  xl:justify-between text-gray-500    items-center py-2 px-2 lg:px-0 "
//                 // style={{ fontFamily: "helveticaNeue" }}
//               >
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer" onClick={handleBuy}>
//                   <img src={Buy} className="w-fit h-8" />
//                   <li className="text-base">Buy</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer" onClick={handleClick}>
//                   <img src={hand} className="w-fit  h-8" />
//                   <li className="text-base">Join</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer" onClick={handleAdmin}>
//                   <img src={sale} className="w-fit  h-8" />
//                   <li className="text-base">Sell</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer">
//                   <img src={bid} className="w-fit  h-8" />
//                   <li className="text-base">Bid</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 ml-3 items-center">
//                   <img src={linkedin} className="w-fit  h-8" />
//                   {/* <FaLinkedin className="w-fit  h-7 text-blue-900" /> */}
//                   <li className="text-base">LinkedIn</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center">
//                   <img src={facebook} className="w-fit  h-6" />
//                   {/* <FaFacebook className="w-fit  h-7 text-blue-900" /> */}
//                   <li className="text-base">Facebook</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center">
//                   <img src={insta} className="w-fit  h-6" />
//                   {/* <FaInstagramSquare  className="w-fit  h-7 text-blue-900" /> */}
//                   <li className="text-base">Insta</li>
//                 </div>
//                 <div className="flex flex-row gap-1 lg:gap-2 items-center">
//                   <img src={twitter} className="w-fit  h-6" />
//                   {/* <FaInstagramSquare  className="w-fit  h-7 text-blue-900" /> */}
//                   <li className="text-base">Twitter</li>
//                 </div>

//                 {/* <div className="flex flex-row gap-2 items-center">
//                       <button>
//                          <img src={note} className="w-fit  h-10" />{" "}
//                       </button>
//                     </div> */}

//                 <div className="flex flex-row gap-2 items-center"></div>
//                 <div className="flex flex-row gap-2 items-center"></div>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;

