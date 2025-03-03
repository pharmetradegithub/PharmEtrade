// // import React, { useState } from "react";
// // import { CiMenuKebab } from "react-icons/ci";
// // import filter from "../../../assets/Filter_icon.png";
// // import next from "../../../assets/Next_icon.png";
// // import previous from "../../../assets/Previous_icon.png";
// // import LayoutEarningChart from "./LayoutEarningChart";
// // // import EarningsChart from "../Components/EarningChart";
// // // import EarningsChart from '../../../Components/Admin/Components/EarningChart';

// // const LayoutEarnings = () => {
// //   const itemsPerPage = 6;
// //   const data = Array(110).fill({
// //     interval: "Sep 14, 2021",
// //     orders: 2,
// //     totalAmount: "$20.68",
// //     totalEarning: "$19.41",
// //     totalDiscountAmount: "$0.00",
// //     adminCommission: "$1.27",
// //   });
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// //   const totalPages = Math.ceil(data.length / itemsPerPage);

// //   const handleNextPage = () => {
// //     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
// //   };

// //   const handlePreviousPage = () => {
// //     setCurrentPage((prev) => Math.max(prev - 1, 1));
// //   };

// //   const stats = [
// //     { label: "Orders", value: 2420, percentage: 20 },
// //     { label: "Total Amount ", value: 3843, percentage: 25 },
// //     { label: "Total Earnings ", value: 1700, percentage: -1 },
// //     { label: "Admin Comission", value: "$2530", percentage: 17 },
// //   ];

// //   return (
// //     <div className="w-full h-full flex justify-center items-center">
// //       <div className="w-[95%] h-full mt-4">
// //         <div className="flex justify-between">
// //           <p className="text-[22px] text-blue-900 font-semibold">Earnings</p>
// //         </div>
// //         <div className="flex my-4 flex-wrap justify-start gap-2 p-2">
// //           {stats.map((stat, index) => (
// //             <div
// //               key={index}
// //               className="p-4 h-24 mt-1 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
// //             >
// //               <div className="w-full">
// //                 <div className="flex justify-between items-center">
// //                   <div className="text-[17px] text-gray-700 font-normal">
// //                     {stat.label}
// //                   </div>
// //                   <div className="menu-icon">
// //                     <CiMenuKebab />
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-between mt-2 items-center">
// //                   <div className="text-2xl font-semibold">{stat.value}</div>
// //                   {/* <div
// //                     className={`text-sm p-1 rounded-lg ${
// //                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
// //                     }`}
// //                   >
// //                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
// //                   </div> */}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="flex w-full">
// //           <div className="flex w-[40%] justify-between p-2">
// //             <div className="flex justify-center w-full bg-gray-100">
// //               <LayoutEarningChart />
// //             </div>
// //           </div>
// //           <div className="p-4 text-sm w-[60%]">
// //             <div className="flex justify-between">
// //               <h2 className="text-xl font-semibold mb-4">Latest Earnings</h2>
// //               <div className="flex flex-row">
// //                 <div className="flex flex-row h-7 mx-2 border justify-center items-center p-2 rounded-md bg-green-300">
// //                   <img src={filter} className="w-6 h-6" />
// //                   <p>Filter</p>
// //                 </div>
// //                 <div>
// //                   <select className="h-fit py-1 rounded-md border-gray-100 border">
// //                     <option>Intervals </option>
// //                     <option>Orders</option>
// //                     <option>Total Amount </option>
// //                     <option>Total Earnings </option>
// //                     <option>Total Discounts Amount </option>
// //                     <option>Admin Comission </option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //             <table className="min-w-full bg-white border border-gray-200">
// //               <thead className="bg-blue text-white">
// //                 <tr className="text-left">
// //                   <th className="py-2 px-4 border-b">Interval</th>
// //                   <th className="py-2 px-4 border-b">Orders</th>
// //                   <th className="py-2 px-4 border-b">Total Amount</th>
// //                   <th className="py-2 px-4 border-b">Total Earning</th>
// //                   <th className="py-2 px-4 border-b">Total Discount Amount</th>
// //                   <th className="py-2 px-4 border-b">Admin Commission</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {currentItems.map((item, index) => (
// //                   <tr key={index} className="text-left">
// //                     <td className="pl-4 px-4 border-b w-28 text-sm">
// //                       {item.interval}
// //                     </td>
// //                     <td className="pl-4 px-4 border-b">{item.orders}</td>
// //                     <td className="pl-4 px-4 border-b">{item.totalAmount}</td>
// //                     <td className="pl-4 px-4 border-b">{item.totalEarning}</td>
// //                     <td className="pl-4 px-4 border-b">
// //                       {item.totalDiscountAmount}
// //                     </td>
// //                     <td className="pl-4 px-4 border-b">{item.adminCommission}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //             <div className="flex justify-end my-2">
// //               <button
// //                 onClick={handlePreviousPage}
// //                 disabled={currentPage === 1}
// //                 className="mx-2 px-4 border p-2 text-white rounded-lg"
// //               >
// //                 <img src={previous} className="w-2" />
// //               </button>
// //               <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
// //                 {currentPage} of {totalPages}
// //               </span>
// //               <button
// //                 onClick={handleNextPage}
// //                 disabled={currentPage === totalPages}
// //                 className="mx-2 px-4 border p-2 text-white rounded-lg"
// //               >
// //                 <img src={next} className="w-2" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LayoutEarnings;
// import React, { useEffect, useState } from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import filter from "../../../assets/Filter_icon.png";
// import next from "../../../assets/Next_icon.png";
// import previous from "../../../assets/Previous_icon.png";
// import LayoutEarningChart from "./LayoutEarningChart";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEarningsAPi } from "../../../Api/EarningsApi";
// // import EarningsChart from "../Components/EarningChart";
// // import EarningsChart from '../../../Components/Admin/Components/EarningChart';

// const LayoutEarnings = () => {
//   const user = useSelector((state) => state.user.user)
//   const dispatch = useDispatch()
//   const earning = useSelector((state) => state.earning.earning)
//   console.log("earninglist--->", earning)
//   const itemsPerPage = 6;
//   const data = Array(110).fill({
//     interval: "Sep 14, 2021",
//     orders: 2,
//     totalAmount: "$20.68",
//     totalEarning: "$19.41",
//     totalDiscountAmount: "$0.00",
//     adminCommission: "$1.27",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const stats = [
//     { label: "Orders", value: earning.totalOrders, percentage: 20 },
//     { label: "Total Amount ", value: earning.totalSaleValue, percentage: 25 },
//     { label: "Total Earnings ", value: earning.totalPurchaseValue, percentage: -1 },
//     // { label: "Admin Comission", value: "$2530", percentage: 17 },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       await dispatch(fetchEarningsAPi(user?.customerId));
//     };

//     fetchData();
//   }, [user.customerId])

//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <div className="w-[95%] h-full mt-4">
//         <div className="flex justify-between">
//           <p className="text-[22px] text-blue-900 font-semibold">Earnings</p>
//         </div>
//         <div className="flex my-4 flex-wrap justify-start gap-2 p-2">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-24 mt-1 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[17px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
//                   <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
//                   {/* <div
//                     className={`text-sm p-1 rounded-lg ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     }`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex w-full">
//           <div className="flex w-[40%] justify-between p-2">
//             <div className="flex justify-center w-full bg-gray-100">
//               <LayoutEarningChart />
//             </div>
//           </div>
//           <div className="p-4 text-sm w-[60%]">
//             <div className="flex justify-between">
//               <h2 className="text-xl font-semibold mb-4">Latest Earnings</h2>
//               <div className="flex flex-row">
//                 <div className="flex flex-row h-7 mx-2 border justify-center items-center p-2 rounded-md bg-green-300">
//                   <img src={filter} className="w-6 h-6" />
//                   <p>Filter</p>
//                 </div>
//                 <div>
//                   <select className="h-fit py-1 rounded-md border-gray-100 border">
//                     <option>Intervals </option>
//                     <option>Orders</option>
//                     <option>Total Amount </option>
//                     <option>Total Earnings </option>
//                     <option>Total Discounts Amount </option>
//                     <option>Admin Comission </option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-blue text-white">
//                 <tr className="text-left">
//                   <th className="py-2 px-4 border-b">Interval</th>
//                   <th className="py-2 px-4 border-b">Orders</th>
//                   <th className="py-2 px-4 border-b">Total Amount</th>
//                   <th className="py-2 px-4 border-b">Total Earning</th>
//                   <th className="py-2 px-4 border-b">Total Discount Amount</th>
//                   <th className="py-2 px-4 border-b">Admin Commission</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item, index) => (
//                   <tr key={index} className="text-left">
//                     <td className="pl-4 px-4 border-b w-28 text-sm">
//                       {item.interval}
//                     </td>
//                     <td className="pl-4 px-4 border-b">{item.orders}</td>
//                     <td className="pl-4 px-4 border-b">{item.totalAmount}</td>
//                     <td className="pl-4 px-4 border-b">{item.totalEarning}</td>
//                     <td className="pl-4 px-4 border-b">
//                       {item.totalDiscountAmount}
//                     </td>
//                     <td className="pl-4 px-4 border-b">{item.adminCommission}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex justify-end my-2">
//               <button
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={previous} className="w-2" />
//               </button>
//               <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//                 {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={next} className="w-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutEarnings;

// import React, { useState } from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import filter from "../../../assets/Filter_icon.png";
// import next from "../../../assets/Next_icon.png";
// import previous from "../../../assets/Previous_icon.png";
// import LayoutEarningChart from "./LayoutEarningChart";
// // import EarningsChart from "../Components/EarningChart";
// // import EarningsChart from '../../../Components/Admin/Components/EarningChart';

// const LayoutEarnings = () => {
//   const itemsPerPage = 6;
//   const data = Array(110).fill({
//     interval: "Sep 14, 2021",
//     orders: 2,
//     totalAmount: "$20.68",
//     totalEarning: "$19.41",
//     totalDiscountAmount: "$0.00",
//     adminCommission: "$1.27",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const stats = [
//     { label: "Orders", value: 2420, percentage: 20 },
//     { label: "Total Amount ", value: 3843, percentage: 25 },
//     { label: "Total Earnings ", value: 1700, percentage: -1 },
//     { label: "Admin Comission", value: "$2530", percentage: 17 },
//   ];

//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <div className="w-[95%] h-full mt-4">
//         <div className="flex justify-between">
//           <p className="text-[22px] text-blue-900 font-semibold">Earnings</p>
//         </div>
//         <div className="flex my-4 flex-wrap justify-start gap-2 p-2">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-24 mt-1 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[17px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
//                   <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
//                   {/* <div
//                     className={`text-sm p-1 rounded-lg ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     }`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex w-full">
//           <div className="flex w-[40%] justify-between p-2">
//             <div className="flex justify-center w-full bg-gray-100">
//               <LayoutEarningChart />
//             </div>
//           </div>
//           <div className="p-4 text-sm w-[60%]">
//             <div className="flex justify-between">
//               <h2 className="text-xl font-semibold mb-4">Latest Earnings</h2>
//               <div className="flex flex-row">
//                 <div className="flex flex-row h-7 mx-2 border justify-center items-center p-2 rounded-md bg-green-300">
//                   <img src={filter} className="w-6 h-6" />
//                   <p>Filter</p>
//                 </div>
//                 <div>
//                   <select className="h-fit py-1 rounded-md border-gray-100 border">
//                     <option>Intervals </option>
//                     <option>Orders</option>
//                     <option>Total Amount </option>
//                     <option>Total Earnings </option>
//                     <option>Total Discounts Amount </option>
//                     <option>Admin Comission </option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-blue text-white">
//                 <tr className="text-left">
//                   <th className="py-2 px-4 border-b">Interval</th>
//                   <th className="py-2 px-4 border-b">Orders</th>
//                   <th className="py-2 px-4 border-b">Total Amount</th>
//                   <th className="py-2 px-4 border-b">Total Earning</th>
//                   <th className="py-2 px-4 border-b">Total Discount Amount</th>
//                   <th className="py-2 px-4 border-b">Admin Commission</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item, index) => (
//                   <tr key={index} className="text-left">
//                     <td className="pl-4 px-4 border-b w-28 text-sm">
//                       {item.interval}
//                     </td>
//                     <td className="pl-4 px-4 border-b">{item.orders}</td>
//                     <td className="pl-4 px-4 border-b">{item.totalAmount}</td>
//                     <td className="pl-4 px-4 border-b">{item.totalEarning}</td>
//                     <td className="pl-4 px-4 border-b">
//                       {item.totalDiscountAmount}
//                     </td>
//                     <td className="pl-4 px-4 border-b">{item.adminCommission}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex justify-end my-2">
//               <button
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={previous} className="w-2" />
//               </button>
//               <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//                 {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className="mx-2 px-4 border p-2 text-white rounded-lg"
//               >
//                 <img src={next} className="w-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutEarnings;
import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import filter from "../../../assets/Filter_icon.png";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import LayoutEarningChart from "./LayoutEarningChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchEarningsAPi } from "../../../Api/EarningsApi";
import { fetchGetOrderBySellerId } from "../../../Api/OrderApi";
import Pagination from "../../Pagination";
// import EarningsChart from "../Components/EarningChart";
// import EarningsChart from '../../../Components/Admin/Components/EarningChart';

const LayoutEarnings = () => {
  const user = useSelector((state) => state.user?.user || [])
  const dispatch = useDispatch()
  const earning = useSelector((state) => state.earning?.earning || [])
  
  const SellerOrder = useSelector((state) => state.order?.OrderBySellerId || []);
  
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
  // const currentItems = SellerOrder.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = Array.isArray(SellerOrder)
    ? SellerOrder.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  
  
  //
  const calculateOrderData2 = (data) => {
    const groupedData = {};

    data.forEach((order) => {
      const orderDate = new Date(order.orderDate).toLocaleDateString(); // Format date
      if (!groupedData[orderDate]) {
        groupedData[orderDate] = {
          orderDate,
          noOfOrders: 0,
          totalAmount: 0,
        };
      }
      groupedData[orderDate].noOfOrders += 1;
      groupedData[orderDate].totalAmount += order.totalAmount;
    });

    // Calculate total earnings and return as an array
    return Object.values(groupedData).map((item) => ({
      ...item,
      totalEarnings: item.totalAmount - item.totalAmount * 0.02,
    }));
  };


  const calculateOrderData = (data) => {
    const groupedData = {};

    data.forEach((order) => {
      // Ensure `orderDate` is properly parsed and formatted
      const orderDate = new Date(order.orderDate).toLocaleDateString();
      if (!groupedData[orderDate]) {
        groupedData[orderDate] = {
          orderDate,
          noOfOrders: 0,
          totalAmount: 0,
        };
      }
      groupedData[orderDate].noOfOrders += 1; // Increment order count
      groupedData[orderDate].totalAmount += Number(order.totalAmount) || 0; // Add to total amount
      
    });

    // Calculate total earnings and return as an array
    return Object.values(groupedData).map((item) => ({
      ...item,
      totalEarnings: item.totalAmount - item.totalAmount * 0.02,
    }));
  };
  //
  const processedData = calculateOrderData(currentItems);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const stats = [
    { label: "Orders", value: earning.totalOrders, percentage: 20 },
    // { label: "Total Amount ", value: `$${earning.totalSaleValue || .00}`, percentage: 25 },
    { label: "Total Earnings ", value:`$${earning.totalPurchaseValue || .00}` , percentage: -1 },
    // { label: "Admin Comission", value: "$2530", percentage: 17 },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchEarningsAPi(user?.customerId));
  //   };

  //   fetchData();
  // }, [user.customerId])

  // const user = user || {}; // Set default empty object if user is undefined

useEffect(() => {
  const fetchData = async () => {
    if (user?.customerId) {
      await dispatch(fetchEarningsAPi(user.customerId));
    }
  };

  fetchData();
}, [user?.customerId]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      if (user?.customerId) {
        await dispatch(fetchGetOrderBySellerId(user.customerId));
      }
    };

    fetchData();
  }, [user?.customerId]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <p className="text-[22px] text-blue2 font-semibold">Earnings</p>
        </div>
        <div className="flex my-4 flex-wrap justify-start gap-2 p-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-24 mt-1 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[17px] text-blue2 font-normal">
                     {stat.label}    
                  </div>
                  {/* <div className="menu-icon">
                    <CiMenuKebab />
                  </div> */}
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">
                    {/* {stat.value} */} - 
                  </div>
                  {/* <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex w-[40%] justify-between p-2">
            {/* <div className="flex justify-center w-full bg-gray-100">
              <LayoutEarningChart />
            </div> */}
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold text-blue2 mb-4">Latest Earnings</h2>
              {/* <div className="flex flex-row">
                <div className="flex flex-row h-7 mx-2 border justify-center items-center p-2 rounded-md bg-green-300">
                  <img src={filter} className="w-6 h-6" />
                  <p>Filter</p>
                </div>
                <div>
                  <select className="h-fit py-1 rounded-md border-gray-100 border">
                    <option>Intervals </option>
                    <option>Orders</option>
                    <option>Total Amount </option>
                    <option>Total Earnings </option>
                    <option>Total Discounts Amount </option>
                    <option>Admin Comission </option>
                  </select>
                </div>
              </div> */}
            </div>
            <div className="overflow-x-auto">
              <table className="bg-white border border-gray-200 w-full px-4 py-2">
                <thead className="bg-blue text-white">
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Orders</th>
                    <th className="py-2 px-4 border-b">Total Amount</th>
                    <th className="py-2 px-4 border-b">Total Earning</th>
                    {/* <th className="py-2 px-4 border-b">Total Discount Amount</th>
        <th className="py-2 px-4 border-b">Admin Commission</th> */}
                  </tr>
                </thead>
                <tbody>
                  {processedData.map((row, index) => (
                    <tr key={index} className="text-left justify-between">
                      <td className="px-4 py-2 border-b text-center text-sm">
                        {new Date(row.orderDate)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </td>
                      <td className="px-4 py-2 border-b text-center">{row.noOfOrders}</td>
                      <td className="px-4 py-2 border-b text-center">${row.totalAmount.toFixed(2)}</td>
                      <td className="px-4 py-2 border-b text-center">${row.totalEarnings.toFixed(2)}</td>
                      {/* <td className="px-4 py-2 border-b">{row.totalDiscountAmount}</td>
          <td className="px-4 py-2 border-b">{row.adminCommission}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="">
              {/* <Pagination
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem}
                productList={SellerOrder}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutEarnings;