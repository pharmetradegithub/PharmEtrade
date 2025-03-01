// import React from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import EarningsChart from "../Components/EarningChart";

// const Dashboard = () => {
//   const stats = [
//     { label: "Orders", value: 2420, percentage: 20 },
//     { label: "Total Amount", value: 3843, percentage: 25 },
//     { label: "Total Earnings", value: 1700, percentage: -1 },
//     { label: "Admin Commission", value: "$2530", percentage: 17 },
//   ];

//   const data = [
//     {
//       interval: "Sep 14, 2021",
//       orders: 2,
//       totalAmount: "$20.68",
//       totalEarning: "$19.41",
//       totalDiscountAmount: "$0.00",
//       adminCommission: "$1.27",
//     },
//   ];

//   return (
//     <div className=" w-full flex justify-center items-center p-4 lg:p-8">
//       <div className="w-full h-full ">
//         <div className="flex justify-between">
//           <p className="text-[22px] text-blue-900 font-semibold mb-2">Home</p>
//         </div>
//         <div className="flex">
//         <div className=" flex flex-col h-full justify-start  my-4 gap-2 flex-wrap mt-4 w-[30%]  ">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-24 small:w-56 w-[80%] border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-lg text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
//                   <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
//                   <div
//                     className={`text-sm p-1 rounded-lg ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     }`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-[70%] flex justify-center p-2">
//           <div className="w-full bg-gray-100">
//             <EarningsChart />
//           </div>
//         </div>
//         </div>
//         <div className="p-4 text-sm">
//           <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead className="bg-blue text-white">
//               <tr>
//                 <th className="py-2 px-4 border-b">Orders</th>
//                 <th className="py-2 px-4 border-b">Total Amount</th>
//                 <th className="py-2 px-4 border-b">Total Earning</th>
//                 <th className="py-2 px-4 border-b">Total Discount Amount</th>
//                 <th className="py-2 px-4 border-b">Admin Commission</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={index}>
//                   <td className="pl-4 px-4 border-b">{item.orders}</td>
//                   <td className="pl-4 px-4 border-b">{item.totalAmount}</td>
//                   <td className="pl-4 px-4 border-b">{item.totalEarning}</td>
//                   <td className="pl-4 px-4 border-b">{item.totalDiscountAmount}</td>
//                   <td className="pl-4 px-4 border-b">{item.adminCommission}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import EarningsChart from "../Components/EarningChart";
import filter from "../../../assets/Filter_icon.png";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";

const Dashboard = () => {
  const itemsPerPage = 6;
  const data = Array(110).fill({
    interval: "Sep 14, 2021",
    orders: 2,
    totalAmount: "$20.68",
    totalEarning: "$19.41",
    totalDiscountAmount: "$0.00",
    adminCommission: "$1.27",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const stats = [
    { label: "Orders", value: 2420, percentage: 20 },
    { label: "Total Amount", value: 3843, percentage: 25 },
    { label: "Total Earnings", value: 1700, percentage: -1 },
    { label: "Admin Commission", value: "$2530", percentage: 17 },
  ];

  return (
    <div className="w-full flex justify-center items-center p-4 lg:p-8">
      <div className="w-full h-full">
        <div className="flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">Dashboard</p>
        </div>
        <div className="flex h-full justify-normal gap-2 flex-wrap my-4 p-2 w-full items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-24 mt-2 small:w-56 w-[80%] border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-lg text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="w-[40%] flex justify-center p-2">
            <div className="w-full bg-gray-100">
              <EarningsChart />
            </div>
          </div>
          <div className="p-4 text-sm w-[60%]">
            <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue text-white">
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">Orders</th>
                  <th className="py-2 px-4 border-b">Total Amount</th>
                  <th className="py-2 px-4 border-b">Total Earning</th>
                  <th className="py-2 px-4 border-b">Total Discount Amount</th>
                  <th className="py-2 px-4 border-b">Admin Commission</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className="text-left">
                    
                    <td className="pl-4 px-4 border-b">{item.orders}</td>
                    <td className="pl-4 px-4 border-b">{item.totalAmount}</td>
                    <td className="pl-4 px-4 border-b">{item.totalEarning}</td>
                    <td className="pl-4 px-4 border-b">{item.totalDiscountAmount}</td>
                    <td className="pl-4 px-4 border-b">{item.adminCommission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end my-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="mx-2 px-4 border p-2 text-white rounded-lg"
              >
                <img src={previous} className="w-2" alt="Previous" />
              </button>
              <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="mx-2 px-4 border p-2 text-white rounded-lg"
              >
                <img src={next} className="w-2" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
