import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Pagination from "../../Pagination";
import { useNavbarContext } from "../../NavbarContext";
import Notification from "../../../Components/Notification"; // Import Notification component
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import other from "../../../assets/compare1_Icon.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import Expicon from "../../../assets/Expicon.png";
import search from "../../../assets/search1.png";
import nature from "../../../assets/img1.png";
import { useSelector } from "react-redux";
import Whatsapp from "../../../assets/Icons/Whatsapp.png";
import twitter from "../../../assets/twitter_icon.png";
import Facebook from "../../../assets/facebook1.png";
import Pintrist from "../../../assets/pinterest.png";
import email from "../../../assets/envelope.png";
import wrong from "../../../assets/wrong.png";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import share from "../../../assets/Icons/shareupload.png";
import { Tooltip } from "@mui/material";
function LayoutBuy({
  topMargin,
  addCart,
  wishList,
  quantities,
  setQuantities,
}) {
  const [stockWarning, setStockWarning] = useState({
    productId: null,
    message: "",
  });
  const navigate = useNavigate();
  const [productLink, setProductLink] = useState("");
  const [currentProductID, setCurrentProductID] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState({});
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  console.log("cart--->", cart);
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find(
      (item) => item.product.productID === productID
    );
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(
        wishlist.map((wishItem) => wishItem.product.productID)
      );
    }
  }, [wishlist]);

  // const [wishlistProductIDs, setwishlistProductIDs] = useState(
  //   wishlist.map((wishItem) => wishItem.product.productID)
  // );
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find(
  //     (item) => item.product.productID === productID
  //   );
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };
  const products = useSelector((state) => state.product.Products);
  const [productList, setproductList] = useState(products);
  const [sortOption, setSortOption] = useState(""); // State for sorting
  const sortProducts = (products, sortOption) => {
    if (sortOption === "Product Ascending (A-Z)") {
      return products.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    }
    if (sortOption === "Product Decending (Z-A)") {
      return products.sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }
    if (sortOption === "Price Low to High") {
      return products.sort((a, b) => a.unitPrice - b.unitPrice);
    }
    if (sortOption === "Price High to Low") {
      return products.sort((a, b) => b.unitPrice - a.unitPrice);
    }
    return products; // Return the original array if no sorting option is selected
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption); // Set the selected sort option
    const sortedProducts = sortProducts([...productList], selectedOption); // Sort products
    setproductList(sortedProducts); // Update the product list with sorted products
  };

  console.log("layoutproduct-->", productList);
  useEffect(() => {
    if (products) {
      const updatedProducts = products.map((product) => ({
        ...product,
        CartQuantity: 1, // Set initial quantity to 1 for all products
      }));
      setproductList(updatedProducts);
    }
  }, [products]);

  const handleCart = async (productID, Quantity) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: Quantity,
      isActive: 1,
    };

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
  // const handleClick = async (index) => {
  //   setFavoriteItems(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));

  //   const jsondata = {
  //     wishListId: "0",
  //     productID: productList[index].productID,
  //     customerId: customerId,
  //     isActive: 1
  //   };

  //   try {
  //     const response = await fetch(
  //       'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/Add',
  //       {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(jsondata),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
  //       );
  //     }

  //     const result = await response.json();
  //     fetchWishListData();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const handleQuantityChange = (index, newQuantity) => {
    // if (newQuantity) {
    const quantity = Math.max(1, newQuantity);
    setcurrentItems((prev) => {
      const updatedList = [...prev];
      updatedList[index] = {
        ...updatedList[index],
        minOrderQuantity: quantity,
      };
      return updatedList;
    });
    // }
  };

  // new share 25/10/2024

  // to navigate
  const handleProductDetails1 = (productID, product) => {
    navigate(`/detailspage/${productID}`);
  };

  // Function to handle sharing
  const handleProductDetailsShare = (productID) => {
    setCurrentProductID(productID); // Store the productID in state
    const productURL = `/detailspage/${productID}`;
    setProductLink(window.location.origin + productURL); // Store the complete URL
  };

  // Function to handle sharing
  const handleShare = (productID) => {
    handleProductDetailsShare(productID); // Ensure the product details are set

    const productLink = window.location.origin + `/detailspage/${productID}`;

    if (navigator.share) {
      navigator
        .share({
          title: "Check out this product!",
          url: productLink,
        })
        .then(() => console.log("Successful share!"))
        .catch((error) => {
          console.log("Error sharing", error);
          // Fallback to copying the link to clipboard
          navigator.clipboard.writeText(productLink).then(() => {
            alert("Link copied to clipboard");
          });
        });
    } else {
      // Fallback to copying the link to clipboard if sharing is not supported
      navigator.clipboard
        .writeText(productLink)
        .then(() => {
          alert("Link copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
    }
  };
  // const handleProductDetailsShare = (productID) => {
  //   setCurrentProductID(productID); // Store the productID in state
  //   const productURL = `/detailspage/${productID}`;
  //   setProductLink(window.location.origin + productURL); // Store the complete URL
  // };

  // const handleProductDetails1 = (productID, product) => {
  //   navigate(`/detailspage/${productID}`);
  // };

  // const handleShare = (productID) => {
  //   handleProductDetailsShare(productID); // Ensure the product details are set

  //   if (navigator.share) {
  //     navigator
  //       .share({
  //         title: "Check out this product!",
  //         url: window.location.origin + `/detailspage/${productID}`, // Construct the shareable URL
  //       })
  //       .then(() => console.log("Successful share!"))
  //       .catch((error) => console.log("Error sharing", error));
  //   } else {
  //     alert("Sharing is not supported in this browser.");
  //   }
  // };

  const [isShowPopup, setIsShowPopup] = useState(false);
  // const handleSharePopupToggle = (event, product) => {
  //   const { top } = event.currentTarget.getBoundingClientRect();
  //   setPopupPosition({ top }); // Adjusting the left position to be next to the button
  //   setIsShowPopup(!isShowPopup);
  //   handleShare()
  //   // handleProductDetails(product.productID, product);
  // };

  // const [isShowPopup, setIsShowPopup] = useState(false);

  // const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const [currentItems, setcurrentItems] = useState(
    // productList.slice(indexOfFirstItem, indexOfLastItem)
        productList.slice(0, itemsPerPage)

         )

  
  useEffect(() => {
    if (productList) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setcurrentItems(productList.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage,  productList,itemsPerPage]);
  const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);

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
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  console.log("searching:", location.href);
  // console.log("productlink", productURL);

  return (
    <div className="w-[95%] mt-4 ml-4 h-full overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}

      <div className="flex md:flex-row justify-between flex-col gap-2">
        <h1 className="lg:text-2xl text-2xl font-semibold text-blue-900">
          Buy Products
        </h1>
        <div className="flex">
          <div className="flex gap-1">
            <select
              onChange={handleSortChange}
              className="bg-white w-auto h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center"
            >
              <option>Filter Products</option>
              <option>Product Ascending (A-Z)</option>
              <option>Product Decending (Z-A)</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <div>
          <div className="flex flex-col ">
            <div className="flex flex-col justify-between ">
              {/* {productList.length} */}
              {productList.length > 0 ? (
                currentItems.map((product, index) => (
                  <div
                    key={index}
                    className="flex sm:p-4  p-2 flex-col  lg:flex-row md:flex-row h-auto  border w-60 md:w-auto justify-around shadow-lg rounded-md mb-4"
                  >
                    <div className="flex sm:flex-col flex-col mr-1">
                      <img
                        src={product.productGallery.imageUrl}
                        className="w-32  p-2 hover:cursor-pointer rounded-lg h-28  bg-slate-200"
                        alt="Product"
                        onClick={() =>
                          handleProductDetails1(product.productID, product)
                        }
                      />
                      <p className="  text-[15px] mt-2 text-black ">
                        {product.productCategory.categoryName}
                      </p>

                      <div>
                        <div className="flex  sm:justify-center  ">
                          <div className="mt-2 ">
                            <Tooltip title="Wishlist" placement="top">
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
                            </Tooltip>
                          </div>
                          <div className="relative inline-block mt-2">
                            <Tooltip title="Share" placement="right">
                              <img
                                src={share}
                                className="w-6 mx-3 "
                                onClick={() => handleShare(product.productID)}
                              />
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[170px] ">
                      <p className="font-semibold text-sm">Item Details</p>
                      <div className="mt-2">
                        <p className="font-bold text-blue-900  sm:w-32 w-full text-sm">
                          {product.productName}
                        </p>

                        <p className="text-xs mt-1 sm:w-32 w-full">
                          {showMore[index]
                            ? product.aboutTheProduct
                            : `${product.aboutTheProduct.slice(0, 50)}...`}
                          {product.aboutTheProduct.length > 50 && (
                            <button
                              className="text-blue-500 ml-1"
                              onClick={() => toggleShowMore(index)}
                            >
                              {showMore[index] ? "See Less" : " More details"}
                            </button>
                          )}
                        </p>
                        <div className="flex w-full mt-1 gap-1">
                          <img src={Expicon} className="w-5 h-5" />
                          <div className="flex ">
                            <p className=" text-xs font-semibold">Exp.Date :</p>
                            <p className="font-bold text-xs">
                              {/* {product.expiryDate} */}
                              &nbsp;{" "}
                              {new Date(product.expiryDate)
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/\//g, "-")}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <p className="mt-1 text-sm">Product Returnable: </p>
                          <p className="font-semibold ml-1">
                            {product.isReturnable ? "Yes" : "No"}
                          </p>
                        </div>
                        <div className="flex">
                          <h2 className="  text-sm mr-1">Package Details :</h2>

                          <p className=" text-sm font-semibold">
                            {product.packCondition}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex flex-col mx-3">
                      <p className="font-semibold">Package Details</p>
                      <div className="mt-2">
                        <p className="text-red-500 font-semibold">
                          {product.package}
                        </p>
                        <p className="text-base mt-1">
                          {product.packCondition}
                        </p>
                      </div>
                    </div> */}
                    <div className="flex flex-col  justify-between">
                      {/* <div className=" mx-2">
                        <h2 className="font-semibold  text-sm">Package Details</h2>
                        <p className=" mt-1 text-sm">
                          {product.packCondition}
                        </p>
                      </div> */}
                      <div className="flex flex-row sm:flex-col gap-2 sm:mx-3 mx-0">
                        <p className="font-semibold   text-sm sm:mt-0 mt-1">
                          Unit Price
                        </p>
                        <div className="sm:mt-1 mt-0 text-right text-xs font-bold">
                          <p className="font-semibold mt-1 text-sm ">
                            ${product.unitPrice?.toFixed(2)}
                          </p>
                        </div>
                        <p className="font-semibold">Taxable: {product.taxable ? 'Yes' : 'No'}</p>
                      <p className="font-semibold">Shipping: {product.shippingCostApplicable ? 'Yes':'No'}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col flex-row sm:justify-between justify-start gap-2 sm:mx-3 mx-0">
                      <div>
                        <p className="font-semibold  text-sm sm:mt-0">
                          UPN Member Price
                        </p>
                        <div className="sm:mt-3 m-0 sm:text-right text-left text-xs font-bold">
                          <p className="font-semiboldm sm:-ml-5 m:0 text-sm">
                            ${product.upnMemberPrice?.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col    gap-2 flex-row sm:mx-3 mx-0">
                      <p className="font-semibold text-sm">Sale Price</p>
                      <div className="sm:mt-2 mt-0 sm:text-right text-left text-xs font-bold  ">
                        <p className="font-semibold text-sm ">
                          ${product.salePrice?.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col flex-col sm:mx-4 mx-0">
                      <p className="font-semibold text-sm">Sale Price Range</p>
                      <div className="mt-2 sm:text-right text-left text-xs font-bold ">
                        <div className="flex sm:flex-col">
                          <p className="font-semibold ml-1">
                            {new Date(product.salePriceValidFrom)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              })
                              .replace(/\//g, "-")}
                          </p>{" "}
                          <p className="text-center sm:ml-8 ml-2">to </p>
                          <p className="ml-1">
                            {new Date(product.salePriceValidTo)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              })
                              .replace(/\//g, "-")}
                          </p>
                        </div>

                        <div className="flex"></div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col flex-col sm:mx-3 mx-0">
                      <p className="font-semibold sm:ml-4 m-0">Quantity</p>
                      <div className="mt-2 flex ">
                        <button
                          className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
                          onClick={() => {
                            const newQuantity = Math.max(
                              1,
                              product.minOrderQuantity - 1
                            );

                            // Clear stock warning if the new quantity is within the stock
                            if (newQuantity <= product.amountInStock) {
                              setStockWarning({ productId: null, message: "" });
                            }

                            handleQuantityChange(index, newQuantity);
                          }}
                          // disabled={
                          //   product.CartQuantity <= 1 ||
                          //   product.amountInStock <= 0
                          // }
                        >
                          -
                        </button>

                        <input
                          type="text"
                          // value={product.CartQuantity}
                          value={
                            product.amountInStock === 0
                              ? 0
                              : product.minOrderQuantity
                          }
                          // value={product.amountInStock === 0 ? 0 : product.CartQuantity || product.minOrderQuantity}
                          className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
                          onChange={(e) => {
                            const value = e.target.value;
                            const numericValue =
                              value === ""
                                ? ""
                                : Math.max(1, parseInt(value, 10));
                            // Check if the input value exceeds the stock
                            if (numericValue > product.amountInStock) {
                              setStockWarning({
                                productId: product.productID,
                                message: `Only ${product.amountInStock} items available.`,
                              });
                            } else {
                              // Clear stock warning if the input is valid
                              setStockWarning({ productId: null, message: "" });
                            }

                            handleQuantityChange(index, numericValue);
                          }}
                        />

                        <button
                          className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
                          onClick={() => {
                            const newQuantity = product.minOrderQuantity + 1;

                            // Check if quantity exceeds stock
                            if (newQuantity > product.amountInStock) {
                              setStockWarning({
                                productId: product.productID,
                                message: `Only ${product.amountInStock} items available in stock.`,
                              });
                            } else {
                              handleQuantityChange(index, newQuantity);
                              setStockWarning({ productId: null, message: "" }); // Clear warning if within stock
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                      {stockWarning.productId === product.productID && (
                        <p className="text-red-500 text-sm mt-2">
                          {stockWarning.message}
                        </p>
                      )}
                      <div className="text-sm sm:mt-2 mt-4">
                        {product.amountInStock <= 0 ? (
                          <p className="text-red-500 font-semibold">
                            Out Of Stock
                          </p>
                        ) : (
                          <p className="text-white p-1 sm:w-28 w-40 text-center text-xs bg-green-600 rounded-lg ">
                            Stock Available{" "}
                            <span className="font-semibold text-xs text-center">
                              {product.amountInStock}
                            </span>
                          </p>
                        )}
                      </div>
                      <div
                        onClick={() => {
                          if (product.amountInStock > 0) {
                            if (product.CartQuantity > product.amountInStock) {
                              setStockWarning({
                                productId: product.productID,
                                message: `Only ${product.amountInStock} items available.`,
                              });
                            } else {
                              handleCart(
                                product.productID,
                                product.minOrderQuantity
                              );
                              setStockWarning({ productId: null, message: "" });
                            }
                          }
                        }}
                        className={`flex text-white h-[32px] sm:w-full w-32 sm:px-2 rounded-lg sm:mt-20 mt-4 ml-0 p-0 mx-2 justify-center items-center ${
                          product.amountInStock <= 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-900 cursor-pointer"
                        }`}
                      >
                        <div className="mr-1">
                          <img
                            src={addcart}
                            className={`w-5 h-5 ${
                              product.amountInStock <= 0
                                ? "opacity-50"
                                : "cursor-pointer"
                            }`}
                            alt="Add to Cart Icon"
                          />
                        </div>
                        <p
                          className={`font-semibold text-sm ${
                            product.amountInStock <= 0 ? "opacity-50" : ""
                          }`}
                        >
                          {"Add to Cart"}
                        </p>
                      </div>
                    </div>

                    {/* Wishlist */}
                    <div className="flex flex-col items-center justify-between -mr-6">
                      {isShowPopup && (
                        <div
                          className="flex flex-column  items-center absolute z-auto"
                          style={{
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            transform: "translate(-130%,-45%)",
                            // transform: "translateX(-500%)",
                            // Optional: to position above the button
                          }}
                        >
                          <div className=" rounded-lg bg-gray-100">
                            <div className="flex border-b justify-between p-2 ml-2">
                              <div className="flex items-center">
                                <a
                                  href="mailto:example@example.com"
                                  className="flex items-center"
                                >
                                  <img
                                    src={email}
                                    className="text-blue-400 w-6"
                                  />
                                  <p className="ml-3">Email</p>
                                </a>
                              </div>
                              <img
                                src={wrong}
                                onClick={handleSharePopupToggle}
                                className="w-3 h-3"
                              />
                            </div>
                            {/* Other links... */}
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Pintrist}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Pinterest</p>
                              </a>
                            </div>{" "}
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Whatsapp}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Whatsapp</p>
                              </a>
                            </div>
                            <div className="flex border-b p-2 ml-2">
                              <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <img
                                  src={Facebook}
                                  className="text-blue-400 w-6"
                                />
                                <p className="ml-3">Facebook</p>
                              </a>
                            </div>
                            {/* Additional social links... */}
                          </div>
                        </div>
                      )}

                      {/* Add to Cart */}
                      {/* {cart.some(
                        (item) => item.product.productID == product.productID
                      ) == 0 ? ( */}
                      {/* <div
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
                      </div> */}

                      {/* Display the stock warning message */}
                      {/* {stockWarning.productId === product.productID && (
                        <p className="text-red-500 text-sm mt-2">
                          {stockWarning.message}
                        </p>
                      )} */}

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

            <Pagination
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              productList={productList}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutBuy;
