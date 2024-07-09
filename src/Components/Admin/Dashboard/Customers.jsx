// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa6";
// import { IoIosArrowRoundUp } from "react-icons/io";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";

// function Customers() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const customer = [
//     {
//       name: "Rama Manda",
//       email: "ram@pharmetrade",
//       contact: "7893497040",
//       address: "Haardinf Ave iselin, New Jersey",
//       total: "$9.65",
//       list: "1",
//     },
//     {
//       name: "Venkat",
//       email: "venkat@pharmetrade",
//       contact: "9908389318",
//       address: "Haardinf Ave iselin, New Jersey",
//       total: "$3.98",
//       list: "View Order",
//     },
//   ];
//   const filteredCustomers = customer.filter(
//     (customer) =>
//       customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       customer.id.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-100 w-[calc(100%-288px)] h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-8">
//         <div className="flex  justify-between ">
//           <h1 className="text-2xl text-blue-900 font-medium">Marketplace Customers </h1>

//           {/* <button className="bg-blue-900 flex  items-center text-white p-2 text-xl rounded-md">
//             {" "}
//             <FaPlus />
//             Add New Product
//           </button> */}
//         </div>

//         <div className="flex justify-evenly w-[80%] mt-8 -ml-8">
//           <div className="bg-white w-72 rounded-xl h-32 p-4">
//             <div className="flex  items-center justify-between">
//               <h1 className="text-[17px] text-gray-700 font-normal">Total Customers</h1>
//               <BsThreeDotsVertical />
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <h1 className="text-3xl font-semibold">2,420</h1>
//               <span className="bg-green-100 h-7  flex w-16 text-green-500">
//                 {" "}
//                 <IoIosArrowRoundUp />
//                 20%
//               </span>
//             </div>
//           </div>
//           <div className="bg-white w-72 rounded-xl h-32 p-4">
//             <div className="flex justify-between items-center">
//               <h1 className="text-[17px] text-gray-700 font-normal">Total Orders</h1>
//               <BsThreeDotsVertical />
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <h1 className="text-3xl font-semibold">3,843</h1>
//               <span className="bg-green-100 h-7  flex w-16 text-green-500 ">
//                 {" "}
//                 <IoIosArrowRoundUp />
//                 25%
//               </span>
//             </div>
//           </div>
//           <div className="bg-white w-72 rounded-xl h-32 p-4">
//             <div className="flex justify-between items-center">
//               <h1 className="text-[17px] text-gray-700 font-normal">Grand Total</h1>
//               <BsThreeDotsVertical />
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <h1 className="text-3xl font-semibold">1,700</h1>
//               <span className="bg-red-100 h-7  text-red-500 flex w-16">
//                 {" "}
//                 <IoIosArrowRoundDown />
//                 -11%
//               </span>
//             </div>
//           </div>
//           {/* <div className="bg-white w-72 rounded-xl h-32 p-4">
//             <div className="flex justify-between items-center">
//               <h1 className="text-[17px] text-gray-700 font-normal">Purchase Amount</h1>
//               <BsThreeDotsVertical />
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <h1 className="text-3xl font-semibold">2,530</h1>
//               <span className="bg-green-100 h-7  flex w-16 text-green-500">
//                 {" "}
//                 <IoIosArrowRoundUp />
//                 17%
//               </span>
//             </div>
//           </div> */}
//         </div>

//         <div className="flex items-center justify-between mt-8">
//           {/* search start */}
//           <div className="relative flex">
//             <input
//               type="text"
//               placeholder="Search Customers"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border rounded-xl  h-12 w-64 text-left p-2"
//             />
//             <CiSearch
//               className="
//                 absolute right-0 top-4 text-gray-400 mr-2
//                 "
//             />
//           </div>
//           {/* search end */}
//           <div className="flex">
//             <div className="flex  p-1 ">
//               <FaFilter className="m-2" />
//               {/* <button className='text-2xl'>Filter</button> */}
//             </div>
//             <div className="flex bg-white mx-4 h-11 w-48 justify-evenly border rounded-md">
//               {/* <IoMdSettings className='m-2 text-3xl' /> */}
//               {/* <label className='text-2xl mt-2'>Columns</label> */}
//               <select className="m-2">
//                 <option>-Select Group-</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="border rounded-md bg-white mt-8">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className=" border-b-2">
//                 <th className="px-4 py-2 text-left ">Customer Name</th>
//                 <th className="px-4 py-2 text-left ">Email</th>
//                 <th className="px-4 py-2 text-left ">Contact No</th>
//                 <th className="px-4 py-2 text-left ">Address</th>
//                 <th className="px-4 py-2 text-left ">Grand Total</th>
//                 <th className="px-4 py-2 text-left ">List of Orders</th>
//                 {/* <th className="px-4 py-2 text-left ">View</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {customer.map((customer, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-4 py-2 ">{customer.name}</td>
//                   <td className="px-4 py-2">{customer.email}</td>
//                   <td className="px-4 py-2">{customer.contact}</td>
//                   <td className="px-4 py-2">{customer.address}</td>
//                   <td className="px-4 py-2">{customer.total}</td>
//                   <td className="px-4 py-2">{customer.list}</td>
//                   {/* <td className="px-4 py-2">{customer.type}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Customers;


import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiSearch, CiMenuKebab } from "react-icons/ci";

function Customers() {
  const [searchQuery, setSearchQuery] = useState("");
  const customers = [
    {
      name: "Rama Manda",
      email: "ram@pharmetrade",
      contact: "7893497040",
      address: "Haardinf Ave iselin, New Jersey",
      total: "$9.65",
      list: "1",
    },
    {
      name: "Venkat",
      email: "venkat@pharmetrade",
      contact: "9908389318",
      address: "Haardinf Ave iselin, New Jersey",
      total: "$3.98",
      list: "View Order",
    },
  ];

  const stats = [
    { label: "Total Customers", value: "2,420", percentage: 20 },
    { label: "Total Orders", value: "3,843", percentage: 25 },
    { label: "Grand Total", value: "1,700", percentage: -11 },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-medium">Marketplace Customers</h1>
        </div>

        <div className="flex justify-normal flex-wrap gap-2 w-full mt-4 ">
          {stats.map((stat, index) => (
            <div key={index} 
            className="bg-white w-56 rounded-lg shadow-lg h-28 p-4">
              <div className="flex items-center justify-between">
                <h1 className="text-[15px] text-gray-700 font-normal">{stat.label}</h1>
                <BsThreeDotsVertical />
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-2xl font-semibold">{stat.value}</h1>
                <span className={`text-sm flex p-1 items-center rounded-lg ${stat.percentage > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                  {stat.percentage > 0 ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}
                  {stat.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          {/* search start */}
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Customers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl h-12 w-64 text-left p-2"
            />
            <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
          </div>
          {/* search end */}
          <div className="flex">
            <div className="flex p-1">
              <FaFilter className="m-2" />
            </div>
            <div className="flex bg-white  h-11 w-48 justify-evenly border rounded-md">
              <select className="m-2">
                <option>-Select Group-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border text-[15px] rounded-md bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Contact No</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Grand Total</th>
                <th className="px-4 py-2 text-left">List of Orders</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const rows = [];
                for (let i = 0; i < filteredCustomers.length; i++) {
                  const customer = filteredCustomers[i];
                  rows.push(
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{customer.name}</td>
                      <td className="px-4 py-2">{customer.email}</td>
                      <td className="px-4 py-2">{customer.contact}</td>
                      <td className="px-4 py-2">{customer.address}</td>
                      <td className="px-4 py-2">{customer.total}</td>
                      <td className="px-4 py-2">{customer.list}</td>
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;

