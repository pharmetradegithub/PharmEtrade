// import React from "react";
// import { Link } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import nature from "../assets/img1.png";
// import other from "../assets/other.png";
// import Items from "./Items";
// import { useNavbarContext } from "./NavbarContext";
// import { useNavigate } from "react-router-dom";

// function PRight({ topMargin, addCart, wishList }) {
//   const { pop, setPop } = useNavbarContext();
//   const navigate = useNavigate();
//   const images = Array(8).fill(nature);

//   // const handleClick = (event) => {
//   //   event.stopPropagation();
//   //   console.log("Clicked to open Items");
//   //   setPop(true);
//   // };

//   const handleClose = (event) => {
//     event.stopPropagation();
//     console.log("Clicked to close Items");
//     setPop(false);
//   };

//   function handleCart(index) {
//     const prolist = {
//       id: index,
//       src: images[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     addCart(prolist);
//   }
//   function handleClick(index) {
//     alert('Add 1 item into whishlist')
//     const prolist = {
//       id: index,
//       src: images[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     wishList(prolist);
//   }

//   return (
//     <div className="w-full">
//       <div className="flex justify-around items-center">
//         <p className="w-fit p-2 border-2 bg-pro-col text-white rounded-lg">
//           Medications
//         </p>
//         <Link
//           to="/"
//           className="w-fit p-2 border-2 bg-pro-col text-white rounded-lg"
//         >
//           Home
//         </Link>
//       </div>
//       <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="w-full max-w-lg border p-2 rounded-xl"
//             // onClick={handleClick}
//           >
//             <Link to={`/detailspage/${index}  `}>
//               <div className="flex justify-center">
//                 <img
//                   src={img}
//                   alt={`nature-${index}`}
//                   className="h-48 w-36 pl-3 bg-foots rounded-lg"
//                 />
//               </div>
//             </Link>
//             <div className="w-full py-2">
//               <h2 className="text-fonts">SKU 6545555</h2>
//               <h1 className="text-fonts">$50.99</h1>
//             </div>
//             <div className="flex flex-row items-center justify-between w-full px-1">
//               <div className="text-foot text-xs">UPN member price:</div>
//               <div className="text-lg font-semibold">$45.00</div>
//             </div>
//             <ul className="flex flex-row justify-around gap-5 py-4">
//               <li>
//                 <img
//                   src={addcart}
//                   alt="Add to cart"
//                   className="size-8"
//                   onClick={() => handleCart(index)}
//                 />
//               </li>
//               <li>
//                 <img src={fav} alt="Favorite" className="size-8"
//                 onClick={()=> handleClick(index)} />
//               </li>
//               <li>
//                 <img src={other} alt="Other" className="size-8" />
//               </li>
//             </ul>
//             {pop && <Items topMargin={topMargin} onClose={handleClose} />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PRight;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import other from "../assets/other.png";
import other from "../assets/compare1_Icon.png";
import addcart from "../assets/cart1_icon.png";
import fav from "../assets/Wishlist1_icon.png";
import nature from "../assets/img1.png";
import Items from "./Items";
import next from '../assets/Next_icon.png'
import previous from '../assets/Previous_icon.png'

import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";

function PRight({ topMargin, addCart, wishList }) {
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const images = Array(115).fill(nature);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };

  function handleCart(index) {
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
  }

  function handleClick(index) {
    alert('Add 1 item into wishlist');
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    wishList(prolist);
  }

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
    <div className="w-full">
      <div className="flex justify-end ">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2"/>
        </button>
        <span className="mx-2 px-4  bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2"/>
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
        {currentItems.map((img, index) => (
          <div
            key={index + indexOfFirstItem}
            className="w-full max-w-md border p-2 rounded-xl shadow-md"
          >
            <Link to={`/detailspage/${index + indexOfFirstItem}`}>
              <div className="flex justify-center">
                <img
                  src={img}
                  alt={`nature-${index + indexOfFirstItem}`}
                  className="h-28 w-32 pl-3 bg-foots rounded-lg"
                />
              </div>
            </Link>
            <div className="w-full py-1">
              <h2 className="text-fonts">SKU 6545555</h2>
              <h1 className="text-fonts">$50.99</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-1">
              <div className="text-foot text-xs">UPN member price:</div>
              <div className="text-base font-semibold">$45.00</div>
            </div>
            <ul className="flex flex-row justify-around border bg-gray-100 border-gray-300 shadow-md rounded-xl  py-2">
              <li>
                <img
                  src={addcart}
                  alt="Add to cart"
                  className="h-8 p-[6px]"
                  onClick={() => handleCart(index + indexOfFirstItem)}
                />
              </li>
              <li>
                <img src={fav} alt="Favorite" className="h-8 p-[6px]"
                onClick={()=> handleClick(index + indexOfFirstItem)} />
              </li>
              <li>
                <img src={other} alt="Other" className="h-8 p-[6px]" />
              </li>
            </ul>
            {pop && <Items topMargin={topMargin} onClose={handleClose} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PRight;
