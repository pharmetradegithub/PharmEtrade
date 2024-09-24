// // import React, { useState, useRef, useEffect } from "react";
// // import bid from "../../../assets/Bid3d.png";

// // import buy from "../../../assets/buy3d.png";
// // import sell from "../../../assets/sell3d.png";
// // import deals from "../../../assets/Sell1.png";
// // import dropdown from "../../../assets/Down-arrow .png";
// // import buyagain from "../../../assets/Buy.png";
// // import search from "../../../assets/search-icon.png";
// // import wishlist from "../../../assets/Wishlist1_icon.png";
// // import cartNav from "../../../assets/cartNav2.png";
// // import { useNavigate } from "react-router-dom";

// // const LayoutNav = ({ cartItems }) => {
// //   const [isContainerFocused, setIsContainerFocused] = useState(false);
// //   const [isButtonFocused, setIsButtonFocused] = useState(false);
// //   const [isDropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   // const handleDropdownToggle = () => {
// //   //   setDropdownOpen(!isDropdownOpen);
// //   // };
// //   const handleDropdownToggle = (event) => {
// //     event.preventDefault(); // Prevent any default action (like navigation)
// //     setDropdownOpen(!isDropdownOpen);
// //   };

// //   const handleFocusIn = (e) => {
// //     if (e.target.className.includes("container-focus")) {
// //       setIsContainerFocused(true);
// //     } else if (e.target.className.includes("button-focus")) {
// //       setIsButtonFocused(true);
// //     }
// //   };

// //   const handleFocusOut = (e) => {
// //     if (e.target.className.includes("container-focus")) {
// //       setIsContainerFocused(false);
// //     } else if (e.target.className.includes("button-focus")) {
// //       setIsButtonFocused(false);
// //     }
// //   };

// //   const handleClickOutside = (event) => {
// //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //       setDropdownOpen(false);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   function handleCart() {
// //     navigate("/cart");
// //   }

// //   const navItems = [
// //     { image: buy, text: "BUY" },
// //     { image: sell, text: "SELL" },
// //   ];

// //   const iconItems = [
// //     { icon: bid, text: "OTC Products" },
// //     { icon: deals, text: "DEALS" },
// //     { icon: buyagain, text: "Buy Again" },
// //   ];

// //   return (
// //     <div className="my-4  cursor-pointer">
// //       <div className="flex justify-between">
// //         {/* Navigation items with images */}
// //         <div className="flex">
// //           {navItems.map((item, index) => (
// //             <div key={index} className="flex items-center gap-2 ml-2">
// //               <img src={item.image} className="w-8 h-8" alt={item.text} />
// //               <span className="text-base font-semibold my-1">{item.text}</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Search and dropdown */}
// //         <div className="flex bg-white rounded-l-md items-center w-[40%]">
// //           <div
// //             ref={dropdownRef}
// //             className={`w-full relative flex items-center ${
// //               isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
// //             }`}
// //           >
// //             <button
// //               className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
// //                 isButtonFocused ? "ring-2 ring-blue-500" : ""
// //               } button-focus`}
// //               onClick={handleDropdownToggle}
// //               onFocus={handleFocusIn}
// //               onBlur={handleFocusOut}
// //             >
// //               All
// //               <span>
// //                 <img src={dropdown} className="h-4 w-4" alt="dropdown" />
// //               </span>
// //             </button>

// //             {isDropdownOpen && (
// //               <div className="absolute z-10 top-[30px] left-0">
// //                 <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
// //                   {/* Dropdown items */}
// //                   {[
// //                     { name: "deals", component: "Component for deals" },
// //                     { name: "brands", component: "Component for brands" },
// //                     { name: "generics", component: "Component for generics" },
// //                     {
// //                       name: "discount >75%",
// //                       component: "Component for discount >75%",
// //                     },
// //                     {
// //                       name: "discount >50%",
// //                       component: "Component for discount >50%",
// //                     },
// //                     {
// //                       name: "discount >25%",
// //                       component: "Component for discount >25%",
// //                     },
// //                     {
// //                       name: "Expiring within 3 months",
// //                       component: "Component for Expiring within 3 months",
// //                     },
// //                     {
// //                       name: "Expiring within 6 months",
// //                       component: "Component for Expiring within 6 months",
// //                     },
// //                     {
// //                       name: "Expiring within 12 months",
// //                       component: "Component for Expiring within 12 months",
// //                     },
// //                     {
// //                       name: "Whole saler item",
// //                       component: "Component for Whole saler item",
// //                     },
// //                   ].map((item, index) => (
// //                     <ul key={index}>
// //                       <li>
// //                         <a
// //                           className="hover:text-black text-sm font-medium text-blue-900"
// //                           onClick={() => handleItemClick(item.name)}
// //                         >
// //                           {item.name}
// //                         </a>
// //                         {/* {popUps === item.name && (
// //                     <div
// //                       className="absolute bg-white border border-gray-300 rounded shadow-lg"
// //                       style={{
// //                         top: "0%",
// //                         left: "100%",
// //                         width: "150px",
// //                       }}
// //                     >
// //                       {item.component}
// //                     </div>
// //                   )} */}
// //                       </li>
// //                     </ul>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             <div className="flex w-full h-10 border container-focus">
// //               <input
// //                 type="text"
// //                 placeholder="Search for products..."
// //                 className="flex-grow p-4 border-none focus:outline-none container-focus"
// //               />
// //               <button className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
// //                 <img src={search} alt="search icon" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Icons with text */}
// //         <div className="flex items-center gap-3 ml-2">
// //           {iconItems.map((item, index) => (
// //             <div key={index} className="flex items-center gap-2 ">
// //               <img src={item.icon} className="w-8 h-8" />
// //               <span className="text-base font-semibold my-1">{item.text}</span>
// //             </div>
// //           ))}
// //           <img
// //             onClick={() => navigate("/wishlist")}
// //             src={wishlist}
// //             className="w-6 h-6"
// //             alt="wishlist icon"
// //           />
// //           <div onClick={() => navigate("/cart")} className="relative">
// //             <div className="absolute  text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-xs">
// //               {cartItems.length}
// //             </div>

// //             <img src={cartNav} className="w-6 h-6 mr-1" alt="cart icon" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LayoutNav;

// import React, { useState, useRef, useEffect, useContext } from "react";
// import bid from "../../../assets/Bid3d.png";
// import buy from "../../../assets/buy3d.png";
// import sell from "../../../assets/sell3d.png";
// import deals from "../../../assets/Sell1.png";
// import dropdown from "../../../assets/Down-arrow .png";
// import buyagain from "../../../assets/Buy1.png";
// import search from "../../../assets/search-icon.png";
// import wishlist from "../../../assets/Wishlist1_icon.png";
// import cartNav from "../../../assets/cartNav2.png";
// import { useNavigate } from "react-router-dom";
// import OTCProd from "../../../assets/OtcProduct.png";
// import notification from "../../../assets/Notification.png";
// import { useSelector } from "react-redux";
// import warning from '../../../assets/Icons/warning2.png'
// import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";

// const LayoutNav = ({ Form_Data, }) => {
//   const [isContainerFocused, setIsContainerFocused] = useState(false);
//   const [isButtonFocused, setIsButtonFocused] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [activePopUp, setActivePopUp] = useState(null); // State for active popup
//   const cartItems = useSelector((state)=>state.cart.cart);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const handleDropdownToggle = (event) => {
//     event.preventDefault();
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleFocusIn = (e) => {
//     if (e.target.className.includes("container-focus")) {
//       setIsContainerFocused(true);
//     } else if (e.target.className.includes("button-focus")) {
//       setIsButtonFocused(true);
//     }
//   };

//   const handleFocusOut = (e) => {
//     if (e.target.className.includes("container-focus")) {
//       setIsContainerFocused(false);
//     } else if (e.target.className.includes("button-focus")) {
//       setIsButtonFocused(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   const handleItemClick = (name) => {
//     if (activePopUp === name) {
//       setActivePopUp(null); // Close the popup if it's already open
//     } else {
//       setActivePopUp(name); // Set the active popup
//     }
//   };

//   const handleCriteria =async (obj) => {
//     let Criteria = {
//       productCategoryId: obj.id
//     };

//     console.log("cr--->", Criteria)

//     await fetchCriteriaProductsApi(Criteria);
//     navigate('/allProducts/CategoryProducts');

//   };

//   // const components = [
//   //   { id: 1, name: "Prescription Medications" },
//   //   { id: 2, name: "Baby & Child Care Products" },
//   //   { id: 3, name: "Health care products" },
//   //   { id: 4, name: "Household Suppliers" },
//   //   { id: 5, name: "Oral Care Products" },
//   //   { id: 6, name: "Stationery & Gift Wrapping Supplies" },
//   //   { id: 7, name: "Vision Products" },
//   //   { id: 8, name: "Diet & Sports Nutrition" },
//   //   { id: 9, name: "Vitamins, Minerals & Supplements" },
//   //   { id: 10, name: "Personal Care products" },
//   //   // { id: 11, name: "Pharmacy item " },
//   //   // { id: 12, name: "Prescription Drugs " },
//   //   // { id: 13, name: "OTC Products " },
//   //   // { id: 14, name: "VAWD Sellers" },
//   //   // { id: 15, name: "Top Selling Products " },
//   //   // { id: 16, name: "Buy Again  "},
//   // ];

  
//   const components = [
//     { id: 1, name: "Prescription Medications" },
//     { id: 2, name: "Baby & Child Care Products" },
//     { id: 4, name: "Health care products" },
//     { id: 5, name: "Household Suppliers" },
//     { id: 6, name: "Oral Care Products" },
//     { id: 7, name: "Stationery & Gift Wrapping Supplies" },
//     { id: 8, name: "Vision Products" },
//     { id: 9, name: "Diet & Sports Nutrition" },
//     { id: 10, name: "Vitamins, Minerals & Supplements" },
//     { id: 11, name: "Personal Care products" },
//   ];
//   const handleCatMouseLeave = () => {
//     setPopUps(null);
//   };
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   function handleCart() {
//     navigate("/cart");
//   }

//   // const navItems = [
//   //   { image: buy, text: "BUY" },
//   //   { image: sell, text: "SELL" },
//   // ];

//   const user = useSelector((state) => state.user.user);
//   const [errorMessage, setErrorMessage] = useState("");

//   // const handleItemclick = (item) => {
//   //   if (user?.accountTypeId == 1 && item.text === "SELL") {
//   //     setErrorMessage(
//   //       // "You have login as buyer contact us help@pharmetrade.com"
//   //       <>
//   //       You have login as buyer contact us {" "}
      
//   //       <a href="  " className="text-blue-900 underline ">help@pharmetrade.com</a></>
//   //     );
//   //   } else {
//   //     navigate(item.path);
//   //   }
//   // };


//   const handleItemclick =(item) => {
//     navigate(item.path)
//   }

//   const navItems = [
//     { image: buy, text: "BUY", path: "/layout/layoutbuy"  },
//     { image: sell, text: "SELL", path: "/layout/addproduct" },
//   ];

//   const iconItems = [
//     { icon: OTCProd, text: "OTC Products", path: "/layout/layoutOtcProducts" },
//     { icon: buyagain, text: "Buy Again" },
//     { icon: deals, text: "Deals" },

//     // { icon: notification, text: "" },
//   ];

//   return (
//     <div className="my-3 pb-2 cursor-pointer border-b-2 border-gray-300 shadow-lg">
//       <div className="flex justify-around items-center">

//         <div className="flex">
//           {navItems.map((item, index) => (
//             <div
//               key={index}
//               className={`flex items-center ml-2 cursor-pointer
//               ${
//                 //  item.text === "SELL" &&
//                 Form_Data?.userType === "Retail Customer"
//                   ? "hidden"
//                   : ""
//               }`}
//               // onClick={() => navigate(item.path)}
//               onClick={() => handleItemclick(item)}
//             >
//               <img
//                 src={item.image}
//                 className="w-8 h-8 mr-[2px]"
//                 alt={item.text}
//               />
//               <span className="text-sm font-semibold my-1">{item.text}</span>
//             </div>
//           ))}
//         </div>

//         {errorMessage && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
//                 <div className="flex justify-start items-center border-b border-black">
//                   <img src={warning} className=" w-12 h-12" />
//                   <p className="text-red-600 text-xl font-semibold mt-2">
//                     Warning !
//                   </p>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-black mb-4">{errorMessage}</p>
//                   <button
//                     onClick={() => setErrorMessage("")}
//                     className="bg-red-500 text-white px-4 py-2 rounded mb-2"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}


//         {/* Search and dropdown */}
//         <div className="flex rounded-lg w-[40%]">
//           <div
//             ref={dropdownRef}
//             className={`w-full relative flex items-center ${
//               isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
//             }`}
//           >
//             <button
//               className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
//                 isButtonFocused ? "ring-2 ring-blue-500" : ""
//               } button-focus`}
//               onClick={handleDropdownToggle}
//               onFocus={handleFocusIn}
//               onBlur={handleFocusOut}
//             >
//               All
//               <span>
//                 <img src={dropdown} className="h-4 w-4" alt="dropdown" />
//               </span>
//             </button>

//             {/* {isDropdownOpen && (
//               <div className="absolute z-10 top-[30px] left-0">
//                 <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                
//                   {[
//                     { name: "Deals", component: "Component for deals" },
//                     { name: "Brands", component: "Component for brands" },
//                     { name: "Generics", component: "Component for generics" },
//                     {
//                       name: "Discount >75%",
//                       component: "Component for discount >75%",
//                     },
//                     {
//                       name: "Discount >50%",
//                       component: "Component for discount >50%",
//                     },
//                     {
//                       name: "Discount >25%",
//                       component: "Component for discount >25%",
//                     },
//                     {
//                       name: "Expiring within 3 months",
//                       component: "Component for Expiring within 3 months",
//                     },
//                     {
//                       name: "Expiring within 6 months",
//                       component: "Component for Expiring within 6 months",
//                     },
//                     {
//                       name: "Expiring within 12 months",
//                       component: "Component for Expiring within 12 months",
//                     },
//                     {
//                       name: "Whole saler item",
//                       component: "Component for Whole saler item",
//                     },
//                     {
//                       name: "Pharmacy item",
//                       component: "Component for Pharmacy item",
//                     },
//                     {
//                       name: "Prescription Drugs",
//                       component: "Component for Prescription Drugs",
//                     },
//                     {
//                       name: "OTC Products",
//                       component: "Component for OTC Products",
//                     },
//                     {
//                       name: "VAWD Sellers",
//                       component: "Component for VAWD Sellers",
//                     },
//                     {
//                       name: "Top Selling Products",
//                       component: "Component for Top Selling Products",
//                     },
//                     { name: "Buy Again", component: "Component for But Again" },
//                   ].map((item, index) => (
//                     <ul key={index}>
//                       <li>
//                         <a
//                           className="hover:text-black text-sm font-medium text-blue-900"
//                           onClick={() => handleItemClick(item.name)}
//                         >
//                           {item.name}
//                         </a>
//                         {activePopUp === item.name && (
//                           <div
//                             className="absolute bg-white border border-gray-300 rounded shadow-lg"
//                             style={{
//                               top: "0%",
//                               left: "100%",
//                               width: "150px",
//                             }}
//                           >
//                             {item.component}
//                           </div>
//                         )}
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>
//             )} */}
//             {isDropdownOpen && (
//                 <div
//                   className="absolute z-10"
//                   style={{ top: "30px", left: "0px" }}
//                 >
//                   <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
//                     {components.map((items, index) => (
//                       <ul onClick={() => handleCriteria(items)} key={index}>
//                         <li className="">
//                           <a
//                             className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
//                             onClick={() => handleItemClick(items.name)}
//                             onMouseLeave={handleCatMouseLeave}
//                           >
//                             {items.name}
//                           </a>
//                           {/* {popUps === items.name && (
//                             <div
//                               className="absolute bg-white border border-gray-300 rounded shadow-lg"
//                               style={{
//                                 top: "0%",
//                                 left: "100%",
//                                 width: "150px",
//                               }}
//                             >
//                               {items.component}
//                             </div>
//                           )} */}
//                         </li>
//                       </ul>
//                     ))}
//                   </div>
//                 </div>
//               )}

//             <div className="flex w-full h-10 border container-focus">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="flex-grow p-4 border-none focus:outline-none container-focus"
//               />
//               <button className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
//                 <img src={search} alt="search icon" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Icons with text */}
//         <div className="flex items-center">
//           {iconItems.map((item, index) => (
//             <div key={index} className="flex items-center "  onClick={() => navigate(item.path)}>
//               <img src={item.icon} className="w-8 h-8 mr-[2px]" />
//               <span className="text-base font-semibold mr-4">{item.text}</span>
//             </div>
//           ))}
//           <img
//             src={notification}
//             className="w-10 h-10 "
//             alt="Notification icon"
//           />
//           <img
//             onClick={() => navigate("/layout/layoutwishlist")}
//             src={wishlist}
//             className="w-6 h-6 mr-2"
//             alt="wishlist icon"
//           />
//           <div onClick={() => navigate("/cart")} className="relative">
//             <div className="absolute text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-[10px]">
//               {cartItems.length}
//             </div>
//             <img src={cartNav} className="w-6 h-6 mr-2" alt="cart icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutNav;

// import React, { useState, useRef, useEffect } from "react";
// import bid from "../../../assets/Bid3d.png";

// import buy from "../../../assets/buy3d.png";
// import sell from "../../../assets/sell3d.png";
// import deals from "../../../assets/Sell1.png";
// import dropdown from "../../../assets/Down-arrow .png";
// import buyagain from "../../../assets/Buy.png";
// import search from "../../../assets/search-icon.png";
// import wishlist from "../../../assets/Wishlist1_icon.png";
// import cartNav from "../../../assets/cartNav2.png";
// import { useNavigate } from "react-router-dom";

// const LayoutNav = ({ cartItems }) => {
//   const [isContainerFocused, setIsContainerFocused] = useState(false);
//   const [isButtonFocused, setIsButtonFocused] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // const handleDropdownToggle = () => {
//   //   setDropdownOpen(!isDropdownOpen);
//   // };
//   const handleDropdownToggle = (event) => {
//     event.preventDefault(); // Prevent any default action (like navigation)
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleFocusIn = (e) => {
//     if (e.target.className.includes("container-focus")) {
//       setIsContainerFocused(true);
//     } else if (e.target.className.includes("button-focus")) {
//       setIsButtonFocused(true);
//     }
//   };

//   const handleFocusOut = (e) => {
//     if (e.target.className.includes("container-focus")) {
//       setIsContainerFocused(false);
//     } else if (e.target.className.includes("button-focus")) {
//       setIsButtonFocused(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   function handleCart() {
//     navigate("/cart");
//   }

//   const navItems = [
//     { image: buy, text: "BUY" },
//     { image: sell, text: "SELL" },
//   ];

//   const iconItems = [
//     { icon: bid, text: "OTC Products" },
//     { icon: deals, text: "DEALS" },
//     { icon: buyagain, text: "Buy Again" },
//   ];

//   return (
//     <div className="my-4  cursor-pointer">
//       <div className="flex justify-between">
//         {/* Navigation items with images */}
//         <div className="flex">
//           {navItems.map((item, index) => (
//             <div key={index} className="flex items-center gap-2 ml-2">
//               <img src={item.image} className="w-8 h-8" alt={item.text} />
//               <span className="text-base font-semibold my-1">{item.text}</span>
//             </div>
//           ))}
//         </div>

//         {/* Search and dropdown */}
//         <div className="flex bg-white rounded-l-md items-center w-[40%]">
//           <div
//             ref={dropdownRef}
//             className={`w-full relative flex items-center ${
//               isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
//             }`}
//           >
//             <button
//               className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
//                 isButtonFocused ? "ring-2 ring-blue-500" : ""
//               } button-focus`}
//               onClick={handleDropdownToggle}
//               onFocus={handleFocusIn}
//               onBlur={handleFocusOut}
//             >
//               All
//               <span>
//                 <img src={dropdown} className="h-4 w-4" alt="dropdown" />
//               </span>
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute z-10 top-[30px] left-0">
//                 <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
//                   {/* Dropdown items */}
//                   {[
//                     { name: "deals", component: "Component for deals" },
//                     { name: "brands", component: "Component for brands" },
//                     { name: "generics", component: "Component for generics" },
//                     {
//                       name: "discount >75%",
//                       component: "Component for discount >75%",
//                     },
//                     {
//                       name: "discount >50%",
//                       component: "Component for discount >50%",
//                     },
//                     {
//                       name: "discount >25%",
//                       component: "Component for discount >25%",
//                     },
//                     {
//                       name: "Expiring within 3 months",
//                       component: "Component for Expiring within 3 months",
//                     },
//                     {
//                       name: "Expiring within 6 months",
//                       component: "Component for Expiring within 6 months",
//                     },
//                     {
//                       name: "Expiring within 12 months",
//                       component: "Component for Expiring within 12 months",
//                     },
//                     {
//                       name: "Whole saler item",
//                       component: "Component for Whole saler item",
//                     },
//                   ].map((item, index) => (
//                     <ul key={index}>
//                       <li>
//                         <a
//                           className="hover:text-black text-sm font-medium text-blue-900"
//                           onClick={() => handleItemClick(item.name)}
//                         >
//                           {item.name}
//                         </a>
//                         {/* {popUps === item.name && (
//                     <div
//                       className="absolute bg-white border border-gray-300 rounded shadow-lg"
//                       style={{
//                         top: "0%",
//                         left: "100%",
//                         width: "150px",
//                       }}
//                     >
//                       {item.component}
//                     </div>
//                   )} */}
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex w-full h-10 border container-focus">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="flex-grow p-4 border-none focus:outline-none container-focus"
//               />
//               <button className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
//                 <img src={search} alt="search icon" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Icons with text */}
//         <div className="flex items-center gap-3 ml-2">
//           {iconItems.map((item, index) => (
//             <div key={index} className="flex items-center gap-2 ">
//               <img src={item.icon} className="w-8 h-8" />
//               <span className="text-base font-semibold my-1">{item.text}</span>
//             </div>
//           ))}
//           <img
//             onClick={() => navigate("/wishlist")}
//             src={wishlist}
//             className="w-6 h-6"
//             alt="wishlist icon"
//           />
//           <div onClick={() => navigate("/cart")} className="relative">
//             <div className="absolute  text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-xs">
//               {cartItems.length}
//             </div>

//             <img src={cartNav} className="w-6 h-6 mr-1" alt="cart icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutNav;

import React, { useState, useRef, useEffect, useContext } from "react";
import bid from "../../../assets/Bid3d.png";
import buy from "../../../assets/buy3d.png";
import sell from "../../../assets/sell3d.png";
import deals from "../../../assets/Sell1.png";
import dropdown from "../../../assets/Down-arrow .png";
import buyagain from "../../../assets/Buy1.png";
import search from "../../../assets/search-icon.png";
import wishlist from "../../../assets/Wishlist1_icon.png";
import cartNav from "../../../assets/cartNav2.png";
import { useNavigate } from "react-router-dom";
import OTCProd from "../../../assets/OtcProduct.png";
import notification from "../../../assets/Notification.png";
import { useSelector } from "react-redux";
import warning from '../../../assets/Icons/warning2.png'
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";

const LayoutNav = ({ Form_Data, }) => {
  const [isContainerFocused, setIsContainerFocused] = useState(false);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activePopUp, setActivePopUp] = useState(null); // State for active popup
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const components = [
    { id: 1, name: "Prescription Medications" },
    { id: 2, name: "Baby & Child Care Products" },
    { id: 4, name: "Health care products" },
    { id: 5, name: "Household Suppliers" },
    { id: 6, name: "Oral Care Products" },
    { id: 7, name: "Stationery & Gift Wrapping Supplies" },
    { id: 8, name: "Vision Products" },
    { id: 9, name: "Diet & Sports Nutrition" },
    { id: 10, name: "Vitamins, Minerals & Supplements" },
    { id: 11, name: "Personal Care products" },
  ];
  const handleDropdownToggle = (event) => {
    event.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

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

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleItemClick = (name) => {
    if (activePopUp === name) {
      setActivePopUp(null); // Close the popup if it's already open
    } else {
      setActivePopUp(name); // Set the active popup
    }
  };

  const handleCriteria = async (obj) => {
    try {
      const productId = obj.id; // Get the category ID
      const apiCall = { productCategoryId: productId };
      const response = await fetchCriteriaProductsApi(apiCall);

      console.log("response-->", response);
      navigate(`/allProducts/CategoryProducts?CategoryName=${obj.name}`)
      // setCriteriaProducts(response.data); // Set the fetched products
    } catch (error) {
      console.log(error);
    }

  };

  // const components = [
  //   { id: 1, name: "Prescription Medications" },
  //   { id: 2, name: "Baby & Child Care Products" },
  //   { id: 3, name: "Health care products" },
  //   { id: 4, name: "Household Suppliers" },
  //   { id: 5, name: "Oral Care Products" },
  //   { id: 6, name: "Stationery & Gift Wrapping Supplies" },
  //   { id: 7, name: "Vision Products" },
  //   { id: 8, name: "Diet & Sports Nutrition" },
  //   { id: 9, name: "Vitamins, Minerals & Supplements" },
  //   { id: 10, name: "Personal Care products" },
  //   // { id: 11, name: "Pharmacy item " },
  //   // { id: 12, name: "Prescription Drugs " },
  //   // { id: 13, name: "OTC Products " },
  //   // { id: 14, name: "VAWD Sellers" },
  //   // { id: 15, name: "Top Selling Products " },
  //   // { id: 16, name: "Buy Again  "},
  // ];



  const handleCatMouseLeave = () => {
    setPopUps(null);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleCart() {
    navigate("/cart");
  }

  // const navItems = [
  //   { image: buy, text: "BUY" },
  //   { image: sell, text: "SELL" },
  // ];

  const user = useSelector((state) => state.user.user);
  const [errorMessage, setErrorMessage] = useState("");

  // const handleItemclick = (item) => {
  //   if (user?.accountTypeId == 1 && item.text === "SELL") {
  //     setErrorMessage(
  //       // "You have login as buyer contact us help@pharmetrade.com"
  //       <>
  //       You have login as buyer contact us {" "}

  //       <a href="  " className="text-blue-900 underline ">help@pharmetrade.com</a></>
  //     );
  //   } else {
  //     navigate(item.path);
  //   }
  // };


  const handleItemclick = (item) => {
    navigate(item.path)
  }

  const navItems = [
    { image: buy, text: "BUY", path: "/layout/layoutbuy" },
    { image: sell, text: "SELL", path: "/layout/addproduct" },
  ];

  const iconItems = [
    { icon: OTCProd, text: "OTC Products", path: "/layout/layoutOtcProducts" },
    { icon: buyagain, text: "Buy Again" },
    { icon: deals, text: "Deals" },

    // { icon: notification, text: "" },
  ];

  return (
    <div className="my-3 pb-2 cursor-pointer border-b-2 border-gray-300 shadow-lg">
      <div className="flex justify-around items-center">

        <div className="flex">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ml-2 cursor-pointer
              ${
                //  item.text === "SELL" &&
                Form_Data?.userType === "Retail Customer"
                  ? "hidden"
                  : ""
                }`}
              // onClick={() => navigate(item.path)}
              onClick={() => handleItemclick(item)}
            >
              <img
                src={item.image}
                className="w-8 h-8 mr-[2px]"
                alt={item.text}
              />
              <span className="text-sm font-semibold my-1">{item.text}</span>
            </div>
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


        {/* Search and dropdown */}
        <div className="flex rounded-lg w-[40%]">
          <div
            ref={dropdownRef}
            className={`w-full relative flex items-center ${isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
              }`}
          >
            <button
              className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${isButtonFocused ? "ring-2 ring-blue-500" : ""
                } button-focus`}
              onClick={handleDropdownToggle}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              All
              <span>
                <img src={dropdown} className="h-4 w-4" alt="dropdown" />
              </span>
            </button>

            {/* {isDropdownOpen && (
              <div className="absolute z-10 top-[30px] left-0">
                <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                
                  {[
                    { name: "Deals", component: "Component for deals" },
                    { name: "Brands", component: "Component for brands" },
                    { name: "Generics", component: "Component for generics" },
                    {
                      name: "Discount >75%",
                      component: "Component for discount >75%",
                    },
                    {
                      name: "Discount >50%",
                      component: "Component for discount >50%",
                    },
                    {
                      name: "Discount >25%",
                      component: "Component for discount >25%",
                    },
                    {
                      name: "Expiring within 3 months",
                      component: "Component for Expiring within 3 months",
                    },
                    {
                      name: "Expiring within 6 months",
                      component: "Component for Expiring within 6 months",
                    },
                    {
                      name: "Expiring within 12 months",
                      component: "Component for Expiring within 12 months",
                    },
                    {
                      name: "Whole saler item",
                      component: "Component for Whole saler item",
                    },
                    {
                      name: "Pharmacy item",
                      component: "Component for Pharmacy item",
                    },
                    {
                      name: "Prescription Drugs",
                      component: "Component for Prescription Drugs",
                    },
                    {
                      name: "OTC Products",
                      component: "Component for OTC Products",
                    },
                    {
                      name: "VAWD Sellers",
                      component: "Component for VAWD Sellers",
                    },
                    {
                      name: "Top Selling Products",
                      component: "Component for Top Selling Products",
                    },
                    { name: "Buy Again", component: "Component for But Again" },
                  ].map((item, index) => (
                    <ul key={index}>
                      <li>
                        <a
                          className="hover:text-black text-sm font-medium text-blue-900"
                          onClick={() => handleItemClick(item.name)}
                        >
                          {item.name}
                        </a>
                        {activePopUp === item.name && (
                          <div
                            className="absolute bg-white border border-gray-300 rounded shadow-lg"
                            style={{
                              top: "0%",
                              left: "100%",
                              width: "150px",
                            }}
                          >
                            {item.component}
                          </div>
                        )}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            )} */}
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

            <div className="flex w-full h-10 border container-focus">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow p-4 border-none focus:outline-none container-focus"
              />
              <button className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Icons with text */}
        <div className="flex items-center">
          {iconItems.map((item, index) => (
            <div key={index} className="flex items-center " onClick={() => navigate(item.path)}>
              <img src={item.icon} className="w-8 h-8 mr-[2px]" />
              <span className="text-base font-semibold mr-4">{item.text}</span>
            </div>
          ))}
          <img
            src={notification}
            className="w-10 h-10 "
            alt="Notification icon"
          />
          <img
            onClick={() => navigate("/layout/layoutwishlist")}
            src={wishlist}
            className="w-6 h-6 mr-2"
            alt="wishlist icon"
          />
          <div onClick={() => navigate("/cart")} className="relative">
            <div className="absolute text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-[10px]">
              {cartItems.length}
            </div>
            <img src={cartNav} className="w-6 h-6 mr-2" alt="cart icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNav;
