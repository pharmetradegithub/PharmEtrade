

// import React, { useEffect, useMemo, useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import filter from "../../../assets/Filter_icon.png";
// import share from '../../../assets/upload1.png'
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchPaymentHistory } from "../../../Api/PaymentHistoryApi";
// import { Tooltip } from "@mui/material";
// import eye from '../../../assets/eye.png'
// import Pagination from "../../Pagination";
// // import { PaymentReceivedApi } from "../../../Api/AdminPayment";
// import { PaymentReceivedApi } from "../../../Api/AdminPaymentApi";
// // import { fetchPaymentHistory } from "../../../Api/PaymentHistory";


// function LayoutPaymentHistory() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedOption, setSelectedOption] = useState("all");
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedFormat, setSelectedFormat] = useState("csv");
//   const user = useSelector((state) => state.user.user)
//   const paymentHistory = useSelector((state) => state.adminPayment.paymentReceive)

//   const dispatch = useDispatch()

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleExportClick = () => {
//     // Logic for exporting data based on selectedFormat
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

//   const approvedData = paymentHistory.filter(item => item.paymentStatus === "Approved");
//   const CancelledOrder = paymentHistory.filter(item => item.statusId === 5);
//   const stats = [
//     {
//       label: "Total Orders",
//       // value: `$${(2420 ||.0).toFixed(2)}`,
//       // text: "as of 01-December-2023",
//       // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
//       value: paymentHistory.length,
//       color: "text-green-500",
//     },
//     {
//       // label: "Total Recievables",
//       label: "Recieved",
//       // value: `$${(2420 ||.0).toFixed(2)}`,
//       // text: "as of 01-December-2023",
//       // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
//       value: `$${approvedData.reduce((total, each) => total + each.paymentAmount, 0).toFixed(2)}`,
//       color: "text-green-500",
//     },
//     { label: "Cancelled", value: `$${CancelledOrder.reduce((total, each) => total + each.paymentAmount, 0).toFixed(2)}`, text: "" },
//   ];

//   const filteredPayouts = payouts.filter(
//     (payout) =>
//       payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(() => {
//     dispatch(PaymentReceivedApi())
//   }, [])
 

// // sorting
// // const [sortConfig, setSortConfig] = useState({ key: "", direction: "" }); // For sorting
//   const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'ascending' });

// // const handleSort = (key) => {
// //   let direction = "ascending";
// //   if (sortConfig.key === key && sortConfig.direction === "ascending") {
// //     direction = "descending";
// //   }
// //   setSortConfig({ key, direction });
// // };

//   const handleSort = (key) => {
//     setSortConfig((prevConfig) => {
//       const newConfig = prevConfig.key === key
//         ? {
//           key,
//           direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
//         }
//         : { key, direction: 'ascending' };

//       return newConfig;
//     });
//   };
//   // const sortedItems = React.useMemo(() => {
//   //   if (sortConfig?.key) {
//   //     return [...paymentHistory].sort((a, b) => {
//   //       const aValue = a[sortConfig.key];
//   //       const bValue = b[sortConfig.key];

//   //       if (aValue === bValue) return 0;

//   //       // Handle ascending sort
//   //       if (sortConfig.direction === "ascending") {
//   //         return aValue > bValue ? 1 : -1;
//   //       }

//   //       // Handle descending sort
//   //       return aValue < bValue ? 1 : -1;
//   //     });
//   //   }
//   //   return paymentHistory;
//   // }, [paymentHistory, sortConfig]);
//   // const sortedItems = React.useMemo(() => {
//   //   if (sortConfig.key) {
//   //     return [...paymentHistory].sort((a, b) => {
//   //       const aValue = a[sortConfig.key];
//   //       const bValue = b[sortConfig.key];

//   //       if (aValue === bValue) return 0;

//   //       if (sortConfig.direction === 'ascending') {
//   //         return aValue > bValue ? 1 : -1;
//   //       }
//   //       return aValue < bValue ? 1 : -1;
//   //     });
//   //   }
//   //   return paymentHistory;
//   // }, [paymentHistory, sortConfig]);----------

//   const sortedItems = React.useMemo(() => {

//     const validPaymentHistory = Array.isArray(paymentHistory) ? paymentHistory : [];
//     // Default sort by `paymentDate` in descending order
//     let sortedData = [...validPaymentHistory].sort((a, b) => {
//       const aDate = new Date(a.paymentDate).getTime();
//       const bDate = new Date(b.paymentDate).getTime();
//       return bDate - aDate; // Descending order
//     });

//     // Apply additional sorting based on `sortConfig`
//     if (sortConfig.key) {
//       sortedData.sort((a, b) => {
//         const aValue = a[sortConfig.key];
//         const bValue = b[sortConfig.key];

//         if (aValue === bValue) return 0;

//         if (sortConfig.direction === 'ascending') {
//           return aValue > bValue ? 1 : -1;
//         }
//         return aValue < bValue ? 1 : -1;
//       });
//     }

//     return sortedData;
//   }, [paymentHistory, sortConfig]);


//   // const sortedItems = useMemo(() => {
//   //   if (!sortConfig.key) return paymentHistory;

//   //   const sortedData = [...paymentHistory];
//   //   sortedData.sort((a, b) => {
//   //     const aValue = a[sortConfig.key];
//   //     const bValue = b[sortConfig.key];

//   //     if (sortConfig.key === "PaymentAmount") {
//   //       return sortConfig.direction === "asc"
//   //         ? aValue - bValue
//   //         : bValue - aValue;
//   //     }

//   //     const aStr = typeof aValue === "string" ? aValue.toLowerCase() : aValue;
//   //     const bStr = typeof bValue === "string" ? bValue.toLowerCase() : bValue;

//   //     return sortConfig.direction === "asc"
//   //       ? aStr > bStr
//   //         ? 1
//   //         : -1
//   //       : aStr < bStr
//   //         ? 1
//   //         : -1;
//   //   });

//   //   return sortedData;
//   // }, [paymentHistory, sortConfig]);
  

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
//   const currentItems = sortedItems ? sortedItems.slice(indexOfFirstItem, indexOfLastItem) : [];

//   const totalPages = Math.ceil((paymentHistory?.length || 0) / itemsPerPage);
 

//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
//       <div className="w-[95%] h-full mt-8">
//         <div className="flex justify-between">
//           <h1 className="text-[22px] text-blue-900 font-semibold"> Payments Received</h1>
//         </div>

//         <div className="flex justify-normal flex-wrap gap-2 w-full mt-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white w-56 rounded-lg shadow-lg h-28 p-4"
//             >
//               <h1 className="text-[20px] text-gray-700 font-normal pb-3">
//                 {stat.label}
//               </h1>
//               <h1
//                 className={`text-xl font-semibold ${
//                   stat.color || "text-gray-900"
//                 }`}
//               >
//                 {stat.value}
//               </h1>
//               {/* <h1 className="text-[14px]">{stat.text}</h1> */}
//             </div>
//           ))}
//         </div>

//         <div className="w-full my-4">
//           {/* <h2 className="text-[22px] font-semibold">Payment History</h2> */}
//           <div className="flex justify-between my-2">
//             {/* <div className="flex bg-gray-100">
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
//             </div> */}

//             <div className="flex gap-2">
//               {/* <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
//                 <img src={filter} className="w-6 h-6" alt="Filter" />
//                 Filter
//               </button>
//               <select className="">
//                 <option>Columns</option>
//               </select> */}
//               <div className="relative">
//                 {/* <button
//                   onClick={handleDropdownToggle}
//                   className="bg-white p-2 h-8 rounded-md flex items-center"
//                 >
//                   <img src={share} className="w-6 h-6" alt="Filter" />
//                   Export
//                 </button> */}
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
//           <thead className="bg-blue-900 text-white ">
//         <tr className="border-b-2">
//           <th className="px-4 py-2 text-left">S.NO</th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('invoiceNumber')}>
//             Invoice Number 
//             {/* {sortConfig.key === "invoiceNumber"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"} */}
//             {/* {sortConfig.key === 'invoiceNumber' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
//           </th>
//                 <th
//                   className="px-4 py-2 text-left cursor-pointer"
//                   onClick={() => handleSort('invoiceDate')}
//                 >
//                   Invoice Date
//                   {sortConfig.key === 'invoiceDate'
//                     ? (sortConfig.direction === 'ascending' ? '▲' : '▼') // Shows the appropriate arrow
//                     : '▲'  // Default to the up arrow when no sort is applied
//                   }
//                 </th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentDate')}>
//             From User
//             {sortConfig.key === "paymentDate"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//              {/* {sortConfig.key === 'paymentDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
//           </th>
//           {/* <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('transactionid')}>
//             Transaction Id 
//             {sortConfig.key === "transactionid"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//              {sortConfig.key === 'transactionid' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} 
//           </th> */}
//                 <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentDate')}>
//             Transaction Date 
//                   {sortConfig.key === "paymentDate"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//             {/* {sortConfig.key === 'transactionDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
//           </th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentAmount')}>
//             Transaction Amount 
//             {sortConfig.key === "paymentAmount"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//             {/* {sortConfig.key === 'paymentAmount' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
//           </th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentStatus')}>
//             Payment mode 
//             {sortConfig.key === "paymentStatus"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//             {/* {sortConfig.key === 'paymentStatus' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
//           </th>
//           {/* <th className="px-4 py-2 text-left">Action</th> */}
//         </tr>
//       </thead>
//             <tbody>
//               {currentItems.length > 0 ? (
//                 currentItems.map((payout, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
//                     <td className="px-4 py-2">{payout.invoiceNumber}</td>
//                     <td className="px-4 py-2">
//                       {new Date(payout.invoiceDate)
//                         .toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "2-digit",
//                           day: "2-digit",
//                         })
//                         .replace(/\//g, "-")}
//                     </td>

//                     <td className="px-4 py-2">
//                       {payout.fromUser}
//                       {/* {new Date(payout.paymentDate)
//                         .toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "2-digit",
//                           day: "2-digit",
//                         })
//                         .replace(/\//g, "-")} */}
//                     </td>

//                     {/* <td className="px-4 py-2">{}</td> */}
//                     <td className="px-4 py-2">
//                       {new Date(payout.paymentDate)
//                         .toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "2-digit",
//                           day: "2-digit",
//                         })
//                         .replace(/\//g, "-")}
//                     </td>
//                     <td className="px-4 py-2">${payout.paymentAmount.toFixed(2)}</td>
//                     <td className="px-4 py-2">{payout.paymentMethod}</td>
//                     {/* <td className="px-4 py-2">{ }</td> */}
//                     {/* <td className="px-4 py-2">{ }</td> */}
//                     {/* <td className="px-4 py-2">
//                       <Tooltip title="View" placement="top">
//                         <img src={eye} className="w-5 h-5" onClick={() => handleClickView(product?.orderId)} />
//                         {/* <FaFileInvoice className="w-5 h-5"/> 
//                       </Tooltip>
//                     </td> */}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-4 py-2 text-center">
//                     No payment history available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <Pagination
//           indexOfFirstItem={indexOfFirstItem}
//           indexOfLastItem={indexOfLastItem}
//           productList={paymentHistory}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// }

// export default LayoutPaymentHistory;



import React, { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import filter from "../../../assets/Filter_icon.png";
import share from '../../../assets/upload1.png'
import { useDispatch, useSelector } from "react-redux";
// import { fetchPaymentHistory } from "../../../Api/PaymentHistoryApi";
import { Tooltip } from "@mui/material";
import eye from '../../../assets/eye.png'
import Pagination from "../../Pagination";
// import { PaymentReceivedApi } from "../../../Api/AdminPayment";
import { PaymentReceivedApi } from "../../../Api/AdminPaymentApi";
// import { fetchPaymentHistory } from "../../../Api/PaymentHistory";


function LayoutPaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const user = useSelector((state) => state.user.user)
  const paymentHistory = useSelector((state) => state.adminPayment.paymentReceive)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleExportClick = () => {
    // Logic for exporting data based on selectedFormat
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

  const approvedData = paymentHistory.filter(item => item.paymentStatus === "Approved");
  const CancelledOrder = paymentHistory.filter(item => item.statusId === 5);

  const approvedAmount = approvedData.reduce((total, each) => total + each.paymentAmount, 0);

  // Calculate total cancelled amount
  const cancelledAmount = CancelledOrder.reduce((total, each) => total + each.paymentAmount, 0);

  // Calculate the remaining amount after deducting cancelled amount
  const remainingAmount = approvedAmount - cancelledAmount;
  const totalAmount = paymentHistory.reduce((total, each) => total + each.paymentAmount, 0);
  const stats = [
    {
      label: "Total Orders",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // text: "as of 01-December-2023",
      // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
      value: paymentHistory.length,
      color: "text-green-500",
    },
    {
      label: "Received",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // text: "as of 01-December-2023",
      // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
      value: approvedData.length,
      color: "text-green-500",
    },
    {
      label: "Cancelled",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // text: "as of 01-December-2023",
      // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
      value: CancelledOrder.length,
      color: "text-green-500",
    },
    {
      label: "Total Sold",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // text: "as of 01-December-2023",
      // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
      value: `$${totalAmount.toFixed(2)}`,
      color: "text-green-500",
    },
    {
      // label: "Total Recievables",
      label: "Recieved Amount",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // text: "as of 01-December-2023",
      // value: `$${(paymentHistory.paymentAmount).toFixed(2)}`,
      value: `$${remainingAmount.toFixed(2)}`,
      color: "text-green-500",
    },
    { label: "Cancellation Amount", value: `$${CancelledOrder.reduce((total, each) => total + each.paymentAmount, 0).toFixed(2)}`, text: "" },
  ];

  const filteredPayouts = payouts.filter(
    (payout) =>
      payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(PaymentReceivedApi())
  }, [])
 

// sorting
// const [sortConfig, setSortConfig] = useState({ key: "", direction: "" }); // For sorting
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'ascending' });

// const handleSort = (key) => {
//   let direction = "ascending";
//   if (sortConfig.key === key && sortConfig.direction === "ascending") {
//     direction = "descending";
//   }
//   setSortConfig({ key, direction });
// };

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      const newConfig = prevConfig.key === key
        ? {
          key,
          direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
        }
        : { key, direction: 'ascending' };

      return newConfig;
    });
  };
  // const sortedItems = React.useMemo(() => {
  //   if (sortConfig?.key) {
  //     return [...paymentHistory].sort((a, b) => {
  //       const aValue = a[sortConfig.key];
  //       const bValue = b[sortConfig.key];

  //       if (aValue === bValue) return 0;

  //       // Handle ascending sort
  //       if (sortConfig.direction === "ascending") {
  //         return aValue > bValue ? 1 : -1;
  //       }

  //       // Handle descending sort
  //       return aValue < bValue ? 1 : -1;
  //     });
  //   }
  //   return paymentHistory;
  // }, [paymentHistory, sortConfig]);
  // const sortedItems = React.useMemo(() => {
  //   if (sortConfig.key) {
  //     return [...paymentHistory].sort((a, b) => {
  //       const aValue = a[sortConfig.key];
  //       const bValue = b[sortConfig.key];

  //       if (aValue === bValue) return 0;

  //       if (sortConfig.direction === 'ascending') {
  //         return aValue > bValue ? 1 : -1;
  //       }
  //       return aValue < bValue ? 1 : -1;
  //     });
  //   }
  //   return paymentHistory;
  // }, [paymentHistory, sortConfig]);----------

  const sortedItems = React.useMemo(() => {

    const validPaymentHistory = Array.isArray(paymentHistory) ? paymentHistory : [];
    // Default sort by `paymentDate` in descending order
    let sortedData = [...validPaymentHistory].sort((a, b) => {
      const aDate = new Date(a.paymentDate).getTime();
      const bDate = new Date(b.paymentDate).getTime();
      return bDate - aDate; // Descending order
    });

    // Apply additional sorting based on `sortConfig`
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === bValue) return 0;

        if (sortConfig.direction === 'ascending') {
          return aValue > bValue ? 1 : -1;
        }
        return aValue < bValue ? 1 : -1;
      });
    }

    return sortedData;
  }, [paymentHistory, sortConfig]);


  // const sortedItems = useMemo(() => {
  //   if (!sortConfig.key) return paymentHistory;

  //   const sortedData = [...paymentHistory];
  //   sortedData.sort((a, b) => {
  //     const aValue = a[sortConfig.key];
  //     const bValue = b[sortConfig.key];

  //     if (sortConfig.key === "PaymentAmount") {
  //       return sortConfig.direction === "asc"
  //         ? aValue - bValue
  //         : bValue - aValue;
  //     }

  //     const aStr = typeof aValue === "string" ? aValue.toLowerCase() : aValue;
  //     const bStr = typeof bValue === "string" ? bValue.toLowerCase() : bValue;

  //     return sortConfig.direction === "asc"
  //       ? aStr > bStr
  //         ? 1
  //         : -1
  //       : aStr < bStr
  //         ? 1
  //         : -1;
  //   });

  //   return sortedData;
  // }, [paymentHistory, sortConfig]);
  

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = sortedItems ? sortedItems.slice(indexOfFirstItem, indexOfLastItem) : [];

  const totalPages = Math.ceil((paymentHistory?.length || 0) / itemsPerPage);
 

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold"> Payments Received</h1>
        </div>

        <div className="flex justify-normal flex-wrap gap-2 w-full mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white w-56 rounded-lg shadow-lg h-28 p-4"
            >
              <h1 className="text-[20px] text-gray-700 font-normal pb-3">
                {stat.label}
              </h1>
              <h1
                className={`text-xl font-semibold ${
                  stat.color || "text-gray-900"
                }`}
              >
                {stat.value}
              </h1>
              {/* <h1 className="text-[14px]">{stat.text}</h1> */}
            </div>
          ))}
        </div>

        <div className="w-full my-4">
          {/* <h2 className="text-[22px] font-semibold">Payment History</h2> */}
          <div className="flex justify-between my-2">
            {/* <div className="flex bg-gray-100">
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
            </div> */}

            <div className="flex gap-2">
              {/* <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
                <img src={filter} className="w-6 h-6" alt="Filter" />
                Filter
              </button>
              <select className="">
                <option>Columns</option>
              </select> */}
              <div className="relative">
                {/* <button
                  onClick={handleDropdownToggle}
                  className="bg-white p-2 h-8 rounded-md flex items-center"
                >
                  <img src={share} className="w-6 h-6" alt="Filter" />
                  Export
                </button> */}
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
          <thead className="bg-blue-900 text-white ">
        <tr className="border-b-2">
          <th className="px-4 py-2 text-left">S.NO</th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('invoiceNumber')}>
            Invoice Number 
            {/* {sortConfig.key === "invoiceNumber"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"} */}
            {/* {sortConfig.key === 'invoiceNumber' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
                <th
                  className="px-4 py-2 text-left cursor-pointer"
                  onClick={() => handleSort('invoiceDate')}
                >
                  Invoice Date
                  {sortConfig.key === 'invoiceDate'
                    ? (sortConfig.direction === 'ascending' ? '▲' : '▼') // Shows the appropriate arrow
                    : '▲'  // Default to the up arrow when no sort is applied
                  }
                </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentDate')}>
            From User
            {sortConfig.key === "paymentDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {/* {sortConfig.key === 'paymentDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          {/* <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('transactionid')}>
            Transaction Id 
            {sortConfig.key === "transactionid"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {sortConfig.key === 'transactionid' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} 
          </th> */}
                <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentDate')}>
            Transaction Date 
                  {sortConfig.key === "paymentDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
            {/* {sortConfig.key === 'transactionDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentAmount')}>
            Transaction Amount 
            {sortConfig.key === "paymentAmount"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
            {/* {sortConfig.key === 'paymentAmount' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentStatus')}>
            Payment mode 
            {sortConfig.key === "paymentStatus"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
            {/* {sortConfig.key === 'paymentStatus' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          {/* <th className="px-4 py-2 text-left">Action</th> */}
        </tr>
      </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((payout, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                    <td className="px-4 py-2">{payout.invoiceNumber}</td>
                    <td className="px-4 py-2">
                      {new Date(payout.invoiceDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </td>

                    <td className="px-4 py-2">
                      {payout.fromUser}
                      {/* {new Date(payout.paymentDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")} */}
                    </td>

                    {/* <td className="px-4 py-2">{}</td> */}
                    <td className="px-4 py-2">
                      {new Date(payout.paymentDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </td>
                    <td className="px-4 py-2">${payout.paymentAmount.toFixed(2)}</td>
                    <td className="px-4 py-2">{payout.paymentMethod}</td>
                    {/* <td className="px-4 py-2">{ }</td> */}
                    {/* <td className="px-4 py-2">{ }</td> */}
                    {/* <td className="px-4 py-2">
                      <Tooltip title="View" placement="top">
                        <img src={eye} className="w-5 h-5" onClick={() => handleClickView(product?.orderId)} />
                        {/* <FaFileInvoice className="w-5 h-5"/> 
                      </Tooltip>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">
                    No payment history available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={paymentHistory}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default LayoutPaymentHistory;




