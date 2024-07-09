import React, { useState } from "react";
import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider4 from "../assets/4.png";

import bg2 from "../assets/doc.png";
import allproduct from "../assets/AllProduct.png";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import right2 from "../assets/right.png";
import Context from "./Content";
import line from "../assets/linee.png";
function Landing2() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4];
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
  return (
    <div className="2xl:ml-2 md:pt-10">
      <div className="md:w-screen md:mx-0 lg:w-screen lg:pl-2 items-center rounded-lg overflow-hidden xl:mx-0 pl-2">
        <div
          className="  md:w-screen lg:w-screen md:flex md:flex-row md:justify-center flex flex-row  rounded-xl xl:items-center "
          // style={{ width: "800vh" }}
        >
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 md:w-56 lg:w-72  xl:w-fit h-fit rounded-xl transition duration-300  ease-in-out max-w-sm flex justify-center items-center p-3 last:mr-4"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-auto  rounded-xl"
                style={{ width: "200vh" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col items-center ">
        <p className="text-text-blue text-[45px] font-semibold mt-6">
          Grow your buisness with Pharm Etrade
        </p>
        <br></br>
        <p className="text-xl font-light ">
          We understand your needs. We care about your buisness.
        </p>
        <br></br>
        <p className="text-xl font-light">
          We've designed a platform especially for you Start saving today.{" "}
        </p>
        <p>
          <img src={line} className="w-fit h-8 mt-6" />
        </p>
      </div>
      <div className="ml-24 md:flex md:gap-2 lg:items-center flex-row xl:justify-between ">
        <div
          className=" bg-yellow-50 md:w-12 lg:w-36 hover:scale-105  rounded-2xl transition duration-300 "
          style={{ width: "150vh", height: "fit-content" }}>
          <ul className="  space-y-2 xl:w-100% md:pb-6 md:text-lg xl:text-xl xl:mt-6 font-light pl-4 ">
            {texts.map((items, key) => (
              <li className="flex flex-row  text-ink items-center gap-2">
                <img src={right2} className="w-6 bg-green-500 rounded-full" />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:h-auto lg:h-auto xl:h-85vh"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "contain",
            backgroundPosition: "top ",
            backgroundRepeat: "no-repeat",
            width: "80%",
          }}
        ></div>
      </div>
      <div className="flex  justify-center ">
        <Link to="/products">
           <img
            src={allproduct}
            alt="Descriptive Alt Text"
            className="cursor-pointer w-64" // Make the image clickable
            onClick={() => setIsVisible(true)} // Change state on click
          />
        </Link>
      </div>
      {/* <Context /> */}
    </div>
  );
}

export default Landing2;


// import React, { useState } from "react";
// import slider1 from "../assets/1.png";
// import slider2 from "../assets/2.png";
// import slider3 from "../assets/3.png";
// import slider4 from "../assets/4.png";

// import bg2 from "../assets/doc.png";
// import allproduct from "../assets/AllProduct.png";
// import { Link, useNavigate } from "react-router-dom";
// import Products from "./Products";
// import right2 from "../assets/right.png";
// import Context from "./Content";
// import line from "../assets/linee.png";
// function Landing2() {
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const slides = [slider1, slider2, slider3, slider4];
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
//   return (
//     <div className="2xl:ml-2 md:pt-10">
//       <div className="md:w-screen md:mx-0 lg:w-screen lg:pl-2 items-center rounded-lg overflow-hidden xl:mx-0 pl-2">
//         <div
//           className="  md:w-screen lg:w-screen xl:w-screen md:flex md:flex-row md:justify-center flex flex-row  l:flex l:flex-row  l:gap-48 xl:gap-10  rounded-xl xl:items-center "
//           // style={{ width: "800vh" }}
//         >
//           {slides.map((item, key) => (
//             <div
//               key={key}
//               className="hover:scale-110 md:w-56 lg:w-72  xl:w-fit h-fit rounded-xl transition duration-300  ease-in-out max-w-sm flex justify-center items-center p-3 last:mr-4"
//             >
//               <img
//                 src={item}
//                 alt={`Slide ${key}`}
//                 className="h-auto  rounded-xl"
//                 style={{ width: "200vh" }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex  flex-col items-center ">
//         <p className="text-text-blue text-[45px] xl:text-4xl font-semibold mt-6">
//           Grow your buisness with Pharm Etrade
//         </p>
//         <br></br>
//         <p className="text-xl font-light xl:text-xl ">
//           We understand your needs. We care about your buisness.
//         </p>
//         <br></br>
//         <p className="text-xl font-light xl:text-xl">
//           We've designed a platform especially for you Start saving today.{" "}
//         </p>
//         <p>
//           <img src={line} className="w-fit h-8 mt-6" />
//         </p>
//       </div>
//       <div className="ml-24 md:flex md:gap-2 lg:items-center flex-row xl:justify-between ">
//         <div
//           className=" bg-yellow-50 md:w-12 lg:w-36 xl:w-1/2 p-4 rounded-2xl transition duration-300 "
//           style={{ width: "150vh", height: "fit-content" }}
//         >
//           <ul className="  space-y-2 xl:w-100% md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-light pl-4 ">
//             {texts.map((items, key) => (
//               <li className="flex flex-row  text-ink items-center gap-2">
//                 <img src={right2} className="w-6 bg-green-500 rounded-full" />
//                 {items}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex justify-center xl:w-1/2 p-4">
//           <img
//             src={bg2}
//             alt="Pharmacy"
//             className="rounded-xl object-cover max-h-full"
//           />
//         </div>
//       </div>
//       <div className="flex  justify-center ">
//         <Link to="/products">
//           <img
//             src={allproduct}
//             alt="Descriptive Alt Text"
//             className="cursor-pointer w-64" // Make the image clickable
//             onClick={() => setIsVisible(true)} // Change state on click
//           />
//         </Link>
//       </div>
//       {/* <Context /> */}
//     </div>
//   );
// }

// export default Landing2;
