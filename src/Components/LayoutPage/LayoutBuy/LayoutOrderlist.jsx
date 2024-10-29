import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/img1.png";
import { styled, alpha } from "@mui/material/styles";
import searchimg from "../../../assets/search1.png";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import Invoice from '../../../assets/Icons/Invoice.png';
import { fetchGetOrder, fetchOrderInvoice, fetchOrderView } from "../../../Api/OrderApi";
import next from '../../../assets/Next_icon.png'
import previous from '../../../assets/Previous_icon.png'
import Pagination from "../../Pagination";
import wrong from '../../../assets/Icons/wrongred.png'
import { addRatingApi, fetchCriteriaProductsApi } from "../../../Api/ProductApi";
import LayoutBuyerCancelledgrid from "../LayoutDashboard/LayoutBuyerCancelledgrid";
import LayoutBuyerReceiversgrid from "../LayoutDashboard/LayoutBuyerReceiversgrid";
import LayoutBuyerUpcomingGrid from "../LayoutDashboard/LayoutBuyerUpcomingGrid";
import TrackingOrder from '../../../Components/TermsAndConditions'
function LayoutOrderList() {

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  // const localData = localStorage.getItem("userId")
  const user = useSelector((state) => state.user.user)
  // const customerId = localData?.userId;
  // const orderList = useSelector((state) => state.order.orders)
  const getOrders = useSelector((state) => state.order.getOrder)
  const [getOrder, setGetOrder] = useState(getOrders)
  console.log("getOrder--->", getOrder)
  const ordered = useSelector((state) => state.order.orderView)
  console.log("orderedview-->", ordered)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  const pathname = location.pathname
  const part = pathname.split('/')
  const orderId = part[2]

  useEffect(() => {
    if (getOrders)
      setGetOrder(getOrders)
  }, [getOrders])

  //YEAR  SORTING


  useEffect(() => {
    const data = async () => {
      await dispatch(fetchGetOrder(user?.customerId));
    };
    data();
  }, [dispatch, user?.customerId]);

  // Sorting orders by date
  const sortedOrders = Array.isArray(getOrder)
    ? [...getOrder].sort(
      (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
    )
    : [];

  // Filter orders by selected year
  const filteredOrders = sortedOrders.filter(
    (order) => new Date(order.orderDate).getFullYear() === selectedYear
  );

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleSearchClick = async () => {
    console.log("SearchInput:", SearchInput); // Check SearchInput value
    try {
      const productsData = await fetchCriteriaProductsApi(SearchInput);
      console.log("API Response:", productsData); // Check API response
      if (productsData) {
        setGetOrder(productsData); // Only set if valid
      } else {
        console.log("No data returned from API.");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };



  const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    const years = generateYears(currentYear, currentYear + 5);

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


  const navigate = useNavigate()
  const handleNav = (productId) => {
    navigate(`/detailspage/${productId}`)
  }

  const [orderID, setOrderID] = useState(null)
  const handleClickView = async (orderId) => {
    setModal(true)
    await dispatch(fetchOrderView(orderId))
    setOrderID(orderId)
  }

  const handleClickInvoice = async () => {
    // console.log("ordersdf", ordered?.orderId)
    await dispatch(fetchOrderInvoice(orderID))
  }


  console.log("ggggggggg", currentItems)
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

  const handleAddRating = async (productId) => {
    const date = new Date().toISOString();
  
    const ratingData = {
      ratingId: "", 
      productId: productId, 
      customerId: user.customerId,
      rating, 
      feedback: reviewText, 
      date, 
      isActive: true, 
    };
  
    try {
      await addRatingApi(ratingData); 
      console.log("Rating added successfully");
    } catch (error) {
      console.error("Error adding rating:", error);
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
  

  

  

  return (
    <div
      className="w-full h-full overflow-y-scroll "
    // style={{marginTop: `${topMargin}px`,}}
    >
      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[85%] flex flex-col"
            onClick={(e) => e.stopPropagation()} /* Stop click from closing modal */
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
              <button className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 cursor-pointer" onClick={() => setModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 cursor-pointer" onClick={handleClickInvoice}>
                <img src={Invoice} alt="Invoice" className="inline w-6 h-6 mr-2" />
                Send Invoice
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-10">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl font-semibold"> Your Orders</h2>

          <div className="flex   text-end justify-end items-center">
            <div className="flex  mb-4">
              <input
                className="rounded-lg p-1 border"
                placeholder="Search Product..."
                name="productName"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleKeyDown}
                value={SearchInput.productName}
              />
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

        <div className="flex">
          {profiles.map((profile) => (
            <button
              key={profile.grid}
              className={`border-b ${visibleGrid === profile.grid ? 'border-red-500 text-blue-900' : 'hover:border-red-500 hover:text-blue-900'} text-black w-60 h-9 text-xl`}
              onClick={() => toggleGrid(profile.grid)}
            >
              {profile.label}
            </button>
          ))}
        </div>
        {/* limks end */}
        <div className="flex my-4">
          <h1>Orders Placed In</h1>
          <YearDropdown className="border rounded-lg" />
        </div>
        {/* section start */}
        {visibleGrid === "order" && (
          <div>
            {Array.isArray(currentItems) && currentItems.length > 0 ? (
              currentItems.map((order, index) => (
                <div key={order.orderId} className="border h-auto my-4 rounded-lg shadow-md">
                  <div className="flex justify-between border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200">
                    <div>
                      <h1>Order Placed</h1>
                      <p className="text-sm">
                        {new Date(order.orderDate)
                          .toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                          })
                          .replace(/\//g, '-')}
                      </p>
                    </div>
                    <div>
                      <h1>Total</h1>
                      <p className="text-sm">${order?.pricePerProduct?.toFixed(2)}</p>
                    </div>
                    <div>
                      <h1>Ship To</h1>
                      <p className="text-blue-900 text-sm">{order.customerName}</p>
                    </div>
                    <div>
                      <h1 className="text-center">Order ID</h1>
                      <div className="flex">
                        <p className="text-xs">{order.orderId}  </p>

                        <p className="text-blue-900  text-center -mt-1">
                          {/* <Link to="/"> View Order Details | </Link> */}
                          <span className="ml-2 cursor-pointer  " onClick={() => handleClickView(order?.orderId)}>Invoice</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  < div className="  h-auto">
                    <div className="flex justify-between pt-3 pr-3 pl-3 ">
                      <div className="">
                        <h1 className="text-xl font-semibold">Delivery Date</h1>
                        <p>Package was handed to resident</p>
                        <div className="flex ">
                          <div className="flex m-0">
                            <img
                              src={order.imageUrl}
                              className="w-40 justify-center flex  items-center m-3 h-40  p-2"
                              alt="product"
                            />
                            <div className="flex flex-col ">
                              <div>
                                <p className="font-semibold mt-4">{order.productName}</p>
                                <p className="w-[90%] text-sky-900 flex flex-wrap text-sm">
                                  {/* {order.productDescription} */}
                                  {showMore[index]
                                    ? order.productDescription
                                    : `${order.productDescription.slice(0, 30)}...`}
                                  {order.productDescription.length > 30 && (
                                    <button
                                      className="text-blue-500 ml-1"
                                      onClick={() => toggleShowMore(index)}
                                    >
                                      {showMore[index] ? "See Less" : " More details"}
                                    </button>
                                  )}
                                </p>

                                <p className="my-2 text-sm">
                                  Return Window closed on{" "}
                                  {/* {new Date(order.orderDate).toLocaleDateString()} */}
                                  {new Date(order.orderDate).toLocaleDateString('en-US', {
                                    month: '2-digit',
                                    day: '2-digit',
                                    year: 'numeric'
                                  }).replace(/\//g, '-')}
                                </p>
                                <div className="flex">
                                  <p>Quantity :</p>
                                  <p>{order.quantity}</p>
                                </div>
                              </div>
                              {/* <div className="flex my-2 cursor-pointer" onClick={() => handleNav(order.productId)}>
                        <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
                          Buy it again
                        </button>
                         <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
                        <Link to={`/detailspage/${order.productId}`}>
                          View your item
                        </Link>
                      </button> 
                      </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <button className="border rounded-lg p-2 mb-2 hover:bg-gray-400 w-60 shadow-md">
                          <Link to="/layout/trackingorder">
                            Track Package
                          </Link>
                        </button>
                        <button className="border rounded-lg hover:bg-gray-400 p-2 w-60 shadow-md">
                          {/* <Link to="/layout/trackingorder"> */}
                          Leave Seller Feedback
                          {/* </Link> */}
                        </button>
                        <button
                          className="border rounded-lg p-2 hover:bg-gray-400 my-2 shadow-md"
                          onClick={() => setIsOpen(true)}
                        >
                          Write a product review
                        </button>
                        <div className="flex  cursor-pointer" onClick={() => handleNav(order.productId)}>
                          <button className="border rounded-lg p-2 bg-blue-900 text-white w-60 shadow-md">
                            Buy it again
                          </button>
                        </div>
                      </div>

                      {/* review popup */}
                      {isOpen && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-900 mb-4">Write a Review</h2>
                    
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
                                className={`h-6 w-6 cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
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
                            onClick={() => handleAddRating(order.productId)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                      )}


                    </div>
                   
                  </div>
                </div>

              ))
            ) : (
              <div className="text-center my-4">
                <p>No orders available</p>
              </div>
            )}





            <Pagination
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              productList={getOrder}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}

        {visibleGrid === "received" && (
          <div
          >
            {/* Your bank information grid details here */}
            <LayoutBuyerReceiversgrid />
          </div>
        )}
        {visibleGrid === "upcoming" && (
          <div
          >
            {/* Your bank information grid details here */}
            <LayoutBuyerUpcomingGrid />
          </div>
        )}
        {visibleGrid === "cancelled" && (
          <div
          >
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