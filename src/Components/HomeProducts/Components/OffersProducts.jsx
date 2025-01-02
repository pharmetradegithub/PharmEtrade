
import React, { useEffect, useState } from "react";
import wishlist from "../../../assets/Wishlist1_icon.png";
import compare from "../../../assets/CompareNav2.png";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import cart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";
import Pagination from "../../Pagination";
import Notification from '../../Notification'
// import { fetchGetProductOffer } from "../Api/ProductApi";

const OffersProducts = ({ topMargin, addCart, wishList }) => {
  const [notification, setNotification] = useState({
    show: false,
    message: "one",
  });
  const dispatch = useDispatch()
  // const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  // const [currentItems, setCurrentItems] = useState([]);

  const productOffer = useSelector((state) => state.product.getProductSpecialOffer);
  console.log('pr', productOffer)
  // const carts = useSelector((state) => state.cart.cart);
  // const wishlist = useSelector((state) => state.wishlist.wishlist);
  const user = useSelector((state) => state.user.user);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [wishlistProductIDs, setwishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null;
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setwishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);


  const navigate = useNavigate();

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setcurrentItems] = useState(
    productOffer.slice(indexOfFirstItem, indexOfLastItem)
  );
  useEffect(() => {
    if (productOffer) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setcurrentItems(productOffer.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [productOffer, indexOfFirstItem, indexOfLastItem]);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil((productOffer?.length || 0) / itemsPerPage);


  // useEffect(() => {
  //   if (productOffer) {
  //     setCurrentItems(productOffer.slice(indexOfFirstItem, indexOfLastItem));
  //   }
  // }, [productOffer, indexOfFirstItem, indexOfLastItem]);

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  // const handleCart = (index) => {
  //   console.log("Adding to cart:", index);
  //   const prolist = {
  //     id: index,
  //     src: productOffer[index].productGallery.imageUrl,
  //     price: productOffer[index].salePrice,
  //     rate: "SKU 6545555",
  //     rates: "UPN member price:",
  //     ratesupn: "$45.00",
  //   };
  //   addCart(prolist);
  // };

  const handleCart = async (productID) => {
    if (user == null) {
      navigate("/login")
      return
    }
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    // try {
    //   await addCartApi(cartData);

    // }
    try {
      await addCartApi(cartData);
      setNotification({
        show: true,
        message: "Item Added To Cart Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }
    catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // const handleClick = (index) => {
  //   setFavoriteItems((prevState) => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));

  //   const prolist = {
  //     id: index,
  //     src: productOffer[index].productGallery.imageUrl,
  //     price: productOffer[index].salePrice,
  //     rate: "SKU 6545555",
  //     rates: "UPN member price:",
  //     ratesupn: "$45.00",
  //   };
  //   wishList(prolist);
  // };
  const handleClick = async (productID) => {
    if (user == null) {
      navigate("/login")
      return
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
  console.log("offersData-->", currentItems)

  return (
    <div
      className="w-full flex flex-col mt-1 h-full justify-center items-center overflow-y-auto  "
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      {notification.show && (
        <Notification
          show={notification.show}
          message={notification.message}
        />
      )}

      <h1 className="bg-blue-900 w-full  p-1 mx-1 text-white font-semibold text-xl rounded-md mt-10 md:mt-2">Offer Products In {
        currentItems[0]?.categorySpecification.specificationName
      }'s </h1>

      <div className="w-full h-full  mb-5 mt-8">
        <div className="h-full mr-5">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentItems.map((offer, index) => (
              <div
                key={index}
                className="w-full max-w-md border p-2 shadow-md"
              // className="flex flex-col border rounded-lgw-full max-w-md h-80 bg-white"
              >


                <div className="flex sm:justify-center justify-start md:justify-start bg-slate-200 relative">
                  <div className="flex flex-row  h-16 justify-center text-center bg-yellow-300 w-16  rounded-l-xl rounded-b-full pb-5">
                    <p className="mt-2 -ml-1 text-black text-sm md:text-base font-semibold">
                      {offer.discount}% Off
                    </p>
                  </div>

                  <img
                    onClick={() => {
                      // e.stopPropagation();
                      handleClick(offer.productID)
                    }}
                    // onClick={() => handleClick(item.productID)}
                    // src={
                    //   wishlistProductIDs.includes(item.productID)
                    //     ? filledHeart
                    //     : emptyHeart
                    // }
                    src={
                      wishlistProductIDs.includes(offer.productID)
                        ? filledHeart
                        : emptyHeart
                    }
                    className="h-7 sm:h-8 p-[6px] cursor-pointer absolute right-0"
                    alt="Favorite Icon"
                  />
                  <img
                    src={compare}
                    className="sm:h-5 sm:w-5 h-4 w-4 right-1 cursor-pointer absolute bottom-1 text-green-700"
                    alt="Other Icon"
                  />
                  <Link to={`/detailspage/${offer.productID}`}>
                    <img
                      src={offer.productGallery.imageUrl}

                      // src={item.productGallery.imageUrl}
                      alt={`nature-${index}`}
                      className=" h-32 w-24 sm:h-40 sm:w-28 lg:h-48 lg:w-36 rounded-lg"
                    />
                  </Link>
                </div>
                {/* <div className="flex justify-between">
                  <div className="flex flex-row justify-center text-center bg-yellow-300 w-20 rounded-l-xl rounded-b-full pb-8">
                    <p className="pb-3 mt-3 text-black font-semibold">
                      {offer.discount}% Off
                    </p>
                  </div>
                  <div className="m-3">
                    <img
                      onClick={() => {
                        // e.stopPropagation();
                        handleClick(offer.productID)
                      }}
                      src={
                        wishlistProductIDs.includes(offer.productID)
                          ? filledHeart
                          : emptyHeart
                      }
                      className="h-5 w-5 cursor-pointer"
                      alt="Favorite Icon"
                    />
                  </div>
                </div> */}
                {/* <div className="flex justify-center items-center  -mt-8">
                  <Link to={`/detailspage/${offer.productID}`}>
                    <img
                      src={offer.productGallery.imageUrl}
                      className="h-40 w-52  sm:h-40 sm:w-28 lg:h-48 lg:w-36 hover:cursor-pointer p-6"
                      alt={offer.productName}
                    />
                  </Link>
                </div> */}
                <div className="flex justify-center mt-8 flex-col items-center mb-1 cursor-pointer">
                  <Link to={`/detailspage/${offer.productID}`}>
                    <p
                      className="font-semibold text-lg hover:underline  lg:-mt-6 w-52 items-start justify-start text-center whitespace-nowrap overflow-hidden text-ellipsis"
                      title={offer.productName}
                    // onClick={() => navigate(`/detailspage/${index}`)}
                    >
                      {offer.productName}
                    </p>
                  </Link>
                  <span className="">${offer.salePrice?.toFixed(2)}</span>
                </div>

                <div className="flex  flex-col md:flex-row justify-between items-center">

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
                        {index < offer.productRating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs sm:text-sm">
                    {offer.amountInStock <= 0 ? (
                      <p className="text-red-500 font-semibold">Out Of Stock</p>
                    ) : (
                      <p className="text-green-600 rounded-lg font-semibold ">
                        In Stock - {offer.amountInStock}
                      </p>
                    )}
                  </div>

                </div>
                {/* <div className="flex justify-between mx-2">
                  <button
                    onClick={() => handleCart(offer.productID)}
                    className="items-center justify-center px-2 flex gap-1 bg-blue-900 border text-sm font-medium rounded-md text-white p-1"
                  >
                    <img src={cart} className="w-4 h-4" alt="Cart Icon" />
                    Add to cart
                  </button>
                
                </div> */}

                <div
                  className={`flex p-1 rounded-md justify-center ${offer.amountInStock <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-900 cursor-pointer"
                    }`}
                  onClick={() => {
                    if (offer.amountInStock > 0) {
                      handleCart(offer.productID); // Only call handleCart if item is in stock
                    }
                  }}
                >
                  <img
                    src={cart}
                    alt="Add to cart"
                    className={`h-6 sm:h-8 p-[6px] ${offer.amountInStock <= 0 ? "opacity-50" : ""
                      }`}
                  />
                  <button
                    className={`text-white font-semibold ${offer.amountInStock <= 0 ? "opacity-50" : ""
                      }`}
                    disabled={offer.amountInStock <= 0} // Disable the button when out of stock
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full">
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={productOffer}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OffersProducts;


