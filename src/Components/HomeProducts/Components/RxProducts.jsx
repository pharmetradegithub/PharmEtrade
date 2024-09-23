// import React from 'react'

// const RxProducts = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default RxProducts


import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";
import { Link } from 'react-router-dom';
import nature from "../../../assets/img1.png";
import previous from "../../../assets/Previous_icon.png";
import next from "../../../assets/Next_icon.png";
import addcart from "../../../assets/cartw_icon.png";
import { useNavbarContext } from "../../NavbarContext";
import { addCartApi } from "../../../Api/CartApi";




const RxProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const images = Array(115).fill(nature);
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const { pop, setPop } = useNavbarContext();


  const RXProducts = useSelector((state) => state.product.rxProducts);
   const user = useSelector((state)=>state.user.user);
  const wishlist = useSelector((state)=>state.wishlist.wishlist);
  const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

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

  return (
    <div>
      <div className="w-[95%]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          {RXProducts.map((item, index) => (
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
                    src={item.mainImageUrl}
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
                <div className="text-base font-semibold">${item.salePrice?.toFixed(2)}</div>
              </div>
              <div
                className="flex bg-blue-900 p-1 rounded-md justify-center"
                onClick={() => handleCart(item.productID)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div>
            
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
  )
}

export default RxProducts
