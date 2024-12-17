// import React, { useEffect, useState } from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import { FiPlus } from "react-icons/fi";
// // import ProductFields from "../Components/ProductFields";
// // import EditFields from "../Components/EditFields";
// // import QuoteDetail from "../Components/QuoteDetail";
// import filter from "../../../assets/Filter_icon.png";
// import edit from "../../../assets/Edit.png";
// import Bin from "../../../assets/Bin.png";
// import Pagination from "../../Pagination";
// import Deactivate from "../../../assets/Deactivate.png";
// import { Tooltip } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { GetBidsBySeller } from "../../../Api/BidApi";
// const LayoutAllrequestedQuote = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const dispatch = useDispatch()
//   const user = useSelector((state) => state.user.user)
//   const request = useSelector((state) => state.bid.bidRequestedQuoted)
//   console.log("requestedd", request)
  
//    useEffect(() => {
//     dispatch(GetBidsBySeller(user?.customerId))
//   }, [user?.customerId])
//   const stats = [
//     { label: "Return Requested", value: 150, percentage: 75 },
//     { label: "Return Approved", value: 120, percentage: 60 },
//     { label: "Return PickedUp", value: 90, percentage: -11 },
//     { label: "Refund Processed", value: 20, percentage: 50 },
//   ];

//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
//   const [currentItems, setcurrentItems] = useState(
//     request.slice(indexOfFirstItem, indexOfLastItem)
//   );
//   useEffect(() => {
//     if (request) {
//       const indexOfLastItem = currentPage * itemsPerPage;
//       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//       setcurrentItems(request.slice(indexOfFirstItem, indexOfLastItem));
//     }
//   }, [currentPage, request]);
//   const handleEditProduct = (request) => {
//     setSelectedRequest(request);
//     setShowEditPopup(true);
//   };

//   const requests = [
//     {
//       customer: "Ram",
//       quote: "Metrogyl",
//       status: "Pending",
//       created: "22-08-12",
//       // action: "View",
//       bulkQuantity: 1000
//     },
//     {
//       customer: "Shyam",
//       quote: "HYDROCORT 60ML7",
//       status: "Answered",
//       created: "22-08-14",
//       // action: "View",
//       bulkQuantity: 500
//     },
//   ];

//   return (
//     <div className="relative bg-gray-100  w-full h-full flex justify-center items-center overflow-y-auto ">
//       <div className=" w-[95%] h-full mt-8">
//         <div className=" flex justify-between">
//           <p className="text-[22px] text-blue-900 font-semibold">
//             {" "}
//             All Requested Quote{" "}
//           </p>
//         </div>

//         <div className="flex my-4 gap-2 justify-normal flex-wrap items-center p-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[15px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>
               
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-full">
//           {/* <div className="flex justify-end">
//           <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
//               <img src={filter} className="w-6 h-6" />
//               Filter
//             </button>
//             <select className="ml-2">
//               <option>Columns</option>
//             </select>
//           </div> */}

//           <div className="overflow-x-scroll text-[15px] w-full mt-4 font-sans">
//             <table className="rounded-lg bg-white w-full">
//               <thead className="bg-blue-900 text-white">
//                 <tr>
//                   <th className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                     S.NO
//                   </th>
//                   <th className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                     Customer Name
//                   </th>
//                   <th className="border-b-2 min-w-36 text-left">
//                      Product Name
//                   </th>
//                   <th className="border-b-2 min-w-36 text-left">Status</th>
//                   <th className="border-b-2 min-w-36 text-left">Created Date</th>
//                   <th className="border-b-2 min-w-36 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
//                       We couldn't find any records
//                     </td>
//                   </tr>
//                 ) : (
//                     currentItems.map((request, index) => (
//                     <tr key={index}>
//                       <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                         {indexOfFirstItem + index + 1}
//                       </td>
//                       <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                         {request.customerName}
//                       </td>
//                       {/* <td className="border-b-2 min-w-36 text-left">
//                         {request.productName}
//                       </td> */}
//                       <td className="border-b-2 min-w-36 text-left">
//                          <Tooltip title={request.productName} placement="right">
//                           <span className="truncate block w-24 cursor-pointer"> {/* Truncate and make clickable */}
//                             {request.productName}
//                           </span>
//                         </Tooltip>
//                         </td>
//                       <td className="border-b-2 min-w-36 text-left">
//                         {request.isActive ? "Active" : "Inactive"}
//                       </td>
//                       <td className="border-b-2 min-w-36 text-left">
//                           {new Date(request.createdOn)
//                             .toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "2-digit",
//                               day: "2-digit",
//                             })
//                             .replace(/\//g, "-")}
//                       </td>
//                       <td
//                         className="border-b-2 min-w-36 text-left cursor-pointer"
//                         onClick={() => handleEditProduct(request)}
//                       >
//                         {/* {request.action} */}
//                         <td className="-ml-2 py-2 cursor-pointer flex items-center space-x-2">
//                           {/* <Tooltip title="Edit" placement="top">
//                             <img
//                               src={edit}
//                               alt="Edit"
//                               className="cursor-pointer w-7 h-7"
//                               // onClick={() => handleEditProduct(product)}
//                             />
//                           </Tooltip> */}
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={Bin}
//                               alt="Delete"
//                               className="cursor-pointer w-4 h-4 ml-4"
//                               // onClick={() => DeleteProduct(product.productID)}
//                             />
//                           </Tooltip>
//                           {/* <Tooltip title="Deactivate" placement="top">
//                             <img
//                               src={Deactivate}
//                               alt="Deactivate"
//                               className="cursor-pointer w-4 h-4"
//                               // onClick={() => deactivatePopUp(product.productID)}
//                             />
//                           </Tooltip> */}
//                         </td>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <Pagination
//           indexOfFirstItem={indexOfFirstItem}
//           indexOfLastItem={indexOfLastItem}
//           productList={request}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//       {/* {showEditPopup && selectedRequest && (
//         <div className="w-full absolute h-full  inset-0 flex overflow-scroll bg-gray-100 ">
//           <QuoteDetail request={selectedRequest} />
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default LayoutAllrequestedQuote;

// import React, { useEffect, useState } from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import { FiPlus } from "react-icons/fi";
// // import ProductFields from "../Components/ProductFields";
// // import EditFields from "../Components/EditFields";
// // import QuoteDetail from "../Components/QuoteDetail";
// import filter from "../../../assets/Filter_icon.png";
// import edit from "../../../assets/Edit.png";
// import Bin from "../../../assets/Bin.png";
// import Pagination from "../../Pagination";
// import Deactivate from "../../../assets/Deactivate.png";
// import { Tooltip } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { GetBidsBySeller } from "../../../Api/BidApi";
// const LayoutAllrequestedQuote = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const dispatch = useDispatch()
//   const user = useSelector((state) => state.user.user)
//   const request = useSelector((state) => state.bid.bidRequestedQuoted)
//   console.log("requestedd", request)

//    useEffect(() => {
//     dispatch(GetBidsBySeller(user?.customerId))
//   }, [user?.customerId])
//   const stats = [
//     { label: "Return Requested", value: 150, percentage: 75 },
//     { label: "Return Approved", value: 120, percentage: 60 },
//     { label: "Return PickedUp", value: 90, percentage: -11 },
//     { label: "Refund Processed", value: 20, percentage: 50 },
//   ];

//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
//   const [currentItems, setcurrentItems] = useState(
//     request.slice(indexOfFirstItem, indexOfLastItem)
//   );
//   useEffect(() => {
//     if (request) {
//       const indexOfLastItem = currentPage * itemsPerPage;
//       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//       setcurrentItems(request.slice(indexOfFirstItem, indexOfLastItem));
//     }
//   }, [currentPage, request]);
//   const handleEditProduct = (request) => {
//     setSelectedRequest(request);
//     setShowEditPopup(true);
//   };

//   const requests = [
//     {
//       customer: "Ram",
//       quote: "Metrogyl",
//       status: "Pending",
//       created: "22-08-12",
//       // action: "View",
//       bulkQuantity: 1000
//     },
//     {
//       customer: "Shyam",
//       quote: "HYDROCORT 60ML7",
//       status: "Answered",
//       created: "22-08-14",
//       // action: "View",
//       bulkQuantity: 500
//     },
//   ];

//   return (
//     <div className="relative bg-gray-100  w-full h-full flex justify-center items-center overflow-y-auto ">
//       <div className=" w-[95%] h-full mt-8">
//         <div className=" flex justify-between">
//           <p className="text-[22px] text-blue-900 font-semibold">
//             {" "}
//             All Requested Quote{" "}
//           </p>
//         </div>

//         <div className="flex my-4 gap-2 justify-normal flex-wrap items-center p-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[15px] text-gray-700 font-normal">
//                     {stat.label}
//                   </div>

//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-2xl font-semibold">{stat.value}</div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-full">
//           {/* <div className="flex justify-end">
//           <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
//               <img src={filter} className="w-6 h-6" />
//               Filter
//             </button>
//             <select className="ml-2">
//               <option>Columns</option>
//             </select>
//           </div> */}

//           <div className="overflow-x-scroll text-[15px] w-full mt-4 font-sans">
//             <table className="rounded-lg bg-white w-full">
//               <thead className="bg-blue-900 text-white">
//                 <tr>
//                   <th className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                     S.NO
//                   </th>
//                   <th className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                     Customer Name
//                   </th>
//                   <th className="border-b-2 min-w-36 text-left">
//                      Product Name
//                   </th>
//                   <th className="border-b-2 min-w-36 text-left">Status</th>
//                   <th className="border-b-2 min-w-36 text-left">Created Date</th>
//                   <th className="border-b-2 min-w-36 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
//                       We couldn't find any records
//                     </td>
//                   </tr>
//                 ) : (
//                     currentItems.map((request, index) => (
//                     <tr key={index}>
//                       <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                         {indexOfFirstItem + index + 1}
//                       </td>
//                       <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
//                         {request.customerName}
//                       </td>
//                       {/* <td className="border-b-2 min-w-36 text-left">
//                         {request.productName}
//                       </td> */}
//                       <td className="border-b-2 min-w-36 text-left">
//                          <Tooltip title={request.productName} placement="right">
//                           <span className="truncate block w-24 cursor-pointer"> {/* Truncate and make clickable */}
//                             {request.productName}
//                           </span>
//                         </Tooltip>
//                         </td>
//                       <td className="border-b-2 min-w-36 text-left">
//                         {request.isActive ? "Active" : "Inactive"}
//                       </td>
//                       <td className="border-b-2 min-w-36 text-left">
//                           {new Date(request.createdOn)
//                             .toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "2-digit",
//                               day: "2-digit",
//                             })
//                             .replace(/\//g, "-")}
//                       </td>
//                       <td
//                         className="border-b-2 min-w-36 text-left cursor-pointer"
//                         onClick={() => handleEditProduct(request)}
//                       >
//                         {/* {request.action} */}
//                         <td className="-ml-2 py-2 cursor-pointer flex items-center space-x-2">
//                           {/* <Tooltip title="Edit" placement="top">
//                             <img
//                               src={edit}
//                               alt="Edit"
//                               className="cursor-pointer w-7 h-7"
//                               // onClick={() => handleEditProduct(product)}
//                             />
//                           </Tooltip> */}
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={Bin}
//                               alt="Delete"
//                               className="cursor-pointer w-4 h-4 ml-4"
//                               // onClick={() => DeleteProduct(product.productID)}
//                             />
//                           </Tooltip>
//                           {/* <Tooltip title="Deactivate" placement="top">
//                             <img
//                               src={Deactivate}
//                               alt="Deactivate"
//                               className="cursor-pointer w-4 h-4"
//                               // onClick={() => deactivatePopUp(product.productID)}
//                             />
//                           </Tooltip> */}
//                         </td>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <Pagination
//           indexOfFirstItem={indexOfFirstItem}
//           indexOfLastItem={indexOfLastItem}
//           productList={request}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//       {/* {showEditPopup && selectedRequest && (
//         <div className="w-full absolute h-full  inset-0 flex overflow-scroll bg-gray-100 ">
//           <QuoteDetail request={selectedRequest} />
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default LayoutAllrequestedQuote;




import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import filter from "../../../assets/Filter_icon.png";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Pagination from "../../Pagination";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetBidsBySeller } from "../../../Api/BidApi";

const LayoutAllrequestedQuote = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" }); // For sorting

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const request = useSelector((state) => state.bid.bidRequestedQuoted);

  useEffect(() => {
    dispatch(GetBidsBySeller(user?.customerId));
  }, [user?.customerId, dispatch]);

  const [currentItems, setCurrentItems] = useState([]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    if (request) {
      setCurrentItems(request.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, request, indexOfFirstItem, indexOfLastItem]);

  // Sorting logic
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    if (request && sortConfig.key !== "") {
      const sortedItems = [...request].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      setCurrentItems(sortedItems.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [sortConfig, request, indexOfFirstItem, indexOfLastItem]);

  return (
    <div className="relative bg-gray-100  w-full h-full flex justify-center items-center overflow-y-auto ">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            All Requested Quote
          </p>
        </div>

        <div className="w-full overflow-x-scroll text-[15px] mt-4">
          <table className="rounded-lg bg-white w-full hidden md:table">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border-b-2 py-2 min-w-8 pl-4 text-left">S.NO</th>
                <th
                  className="border-b-2 py-2 min-w-36 pl-4 text-left cursor-pointer"
                  onClick={() => handleSort("customerName")}
                >
                  Customer Name{" "}
                  {sortConfig.key === "customerName"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▲"}
                </th>
                <th
                  className="border-b-2 min-w-32 text-left cursor-pointer"
                  onClick={() => handleSort("productName")}
                >
                  Product Name{" "}
                  {sortConfig.key === "productName"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▲"}
                </th>
                <th className="border-b-2 py-2 min-w-16 pl-4 text-center">
                  Price
                </th>
                <th className="border-b-2 py-2 min-w-16 pl-4 text-left">
                  Quantity
                </th>
                <th className="border-b-2 py-2 min-w-36 pl-4 text-center">
                  Comment
                </th>
                <th
                  className="border-b-2 min-w-16 text-left"
                  onClick={() => handleSort("isActive")}
                >
                  Status
                  {/* Status{" "} */}
                  {/* {sortConfig.key === "isActive" &&
                    (sortConfig.direction === "ascending" ? "▲" : "▼")} */}
                </th>
                <th
                  className="border-b-2 min-w-24 text-left cursor-pointer"
                  onClick={() => handleSort("createdOn")}
                >
                  Created Date{" "}
                  {sortConfig.key === "productName"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▲"}
                </th>
                <th className="border-b-2 min-w-16 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-gray-600 text-lg py-4 px-2">
                    We couldn't find any records
                  </td>
                </tr>
              ) : (
                currentItems.map((request, index) => (
                  <tr key={index}>
                    <td className="border-b-2 py-2 min-w-8 pl-4 text-left">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
                      {request.customerName}
                    </td>
                    <td className="border-b-2 min-w-32 text-left">
                      <Tooltip title={request.productName} placement="right">
                        <span className="truncate block w-28 cursor-pointer">
                          {request.productName}
                        </span>
                      </Tooltip>
                    </td>
                    <td className="border-b-2 py-2 min-w-16 pl-4 text-center">
                      {request.price.toFixed(2)}
                    </td>
                    <td className="border-b-2 py-2 min-w-16 pl-4 text-center">
                      {request.quantity}
                    </td>
                    <td className="border-b-2 py-2 min-w-36 pl-4 text-center">
                      {request.comments && request.comments.trim().length > 0
                        ? request.comments
                        : "-"}
                    </td>

                    <td className="border-b-2 min-w-16 text-left">
                      {request.isActive ? "Active" : "Inactive"}
                    </td>
                    <td className="border-b-2 min-w-24 text-left">
                      {new Date(request.createdOn)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </td>
                    <td className="border-b-2 min-w-16 text-left">
                      <Tooltip placement="top" title="Delete">
                        <img
                          src={Bin}
                          alt="Delete"
                          className="cursor-pointer w-4 h-4 ml-4"
                        />
                      </Tooltip>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="block md:hidden space-y-4">
            {currentItems?.length > 0 ? (
              currentItems.map((request, i) => (
                <div key={i} className="bg-white shadow rounded-lg p-4 border">
                  <div className="flex gap-2">
                    <span className="font-semibold text-sm">S.No:</span>
                    <span>{indexOfFirstItem + i + 1}</span>
                  </div>
                  <div className="mt-2">
                    <p>
                      <span className="font-semibold">Customer Name:</span>{" "}
                      {request.customerName}
                    </p>
                    <p>
                      <span className="font-semibold">Product Name:</span>{" "}
                      {request.productName}
                    </p>
                    <p>
                      <span className="font-semibold">Status:</span>{" "}
                      {request.isActive ? "Active" : "Inactive"}
                    </p>
                    {/* <p>
                      <span className="font-semibold">Quantity:</span>{" "}
                      {quoted.quantity}
                    </p> */}
                    <p>
                      <span className="font-semibold"> Created Date:</span>{" "}
                      {new Date(request.createdOn)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </p>
                    {/* <p>
                      <span className="font-semibold"> Customer Name:</span>{" "}
                      {quoted.customerName}
                    </p>
                    <p>
                      <span className="font-semibold"> Status:</span>{" "}
                      {quoted.isActive ? "Active" : "Inactive"}
                    </p> */}
                    <p>
                      <span className="font-semibold"> Action:</span>{" "}
                      <Tooltip title="Delete" placement="top">
                        <img
                          src={Bin}
                          alt="Delete"
                          className="cursor-pointer w-4 h-4 "
                        />
                      </Tooltip>
                    </p>
                  </div>
                  {/* <div className="mt-4 flex space-x-4 items-center justify-start">
                   
                    <Tooltip title="Delete" placement="top">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-4 h-4 "
                      />
                    </Tooltip>
                  
                  </div> */}
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                {" "}
                We couldn't find any records
              </div>
            )}
          </div>
        </div>
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={request}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default LayoutAllrequestedQuote;

