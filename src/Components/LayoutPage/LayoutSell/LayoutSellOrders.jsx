// // import React, { useState } from "react";
// // import { FaFilter } from "react-icons/fa";
// // import { IoMdSettings } from "react-icons/io";
// // import { BsThreeDotsVertical } from "react-icons/bs";
// // import { FaPlus } from "react-icons/fa6";
// // import { IoIosArrowRoundUp } from "react-icons/io";
// // import { IoIosArrowRoundDown } from "react-icons/io";
// // import { CiSearch, CiMenuKebab } from "react-icons/ci";
// // import filter from "../../../assets/Filter_icon.png";


// // function LayoutSellOrders() {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const products = [
// //     {
// //       id: "000",
// //       thumbnail: "D061D23",
// //       name: "Generic Medicine",
// //       attributeSet: "350",
// //       productStatus: "",
// //       status: "",
// //       type: "View Order",
// //     },
// //     {
// //       id: "001",
// //       thumbnail: "D061D23",
// //       name: "Another Medicine",
// //       attributeSet: "250",
// //       productStatus: "",
// //       status: "",
// //       type: "View Order",
// //     },
// //   ];

// //   const stats = [
// //     { label: "Total Orders", value: "2,420", percentage: 20 },
// //     { label: "Total Products", value: "3,843", percentage: 25 },
// //     { label: "Base Amount", value: "1,700", percentage: -11 },
// //     { label: "Purchase Amount", value: "2,530", percentage: 17 },
// //   ];

// //   const filteredProducts = products.filter(
// //     (product) =>
// //       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       product.id.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
// //       <div className="w-[95%] h-full mt-4">
// //         <div className="flex justify-between">
// //           <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
// //           {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
// //             <FaPlus /> Add New Product
// //           </button> */}
// //         </div>

// //         <div className="flex flex-wrap my-4 gap-2 -ml-8 justify-normal items-center p-4">
// //           {stats.map((stat, index) => (
// //             <div
// //               key={index}
// //               className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
// //             >
// //               <div className="w-full">
// //                 <div className="flex justify-between items-center">
// //                   <div className="text-[15px] text-gray-700 font-normal">
// //                     {stat.label}
// //                   </div>
// //                   <div className="menu-icon">
// //                     <CiMenuKebab />
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-between mt-2 items-center">
// //                   <div className="text-2xl font-semibold">{stat.value}</div>
// //                   <div
// //                     className={`text-sm ${
// //                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
// //                     } p-1 rounded-lg`}
// //                   >
// //                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="flex items-center justify-between mt-6">
// //           {/* search start */}
// //           <div className="relative flex">
// //             <input
// //               type="text"
// //               placeholder="Search Product"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="border rounded-xl h-12 w-64 text-left px-2"
// //             />
// //             <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
// //           </div>
// //           {/* search end */}
// //           <div className="flex gap-2">
// //             <div className="flex  ">
// //             <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
// //               <img src={filter} className="w-6 h-6" />
// //               Filter
// //             </button>
// //               {/* <FaFilter className="m-2" /> */}
// //               {/* <button className='text-2xl'>Filter</button> */}
// //             </div>
// //             <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
// //               <select className="">
// //                 <option>-Select Group-</option>
// //               </select>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="border rounded-md text-[15px] bg-white mt-4">
// //           <table className="w-full">
// //             <thead className="bg-blue-900 text-white">
// //               <tr className="border-b-2">
// //                 <th className="px-4 py-2 text-left">Order ID</th>
// //                 <th className="px-4 py-2 text-left">Purchased On</th>
// //                 <th className="px-4 py-2 text-left">Products</th>
// //                 <th className="px-4 py-2 text-left">Total</th>
// //                 <th className="px-4 py-2 text-left">Customer</th>
// //                 <th className="px-4 py-2 text-left">Status</th>
// //                 <th className="px-4 py-2 text-left">View</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {(() => {
// //                 const rows = [];
// //                 for (let i = 0; i < filteredProducts.length; i++) {
// //                   rows.push(
// //                     <tr key={i} className="border-b">
// //                       <td className="px-4 py-2">{filteredProducts[i].id}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].thumbnail}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].name}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].attributeSet}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].productStatus}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].status}</td>
// //                       <td className="px-4 py-2">{filteredProducts[i].type}</td>
// //                     </tr>
// //                   );
// //                 }
// //                 return rows;
// //               })()}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LayoutSellOrders;


// import React, { useEffect, useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa6";
// import { IoIosArrowRoundUp } from "react-icons/io";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import { CiSearch, CiMenuKebab } from "react-icons/ci";
// import filter from "../../../assets/Filter_icon.png";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGetOrderBySellerId } from "../../../Api/OrderApi";


// function LayoutSellOrders() {
//   const dispatch = useDispatch()
//   const user = useSelector((state) => state.user.user);
//   const [searchQuery, setSearchQuery] = useState("");
//   const SellerOrder = useSelector((state) => state.order.OrderBySellerId)
//   console.log("sellerOrder---->", SellerOrder)
//   const localData = localStorage.getItem("userId")
//   const products = [
//     {
//       id: "000",
//       thumbnail: "D061D23",
//       name: "Generic Medicine",
//       attributeSet: "350",
//       productStatus: "",
//       status: "",
//       type: "View Order",
//     },
//     {
//       id: "001",
//       thumbnail: "D061D23",
//       name: "Another Medicine",
//       attributeSet: "250",
//       productStatus: "",
//       status: "",
//       type: "View Order",
//     },
//   ];

//   const stats = [
//     { label: "Total Orders", value: "2,420", percentage: 20 },
//     { label: "Total Products", value: "3,843", percentage: 25 },
//     { label: "Base Amount", value: "1,700", percentage: -11 },
//     { label: "Purchase Amount", value: "2,530", percentage: 17 },
//   ];

//   // const filteredProducts = products.filter(
//   //   (product) =>
//   //     product?.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //     product?.productId.toLowerCase().includes(searchQuery.toLowerCase())
//   // );

//   useEffect(() => {
//     dispatch(fetchGetOrderBySellerId(user?.customerId))
//   }, [user])

//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
//       <div className="w-[95%] h-full mt-4">
//         <div className="flex justify-between">
//           <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
//           {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
//             <FaPlus /> Add New Product
//           </button> */}
//         </div>

//         <div className="flex flex-wrap my-4 gap-2 -ml-8 justify-normal items-center p-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[15px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
//                   <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
//                   <div
//                     className={`text-sm ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     } p-1 rounded-lg`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-between mt-6">
//           {/* search start */}
//           <div className="relative flex">
//             <input
//               type="text"
//               placeholder="Search Product"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border rounded-xl h-12 w-64 text-left px-2"
//             />
//             <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
//           </div>
//           {/* search end */}
//           <div className="flex gap-2">
//             <div className="flex  ">
//             <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
//               <img src={filter} className="w-6 h-6" />
//               Filter
//             </button>
//               {/* <FaFilter className="m-2" /> */}
//               {/* <button className='text-2xl'>Filter</button> */}
//             </div>
//             <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
//               <select className="">
//                 <option>-Select Group-</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="border rounded-md text-[15px] bg-white mt-4">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b-2">
//                 <th className="px-4 py-2 text-left">Order ID</th>
//                 <th className="px-4 py-2 text-left">Purchased On</th>
//                 <th className="px-4 py-2 text-left">Products</th>
//                 <th className="px-4 py-2 text-left">Total</th>
//                 <th className="px-4 py-2 text-left">Customer</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {(() => {
//                 const rows = [];
//                 for (let i = 0; i < filteredProducts.length; i++) {
//                   rows.push(
//                     <tr key={i} className="border-b">
//                       <td className="px-4 py-2">{[i + 1]}</td>
//                       <td className="px-4 py-2">{filteredProducts?.orderDate}</td>
//                       <td className="px-4 py-2">{filteredProducts?.productName}</td>
//                       <td className="px-4 py-2">{filteredProducts?.totalAmount}</td>
//                       <td className="px-4 py-2">{filteredProducts?.customerName}</td>
//                       <td className="px-4 py-2">{filteredProducts?.status}</td>
//                       <td className="px-4 py-2">view order</td>
//                     </tr>
//                   );
//                 }
//                 return rows;
//               })()}
//             </tbody> */}
              
//               {Array.isArray(SellerOrder) && SellerOrder.length > 0 ?(
//                 SellerOrder.map((product, index) => (
//                   <tr key={product.productId} className="border-b">
//                     <td className="px-4 py-2">{index + 1}</td>
//                     <td className="px-4 py-2">{new Date(product.orderDate).toLocaleDateString('en-US', {
//                                 year: 'numeric',
//                                 month: '2-digit',
//                                 day: '2-digit',
//                               }).replace(/\//g, '-')}</td>
//                     <td className="px-4 py-2">{product?.productName}</td>
//                     <td className="px-4 py-2">{product?.totalAmount}</td>
//                     <td className="px-4 py-2">{product?.customerName}</td>
//                     <td className="px-4 py-2">{product?.status}</td>
//                     <td className="px-4 py-2">view order</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4">
//                     No Product available
//                   </td>
//                 </tr>
//               )}
//               </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LayoutSellOrders;






// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa6";
// import { IoIosArrowRoundUp } from "react-icons/io";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import { CiSearch, CiMenuKebab } from "react-icons/ci";
// import filter from "../../../assets/Filter_icon.png";


// function LayoutSellOrders() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const products = [
//     {
//       id: "000",
//       thumbnail: "D061D23",
//       name: "Generic Medicine",
//       attributeSet: "350",
//       productStatus: "",
//       status: "",
//       type: "View Order",
//     },
//     {
//       id: "001",
//       thumbnail: "D061D23",
//       name: "Another Medicine",
//       attributeSet: "250",
//       productStatus: "",
//       status: "",
//       type: "View Order",
//     },
//   ];

//   const stats = [
//     { label: "Total Orders", value: "2,420", percentage: 20 },
//     { label: "Total Products", value: "3,843", percentage: 25 },
//     { label: "Base Amount", value: "1,700", percentage: -11 },
//     { label: "Purchase Amount", value: "2,530", percentage: 17 },
//   ];

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.id.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-4">
//         <div className="flex justify-between">
//           <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
//           {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
//             <FaPlus /> Add New Product
//           </button> */}
//         </div>

//         <div className="flex flex-wrap my-4 gap-2 -ml-8 justify-normal items-center p-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[15px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
//                   <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
//                   <div
//                     className={`text-sm ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     } p-1 rounded-lg`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-between mt-6">
//           {/* search start */}
//           <div className="relative flex">
//             <input
//               type="text"
//               placeholder="Search Product"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border rounded-xl h-12 w-64 text-left px-2"
//             />
//             <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
//           </div>
//           {/* search end */}
//           <div className="flex gap-2">
//             <div className="flex  ">
//             <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
//               <img src={filter} className="w-6 h-6" />
//               Filter
//             </button>
//               {/* <FaFilter className="m-2" /> */}
//               {/* <button className='text-2xl'>Filter</button> */}
//             </div>
//             <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
//               <select className="">
//                 <option>-Select Group-</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="border rounded-md text-[15px] bg-white mt-4">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b-2">
//                 <th className="px-4 py-2 text-left">Order ID</th>
//                 <th className="px-4 py-2 text-left">Purchased On</th>
//                 <th className="px-4 py-2 text-left">Products</th>
//                 <th className="px-4 py-2 text-left">Total</th>
//                 <th className="px-4 py-2 text-left">Customer</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {(() => {
//                 const rows = [];
//                 for (let i = 0; i < filteredProducts.length; i++) {
//                   rows.push(
//                     <tr key={i} className="border-b">
//                       <td className="px-4 py-2">{filteredProducts[i].id}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].thumbnail}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].name}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].attributeSet}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].productStatus}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].status}</td>
//                       <td className="px-4 py-2">{filteredProducts[i].type}</td>
//                     </tr>
//                   );
//                 }
//                 return rows;
//               })()}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LayoutSellOrders;


import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import filter from "../../../assets/Filter_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetOrderBySellerId } from "../../../Api/OrderApi";


function LayoutSellOrders() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);
  const [searchQuery, setSearchQuery] = useState("");
  const SellerOrder = useSelector((state) => state.order.OrderBySellerId)
  console.log("sellerOrder---->", SellerOrder)
  const localData = localStorage.getItem("userId")
  const products = [
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "001",
      thumbnail: "D061D23",
      name: "Another Medicine",
      attributeSet: "250",
      productStatus: "",
      status: "",
      type: "View Order",
    },
  ];

  const stats = [
    { label: "Total Orders", value: SellerOrder ? SellerOrder.length : 0, percentage: SellerOrder ? ((SellerOrder.length - 100) / 100 * 100).toFixed(2) : 0, },
    { label: "Total Products", value: SellerOrder ? SellerOrder.length : 0, percentage: SellerOrder ? ((SellerOrder.length - 100) / 100 * 100).toFixed(2) : 0, },
    {
      label: "Base Amount",
      value: SellerOrder
        ? Math.floor(SellerOrder.reduce((total, order) => total + (order.baseAmount || 0), 0))
        : 0,
      percentage: SellerOrder
        ? Math.floor(((Math.floor(SellerOrder.reduce((total, order) => total + (order.baseAmount || 0), 0)) - 1500) / 1500) * 100)
        : 0,
    },
    {
      label: "Purchase Amount",
      value: SellerOrder
        ? Math.floor(SellerOrder.reduce((total, order) => total + (order.totalAmount || 0), 0))
        : 0,
      percentage: SellerOrder
        ? Math.floor(((Math.floor(SellerOrder.reduce((total, order) => total + (order.totalAmount || 0), 0)) - 2000) / 2000) * 100)
        : 0,
    },
  ];

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product?.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product?.productId.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  useEffect(() => {
    dispatch(fetchGetOrderBySellerId(user?.customerId))
  }, [user])

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">List of Orders</h1>
          {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
            <FaPlus /> Add New Product
          </button> */}
        </div>

        <div className="flex flex-wrap my-4 gap-2 -ml-8 justify-normal items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[15px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div
                    className={`text-sm ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    } p-1 rounded-lg`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          {/* search start */}
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl h-12 w-64 text-left px-2"
            />
            <CiSearch className="absolute right-0 top-4 text-gray-400 mr-2" />
          </div>
          {/* search end */}
          <div className="flex gap-2">
            <div className="flex  ">
            <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>
              {/* <FaFilter className="m-2" /> */}
              {/* <button className='text-2xl'>Filter</button> */}
            </div>
            <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
              <select className="">
                <option>-Select Group-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border rounded-md text-[15px] bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Purchased On</th>
                <th className="px-4 py-2 text-left">Products</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {/* {(() => {
                const rows = [];
                for (let i = 0; i < filteredProducts.length; i++) {
                  rows.push(
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{[i + 1]}</td>
                      <td className="px-4 py-2">{filteredProducts?.orderDate}</td>
                      <td className="px-4 py-2">{filteredProducts?.productName}</td>
                      <td className="px-4 py-2">{filteredProducts?.totalAmount}</td>
                      <td className="px-4 py-2">{filteredProducts?.customerName}</td>
                      <td className="px-4 py-2">{filteredProducts?.status}</td>
                      <td className="px-4 py-2">view order</td>
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody> */}
              
              {Array.isArray(SellerOrder) && SellerOrder.length > 0 ?(
                SellerOrder.map((product, index) => (
                  <tr key={product.productId} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{new Date(product.orderDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }).replace(/\//g, '-')}</td>
                    <td className="px-4 py-2">{product?.productName}</td>
                    <td className="px-4 py-2">{product?.totalAmount}</td>
                    <td className="px-4 py-2">{product?.customerName}</td>
                    <td className="px-4 py-2">{product?.status}</td>
                    <td className="px-4 py-2">view order</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No Product available
                  </td>
                </tr>
              )}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LayoutSellOrders;



