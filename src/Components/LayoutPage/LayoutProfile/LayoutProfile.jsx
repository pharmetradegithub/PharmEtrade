
import React from "react";
// import myaccount from 'Pharmetrade-Dev-Pharma-Etrade\src\assets\My Account.png';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import MyOrders from "../../LayoutPage/LayoutProfile/MyOrders"
// import cell from '../../../assets/telephone-call.png'
import email from '../../../assets/useremail.png'

const userInfo = [
  {
    // icon: <img src={email} className="w-4 -mt-5" />,
    label: "Email Address",
    action: "Change Email Address",
    value: "Ram@phametrade.com",
  },
  {
    // icon: <img src={cell} className="w-4 -mt-5" />,
    label: "Mobile Number",
    action: "Change Mobile Number",
    value: "667-337-8934",
  },
];

const LayoutProfile = () => {
  return (

    <div className=" w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
      <div className="w-[95%] mt-8 h-full ">
        <h2 className="text-[22px] font-semibold text-black mb-12 mx-6">
          Hello, <span className="font-light">Ram</span>
        </h2>

        <div className="relative border rounded-lg  bg-white border-gray-400 mb-4 mx-6">
          <div className="absolute -top-6 ml-8 bg-blue-900 text-white rounded-lg flex gap-2 p-3">
            {/* <img src={myaccount} className="w-6 h-6" alt="My Account" /> */}
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
                    {/* {info.action} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mx-6">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">ADDRESS BOOK</h2>
            <button className="bg-blue-900 text-white border rounded-lg px-2 py-1 text-[13px]">MANAGE ADDRESSES</button>
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
        <MyOrders />
      </div>


    </div>


  );
};

export default LayoutProfile;