// import React, {useState} from "react";

// const ManageShipping = () => {

//   const [fedexChecked, setFedexChecked] = useState(true);
//   const [upsChecked, setUpsChecked] = useState(true);

//   const handleFedexChange = () => {
//     setFedexChecked(!fedexChecked);
//   };

//   const handleUpsChange = () => {
//     setUpsChecked(!upsChecked);
//   };
//   return (
//     <div className=" w-[calc(100%-288px)] h-full justify-center flex items-center">
//       <div className="w-[95%]  h-full">
//         <div className="  flex flex-col my-8">
//           <h1 className="text-[22px] text-blue-900 font-semibold ">
//             Multiship Shipping
//           </h1>
//         </div>
//         <div className="w-full flex justify-between">
//           <h2 className=" text-[22px] text-gray-600 font-semibold">
//             {" "}
//             Allowed Shipping
//           </h2>
//           <button
//             className="border rounded-full w-24 bg-blue text-white h-9"
//           >
//             SAVE
//           </button>
//         </div>
//         <div>
//       <label>
//         <input
//           type="checkbox"
//           className="mr-1"
//           checked={fedexChecked}
//           onChange={handleFedexChange}
//         />
//         FedEx Express
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           className="mr-1"
//           checked={upsChecked}
//           onChange={handleUpsChange}
//         />
//         UPS Shipping
//       </label>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default ManageShipping;


import React, { useState } from "react";

const ManageShipping = () => {
  const [fedexChecked, setFedexChecked] = useState(true);
  const [upsChecked, setUpsChecked] = useState(true);
  const [message, setMessage] = useState("");

  const handleFedexChange = () => {
    setFedexChecked(!fedexChecked);
  };

  const handleUpsChange = () => {
    setUpsChecked(!upsChecked);
  };

  const handleSave = () => {
    if (!fedexChecked && !upsChecked) {
      setMessage("Error: Please select at least one shipping option.");
    } else {
      setMessage("Success: Shipping details are filled.");
    }
  };

  return (
    <div className="w-full h-full justify-center flex items-center">
      <div className="w-[95%] h-full">
      {message && (
          <div
            className={`mt-4 p-2 ${message.startsWith("Error") ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"} rounded`}
          >
            {message}
          </div>
        )}
        <div className="flex flex-col my-8">
          <h1 className="text-[22px] text-blue-900 font-semibold">
            Multiship Shipping
          </h1>
        </div>
        <div className="w-full flex justify-between">
          <h2 className="text-[22px] text-gray-600 font-semibold">
            Allowed Shipping
          </h2>
          <button
            className="border rounded-lg p-2 px-4 flex  justify-center items-center font-bold bg-blue text-white h-8"
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
        <div>
          <label>
          <input
              type="checkbox"
              className="mr-1 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              checked={fedexChecked}
              onChange={handleUpsChange}
            />
            FedEx Express
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="mr-1 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              checked={upsChecked}
              onChange={handleUpsChange}
            />
            UPS Shipping
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default ManageShipping;
