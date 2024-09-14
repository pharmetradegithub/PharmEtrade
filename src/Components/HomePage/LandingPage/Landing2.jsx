// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
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
// import img1 from "../../../assets/img1.png";
// import img2 from "../../../assets/img2.png";
// import img3 from "../../../assets/img3.png";
// import img4 from "../../../assets/img4.png";
// import img5 from "../../../assets/img5.png";
// import offer1 from "../../../assets/IMG_1.jpg";
// import offer2 from "../../../assets/IMG_2.jpg";
// import offer3 from "../../../assets/IMG_3.jpg";
// import offer4 from "../../../assets/IMG_4.jpg";
// import { useSelector } from "react-redux";
// // import offer5 from "../../../assets/IMG_5.jpg";
// // import offer6 from "../../../assets/IMG_6.jpg";
// // import offer7 from "../../../assets/IMG_7.jpg";
// // import offer8 from "../../../assets/IMG_8.jpg";

// function Landing2({ wishList, addCart }) {
//   const navigate = useNavigate();
//   const slides = [slider1, slider4, slider2, slider3];
//   const newProducts = useSelector((state) => state.product.recentSoldProducts);

//   const handleClick = (index) => {
//     switch (index) {
//       case 0:
//         navigate("/products");
//         break;
//       case 1:
//         navigate("/login");
//         break;
//       case 2:
//         navigate("/layout/addproduct");
//         break;
//       case 3:
//         navigate("/bid");
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

//   // const newProducts = [
//   //   { id: 1, img: img1, name: "Nature Mask", price: "$99.00" },
//   //   { id: 2, img: img2, name: "Eco-Friendly Mask", price: "$89.00" },
//   //   { id: 3, img: img3, name: "Reusable Mask", price: "$79.00" },
//   //   { id: 4, img: img4, name: "Protective Mask", price: "$69.00" },
//   //   { id: 5, img: img5, name: "Breathable Mask", price: "$59.00" },
//   //   { id: 6, img: img1, name: "Comfy Mask", price: "$49.00" },
//   //   { id: 7, img: img2, name: "Stylish Mask", price: "$39.00" },
//   //   { id: 8, img: img3, name: "Daily Mask", price: "$29.00" },
//   //   { id: 9, img: img4, name: "Night Mask", price: "$19.00" },
//   //   { id: 10, img: img5, name: "Morning Mask", price: "$9.00" },
//   // ];

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
//       {/* <PLefts /> */}
//       {/* <div className="w-full ">
//         <div className="flex justify-around gap-6">
//           {slides.map((item, key) => (
//             <div
//               key={key}
//               className="hover:scale-110 w-fit h-fit rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
//             >
//               <img
//                 src={item}
//                 alt={`Slide ${key}`}
//                 className="h-full w-full rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div> */}

//       <div className="w-full">
//         <div className="flex justify-around gap-6">
//           {slides.map((item, key) => (
//             <div
//               key={key}
//               className="hover:scale-110 w-fit h-fit  rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
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
//         <p className=" text-[45px] mb-2 xl:text-4xl font-semibold mt-10 ">
//           Grow your business with PharmEtrade
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
//           <ul className="space-y-2 lg:w-100% font-sans  xl:w-auto xl:pr-10 md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-medium pl-4">
//             {texts.map((items, key) => (
//               <li
//                 key={key}
//                 className="flex flex-row text-blue-900 items-center gap-2"
//               >
//                 <img src={right2} className="w-6 bg-blue-900 rounded-full" />
//                 {items}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <img src={bg2} alt="Pharmacy" className="rounded-xl  object-cover" />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <img
//           src={allproduct}
//           alt="Descriptive Alt Text"
//           onClick={() => navigate("/products")}
//           className="cursor-pointer w-48 mb-8"
//         />
//       </div>
//     </div>
//   );
// }

// export default Landing2;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import offer1 from "../../../assets/IMG_1.jpg";
import offer2 from "../../../assets/IMG_2.jpg";
import offer3 from "../../../assets/IMG_3.jpg";
import offer4 from "../../../assets/IMG_4.jpg";
import { useSelector } from "react-redux";
// import offer5 from "../../../assets/IMG_5.jpg";
// import offer6 from "../../../assets/IMG_6.jpg";
// import offer7 from "../../../assets/IMG_7.jpg";
// import offer8 from "../../../assets/IMG_8.jpg";

function Landing2({ wishList, addCart }) {
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4,];
  const newProducts = useSelector((state) => state.product.recentSoldProducts);

  const handleClick = (index) => {
    switch (index) {
      case 0:
        navigate("/products");
        break;
     
      case 1:
        navigate("/layout/addproduct");
        break;
      case 2:
        navigate("/bid");
        break;
      default:
        break;
        case 3:
          navigate("/signup");
          break;
    }
  };
  const texts = [
    "Boost sales by promoting new and special products.",
    "Receive payments more quickly.",
    "Increase your profits by reducing your inventory.",
    "Utilize deals and discounts to attract pharmacies.",
    "Compare and list products with competitive prices.",
    "Save up to 60% with deals and discounts.",
    "Cashbacks and rewards.",
    "Multi-order merge shipment.",
  ];

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
      {/* <PLefts /> */}
      {/* <div className="w-full ">
        <div className="flex justify-around gap-6">
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 w-fit h-fit rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-full w-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="w-full">
        <div className="flex justify-around gap-6">
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 w-fit h-fit  rounded-xl transition duration-300 ease-in-out max-w-sm p-1"
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

      <div className="flex flex-col items-center ">
        <p className=" text-[45px] mb-2 xl:text-4xl font-semibold mt-10 ">
          Grow your business with PharmEtrade
        </p>
        <p className="text-xl mb-2 font-light text-gray-900 xl:text-xl">
          We understand your needs. We care about your business.
        </p>
        <p className="text-xl font-light xl:text-xl">
          We've designed a platform especially for you. Start saving today.
        </p>
        <p>
          <img src={line} className="w-fit h-8 mt-6" />
        </p>
      </div>
      <div className="flex items-center -mb-8 justify-evenly">
        <div
          className="bg-yellow-50 p-4 rounded-2xl transition duration-300"
          style={{ height: "fit-content" }}
        >
          <ul className="space-y-2 lg:w-100% font-sans  xl:w-auto xl:pr-10 md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-medium pl-4">
            {texts.map((items, key) => (
              <li
                key={key}
                className="flex flex-row text-blue-900 items-center gap-2"
              >
                <img src={right2} className="w-6 bg-blue-900 rounded-full" />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={bg2} alt="Pharmacy" className="rounded-xl  object-cover" />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={allproduct}
          alt="Descriptive Alt Text"
          onClick={() => navigate("/products")}
          className="cursor-pointer w-48 mb-8"
        />
      </div>
    </div>
  );
}

export default Landing2;

