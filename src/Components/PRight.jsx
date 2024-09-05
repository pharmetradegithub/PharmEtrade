import React, { useState } from "react";
import { Link } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import other from "../assets/other.png";
// import other from "../assets/compare1_Icon.png";
import addcart from "../assets/cartw_icon.png";
import fav from "../assets/Wishlist1_icon.png";
import nature from "../assets/img1.png";
import Items from "../Components/Items";
import next from "../assets/Next_icon.png";
// import next from "../assets/Icons/Next_icon.png"
// import previous from "../assets/Icons/Previous_icon.png"
import previous from "../assets/Previous_icon.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../assets/search-icon.png";
import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../assets/Wishlist1_icon.png";
import filledHeart from "../assets/wishlist2_icon.png";
import other from "../assets/CompareNav2.png";
import { useSelector } from "react-redux";
import { addCartApi } from "../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../Api/WishList";

function PRight({ Title, topMargin, addCart, wishList }) {
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.Products);
  const user = useSelector((state)=>state.user.user);
  const wishlist = useSelector((state)=>state.wishlist.wishlist);
  const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };
  const images = Array(115).fill(nature);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };

  const handleCart = async (productID) => {
    if (user == null) {
      console.log("login to add");
      return;
    }
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    try {
      await addCartApi(cartData);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleClick = async (productID) => {
    if(wishlistProductIDs.includes(productID))
    {
      setwishlistProductIDs(wishlistProductIDs.filter(id => id !== productID));
      await removeFromWishlistApi(getWishlistIdByProductID(productID))
    }
    else{
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1
      }
      await addToWishlistApi(wishListData);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

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
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
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

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  return (
    <div className="w-full mt-4 h-full overflow-y-scroll">
      <div className=" flex justify-between bg-blue-900 p-1 rounded-lg">
        <div className="text-2xl text-white">
          {Title ? Title : "All Products"}
        </div>

        <Search>
          <SearchIconWrapper>
            <img src={search} className="w-4" />
            {/* <SearchIcon /> */}
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>

      <div className="w-[95%]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          {products.map((item, index) => (
            <div
              key={item.productID}
              className="w-full max-w-md border p-2  shadow-md"
            >
              {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
              <div className="flex justify-center bg-slate-200 relative">
                <img
                  onClick={() => handleClick(item.productID)}
                  src={wishlistProductIDs.includes(item.productID)? filledHeart : emptyHeart}
                  className="h-8 p-[6px]  absolute right-0 "
                  alt="Favorite Icon"
                />
                <img
                  src={other}
                  className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
                  alt="Other Icon"
                />

                <Link to={`/detailspage/${item.productID}`}>
                  <img
                    src={item.imageUrl}
                    alt={`nature-${index + indexOfFirstItem}`}
                    className="h-40 w-28 rounded-lg"
                  />
                </Link>
              </div>
              {/* </Link> */}
              <div className="w-full py-1">
                <h2 className="text-fonts h-12">{item.productName}</h2>
                <h1 className="text-fonts font-semibold">${item.priceName}</h1>
              </div>
              <div>
                {Array.from({ length: totalStars }, (v, i) => (
                  <Star
                    key={i}
                    filled={i < rating}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
              <div className="flex flex-row items-center justify-between w-full px-1">
                <div className="text-foot text-xs">UPN Member Price:</div>
                <div className="text-base font-semibold">${item.salePrice}</div>
              </div>
              <div
                className="flex bg-blue-900 p-1 rounded-md justify-center"
                onClick={() => handleCart(item.productID)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div>
              {/*<ul className="flex flex-row justify-around border bg-gray-100 border-gray-300 shadow-md rounded-xl  py-2">
              <li>
                <img
                  src={addcart}
                  alt="Add to cart"
                  className="h-8 p-[6px]"
                  onClick={() => handleCart(index + indexOfFirstItem)}
                />
              </li>

               <li>
                <img
                  src={fav}
                  alt="Favorite"
                  className="h-8 p-[6px]"
                  onClick={() => handleClick(index + indexOfFirstItem)}
                />
              </li>
              <li>
                <img src={other} alt="Other" className="h-8 p-[6px]" />
              </li>
            </ul>*/}
              {pop && <Items topMargin={topMargin} onClose={handleClose} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" />
        </button>
        <span className="mx-2 px-4 flex items-center  bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" />
        </button>
      </div>
    </div>
  );
}

export default PRight;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import { useNavbarContext } from "./NavbarContext";

// import other from "../assets/compare1_Icon.png";
// import addcart from "../assets/cartw_icon.png";
// import emptyHeart from "../assets/Wishlist1_icon.png";
// import filledHeart from "../assets/wishlist2_icon.png";
// import Expicon from "../assets/Expicon.png";
// import search from "../assets/search1.png";
// import nature from "../assets/img1.png";

// function PRight({ topMargin, addCart, wishList }) {
//   const { pop, setPop } = useNavbarContext();
//   const navigate = useNavigate();
//   const images = Array(115).fill(nature);
//   const itemsPerPage = 12;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favoriteItems, setFavoriteItems] = useState({});
//   const [quantities, setQuantities] = useState([]);
//   const [ProductsList, setProductsList] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetAll"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         if (Array.isArray(data.result)) {
//           setProductsList(data.result);
//           setQuantities(data.result.map(() => 1)); // Set initial quantity to 1 for all products
//         } else {
//           setProductsList([]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCart = (index) => {
//     const product = ProductsList[index];
//     const prolist = {
//       id: index,
//       src: product.imageUrl,
//       price: product.price,
//       rate: product.package,
//       quantity: quantities[index], // Include selected quantity
//     };
//     addCart(prolist);
//   };

//   const handleClick = (index) => {
//     setFavoriteItems((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//     const product = ProductsList[index];
//     const prolist = {
//       id: index,
//       src: product.imageUrl,
//       price: product.price,
//       rate: product.package,
//     };
//     wishList(prolist);
//   };

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = newQuantity;
//     setQuantities(updatedQuantities);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = ProductsList.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(ProductsList.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "black",
//     border: "1px solid gray",
//     borderRadius: "5px",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   return (
//     <div className="w-full mt-4 h-full overflow-y-scroll">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
//         <div className="flex">
//           <div className="flex gap-1">
//             <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
//               <option>Discounted Price Low to High</option>
//               <option>Discounted Price High to Low</option>
//               <option>Posted date : Old to Latest</option>
//               <option>Show Prescription Products First</option>
//               <option>Show OTC Products First</option>
//               <option>Discount Percentage Low to High</option>
//               <option>Discounted Percentage High to Low</option>
//               <option>Expiry date : Short to Long</option>
//               <option>Expiry date : Long to Short</option>
//               <option>Name : Ascending (A-Z)</option>
//               <option>Name : Decending (Z-A)</option>
//               <option>Strength Low to High</option>
//               <option>Strength High to Low</option>
//             </select>
//           </div>
//           <div>
//             <Search>
//               <SearchIconWrapper>
//                 <img src={search} className="w-6" />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </div>
//         </div>
//       </div>

//       <div className="w-[95%] mt-5">
//         <div>
//           <div className="flex flex-col">
//             <div className="flex flex-col justify-between">
//               {ProductsList.length > 0 ? (
//                 ProductsList.map((product, index) => (
//                   <div
//                     key={index}
//                     className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4">
//                     <div className="flex flex-col mx-2">
//                       <img
//                         src={product.imageUrl}
//                         className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
//                         alt="Product"
//                         onClick={() => navigate(`/detailspage/${index}`)}
//                       />
//                     </div>

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Item Details</p>
//                       <div className="mt-2">
//                         <p className="font-semibold">{product.productName}</p>
//                         <p className="text-xs mt-1">
//                           {product.productDescription}
//                         </p>
//                         <div className="flex w-full mt-1 gap-1">
//                           <img src={Expicon} className="w-6 h-6" />
//                           <div className="flex flex-col ">
//                             <p>Exp.Date :</p>
//                             <p className="font-semibold">
//                               {product.expiryDate}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Package Details</p>
//                       <div className="mt-2">
//                         <p className=" text-red-500 font-semibold">
//                           {product.package}
//                         </p>
//                         <p className="text-base mt-1">{product.packCondition}</p>
//                       </div>
//                     </div>

//                     {/* <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Price</p>
//                       <div className="mt-2">
//                         <p className="text-red-500 font-semibold">
//                           ${product.price}
//                         </p>
//                       </div>
//                     </div> */}

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Unit Price</p>
//                       <div className="mt-2">
//                         <p className="text-red-500 font-semibold">
//                           ${product.unitPrice}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex flex-col mx-3">
//                       <p className="font-semibold">Quantity</p>
//                       <div className="mt-2 flex">
//                         <input
//                           type="number"
//                           value={quantities[index]}
//                           onChange={(e) =>
//                             handleQuantityChange(
//                               index,
//                               parseInt(e.target.value)
//                             )
//                           }
//                           className="w-16 border rounded-md text-center"
//                           min="1"
//                         />
//                       </div>
//                     </div>

//                     {/* Wishlist */}
//                     <div className="flex flex-col items-center justify-between ">
//                       {/* <div className="flex flex-col "> */}
//                         {/* <p className="font-semibold">Wishlist</p> */}
//                         <div className="mt-2">
//                           <img
//                             src={
//                               favoriteItems[index] ? filledHeart : emptyHeart
//                             }
//                             className="w-6 h-6 cursor-pointer"
//                             onClick={() => handleClick(index)}
//                             alt="Wishlist Icon"
//                           />
//                         {/* </div> */}
//                       </div>

//                       {/* Add to Cart */}
//                       <div className="flex text-white h-[40px] px-2 rounded-lg bg-blue-900 mx-3 justify-center items-center">
//                       <div className="mr-1">
//                           <img
//                             src={addcart}
//                             className="w-6 h-6  cursor-pointer"
//                             onClick={() => handleCart(index)}
//                             alt="Add to Cart Icon"
//                           />
//                         </div>
//                          <p className="font-semibold ">Add </p>

//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No products available</p>
//               )}
//             </div>

//             <div className="flex justify-center mt-4">
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PRight;
