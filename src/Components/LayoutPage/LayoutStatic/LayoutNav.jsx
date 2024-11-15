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
import warning from "../../../assets/Icons/warning2.png";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";
import { Tooltip } from "@mui/material";

const LayoutNav = ({ Form_Data }) => {
  const [isContainerFocused, setIsContainerFocused] = useState(false);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activePopUp, setActivePopUp] = useState(null); // State for active popup
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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

  // const handleItemClick = (name) => {
  //   if (activePopUp === name) {
  //     setActivePopUp(null); // Close the popup if it's already open
  //   } else {
  //     setActivePopUp(name); // Set the active popup
  //   }
  // };
  const [selectedItemId,setSelectedItemId]= useState(-1);
  const handleItemClick = (name,id) => {
    if (activePopUp === name) {
      setSelectedItemId(-1);
      setActivePopUp(null); // Close the popup if it's already open
      setSelectedItem("All"); // Reset to "All" when closed
    } else {
      setSelectedItemId(id);
      setActivePopUp(name); // Set the active popup
      setSelectedItem(name); // Update the button label with the selected item
    }
    setDropdownOpen(false); // Close the dropdown after selection
  };

  // const handleCriteria = async (obj) => {
  //   let Criteria = {
  //     productCategoryId: obj.id
  //   };

  //   console.log("cr--->", Criteria)

  //   await fetchCriteriaProductsApi(Criteria);
  //   navigate('/layout/layoutCategoryProducts');

  // };

  const handleCriteria = async (obj) => {
    handleItemClick(obj.categoryName,obj.productCategoryId)
    let Criteria = {
      customerId: user.customerId,
      productCategoryId: obj.productCategoryId,
    };

    console.log("cr--->", obj);
    if (obj.productCategoryId === -1) {
      navigate("/layout/layoutbuy");
      return;
    }
    await fetchCriteriaProductsApi(Criteria);
    navigate(
      `/layout/layoutCategoryProducts?CategoryName=${obj.productCategoryId}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchAPI(); // Call submit function when Enter is pressed
    }
  };
  const [selectedItem, setSelectedItem] = useState("All");
  const [SearchInput, setSearchInput] = useState("");
  const handleSearch = async (e) => {
    setSearchInput(e.target.value);
  };

  console.log(SearchInput, "search");
  const handleSearchAPI = async () => {
 

      
      let Criteria = {
        customerId: user.customerId,
        productCategoryId: selectedItemId,
        productName: SearchInput,
      };
      if(selectedItemId==-1)
      {
        Criteria = {
          customerId: user.customerId,
          productName: SearchInput,


        }
      }
  
      console.log("g--->", Criteria);
  
      await fetchCriteriaProductsApi(Criteria);
      navigate(`/layout/layoutCategoryProducts?CategoryName=${selectedItemId}`);
      setSearchInput("");
    
    
    
   
  };
console.log(selectedItem);
  const components = useSelector((state) => state.master.productCategoryGetAll);

  const modifiedComponents = [
    { productCategoryId: -1, categoryName: "All" },
    ...components,
  ];

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
  const handleItemclick = (item) => {
    // Check if user is of customerTypeId 4 and tries to click on "SELL"
    if (user?.customerTypeId === 4 && item.text === "SELL") {
      setErrorMessage(
        <>
          You have logged in as a buyer. Please contact us at{" "}
          <a href="mailto:help@pharmetrade.com" className="text-blue-900 underline">
            help@pharmetrade.com
          </a>
        </>
      );
    } else {
      // Navigate to the path for other user types
      navigate(item.path);
    }
  };



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

  // const handleItemclick = (item) => {
  //   navigate(item.path);
  // };

  const navItems = [
    { image: buy, text: "BUY", path: "/layout/layoutbuy" },
    { image: sell, text: "SELL", path: "/layout/addproduct" },
        { image: bid, text: "BID", path: "/layout/layoutbid" },

  ];

  const iconItems = [
    { icon: OTCProd, text: "OTC Products", path: "/layout/layoutOtcProducts" },
    { icon: buyagain, text: "Buy Again", path: "/layout/layoutorderlist" },
    { icon: deals, text: "Deals", path: "/allProducts/offers" },

    // { icon: notification, text: "" },
  ];
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };
  const handleCriteriaLoad = async (id)=>{
    let Criteria = {
      customerId: user.customerId,
      productCategoryId: id,
    };

    if (id === -1) {
      return;
    }
    await fetchCriteriaProductsApi(Criteria);
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("CategoryName");
    console.log("testing",category);
    if (category === null) {
      setSelectedItem("All");
    } else if (category && components.length > 0) {
      const component = modifiedComponents.find(
        (comp) => comp.productCategoryId == category
      );
      handleCriteriaLoad(category);
      
      console.log("heyeheyehhoanceu", component, category);
      if (component) {
        setSelectedItem(component.categoryName); // Set the name if found
      } else {
        setSelectedItem("All");
      }
    }
  }, [components]);
  return (
    // <div className="my-3 pb-2 cursor-pointer border-b-2 border-gray-300 shadow-lg">
    //   <div className="flex justify-around items-center">
    //     <div className="flex">
    //       {navItems.map((item, index) => (
    //          <div
    //          key={index}
    //          className={`flex items-center ml-2 cursor-pointer
    //            ${Form_Data?.userType === 4 ? "hidden" : ""}`}
    //          onClick={() => handleItemclick(item)} // Use the handleItemClick function
    //        >
    //           <img
    //             src={item.image}
    //             className="w-8 h-8 mr-[2px]"
    //             alt={item.text}
    //           />
    //           <span className="text-sm font-semibold my-1">{item.text}</span>
    //         </div>
    //       ))}
    //     </div>

    //     {errorMessage && (
    //       <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-black bg-opacity-50 z-50">
    //         <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
    //           <div className="flex justify-start items-center border-b border-black">
    //             <img src={warning} className=" w-12 h-12" />
    //             <p className="text-red-600 text-xl font-semibold mt-2">
    //               Warning !
    //             </p>
    //           </div>
    //           <div className="mt-4">
    //             <p className="text-black mb-4">{errorMessage}</p>
    //             <button
    //               onClick={() => setErrorMessage("")}
    //               className="bg-red-500 text-white px-4 py-2 rounded mb-2"
    //             >
    //               Close
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* Search and dropdown */}
    //     <div className="flex rounded-lg w-[40%]">
    //       <div
    //         ref={dropdownRef}
    //         className={`w-full relative flex items-center ${
    //           isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
    //         }`}
    //       >
    //         <div className="relative inline-block">
    //           <button
    //             className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex  w-auto items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
    //               isButtonFocused ? "ring-2 ring-blue-500" : ""
    //             } button-focus`}
    //             onClick={handleDropdownToggle}
    //             onFocus={handleFocusIn}
    //             onBlur={handleFocusOut}
    //           >
    //             {selectedItem}
    //             <span>
    //               <img src={dropdown} className="h-4 w-4" alt="dropdown" />
    //             </span>
    //           </button>

    //           {isDropdownOpen && (
    //             <div
    //               className="absolute z-10"
    //               style={{ top: "30px", left: "0px" }}
    //             >
    //               <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
    //                 {modifiedComponents.map((items, index) => (
    //                   <ul onClick={() => handleCriteria(items)} key={index}>
    //                     <li className="">
    //                       <a
    //                         className="hover:text-black cursor-pointer text-sm font-medium text-blue-900"
    //                         onMouseLeave={handleCatMouseLeave}
    //                       >
    //                         {items.categoryName}
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 ))}
    //               </div>
    //             </div>
    //           )}
    //         </div>

    //         <div className="flex w-full h-10 border container-focus">
    //           <input
    //             type="text"
    //             name="SearchInput"
    //             value={SearchInput}
    //             onChange={handleSearch}
    //             onKeyDown={handleKeyDown}
    //             placeholder="Search for products..."
    //             className="flex-grow p-4 border-none focus:outline-none container-focus"
    //           />
    //           <button
    //             onClick={() => handleSearchAPI()}
    //             className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus"
    //           >
    //             <img src={search} alt="search icon" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Icons with text */}
    //     <div className="flex items-center">
    //       {iconItems.map((item, index) => (
    //         <div
    //           key={index}
    //           className="flex items-center "
    //           onClick={() => navigate(item.path)}
    //         >
    //           <img src={item.icon} className="w-8 h-8 " />
    //           <span className="text-sm font-semibold mr-2">{item.text}</span>
    //         </div>
    //       ))}
    //       <div>
    //         <Tooltip title="Notification" placement="top">
    //           <img
    //             src={notification}
    //             className="w-10 h-10 "
    //             alt="Notification icon"
    //             onMouseEnter={handleMouseEnter}
    //             onMouseLeave={handleMouseLeave}
    //           />
    //           <div className="absolute text-white rounded-full bg-blue-900  ml-5 right-4.5 -mt-10 px-1 font-medium text-[10px]">
    //             {cartItems.length}
    //           </div>
    //         </Tooltip>
    //       </div>
    //       {isPopupVisible && (
    //         <div
    //           className="absolute right-2 top-8 mt-10 w-64 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-40"
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <h4 className="font-bold text-lg mb-2 border-b text-center ">
    //             {" "}
    //             Your Notifications
    //           </h4>
    //           <ul className="text-sm text-gray-600">
    //             <li className="flex flex-wrap">New order placed</li>
    //             <li className="flex flex-wrap">Product review received</li>
    //             <li className="flex flex-wrap">
    //               Stock running low on some items
    //             </li>
    //           </ul>
    //         </div>
    //       )}

    //       <Tooltip title="Wishlist" placement="top">
    //         <img
    //           onClick={() => navigate("/layout/layoutwishlist")}
    //           src={wishlist}
    //           className="w-6 h-6 mr-2"
    //           alt="wishlist icon"
    //         />
    //       </Tooltip>

    //       <div onClick={() => navigate("/cart")} className="relative">
    //         <div className="absolute text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-[10px]">
    //           {cartItems.length}
    //         </div>
    //         <Tooltip title="Cart" placement="top">
    //           <img src={cartNav} className="w-6 h-6 mr-2" alt="cart icon" />
    //         </Tooltip>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="my-3 pb-2 cursor-pointer border-b-2 border-gray-300 shadow-lg">
      <div className="md:flex justify-between items-center ">
        {/* Nav Items (Hidden on small and medium screens) */}
        <div className="hidden xl:flex items-center">
          <div className="flex">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ml-2 cursor-pointer
                ${Form_Data?.userType === 4 ? "hidden" : ""}`}
                onClick={() => handleItemclick(item)}
              >
                <img src={item.image} className="w-8 h-8 mr-[2px]" alt={item.text} />
                <span className="text-sm font-semibold my-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Message Popup */}
        {errorMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-black bg-opacity-50 z-50">
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
              <div className="flex justify-start items-center border-b border-black">
                <img src={warning} className=" w-12 h-12" />
                <p className="text-red-600 text-xl font-semibold mt-2">Warning !</p>
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

        {/* Search and Dropdown */}
        <div className="flex sm:w-full md:w-[60%] lg:w-[40%]">
          <div ref={dropdownRef} className={`w-full relative flex items-center ${isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""}`}>
            <div className="relative inline-block">
              <button
                className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex  w-auto items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${isButtonFocused ? "ring-2 ring-blue-500" : ""}`}
                onClick={handleDropdownToggle}
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
              >
                {selectedItem}
                <span>
                  <img src={dropdown} className="h-4 w-4" alt="dropdown" />
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10" style={{ top: "30px", left: "0px" }}>
                  <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                    {modifiedComponents.map((items, index) => (
                      <ul onClick={() => handleCriteria(items)} key={index}>
                        <li className="">
                          <a className="hover:text-black cursor-pointer text-sm font-medium text-blue-900  leading-none">
                            {items.categoryName}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="flex w-full h-10 border">
              <input
                type="text"
                name="SearchInput"
                value={SearchInput}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder="Search for products..."
                className="flex-grow border-none focus:outline-none"
              />
              <button
                onClick={() => handleSearchAPI()}
                className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none"
              >
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Icons with Text */}
        <div className="flex items-center space-x-2">
          {iconItems.map((item, index) => (
            <div key={index} className="flex items-center" onClick={() => navigate(item.path)}>
              <img src={item.icon} className="w-8 h-8" />
              <span className="text-sm font-semibold mr-2">{item.text}</span>
            </div>
          ))}
          <Tooltip title="Notification" placement="top">
            <img src={notification} className="w-10 h-10" alt="Notification icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <div className="absolute text-white rounded-full bg-blue-900 ml-5 right-4.5 -mt-10 px-1 font-medium text-[10px]">{cartItems.length}</div>
          </Tooltip>

          {isPopupVisible && (
            <div className="absolute right-2 top-8 mt-10 w-64 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-40" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <h4 className="font-bold text-lg mb-2 border-b text-center">Your Notifications</h4>
              <ul className="text-sm text-gray-600">
                <li>New order placed</li>
                <li>Product review received</li>
                <li>Stock running low on some items</li>
              </ul>
            </div>
          )}

          <Tooltip title="Wishlist" placement="top">
            <img onClick={() => navigate("/layout/layoutwishlist")} src={wishlist} className="w-6 h-6 mr-2" alt="wishlist icon" />
          </Tooltip>

          <div onClick={() => navigate("/cart")} className="relative">
            <div className="absolute text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-[10px]">{cartItems.length}</div>
            <Tooltip title="Cart" placement="top">
              <img src={cartNav} className="w-6 h-6 mr-2" alt="cart icon" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNav;
