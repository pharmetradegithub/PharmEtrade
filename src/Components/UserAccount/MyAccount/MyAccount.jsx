// import React from 'react';

// const MyAccount = () => {
//   const [selectedSection, setSelectedSection] = useState('details');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'details':
//         return <div>Here are your account details...</div>;
//       case 'address':
//         return <div>Here is your address information...</div>;
//       case 'delete':
//         return <div>Here you can delete your account...</div>;
//       case 'password':
//         return <div>Here you can change your password...</div>;
//       default:
//         return <div>Here are your account details...</div>;
//     }
//   };

//   return (
//     <div className=" bg-gray-100 w-full  flex justify-center font-ubuntu">
//       <div className="w-[95%]  mt-8">
//       <h2 className='text-[22px] font-semibold text-black'>Hello, <span className='font-light'>Ram</span></h2>

//       <div className='flex space-x-4 mt-4 border-b-2  text-xl font-semibold'>
//         <div
//           className={`py-2 px-4  ${selectedSection === 'details' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-white'}`}
//           onClick={() => setSelectedSection('details')}
//         >
//           Details
//         </div>
//         <div
//           className={`py-2 px-4  ${selectedSection === 'address' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
//           onClick={() => setSelectedSection('address')}
//         >
//           Address
//         </div>
//         <div
//           className={`py-2 px-4  ${selectedSection === 'delete' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
//           onClick={() => setSelectedSection('delete')}
//         >
//           Delete Account
//         </div>
//         <div
//           className={`py-2 px-4  ${selectedSection === 'password' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
//           onClick={() => setSelectedSection('password')}
//         >
//           Change Password
//         </div>
//       </div>
//       <div className='mt-4'>
//         {renderSection()}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccount;

// import React from "react";
// import myaccount from "../../assets/My Account.png";
// import { FaEnvelope, FaPhone } from "react-icons/fa";

// const MyAccount = () => {
//   return (
//     <div className=" bg-gray-100 w-full  flex justify-center font-ubuntu">
//       <div className="w-[95%]  mt-8">
//         <h2 className="text-[22px] font-semibold text-black mb-12">
//           Hello, <span className="font-light">Ram</span>
//         </h2>
//         <div className="relative border rounded-lg bg-white border-gray-400">
//           <div className="absolute -top-6 ml-8 bg-blue text-white rounded-lg  flex p-3 ">
//           <img src={myaccount} className="w-6 h-6" />
//           <button>User Id: 56683998</button>
//           </div>
//           <div className="flex justify-between mt-10 p-2">
//             <div className="flex items-center ">
//               <div>
//                 <FaEnvelope className="text-blue-500 mr-3" />
//               </div>
//               <div>
//                 <p>
//                   Email Address |{" "}
//                   <span className="text-blue-500"> Change email address</span>
//                 </p>
//                 <p>Ram@phametrade.com</p>
//               </div>
//             </div>
//             <div className="flex items-center ">
//               <div>
//                 <FaEnvelope className="text-blue-500 mr-3" />
//               </div>
//               <div>
//                 <p>
//                   Mobile Number |{" "}
//                   <span className="text-blue-500"> Change Mobile Number</span>
//                 </p>
//                 <p>667-337-8934</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccount;

import React from "react";
import myaccount from "../../../assets/My Account.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import MyOrders from "../MyOrders/MyOrders";
import cell from '../../../assets/telephone-call .png'
import email from '../../../assets/useremail.png'

const userInfo = [
  {
    icon: <img src={email} className="w-4 -mt-5" />,
    label: "Email Address",
    action: "Change Email Address",
    value: "Ram@phametrade.com",
  },
  {
    icon: <img src={cell} className="w-4 -mt-5" />,
    label: "Mobile Number",
    action: "Change Mobile Number",
    value: "667-337-8934",
  },
];

const MyAccount = () => {
  return (
    <>
    <div className=" w-full bg-slate-200 flex justify-center font-ubuntu">
      <div className="w-[95%] mt-8 ">
        <h2 className="text-[22px] font-semibold text-black mb-12">
          Hello, <span className="font-light">Ram</span>
        </h2>

        <div className="relative border rounded-lg  bg-white border-gray-400 mb-4">
          <div className="absolute -top-6 ml-8 bg-blue text-white rounded-lg flex gap-2 p-3">
            <img src={myaccount} className="w-6 h-6" alt="My Account" />
            <button>User Id: 56683998</button>
          </div>
          <div className="flex justify-between mt-10 px-2 py-4">
            {userInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <div className="px-2">{info.icon}</div>
                <div >
                  <div className="flex">
                  <p className="font-semibold">
                    {info.label} :{" "}
                   
                  </p>
                  <span className="">{info.value}</span>
                  </div>
                  <p className="text-blue-500">
                  {info.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">ADDRESS BOOK</h2>
            <button className="bg-blue text-white border rounded-lg px-2 py-1 text-[13px]">MANAGE ADDRESSES</button>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="mb-2 font-semibold">DEFAULT BILLING ADDRESS</h3>
              <p>Venkat Gollapalli</p>
              <p>Valley Pharmacy</p>
              <p>107 rt 10 E</p>
              <p>Succasunna New Jersey 07876</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">DEFAULT SHIPPING ADDRESS</h3>
              <p>Venkat Gollapalli</p>
              <p>Valley Pharmacy</p>
              <p>107 rt 10 E</p>
              <p>Succasunna New Jersey 07876</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyOrders/>
    </>
  );
};

export default MyAccount;
