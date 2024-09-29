// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import filter from "../../../assets/Filter_icon.png";
// import share from '../../../assets/upload1.png'


// function LayoutPaymentHistory() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedOption, setSelectedOption] = useState("all");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedFormat, setSelectedFormat] = useState("csv");

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleExportClick = () => {
//     // Logic for exporting data based on selectedFormat
//     console.log("Exporting as", selectedFormat);
//     setDropdownOpen(false);
//   };

//   const handleCancelClick = () => {
//     setDropdownOpen(false);
//   };

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleFormatChange = (event) => {
//     setSelectedFormat(event.target.value);
//   };

//   const payouts = [
//     {
//       purchase: "12/08/2023",
//       transactionid: "988765SFGS",
//       note: "Accepted",
//       netamount: "$3.87",
//       view: "View Order",
//     },
//     {
//       purchase: "06/07/2024",
//       transactionid: "FCG5678533",
//       note: "Pending",
//       netamount: "$6.43",
//       view: "View Order",
//     },
//   ];

//   const stats = [
//     {
//       label: "Total Earnings",
//       value: "2,420",
//       text: "as of 01-December-2023",
//       color: "text-green-500",
//     },
//     {
//       label: "Pending Payments",
//       value: "3,843",
//       text: "as of 01-December-2023",
//       color: "text-blue-900",
//     },
//     { label: "Withdrawal Method", value: "1,700", text: "" },
//   ];

//   const filteredPayouts = payouts.filter(
//     (payout) =>
//       payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-8">
//         <div className="flex justify-between">
//           <h1 className="text-[22px] text-blue-900 font-semibold">Payment History</h1>
//         </div>

//         <div className="flex justify-normal flex-wrap gap-2 w-full mt-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white w-56 rounded-lg shadow-lg h-28 p-4"
//             >
//               <h1 className="text-[20px] text-gray-700 font-normal">
//                 {stat.label}
//               </h1>
//               <h1
//                 className={`text-2xl font-semibold ${
//                   stat.color || "text-gray-900"
//                 }`}
//               >
//                 {stat.value}
//               </h1>
//               <h1 className="text-[14px]">{stat.text}</h1>
//             </div>
//           ))}
//         </div>

//         <div className="w-full my-4">
//           <h2 className="text-[22px] font-semibold">Payment History</h2>
//           <div className="flex justify-between my-2">
//             <div className="flex bg-gray-100">
//               <select
//                 value={selectedOption}
//                 onChange={handleChange}
//                 className="bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
//               >
//                 <option value="all">All</option>
//                 <option value="complete">Complete</option>
//                 <option value="pending">Pending</option>
//                 <option value="rejected">Rejected</option>
//               </select>
//             </div>

//             <div className="flex gap-2">
//               <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
//                 <img src={filter} className="w-6 h-6" alt="Filter" />
//                 Filter
//               </button>
//               <select className="">
//                 <option>Columns</option>
//               </select>
//               <div className="relative">
//                 <button
//                   onClick={handleDropdownToggle}
//                   className="bg-white p-2 h-8 rounded-md flex items-center"
//                 >
//                   <img src={share} className="w-6 h-6" alt="Filter" />
//                   Export
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
//                     <div className="p-2">
//                       <label className="flex items-center">
//                         <input
//                           type="radio"
//                           value="csv"
//                           checked={selectedFormat === "csv"}
//                           onChange={handleFormatChange}
//                           className="mr-2"
//                         />
//                         CSV
//                       </label>
//                       <label className="flex items-center mt-2">
//                         <input
//                           type="radio"
//                           value="excel"
//                           checked={selectedFormat === "excel"}
//                           onChange={handleFormatChange}
//                           className="mr-2"
//                         />
//                         Excel/XML
//                       </label>
//                     </div>
//                     <div className="flex justify-end p-2  border-gray-300">
//                       <button
//                         onClick={handleCancelClick}
//                         className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         onClick={handleExportClick}
//                         className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
//                       >
//                         Export
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border text-[15px] rounded-md bg-white mt-4">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b-2">
//                 <th className="px-4 py-2 text-left">Purchase Date</th>
//                 <th className="px-4 py-2 text-left">Transaction Id</th>
//                 <th className="px-4 py-2 text-left">Note</th>
//                 <th className="px-4 py-2 text-left">Net Amount</th>
//                 <th className="px-4 py-2 text-left">View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPayouts.map((payout, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-4 py-2">{payout.purchase}</td>
//                   <td className="px-4 py-2">{payout.transactionid}</td>
//                   <td className="px-4 py-2">{payout.note}</td>
//                   <td className="px-4 py-2">{payout.netamount}</td>
//                   <td className="px-4 py-2">{payout.view}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LayoutPaymentHistory;

// // import React from 'react'

// // function LayoutPaymentHistory() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default LayoutPaymentHistory



import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import filter from "../../../assets/Filter_icon.png";
import share from '../../../assets/upload1.png'
import { useDispatch } from "react-redux";
import { fetchPaymentHistory } from "../../../Api/PaymentHistoryApi";
// import { fetchPaymentHistory } from "../../../Api/PaymentHistory";


function LayoutPaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleExportClick = () => {
    // Logic for exporting data based on selectedFormat
    console.log("Exporting as", selectedFormat);
    setDropdownOpen(false);
  };

  const handleCancelClick = () => {
    setDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const payouts = [
    {
      purchase: "12/08/2023",
      transactionid: "988765SFGS",
      note: "Accepted",
      netamount: "$3.87",
      view: "View Order",
    },
    {
      purchase: "06/07/2024",
      transactionid: "FCG5678533",
      note: "Pending",
      netamount: "$6.43",
      view: "View Order",
    },
  ];

  const stats = [
    {
      label: "Total Earnings",
      value: "2,420",
      text: "as of 01-December-2023",
      color: "text-green-500",
    },
    {
      label: "Pending Payments",
      value: "3,843",
      text: "as of 01-December-2023",
      color: "text-blue-900",
    },
    { label: "Withdrawal Method", value: "1,700", text: "" },
  ];

  const filteredPayouts = payouts.filter(
    (payout) =>
      payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchPaymentHistory())
  })

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">Payment History</h1>
        </div>

        <div className="flex justify-normal flex-wrap gap-2 w-full mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white w-56 rounded-lg shadow-lg h-28 p-4"
            >
              <h1 className="text-[20px] text-gray-700 font-normal">
                {stat.label}
              </h1>
              <h1
                className={`text-2xl font-semibold ${
                  stat.color || "text-gray-900"
                }`}
              >
                {stat.value}
              </h1>
              <h1 className="text-[14px]">{stat.text}</h1>
            </div>
          ))}
        </div>

        <div className="w-full my-4">
          <h2 className="text-[22px] font-semibold">Payment History</h2>
          <div className="flex justify-between my-2">
            <div className="flex bg-gray-100">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
                <img src={filter} className="w-6 h-6" alt="Filter" />
                Filter
              </button>
              <select className="">
                <option>Columns</option>
              </select>
              <div className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="bg-white p-2 h-8 rounded-md flex items-center"
                >
                  <img src={share} className="w-6 h-6" alt="Filter" />
                  Export
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="csv"
                          checked={selectedFormat === "csv"}
                          onChange={handleFormatChange}
                          className="mr-2"
                        />
                        CSV
                      </label>
                      <label className="flex items-center mt-2">
                        <input
                          type="radio"
                          value="excel"
                          checked={selectedFormat === "excel"}
                          onChange={handleFormatChange}
                          className="mr-2"
                        />
                        Excel/XML
                      </label>
                    </div>
                    <div className="flex justify-end p-2  border-gray-300">
                      <button
                        onClick={handleCancelClick}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleExportClick}
                        className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
                      >
                        Export
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border text-[15px] rounded-md bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">Purchase Date</th>
                <th className="px-4 py-2 text-left">Transaction Id</th>
                <th className="px-4 py-2 text-left">Note</th>
                <th className="px-4 py-2 text-left">Net Amount</th>
                <th className="px-4 py-2 text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayouts.map((payout, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{payout.purchase}</td>
                  <td className="px-4 py-2">{payout.transactionid}</td>
                  <td className="px-4 py-2">{payout.note}</td>
                  <td className="px-4 py-2">{payout.netamount}</td>
                  <td className="px-4 py-2">{payout.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LayoutPaymentHistory;

// import React from 'react'

// function LayoutPaymentHistory() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default LayoutPaymentHistory



