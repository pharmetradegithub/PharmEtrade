// import React, { useEffect, useState } from "react";
// import { CiMenuKebab } from "react-icons/ci";
// import { Link, useNavigate } from "react-router-dom";
// import wrong from "../../../../assets/Icons/wrongred.png";
// import { FaPlus } from "react-icons/fa6";
// // import ProductFields from "../Components/ProductFields";
// // import EditFields from "../Components/EditFields";
// import filter from "../../../../assets/Filter_icon.png";
// import edit from "../../../../assets/Edit.png";
// import Bin from "../../../../assets/Bin.png";
// import Deactivate from "../../../../assets/Deactivate.png";
// import Loading from "../../../Loading";
// import { useDispatch, useSelector } from "react-redux";
// import { Tooltip } from "@mui/material";
// import next from "../../../../assets/Next_icon.png";
// import previous from "../../../../assets/Previous_icon.png";
// import {
//   DeleteProductAPI,
//   fetchDeactiveProduct,
//   fetchProductsBySellerApi,
// } from "../../../../Api/ProductApi";
// import Notification from "../../../Notification";
// import Pagination from "../../../Pagination";
// import { fetchSellerDashboard } from "../../../../Api/Dashboard";

// const LayoutPostingProducts = () => {
//   const [sortConfig, setSortConfig] = useState({
//     key: "",
//     direction: "ascending",
//   });

//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const deactives = useSelector((state) => state.product.deactiveProduct);
//   console.log("listing-->", deactives);
//   const deletes = useSelector((state) => state.product.deleteProduct);
//   console.log("delete-->", deletes);
//   const dispatch = useDispatch();
//   const [error, setError] = useState(null);
//   const [deactive, setdeactive] = useState(null);
//   const sellerDashboard = useSelector((state) => state.dashboard.getSellerId);
//   console.log("sellerdash-->", sellerDashboard);

//   const [deleteProduct, setDeleteProduct] = useState(null);
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });

//   const [showPopup, setShowPopup] = useState({
//     editProduct: false,
//   });
//   const user = useSelector((state) => state.user.user);
//   console.log("userId-->", user);
//   const [editProduct, seteditProduct] = useState(null);
//   // const stats = [
//   //   { label: "Total Product", value: sellerDashboard?.totalProducts, percentage: 75 },
//   //   {
//   //     label: "Total Approved Product", value: sellerDashboard?.activeProducts, percentage: 60 },
//   //   // { label: "Total Enabled Product", value: 90, percentage: -11 },
//   //   { label: "Price", value: sellerDashboard?.totalSaleValue, percentage: 50 },
//   // ];
//   const calculatePercentage = (part, total) => {
//     if (!part || !total || total === 0 || isNaN(part) || isNaN(total)) {
//       return 0; // Return 0 if values are invalid or total is 0
//     }
//     return (part / total) * 100;
//   };

//   const stats = [
//     {
//       label: "Total No. of Product",
//       value: sellerDashboard?.totalProducts || 0, // Fallback to 0 if undefined or null
//       percentage: 100, // Since it's the total, it represents 100%
//     },
//     {
//       label: "Total Approved Product",
//       value: sellerDashboard?.activeProducts || 0,
//       percentage: calculatePercentage(
//         sellerDashboard?.activeProducts,
//         sellerDashboard?.totalProducts
//       ), // Calculating the percentage
//     },
//     {
//       label: "Price",
//       value: `$${(sellerDashboard?.totalSaleValue || 0).toFixed(2)}`,
//       percentage: calculatePercentage(
//         sellerDashboard?.totalSaleValue,
//         sellerDashboard?.totalProducts
//       ), // Assuming you're calculating the price per product
//     },
//   ];

//   const queryParam = location.pathname;
//   const parts = queryParam.split("/");
//   const listed = parts[2];
//   const [trigger, settrigger] = useState(1);

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     setLoading(true); // Set loading state before the request

//   //     try {
//   //       const response = await fetch(
//   //         `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetBySeller?sellerId=${user?.customerId}`
//   //       );

//   //       if (!response.ok) {
//   //         throw new Error("Network response was not ok");
//   //       }

//   //       const data = await response.json();
//   //       setProducts(data.result);
//   //     } catch (error) {
//   //       setError(error); // Handle and store error
//   //     } finally {
//   //       setLoading(false); // Ensure loading is stopped
//   //     }
//   //   };

//   //   if (listed && user?.customerId) {
//   //     fetchProducts();
//   //   }
//   // }, [listed, user?.customerId, trigger]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Set loading state before the request

//       try {
//         if (listed && user?.customerId) {
//           const productPromise = await fetchProductsBySellerApi(
//             user?.customerId
//           );
//           // Sort products by createdDate (or the relevant date property)
//           // const sortedProducts = productPromise.sort((a, b) => {
//           //   return new Date(b.createdDate) - new Date(a.createdDate); // Adjust 'createdDate' to your actual date property
//           // });

//           // Set product data
//           setProducts(productPromise);
//           // console.log("sorted",sortedProducts);
//         }
//       } catch (error) {
//         setError(error); // Handle and store error
//       } finally {
//         setLoading(false); // Ensure loading is stopped
//       }
//     };

//     if (user?.customerId) {
//       fetchData();
//     }
//   }, [listed, user?.customerId, trigger]);

//   const handleAddNewProductClick = () => {
//     navigate("layout/addproduct");
//   };

//   const handleEditProduct = (product) => {
//     navigate(`/layout/addproduct?productId=${product.productID}`);
//   };

//   const handleClosePopup = () => {
//     setShowPopup({ addProduct: false, editProduct: false });
//   };
//   console.log("ghjkghfgvbg", products);

//   // const itemsPerPage = 10;
//   // const [currentPage, setCurrentPage] = useState(1);

//   const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);

//   const [openPop, setOpenPop] = useState(false);
//   const [deletePop, setDeletePop] = useState(false);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };
//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(parseInt(event.target.value));
//     setCurrentPage(1); // Reset to page 1 when items per page is changed
//   };

//   // const handleNextPage = () => {
//   //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   // };

//   // const handlePreviousPage = () => {
//   //   setCurrentPage((prev) => Math.max(prev - 1, 1));
//   // };

//   const deactivatePopUp = (productID) => {
//     setOpenPop(true);
//     setdeactive(productID);
//   };
//   const cancelButton = () => {
//     setOpenPop(false);
//   };

//   const successButton = () => {
//     try {
//       dispatch(fetchDeactiveProduct(deactive));
//       setOpenPop(false);
//       setNotification({
//         show: true,
//         message: "Product Deactivate Successfully!",
//       });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const closeButton = () => {
//     setOpenPop(false);
//   };
//   const DeleteProduct = (productID) => {
//     setDeletePop(true);
//     setDeleteProduct(productID);
//   };
//   const cancelDeleteButton = () => {
//     setDeletePop(false);
//   };
//   const successDeleteButton = async () => {
//     try {
//       await DeleteProductAPI(deleteProduct);
//       settrigger((prev) => prev + 1);
//       setDeletePop(false);
//       setNotification({ show: true, message: "Product Delete Successfully!" });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const closeDeleteButton = () => {
//     setDeletePop(false);
//   };

//   useEffect(() => {
//     dispatch(fetchSellerDashboard(user?.customerId));
//   }, []);

//   const handleSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };
//   // Sorting logic
//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortConfig.key) {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];

//       if (sortConfig.direction === "ascending") {
//         return aValue > bValue ? 1 : -1;
//       } else {
//         return aValue < bValue ? 1 : -1;
//       }
//     }
//     return 0;
//   });
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
//   const sortedCurrentItems = currentItems.sort((a, b) => {
//     const aDate = new Date(a.createdDate);
//     const bDate = new Date(b.createdDate);

//     return bDate - aDate; // Descending order
//   });
//   const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);

//   return (
//     <div className="relative bg-gray-100 w-full h-full flex justify-center overflow-scroll items-center">
//       {notification.show && (
//         <Notification show={notification.show} message={notification.message} />
//       )}
//       {openPop && (
//         <div
//           className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
//             <div className="flex justify-end  ">
//               <button className="w-5 p-1 -mt-8 mx-2" onClick={closeButton}>
//                 <img src={wrong} className="w-6 h-4" />
//               </button>
//             </div>
//             <h1 className="text-black text-center mt-2">
//               Are you sure you want to deactivate this product ?
//             </h1>
//             <div className="flex justify-around mt-6">
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={cancelButton}
//               >
//                 No
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={successButton}
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {deletePop && (
//         <div
//           className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
//             <div className="flex justify-end  ">
//               <button
//                 className="w-5 p-1 -mt-8 mx-2"
//                 onClick={closeDeleteButton}
//               >
//                 <img src={wrong} className="w-6 h-4" />
//               </button>
//             </div>
//             <h1 className="text-black text-center mt-2">
//               Are you sure you want to delete this product ?
//             </h1>
//             <div className="flex justify-around mt-6">
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={cancelDeleteButton}
//               >
//                 No
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={successDeleteButton}
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="w-[95%] h-full mt-4 ">
//         <div className="flex justify-between sm:flex-row flex-col gap-4 ">
//           <h2 className="sm:text-[22px] text-[15px] text-blue-900 font-semibold ml-4">
//             Marketplace Product List
//           </h2>
//           <Link to="/layout/addproduct">
//             <button
//               className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md ml-4"
//               onClick={handleAddNewProductClick}
//             >
//               <FaPlus /> Add New Product
//             </button>
//           </Link>

//           {/* {showPopup.addProduct && (
//             <div className="absolute bg-black inset-0 flex items-center justify-center overflow-scroll bg-gray-">
//               <ProductFields />
//               <button onClick={handleClosePopup}>Close</button>
//             </div>
//           )} */}
//         </div>

//         <div className="flex flex-wrap gap-2 w-full justify-normal items-center  p-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
//             >
//               <div className="w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="text-[16px] text-gray-700 font-semibold">
//                     {stat.label}
//                   </div>
//                   {/* <div className="menu-icon">
//                     <CiMenuKebab />
//                   </div> */}
//                 </div>
//                 <div className="flex justify-between mt-2 items-center">
//                   <div className="text-xl font-semibold">{stat.value}</div>
//                   {/* <div
//                     className={`text-sm p-1 rounded-lg ${
//                       stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
//                     }`}
//                   >
//                     {stat.percentage > 0 ? "↑" : "↓"}{" "}
//                     {Math.abs(stat.percentage)}%
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-full">
//           {/* <div className="flex justify-end">
//             <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
//               <img src={filter} className="w-6 h-6" />
//               Filter
//             </button>
//             <select className="ml-2">
//               <option>Columns</option>
//             </select>
//           </div> */}

//           <div className="text-[15px] mt-4">
//             {loading && (
//               <div>
//                 <Loading />
//               </div>
//             )}
//             {error && <div>Error: {error.message}</div>}
//             {!loading && !error && (
//               <table className=" hidden md:table w-full">
//                 <thead className="bg-blue-900 text-white">
//                   <tr className="border-b-2">
//                     <th className="px-2 py-2 text-left">S.No</th>
//                     <th className="px-2 py-2 text-left">Thumbnail</th>
//                     <th
//                       className=" px-2 py-2 text-left cursor-pointer"
//                       onClick={() => handleSort("productName")}
//                     >
//                       Product Name{" "}
//                       {sortConfig.key === "productName"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//                     </th>
//                     <th
//                       className="px-2 py-2 text-left cursor-pointer"
//                       onClick={() => handleSort("createdDate")}
//                     >
//                       Created Date{" "}
//                       {sortConfig.key === "createdDate"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//                     </th>
//                     <th
//                       className="px-2 py-2 text-right cursor-pointer"
//                       onClick={() => handleSort("unitPrice")}
//                     >
//                       Unit Price{" "}
//                       {sortConfig.key === "unitPrice"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//                     </th>
//                     <th
//                       className="px-2 py-2 text-right cursor-pointer"
//                       onClick={() => handleSort("upnMemberPrice")}
//                     >
//                       UPN Member Price{" "}
//                       {sortConfig.key === "upnMemberPrice"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//                     </th>
//                     <th
//                       className="px- py-2 text-right cursor-pointer"
//                       onClick={() => handleSort("salePrice")}
//                     >
//                       Sale Price{" "}
//                       {sortConfig.key === "salePrice"
//                         ? sortConfig.direction === "ascending"
//                           ? "▲"
//                           : "▼"
//                         : "▲"}
//                     </th>

//                     <th className="px-2 py-2 text-left">Saleprice Start</th>
//                     <th className="px-2 py-2 text-left">Saleprice End</th>
//                     <th className=" px-2 py-2 text-left cursor-pointer">
//                       Status
//                     </th>
//                     <th className="px-2 py-2 ">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sortedCurrentItems.length === 0 ? (
//                     <tr>
//                       <td colSpan="5" className="text-center py-4">
//                         No products available
//                       </td>
//                     </tr>
//                   ) : (
//                     sortedCurrentItems.map((product, index) => (
//                       <tr key={product.id} className="border-b">
//                         <td className="px-4 py-2">
//                           {indexOfFirstItem + index + 1}
//                         </td>
//                         <td className="px-2 py-2">
//                           <img
//                             src={product?.productGallery?.imageUrl}
//                             className="w-12 object-cover"
//                           />
//                         </td>
//                         <td className=" py-2">
//                           <Tooltip title={product.productName} placement="top">
//                             <div className="truncate max-w-[150px] cursor-pointer">
//                               {product.productName}
//                             </div>
//                           </Tooltip>
//                         </td>
//                         {/* <td className="px-2 py-2">{product.productName}</td> */}
//                         {/* <td className="px-4 py-2">{}</td> */}
//                         <td className="px-2 py-2">
//                           {(() => {
//                             const date = new Date(product.createdDate);
//                             const month = String(date.getMonth() + 1).padStart(
//                               2,
//                               "0"
//                             ); // Get month and pad with zero if necessary
//                             const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with zero if necessary
//                             const year = date.getFullYear(); // Get full year
//                             return `${month}-${day}-${year}`; // Format MM-DD-YYYY
//                           })()}
//                         </td>
//                         <td className="px-2 py-2 text-right">
//                           ${product.unitPrice.toFixed(2)}
//                         </td>
//                         <td className="px-4 py-2 text-right">
//                           ${product.upnMemberPrice.toFixed(2)}
//                         </td>
//                         <td className="px-5 py-2 text-right">
//                           ${product.salePrice.toFixed(2)}
//                         </td>
//                         <td className="px-4 py-2 text-center">
//                           {new Date(product.salePriceValidFrom)
//                             .toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "2-digit",
//                               day: "2-digit",
//                             })
//                             .replace(/\//g, "-")}
//                         </td>
//                         <td className="px-2 py-2 text-center">
//                           {new Date(product.salePriceValidTo)
//                             .toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "2-digit",
//                               day: "2-digit",
//                             })
//                             .replace(/\//g, "-")}
//                         </td>
//                         <td className="">
//                           {product.isActive ? "Activate" : "Deactivate"}
//                         </td>

//                         <td className=" mt-4 py-2 cursor-pointer flex items-center space-x-2">
//                           <Tooltip title="Edit" placement="top">
//                             <img
//                               src={edit}
//                               alt="Edit"
//                               className="cursor-pointer w-7 h-7"
//                               onClick={() => handleEditProduct(product)}
//                             />
//                           </Tooltip>
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={Bin}
//                               alt="Delete"
//                               className="cursor-pointer w-4 h-4"
//                               onClick={() => DeleteProduct(product.productID)}
//                             />
//                           </Tooltip>
//                           <Tooltip title="Deactivate" placement="top">
//                             <img
//                               src={Deactivate}
//                               alt="Deactivate"
//                               className="cursor-pointer w-4 h-4"
//                               onClick={() => deactivatePopUp(product.productID)}
//                             />
//                           </Tooltip>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             )}
//             <div className="block md:hidden space-y-4">
//               {sortedCurrentItems.length === 0 ? (
//                 <div className="text-center py-4">No products available</div>
//               ) : (
//                 sortedCurrentItems.map((product, index) => (
//                   <div
//                     key={product.id}
//                     className="bg-white shadow rounded-lg p-4 border"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src={product?.productGallery?.imageUrl}
//                         className="w-16 h-16 object-cover"
//                         alt="Thumbnail"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-lg">
//                           {product.productName}
//                         </h3>
//                         <p className="text-sm text-gray-500">
//                           Created:{" "}
//                           {new Date(product.createdDate)
//                             .toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "2-digit",
//                               day: "2-digit",
//                             })
//                             .replace(/\//g, "-")}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="mt-4 space-y-2">
//                       <p className="text-sm">
//                         <span className="font-medium">Unit Price:</span> $
//                         {product.unitPrice.toFixed(2)}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">UPN Member Price:</span> $
//                         {product.upnMemberPrice.toFixed(2)}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">Sale Price:</span> $
//                         {product.salePrice.toFixed(2)}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">
//                           Sale Price Valid From:
//                         </span>{" "}
//                         {new Date(product.salePriceValidFrom)
//                           .toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "2-digit",
//                             day: "2-digit",
//                           })
//                           .replace(/\//g, "-")}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">
//                           Sale Price Valid To:
//                         </span>{" "}
//                         {new Date(product.salePriceValidTo)
//                           .toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "2-digit",
//                             day: "2-digit",
//                           })
//                           .replace(/\//g, "-")}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">Status:</span>{" "}
//                         {product.isActive ? "Activate" : "Deactivate"}
//                       </p>
//                     </div>
//                     <div className="mt-4 flex justify-start items-center space-x-4">
//                       <Tooltip title="Edit" placement="top">
//                         <img
//                           src={edit}
//                           alt="Edit"
//                           className="cursor-pointer w-7 h-7"
//                           onClick={() => handleEditProduct(product)}
//                         />
//                       </Tooltip>
//                       <Tooltip placement="top" title="Delete">
//                         <img
//                           src={Bin}
//                           alt="Delete"
//                           className="cursor-pointer w-4 h-4"
//                           onClick={() => DeleteProduct(product.productID)}
//                         />
//                       </Tooltip>
//                       <Tooltip title="Deactivate" placement="top">
//                         <img
//                           src={Deactivate}
//                           alt="Deactivate"
//                           className="cursor-pointer w-4 h-4"
//                           onClick={() => deactivatePopUp(product.productID)}
//                         />
//                       </Tooltip>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//         {/* <div className="flex justify-end my-2">
//           <button
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className="mx-2 px-4 border p-2 text-white rounded-lg"
//           >
//             <img src={previous} className="w-2" alt="Previous Page" />
//           </button>
//           <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//             {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="mx-2 px-4 border p-2 text-white rounded-lg"
//           >
//             <img src={next} className="w-2" alt="Next Page" />
//           </button>
//         </div> */}

//         <Pagination
//           indexOfFirstItem={indexOfFirstItem}
//           indexOfLastItem={indexOfLastItem}
//           productList={products}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//       {/* {showPopup.editProduct && (
//         <div className="absolute inset-0 flex  flex-col bg-gray-100">
//           <button onClick={handleClosePopup} className=" flex justify-end mr-4">
//             Close
//           </button>

//           <EditFields product={editProduct} />
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default LayoutPostingProducts;

import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import wrong from "../../../../assets/Icons/wrongred.png";
import { FaPlus } from "react-icons/fa6";
// import ProductFields from "../Components/ProductFields";
// import EditFields from "../Components/EditFields";
import filter from "../../../../assets/Filter_icon.png";
import edit from "../../../../assets/Edit.png";
import Bin from "../../../../assets/Bin.png";
import Deactivate from "../../../../assets/Deactivate.png";
import Activate from "../../../../assets/Activate.jpg";
import Loading from "../../../Loading";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import next from "../../../../assets/Next_icon.png";
import previous from "../../../../assets/Previous_icon.png";
import {
  DeleteProductAPI,
  fetchActivateProduct,
  fetchDeactiveProduct,
  fetchProductsBySellerApi,
} from "../../../../Api/ProductApi";
import Notification from "../../../Notification";
import Pagination from "../../../Pagination";
import { fetchSellerDashboard } from "../../../../Api/Dashboard";

const LayoutPostingProducts = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const deactives = useSelector((state) => state.product.deactiveProduct);
  console.log("listing-->", deactives);
  const deletes = useSelector((state) => state.product.deleteProduct);
  console.log("delete-->", deletes);
  // const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [deactive, setdeactive] = useState(null);
  const sellerDashboard = useSelector((state) => state.dashboard.getSellerId);
  console.log("sellerdash-->", sellerDashboard);

  const [deleteProduct, setDeleteProduct] = useState(null);
  const [activeProductID, setActiveProductID] = useState(null);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [showPopup, setShowPopup] = useState({
    editProduct: false,
  });
  const user = useSelector((state) => state.user.user);
  console.log("userId-->", user);
  const [editProduct, seteditProduct] = useState(null);
  // const stats = [
  //   { label: "Total Product", value: sellerDashboard?.totalProducts, percentage: 75 },
  //   {
  //     label: "Total Approved Product", value: sellerDashboard?.activeProducts, percentage: 60 },
  //   // { label: "Total Enabled Product", value: 90, percentage: -11 },
  //   { label: "Price", value: sellerDashboard?.totalSaleValue, percentage: 50 },
  // ];
  const calculatePercentage = (part, total) => {
    if (!part || !total || total === 0 || isNaN(part) || isNaN(total)) {
      return 0; // Return 0 if values are invalid or total is 0
    }
    return (part / total) * 100;
  };

  const stats = [
    {
      label: "Total No. of Product",
      value: sellerDashboard?.totalProducts || 0, // Fallback to 0 if undefined or null
      percentage: 100, // Since it's the total, it represents 100%
    },
    {
      label: "Total Approved Product",
      value: sellerDashboard?.activeProducts || 0,
      percentage: calculatePercentage(
        sellerDashboard?.activeProducts,
        sellerDashboard?.totalProducts
      ), // Calculating the percentage
    },
    {
      label: "Price",
      value: `$${(sellerDashboard?.totalSaleValue || 0).toFixed(2)}`,
      percentage: calculatePercentage(
        sellerDashboard?.totalSaleValue,
        sellerDashboard?.totalProducts
      ), // Assuming you're calculating the price per product
    },
  ];

  const queryParam = location.pathname;
  const parts = queryParam.split("/");
  const listed = parts[2];
  const [trigger, settrigger] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state before the request

      try {
        if (listed && user?.customerId) {
          const productPromise = await fetchProductsBySellerApi(
            user?.customerId
          );
          // Sort products by createdDate (or the relevant date property)
          // const sortedProducts = productPromise.sort((a, b) => {
          //   return new Date(b.createdDate) - new Date(a.createdDate); // Adjust 'createdDate' to your actual date property
          // });

          // Set product data
          setProducts(productPromise);
          // console.log("sorted",sortedProducts);
        }
      } catch (error) {
        setError(error); // Handle and store error
      } finally {
        setLoading(false); // Ensure loading is stopped
      }
    };

    if (user?.customerId) {
      fetchData();
    }
  }, [listed, user?.customerId, activeProductID, trigger]);

  const handleAddNewProductClick = () => {
    navigate("layout/addproduct");
  };

  const handleEditProduct = (product) => {
    navigate(`/layout/addproduct?productId=${product.productID}`);
  };

  const handleClosePopup = () => {
    setShowPopup({ addProduct: false, editProduct: false });
  };
  console.log("ghjkghfgvbg", products);

  // const itemsPerPage = 10;
  // const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);

  // const [openPop, setOpenPop] = useState(false);
  const [deletePop, setDeletePop] = useState(false);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to page 1 when items per page is changed
  };

  // const deactivatePopUp = (productID) => {
  //   setOpenPop(true);
  //   setdeactive(productID);
  // };
  // const cancelButton = () => {
  //   setOpenPop(false);
  // };

  // const successButton = () => {
  //   try {
  //     dispatch(fetchDeactiveProduct(deactive));
  //     setOpenPop(false);
  //     setNotification({
  //       show: true,
  //       message: "Product Deactivate Successfully!",
  //     });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const closeButton = () => {
  //   setOpenPop(false);
  // };
  const DeleteProduct = (productID) => {
    setDeletePop(true);
    setDeleteProduct(productID);
  };
  const cancelDeleteButton = () => {
    setDeletePop(false);
  };
  const successDeleteButton = async () => {
    try {
      await DeleteProductAPI(deleteProduct);
      settrigger((prev) => prev + 1);
      setDeletePop(false);
      setNotification({ show: true, message: "Product Delete Successfully!" });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  const closeDeleteButton = () => {
    setDeletePop(false);
  };

  useEffect(() => {
    dispatch(fetchSellerDashboard(user?.customerId));
  }, []);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  // Sorting logic
  const sortedProducts = [...(products || [])].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (sortConfig.direction === "ascending") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    }
    return 0;
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const sortedCurrentItems = currentItems.sort((a, b) => {
    const aDate = new Date(a.createdDate);
    const bDate = new Date(b.createdDate);

    return bDate - aDate; // Descending order
  });
  const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);

  const [openPop, setOpenPop] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const dispatch = useDispatch();

  // Popup handlers for Deactivate
  const deactivatePopUp = (productID) => {
    setOpenPop(true);
    setIsActivating(false); // Indicate that it's a deactivation popup
    setActiveProductID(productID);
  };

  // Popup handlers for Activate
  const activatePopUp = (productID) => {
    setOpenPop(true);
    setIsActivating(true); // Indicate that it's an activation popup
    setActiveProductID(productID);
  };

  const closeButton = () => {
    setOpenPop(false);
    setActiveProductID(null);
  };

  const cancelButton = () => {
    setOpenPop(false);
    setActiveProductID(null);
  };

  const successButton = async () => {
    try {
      // setLoading(true); // Set loading to true before API call
      if (isActivating) {
        // Activation logic
        await dispatch(fetchActivateProduct(activeProductID));
        setNotification({
          show: true,
          message: "Product Activated Successfully!",
        });
      } else {
        // Deactivation logic
        await dispatch(fetchDeactiveProduct(activeProductID));
        setNotification({
          show: true,
          message: "Product Deactivated Successfully!",
        });
      }
      setOpenPop(false);
      settrigger((prev) => prev + 1); // Update trigger to reload data
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Ensure loading is stopped after the API call
    }
  };

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center  items-center">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      {openPop && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end">
              <button className="w-5 p-1 -mt-8 mx-2" onClick={closeButton}>
                <img src={wrong} className="w-6 h-4" alt="Close" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to{" "}
              {isActivating ? "activate" : "deactivate"} this product?
            </h1>
            <div className="flex justify-around mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={cancelButton}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={successButton}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {deletePop && (
        <div
          className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end  ">
              <button
                className="w-5 p-1 -mt-8 mx-2"
                onClick={closeDeleteButton}
              >
                <img src={wrong} className="w-6 h-4" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to delete this product ?
            </h1>
            <div className="flex justify-around mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={cancelDeleteButton}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={successDeleteButton}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-[95%] h-full mt-4 ">
        <div className="flex justify-between sm:flex-row flex-col gap-4 ">
          <h2 className="sm:text-[22px] text-[15px] text-blue-900 font-semibold ml-4">
            Marketplace Product List
          </h2>
          <Link to="/layout/addproduct">
            <button
              className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md ml-4"
              onClick={handleAddNewProductClick}
            >
              <FaPlus /> Add New Product
            </button>
          </Link>

          {/* {showPopup.addProduct && (
            <div className="absolute bg-black inset-0 flex items-center justify-center overflow-scroll bg-gray-">
              <ProductFields />
              <button onClick={handleClosePopup}>Close</button>
            </div>
          )} */}
        </div>

        <div className="flex flex-wrap gap-2 w-full justify-normal items-center  p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] text-gray-700 font-semibold">
                    {stat.label}
                  </div>
                  {/* <div className="menu-icon">
                    <CiMenuKebab />
                  </div> */}
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-xl font-semibold">{stat.value}</div>
                  {/* <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"}{" "}
                    {Math.abs(stat.percentage)}%
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full overflow-scroll">
          {/* <div className="flex justify-end">
            <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div> */}

          <div className="text-[15px] mt-4">
            {loading && (
              <div>
                <Loading />
              </div>
            )}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && (
              <table className=" hidden md:table w-full">
                <thead className="bg-blue-900 text-white">
                  <tr className="border-b-2">
                    <th className="px-2 py-2 text-left">S.No</th>
                    <th className="px-2 py-2 text-left">Thumbnail</th>
                    <th
                      className=" px-2 py-2 text-left cursor-pointer"
                      onClick={() => handleSort("productName")}
                    >
                      Product Name{" "}
                      {sortConfig.key === "productName"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px-2 py-2 text-left cursor-pointer"
                      onClick={() => handleSort("createdDate")}
                    >
                      Created Date{" "}
                      {sortConfig.key === "createdDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px-2 py-2 text-right cursor-pointer"
                      onClick={() => handleSort("unitPrice")}
                    >
                      Price{" "}
                      {sortConfig.key === "unitPrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px-2 py-2 text-right cursor-pointer"
                      onClick={() => handleSort("upnMemberPrice")}
                    >
                      UPN Price{" "}
                      {sortConfig.key === "upnMemberPrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px- py-2 text-right cursor-pointer"
                      onClick={() => handleSort("salePrice")}
                    >
                      Sale Price{" "}
                      {sortConfig.key === "salePrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>

                    <th className="px-2 py-2 text-left">Saleprice Start</th>
                    <th className="px-2 py-2 text-left">Saleprice End</th>
                    <th
                      className="px-2 py-2 text-right cursor-pointer"
                      onClick={() => handleSort("receivableUnitPrice")}
                    >
                      Receivable Price{" "}
                      {sortConfig.key === "receivableUnitPrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px-2 py-2 text-right cursor-pointer"
                      onClick={() => handleSort("receivableUPNMemberPrice")}
                    >
                      Receivable UPN Price{" "}
                      {sortConfig.key === "receivableUPNMemberPrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th
                      className="px-2 py-2 text-right cursor-pointer"
                      onClick={() => handleSort("receivableSalePrice")}
                    >
                      Receivable Sale Price{""}
                      {sortConfig.key === "receivableSalePrice"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th className=" px-2 py-2 text-left cursor-pointer">
                      Status
                    </th>
                    <th className="px-6 py-2 text-right ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCurrentItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No products available
                      </td>
                    </tr>
                  ) : (
                    sortedCurrentItems.map((product, index) => (
                      <tr key={product.id} className="border-b">
                        <td className="px-4 py-2">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-2 py-2">
                          <img
                            src={product?.productGallery?.imageUrl}
                            className="w-12 object-cover"
                          />
                        </td>
                        <td className=" py-2">
                          <Tooltip title={product.productName} placement="top">
                            <div className="truncate max-w-[100px] cursor-pointer">
                              {product.productName}
                            </div>
                          </Tooltip>
                        </td>
                        {/* <td className="px-2 py-2">{product.productName}</td> */}
                        {/* <td className="px-4 py-2">{}</td> */}
                        <td className="px-2 py-2">
                          {(() => {
                            const date = new Date(product.createdDate);
                            const month = String(date.getMonth() + 1).padStart(
                              2,
                              "0"
                            ); // Get month and pad with zero if necessary
                            const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with zero if necessary
                            const year = date.getFullYear(); // Get full year
                            return `${month}-${day}-${year}`; // Format MM-DD-YYYY
                          })()}
                        </td>
                        <td className="px-2 py-2 text-right">
                          ${product.unitPrice.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right">
                          ${product.upnMemberPrice.toFixed(2)}
                        </td>
                        <td className="px-5 py-2 text-right">
                          ${product.salePrice.toFixed(2)}
                        </td>
                        {/* <td className="px-4 py-2 text-center">
                          {new Date(product.salePriceValidFrom)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, "-")}
                        </td> */}
                        <td className="px-4 py-2 text-center">
                          {product.salePriceValidFrom &&
                          !isNaN(
                            new Date(product.salePriceValidFrom).getTime()
                          ) &&
                          new Date(product.salePriceValidFrom).getFullYear() >
                            999
                            ? new Date(product.salePriceValidFrom)
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/\//g, "-")
                            : "-"}
                        </td>

                        <td className="px-2 py-2 text-center">
                          {product.salePriceValidTo &&
                          !isNaN(
                            new Date(product.salePriceValidTo).getTime()
                          ) &&
                          new Date(product.salePriceValidTo).getFullYear() > 999
                            ? new Date(product.salePriceValidTo)
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/\//g, "-")
                            : "-"}
                        </td>

                        <td className="px-2 py-2 text-right">
                          ${product.receivableUnitPrice.toFixed(2)}
                        </td>
                        <td className="px-2 py-2 text-right">
                          ${product.receivableUPNMemberPrice.toFixed(2)}
                        </td>
                        <td className="px-2 py-2 text-right">
                          ${product.receivableSalePrice.toFixed(2)}
                        </td>
                        <td className="">
                          {product.isActive ? "Activate" : "Deactivate"}
                        </td>

                        <td className=" mt-4 py-2 cursor-pointer flex items-center space-x-2">
                          <Tooltip title="Edit" placement="top">
                            <img
                              src={edit}
                              alt="Edit"
                              className="cursor-pointer w-7 h-7"
                              onClick={() => handleEditProduct(product)}
                            />
                          </Tooltip>
                          {/* <Tooltip
                            title={product.isActive ? "Deactivate" : "Activate"}
                            placement="top"
                          >
                            <img
                              src={product.isActive ? Deactivate : Activate}
                              alt={product.isActive ? "Deactivate" : "Activate"}
                              className="cursor-pointer w-4 h-4"
                              onClick={() =>
                                product.isActive
                                  ? deactivatePopUp(product.productID)
                                  : activatePopUp(product.productID)
                              }
                            />
                          </Tooltip> */}
                          {product.isActive ? (
                            <Tooltip title="Deactivate" placement="top">
                              <img
                                src={Deactivate}
                                alt="Deactivate"
                                className="cursor-pointer w-4 h-4"
                                onClick={() =>
                                  deactivatePopUp(product.productID)
                                }
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Activate" placement="top">
                              <img
                                src={Activate}
                                alt="Activate"
                                className="cursor-pointer w-4 h-4"
                                onClick={() => activatePopUp(product.productID)}
                              />
                            </Tooltip>
                          )}
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={Bin}
                              alt="Delete"
                              className="cursor-pointer w-4 h-4"
                              onClick={() => DeleteProduct(product.productID)}
                            />
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
            <div className="block md:hidden space-y-4">
              {sortedCurrentItems.length === 0 ? (
                <div className="text-center py-4">No products available</div>
              ) : (
                sortedCurrentItems.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white shadow rounded-lg p-4 border"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product?.productGallery?.imageUrl}
                        className="w-16 h-16 object-cover"
                        alt="Thumbnail"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">
                          {product.productName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Created:{" "}
                          {new Date(product.createdDate)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, "-")}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Unit Price:</span> $
                        {product.unitPrice.toFixed(2)}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">UPN Member Price:</span> $
                        {product.upnMemberPrice.toFixed(2)}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Sale Price:</span> $
                        {product.salePrice.toFixed(2)}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">
                          Sale Price Valid From:
                        </span>{" "}
                        {new Date(product.salePriceValidFrom)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">
                          Sale Price Valid To:
                        </span>{" "}
                        {new Date(product.salePriceValidTo)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Status:</span>{" "}
                        {product.isActive ? "Activate" : "Deactivate"}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start items-center space-x-4">
                      <Tooltip title="Edit" placement="top">
                        <img
                          src={edit}
                          alt="Edit"
                          className="cursor-pointer w-7 h-7"
                          onClick={() => handleEditProduct(product)}
                        />
                      </Tooltip>
                      <Tooltip placement="top" title="Delete">
                        <img
                          src={Bin}
                          alt="Delete"
                          className="cursor-pointer w-4 h-4"
                          onClick={() => DeleteProduct(product.productID)}
                        />
                      </Tooltip>
                      <Tooltip title="Deactivate" placement="top">
                        <img
                          src={Deactivate}
                          alt="Deactivate"
                          className="cursor-pointer w-4 h-4"
                          onClick={() => deactivatePopUp(product.productID)}
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* <div className="flex justify-end my-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="mx-2 px-4 border p-2 text-white rounded-lg"
          >
            <img src={previous} className="w-2" alt="Previous Page" />
          </button>
          <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 border p-2 text-white rounded-lg"
          >
            <img src={next} className="w-2" alt="Next Page" />
          </button>
        </div> */}

        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={products}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* {showPopup.editProduct && (
        <div className="absolute inset-0 flex  flex-col bg-gray-100">
          <button onClick={handleClosePopup} className=" flex justify-end mr-4">
            Close
          </button>

          <EditFields product={editProduct} />
        </div>
      )} */}
    </div>
  );
};

export default LayoutPostingProducts;
