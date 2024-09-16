// import React, { useState } from "react";
// // import image1 from '../../../assets/nature.png';
// import wishlist from "../assets/Wishlist1_icon.png";
// import compare from "../assets/CompareNav2.png";
// import next from "../assets/Next_icon.png";
// import previous from "../assets/Previous_icon.png";
// import cart from "../assets/cartw_icon.png";
// import image2 from "../assets/offers_1.png";
// import image3 from "../assets/offers_2.png";
// import image4 from "../assets/offers_3.png";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import emptyHeart from "../assets/Wishlist1_icon.png";
// import filledHeart from "../assets/wishlist2_icon.png";


// const offersData = [
//   {
//     image: image4,
//     discount: "50% Off",
//     title: "Nature Image",
//     price: "$280",
//   },
//   {
//     image: image2,
//     discount: "50% Off",
//     title: "Nature Image",
//     price: "$280",
//   },
//   {
//     image: image3,
//     discount: "30% Off",
//     title: "Nature Image 2",
//     price: "$300",
//   },
//   {
//     image: image4,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image2,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image3,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image4,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image2,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image3,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   {
//     image: image4,
//     discount: "10% Off",
//     title: "Nature Image 3",
//     price: "$500",
//   },
//   // Additional offers can be added here...
// ];

// const Offers = ({ topMargin, addCart, wishList }) => {
//   const itemsPerPage = 10;
//   // const images = Array(115).fill(image1);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   const navigate = useNavigate();

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = offersData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(offersData.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleCart = (index) => {
//     console.log("Adding to cart:", index);
//     const prolist = {
//       id: index,
//       // src: images[index],
//       // price: "$50.99",
//       src: offersData[index].image,
//       price: offersData[index].price,
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     addCart(prolist);
//   };

//   const handleClick = (index) => {
//     setFavoriteItems((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//     const prolist = {
//       id: index,
//       // src: images[index],
//       // price: "$50.99",
//       src: offersData[index].image,
//       price: offersData[index].price,
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     wishList(prolist);
//   };

//   return (
//     <div
//       className=" w-full flex flex-col justify-center items-center overflow-y-auto  bg-gray-200"
//       style={{
//         marginTop: `${topMargin}px`,
//       }}
//     >
//       <div className="w-full h-full bg-gray-200 mb-5 mt-8">
//         <div className="h-full p-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
//             {currentItems.map((offer, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col border rounded-lg w-60 h-80 bg-white"
//               >
//                 <div className="flex justify-between">
//                   <div className="flex flex-row justify-center text-center  bg-yellow-300 w-20 rounded-l-xl rounded-b-full pb-8">
//                     <p className="pb-3 mt-3 text-black font-semibold">
//                       {offer.discount}
//                     </p>
//                   </div>
//                   <div className="m-3">
//                     <img
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevent event from bubbling to parent
//                         handleClick(index);
//                       }}
//                       src={favoriteItems[index] ? filledHeart : emptyHeart}
//                       className=" h-5 w-5 cursor-pointer"
//                       alt="Favorite Icon"
//                     />
//                   </div>
//                 </div>
//                 <div  className="flex justify-center items-center -mt-5 ">
//                   <img src={offer.image} className="w-60 h-40 hover:cursor-pointer"  onClick={() => navigate(`/detailspage/${index}`)}/>
//                 </div>
//                 <div className="flex justify-center flex-col items-center mb-1">
//                   <p className="font-semibold text-xl">{offer.title}</p>
//                   <span className="">{offer.price}</span>
//                 </div>
//                 <div className="flex justify-between mx-2">
//                   <button
//                     onClick={() => handleCart(index)}
//                     className=" items-center justify-center px-2 flex gap-1 bg-blue-900 border text-sm font-medium rounded-md text-white p-1"
//                   >
//                     <img src={cart} className="w-4 h-4" />
//                     Add to cart
//                   </button>
//                   <div className="flex gap-2 ">
//                     <img src={compare} className="w-5 h-5" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end my-2">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={previous} className="w-2" />
//         </button>
//         <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={next} className="w-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Offers;



import React, { useEffect, useState } from "react";
import wishlist from "../assets/Wishlist1_icon.png";
import compare from "../assets/CompareNav2.png";
import next from "../assets/Next_icon.png";
import previous from "../assets/Previous_icon.png";
import cart from "../assets/cartw_icon.png";
import emptyHeart from "../assets/Wishlist1_icon.png";
import filledHeart from "../assets/wishlist2_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductOffer } from "../Api/ProductApi";

const Offers = ({ topMargin, addCart, wishList }) => {
  const itemsPerPage = 10;

  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  
  const productOffer = useSelector((state) => state.product.getProductSpecialOffer);

  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil((productOffer?.length || 0) / itemsPerPage);

  
  useEffect(() => {
    if (productOffer) {
      setCurrentItems(productOffer.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [productOffer, indexOfFirstItem, indexOfLastItem]);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleCart = (index) => {
    console.log("Adding to cart:", index);
    const prolist = {
      id: index,
      src: productOffer[index].productGallery.imageUrl,
      price: productOffer[index].salePrice,
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
  };

  const handleClick = (index) => {
    setFavoriteItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    const prolist = {
      id: index,
      src: productOffer[index].productGallery.imageUrl,
      price: productOffer[index].salePrice,
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    wishList(prolist);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center overflow-y-auto bg-gray-200"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="w-full h-full bg-gray-200 mb-5 mt-8">
        <div className="h-full p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {currentItems.map((offer, index) => (
              <div
                key={index}
                className="flex flex-col border rounded-lg w-60 h-80 bg-white"
              >
                <div className="flex justify-between">
                  <div className="flex flex-row justify-center text-center bg-yellow-300 w-20 rounded-l-xl rounded-b-full pb-8">
                    <p className="pb-3 mt-3 text-black font-semibold">
                      {offer.discount}% Off
                    </p>
                  </div>
                  <div className="m-3">
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(index);
                      }}
                      src={favoriteItems[index] ? filledHeart : emptyHeart}
                      className="h-5 w-5 cursor-pointer"
                      alt="Favorite Icon"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center -mt-5">
                  <Link to={`/detailspage/${offer.productID}`}>
                    <img
                      src={offer.productGallery.imageUrl}
                      className="w-60 h-40 hover:cursor-pointer p-6"
                      alt={offer.productName}
                    />
                  </Link>
                </div>
                <div className="flex justify-center flex-col items-center mb-1 cursor-pointer">
                  <p
                    className="font-semibold text-lg hover:underline w-52 items-start justify-start text-center whitespace-nowrap overflow-hidden text-ellipsis"
                    title={offer.productName}
                    onClick={() => navigate(`/detailspage/${index}`)}
                  >
                    {offer.productName}
                  </p>
                  <span className="">${offer.salePrice}</span>
                </div>
                <div className="flex justify-between mx-2">
                  <button
                    onClick={() => handleCart(index)}
                    className="items-center justify-center px-2 flex gap-1 bg-blue-900 border text-sm font-medium rounded-md text-white p-1"
                  >
                    <img src={cart} className="w-4 h-4" alt="Cart Icon" />
                    Add to cart
                  </button>
                  <div className="flex gap-2">
                    <img src={compare} className="w-5 h-5" alt="Compare Icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" alt="Previous Page" />
        </button>
        <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" alt="Next Page" />
        </button>
      </div>
    </div>
  );
};

export default Offers;
