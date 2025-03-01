// import React from "react";

// import Logo from "../../../assets/logo2.png";
// import Search from "../../../assets/search.png";
// import cartNav from "../../../assets/cartNav2.png";
// import like from "../../../assets/wishlistnav_icon.png";
// // import compare from "../../../assets/CompareNav2.png";

// import note from "../../../assets/Icons/Compare.png";

// import join from "../../../assets/Join3d.png";
// import Buy from "../../../assets/buy3d.png";
// import sell from "../../../assets/sell3d.png";
// import bid from "../../../assets/Bid3d.png";
// import BackgroundImage from "../../../assets/BackgroundImage.png";

// import menu from "../../../assets/menu.png";
// import { useState, useEffect, useRef } from "react";
// import add from "../../../assets/add.png";
// import warning from "../../../assets/Icons/warning2.png";
// import linkedin from "../../../assets/linkedin_icon.png";
// import facebook from "../../../assets/facebook_icon.png";
// import insta from "../../../assets/instagram_icon.png";
// // import twitter from "../../../assets/twitter_icon.png";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoLogoInstagram } from "react-icons/io";
// import { FiShoppingCart } from "react-icons/fi";
// import myaccount from "../../../assets/My Account.png";
// import { TbTruckReturn } from "react-icons/tb";
// import WhyPharma from "../NavLinks/WhyPharma";
// import search from "../../../assets/search-icon.png";
// import dropdown from "../../../assets/Down-arrow .png";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";
// import { Tooltip } from "@mui/material";
// import { fetchProductCategoriesGetAll } from "../../../Api/MasterDataApi";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// let text = [];

// function Nav({ topDivRef, Form_Data, TriggerAPI }) {
//   let navigate = useNavigate();
//   const user = useSelector((state) => state.user.user);
//   const cart = useSelector((state) => state.cart.cart);
//   const components = useSelector((state) => state.master.productCategoryGetAll);
//   console.log("categoeryyy-->", components);
//   const modifiedComponents = [
//     { productCategoryId: -1, categoryName: "All" },
//     ...components,
//   ];

//   const [selectedIndex, setSelectedIndex] = useState();

//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const [activePopUp, setActivePopUp] = useState(null);
//   const [selectedItem, setSelectedItem] = useState("All");
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const category = searchParams.get("CategoryName");
//     if (category === null) {
//       setSelectedItem("All");
//     } else if (category && components.length > 0) {
//       const component = modifiedComponents.find(
//         (comp) => comp.productCategoryId == category
//       );
//       console.log("heyeheyehhoanceu", component, category);
//       if (component) {
//         setSelectedItem(component.categoryName); // Set the name if found
//       } else {
//         setSelectedItem("All");
//       }
//     }
//   }, [location.search]);

//   const dropdownRef = useRef(null);
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };
//   const dispatch = useDispatch();
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   useEffect(() => {
//     dispatch(fetchProductCategoriesGetAll());
//   }, []);
//   const handleDropdownToggle = (e) => {
//     e.preventDefault();
//     setDropdownOpen(!isDropdownOpen);
//   };
//   const searchParams = new URLSearchParams(location.search);
//   const categoryId = searchParams.get("CategoryName");

//   // const handleItemClick = (name) => {
//   //   if (activePopUp === name) {
//   //     setActivePopUp(null); // Close the popup if it's already open
//   //     setSelectedItem("All"); // Reset to "All" when closed
//   //   } else {
//   //     setActivePopUp(name); // Set the active popup
//   //     setSelectedItem(name); // Update the button label with the selected item
//   //   }
//   //   setDropdownOpen(false); // Close the dropdown after selection
//   // };

//   const handleItemClick = (name, id) => {
//     if (activePopUp === name) {
//       setSelectedItemId(-1);
//       setActivePopUp(null); // Close the popup if it's already open
//       setSelectedItem("All");
//       // setActivePopUp(null); // Close the popup if it's already open
//     } else {
//       // setActivePopUp(name); // Set the active popup
//       setSelectedItemId(id);
//       setActivePopUp(name); // Set the active popup
//       setSelectedItem(name);
//       // if (name === "All") {
//       //   navigate('/allProducts'); // Navigate to '/allProducts' if "All" is clicked
//       // }
//     }
//     setDropdownOpen(false); // Close the dropdown after selection
//   };

//   const handleCatMouseLeave = () => {
//     setPopUps(null);
//   };

//   const handleRedirect = () => {
//     navigate("/login");
//   };

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   const MenuItems = [
//     "Home",
//     "Products",
//     "Why PharmEtrade",
//     "About Us",
//     // "Contact Us",
//     "Request Demo",
//   ];

//   const [errorMessage, setErrorMessage] = useState("");

//   const handleItemclick = (item) => {
//     // Check if the user is of customerTypeId 4 and trying to click on "SELL"
//     if (user?.customerTypeId === 4 && item.label === "SELL") {
//       setErrorMessage(
//         <>
//           You have logged in as a buyer. Please contact us at{" "}
//           <a
//             href="mailto:help@pharmetrade.com"
//             className="text-blue underline"
//           >
//             help@pharmetrade.com
//           </a>
//         </>
//       );
//     } else {
//       // Navigate to the path if the condition doesn't match
//       navigate(item.path);
//     }
//   };

//   // const handleItemclick = (item) => {
//   //   navigate(item.path);
//   // };

//   // Clear error message after 3 seconds
//   // if (errorMessage) {
//   //   setTimeout(() => setErrorMessage(""), 10000);
//   // }

//   const downDivItems = [
//     // { label: "BUY", icon: Buy, path: "/layout" },
//     // { label: "JOIN", icon: join, path: "/login" },
//     // { label: "SELL", icon: sell, path:"/layout/addproduct" },
//     // { label: "BID", icon: bid, path: "/bid" },
//     { label: "BUY", icon: Buy, path: user ? "/layout/layoutbuy" : "login" },
//     {
//       label: "SELL",
//       icon: sell,
//       path: user ? "/layout/addproduct" : "/login",
//     },
//     { label: "BID", icon: bid, path: user ? "/bid" : "login" },
//     { label: "JOIN", icon: join, path: "/signup" },
//   ];

//   const downSocialItems = [
//     { icon: linkedin, path: "#" },
//     { icon: facebook, path: "#" },
//     { icon: insta, path: "#" },
//     // { icon: twitter, path: "#" },
//   ];

//   // const components = [
//   //   { id: 1, name: "Prescription Medications" },
//   //   { id: 2, name: "Baby & Child Care Products" },
//   //   { id: 4, name: "Health care products" },
//   //   { id: 5, name: "Household Suppliers" },
//   //   { id: 6, name: "Oral Care Products" },
//   //   { id: 7, name: "Stationery & Gift Wrapping Supplies" },
//   //   { id: 8, name: "Vision Products" },
//   //   { id: 9, name: "Diet & Sports Nutrition" },
//   //   { id: 10, name: "Vitamins, Minerals & Supplements" },
//   //   { id: 11, name: "Personal Care Products" },
//   // ];

//   const handleCriteria = async (obj) => {
//     console.log(obj, "objjjjj")
//     handleItemClick(obj.categoryName, obj.productCategoryId);
//     let Criteria = {
//       productCategoryId: obj.productCategoryId,
//       customerId: user ? user.customerId : "234"
//     };

//     console.log("cr--->", obj);
//     if (obj.productCategoryId === -1) {
//       navigate("/allProducts");
//       return;
//     }
//     await fetchCriteriaProductsApi(Criteria);
//     navigate(
//       `/allProducts/CategoryProducts?CategoryName=${obj.productCategoryId}`
//     );
//   };
//   useEffect(() => {
//     if (location.pathname.includes("allProducts")) {
//       const searchParams = new URLSearchParams(location.search);
//       const category = searchParams.get("CategoryName");
//       if (category && components.length > 0) {
//         const component = components.find(
//           (comp) => comp.productCategoryId === category
//         );

//         if (component) {
//           setSelectedItem(component.categoryName);
//         }
//       }
//     } else {
//       setSearchInput("");
//       setSelectedItem("All");
//     }
//   }, [location]);

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     if (MenuItems[index] === "Home") navigate("/app");
//     else if (MenuItems[index] === "Products") navigate("/allProducts");
//     else if (MenuItems[index] === "Why PharmEtrade")
//       navigate("/whypharmetrade");
//     else if (MenuItems[index] === "About Us") navigate("/aboutus");
//     // else if (MenuItems[index] === "Contact Us") navigate("/contactus");
//     else if (MenuItems[index] === "Request Demo") navigate("/requestdemo");
//   };

//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isCategory, setIsCategory] = useState(false);
//   // const [popUps, setPopUps] = useState(<Baby />);
//   const FormData = JSON.parse(localStorage.getItem("formData"));

//   const handleMouseEnter = () => {
//     setIsPopupVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPopupVisible(false);
//   };
//   const mouseUp = () => {
//     setIsCategory(true);
//   };
//   const mouseDown = () => {
//     setIsCategory(false);
//   };
//   function handleredirect() {
//     navigate("/login");
//   }

//   function handleCart() {
//     navigate("/cart");
//   }

//   function handleclick() {
//     navigate("/wishlist");
//   }

//   function handleuser() {
//     navigate("/layout/layoutbuy");
//   }
//   function handleorder() {
//     navigate("/orderhistory");
//   }
//   function handlesignup() {
//     navigate("/signup");
//   }
//   function hanldeUp(items) {
//     setPopUps(items);
//   }

//   const [isContainerFocused, setIsContainerFocused] = useState(false);
//   const [isButtonFocused, setIsButtonFocused] = useState(false);
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

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent the default behavior
//       handleSearchAPI(); // Call submit function when Enter is pressed
//     }
//   };
//   const [selectedItemId, setSelectedItemId] = useState(-1);
//   const [SearchInput, setSearchInput] = useState("");
//   console.log(SearchInput, "search");
//   const handleSearch = async (e) => {
//     setSearchInput(e.target.value);
//   };
//   const handleSearchAPI = async () => {
//     let Criteria = {
//       // productName: SearchInput,
//       productCategoryId: selectedItemId,
//       productName: SearchInput,
//       customerId: user ? user.customerId : "234"
//     };
//     if (selectedItemId == -1) {
//       Criteria = {
//         productName: SearchInput,
//         customerId: user ? user.customerId : "123"
//       };
//     }
//     await fetchCriteriaProductsApi(Criteria);
//     navigate(`/allProducts?Search=${SearchInput}`);
//     setSearchInput("");
//   };

//   return (
//     <div
//       ref={topDivRef}
//       className=" fixed w-screen pt-1   z-10 bg-white text-grey-500"
//     >
//       <div className=" flex flex-col w-full justify-between ">
//         <ul className="text-3xl w-full">
//           <div className="flex flex-row h-[60px] justify-between gap-4 md:gap-12 lg:gap-10 items-center text-xl bg-white text-gray-500">
//             <div>
//               <img
//                 src={Logo}
//                 onClick={() => navigate("/")}
//                 className="w-12 md:w-16 lg:w-32 xl:w-60 h-12 ml-2 md:ml-2 lg:ml-12 hover:cursor-pointer lg:overflow-x-hidden xl-0"
//                 alt="Logo"
//               />
//             </div>
//             <div className="h-full md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 px-4 items-center">
//               <div className="flex gap-3 justify-around h-full items-center">
//                 {MenuItems.map((item, index) => (
//                   <li
//                     className={`text-blue hover:bg-slate-200 rounded-md flex justify-center p-1 px-1 items-center w-fit cursor-pointer font-medium text-[17px] ${
//                       selectedIndex === index
//                         ? "bg-slate-200 hover:text-blue text-blue border-0 font-semibold"
//                         : "border-transparent border-2"
//                     }`}
//                     key={index} // Use index as the key if item doesn't have a unique id
//                     onClick={() => handleSelect(index)}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </div>

//               <div className="flex flex-row gap-4 text-md items-center font-thin">
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setIsPopupVisible(true)}
//                   onMouseLeave={() => setIsPopupVisible(false)}
//                 >
//                   <div
//                     className="flex  items-center cursor-pointer"
//                     onClick={() => setIsPopupVisible((prevState) => !prevState)}
//                   >
//                     <img
//                       src={add}
//                       className="w-4 md:w-6 lg:w-8 h-8"
//                       alt="clickable"
//                     />
//                     <div className="text-blue hover:cursor-pointer ">
//                       {user ? (
//                         <>
//                           <div className="text-base font-medium ">
//                             {user.firstName} {user.lastName}
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="text-base font-medium ">Sign in</div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                   {isPopupVisible && (
//                     <div
//                       className="fixed flex z-10 -ml-5"
//                       // "absolute top-full  right-0 mt-2 w-64 bg-white p-2 rounded shadow-lg z-10"
//                     >
//                       <div
//                         className="bg-white p-4 rounded shadow-lg w-60"
//                         // "w-full flex flex-col"
//                       >
//                         <div className="w-full flex ">
//                           {user ? (
//                             <li
//                               className="cursor-pointer "
//                               onClick={() => handleLogout()}
//                             >
//                               <Link
//                                 to="/login"
//                                 className="bg-blue text-white rounded  w-32 py-1 block text-center"
//                               >
//                                 Logout
//                               </Link>
//                             </li>
//                           ) : (
//                             <a
//                               className="bg-blue text-white py-1 hover:cursor-pointer px-2 rounded block text-center "
//                               onClick={() => handleRedirect()}
//                             >
//                               Sign In
//                             </a>
//                           )}
//                         </div>

//                         {user ? (
//                           <>
//                             <p className="hidden"></p>
//                           </>
//                         ) : (
//                           <p
//                             className="text-base hover:cursor-pointer mb-2 text-left"
//                             onClick={handlesignup}
//                           >
//                             New User?{" "}
//                             <span className="text-blue hover:text-red-500 hover:underline">
//                               Sign Up
//                             </span>
//                           </p>
//                         )}

//                         {user && (
//                           <>
//                             <h2
//                               className="text-lg font-semibold cursor-pointer"
//                               onClick={handleuser}
//                             >
//                               Your Account
//                             </h2>
//                             <ul className="text-left">
//                               <li className="mb-1">
//                                 <a
//                                   href="#"
//                                   className="text-lg text-blue"
//                                   onClick={handleorder}
//                                 >
//                                   Order List
//                                 </a>
//                               </li>
//                               <li className="">
//                                 <a
//                                   href="#"
//                                   className="text-blue"
//                                   onClick={handleclick}
//                                 >
//                                   Wishlist
//                                 </a>
//                               </li>
//                             </ul>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <li className=" cursor-pointer" onClick={handleCart}>
//                   <a>
//                     <Tooltip title="Cart" placement="top">
//                       <img
//                         src={cartNav}
//                         className="w-1 md:w-3 lg:w-5 xl:w-7 pt-2 h-3 md:h-5 lg:h-7 xl:h-9 text-blue hover:text-gray-400 hover:scale-110 duration-500"
//                         alt="Cart"
//                       />
//                     </Tooltip>
//                   </a>
//                   <div className="absolute text-white rounded-full px-1 text-xs border bg-blue top-5 right-16 font-medium">
//                     {cart.length}
//                   </div>
//                 </li>
//                 <li>
//                   <a>
//                     <Tooltip title="Wishlist" placement="top">
//                       <img
//                         src={like}
//                         onClick={handleclick}
//                         className="w-1 md:w-3 lg:w-5 xl:w-7 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 cursor-pointer hover:scale-110 transition duration-300"
//                         alt="Like"
//                       />
//                     </Tooltip>
//                   </a>
//                 </li>
//               </div>
//             </div>
//           </div>
//         </ul>
//         {/* down div elemenet  */}
//         <div
//           className="flex justify-evenly bg-gray-200 w-full h-fit flex-row  md:w-screen
//            items-center text-black  border-grey-500 shadow-lg "
//         >
//           <div className="flex gap-5 items-center justify-around text-blue text-xs p-4 w-full md:w-fit">
//             {downDivItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`flex gap-1 items-center justify-center cursor-pointer font-semibold hover:text-black
//               ${
//                 Form_Data?.userType === 4 && item.label === "SELL"
//                   ? "hidden"
//                   : ""
//               }`}
//                 onClick={() => handleItemclick(item)} // Use the handleItemClick function
//               >
//                 <img
//                   src={item.icon}
//                   className="max-w-8 max-h-8"
//                   alt={item.label}
//                 />
//                 <div className="text-[15px] ml-1">{item.label}</div>
//               </li>
//             ))}
//           </div>

//           {/* Error message modal */}
//           {errorMessage && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
//                 <div className="flex justify-start items-center border-b border-black">
//                   <img src={warning} className="w-12 h-12" alt="Warning" />
//                   <p className="text-red-600 text-xl font-semibold mt-2">
//                     Warning!
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

//           <div className="flex bg-whit rounded-md items-center w-[50%] lg:gap-10">
//             <div
//               ref={dropdownRef}
//               className={`w-full relative flex items-center ${
//                 isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
//               }`}
//               onFocus={handleFocusIn}
//               onBlur={handleFocusOut}
//             >
//               {/* <Link to="/allProducts/CategoryProducts"> */}
//               <button
//                 className={`h-12 pl-2 mr-[1px] w-auto font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
//                   isButtonFocused ? "ring-2 ring-blue-500" : ""
//                 } button-focus`}
//                 onClick={handleDropdownToggle}
//                 onFocus={handleFocusIn}
//                 onBlur={handleFocusOut}
//               >
//                 {selectedItem}
//                 <span>
//                   <img src={dropdown} className="h-4 w-4" />
//                 </span>
//               </button>
//               {/* </Link> */}

//               {isDropdownOpen && (
//                 <div
//                   className="absolute z-10"
//                   style={{ top: "30px", left: "0px" }}
//                 >
//                   {/* <div className="bg-white  w-64">
//                     {components.map((items, index) => (
//                       <ul onClick={() => handleCriteria(items)} key={index}>
//                         <li className="">
//                           <a
//                             className="hover:text-black cursor-pointer text-sm font-medium text-blue"
//                             onClick={() => handleItemClick(items.categoryName)}
//                             onMouseLeave={handleCatMouseLeave}
//                           >
//                             {items.categoryName}
//                           </a>
//                         </li>
//                       </ul>
//                     ))}
//                   </div> */}
//                   <div className="bg-white w-64">
//                     {modifiedComponents.map((items, index) => (
//                       <ul onClick={() => handleCriteria(items)} key={index}>
//                         <li>
//                           <a
//                             className="hover:text-black ml-2 cursor-pointer text-sm font-medium text-blue"
//                             onClick={() => handleItemClick(items.categoryName)}
//                             onMouseLeave={handleCatMouseLeave}
//                           >
//                             {items.categoryName}
//                           </a>
//                         </li>
//                       </ul>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* {isDropdownOpen && (
//                 <div
//                   className="absolute z-10"
//                   style={{ top: "30px", left: "0px" }}
//                 >
//                   <div className="bg-white w-64">
//                     <ul onClick={() => handleCriteria({ categoryName: "All" })}>
//                       <li className="">
//                         <a
//                           className="hover:text-black cursor-pointer text-sm font-medium text-blue"
//                           onClick={() => handleItemClick("All")}
//                           onMouseLeave={handleCatMouseLeave}
//                         >
//                           All
//                         </a>
//                       </li>
//                     </ul>
//                     {components.map((items, index) => (
//                       <ul onClick={() => handleCriteria(items)} key={index}>
//                         <li className="">
//                           <a
//                             className="hover:text-black cursor-pointer text-sm font-medium text-blue"
//                             onClick={() => handleItemClick(items.categoryName)}
//                             onMouseLeave={handleCatMouseLeave}
//                           >
//                             {items.categoryName}
//                           </a>
//                         </li>
//                       </ul>
//                     ))}
//                   </div>
//                 </div>
//               )} */}

//               <div className="flex w-full h-12 border container-focus">
//                 <input
//                   type="text"
//                   placeholder="Search for products..."
//                   value={SearchInput}
//                   className="flex-grow p-4 border-none focus:outline-none container-focus"
//                   onChange={handleSearch}
//                   onKeyDown={handleKeyDown}
//                 />
//                 <button
//                   onClick={() => handleSearchAPI()}
//                   className="w-[40px] flex items-center justify-center p-2 bg-blue text-white border-blue-500 rounded-r-md focus:outline-none container-focus"
//                 >
//                   <img src={search} />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-5  items-center justify-around text-blue text-xs p-4 w-full md:w-fit">
//             {downSocialItems.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className="flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 "
//               >
//                 <img
//                   src={item.icon}
//                   className="max-w-8 max-h-8"
//                   alt={item.label}
//                 />
//                 {/* <div className="text-[15px] ml-1 ">{item.label}</div> */}
//               </li>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;

import React from "react";

import Logo from "../../../assets/logo2.png";
import Search from "../../../assets/search.png";
import cartNav from "../../../assets/cartNav2.png";
import like from "../../../assets/wishlistnav_icon.png";
// import compare from "../../../assets/CompareNav2.png";

import note from "../../../assets/Icons/Compare.png";

import join from "../../../assets/Join3d.png";
import Buy from "../../../assets/buy3d.png";
import sell from "../../../assets/sell3d.png";
import bid from "../../../assets/Bid3d.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";

import menu from "../../../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../../../assets/add.png";
import warning from "../../../assets/Icons/warning2.png";
import linkedin from "../../../assets/linkedin_icon.png";
import facebook from "../../../assets/facebook_icon.png";
import insta from "../../../assets/instagram_icon.png";
// import twitter from "../../../assets/twitter_icon.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import myaccount from "../../../assets/My Account.png";
import { TbTruckReturn } from "react-icons/tb";
import WhyPharma from "../NavLinks/WhyPharma";
import search from "../../../assets/search-icon.png";
import dropdown from "../../../assets/Down-arrow .png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";
import { Tooltip } from "@mui/material";
import { fetchProductCategoriesGetAll } from "../../../Api/MasterDataApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import backIcon from "../../../assets/Previous_icon.png";
import hamburgerIcon from "../../../assets/MenuIcon.png";
let text = [];

function Nav({ topDivRef, Form_Data, TriggerAPI }) {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for hamburger menu

  let navigate = useNavigate();
  const user = useSelector((state) => state.user.user) ;
  const cart = useSelector((state) => state.cart.cart) ;
  const components = useSelector((state) => state.master.productCategoryGetAll) ;
  const modifiedComponents = [
    { productCategoryId: -1, categoryName: "All Products" },
    ...components,
  ];

  const [selectedIndex, setSelectedIndex] = useState();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [activePopUp, setActivePopUp] = useState(null);
  const [selectedItem, setSelectedItem] = useState("All Products");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("CategoryName");
    if (category === null) {
      setSelectedItem("All Products");
    } else if (category && components.length > 0) {
      const component = modifiedComponents.find(
        (comp) => comp.productCategoryId == category
      );
      if (component) {
        setSelectedItem(component.categoryName); // Set the name if found
      } else {
        setSelectedItem("All Products");
      }
    }
  }, [location.search]);

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    dispatch(fetchProductCategoriesGetAll());
  }, []);
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("CategoryName");

  // const handleItemClick = (name) => {
  //   if (activePopUp === name) {
  //     setActivePopUp(null); // Close the popup if it's already open
  //     setSelectedItem("All"); // Reset to "All" when closed
  //   } else {
  //     setActivePopUp(name); // Set the active popup
  //     setSelectedItem(name); // Update the button label with the selected item
  //   }
  //   setDropdownOpen(false); // Close the dropdown after selection
  // };

  const handleItemClick = (name, id) => {
    if (activePopUp === name) {
      setSelectedItemId(-1);
      setActivePopUp(null); // Close the popup if it's already open
      setSelectedItem("All Products");
      // setActivePopUp(null); // Close the popup if it's already open
    } else {
      // setActivePopUp(name); // Set the active popup
      setSelectedItemId(id);
      setActivePopUp(name); // Set the active popup
      setSelectedItem(name);
      // if (name === "All") {
      //   navigate('/allProducts'); // Navigate to '/allProducts' if "All" is clicked
      // }
    }
    setDropdownOpen(false); // Close the dropdown after selection
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
    // "Home",
    // "Products",
    "Shop",
    // "Why PharmEtrade",
    "About Us",
    "Contact Us",
    // "Request Demo",
  ];

  const [errorMessage, setErrorMessage] = useState("");

  const handleItemclick = (item) => {
    // Check if the user is of customerTypeId 4 and trying to click on "SELL"
    if (user?.customerTypeId === 4 && item.label === "SELL") {
      setErrorMessage(
        <>
          You have logged in as a buyer. Please contact us at{" "}
          <a
            href="mailto:help@pharmetrade.com"
            className="text-blue underline"
          >
            help@pharmetrade.com
          </a>
        </>
      );
    } else {
      // Navigate to the path if the condition doesn't match
      navigate(item.path);
    }
  };

  // const handleItemclick = (item) => {
  //   navigate(item.path);
  // };

  // Clear error message after 3 seconds
  // if (errorMessage) {
  //   setTimeout(() => setErrorMessage(""), 10000);
  // }

  const downDivItems = [
    // { label: "BUY", icon: Buy, path: "/layout" },
    // { label: "JOIN", icon: join, path: "/login" },
    // { label: "SELL", icon: sell, path:"/layout/addproduct" },
    // { label: "BID", icon: bid, path: "/bid" },
    { label: "BUY", icon: Buy, path: user ? "/layout/layoutbuy" : "login" },
    {
      label: "SELL",
      icon: sell,
      path: user ? "/layout/addproduct" : "/login",
    },
    { label: "BID", icon: bid, path: user ? "/bid" : "login" },
    { label: "JOIN", icon: join, path: user ? null : "/signup" },
  ];

  const downSocialItems = [
    { icon: linkedin, href: "https://www.linkedin.com/company/pharmetrade/"},
    {
      icon: facebook, href: "https://www.facebook.com/PharmETrade" },
    // { icon: insta, href: "https://www.instagram.com/pharm_etrade/" },
    // { icon: twitter, path: "#" },
  ];

  // const components = [
  //   { id: 1, name: "Prescription Medications" },
  //   { id: 2, name: "Baby & Child Care Products" },
  //   { id: 4, name: "Health care products" },
  //   { id: 5, name: "Household Suppliers" },
  //   { id: 6, name: "Oral Care Products" },
  //   { id: 7, name: "Stationery & Gift Wrapping Supplies" },
  //   { id: 8, name: "Vision Products" },
  //   { id: 9, name: "Diet & Sports Nutrition" },
  //   { id: 10, name: "Vitamins, Minerals & Supplements" },
  //   { id: 11, name: "Personal Care Products" },
  // ];

  const handleCriteria = async (obj) => {
    handleItemClick(obj.categoryName, obj.productCategoryId);
    let Criteria = {
      productCategoryId: obj.productCategoryId,
      customerId: user ? user.customerId : "123",
    };

    if (obj.productCategoryId === -1) {
      navigate("/allProducts");
      return;
    }
    await fetchCriteriaProductsApi(Criteria);
    navigate(
      `/allProducts/CategoryProducts?CategoryName=${obj.productCategoryId}`
    );
  };
  useEffect(() => {
    if (location.pathname.includes("allProducts")) {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get("CategoryName");
      if (category && components.length > 0) {
        const component = components.find(
          (comp) => comp.productCategoryId === category
        );

        if (component) {
          setSelectedItem(component.categoryName);
        }
      }
    } else {
      setSearchInput("");
      setSelectedItem("All Products");
    }
  }, [location]);

  // const handleSelect = (index) => {
  //   setSelectedIndex(index);
  //   if (MenuItems[index] === "Home") navigate("/app");
  //    else if (MenuItems[index] === "Shop") navigate("/allProducts");
  //   else if (MenuItems[index] === "Why PharmEtrade")
  //     navigate("/whypharmetrade");
  //   else if (MenuItems[index] === "About Us") navigate("/aboutus");
  //   // else if (MenuItems[index] === "Contact Us") navigate("/contactus");
  //   else if (MenuItems[index] === "Request Demo") navigate("/requestdemo");
  // };

  const handleSelect = (index) => {
    setSelectedIndex(index);

    const selectedItem = MenuItems[index]; // Get the selected item

    if (selectedItem === "Shop") navigate("/allProducts");
    else if (selectedItem === "About Us") navigate("/aboutus");
    else if (selectedItem === "Contact Us") navigate("/contactus"); // Fix navigation path
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
    navigate("/layout/layoutbuy");
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchAPI(); // Call submit function when Enter is pressed
    }
  };
  const [selectedItemId, setSelectedItemId] = useState(-1);
  const [SearchInput, setSearchInput] = useState("");
  const handleSearch = async (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchAPI = async () => {
    let Criteria = {
      // productName: SearchInput,
      productCategoryId: selectedItemId,
      productName: SearchInput,
      customerId: user ? user.customerId : "123",
    };
    if (selectedItemId == -1) {
      Criteria = {
        productName: SearchInput,
        customerId: user ? user.customerId : "123",
      };
    }
    await fetchCriteriaProductsApi(Criteria);
    navigate(`/allProducts?Search=${SearchInput}`);
    setSearchInput("");
  };

  return (
    <nav
      ref={topDivRef}
      className=" fixed w-screen pt-1 top-0  z-10 bg-white text-grey-500"
    >
      <div className=" flex flex-col w-full justify-between ">
        <ul className="text-3xl w-full">
          <div className="flex flex-row h-[60px] justify-between gap-4 md:gap-12 lg:gap-10 items-center text-xl bg-white text-gray-500">
            <div className="flex items-center gap-4 md:hidden">
              <img
                src={isNavOpen ? backIcon : hamburgerIcon} // Toggle icon between hamburger and back
                alt="Menu"
                className="w-6 h-6 cursor-pointer ml-3"
                onClick={() => setIsNavOpen(!isNavOpen)} // Toggle menu state
              />
            </div>

            <div>
              <img
                src={Logo}
                // onClick={() => navigate("/")}
                onClick={() => {
                  setSelectedIndex(""); 
                  navigate("/");
                }}
                // className="w-18 md:w-16 lg:w-32 xl:w-60 h-9 ml-2 md:ml-2 lg:ml-12 hover:cursor-pointer lg:overflow-x-hidden"
                className="w-28 sm:w-36 md:w-36 lg:w-48 xl:w-60 h-auto ml-2 md:ml-2 lg:ml-12 hover:cursor-pointer"
                alt="Logo"
              />
            </div>

            {/* Flexbox for Menu Items and Icons (User, Cart, Wishlist) */}
            <div className="flex h-full md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 px-4 items-center">
              <div className="hidden md:flex gap-3 justify-around h-full items-center">
                {MenuItems.map((item, index) => (
                  <li
                    className={`textColor hover:bg-slate-200 rounded-md flex justify-center p-1 px-1 items-center w-fit cursor-pointer font-semibold text-[17px] leading-none ${
                      selectedIndex === index
                        ? "bg-slate-200 hover:text-blue text-blue border-0 font-semibold"
                        : "border-transparent border-2"
                    }`}
                    key={index}
                    onClick={() => handleSelect(index)}
                  >
                    {item}
                  </li>
                ))}
              </div>

              {/* User icon, Cart, Wishlist visible on all screens */}
              <div className="flex flex-row gap-4 text-md items-center font-thin">
                {/* User icon */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsPopupVisible(true)}
                  onMouseLeave={() => setIsPopupVisible(false)}
                >
                  <div
                    className="flex items-center cursor-pointer -ml-3"
                    onClick={() => setIsPopupVisible((prevState) => !prevState)}
                  >  
                    <img
                      src={add}
                      className="w-6 md:w-6 lg:w-8"
                      alt="clickable"
                    />
                    <div className="text-blue hover:cursor-pointer lg:mr-16 lg:w-">
                      {user ? (
                        <div className="textColor text-sm sm:text-xs flex flex-wrap md:text-base xl:text-lg font-semibold leading-none">
                          {user.firstName}
                          <p className="hidden lg:inline ml-1">
                            {user.lastName}
                          </p>
                        </div>
                      ) : (
                          <div className="textColor font-semibold">Sign in</div>
                      )}
                    </div>
                  </div>
                  {isPopupVisible && (
                    <div className="fixed flex z-10 -ml-5">
                      <div className="bg-white p-4 rounded shadow-lg w-60">
                        <div className="w-full flex">
                          {user ? (
                            <li
                              className="cursor-pointer"
                              onClick={() => handleLogout()}
                            >
                              <Link
                                to="/login"
                                className="bg-blue text-white rounded w-32 py-1 block text-center hover:bg-green2"
                              >
                                Logout
                              </Link>
                            </li>
                          ) : (
                            <a
                                className="bg-blue2 hover:bg-green2 text-white py-1 hover:cursor-pointer px-2 rounded block text-center"
                              onClick={() => handleRedirect()}
                            >
                              Sign In
                            </a>
                          )}
                        </div>
                        {!user && (
                          <p
                            className="text-base hover:cursor-pointer mb-2 text-left"
                            onClick={handlesignup}
                          >
                            New User?{" "}
                            <span className="text-blue hover:text-green2 hover:underline">
                              Sign Up
                            </span>
                          </p>
                        )}
                        {user && (
                          <>
                            <h2
                              className="text-lg font-semibold cursor-pointer"
                              onClick={handleuser}
                            >
                              Your Account
                            </h2>
                            <ul className="text-left">
                              <li className="mb-1">
                                <a
                                  href="#"
                                  className="text-lg text-blue hover:text-green2"
                                  onClick={handleorder}
                                >
                                  Order List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-blue hover:text-green2"
                                  onClick={handleclick}
                                >
                                  Wishlist
                                </a>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Cart Icon */}
                {/* <li className="cursor-pointer" onClick={handleCart}>
                  <Tooltip title="Cart" placement="top">
                    <img
                      src={cartNav}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 -ml-1 text-blue hover:text-gray-400 hover:scale-110 duration-500"
                      alt="Cart"
                    />
                  </Tooltip>
                  <div className="absolute text-white rounded-full px-1 text-xs border bg-blue top-4 right-25 font-medium">
                    {cart.length}
                  </div>
                </li>

                {/* Wishlist Icon *
                <li>
                  <Tooltip title="Wishlist" placement="top">
                    <img
                      src={like}
                      onClick={handleclick}
                      className="w-5 h-5 md:w-7 md:h-7 lg:w-6 lg:h-6 cursor-pointer hover:scale-110 transition duration-300"
                      alt="Like"
                    />
                  </Tooltip>
                </li> */}
              </div>
            </div>
          </div>

          {isNavOpen && (
            <div className="fixed top-0 left-0 w-[70%] h-full bg-blue-100 z-20 shadow-lg transform transition-transform duration-300">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-semibold text-blue">Menu</h2>
                <img
                  src={backIcon} // Back icon for closing
                  className="w-5 h-5 cursor-pointer"
                  alt="Close Menu"
                  onClick={() => setIsNavOpen(false)}
                />
              </div>
              <ul className="flex flex-col gap-4 p-4">
                {MenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-blue hover:bg-slate-200 rounded-md flex justify-start p-2 cursor-pointer font-medium text-lg"
                    onClick={() => {
                      handleSelect(index);
                      setIsNavOpen(false); // Close menu on selection
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ul>

        {/* down div elemenet  */}
        <div className="flex flex-col justify-around bg-gray-200 w-full h-24 md:h-fit lg:h-fit xl:h-fit items-center text-black border-grey-500 shadow-lg md:flex-row">
          <div className="flex gap-4 items-center text-blue p-3 ml-0 lg:ml-8 w-full md:w-fit">
            {downDivItems.map((item, index) => (
              <li
                key={index}
                className={`flex gap-3 items-center justify-center font-semibold hover:text-green2
        ${Form_Data?.userType === 4 && item.label === "SELL" ? "hidden" : ""} ${item.label === "JOIN" ? (user ? "cursor-not-allowed" : "cursor-pointer") : "cursor-pointer"}

        `}
                onClick={() => handleItemclick(item)}
              >
                <img
                  src={item.icon}
                  className="max-w-5 max-h-5 sm:max-w-8 sm:max-h-8"
                  alt={item.label}
                />
                <div className="text-sm sm:text-[15px] md:text-base lg:text-base">
                  {item.label}
                </div>{" "}
                {/* Hide label on md+ screens */}
              </li>
            ))}
          </div>

          {/* Error message modal */}
          {errorMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-green2 bg-opacity-50 z-50">
              <div className="bg-gray-100 p-4 sm:p-2 md:p-6 rounded-md shadow-md text-center w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12">
                <div className="flex justify-start items-center border-b border-black">
                  <img
                    src={warning}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    alt="Warning"
                  />
                  <p className="text-red-600 text-lg sm:text-xl md:text-2xl font-semibold mt-2 ml-2">
                    Warning!
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-green2 mb-4 text-sm sm:text-base md:text-lg">
                    {errorMessage}
                  </p>
                  <button
                    onClick={() => setErrorMessage("")}
                    className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded mb-2 text-xs sm:text-sm md:text-base"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search bar */}
          <div className="flex items-center lg:mr-1 rounded-md lg:w-7/12 w-full md:w-1/2 p-2 -mt-4 md:mt-0">
            <div
              ref={dropdownRef}
              className={`w-full relative flex items-center ${
                isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
              }`}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              <button
                className={`h-12 pl-2 mr-[1px] lg:w-auto lg:items-center w-auto  sm:w-auto font-semibold text-left gap-1 text-[14px]  lg:text-[16px] flex items-center text-blue2 hover:text-green2 bg-gray-100 border-gray-300 rounded-l-md border
        ${isButtonFocused ? "ring-2 ring-blue-500" : ""}`}
                onClick={handleDropdownToggle}
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
              >
                {selectedItem}
                <span>
                  <img src={dropdown} className="h-4 w-4" />
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute z-10"
                  style={{ top: "30px", left: "0px" }}
                >
                  <div className="bg-white sm:w-44 lg:w-64 ">
                    <ul>
                    {modifiedComponents.map((items, index) => (
                      <li onClick={() => handleCriteria(items)} key={index}>
                          <a
                            className="hover:text-green2 ml-2 cursor-pointer text-sm font-semibold lg:text-sm  text-blue2 leading-none"
                            onClick={() => handleItemClick(items.categoryName)}
                            onMouseLeave={handleCatMouseLeave}
                          >
                          {items.categoryName} {items.categoryName === "OTC Medications" && (
                            <hr className="border-t border-green2 w-full mt-1" />
                          )}
                          </a>
                        </li>
                    ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex w-full  h-12 border">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={SearchInput}
                  className="flex-grow p-4 border-none focus:outline-none "
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={() => handleSearchAPI()}
                  className="w-[40px] flex items-center justify-center p-2 bg-blue hover:bg-green2 text-white border-blue2 rounded-r-md focus:outline-none"
                >
                  <img src={search} />
                </button>
              </div>
            </div>
          </div>

          {/* Social items */}
          {/* <div className="flex gap-5 items-center mr-6 justify-around text-blue p-4 w-full md:w-fit"> */}
            {/* {downSocialItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(item.href)}
                className="flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 "
              >
                {/* Hide icons on sm and md screens, show on lg and above 
                <img
                  src={item.icon}
                  className="hidden lg:block max-w-6 max-h-6 lg:max-w-8 lg:max-h-8"
                  alt={item.label}
                />
                {/* Hide label on sm and md screens, show on lg and above 
                <div className="hidden xl:block text-sm">{item.label}</div>
              </li>
            ))} */}
            {/* {downSocialItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  if (item.href.startsWith("http")) {
                    // Open external links in a new tab
                    window.open(item.href, "_blank", "noopener noreferrer");
                  } else {
                    // Use navigate for internal links if needed
                    navigate(item.href);
                  }
                }}
                className="flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 "
              >
                {/* Hide icons on sm and md screens, show on lg and above *
                <img
                  src={item.icon}
                  className="hidden lg:block max-w-6 max-h-6 lg:max-w-8 lg:max-h-8"
                  alt={item.label}
                />
                {/* Hide label on sm and md screens, show on lg and above *
                <div className="hidden xl:block text-sm">{item.label}</div>
              </li>
            ))} */}
            {/* Wishlist Icon */}
          <div className=" mt-0 flex relative justify-between">
            <ul className="flex items-center lg:mr-14">

            <li>
              <Tooltip title="Wishlist" placement="top">
                <img
                  src={like}
                  onClick={handleclick}
                    className="w-5 md:w-7 cursor-pointer hover:scale-110 transition duration-300 "
                  alt="Like"
                />
              </Tooltip>
            </li>
          
            <li className="cursor-pointer" onClick={handleCart}>
              <Tooltip title="Cart" placement="top">
                <img
                  src={cartNav}
                  className="w-9 lg:w-9 md:w-9 lg:ml-5 -ml-1 text-blue hover:text-gray-400 hover:scale-110 duration-500"
                  alt="Cart"
                />
              </Tooltip>
              <div className="absolute text-white rounded-full px-1 text-sm border bg-blue top-0 right-16 font-medium">
                {cart.length}
              </div>
            </li>
            </ul>
            </div>

          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
