


// import React from "react";
// import email from "../assets/email.png";
// import logo from "../assets/logo_05.png";
// import { IoIosArrowUp } from "react-icons/io";


// function Footers() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
  
//   return (
//     <>
//     <div
//         className="bg-yellow-100  cursor-pointer text-blue-900 font-semibold p-3 flex justify-center items-center text-[17px]"
//         onClick={scrollToTop}
//       >
//         {" "}
//         Back To Top
//         <IoIosArrowUp className="w-8 h-6" />
//       </div>
//     <div className="text-white bg-blue-900 relative z-40">
//       <div className="flex flex-col xl:flex-row justify-center xl:gap-20 gap-8 w-full p-6 xl:p-10">
//         {/* About Us Section */}

//         <div className=" flex items-center">
//           <img src={logo} className="w-56 h-10"/>
//         </div>
//         <div className="flex flex-col xl:text-md  w-full xl:w-auto">
//           <p className="text-md font-semibold mb-4">About Us</p>
//           <p className="text-md font-thin">
//             PharmEtrade is a secure online marketplace for independent
//             pharmacies to buy, sell,
//             and bid on overstock and short date prescription drugs. Our
//             easy-to-use platform was
//             built by pharmacists with you in mind.
//           </p>
//           <p className="text-md mt-4 font-thin">
//             With pharmEtrade, take control of your inventory and put profits
//             back into your
//             pharmacy.
//           </p>
//           <p className="mt-4 text-md font-thin">
//             Ready to learn more? Schedule a{" "}
//             <a href="#" className="font-medium underline">
//               demo
//             </a>{" "}
//             or{" "}
//             <a href="#" className="font-medium underline">
//               join
//             </a>{" "}
//             today!!
//           </p>
//           <p className="mt-4 text-md font-thin">*Conditions Apply</p>
//         </div>

//         {/* Quick Links and Support & Service Sections */}
//         <div className="flex flex-col w-full xl:w-auto">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="w-full md:w-44 p-2 text-md mb-4 md:mb-0 md:mr-10">
//               <p className="text-md mb-4">Quick Links</p>
//               <ul className="list-disc list-inside">
//                 <li>
//                   <a href="#" className="underline">
//                     Seller Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     Terms & Conditions
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     FAQ
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-full md:w-44 p-2 text-md">
//               <p className="text-md mb-4">Support & Service</p>
//               <ul className="list-disc list-inside">
//                 <li>
//                   <a href="#" className="underline">
//                     Wish list
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     Compare list
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="underline">
//                     Contact US
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex flex-col mt-10 relative">
//             <h2 className="text-md mt-3">Subscribe</h2>
//             <div className="relative mt-2">
//               <input
//                 type="text"
//                 className="pl-7 h-10 w-full rounded-lg text-black"
//                 placeholder="Enter your email"
//               />
//               <img
//                 src={email}
//                 className="w-5 absolute top-1/2 transform -translate-y-1/2 left-2"
//                 alt="Email Icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Footers;


import React from "react";
import email from "../assets/email.png";
import logo from "../assets/logo_05.png";
import { IoIosArrowUp } from "react-icons/io";


function Footers() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
    <div
        className="bg-yellow-100  cursor-pointer text-blue-900 font-semibold p-3 flex justify-center items-center text-[17px]"
        onClick={scrollToTop}
      >
        {" "}
        Back To Top
        <IoIosArrowUp className="w-8 h-6" />
      </div>
    <div className="text-white bg-blue-900 relative z-40">
      <div className="flex flex-col xl:flex-row justify-center xl:gap-20 gap-8 w-full p-6 xl:p-10">
        {/* About Us Section */}

        <div className=" flex items-center">
          <img src={logo} className="w-80 h-10"/>
        </div>
        <div className="flex flex-col xl:text-md  w-full xl:w-auto">
          <p className="text-md font-semibold mb-4">About Us</p>
          <p className="text-md font-thin mt-2">
            PharmEtrade is a secure online marketplace for independent
            pharmacies to buy, sell,
            and bid on overstock and short date prescription drugs. Our
            easy-to-use platform was
            built by pharmacists with you in mind.
          </p>
          <p className="text-md mt-4 font-thin">
            With pharmEtrade, take control of your inventory and put profits
            back into your
            pharmacy.
          </p>
          <p className="mt-4 text-md font-thin">
            Ready to learn more? Schedule a{" "}
            <a href="#" className="font-medium underline">
              demo
            </a>{" "}
            or{" "}
            <a href="#" className="font-medium underline">
              join
            </a>{" "}
            today!!
          </p>
          <p className="mt-2 text-md font-thin"><span className="text-xl">*</span>Conditions Apply</p>
        </div>

        {/* Quick Links and Support & Service Sections */}
        <div className="flex flex-col w-full xl:w-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-44 p-2 text-md mb-4 md:mb-0 md:mr-10">
              <p className="text-md mb-4 font-semibold">Quick Links</p>
              <ul className="list-disc list-inside ">
                <li>
                  <a href="#" className="underline ">
                    Seller Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-44 p-2 text-md">
              <p className="text-md mb-4 font-semibold">Support & Service</p>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="underline">
                    Wish list
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Compare list
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-10 relative">
            <h2 className="text-md mt-3">Subscribe</h2>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-9 h-10 w-full rounded-lg text-black"
                placeholder="Enter your email"
              />{" "}
              <img
                src={email} 
                className="w-5 absolute top-1/2 transform -translate-y-1/2 left-2 "
                alt="Email Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footers;