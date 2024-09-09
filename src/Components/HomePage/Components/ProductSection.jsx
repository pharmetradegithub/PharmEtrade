import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";
import { addCartApi } from "../../../Api/CartApi";
import { useSelector } from "react-redux";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";

const ProductSection = ({ products, heading, path, addCart, wishList }) => {
  const [rating, setRating] = useState(0);
  const user = useSelector((state)=>state.user.user);
  const wishlist = useSelector((state)=>state.wishlist.wishlist);
  const [wishlistProductIDs, setWishlistProductIDs] = useState([]);
  //const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find((item) => item.product.productID === productID);
  //   return wishlistItem ? wishlistItem.wishListId : null; 
  // };

  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };
  const totalStars = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setWishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);

  const handleCart = async(productID) => {
    if(user==null)
    {
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

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  return (
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
      {products.length > 0 ? (
           <div className="grid grid-cols-3 grid-rows-1 gap-0  p-2">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="snap-center border rounded-sm bg-white shrink-0 m-3"
          >
            <div className="relative rounded-t-sm bg-slate-100 m-2">
              <img
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event from bubbling to parent
                  handleClick(item.productID);
                }}
                src={wishlistProductIDs.includes(item.productID) ? filledHeart : emptyHeart}
                className="absolute h-6 w-6  right-1 p-1 cursor-pointer"
                alt="Favorite Icon"
              />
              <img
                src={item.imageUrl} // Assuming item.img contains image URL
                className="h-40 cursor-pointer w-40 object-contain rounded-lg"
                onClick={() => navigate(`/detailspage/${item.productID}`)}
                alt={item.productName}
              />
              <img
                src={other}
                className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
                alt="Other Icon"
              />
            </div>
            <div className="p-2 rounded-b-lg w-40">
              <div className="flex justify-between flex-col font-medium">
                <h2 className="text-black font-bold h-16 w-36 overflow-scroll">{item.productName}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-black font-semibold">${item.salePrice}</h3>
                    <span className="text-[10px] line-through">(${item.priceName})</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center   ">
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
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
              {/* <div onClick={() => handleCart(index)}>
                <img src={addcart} className="h-7 p-1" alt="Add to Cart Icon" />
              </div> */}
              <div
                onClick={() => handleCart(item.productID)}
                className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center  cursor-pointer"
              >
                <img src={addcart} className="h-7 p-1" />
                <p className="text-white font-semibold">ADD</p>
              </div>
            </div>
          </div>
        ))}
      </div>
       ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
      
      <Link
        to={path}
        className="font-semibold hover:text-red-500 flex justify-end underline"
      >
        See all products
      </Link>
    </div>
  );
};

export default ProductSection;
