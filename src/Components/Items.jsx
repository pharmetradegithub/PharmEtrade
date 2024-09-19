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

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
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
import filledheart from '../assets/wishlistfilled_icon.png'
import cart from "../assets/CartNav_icon.png";
import compare from "../assets/CompareNav2.png";
import dropdown from "../assets/Down-arrow .png";

import DropUpIcon from "../assets/Icons/dropDownb.png";
import DropDownIcon from "../assets/Icons/dropUpB.png";
import { useSelector } from "react-redux";
import { fetchProductByIdApi, fetchRelatedProductApi } from "../Api/ProductApi";
import { addCartApi } from "../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../Api/WishList";
import { orderApi, orderGetApi } from "../Api/CustomerOrderList";
// import { customerOrderApi, customerOrderGetApi } from "../Api/CustomerOrderList";

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
  const user = useSelector((state) => state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  // const [wishlistProductIDs, setwishlistProductIDs] = useState(
  //   wishlist.map((wishItem) => wishItem.product.productID)
  // );
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);

  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);

  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find(
  //     (item) => item.product.productID === productID
  //   );
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };

  const [img, setimg] = useState(null);
  const { id } = useParams();
  const images = Array(8).fill(nature);
  console.log(id);
  const [selectedMl, setSelectedMl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  // const [showViewCart, setShowViewCart] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [prod, setprod] = useState(null);
  const [thumnailList, setthumnailList] = useState([]);
  const newProducts = useSelector((state) => state.product.recentSoldProducts);

  console.log("nnnnnn", newProducts)

  const RelatedProducts = useSelector((state)=> state.product.RelatedProducts);
  console.log("Rrrrrrrr", RelatedProducts)

  useEffect(() => {
    const NewProductsAPI = async () => {
      try {
        const product = await fetchProductByIdApi(id);
        console.log(product);
        setprod(product);
      } catch (error) {
        console.log(error);
      }
    };
    NewProductsAPI();
  }, []);

  useEffect(() => {
    if (prod) {
      setimg(prod.productGallery.imageUrl);
      setthumnailList([
        prod.productGallery.imageUrl,
        prod.productGallery?.thumbnail1,
        prod.productGallery?.thumbnail2,
        prod.productGallery?.thumbnail3,
      ]);
    }
  }, [prod]);
  const handleAddToCart = () => {
    // setShowViewCart(true);
    setIsItemAdded(true);
  };


  useEffect(() => {
    fetchRelatedProductApi(id)
  }, [id])


  const mlOptions = [250, 350, 500];
  const colorOptions = [
    { color: "sky-500", textColor: "text-sky-500" },
    { color: "green-500", textColor: "text-green-500" },
    { color: "orange-400", textColor: "text-orange-400" },
  ];

  const clearSelection = () => {
    setSelectedMl(null);
    setSelectedColor(null);
  };

  const handleCart = async (index) => {
    if (user == null) {
      console.log("login to add");
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
    console.log("Form data submitted:", formData);
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

  // const newProducts = [
  //   { id: 1, img: img1, name: "Nature Mask", price: "$99.00" },
  //   { id: 2, img: img2, name: "Eco-Friendly Mask", price: "$89.00" },
  //   { id: 3, img: img3, name: "Reusable Mask", price: "$79.00" },
  //   { id: 4, img: img4, name: "Protective Mask", price: "$69.00" },
  //   { id: 5, img: img5, name: "Breathable Mask", price: "$59.00" },
  //   { id: 6, img: img1, name: "Comfy Mask", price: "$49.00" },
  //   { id: 7, img: img2, name: "Stylish Mask", price: "$39.00" },
  //   { id: 8, img: img3, name: "Daily Mask", price: "$29.00" },
  //   { id: 9, img: img4, name: "Night Mask", price: "$19.00" },
  //   { id: 10, img: img5, name: "Morning Mask", price: "$9.00" },
  // ];

  const [popup, SetPopup] = useState(false);

  const handleopen = () => {
    SetPopup(true);
  };
  const handleremove = () => {
    SetPopup(false);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  console.log("productDataItem-->",prod)
  const userId = localStorage.getItem("userId");
  const handleOrder = async () => {
    // const payLoad = {
    //   orderId: "0",
    //   customerId: userId,
    //   totalAmount: quantity * prod.salePrice,
    //   orderDate: "2024-09-04T06:53:09.596Z",
    //   shippingMethodId: 1,
    //   orderStatusId: 1,
    //   trackingNumber: "",
    //   productId: prod.productID,
    //   quantity: quantity,
    //   pricePerProduct: prod.salePrice,
    //   vendorId: prod.sellerId
    // }
    // navigate(`/checkout?total=${prod.priceName}`)
    
    const currentDate = new Date();
    const payLoad = {
      orderId: "0",
      customerId: userId,
      totalAmount: quantity * prod.salePrice,
      orderDate: currentDate.toISOString(),
      // orderDateString: currentDate.toDateString(),
      // orderTimeString: currentDate.toLocaleTimeString(),
      shippingMethodId: 1,
      orderStatusId: 1,
      trackingNumber: "",
      productId: prod.productID,
      quantity: quantity,
      pricePerProduct: prod.salePrice,
      vendorId: prod.sellerId
    }
    navigate(`/checkout?total=${quantity * prod.salePrice}`)
    
    try {
      // await customerOrderApi(payLoad);
      // await customerOrderGetApi(userId)
      await orderApi(payLoad)
      await orderGetApi(userId)
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }
  return (
    <div
      className="Largest:w-[1550px] mt-2  Laptop:w-full  w-full  flex flex-col font-sans overflow-y-scroll"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="  flex gap-4 mt-4 justify-around h-full w-full mb-4">
        <div className="w-[40%] mb-3">
          <div className="flex ml-10  cursor-pointer">
            <div className="flex flex-col mr-4 items-center overflow-y-scroll">
              {thumnailList?.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      onMouseEnter={() => setimg(item)}
                      src={item}
                      className="w-16 object-cover my-2 bg-gray-200 border rounded-lg object-fit hover:border-sky-500 hover:border-2 h-20"
                    />
                  </div>
                );
              })}

              <div
                className={` w-16 h-20 ${isHovered ? "bg-gray-200" : ""}`}
                onMouseEnter={() => {
                  setimg(videoSample);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                <iframe
                  src={videoSample}
                  type="video/mp4"
                  className="w-full h-full rounded-lg border"
                />
              </div>
            </div>
            <div className="bg-gray-200 border rounded-lg w-68 h-[400px] flex justify-center items-center">
              {img === videoSample ? (
                <video className="object-contain w-96 h-72 " controls>
                  <source src={videoSample} type="video/mp4" className="" />
                </video>
              ) : (
                <img
                  src={img}
                  className="object-contain w-96 h-72"
                  alt="Product"
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[60%] overflow-scroll justify-between h-[500px] flex border-none">
          <div className="w-[50%] ">
            <div className="  border-b-2">
              <h1 className="text-2xl font-semibold text-box">
                {/* Vitamin C(1000IU) Cap X */}
                {prod?.productName}
              </h1>
              <h3 className="text-orange-400 font-light text-sm">
                UPN Member Price:
                <span className="text-orange-400 font-semibold">
                  {" "}
                  ${prod?.upnMemberPrice}
                </span>
              </h3>

              <div className="flex items-center">
                <span className="text-sky-500 font-semibold text-[18px] ">
                  {prod?.salePrice }
                </span>
                <p className="text-xs ml-1 line-through">${prod?.unitPrice} </p>
              </div>
              <div className="text-[12px]">Inclusive of all taxes</div>

              <div className="flex items-center   ">
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <div className="ml-2 text-[13px]">(1048 ratings)</div>
              </div>
            </div>

            <div className="bg-gray-100 p-2 w-full border rounded-lg my-4 flex text-green-600">
              <p>
                <CiDiscount1 className=" text-2xl" />
              </p>{" "}
              {""} {""}
              <p className=" text-[15px]  font-normal">
                Add 15 Products to cart and get 10$ Discount
              </p>
            </div>

            <div className=" w-full flex justify-center flex-col ">
              <div className="w-full flex items-center justify-between p-2  bg-gray-100 rounded-lg">
                <span className="text-base font-semibold">Ship to</span>
                <button
                  onClick={() => setIsFormVisible(!isFormVisible)}
                  className="text-sm flex items-center"
                >
                  Calculate Shipping Cost
                  <img
                    src={isFormVisible ? DropDownIcon : DropUpIcon}
                    alt="Toggle Dropdown"
                    className=" w-6 h-6"
                  />
                </button>
              </div>
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
                <h1 className="text-lg font-bold">Quick Overview</h1>
                <p>
                  <li>
                {prod?.aboutTheProduct}
                
                  </li>
                  
                  
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] min-h-full mr-12  p-3 flex flex-col items-center  ">
            <div className="border rounded-lg shadow-lg  pb-4 w-full h-full">
            <div className="p-4">
                <div className="flex justify-between">
                <p className="text-black text-[22px]">${prod?.salePrice}</p>
                {/* <img src={ ?Wishlist :filledheart} className="w-5 h-5 flex   "/> */}
                <img
      src={isWishlisted ? filledheart : Wishlist}
      className="w-5 h-5 flex cursor-pointer"
      onClick={handleWishlistClick}
      alt="Wishlist Icon"
    />
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                <p className="text-gray-600 text-[14px]">
                  Delivery by{" "}
                  <span className="text-black">
                    Tommorrow, 8:00 am - 12:00 pm
                  </span>
                  </p>
                  </div>
                  <div>
                  <img src={compare} className="w-5 h-5"/>
                 
               
                </div>
                </div>
              </div>

              <div className="flex flex-col text-[15px]  w-[320px] px-4 mb-2 ">
                <div className="flex flex-col  ">
                  <div className="flex items-center text-[18px] mb-1">
                    <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
                    <span>In Stock</span>
                  </div>
                  <div className="flex">
                    <p className="text-sky-500 font-normal">NDC/UPC: </p>
                    <span>{prod?.ndCorUPC}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="text-sky-500 font-normal ">SKU:</p>
                    <span>6545555</span>
                  </div>
                  <div className="flex">
                    <p className="text-sky-500 font-normal ">
                      Expiration Date:
                    </p>
                    <span>{prod?.expiryDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pb-2 px-4">
                <label className="text-lg font-semibold">Quantity:</label>
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none"
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
                  className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none"
                >
                  +
                </button>
              </div>

              <div className="flex gap-2 mx-2">
                <button
                  className={`bg-blue-900 w-40 flex  rounded-lg justify-center  items-center py-1 cursor-pointer
                     `}
                  onClick={() => handleCart(id)}
                >
                  <img src={addcart} className="h-7 p-1" />
                  <p className="text-white font-semibold">ADD</p>
                </button>

                <button
                  className={`w-40 text-white font-semibold text-lg border rounded-lg  items-center  bg-orange-400 flex justify-center`}
                  onClick={handleOrder}
                >
                  {/* <FiShoppingCart className="text-[20px] mt-1 mx-1" /> */}
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
                <p className="text-red-600">Manda</p>
                <p className="hover:text-red-600">Company Website</p>
                <div className="flex flex-col">
                  <div className="flex  items-center space-x-2 hover:text-red-500">
                    <img src={product} className="w-fit h-10" />
                    <span className=" font-semibold">17 PRODUCTS</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-red-500">
                    <img src={phone} className="w-fit h-10" />
                    <span>Contact Seller</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                    <img src={report} className="w-fit h-8" />
                    <span>Report Product</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col  justify-center items-center">
        <ProductDetails description= {prod?.productDescription} manufacturer= {prod?.manufacturer} size= {prod?.size} UOM={prod?.unitOfMeasure} strength= {prod?.strength} brand={prod?.brandName} product={prod?.productName}  />

        <div className="w-[92%] flex flex-col md:flex-row border-t-2 shadow-inner justify-start gap-8 p-4">
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
              Customer Say
            </h2>
            {/* Example of a single review */}
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded shadow-sm">
              <p className="text-gray-800">
                "Cough syrups may contain antitussives (like dextromethorphan),
                expectorants (like guaifenesin), or antihistamines (like
                diphenhydramine) depending on the type."
              </p>
              <div className="mt-2 text-sm text-gray-500">- Testing</div>
            </div>
            {/* Repeat above div for multiple reviews */}
          </div>
        </div>
        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"Alterntives"}
            data={RelatedProducts}
          />
        </div>

        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            productList={productList}
            addCart={addCart}
            Title={"More Products By Same Seller(Manda)"}
            data={newProducts}
          />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Items;
