

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
import { useNavbarContext } from "../../NavbarContext";
import { addCartApi } from "../../../Api/CartApi";
import Expicon from "../../../assets/Expicon.png";

const LayoutOtcProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const images = Array(115).fill(nature);
  const [showMore, setShowMore] = useState({});
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();

  const OTCProducts = useSelector((state) => state.product.otcProducts);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
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
  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
  const handleProductDetails = (productID, product) => {
    navigate(`/detailspage/${productID}`);
  };
  return (
    <>
      <div className="w-[95%]  ml-4 mt-4 overflow-y-scroll">
        <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">OTC Products</h1>
        <div className="flex gap-1">
            <select className="bg-white  w-auto h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
              <option> Filter Products</option>

              <option>Product  Ascending (A-Z)</option>
              <option>Product  Decending (Z-A)</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
          </div>
        <div className="flex flex-col justify-between mt-5">
          {OTCProducts.length > 0 ? (
            OTCProducts.map((product, index) => (
              <div
                key={index}
                className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
              >
                <div className="flex flex-col mx-2">
                  <img
                    src={product.productGallery.imageUrl}
                    className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
                    alt="Product"
                    onClick={() =>
                      handleProductDetails(product.productID, product)
                    }
                  />
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Item Details</p>
                  <div className="mt-2">
                    <p className="font-semibold">{product.productName}</p>

                    <p className="text-xs mt-1 w-60">
                      {showMore[index]
                        ? product.productDescription
                        : `${product.productDescription.slice(0, 50)}...`}
                      {product.productDescription.length > 50 && (
                        <button
                          className="text-blue-500 ml-1"
                          onClick={() => toggleShowMore(index)}
                        >
                          {showMore[index] ? "See Less" : " More details"}
                        </button>
                      )}
                    </p>
                    <div className="flex w-full mt-1 gap-1">
                      <img src={Expicon} className="w-6 h-6" />
                      <div className="flex ">
                        <p>Exp.Date :</p>
                        <p className="font-semibold">
                          {/* {product.expiryDate} */}
                          {new Date(product.expiryDate).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-')}
                          </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Package Details</p>
                  <div className="mt-2">
                    <p className="text-red-500 font-semibold">
                      {product.package}
                    </p>
                    <p className="text-base mt-1">{product.packCondition}</p>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Unit Price</p>
                  <div className="mt-2">
                    <p className="font-semibold">${product.salePrice?.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Quantity</p>
                  <div className="mt-2 flex">
                    <input
                      type="number"
                      disabled={
                        cart.some(
                          (item) => item.product.productID == product.productID
                        ) === 1
                      }
                      value={
                        product.CartQuantity
                        // cart.some(
                        //     (item) =>
                        //         item.product.productID === product.productID
                        //   )
                        //     ? cart.find(
                        //         (item) =>
                        //             item.product.productID === product.productID
                        //       ).quantity
                        //       : product.CartQuantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="w-16 border rounded-md text-center"
                      min="1"
                    />
                  </div>
                </div>

                {/* Wishlist */}
                <div className="flex flex-col items-center justify-between">
                  <div className="mt-2">
                    <img
                      src={
                        wishlistProductIDs.includes(product.productID)
                          ? filledHeart
                          : emptyHeart
                      }
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleClick(product.productID)}
                      alt="Wishlist Icon"
                    />
                  </div>

                  {/* Add to Cart */}
                  {/* {cart.some(
                        (item) => item.product.productID == product.productID
                      ) == 0 ? ( */}
                  <div
                    onClick={() =>
                      handleCart(product.productID, product.CartQuantity)
                    }
                    className="flex text-white h-[40px] cursor-pointer px-2 rounded-lg bg-blue-900 mx-3 justify-center items-center"
                  >
                    <div className="mr-1">
                      <img
                        src={addcart}
                        className="w-6 h-6 cursor-pointer"
                        alt="Add to Cart Icon"
                      />
                    </div>
                    <p className="font-semibold">{"Add to Cart"}</p>
                  </div>
                  {/* ) : ( */}
                  {/* <div className="flex text-white cursor-pointer h-[40px] px-2 rounded-lg bg-sky-600 mx-3 justify-center items-center">
                          <div className="mr-1">
                            <img
                              src={addcart}
                              className="w-6 h-6 "
                              alt="Add to Cart Icon"
                            />
                          </div>
                          <p className="font-semibold">{"Added Cart"}</p>
                        </div> */}
                  {/* )} */}
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      {/* <div className="flex justify-end my-2">
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
      </div> */}
    </>
  );
};

export default LayoutOtcProducts;
