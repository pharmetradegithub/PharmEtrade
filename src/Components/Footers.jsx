// import React from "react";
// import email from "../assets/email.png";

// function Footers() {
//   return (
//     <div className="text-white bg-blue-900 relative z-40">
//       <div
//         className=" flex  justify-center gap-32 w-full p-10"
//         style={{ alignItems: "center" }}
//       >
//         {/* About Us Section */}
//         <div className="flex flex-col w-fit mr-18">
//           <p className="text-sm font-semibold mb-4">About Us</p>
//           <p className="text-md font-thin w-fit ">
//             PharmEtrade is a secure online marketplace for independent
//             pharmacies to buy, sell,<br></br>
//             and bid on overstock and short date prescription drugs. Our
//             easy-to-use platform was<br></br>
//             built by pharmacists with you in mind. <br></br>
//           </p>
//           <p className="text-md mt-4 font-thin">
//             With pharmEtrade, take control of your inventory and put profits
//             back into your<br></br>
//             pharmacy.
//           </p>
//           <p className="mt-4 text-md w-fit font-thin">
//             Ready to learn more? Schedule a{" "}
//             <a href="#" className="text-whitefont-medium underline">
//               demo
//             </a>{" "}
//             or{" "}
//             <a href="#" className="text-blue-900 font-medium underline">
//               join
//             </a>{" "}
//             today!!
//           </p>
//           <p className="mt-4 text-md w-fit font-thin">*Conditions Apply</p>
//         </div>

//         {/* Quick Links and Support & Service Sections */}
//         <div className="flex flex-col ">
//           <div className="flex flex-row  gap-20 items-center">
//             <div className="mr-8 text-md">
//               <p className="text-md mb-4">Quick Links</p>
//               <ul className=" list-disc list-inside">
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
//             <div className="mr-10 text-md">
//               <p className="text-md mb-4">Support & Service</p>
//               <ul className="list-disc list-inside ">
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
//           <div className=" flex flex-col mt-14 relative">
//             <h2 className="text-md mt-3">Subscribe </h2>
//             <input
//               type="text"
//               className="pl-7 mt-2 h-10 rounded-lg text-black"
//               placeholder="enter your mail id"
//             />
//             <img src={email} className="w-5 absolute top-14 left-1 " />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footers;

import React from "react";
import email from "../assets/email.png";

function Footers() {
  return (
    <div className="text-white bg-blue-900 relative z-40">
      <div
        className=" flex  justify-center xl:gap-80 gap-32 w-full p-10"
        style={{ alignItems: "center" }}
      >
        {/* About Us Section */}
        <div className="flex flex-col xl:text-xl w-fit mr-18">
          <p className="text-sm font-semibold mb-4">About Us</p>
          <p className="text-md font-thin w-fit ">
            PharmEtrade is a secure online marketplace for independent
            pharmacies to buy, sell,<br></br>
            and bid on overstock and short date prescription drugs. Our
            easy-to-use platform was<br></br>
            built by pharmacists with you in mind. <br></br>
          </p>
          <p className="text-md mt-4 font-thin">
            With pharmEtrade, take control of your inventory and put profits
            back into your<br></br>
            pharmacy.
          </p>
          <p className="mt-4 text-md w-fit font-thin">
            Ready to learn more? Schedule a{" "}
            <a href="#" className="text-blue-900 font-medium underline">
              demo
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-900 font-medium underline">
              join
            </a>{" "}
            today!!
          </p>
          <p className="mt-4 text-md w-fit font-thin">*Conditions Apply</p>
        </div>

        {/* Quick Links and Support & Service Sections */}
        <div className="flex flex-col ">
          <div className="flex flex-row  gap-20 items-center">
            <div className="mr-8 text-md">
              <p className="text-md mb-4">Quick Links</p>
              <ul className=" list-disc list-inside">
                <li>
                  <a href="#" className="underline">
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
            <div className="mr-10 text-md">
              <p className="text-md mb-4">Support & Service</p>
              <ul className="list-disc list-inside ">
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
          <div className=" flex flex-col mt-14 relative">
            <h2 className="text-md mt-3">Subscribe </h2>
            <input
              type="text"
              className="pl-7 mt-2 h-10 rounded-lg text-black"
              placeholder="enter your mail id"
            />
            <img src={email} className="w-5 absolute top-14 left-1 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;