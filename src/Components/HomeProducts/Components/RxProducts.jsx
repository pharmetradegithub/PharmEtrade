// import React from 'react'

// const RxProducts = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default RxProducts

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";
import { Link, useNavigate } from "react-router-dom";
import nature from "../../../assets/img1.png";
import previous from "../../../assets/Previous_icon.png";
import next from "../../../assets/Next_icon.png";
import addcart from "../../../assets/cartw_icon.png";
import Notification from "../../../Components/Notification"; // Import Notification component

import { useNavbarContext } from "../../NavbarContext";
import { addCartApi } from "../../../Api/CartApi";
import Pagination from "../../Pagination";

const RxProducts = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const images = Array(115).fill(nature);
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();

  const RXProducts = useSelector((state) => state.product.rxProducts);
  const user = useSelector((state) => state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [wishlistProductIDs, setwishlistProductIDs] = useState(
    wishlist.map((wishItem) => wishItem.product.productID)
  );
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find(
      (item) => item.product.productID === productID
    );
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
    if (user == null) {
      navigate("/login")
      return;
    }
    if (wishlistProductIDs.includes(productID)) {
      setwishlistProductIDs(
        wishlistProductIDs.filter((id) => id !== productID)
      );
      await removeFromWishlistApi(getWishlistIdByProductID(productID));
    } else {
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };

  const handleCart = async (productID) => {
    if (user == null) {
      navigate("/login");
      console.log("login to add");
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = RXProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((RXProducts?.length || 0) / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to page 1 when items per page is changed
  };

  return (
    <div>
      <div className="w-full mt-2">
        {notification.show && (
          <Notification
            show={notification.show}
            message={notification.message}
          />
        )}
        <div className="text-xl bg-blue-900 flex items-center p-1 rounded-lg text-white mt-10 md:mt-0">
          <div>RX PRODUCTS</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-4 mt-8">
          {currentItems.map((item, index) => (
            <div
              key={item.productID}
              className="w-full max-w-md border p-2  shadow-md"
            >
              {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
              <div className="flex justify-center bg-slate-200 relative">
                <img
                  onClick={() => handleClick(item.productID)}
                  src={
                    wishlistProductIDs.includes(item.productID)
                      ? filledHeart
                      : emptyHeart
                  }
                  className=" h-7 sm:h-8 p-[6px]  absolute right-0 "
                  alt="Favorite Icon"
                />
                <img
                  src={other}
                  className="sm:h-5 sm:w-5 h-4 w-4 right-1 absolute bottom-1 text-green-700"
                  alt="Other Icon"
                />

                <Link to={`/detailspage/${item.productID}`}>
                  <img
                    src={item.mainImageUrl}
                    alt={`nature-${index + indexOfFirstItem}`}
                    className=" h-32 w-24 sm:h-40 sm:w-28 lg:h-48 lg:w-36 rounded-lg"
                  />
                </Link>
              </div>
              {/* </Link> */}
              {/* <div className="w-full py-1">
                <h2 className="text-fonts h-12">{item.productName}</h2>
                <h1 className="text-fonts font-semibold">${item?.unitPrice?.toFixed(2)}</h1>
              </div> */}
              <div className="w-full py-1">
                {/* <h2 className="text-fonts h-12  text-sm sm:text-base">{item.productName}</h2> */}
                <h2 className="text-fonts h-12  text-sm sm:text-base " title={item.productName} >
                  {showMore[index]
                    ? item.productName
                    : `${item.productName.slice(0, 15)}`}
                  {item.productName.length > 15 && (
                    <button
                      className="text-blue-500 ml-1"
                      onClick={() => toggleShowMore(index)}
                    >
                      {showMore[index] ? "See Less" : " ..."}
                    </button>
                  )}
                </h2>
                {new Date() >= new Date(item?.salePriceValidFrom) &&
                  new Date() <= new Date(item?.salePriceValidTo) ? (
                  <div className="flex items-center gap-1">
                    <h1 className="text-fonts text-sm sm:text-base  font-semibold">
                      ${item.salePrice?.toFixed(2)}
                    </h1>
                    <span className="text-xs sm:text-sm line-through">
                      (${item.unitPrice?.toFixed(2)})
                    </span>
                  </div>
                ) : (
                  <h1 className="text-fonts text-sm sm:text-base  font-semibold">
                    ${item.unitPrice?.toFixed(2)}
                  </h1>
                )}
              </div>
              {/* <div>
                {Array.from({ length: totalStars }, (v, i) => (
                  <Star
                    key={i}
                    filled={i < rating}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div> */}
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* <div className="flex items-center">
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                  <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                </div> */}
                <div className="flex items-center mobile:items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: "24px",
                        color: "orange",
                      }}
                    >
                      {index < item.productRating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <div className="text-xs sm:text-sm">
                  {item.amountInStock <= 0 ? (
                    <p className="text-red-500 font-semibold">Out Of Stock</p>
                  ) : (
                    <p className="text-green-600 rounded-lg font-semibold ">
                      In Stock - {item.amountInStock}
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="flex flex-col md:flex-row justify-between items-center">
  <div className="flex items-center mb-2 md:mb-0">
    <span className="text-orange-500 text-lg md:text-xl lg:text-2xl">★</span>
    <span className="text-orange-500 text-lg md:text-xl lg:text-2xl">★</span>
    <span className="text-orange-500 text-lg md:text-xl lg:text-2xl">☆</span>
    <span className="text-orange-500 text-lg md:text-xl lg:text-2xl">☆</span>
    <span className="text-orange-500 text-lg md:text-xl lg:text-2xl">☆</span>
  </div>
  <div className="text-xs sm:text-sm">
    {item.amountInStock <= 0 ? (
      <p className="text-red-500 font-semibold">Out Of Stock</p>
    ) : (
      <p className="text-green-600 rounded-lg font-semibold">
        In Stock - {item.amountInStock}
      </p>
    )}
  </div>
</div> */}

              <div className="flex flex-col md:flex-row items-center justify-between w-full px-1">
                <div className="text-foot text-xs sm:text-sm">UPN Member Price:</div>
                <div className=" text-sm sm:text-base font-semibold">
                  ${item.salePrice?.toFixed(2)}
                </div>
              </div>
              {/* <div
                className="flex bg-blue-900 p-1 cursor-pointer rounded-md justify-center"
                onClick={() => handleCart(item.productID)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div> */}
              <div
                className={`flex p-1 rounded-md justify-center ${item.amountInStock <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-900 cursor-pointer"
                  }`}
                onClick={() => {
                  if (item.amountInStock > 0) {
                    handleCart(item.productID); // Only call handleCart if item is in stock
                  }
                }}
              >
                <img
                  src={addcart}
                  alt="Add to cart"
                  className={`h-6 sm:h-8 p-1 ${item.amountInStock <= 0 ? "opacity-50" : ""
                    }`}
                />
                <button
                  className={`text-white font-semibold ${item.amountInStock <= 0 ? "opacity-50" : ""
                    }`}
                  disabled={item.amountInStock <= 0} // Disable the button when out of stock
                >
                  ADD
                </button>
              </div>

              {pop && <Items topMargin={topMargin} onClose={handleClose} />}
            </div>
          ))}
        </div>
      </div>
      <Pagination
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        productList={RXProducts}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default RxProducts;
