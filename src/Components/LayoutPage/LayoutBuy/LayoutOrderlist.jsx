import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/img1.png";
import { styled, alpha } from "@mui/material/styles";
import searchimg from "../../../assets/search1.png";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import search from "../../../assets/search.png";

import Invoice from "../../../assets/Icons/Invoice.png";
import {
  fetchGetOrder,
  fetchGetOrderByCustomerIdPage,
  fetchOrderInvoice,
  fetchOrderView,
  orderStatusUpdateApi,
} from "../../../Api/OrderApi";
import next from "../../../assets/Next_icon.png";
import previous from "../../../assets/Previous_icon.png";
import Pagination from "../../Pagination";
import wrong from "../../../assets/Icons/wrongred.png";
import {
  addRatingApi,
  fetchCriteriaProductsApi,
  fetchRatingWithProduct,
} from "../../../Api/ProductApi";
import LayoutBuyerCancelledgrid from "../LayoutDashboard/LayoutBuyerCancelledgrid";
import LayoutBuyerReceiversgrid from "../LayoutDashboard/LayoutBuyerReceiversgrid";
import LayoutBuyerUpcomingGrid from "../LayoutDashboard/LayoutBuyerUpcomingGrid";
import TrackingOrder from "../../../Components/TermsAndConditions";
import Notification from "../../Notification";
import searchImg from "../../../assets/search-icon.png";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

function LayoutOrderList() {

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [indexOfLastItem, setindexOfLastItem] = useState(
    currentPage * itemsPerPage
  );
  const [isCancelled, setIsCancelled] = useState(false);
  const [indexOfFirstItem, setindexOfFirstItem] = useState(
    indexOfLastItem - itemsPerPage
  );
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // const localData = localStorage.getItem("userId")
  const user = useSelector((state) => state.user.user);

  const [getOrder, setGetOrder] = useState(null);
  const ordered = useSelector((state) => state.order.orderView);
  console.log("orderedview-->", ordered);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const pathname = location.pathname;
  const part = pathname.split("/");
  const orderId = part[2];

  console.log("current page", currentPage);
  const [sortedOrders, setsortedOrders] = useState(null);
  // Sorting orders by date
  // Filter orders by selected year
  const [filteredOrders, setfilteredOrders] = useState(null);
  useEffect(() => {
    if (getOrder != null) {
      const sortedOrders = Array.isArray(getOrder)
        ? [...getOrder].sort(
          (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
        )
        : [];
      setsortedOrders(sortedOrders);

      const filteredOrders = sortedOrders.filter(
        (order) => new Date(order.orderDate).getFullYear() === selectedYear
      );
      setfilteredOrders(filteredOrders);

      // Step 2: Handle Display Data
      const newDisplayData =
        searchResults && searchResults.length > 0
          ? searchResults
          : filteredOrders; // Use filteredOrders directly here
      setdisplayData(newDisplayData);
      console.log(newDisplayData, "newdisplay");
      // Step 3: Update Pagination Indices and Current Items
      if (newDisplayData?.length < itemsPerPage) {
        setCurrentPage(1);
      }
      const newIndexOfLastItem = currentPage * itemsPerPage;
      const newIndexOfFirstItem = newIndexOfLastItem - itemsPerPage;
      setindexOfLastItem(newIndexOfLastItem);
      setindexOfFirstItem(newIndexOfFirstItem);

      const newCurrentItems = newDisplayData.slice(
        newIndexOfFirstItem,
        newIndexOfLastItem
      );
      setcurrentItems(newCurrentItems);
      console.log("new current", newCurrentItems);
    }
  }, [getOrder, currentPage, indexOfFirstItem, indexOfLastItem, isCancelled]);

  //YEAR  SORTING
  useEffect(() => {
    const data = async () => {
      console.log("hey guys");
      const response = await fetchGetOrderByCustomerIdPage(user?.customerId);
      console.log(response, "response from api");
      setGetOrder(response);
    };
    if (user) data();
  }, [user]);

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
    setSearchResults(null);
  };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setcurrentItems] = useState(null);
  const [displayData, setdisplayData] = useState(
    searchResults && searchResults.length > 0 ? searchResults : filteredOrders
  );
  // const currentItems = displayData.slice(indexOfFirstItem, indexOfLastItem);
  console.log(searchResults, "search Results");


  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const [SearchInput, setSearchInput] = useState({
    productName: null,
  });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setSearchInput({
      ...SearchInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchClick(); // Call submit function when Enter is pressed
    }
  };

  // const handleSearchClick = async () => {
  //   const payload = {
  //     customerId: user.customerId,
  //     productName: SearchInput.productName

  //   }
  //   console.log("SearchInput:", payload); // Check SearchInput value
  //   try {
  //     const productsData = await fetchCriteriaProductsApi(payload);
  //     console.log("API Response:", productsData); // Check API response
  //     if (productsData) {
  //       setGetOrder(productsData); // Only set if valid
  //     } else {
  //       console.log("No data returned from API.");
  //     }
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };
  const handleSearchClick = async () => {
    const payload = {
      customerId: user.customerId,
      productName: SearchInput.productName,
    };
    try {
      const productsData = await fetchCriteriaProductsApi(payload);
      console.log(productsData, "Api call search");
      if (productsData && productsData.length > 0) {
        setSearchResults(productsData); // Store search results
        setGetOrder(productsData)
      } else {
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    const years = generateYears(currentYear, currentYear + 5);

    console.log("currrrr", currentItems)
    return (
      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="border rounded-md mx-2 shadow-md bg-slate-200"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  // const [orders, setOrders] = useState([]);

  const totalPages = Math.ceil((getOrder?.length || 0) / itemsPerPage);

  // const sortedOrders = Array.isArray(getOrder)
  // ? [...getOrder].sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate)) // Sort by date
  // : [];

  const [showMore, setShowMore] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [reviewProductId, setReviewProductId] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send review, rating, image, and video to the backend)
    console.log({ rating, reviewText, image, video });
    setIsOpen(false); // Close the popup after submission
  };

  const navigate = useNavigate();
  const handleNav = (productId) => {
    navigate(`/detailspage/${productId}`);
  };

  const handleReview = async (productId) => {
    await handleUserReview(productId);
    setIsOpen(true);
  };

  const [orderID, setOrderID] = useState(null);
  const handleClickView = async (orderId) => {
    setModal(true);
    await dispatch(fetchOrderView(orderId));
    setOrderID(orderId);
  };

  const handleClickInvoice = async () => {
    // console.log("ordersdf", ordered?.orderId)
    await dispatch(fetchOrderInvoice(orderID));
  };

  console.log("ggggggggg", currentItems);
  const profiles = [
    {
      label: "Orders",
      grid: "order",
    },
    {
      label: "Received Orders",
      grid: "received",
    },
    {
      label: "Upcoming Deliveries",
      grid: "upcoming",
    },
    {
      label: "Cancelled Orders",
      grid: "cancelled",
    },
  ];

  const [visibleGrid, setVisibleGrid] = useState("order"); // Default to Orders grid

  const toggleGrid = (grid) => {
    setVisibleGrid(grid); // Set the visible grid to the selected one
  };

  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const [ratings, setRatings] = useState([]);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  // {"ratingId":"c59b3560-b6af-11ef-827a-127d9a25d999","productId":"788a4e9c-9fff-11ef-b741-0affe373956d","customerId":"d1abb215-5fd7-11ef-8a1f-0affd374995f","rating":5,"feedback":"testing with other customer","date":"2024-12-10T00:00:00","isActive":true,"customerName":"Sofiya Khan"},
  const [ratingForm, setRatingForm] = useState({
    Id: null,
  });
  const handleUserReview = async (productId) => {
    try {
      setReviewProductId(productId);

      const response = await fetchRatingWithProduct(productId, user.customerId);
      if (response.length > 0) {
        const rating = response[response.length - 1];
        setRatingForm({
          ...ratingForm,
          Id: rating.ratingId,
        });
        setReviewText(rating.feedback);
        setRating(rating.rating);
      } else {
        setRatingForm({
          ...ratingForm,
          Id: null,
        });
        setReviewText(null);
        setRating(null);
      }
      console.log("hello bro");
    } catch (error) {
      console.log("error fatching rating response");
    }
  };

  const handleAddRating = async () => {
    const date = new Date().toISOString();

    const ratingData = {
      ratingId: ratingForm.Id == null ? "" : ratingForm.Id,
      // productId: productId,
      productId: reviewProductId,
      customerId: user.customerId,
      rating,
      feedback: reviewText,
      date,
      isActive: true,
    };

    try {
      await addRatingApi(ratingData);
      console.log("Rating added successfully");
      setIsOpen(false);
      setNotification({
        show: true,
        message: "Rating added Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setRating(0);
      setReviewText("");
    } catch (error) {
      console.error("Error adding rating:", error);
      setIsOpen(false);
    }
    // try {
    //   await addRatingApi(ratingData);
    //   console.log("Rating added successfully");
    //   setRatings((prevRatings) => [...prevRatings, ratingData]);
    // } catch (error) {
    //   console.error("Error adding rating:", error);
    // }
  };

  // useEffect(() => {
  //   const fetchRatings = async () => {
  //     try {
  //       const ratingsData = await fetchRatingWithProduct(productId); // Replace with your API call to get ratings
  //       setRatings(ratingsData); // Assuming `setRatings` is a state setter for displaying ratings
  //     } catch (error) {
  //       console.error("Error fetching ratings:", error);
  //     }
  //   };

  //   fetchRatings();
  // }, [productId]);

  const [idOrder, setIdOrder] = useState(null)
  const [productId, setProductId] = useState(null)

  const [cancelledOrders, setCancelledOrders] = useState({});
  const handleCancel = async (orderId, productId, customerId) => {
    setProductId(productId)
    setIdOrder(orderId)
    setOpenDialog(true);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleModalSave = async () => {
    try {
      const response = await dispatch(orderStatusUpdateApi(idOrder, productId, user.customerId, 5, "cancel"));
      console.log('API Response:', response);

      setIsCancelled(true);
      setOpenDialog(false);
      setNotification({
        show: true,
        message: "Order Cancelled Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);


      setCancelledOrders((prev) => ({
        ...prev,
        [productId]: true, // Mark this order as canceled
      }));
      // Trigger refetch after a delay (if needed)
      setTimeout(async () => {
        const updatedOrders = await fetchGetOrderByCustomerIdPage(user.customerId);
        setGetOrder(updatedOrders);
      }, 1000);
    } catch (error) {
      console.error('Error in handleCancel:', error);
    }
  }

  const [returnDates, setReturnDates] = useState([]);

  useEffect(() => {
    if (currentItems?.length) {
      const dateOffset = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

      // Calculate return dates for all orders
      const calculatedDates = currentItems.map((order) =>
        new Date(new Date(order.orderDate).getTime() + dateOffset)
      );

      // Store calculated dates in state
      setReturnDates(calculatedDates);
    }
  }, [currentItems]);
  return (
    // <div
    //   className="w-full h-full overflow-y-scroll "
    //   // style={{marginTop: `${topMargin}px`,}}
    // >
    //    {notification.show && (
    //     <Notification show={notification.show} message={notification.message} />
    //   )}
    //   {modal && (
    //     <div
    //       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    //       onClick={() => setModal(false)}
    //     >
    //       <div
    //         className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[85%] flex flex-col"
    //         onClick={(e) =>
    //           e.stopPropagation()
    //         } /* Stop click from closing modal */
    //       >
    //         {/* Close button */}
    //         <button
    //           className="self-end text-red-500 font-bold py-1 px-2 rounded hover:bg-red-100"
    //           onClick={() => setModal(false)}
    //         >
    //           <img src={wrong} className="w-6 h-4" />
    //         </button>

    //         {/* Content section */}
    //         <div
    //           dangerouslySetInnerHTML={{ __html: ordered }}
    //           className="mt-4 overflow-y-scroll flex-grow"
    //         />

    //         {/* Buttons at the bottom */}
    //         <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
    //           <button
    //             className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 cursor-pointer"
    //             onClick={() => setModal(false)}
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
    //             onClick={handleClickInvoice}
    //           >
    //             <img
    //               src={Invoice}
    //               alt="Invoice"
    //               className="inline w-6 h-6 mr-2"
    //             />
    //             Send Invoice
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   <div className="mx-10 mobile:mx-8 ">
    //     <div className="flex justify-between items-center mobile:flex-row">
    //       <h2 className="text-3xl mobile:text-xl font-semibold">
    //         {" "}
    //         Your Orders
    //       </h2>

    //       <div className="flex text-end justify-end items-center">
    //         <div className="flex mb-4 mobile:mb-1">
    //           <input
    //             className="rounded-lg p-1 border "
    //             placeholder="Search Product..."
    //             name="productName"
    //             onChange={(e) => handleInputChange(e)}
    //             onKeyDown={handleKeyDown}
    //             value={SearchInput.productName}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     {/* links start */}
    //     {/* <div className="flex   ">
    //       <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
    //         Orders
    //       </button>

    //       <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
    //         {" "}
    //         {""}
    //        Received Orders
    //       </button>
    //       <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
    //         {" "}
    //         {""}
    //          Upcoming Orders
    //       </button>

    //       <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
    //         {" "}
    //         {""}
    //          Cancelled Orders
    //       </button>
    //     </div> */}

    //     <div className="lg:flex">
    //       {profiles.map((profile) => (
    //         <button
    //           key={profile.grid}
    //           className={`border-b ${
    //             visibleGrid === profile.grid
    //               ? "border-red-500 text-blue-900 mobile:text-blue-900"
    //               : "hover:border-red-500 hover:text-blue-900"
    //           } text-black w-60 h-9 text-xl mobile:w-full`}
    //           onClick={() => toggleGrid(profile.grid)}
    //         >
    //           {profile.label}
    //         </button>
    //       ))}
    //     </div>
    //     {/* limks end */}
    //     <div className="flex my-4">
    //       <h1>Orders Placed In</h1>
    //       <YearDropdown className="border rounded-lg" />
    //     </div>
    //     {/* section start */}
    //     {visibleGrid === "order" && (
    //       <div>
    //         {Array.isArray(currentItems) && currentItems.length > 0 ? (
    //           currentItems.map((order, index) => (
    //             <div
    //               key={order.orderId}
    //               className="border h-auto my-4 mobile:my-4 mobile:w-full rounded-lg shadow-md"
    //             >
    //               <div className="flex justify-between mobile:p-1 border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200 mobile:gap-2">
    //                 <div>
    //                   <h1 className=" text-sm lg:text-lg lg:text-wrap">
    //                     Order Placed
    //                   </h1>
    //                   <p className="text-sm lg:text-lg">
    //                     {new Date(order.orderDate)
    //                       .toLocaleDateString("en-US", {
    //                         month: "2-digit",
    //                         day: "2-digit",
    //                         year: "numeric",
    //                       })
    //                       .replace(/\//g, "-")}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <h1 className="text-sm lg:text-lg">Total</h1>
    //                   <p className="text-sm lg:text-lg lg:text-wrap">
    //                     ${order?.totalAmount?.toFixed(2)}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <h1 className="text-sm lg:text-lg lg:text-wrap">
    //                     Ship To
    //                   </h1>
    //                   <p className=" text-sm lg:text-lg">
    //                     {order.customerName}
    //                   </p>
    //                 </div>
    //                 <div className="mobile:flex">
    //                   <div>
    //                     <h1 className="text-center mobile:text-start text-md lg:text-lg">
    //                       Order ID
    //                     </h1>
    //                     <p className="text-sm lg:text-md lg:text-wrap">
    //                       {order.orderNumber}{" "}
    //                     </p>
    //                   </div>

    //                   <p className="text-blue-900  text-center mobile:text-sm">
    //                     {/* <Link to="/"> View Order Details | </Link> */}
    //                     <span
    //                       className="text-md lg:text-lg mobile:m-0 cursor-pointer p-2 mobile:p-0 "
    //                       onClick={() => handleClickView(order?.orderId)}
    //                     >
    //                       Invoice
    //                     </span>
    //                   </p>
    //                 </div>
    //               </div>
    //               <div className="h-auto ">
    //                 <div className="mobile:flex justify-between lg:flex-row pt-3 pr-3 pl-3 ">
    //                   <div className="">
    //                     <h1 className="lg:text-xl font-semibold mobile:text-sm">
    //                       Delivery Date
    //                     </h1>
    //                     <p className="mobile:w-25">
    //                       Package was handed to resident
    //                     </p>
    //                     <div className="flex ">
    //                       <div className="flex m-0">
    //                         <img
    //                           src={order.imageUrl}
    //                           className="w-20 justify-center flex lg:w-40 items-center m-3 h-40 p-2 lg:p-0 lg:m-2 sm_md:w-40"
    //                           alt="product"
    //                         />
    //                         <div className="flex flex-col">
    //                           <div>
    //                             <p className="font-bold mt-4  flex justify-between">
    //                               {showMore[index]
    //                                 ? order.productName
    //                                 : `${order.productName.slice(0, 15)}`}
    //                               {order.productName.length > 15 && (
    //                                 <button
    //                                   className="text-blue-500 ml-1 mobile:w-1"
    //                                   onClick={() => toggleShowMore(index)}
    //                                 >
    //                                   {showMore[index] ? "See Less" : "..."}
    //                                 </button>
    //                               )}
    //                             </p>
    //                             <p className="w-[90%] text-sky-900 flex flex-wrap text-sm">
    //                               {/* {order.productDescription} */}
    //                               {showMore[index]
    //                                 ? order.productDescription
    //                                 : `${order.productDescription.slice(
    //                                     0,
    //                                     15
    //                                   )}`}
    //                               {order.productDescription.length > 15 && (
    //                                 <button
    //                                   className="text-blue-500 ml-1"
    //                                   onClick={() => toggleShowMore(index)}
    //                                 >
    //                                   {showMore[index]
    //                                     ? "See Less"
    //                                     : " More details"}
    //                                 </button>
    //                               )}
    //                             </p>

    //                             <p className="my-4  text-sm">
    //                               Return Window closed on{" "}
    //                               {/* {new Date(order.orderDate).toLocaleDateString()} */}
    //                               {new Date(order.orderDate)
    //                                 .toLocaleDateString("en-US", {
    //                                   month: "2-digit",
    //                                   day: "2-digit",
    //                                   year: "numeric",
    //                                 })
    //                                 .replace(/\//g, "-")}
    //                             </p>
    //                             <div className="flex">
    //                               <p>Quantity :</p>
    //                               <p>{order.quantity}</p>
    //                             </div>
    //                           </div>
    //                           {/* <div className="flex my-2 cursor-pointer" onClick={() => handleNav(order.productId)}>
    //                     <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
    //                       Buy it again
    //                     </button>
    //                      <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
    //                     <Link to={`/detailspage/${order.productId}`}>
    //                       View your item
    //                     </Link>
    //                   </button>
    //                   </div> */}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col mx-2">
    //                     <button className="border rounded-lg p-2 mb-2 lg:p-2 hover:bg-gray-400 w-20 lg:w-full shadow-md sm_md:w-full">
    //                       <Link to="/layout/trackingorder">Track Package</Link>
    //                     </button>
    //                     {/* <button className="border rounded-lg hover:bg-gray-400 p-2 w-20 lg:w-full shadow-md sm_md:w-full">
    //                       <Link to="/layout/trackingorder">
    //                       Leave Seller Feedback
    //                       </Link>
    //                     </button> */}
    //                     <button
    //                       className="border rounded-lg p-2 sm_md:w-full hover:bg-gray-400 my-2 w-20 lg:w-full shadow-md"
    //                       onClick={() => setIsOpen(true)}
    //                     >
    //                       Write a product review
    //                     </button>
    //                     <div
    //                       className="flex  cursor-pointer"
    //                       onClick={() => handleNav(order.productId)}
    //                     >
    //                       <button className="border rounded-lg sm_md:w-full p-2 bg-blue-900 text-white w-20  lg:w-full shadow-md mb-1">
    //                         Buy it again
    //                       </button>
    //                     </div>
    //                   </div>

    //                   {/* review popup */}
    //                   {isOpen && (
    //                     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //                       <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
    //                         <h2 className="text-xl font-semibold text-blue-900 mb-4">
    //                           Write a Review
    //                         </h2>

    //                         {/* Text Area */}
    //                         <textarea
    //                           className="border rounded-lg w-full p-2 mb-4"
    //                           rows="4"
    //                           placeholder="Write your review..."
    //                           value={reviewText}
    //                           onChange={(e) => setReviewText(e.target.value)}
    //                         ></textarea>

    //                         {/* Rating Stars */}
    //                         <div className="mb-4">
    //                           <div className="flex">
    //                             {[1, 2, 3, 4, 5].map((star) => (
    //                               <svg
    //                                 key={star}
    //                                 onClick={() => setRating(star)}
    //                                 className={`h-6 w-6 cursor-pointer ${
    //                                   rating >= star
    //                                     ? "text-yellow-500"
    //                                     : "text-gray-400"
    //                                 }`}
    //                                 fill="currentColor"
    //                                 viewBox="0 0 24 24"
    //                               >
    //                                 <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 20.021 4.665 24l1.335-8.73L0 9.423l8.332-1.268L12 .587z" />
    //                               </svg>
    //                             ))}
    //                           </div>
    //                           <p className="text-gray-500 text-sm mt-1">
    //                             Rate this product
    //                           </p>
    //                         </div>

    //                         {/* Image Upload */}
    //                         <div className="mb-4">
    //                           <label className="block mb-1 text-gray-700">
    //                             Upload Image:
    //                           </label>
    //                           <input
    //                             type="file"
    //                             accept="image/*"
    //                             onChange={handleImageChange}
    //                             className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
    //                           />
    //                         </div>

    //                         {/* Video Upload */}
    //                         <div className="mb-4">
    //                           <label className="block mb-1 text-gray-700">
    //                             Upload Video:
    //                           </label>
    //                           <input
    //                             type="file"
    //                             accept="video/*"
    //                             onChange={handleVideoChange}
    //                             className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
    //                           />
    //                         </div>

    //                         {/* Buttons */}
    //                         <div className="flex justify-end space-x-2">
    //                           <button
    //                             className="border rounded-lg px-4 py-2 bg-red-600 text-white"
    //                             onClick={() => setIsOpen(false)}
    //                           >
    //                             Cancel
    //                           </button>
    //                           <button
    //                             className="bg-blue-900 text-white rounded-lg px-4 py-2"
    //                             onClick={() => handleAddRating(order.productId)}
    //                           >
    //                             Save
    //                           </button>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         ) : (
    //           <div className="text-center my-4">
    //             <p>No orders available</p>
    //           </div>
    //         )}

    //         <Pagination
    //           indexOfFirstItem={indexOfFirstItem}
    //           indexOfLastItem={indexOfLastItem}
    //           productList={getOrder}
    //           itemsPerPage={itemsPerPage}
    //           setItemsPerPage={setItemsPerPage}
    //           currentPage={currentPage}
    //           setCurrentPage={setCurrentPage}
    //         />
    //       </div>
    //     )}

    //     {visibleGrid === "received" && (
    //       <div>
    //         {/* Your bank information grid details here */}
    //         <LayoutBuyerReceiversgrid />
    //       </div>
    //     )}
    //     {visibleGrid === "upcoming" && (
    //       <div>
    //         {/* Your bank information grid details here */}
    //         <LayoutBuyerUpcomingGrid />
    //       </div>
    //     )}
    //     {visibleGrid === "cancelled" && (
    //       <div>
    //         {/* Your bank information grid details here */}
    //         <LayoutBuyerCancelledgrid />
    //       </div>
    //     )}
    //     {/* section end */}
    //   </div>
    // </div>

    <div
      className="w-full h-full overflow-y-scroll "
    // style={{marginTop: `${topMargin}px`,}}
    >
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      {/* review popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Write a Review
            </h2>

            {/* Text Area */}
            <textarea
              className="border rounded-lg w-full p-2 mb-4"
              rows="4"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            {/* Rating Stars */}
            <div className="mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    className={`h-6 w-6 cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-400"
                      }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 20.021 4.665 24l1.335-8.73L0 9.423l8.332-1.268L12 .587z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">Rate this product</p>
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
              />
            </div>

            {/* Video Upload */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Upload Video:</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                className="border rounded-lg px-4 py-2 bg-red-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-900 text-white rounded-lg px-4 py-2"
                onClick={() => handleAddRating()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[85%] flex flex-col"
            onClick={(e) =>
              e.stopPropagation()
            } /* Stop click from closing modal */
          >
            {/* Close button */}
            <button
              className="self-end text-red-500 font-bold py-1 px-2 rounded hover:bg-red-100"
              onClick={() => setModal(false)}
            >
              <img src={wrong} className="w-6 h-4" />
            </button>

            {/* Content section */}
            <div
              dangerouslySetInnerHTML={{ __html: ordered }}
              className="mt-4 overflow-y-scroll flex-grow"
            />

            {/* Buttons at the bottom */}
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 cursor-pointer"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                onClick={handleClickInvoice}
              >
                <img
                  src={Invoice}
                  alt="Invoice"
                  className="inline w-6 h-6 mr-2"
                />
                Send Invoice
              </button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <div className="flex  justify-end p-2">
          <img
            onClick={handleDialogClose}
            src={wrong}
            className="w-5 h-5 cursor-pointer flex justify-end"
          />
        </div>
        <DialogContent>
          Are you sure you want to Cancel this Product from your Order?
        </DialogContent>
        <div>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={handleDialogClose}
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": { backgroundColor: "#cc0000" },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleModalSave}
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "#006400" },
              }}
            >
              Yes
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <div className="mx-5 sm:mx-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <h2 className=" mt-6 text-3xl mb-4 mobile:text-xl font-semibold">
            {" "}
            Your Orders
          </h2>

          <div className=" relative flex text-end md:justify-end md:items-center ">
            <button className="absolute left-2  top-4 transform -translate-y-1/2">
              <img src={search} className="w-4 h-4" />
            </button>
            <div className="flex mb-1 mobile:mb-1">
              <input
                className="pl-7 p-1  border "
                placeholder="Search Product..."
                name="productName"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleKeyDown}
                value={SearchInput.productName}
              />
              <button
                onClick={handleSearchClick}
                className="absolute bg-blue-900  p-2 right-0 top-4 transform -translate-y-1/2"
              >
                <img src={searchImg} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* links start */}
        {/* <div className="flex   ">
        <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
          Orders
        </button>

        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
         Received Orders
        </button>
        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
           Upcoming Orders
        </button>

        <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
          {" "}
          {""}
           Cancelled Orders
        </button>
      </div> */}
        <div className="lg:flex">
          {profiles.map((profile) => (
            <button
              key={profile.grid}
              className={`border-b ${visibleGrid === profile.grid
                  ? "border-red-500 text-blue-900 mobile:text-blue-900"
                  : "hover:border-red-500 hover:text-blue-900"
                } text-black w-60 h-9 text-xl mobile:w-full`}
              onClick={() => toggleGrid(profile.grid)}
            >
              {profile.label}
            </button>
          ))}
        </div>
        {/* limks end */}
        {/* <div className="flex my-4">
          <h1>Orders Placed In</h1>
          <YearDropdown className="border rounded-lg" />
        </div> */}
        <div className="hidden">
          {currentItems?.length};{/* section start */}

        </div>
        {visibleGrid === "order" && (
          <div>
            {currentItems?.map((order, index) => (
              <div className="border h-auto my-4  rounded-lg shadow-md">
                <div className="flex flex-row justify-between lg:flex-row md:flex-row  sm:justify-between  border-b pb-2 pt-2 pr-3 sm:pl-3 p-0 bg-slate-200">
                  <div className="mb-4 lg:mb-0">
                    <h1 className="text-sm lg:text-lg">Order Placed</h1>
                    <p className="text-sm lg:text-lg">
                      {new Date(order.orderDate)
                        .toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                        .replace(/\//g, "-")}
                    </p>
                  </div>
                  <div className="mb-4 lg:mb-0 mr-2">
                    <h1 className="text-sm lg:text-lg">Total</h1>
                    <p className="text-sm lg:text-lg">
                      ${(
                        (order?.pricePerProduct * order?.quantity)
                        // ((order?.pricePerProduct * order?.quantity) * (order?.chargesPercentage / 100))
                      )?.toFixed(2)}
                    </p>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <h1 className="text-sm lg:text-lg">Ship To</h1>
                    <p className="text-sm lg:text-lg">
                      {order.shippingContactName}
                    </p>
                  </div>
                  <div className="sm:flex flex-col lg:flex-row items-start">
                    <div>
                      <h1 className="text-sm lg:text-lg">Order ID</h1>
                      <p className="text-sm lg:text-md">{order.orderNumber}</p>
                    </div>
                    {/* <p className="text-blue-900 text-sm lg:text-md cursor-pointer p-2">
                      <span onClick={() => handleClickView(order?.orderId)}>
                        Invoice
                      </span>
                    </p> */}
                    {order.orderedProductStatusId === 3 && (
                      <p className="text-blue-900 text-sm lg:text-md cursor-pointer p-2">
                        <span onClick={() => handleClickView(order?.orderId)}>
                          Invoice
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="h-auto p-3 flex flex-col lg:flex-row md:flex-row gap-4">
                  {/* Left Section */}
                  <div className="w-full lg:w-2/3">
                    <h1 className="lg:text-xl font-semibold mobile:text-sm">
                      Delivery Date
                    </h1>
                    <p>Package was handed to resident</p>
                    <div className="flex sm:flex-row flex-col">
                      <img
                        src={order.imageUrl}
                        className="w-full lg:w-40 md:w-80 h-40 object-cover rounded-md"
                        alt="product"
                      />
                      <div className="ml-3">
                        <p className="font-bold mt-2">
                          {showMore[index]
                            ? order.productName
                            : `${order.productName.slice(0, 15)}`}
                          {order.productName.length > 15 && (
                            <button
                              className="text-blue-500 ml-1"
                              onClick={() => toggleShowMore(index)}
                            >
                              {showMore[index] ? "See Less" : "..."}
                            </button>
                          )}
                        </p>
                        <p className="text-sky-900 text-sm">
                          {showMore[index]
                            ? order.productDescription
                            : `${order.productDescription.slice(0, 15)}`}
                          {order.productDescription.length > 15 && (
                            <button
                              className="text-blue-500 ml-1"
                              onClick={() => toggleShowMore(index)}
                            >
                              {showMore[index] ? "See Less" : " More details"}
                            </button>
                          )}
                        </p>
                        {/* <p className="text-sm mt-2">
                          Return Window closed on{" "}
                          {new Date(order.orderDate)
                            .toLocaleDateString("en-US", {
                              month: "2-digit",
                              day: "2-digit",
                              year: "numeric",
                            })
                            .replace(/\//g, "-")}
                        </p> */}
                        <p className="text-sm mt-2">
                          Return Window closes on{" "}
                          {returnDates[index]?.toLocaleDateString("en-US", {
                            month: "2-digit",
                            day: "2-digit",
                            year: "numeric",
                          })?.replace(/\//g, "-")}
                        </p>
                        <p>Quantity: {order.quantity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="w-full lg:w-1/3 flex flex-col items-stretch mt-4">
                    <button className="border rounded-lg p-2 mb-2 hover:bg-gray-400">
                      <Link to="/layout/trackingorder">Track Package</Link>
                    </button>
                    <button
                      className="border rounded-lg p-2 mb-2 hover:bg-gray-400"
                      // onClick={() => setIsOpen(true)}
                      onClick={() => handleReview(order.productId)}
                    >
                      Write a product review
                    </button>
                    <button
                      className="border rounded-lg p-2 bg-blue-900 text-white"
                      onClick={() => handleNav(order.productId)}
                    >
                      Buy it again
                    </button>
                    {/* <button
                      className={`border rounded-lg p-2 ${order?.orderStatusId === 5 || isCancelled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-900 text-white cursor-pointer"
                        }`}
                      disabled={order?.orderStatusId === 5 || isCancelled}
                      onClick={() => {
                        if (order?.orderStatusId !== 5) {
                          handleCancel(order.orderId, order.customerId);
                        }
                      }}
                    >
                      {order?.orderStatusId === 5 || isCancelled ? "Order Cancelled" : "Cancel Order"}
                    </button> */}
                    {/* {!order.orderStatusId === 6 && 
                    <button
                      key={order.productId}
                      className={`border rounded-lg p-2 ${order.orderStatusId === 5 || cancelledOrders[order.productId]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-900 text-white cursor-pointer"
                        }`}
                      disabled={order.orderStatusId === 5 || cancelledOrders[order.productId]}
                      onClick={() => {
                        if (order.orderStatusId !== 5) {
                          handleCancel(order.orderId, order.productId, order.customerId);
                        }
                      }}
                    >
                      {order.orderStatusId === 5 || cancelledOrders[order.productId]
                        ? "Order Cancelled"
                        : "Cancel Order"}
                    </button>
                      } */}

                    {/* =====below code is code ===== */}
                    {/* {order.orderedProductStatusId !== 6 && order.orderedProductStatusId !== 4 && (
                      <button
                        key={order.productId}
                        className={`border rounded-lg p-2 ${order.orderedProductStatusId === 5 || cancelledOrders[order.productId]
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-900 text-white cursor-pointer"
                          }`}
                        disabled={order.orderedProductStatusId === 5 || cancelledOrders[order.productId]}
                        onClick={() => {
                          if (order.orderedProductStatusId !== 5) {
                            handleCancel(order.orderId, order.productId, order.customerId);
                          }
                        }}
                      >
                        {order.orderedProductStatusId === 5 || cancelledOrders[order.productId]
                          ? "Order Cancelled"
                          : "Cancel Order"}
                      </button>
                    )} */}
                    {/* ======================== */}

                    {/* {order.orderedProductStatusId !== 6 && order.orderedProductStatusId !== 4 && (
                      <button
                        key={order.productId}
                        className={`border rounded-lg p-2 ${order.orderedProductStatusId === 5 ||
                            cancelledOrders[order.productId] 
                            // (returnDates[index] && new Date(returnDates[index]).getTime() > new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0))
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-900 text-white cursor-pointer"
                          }`}
                        disabled={
                          order.orderedProductStatusId === 5 ||
                          cancelledOrders[order.productId] 
                          // (returnDates[index] && new Date(returnDates[index]).getTime() > new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0))
                        }
                        onClick={() => {
                          const returnDate = new Date(returnDates[index]);
                          const tomorrow = new Date();
                          tomorrow.setDate(tomorrow.getDate() + 1); // Set the date to tomorrow
                          tomorrow.setHours(0, 0, 0, 0); // Set time to 00:00:00 for tomorrow

                          // Compare if the return date is after tomorrow
                          if (returnDate < tomorrow) {
                            alert("The return window has closed. This action is no longer allowed.");
                            return;
                          }

                          handleCancel(order.orderId, order.productId, order.customerId);
                        }}
                      >
                        {order.orderedProductStatusId === 5 || cancelledOrders[order.productId]
                          ? "Order Cancelled"
                          : "Cancel Order"}
                      </button>
                    )} */}
                    {order.orderedProductStatusId !== 6 && order.orderedProductStatusId !== 4 && (
                      <button
                        key={order.productId}
                        className={`border rounded-lg p-2 ${order.orderedProductStatusId === 5 ||
                          cancelledOrders[order.productId]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-900 text-white cursor-pointer"
                          }`}
                        disabled={
                          order.orderedProductStatusId === 5 ||
                          cancelledOrders[order.productId]
                        }
                        onClick={() => {
                          const returnDate = new Date(returnDates[index]);
                          const today = new Date();
                          today.setHours(0, 0, 0, 0); // Set time to midnight to ignore the time portion of today's date

                          // Show alert if the return date is in the past (before today)
                          if (returnDate < today) {
                            alert("The return window has closed. This action is no longer allowed.");
                            return;
                          }

                          handleCancel(order.orderId, order.productId, order.customerId);
                        }}
                      >
                        {order.orderedProductStatusId === 5 || cancelledOrders[order.productId]
                          ? "Order Cancelled"
                          : "Cancel Order"}
                      </button>
                    )}


                  </div>
                </div>
              </div>
            ))}
            <Pagination
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              productList={displayData}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
        {visibleGrid === "received" && (
          <div>
            {/* Your bank information grid details here */}
            <LayoutBuyerReceiversgrid />
          </div>
        )}
        {visibleGrid === "upcoming" && (
          <div>
            {/* Your bank information grid details here */}
            <LayoutBuyerUpcomingGrid />
          </div>
        )}
        {visibleGrid === "cancelled" && (
          <div>
            {/* Your bank information grid details here */}
            <LayoutBuyerCancelledgrid />
          </div>
        )}
        {/* section end */}
      </div>
    </div>
  );
}

export default LayoutOrderList;
