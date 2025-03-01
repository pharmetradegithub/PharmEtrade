// import React from "react";

// const AccountInfo = () => {
//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-4">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-[22px] text-blue-900 font-medium">
//             Account Information
//           </h1>
//         </div>
//         <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
//           <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
//             <h2 className="">ACCOUNT INFO</h2>
//           </div>
//           <div className="flex justify-between">
//             <div>
//                 <label>First Name<span>*</span></label>
//                 <input />
//             </div>
//             <div>
//                 <label>Last Name<span>*</span></label>
//                 <input />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountInfo;

import React, { useState } from "react";

const AccountInfo = () => {
  // Sample user data (replace with actual user data handling)
  const [userData, setUserData] = useState({
    firstName: "Venkat",
    lastName: "Gollapalli",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-[22px] text-blue-900 font-semibold">
            Account Information
          </h1>
        </div>
        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">ACCOUNT INFO</h2>
          </div>

          <div className="flex justify-between mb-4">
            <div>
              <label className="font-semibold">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              />
            </div>
            <div>
              <label className=" font-semibold">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              />
            </div>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              id="changeEmail"
              name="changeEmail"
              className="mr-2"
            />
            <label htmlFor="changeEmail">Change Email</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="changePassword"
              name="changePassword"
              className="mr-2 "
            />
            <label htmlFor="changePassword">Change Password</label>
          </div>
          <div>
            <p>
              If you created this account using Amazon Pay, you might not know
              your site password.
            </p>
            <p>
              In order to reset your password, please Sign Out and click on
              “Forgot Your Password?” from the Sign In page
            </p>
          </div>
          <div className="flex justify-between my-3">
            <button className="bg-blue text-white text-[12px] px-4  h-8  font-semibold rounded-lg">SAVE</button>
            <button className="bg-blue text-white text-[12px] p-2 rounded-lg font-semibold">GO BACK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
