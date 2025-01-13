// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import PLefts from "../../PLefts";
// import OfferSlider from "../Components/OfferSlider";
// import ProductSlider from "../Components/ProductSlider";

// import slider1 from "../../../assets/S1.jpg";
// import slider2 from "../../../assets/S2.jpg";
// import slider3 from "../../../assets/S3.jpg";
// import slider4 from "../../../assets/S4.jpg";
// import bg2 from "../../../assets/doc.png";
// import allproduct from "../../../assets/Products.png";
// import right2 from "../../../assets/right.png";
// import line from "../../../assets/linee.png";
// import offer1 from "../../../assets/IMG_1.jpg";
// import offer2 from "../../../assets/IMG_2.jpg";
// import offer3 from "../../../assets/IMG_3.jpg";
// import offer4 from "../../../assets/IMG_4.jpg";

// function Landing2({ wishList, addCart }) {
//   const navigate = useNavigate();
//   const slides = [slider1, slider2, slider3, slider4];
//   const newProducts = useSelector((state) => state.product.recentSoldProducts);
//   const isLoggedIn = useSelector((state) => state.user.user);

//   const handleClick = (index) => {
//     switch (index) {
//       case 0:
//         isLoggedIn ? navigate("/layout/layoutbuy") : navigate("/login");
//         break;

//       case 1:
//         isLoggedIn ? navigate("/layout/addproduct") : navigate("/login");
//         break;

//       case 2:
//         isLoggedIn ? navigate("/bid") : navigate("/login");
//         break;

//       case 3:
//         navigate("/signup");
//         break;

//       default:
//         break;
//     }
//   };

//   const texts = [
//     "Boost sales by promoting new and special products.",
//     "Receive payments more quickly.",
//     "Increase your profits by reducing your inventory.",
//     "Utilize deals and discounts to attract pharmacies.",
//     "Compare and list products with competitive prices.",
//     "Save up to 60% with deals and discounts.",
//     "Cashbacks and rewards.",
//     "Multi-order merge shipment.",
//   ];

//   const screens = [
//     offer1,
//     offer2,
//     offer3,
//     offer4,
//     offer2,
//     offer3,
//     offer4,
//     offer1,
//   ];

//   return (
//     <div className="pt-6 w-full">
//       <div className="w-full">
//         <div className="flex justify-around gap-6">
//           {slides.map((item, key) => (
//             <div
//               key={key}
//               className="hover:scale-110 w-fit h-fit rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
//               onClick={() => handleClick(key)}
//             >
//               <img
//                 src={item}
//                 alt={`Slide ${key}`}
//                 className="h-full w-full rounded-xl hover:cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6">
//         <OfferSlider images={screens} Title={"Special Offers"} />
//       </div>
//       <div>
//         {newProducts && (
//           <ProductSlider
//             addCart={addCart}
//             wishList={wishList}
//             Title={"Recent Sold Products"}
//             data={newProducts}
//           />
//         )}
//       </div>

//       <div className="flex flex-col items-center ">
//         <p className="text-[45px] mb-2 xl:text-4xl font-semibold mt-10 ">
//          Grow your business with PharmEtrade
//         </p>
//         <p className="text-xl mb-2 font-light text-gray-900 xl:text-xl">
//           We understand your needs. We care about your business.
//         </p>
//         <p className="text-xl font-light xl:text-xl">
//           We've designed a platform especially for you. Start saving today.
//         </p>
//         <p>
//           <img src={line} className="w-fit h-8 mt-6" />
//         </p>
//       </div>
//       <div className="flex items-center -mb-8 justify-evenly">
//         <div
//           className="bg-yellow-50 p-4 rounded-2xl transition duration-300"
//           style={{ height: "fit-content" }}
//         >
//           <ul className="space-y-2 lg:w-100% font-sans xl:w-auto xl:pr-10 md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-medium pl-4">
//             {texts.map((item, key) => (
//               <li key={key} className="flex flex-row text-blue-900 items-center gap-2">
//                 <img src={right2} className="w-6 bg-blue-900 rounded-full" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <img src={bg2} alt="Pharmacy" className="rounded-xl object-cover" />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <img
//           src={allproduct}
//           alt="Descriptive Alt Text"
//           onClick={() => navigate("/allProducts")}
//           className="cursor-pointer w-48 mb-8"
//         />
//       </div>
//     </div>
//   );
// }

// export default Landing2;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PLefts from "../../PLefts";
import OfferSlider from "../Components/OfferSlider";
import ProductSlider from "../Components/ProductSlider";

import slider1 from "../../../assets/S1.jpg";
import slider2 from "../../../assets/S2.jpg";
import slider3 from "../../../assets/S3.jpg";
import slider4 from "../../../assets/S4.jpg";
import bg2 from "../../../assets/doc.png";
import allproduct from "../../../assets/Products.png";
import right2 from "../../../assets/right.png";
import line from "../../../assets/linee.png";
import offer1 from "../../../assets/IMG_1.jpg";
import offer2 from "../../../assets/IMG_2.jpg";
import offer3 from "../../../assets/IMG_3.jpg";
import offer4 from "../../../assets/IMG_4.jpg";

function Landing2({ wishList, addCart }) {
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4];
  const newProducts = useSelector((state) => state.product.recentSoldProducts);
  const isLoggedIn = useSelector((state) => state.user.user);

  const handleClick = (index) => {
    switch (index) {
      case 0:
        isLoggedIn ? navigate("/layout/layoutbuy") : navigate("/login");
        break;

      case 1:
        isLoggedIn ? navigate("/layout/addproduct") : navigate("/login");
        break;

      case 2:
        isLoggedIn ? navigate("/bid") : navigate("/login");
        break;

      case 3:
        isLoggedIn ? null : navigate("/signup");
        break;

      default:
        break;
    }
  };

  const texts = [
    // "Boost sales by promoting new and special products.",
    "Buyers and Sellers thoroughly vetted",
    // "Receive payments more quickly.",
    "No registration fees",
    // "Increase your profits by reducing your inventory.",
    "Easily browse and compare pricing",
    // "Utilize deals and discounts to attract pharmacies.",
    "Shop worry free in our secure platform",
    // "Compare and list products with competitive prices.",
    "No hidden costs",
    // "Save up to 60% with deals and discounts.",
    "Name your price with our bid feature",
    // "Cashbacks and rewards.",
    "Shop 24/7/365 from anywhere",
    // "Multi-order merge shipment.",
    "Increase your cash flow",
  ];

  const screens = [
    offer1,
    offer2,
    offer3,
    offer4,
    offer2,
    offer3,
    offer4,
    offer1,
  ];

  return (
    <div className="pt-6 w-full">
      {/* <div className="w-full">
      <div className="flex justify-around flex-col sm:flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6">
      
      {slides.map((item, key) => (
    <div
      key={key}
      className="hover:scale-110 sm:w-1/2 md:w-2/3 xl:w-1/4 w-fit h-fit rounded-xl md:mx-20 md:px-10 transition duration-300 ease-in-out max-w-sm p-1"
      onClick={() => handleClick(key)}
    >
      <img
        src={item}
        alt={`Slide ${key}`}
        className="h-full w-full rounded-xl hover:cursor-pointer"
      />
    </div>
  ))}
</div>

      </div> */}

<div className="w-full">
  <div className="flex flex-col sm:flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row justify-around gap-6">
    {slides.map((item, key) => (
      <div
        key={key}
        className="hover:scale-110 w-full sm:w-full md:w-full items-center justify-center  lg:w-1/4 h-auto rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
        onClick={() => (item === slider4 && isLoggedIn ? null : handleClick(key))}
      >
        <img
          src={item}
          alt={`Slide ${key}`}
          className={`h-auto w-full md:items-center md:justify-center md:min-ml-10 rounded-xl ${item === slider4 && isLoggedIn
              ? "cursor-not-allowed" // Disallow cursor for slider4 when logged in
              : "hover:cursor-pointer" // Default hover cursor
            }`}
        />
      </div>
    ))}
  </div>
</div>



      <div className="mt-6">
        <OfferSlider images={screens} Title={"Special Offers"} />
      </div>
      <div>
        {newProducts && (
          <ProductSlider
            addCart={addCart}
            wishList={wishList}
            Title={"Recent Sold Products"}
            data={newProducts}
          />
        )}
      </div>

      <div className="flex flex-col items-center text-center ">
        <p className="text-[45px] mb-2 xl:text-4xl font-semibold mt-10 ">
          Grow your business with PharmEtrade
        </p>
        {/* <p className="text-xl mb-2 font-light text-gray-900 xl:text-xl">
          We understand your needs. We care about your business.
        </p> */}
        {/* <p className="text-xl font-light xl:text-xl">
          We've designed a platform especially for you. Start saving today.
        </p> */}
        <p>
          <img src={line} className="w-fit h-8 mt-6" />
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-evenly gap-6 -mb-8">
  <div
    className="bg-yellow-50 p-4 rounded-2xl transition duration-300"
    style={{ height: "fit-content" }}
  >
    <ul className="space-y-2 lg:w-full font-sans sm:text-base sm:pb-2 xl:w-auto xl:pr-10 md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-medium pl-4">
      {texts.map((item, key) => (
        <li key={key} className="flex flex-row text-blue-900 items-center gap-2">
          <img src={right2} className="w-6 bg-blue-900 rounded-full" alt="icon" />
          {item}
        </li>
      ))}
    </ul>
  </div>

  <div>
    <img src={bg2} alt="Pharmacy" className="rounded-xl object-cover" />
  </div>
</div>


      <div className="flex justify-center mt-3">
        <img
          src={allproduct}
          alt="Descriptive Alt Text"
          onClick={() => navigate("/allProducts")}
          className="cursor-pointer w-48 mb-8"
        />
      </div>
    </div>
  );
}

export default Landing2;

