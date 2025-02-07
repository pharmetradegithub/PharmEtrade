

import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { RiShare2Fill } from "react-icons/ri";
// import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPinterest, FaFacebook } from "react-icons/fa";
// import wrong from '../assets/wrong.png'
import wrong from "../assets/Icons/wrongred.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchimg from '../assets/search1.png'
import deleteicon from '../assets/trash.png'
import Facebook from '../assets/facebook1.png'
import Pintrist from '../assets/pinterest.png'
import email from '../assets/envelope.png'
import Whatsapp from '../assets/Icons/Whatsapp.png'
import share from '../assets/share.png'
import cart from '../assets/cartw_icon.png'
import cross from '../assets/letter-x[1].png'
import { useSelector } from "react-redux";
import { removeFromWishlistApi } from "../Api/WishList";
import { addCartApi } from "../Api/CartApi";
import { Tooltip } from "@mui/material";
import Notification from '../Components/Notification' // Import Notification component

// import { Tooltip } from "chart.js";
function Wishlist({ topMargin, addCart }) {
  const wishItems = useSelector((state) => state.wishlist.wishlist || []); // Fallback to empty array if null
  //const wishItems = useSelector((state)=>state.wishlist.wishlist);
  const user = useSelector((state) => state.user.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState(
    Array.isArray(wishItems) ? wishItems.map(() => 1) : [] // Ensure wishItems is an array
  );

  // const [quantities, setQuantities] = useState(wishItems.map(() => 1));
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const handleremove = async (wishListId) => {
    try {
      await removeFromWishlistApi(wishListId);
    } catch (error) {
      throw error;
    }
  }
  const handleCart = async (productID) => {
    if (user == null) {
      return;
    }
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    // try {
    //   await addCartApi(cartData);

    // } catch (error) {
    //   console.error("Error adding product to cart:", error);
    // }
    try {
      await addCartApi(cartData);
      setNotification({
        show: true,
        message: "Item Added To Cart Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };


  const Star = ({ filled, onClick }) => (
    <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '25px', color: 'orange', marginLeft: "8px" }}>
      {filled ? '★' : '☆'}
    </span>
  );

  const handlePopupToggle = () => setShowPopup(!showPopup);
  const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'red',
    color: 'black',
    zIndex: "1"

  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // backgroundColor:'beige',
    border: '1px solid gray',
    // boxShadow:'1px 1px',
    borderRadius: '5px',
    color: "black",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="bg-gray-200 p-8  main-container padding-10" style={{ marginTop: `${topMargin}px ` }}>
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <h1 className="text-2xl mb-2 text-blue-900 font-semibold">PharmEtrade {">"} Wishlist</h1>
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 main-container">
        <div className="flex justify-between">
          <h1 className="text-2xl m-2 font-semibold">Wishlist</h1>
          {/* <div className='flex bg-white  m-5'>
            
             <Search className="">
          <SearchIconWrapper>
            <img src={searchimg} className="w-6 absolute " />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
          </div> */}
        </div>

        {wishItems.length > 0 ? (
          <div className="flex flex-col gap-6">
            {wishItems.map((item, index) => (
              <div key={index} className="border rounded-lg flex flex-wrap md:flex-nowrap justify-between h-auto p-4 w-full md:w-auto max-w-6xl bg-white shadow-md">
                <Link to={`/detailspage/${item.product.productID}`}>
                  <img className="h-48 w-40 md:w-32 lg:w-40 rounded-lg cursor-pointer" src={item.product.imageUrl} alt={item.product.productName} />
                </Link>
                <div className="flex flex-col font-medium w-full md:w-auto ">
                  <Link to={`/detailspage/${item.product.productID}`} className="hover:text-red-600">
                    <h3 className="text-lg md:text-xl font-semibold">{item.product.productName}</h3>
                    <p className="text-md md:text-lg font-semibold">${item.product.salePrice?.toFixed(2)}</p>
                  </Link>
                  <div className="flex">
                    <p className="text-sm md:text-xl font-semibold mr-2">Manufacturer: </p>
                    <span className="text-xs md:text-sm flex flex-wrap mt-1">{item.product.manufacturer}</span>
                  </div>
                  <div className="flex">
                    <span className="text-sm md:text-lg font-semibold mr-2">Brand Name :</span>
                    <p className="text-xs md:text-lg flex flex-wrap">{item.product.brandName}</p>
                  </div>
                  <p className="text-sm md:text-lg">Quantity: 1</p>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-lg">Expires on or after:</span>
                    <p>
                      {new Date(item.product.expiryDate)
                        .toLocaleDateString('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        })
                        .replace(/\//g, '-')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
                  {/* <button className="text-sm md:text-lg font-semibold text-white bg-blue-900 w-28 md:w-36 h-9 flex justify-center items-center rounded-full" onClick={() => handleCart(item.product.productID)}>
                    <img src={cart} className="w-4 md:w-5 h-4 md:h-5 mx-1" />
                    ADD
                  </button> */}
                  <button
                    className={`text-sm md:text-lg font-semibold text-white ${item.product.amountInStock > 0 ? 'bg-blue-900' : 'bg-gray-300 cursor-not-allowed'
                      } w-28 md:w-36 h-9 flex justify-center items-center rounded-full`}
                    onClick={() => {
                      if (item.product.amountInStock > 0) handleCart(item.product.productID);
                    }}
                    disabled={item.product.amountInStock === 0}
                  >
                    <img src={cart} className="w-4 md:w-5 h-4 md:h-5 mx-1" />
                    ADD
                  </button>
                  <div className="flex items-center justify-between my-4">
                    <Tooltip title="Share" placement="top">
                      <img src={share} className="w-5 md:w-6 mx-2 md:mx-3 cursor-pointer" onClick={handleSharePopupToggle} />
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <img src={deleteicon} onClick={() => handleremove(item.wishListId)} className="w-4 md:w-5 cursor-pointer" />
                    </Tooltip>
                  </div>
                  {/* <p onClick={handlePopupToggle} className="hover:text-red-400 cursor-pointer hover:underline font-semibold text-sm md:text-lg text-blue-900">
                    Add comment, quantity & priority
                  </p> */}
                  {showPopup && (
                     <div className="flex flex-col justify-center items-center h-full absolute inset-0 bg-transparent z-auto">
                     <div className="border w-3/4 md:w-[40%] lg:w-[36%] md:ml-20 rounded-lg bg-gray-100">
                       <div className="flex justify-between items-center bg-blue-900 border-b p-2">
                         <p className="font-bold text-sm md:text-base md:flex-wrap text-white">Add comment, quantity, priority</p>
                         <img src={cross} className="hover:text-red-500 w-3 cursor-pointer" onClick={handlePopupToggle} />
                       </div>
                       <div className="flex justify-evenly  my-2">
                         <img className="h-24 md:h-24 w-16 md:w-16 md:mt-5 md:ml-10 rounded-lg" src={item.src} alt={item.id} />
                         <div className="flex flex-col justify-end">
                           <label className="font-semibold text-sm md:text-base">Comment</label>
                           <textarea placeholder="Enter comments" className="border text-center h-24 md:h-28 w-40 md:w-40 rounded-md flex justify-start items-start" />
                         </div>
                       </div>
                       <div className="flex justify-end">
                         <div className="flex flex-col md:ml-5">
                           <span className="font-semibold text-sm md:text-sm md:ml-10">Priority:</span>
                           <select className="p-1  md:ml-10 border rounded-md text-xs md:text-sm">
                             <option>Lowest</option>
                             <option>Low</option>
                             <option>Medium</option>
                             <option>High</option>
                             <option>Highest</option>
                           </select>
                         </div>
                         <div className="flex flex-col mx-2 md:mx-4">
                           <span className="font-semibold text-sm md:text-base">Needs</span>
                           <input className="border rounded-md w-16 md:w-16 p-1  text-xs md:text-sm" />
                         </div>
                         <div className="flex flex-col mx-2 md:mx-4">
                           <span className="font-semibold text-sm md:text-base">Has:</span>
                           <input className="border rounded-md w-16 md:w-16 p-1 text-xs md:text-sm" />
                         </div>
                       </div>
                       <div className="flex justify-end my-4 md:my-6">
                         <button className="border p-1 md:p-2 rounded-md hover:bg-red-500 hover:text-white" onClick={handlePopupToggle}>
                           Cancel
                         </button>
                         <button className="border p-1 md:p-2 rounded-md mx-2 md:mx-4 w-12 md:w-16 bg-blue-900 text-white">
                           Save
                         </button>
                       </div>
                     </div>
                   </div>
                  )}
                  <div className="flex items-center mt-4">
                    <span style={{ fontSize: '20px', color: 'orange' }}>★</span>
                    <span style={{ fontSize: '20px', color: 'orange' }}>★</span>
                    <span style={{ fontSize: '20px', color: 'orange' }}>☆</span>
                    <span style={{ fontSize: '20px', color: 'orange' }}>☆</span>
                    <span style={{ fontSize: '20px', color: 'orange' }}>☆</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (
          <div className="flex flex-col items-center justify-center m-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your wishlist is currently empty.
            </h2>
            <Link to="/allProducts" className="mt-5 px-8 py-3 font-bold text-white text-xl bg-blue-900 border-2 rounded-full">
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;





