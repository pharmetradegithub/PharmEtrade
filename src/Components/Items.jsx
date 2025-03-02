import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import nature from "../assets/nature.png";
import logo from "../assets/pharmalogo.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import ProductDetails from "./ProductDetails";
import Img2 from "../assets/img2.png";
// import addcart from "../assets/addcart.png";
import addcart from "../assets/cartw_icon.png";
import fav from "../assets/fav.png";
import other from "../assets/other.png";
// import PRight from "./PRight";
import share from "../assets/Icons/shareupload.png";
import wrong from "../assets/Icons/wrongred.png";
import Facebook from "../assets/facebook1.png";
import Pintrist from "../assets/pinterest.png";
import Instagram from "../assets/instagram_icon.png";
import email from "../assets/envelope.png";
import Whatsapp from "../assets/Icons/Whatsapp.png";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import {
  TbSquareRoundedCheckFilled,
  TbSquareRoundedXFilled,
} from "react-icons/tb";
import product from "../assets/Icons/Product_icon.png";
import phone from "../assets/Icons/phone_icon.png";
import report from "../assets/Icons/report_icon.png";
import ScrollToTop from "./ScrollToTop";
// import compare from "../assets/compare_icon.png";
import aproduct from "../assets/aboutproduct_icon.png";
// import wishlist from "../assets/Wishllist_icon.png";
import videoSample from "../assets/Icons/videoSample.mp4";
import offer1 from "../assets/offers_1.png";
import ProductSlider from "./HomePage/Components/ProductSlider";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Wishlist from "../assets/wishlistnav_icon.png";
import filledheart from "../assets/wishlistfilled_icon.png";
import cart from "../assets/CartNav_icon.png";
import compare from "../assets/CompareNav2.png";
import dropdown from "../assets/Down-arrow .png";

import DropUpIcon from "../assets/Icons/dropDownb.png";
import DropDownIcon from "../assets/Icons/dropUpB.png";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCrossSellProductApi,
  fetchProductByIdApi,
  fetchRatingWithProduct,
  fetchRelatedProductApi,
  fetchUpsellProductApi,
} from "../Api/ProductApi";
import { addCartApi } from "../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../Api/WishList";
import { fetchGetOrder, fetchOrderApi, fetchOrderPlace } from "../Api/OrderApi";
import { Tooltip } from "@mui/material";
// import { orderApi, orderGetApi } from "../Api/CustomerOrderList";
// import { customerOrderApi, customerOrderGetApi } from "../Api/CustomerOrderList";
import filledHeart from "../assets/wishlist2_icon.png";
import emptyHeart from "../assets/Wishlist1_icon.png";
import Notification from "./Notification";
function Items({
  onClose,
  topMargin,
  addCart,
  cartItems,
  setCartItems,
  whishlist,
  productList,
  quantities,
}) {
  const { id } = useParams();

  const user = useSelector((state) => state.user.user );
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cartList = useSelector((state) => state.cart.cart);
  const findQuantityByProductId = () => {
    const product = cartList.find((item) => item.product.productID === id);
    return product ? product.quantity : 0; 
  };
  const Cartquantity = findQuantityByProductId();
  const [productLink, setProductLink] = useState("");
  const [currentProductID, setCurrentProductID] = useState("");
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  const addOrder = useSelector((state) => state.order.getOrder);
  const dispatch = useDispatch();

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

  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find(
  //     (item) => item.product.productID === productID
  //   );
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };

  const [img, setimg] = useState(null);
  const images = Array(8).fill(nature);
  const [selectedMl, setSelectedMl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  // const [showViewCart, setShowViewCart] = useState(false);
  const [prod, setprod] = useState(null);
  const [thumnailList, setthumnailList] = useState([]);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const newProducts = useSelector((state) => state.product.recentSoldProducts);

  const RelatedProducts = useSelector((state) => state.product.RelatedProducts);

  const upsellProducts = useSelector((state) => state.product.UpSellProducts);

  const crossSellProducts = useSelector(
    (state) => state.product.CrossSellProducts
  );
  const [quantity, setQuantity] = useState(prod?.minOrderQuantity);

  useEffect(() => {
    const NewProductsAPI = async () => {
      try {
        const product = await fetchProductByIdApi(id);
        setQuantity(product.minOrderQuantity);
        setprod(product);
      } catch (error) {
        console.log(error);
      }
    };
    NewProductsAPI();
  }, [id]);

  // useEffect(() => {
  //   if (prod) {
  //     setimg(prod.productGallery.imageUrl);
  //     setthumnailList([
  //       prod.productGallery.imageUrl,
  //       prod.productGallery?.thumbnail1,
  //       prod.productGallery?.thumbnail2,
  //       prod.productGallery?.thumbnail3,
  //     ]);

  //   }
  // }, [prod]);

  useEffect(() => {
    if (prod && prod.productGallery) {
      // Filter out values that are "null" (string) or any falsy values (null, undefined, or empty)
      const validThumbnails = [
        prod.productGallery.imageUrl,
        prod.productGallery?.thumbnail1,
        prod.productGallery?.thumbnail2,
        prod.productGallery?.thumbnail3,
        prod.productGallery?.thumbnail4,
        prod.productGallery?.thumbnail5,
        prod.productGallery?.thumbnail6,
        prod.productGallery?.videoUrl,
      ].filter((item) => item && item !== "null" && item.trim() !== "");

      setimg(prod.productGallery.imageUrl);
      setthumnailList(validThumbnails);
    }
  }, [prod]);

  useEffect(() => {
    fetchCrossSellProductApi(id);
  }, [id]);

  useEffect(() => {
    fetchRelatedProductApi(id);
  }, [id]);

  useEffect(() => {
    fetchUpsellProductApi(id);
  }, [id]);

  const clearSelection = () => {
    setSelectedMl(null);
    setSelectedColor(null);
  };
  const [Errors, setErrors] = useState({});

  const handleCart = async (index) => {
    if (user == null) {
      return;
    }
    const existingCartItem = cartList.find(
      (item) => item.product.productID === id
    );
    // console.log(
    //   "unna ra babu ",
    //   existingCartItem,
    //   Math.min(prod.maxOrderQuantity, prod.amountInStock)
    // );
    if (
      existingCartItem != null &&
      existingCartItem.quantity + quantity >
      Math.min(prod.maxOrderQuantity, prod.amountInStock)
    ) {
      setErrors({
        quantity: `The maximum quantity allowed to add is ${Math.min(
          prod.maxOrderQuantity,
          prod.amountInStock
        )}.`,
      });
      return;
    }

    const cartData = {
      customerId: user.customerId,
      productId: id,
      quantity: quantity,
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
        productId: id,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };

  const components = {
    div1: (
      <div>
        <button>shell</button>
      </div>
    ),
    div2: (
      <div>
        <button>marble</button>
      </div>
    ),
  };

  let navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    postalCode: "",
  });
  const [isShowPopup, setIsShowPopup] = useState(false);
  const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  const [isHovered, setIsHovered] = useState(false);

  const contents = [
    {
      name: "Vitamin C(1000IU) Cap X",
      name2: "UPN Member Price $25.00",
      price3: "$30.00-$40.00",
    },
  ];
  const [rating, setRating] = useState(0);

  const totalStars = 5;
  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontSize: "25px",
        color: "orange",
        marginLeft: "8px",
      }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  const ratingPercentages = {
    5: 40, // 40% of ratings are 5 stars
    4: 30, // 30% of ratings are 4 stars
    3: 20, // 20% of ratings are 3 stars
    2: 5, // 5% of ratings are 2 stars
    1: 5, // 5% of ratings are 1 star
  };

  const [popup, SetPopup] = useState(false);

  const handleopen = () => {
    SetPopup(true);
  };
  const handleremove = () => {
    SetPopup(false);
  };

  // const handleIncrease = () => {
  //   if (quantity < prod.amountInStock && quantity < prod.maxOrderQuantity)
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  // };
  const [errorMessage, setErrorMessage] = useState("");

  // const handleIncrease = () => {
  //   if (quantity < prod.amountInStock && quantity < prod.maxOrderQuantity) {
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  //     setErrorMessage(""); // Clear error when within the limit
  //   } else {
  //     setErrorMessage(
  //       `You can only order a maximum of ${prod.maxOrderQuantity} items.`
  //     );
  //   }
  // };

  // const handleDecrease = () => {
  //   if (quantity > 1 && quantity > prod.minOrderQuantity) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  const handleIncrease = () => {
    if (quantity < prod.amountInStock && quantity < prod.maxOrderQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setErrorMessage(""); // Clear error when within the limit
    } else {
      // setErrorMessage(`Maximum limit is ${prod.maxOrderQuantity} items.`);
      let errorMsg = "";
      if (quantity >= prod.amountInStock) {
        errorMsg += `Only ${prod.amountInStock} items available in stock. `;
      }
      // if (quantity >= prod.maxOrderQuantity) {
      //   errorMsg += `Maximum limit is ${prod.maxOrderQuantity} items.`;
      // }
      setErrorMessage(errorMsg.trim());
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setErrorMessage(""); // Clear error when decreasing quantity
    }
  };
  // const userId = localStorage.getItem("userId");
  // const currentDate = new Date();
  // const payload = {
  //   orderId: "",
  //   customerId: user.customerId,
  //   // totalAmount: total?.toFixed(2),
  //   totalAmount: quantity * prod?.salePrice,
  //   orderDate: currentDate.toISOString(),
  //   shippingMethodId: 1,
  //   orderStatusId: 7,
  //   trackingNumber: "",
  //   products: cartItems.map((item) => {
  //     const currentDate = new Date();
  //     const saleStartDate = new Date(item.product?.salePriceValidFrom);
  //     const saleEndDate = new Date(item.product?.salePriceValidTo);

  //     // Determine the price based on conditions
  //     let pricePerProduct;
  //     if (user?.isUPNMember === 1 && item.product?.upnMemberPrice > 0) {
  //       pricePerProduct = item.product.upnMemberPrice;
  //     } else if (
  //       item.product?.salePrice > 0 &&
  //       currentDate >= saleStartDate &&
  //       currentDate <= saleEndDate
  //     ) {
  //       pricePerProduct = item.product.salePrice;
  //     } else {
  //       pricePerProduct = item.product.unitPrice;
  //     }

  //     return {
  //       productId: item.product.productID,
  //       quantity: item.quantity,
  //       pricePerProduct: pricePerProduct?.toFixed(2),
  //       sellerId: user.customerId,
  //       imageUrl: item.product.imageUrl,
  //     };
  //   }),
  // };  
  const handleOrder = async () => {
    const currentDate = new Date();
    const cartData = {
      customerId: user.customerId,
      productId: id,
      quantity:quantity - Cartquantity,
      isActive: 1,
    };
    try {
      await addCartApi(cartData);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
    // const payLoad = {
    //   // orderId: "0",
    //   // customerId: userId,
    //   // totalAmount: quantity * prod.salePrice,
    //   // orderDate: currentDate.toISOString(),
    //   // // orderDateString: currentDate.toDateString(),
    //   // // orderTimeString: currentDate.toLocaleTimeString(),
    //   // shippingMethodId: 1,
    //   // orderStatusId: 1,
    //   // trackingNumber: "",
    //   // productId: prod.productID,
    //   // quantity: quantity,
    //   // pricePerProduct: prod.salePrice,
    //   // vendorId: prod.sellerId,

    //     orderId: "",
    //     customerId: user.customerId,
    //     // totalAmount: total?.toFixed(2),
    //     totalAmount: quantity * prod?.salePrice,
    //     orderDate: currentDate.toISOString(),
    //     shippingMethodId: 1,
    //     orderStatusId: 7,
    //     trackingNumber: "",
    //   products: [
    //     {
    //       productId: prod.productID,
    //       quantity: quantity,
    //       pricePerProduct: pricePerProduct?.toFixed(2),
    //       sellerId: prod.sellerId,
    //       imageUrl: prod.productGallery.imageUrl,
    //     },
    //   ],
    // };

    // Calculate the price per product based on the conditions
    let pricePerProduct;
    const saleStartDate = new Date(prod?.salePriceValidFrom);
    const saleEndDate = new Date(prod?.salePriceValidTo);

    if (user?.isUPNMember === 1 && prod?.upnMemberPrice > 0) {
      pricePerProduct = prod.upnMemberPrice;
    } else if (
      prod?.salePrice > 0 &&
      currentDate >= saleStartDate &&
      currentDate <= saleEndDate
    ) {
      pricePerProduct = prod.salePrice;
    } else {
      pricePerProduct = prod.unitPrice;
    }

    // Create the payload
    const payLoad = {
      orderId: "0",
      customerId: user.customerId,
      totalAmount: quantity * pricePerProduct,
      orderDate: currentDate.toISOString(),
      shippingMethodId: 1,
      orderStatusId: 7,
      trackingNumber: "",
      products: [
        {
          productId: prod.productID,
          quantity: quantity,
          pricePerProduct: pricePerProduct?.toFixed(2),
          sellerId: prod.sellerId,
          imageUrl: prod.productGallery.imageUrl,
        },
      ],
    };

    navigate(
      `/checkout?total=${quantity * pricePerProduct.toFixed(2)}&productId=${prod?.productID
      }`
    );

    // try {
    //   // await customerOrderApi(payLoad);
    //   // await customerOrderGetApi(userId)
    //   await orderApi(payLoad);
    //   await orderGetApi(userId);
    // } catch (error) {
    //   console.error("Error adding product to cart:", error);
    // }
    try {
      await dispatch(fetchOrderPlace(payLoad));
      // await dispatch(fetchGetOrder(userId));
      navigate(
        `/checkout?total=${quantity * pricePerProduct}&productId=${prod?.productID
        }`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const dateString = prod?.expiryDate;
  const date = new Date(dateString);

  const month = date.getMonth() + 1; // +1 because getMonth() returns 0-11
  const day = date.getDate();
  const year = date.getFullYear();

  // Pad month and day with leading zeros if they are single digits
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  const formattedDate = `${formattedMonth}-${formattedDay}-${year}`;

  // const formattedDate = `${month}-${day}-${year}`;
  // Function to handle sharing
  const handleProductDetailsShare = (productID) => {
    setCurrentProductID(productID); // Store the productID in state
    const productURL = `/detailspage/${productID}`;
    setProductLink(window.location.origin + productURL); // Store the complete URL
  };
  const handleShare = (productID) => {
    handleProductDetailsShare(productID); // Ensure the product details are set

    const productLink = window.location.origin + `/detailspage/${productID}`;

    if (navigator.share) {
      navigator
        .share({
          title: "Check out this awesome product!",
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

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const ProductRatingAPI = async () => {
      try {
        const productRating = await fetchRatingWithProduct(id);
        setRatings(Array.isArray(productRating) ? productRating : []);
      } catch (error) {
        console.log(error);
      }
    };
    ProductRatingAPI();
  }, [id]);

  const ratingValue = ratings[0]?.rating || 0;
  const totalStar = 5;

  return (
    <div
      className="Largest:w-[1550px] mt-2  Laptop:w-full  w-full  flex flex-col font-sans overflow-y-scroll"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="  flex   flex-col md:flex-row gap-4 mt-4 justify-around h-full w-full mb-4 ">
        <div className="w-full flex sm:w-[60%] md:w-[45%] mb-3 ml-8 ">
          <div className="flex ml-2 md:-mr-3 h-[400px] cursor-pointer">
            <div className="flex flex-col mr-4 items-center   overflow-y-scroll">
              {thumnailList?.map((item, index) => {
                return (
                  <div key={index} className=" ">
                    <img
                      onMouseEnter={() => setimg(item)}
                      src={item}
                      className="w-16 sm:w-20 md:w-20  object-cover bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 cursor-pointer"
                    />
                  </div>
                );
              })}

              {/* {thumnailList?.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      onMouseEnter={() => setimg(item)}
                      src={item}
                      className="w-16 object-cover my-2 bg-gray-200 border rounded-lg object-fit hover:border-sky-500 hover:border-2 h-20"
                    />
                  </div>
                );
              })} */}
              {prod?.productGallery.videoUrl != null &&
                prod?.productGallery.videoUrl != "" &&
                prod?.productGallery.videoUrl != "null" && (
                  <div
                    className={` w-16 h-16 ${isHovered ? "bg-gray-200" : ""}`}
                    onMouseEnter={() => {
                      setimg(videoSample);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <iframe
                      src={prod?.productGallery.videoUrl}
                      type="video/mp4"
                      className={` w-full h-full rounded-lg border`}
                    />
                  </div>
                )}
            </div>

            <div className="relative bg-gray-200 border flex-col rounded-lg w-68 h-[400px] flex justify-center items-center">
              {/* Share Icon positioned in the top-right corner */}
              {/* <div className="absolute top-2 right-2">
                <Tooltip placement="top" title="Share">
                  <img
                    src={share}
                    className="w-5 h-5"
                    alt="Share Icon"
                    onClick={handleSharePopupToggle}
                  />
                </Tooltip>
              </div> */}

              {/* Conditional rendering for video or image */}
              {img === videoSample ? (
                <video className="object-contain w-96 h-72" controls>
                  <source
                    src={prod?.productGallery.videoUrl}
                    type="video/mp4"
                    className=""
                  />
                </video>
              ) : (
                <img
                  src={img}
                  className="object-contain w-96 h-72 "
                  alt="Product"
                />
              )}
            </div>

            {/* <div className="bg-gray-200 border flex-col rounded-lg w-68 h-[400px] flex justify-center items-center">
            <div className="-mt-4">
            <img src={share} className="w-4 h-5 "/>
            </div>
              {img === videoSample ? (
                <video className="object-contain w-96 h-72 " controls>
                  <source
                    src={prod?.productGallery.videoUrl}
                    type="video/mp4"
                    className=""
                  />
                </video>
              ) : (
                <img
                  src={img}
                  className="object-contain w-96 h-72"
                  alt="Product"
                />
               

              )}
              
            </div> */}
          </div>
          {/* <div className="relative inline-block mt-4 ">
          <Tooltip title="Share" placement="right">
            <img
              src={share}
              className="w-6 mx-3 "
              onClick={() => handleShare(prod.productID)}
            />
          </Tooltip>
          
        </div> */}
        </div>
        <div className="relative inline-block mt-4 -ml-2 ">
          <Tooltip title="Share" placement="right">
            <img
              src={share}
              className="w-6 mx-3 "
              onClick={() => handleShare(prod.productID)}
            />
          </Tooltip>
        </div>

        <div className="w-full lg:w-[60%] mr-5 overflow-scroll justify-between h-[500px] flex flex-col lg:flex-row border-none lg:-ml-6">
          <div className="w-full lg:w-[50%] p-4 lg:p-2">
            <div className="border-b-2">
              <h1 className="text-xl lg:text-2xl font-semibold text-blue2">
                {/* Vitamin C(1000IU) Cap X */}
                {prod?.productName}
              </h1>
              <h3 className="text-blue2 font-light text-sm lg:text-base">
                UPN Member Price:
                <span className="text-blue2 font-semibold">
                  {" "}
                  ${prod?.upnMemberPrice?.toFixed(2)}
                </span>
              </h3>

              {/* <div className="flex items-center">
                {prod?.salePrice > 0 ? (
                  <>
                    <span className="text-sky-500 font-semibold text-[18px]">
                      ${prod?.salePrice?.toFixed(2)}
                    </span>
                    <p className="text-xs ml-1 line-through">
                      ${prod?.unitPrice?.toFixed(2)}
                    </p>
                  </>
                ) : (
                  <span className="text-sky-500 font-semibold text-[18px]">
                    ${prod?.unitPrice?.toFixed(2)}
                  </span>
                )}
              </div> */}

              <div className="flex items-center">
                {new Date() >= new Date(prod?.salePriceValidFrom) &&
                  new Date() <= new Date(prod?.salePriceValidTo) ? (
                  <>
                    <span className="text-green2 font-semibold text-[16px] lg:text-[18px]">
                      ${prod?.salePrice?.toFixed(2)}
                    </span>
                    <p className="text-xs ml-1 text-green2 line-through">
                      ${prod?.unitPrice?.toFixed(2)}
                    </p>
                  </>
                ) : (
                  <span className="text-sky-500 font-semibold text-[16px] lg:text-[18px]">
                    ${prod?.unitPrice?.toFixed(2)}
                  </span>
                )}
              </div>

              {/* <div className="text-[12px] lg:text-[14px]">
                Inclusive of all taxes
              </div> */}

              <div className="flex items-center">
                {/* Render stars dynamically */}
                {/* {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "24px",
                      color:
                        index < Math.floor(prod?.productRating)
                          ? "orange"
                          : "gray",
                    }}
                  >
                    ★
                  </span>
                ))} */}

                {/* <div className="flex items-center ml-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-7 ${index <
                          Math.round(
                            ratings.reduce(
                              (sum, rating) => sum + rating.rating,
                              0
                            ) / ratings.length
                          )
                          ? "text-yellow-400"
                          : "text-gray-300"
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.297a1 1 0 00.95.69h5.573c.969 0 1.371 1.24.588 1.81l-4.513 3.279a1 1 0 00-.364 1.118l1.716 5.297c.3.921-.755 1.688-1.54 1.118l-4.513-3.279a1 1 0 00-1.175 0l-4.513 3.279c-.785.57-1.84-.197-1.54-1.118l1.716-5.297a1 1 0 00-.364-1.118l-4.513-3.279c-.783-.57-.381-1.81.588-1.81h5.573a1 1 0 00.95-.69l1.716-5.297z" />
                    </svg>
                  ))}
                </div> */}
                {/* <div className="text-sm mt-3 ml-1 font-bold text-yellow-400">
                  {ratings.length > 0
                    ? (
                      ratings.reduce(
                        (sum, rating) => sum + rating.rating,
                        0
                      ) / ratings.length
                    ).toFixed(1)
                    : "0.0"}
                  <span className="text-sm font-normal">/5</span>
                </div>
                {/* Display number of ratings *
                <div className="ml-2 mt-2 text-[13px]">
                  ({ratings.length} global ratings)
                </div> */}
              </div>
            </div>

            {/* <div className="bg-gray-100 p-2 w-full border rounded-lg my-4 flex text-green-600">
              <p>
                <CiDiscount1 className=" text-2xl" />
              </p>{" "}
              {""} {""}
              <p className=" text-[14px] lg:text-[15px] font-normal ml-2">
                Add 15 Products to cart and get 10$ Discount
              </p>
            </div> */}

            <div className=" w-full flex justify-center flex-col ">
              {/* <div className="w-full flex items-center justify-between p-2 bg-gray-100 rounded-lg">
                <span className="text-base lg:text-lg font-semibold">
                  Ship to
                </span>
                <button
                  onClick={() => setIsFormVisible(!isFormVisible)}
                  className="text-sm lg:text-base flex items-center"
                >
                  Calculate Shipping Cost
                  <img
                    src={isFormVisible ? DropDownIcon : DropUpIcon}
                    alt="Toggle Dropdown"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                </button>
              </div> */}
              {isFormVisible && (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col  w-full  p-4  bg-gray-100 rounded-lg"
                >
                  <div className="w-full mb-4">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      htmlFor="state"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Please select a region, state or province"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      htmlFor="postalCode"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-2 py-2 w-52  font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-600"
                  >
                    Calculate
                  </button>
                </form>
              )}

              <div className=" w-[80%] mt-3  bg-white space-y-4">
                <h1 className="text-lg font-bold text-blue2">Quick Overview</h1>
                <ul>
                  <li>{prod?.aboutTheProduct}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] min-h-full p-3 flex flex-col items-center">
            <div className="border rounded-lg shadow-lg  pb-4 w-full h-full">
              <div className="p-4">
                <div className="flex justify-between">
                  {/* <p className="text-black text-[22px]">
                    $
                    {prod?.salePrice > 0
                      ? prod?.salePrice.toFixed(2)
                      : prod?.unitPrice?.toFixed(2)}
                  </p> */}
                  <p className="text-green2 text-[20px] lg:text-[22px]">
                    $
                    {/* {new Date() >= new Date(prod?.salePriceValidFrom) &&
                    new Date() <= new Date(prod?.salePriceValidTo)
                      ? prod?.salePrice?.toFixed(2)
                      : prod?.unitPrice?.toFixed(2)} */}
                    {user?.isUPNMember === 1
                      ? prod?.upnMemberPrice?.toFixed(2)
                      : new Date() >= new Date(prod?.salePriceValidFrom) &&
                        new Date() <= new Date(prod?.salePriceValidTo)
                        ? prod?.salePrice?.toFixed(2)
                        : prod?.unitPrice?.toFixed(2)}
                  </p>

                  {/* <img src={ ?Wishlist :filledheart} className="w-5 h-5 flex   "/> */}
                  <div className="flex">
                    {!user || user?.customerId !== prod?.sellerId &&(
                  <Tooltip placement="top" title="wishlist">
                    <img
                      src={
                        wishlistProductIDs.includes(prod?.productID)
                          ? filledHeart
                          : emptyHeart
                      }
                      className="w-5 h-5 flex cursor-pointer"
                      // onClick={handleWishlistClick}
                      onClick={() => handleClick(prod?.productID)}
                      alt="Wishlist Icon"
                    />
                  </Tooltip>)}
                  {/* <Tooltip placement="top" title="Compare">
                      <img src={compare} className="w-5 h-5 ml-2 cursor-pointer" />
                    </Tooltip> */}
                  </div>
                </div>
                {/* <div className="flex justify-between">
                  <div className="flex">
                    <p className="text-gray-600 text-[12px] lg:text-[14px]">
                      Delivery by{" "}
                      <span className="text-black">
                        Tommorrow, 8:00 am - 12:00 pm
                      </span>
                    </p>
                  </div>
                  <div>
                    <Tooltip placement="top" title="Compare">
                      <img src={compare} className="w-5 h-5 cursor-pointer" />
                    </Tooltip>
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col text-[14px] lg:text-[15px] w-full px-4 mb-2">
                <div className="flex  text-[16px] lg:text-[18px] mb-1 flex-col  ">
                  {/* <div className="flex items-center text-[18px] mb-1">
                    <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
                    <span>In Stock</span>
                  </div> */}
                  {prod?.amountInStock > 0 ? (
                    <div className="flex items-center text-[18px] mb-1">
                      <TbSquareRoundedCheckFilled className="text-sky-500 mr-1" />
                      <span className="text-green2">In Stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-[18px] mb-1">
                      <TbSquareRoundedXFilled className="text-red-500 mr-1" />{" "}
                      {/* Out of stock icon */}
                      <span>Out of Stock</span>
                    </div>
                  )}

                  <div className="flex">
                    <p className="text-blue2 font-normal">NDC/UPC :  </p>
                    <span className=" text-base md:text-base">
                      &nbsp; {prod?.ndCorUPC}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="text-blue2 font-normal ">SKU : </p>
                    <span> &nbsp; 6545555</span>
                    {/* <span>{prod?.sku}</span> */}

                  </div>
                  <div className="flex">
                    <p className="text-blue2 font-normal ">
                      Expiration Date : 
                    </p>
                    <span> &nbsp; {formattedDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex  md:flex-row items-center space-x-2 pb-2 px-4">
                <label className="text-lg  font-semibold text-blue2">Quantity:</label>
                <div className=" flex gap-2 md:flex-row">
                  <button
                    onClick={handleDecrease}
                    className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none"
                    disabled={quantity === prod?.minOrderQuantity} // Disable decrease button if quantity is 1
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 py-1 text-center border border-gray-300 rounded focus:outline-none"
                  />
                  <button
                    onClick={handleIncrease}
                    className={`bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none ${quantity >= prod?.maxOrderQuantity
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                      }`}
                  >
                    +
                  </button>
                </div>
              </div>
              {Errors?.quantity != null && <span>{Errors.quantity}</span>}

              {errorMessage && (
                <span className="text-red-500 ml-4 text-sm">
                  {errorMessage}
                </span>
              )}

              {/* <p className="text-green2 text-xs ml-4">Purchase Requirement</p> */}
              {/* <p className="text-red-500 text-xs ml-4 font-semibold">
                Min Qty - {prod?.minOrderQuantity} and Max Qty - {prod?.maxOrderQuantity}
              </p> */}
              <div className="flex flex-col item-center">
                <p className="text-green2 ml-4 text-sm">Purchase Requirement</p>
              <p className="text-red-500 ml-4 text-sm mb-2">{`Min Qty - ${prod?.minOrderQuantity ?? 0} and Max Qty -${prod?.maxOrderQuantity ?? 0}`}</p>
              </div>
              <div className="flex gap-2 mx-2">
                <button
                  className={`w-full lg:w-40 flex rounded-lg justify-center items-center py-2 lg:py-1 
                  ${!user || prod?.amountInStock <= 0 || user?.customerId === prod?.sellerId
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue2 cursor-pointer hover:bg-green2"
                    }`}
                  disabled={!user || prod?.amountInStock <= 0 || user?.customerId === prod?.sellerId}
                  onClick={() => {
                    if (prod?.amountInStock > 0 && user?.customerId !== prod?.sellerId) {
                      handleCart(id.CartQuantity);
                    }
                  }}
                >
                  <img src={addcart} className="h-7 p-1" alt="Add to Cart" />
                  <p className="text-white font-semibold">ADD</p>
                </button>

                {/* <button
                  className={`w-40 text-white font-semibold text-lg border rounded-lg  items-center  bg-orange-400 flex justify-center`}
                  onClick={handleOrder}
                >
                  Buy Now
                </button> */}
                <button
                  className={`text-white w-full lg:w-40 flex rounded-lg justify-center items-center py-2 lg:py-1 
                  ${!user || prod?.amountInStock <= 0 || user?.customerId === prod?.sellerId
                      ? "bg-orange-200 cursor-not-allowed"
                      : "bg-green2 hover:bg-blue2"
                    }`}
                  // onClick={handleOrder}
                  // disabled={prod?.amountInStock === 0}
                  disabled={!user || prod?.amountInStock <= 0 || user?.customerId === prod?.sellerId}
                  onClick={() => {
                    if (prod?.amountInStock > 0 && user?.customerId !== prod?.sellerId) {
                      handleOrder();
                    }
                  }}
                >
                  Buy Now
                </button>
              </div>
              <div>
                {/* <div className=" mt-2 text-[17px] flex justify-center items-center  cursor-pointer hover:text-red-400 ">
                  <p className=" flex "
                    onClick={()=>handleClick}>Add to wishlist</p>
                </div> */}
              </div>
            </div>

            <div className="w-full  pt-4 text-[15px] font-sans">
              <div className="p-2 bg-gray-100 rounded-lg mr-4">
                <p className="font-semibold text-gray-600">SOLD BY</p>
                <p className="text-red-600">
                  {/* <Link to="/layout/layoutprofile"> */}{" "}
                  {prod?.sellerFirstName} {prod?.sellerLastName}
                  {/* </Link> */}
                </p>
                {/* <p className="hover:text-red-600">Company Website</p> */}
                {/* {prod?.companyWebsite && (
                  <a href={`${prod.companyWebsite}`} target="_blank" rel="noopener noreferrer">
                    <p className="hover:text-red-600">Company Website</p>
                  </a>
                )} */}
                {prod?.companyWebsite && (
                  <a
                    href={
                      prod.companyWebsite.startsWith("http://") || prod.companyWebsite.startsWith("https://")
                        ? prod.companyWebsite
                        : `https://${prod.companyWebsite}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="hover:text-red-600">Company Website</p>
                  </a>
                )}
                <div className="flex flex-col">
                  <div className="flex  items-center space-x-2 hover:text-red-500">
                    <img src={product} className="w-fit h-10" />
                    {/* <Link to="/layout/layoutbuy"> */}
                    {/* <span className=" font-semibold">17 PRODUCTS</span> */}
                    <span className=" font-semibold">{prod?.sellerProductsCount} PRODUCTS</span>
                    {/* </Link> */}
                  </div>
                  <div className="flex items-center space-x-2 hover:text-red-500">
                    <img src={phone} className="w-fit h-10" />
                    {/* <span>Contact Seller</span> */}
                    <span>{prod?.sellerPhoneNumber}</span>
                  </div>
                  {/* <div className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                    <img src={report} className="w-fit h-8" />
                    <span>Report Product</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col  justify-center items-center">
        <ProductDetails
          description={prod?.productDescription}
          manufacturer={prod?.manufacturer}
          size={prod?.size}
          UOM={prod?.unitOfMeasure}
          strength={prod?.strength}
          brand={prod?.brandName}
          product={prod?.productName}
          Form={prod?.form}
          Strength={prod?.strength}
          Brand={prod?.brandName}
          Height={prod?.height}
          Weight={prod?.weight}
          Width={prod?.width}
          Length={prod?.length}
        />

        {/* <div className="w-[92%] flex flex-col md:flex-row border-t-2 shadow-inner justify-start gap-8 p-4">
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-black mb-4">
              RATINGS & REVIEWS
            </h2>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-4">
                <span className="text-sm font-medium flex text-gray-700">
                  {rating} <span> ★</span>
                </span>
                <div className="w-full h-3 mx-3 bg-gray-200 rounded">
                  <div
                    className={`h-full bg-blue-500 rounded`}
                    style={{ width: `${ratingPercentages[rating]}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">
                  {ratingPercentages[rating]}%
                </span>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Customers Say
            </h2>
            <div>
              {ratings.length > 0 ? (
                ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 bg-white border border-gray-200 rounded shadow-sm"
                  >
                    <div className="flex items-center ">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-5 h-7 ${
                            starIndex < rating.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.297a1 1 0 00.95.69h5.573c.969 0 1.371 1.24.588 1.81l-4.513 3.279a1 1 0 00-.364 1.118l1.716 5.297c.3.921-.755 1.688-1.54 1.118l-4.513-3.279a1 1 0 00-1.175 0l-4.513 3.279c-.785.57-1.84-.197-1.54-1.118l1.716-5.297a1 1 0 00-.364-1.118l-4.513-3.279c-.783-.57-.381-1.81.588-1.81h5.573a1 1 0 00.95-.69l1.716-5.297z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-800">{rating.feedback}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      - {rating?.customerName}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No feedback available for this product.
                </p>
              )}
            </div>
          </div>
        </div> */}

        {/* <div className="w-[92%] flex flex-col md:flex-row border-t-2 shadow-inner justify-start gap-8 p-4">
          {/* Ratings Overview *
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-black mb-4">
              RATINGS & REVIEWS
            </h2>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-black">
                {ratings.length > 0
                  ? (
                    ratings.reduce((sum, rating) => sum + rating.rating, 0) /
                    ratings.length
                  ).toFixed(1)
                  : "0.0"}
                <span className="text-lg font-normal">/5</span>
              </div>
              <div className="flex items-center ml-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-7 ${index <
                        Math.round(
                          ratings.reduce(
                            (sum, rating) => sum + rating.rating,
                            0
                          ) / ratings.length
                        )
                        ? "text-yellow-400"
                        : "text-gray-300"
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.297a1 1 0 00.95.69h5.573c.969 0 1.371 1.24.588 1.81l-4.513 3.279a1 1 0 00-.364 1.118l1.716 5.297c.3.921-.755 1.688-1.54 1.118l-4.513-3.279a1 1 0 00-1.175 0l-4.513 3.279c-.785.57-1.84-.197-1.54-1.118l1.716-5.297a1 1 0 00-.364-1.118l-4.513-3.279c-.783-.57-.381-1.81.588-1.81h5.573a1 1 0 00.95-.69l1.716-5.297z" />
                  </svg>
                ))}
              </div>



              {/* Display number of ratings *
              <div className="ml-2 text-[13px]">
                ({ratings.length} global ratings)
              </div>
            </div>
            {[5, 4, 3, 2, 1].map((rating) => {
              const ratingCount = ratings.filter(
                (r) => r.rating === rating
              ).length;
              const totalRatings = ratings.length;
              const percentage =
                totalRatings > 0 ? (ratingCount / totalRatings) * 100 : 0;

              return (
                <div key={rating} className="flex items-center mb-4">
                  <span className="text-sm font-medium flex text-gray-700">
                    {rating} <span className="ml-1"> star</span>
                  </span>
                  <div className="w-full h-3 mx-3 bg-gray-200 rounded">
                    <div
                      className={`h-full bg-blue-500 rounded`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-700">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Customer Reviews *
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Customers Say
            </h2>
            <div>
              {ratings.length > 0 ? (
                ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 bg-white border border-gray-200 rounded shadow-sm"
                  >
                    {/* Star Ratings *
                    <div className="flex items-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-5 h-7 ${starIndex < rating.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.297a1 1 0 00.95.69h5.573c.969 0 1.371 1.24.588 1.81l-4.513 3.279a1 1 0 00-.364 1.118l1.716 5.297c.3.921-.755 1.688-1.54 1.118l-4.513-3.279a1 1 0 00-1.175 0l-4.513 3.279c-.785.57-1.84-.197-1.54-1.118l1.716-5.297a1 1 0 00-.364-1.118l-4.513-3.279c-.783-.57-.381-1.81.588-1.81h5.573a1 1 0 00.95-.69l1.716-5.297z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-800">{rating.feedback}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      - {rating?.customerName}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No feedback available for this product.
                </p>
              )}
            </div>
          </div>
        </div> */}

        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"You Might Like"}
            data={RelatedProducts}
          />
        </div>

        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"Selected For You"}
            data={upsellProducts}
          />
        </div>

        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"Inspired By Your Search History"}
            data={crossSellProducts}
          />
        </div>
        {/* <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"More Products By Same Seller(Manda)"}
            data={newProducts}
          />
        </div> */}
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Items;
