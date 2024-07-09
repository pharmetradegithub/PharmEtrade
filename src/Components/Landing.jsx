import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import BackgroundImage from "../assets/Icons/banner-12 1.png";
import PLefts from "./PLefts";
import { useState, useEffect, useRef } from "react";
import Footers from "./Footers";
import Landing2 from "./Landing2";
import Product from "./Product";
import Sliders from "./Sliders";
function Landing({ topMargin }) {
  return (
    <div className=" h-fit w-screen">
      <PLefts />
      <div className="h-fit  xl:w-full">
        <div
          className=" xl:w-screen md:w-full md:h-fit background-animation"
          style={{
            // backgroundImage: `url(${BackgroundImage})`,
            // backgroundPosition: "center top",
            // backgroundRepeat: "no-repeat",
            // width: "100%",
            // height: "80vh",
            marginTop: `${topMargin}px`,
          }}
        >
          <p className="text-left md:pt-6 lg:pt-14 md:ml-20  lg:ml-36 lg:text-4xl text-white w-fit">
            <div className="-mt-4 bounce-in-top overflow-hidden">
              <span className="text-4xl  text-white  font-extralight">
                Your{" "}
              </span>
              <br></br>
            </div>
            <div className="my-2 bounce-in-top">
              <span className="font-semibold text-white mb-3 text-3xl">
                Trusted Online
              </span>
              <br></br>
            </div>
            <div className="mb-2 bounce-in-top">
              <span className="font-semibold text-white mt-5 text-3xl">
                {" "}
                Market Place
              </span>
              <br></br>
            </div>
            <div>
              <p className="font-extralight text-[26px] bounce-in-top text-white mb-2">
                to <span className="font-medium ">Buy</span>,
                <span className="font-medium">SELL</span> and{" "}
                <span className="font-medium">Bid</span> on{" "}
                <span className=" font-medium ">Overstock</span>&{" "}
              </p>
            </div>
            <p className="text-white text-[26px]  bounce-in-top font-light">
              Short Date Prescription Medications
            </p>
          </p>
        </div>
        <Landing2 />
        <Sliders />
        <Footers />
      </div>
    </div>
  );
}

export default Landing;



//import React from "react";
// import { useNavigate } from "react-router-dom";
// import Nav from "./Nav";
// import BackgroundImage from "../assets/Icons/banner-12 1.png";
// import PLefts from "./PLefts";
// import { useState, useEffect, useRef } from "react";
// import Footers from "./Footers";
// import Landing2 from "./Landing2";
// import Product from "./Product";
// import Sliders from "./Sliders";
// function Landing({ topMargin }) {
//   return (
//     <div className=" h-fit w-screen">
//       <PLefts />
//       <div className="h-fit  xl:w-full">
//         <div
//           className=" xl:w-screen md:w-full md:h-fit  background-animation"
//           style={{
//             // backgroundImage: `url(${BackgroundImage})`,
//             // backgroundPosition: "center top",
//             // backgroundRepeat: "no-repeat",
//             // width: "100%",
//             // height: "80vh",
//             marginTop: `${topMargin}px`,
//           }}
//         >
//           <p className="text-left md:pt-6 lg:pt-14 md:ml-20  lg:ml-36 lg:text-4xl text-white w-fit">
//             <div className="-mt-4 bounce-in-top overflow-hidden">
//               <span className="text-4xl  text-white  font-extralight">
//                 Your{" "}
//               </span>
//               <br></br>
//             </div>
//             <div className="my-2 bounce-in-top">
//               <span className="font-semibold text-white mb-3 text-3xl">
//                 Trusted Online
//               </span>
//               <br></br>
//             </div>
//             <div className="mb-2 bounce-in-top">
//               <span className="font-semibold text-white mt-5 text-3xl">
//                 {" "}
//                 Market Place
//               </span>
//               <br></br>
//             </div>
//             <div>
//               <p className="font-extralight text-[26px] bounce-in-top text-white mb-2">
//                 to <span className="font-medium ">Buy</span>,
//                 <span className="font-medium">SELL</span> and{" "}
//                 <span className="font-medium">Bid</span> on{" "}
//                 <span className=" font-medium ">Overstock</span>&{" "}
//               </p>
//             </div>
//             <p className="text-white text-[26px]  bounce-in-top font-light">
//               Short Date Prescription Medications
//             </p>
//           </p>
//         </div>
//         <Landing2 />
//         <Sliders />
//         <Footers />
//       </div>
//     </div>
//   );
// }

// export default Landing;