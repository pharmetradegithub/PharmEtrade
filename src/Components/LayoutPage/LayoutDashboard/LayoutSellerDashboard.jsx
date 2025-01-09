import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutDashboardgrid from "./LayoutDashboardGrid";
import { useDispatch, useSelector } from "react-redux";
import LayoutSellerTotalProducts from "./LayoutSellerTotalProducts";
import LayoutSellerProductOrderd from "./LayoutSellerProductOrderd";
import LayoutSellerCustomerOrders from "./LayoutSellerCustomerOrders";
// import { fetchSellerDashboard } from '../../../Api/DashBoardApi';
import { fetchAllProductsApi } from "../../../Api/ProductApi";
import {
  fetchCustomerOrered,
  fetchSellerDashboard,
  fetchTotalProductDashboard,
} from "../../../Api/Dashboard";
import { fetchGetOrderByCustomerIdPage, fetchGetOrderBySellerId, fetchSellerGetAll } from "../../../Api/OrderApi";
const LayoutSellerDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const user = useSelector((state) => state.user.user);
  console.log("layoutDash-->", user);
  const sellerId = useSelector((state) => state.dashboard.getSellerId);
  console.log("sellerId--->", sellerId);
  const dispatch = useDispatch();
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isPercentageShown, setIsPercentageShown] = useState(false);
  const sellerDashboard = useSelector((state) => state.dashboard.getSellerId);
  console.log("sellerdash-->", sellerDashboard);
  // const navigate = useNavigate();
  const SellerOrder = useSelector((state) => state.order.OrderBySellerId);
  
  // const filteredIncomingOrders = SellerOrder.filter((order) => order.orderedProductStatusId !== 5);

  // Get the count of the remaining orders
  const orderCount = SellerOrder?.length;
  console.log("count==", orderCount)

  // Handle Latest button click to show percentage or close the grid
  const products = useSelector((state) => state.product.Products);
  const handleClick = () => {
    console.log("dashboardLayout-->", products);
    if (isGridOpen) {
      // If grid is open, close it
      setIsGridOpen(false);
      setIsPercentageShown(false);
    } else if (!isPercentageShown) {
      // Show percentage first
      setIsPercentageShown(true);
    } else {
      // If percentage is shown, open the grid
      setIsGridOpen(true);
    }
  };

  // Handle closing the grid
  const closeGrid = () => {
    setIsGridOpen(false);
    setIsPercentageShown(false); // Reset everything when the grid is closed
  };

  // Handle percentage click to show the grid
  const handlePercentageClick = () => {
    setIsGridVisible(true);
  };

  const totalProduct = useSelector(
    (state) => state.dashboard.getTotalProductDashboard
  );
  console.log("totaldash-->", totalProduct);
  const customerOrdered = useSelector(
    (state) => state.dashboard.getCustomerOrder
  );
  console.log("getCustomerOrder-->", customerOrdered);

  const [visibleGrid, setVisibleGrid] = useState(null); // To track which grid is visible

  const toggleGrid = (grid) => {
    setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
  };

  const [getOrder, setGetOrder] = useState(null);

  const details = [
    {
      totalOrder: sellerDashboard?.totalOrders,
      label: "Incoming Orders",
      // percentage: sellerDashboard?.totalOrders,
      percentage: orderCount,
      color: "red",
      grid: "totalProducts",
    }, // Red
    {
      label: "Outgoing Orders",
      // percentage: sellerDashboard?.outgoingOrdersCount,
      percentage: getOrder?.length,
      color: "orange",
      grid: "productsOrdered",
    }, // Yellow

    {
      label: "Total Incoming Order Value",
      percentage: `$${(sellerDashboard?.totalSaleValue || 0).toFixed(2)}`,
      color: "blue",
      grid: "customersOrdered",
    },
    {
      label: "Total Outgoing Order Value",
      percentage: `$${(sellerDashboard?.totalPurchaseValue || 0).toFixed(2)}`,
      color: "purple",
      grid: "customersOrdered",
    },
    // {
    //   label: "Total No.of Products ", percentage: sellerDashboard?.totalProducts, color: "green", grid: "customersOrdered", to: '/layout/postingproducts'
    // }, // Green
  ];

  const productsactives = [
    {
      label: "Total No.of Products ",
      percentage: sellerDashboard?.totalProducts,
      color: "green",
      grid: "customersOrdered",
      to: "/layout/postingproducts",
    },
    {
      label: "Total No.of Products Active",
      percentage: sellerDashboard?.activeProducts,
      color: "green",
      grid: "customersOrdered",
      to: "/layout/postingproducts",
    },
    {
      label: "Total No.of Products Inactive",
      percentage: sellerDashboard?.inActiveProducts,
      color: "red",
      grid: "customersOrdered",
      to: "/layout/postingproducts",
    },
  ];

  const productdetails = [
    {
      totalproducts: 9,
      heading: "Top Selling Products",
      label: "ALEGRA 24 HOUR",
      number: 5,
      sales: "Sales",
      text: "DAYQUIL LIQ 80Z",
      quantity: 3,
    },
  ];
  const customerdetails = [
    {
      totalcutomers: 200,
      label: "This month customer count",
      Quantity: 0,
      text: "Last month customer count",
      number: 0,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Yearly"); // Default option

  // Handle dropdown selection
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNavigation = (to) => {
    if (to) {
      navigate(to); // Navigate to the path when a card is clicked
    }
  };

  useEffect(() => {
    console.log(user, "uerr--->");
    const data = async () => {
      await dispatch(fetchTotalProductDashboard(user?.customerId));
      await dispatch(fetchCustomerOrered(user?.customerId));
      await dispatch(fetchSellerGetAll(user?.customerId));
      await dispatch(fetchSellerDashboard(user?.customerId));
      await dispatch(fetchGetOrderBySellerId(user?.customerId));
      const res = await fetchGetOrderByCustomerIdPage(user?.customerId);
      setGetOrder(res)
    }
    if (user?.customerId) data()
  }, [user?.customerId]);

  // Images for each option (you can replace these with actual image URLs or paths)
  const imageMap = {
    Yearly:
      "https://th.bing.com/th/id/OIP.CS3OjmHCzVZEsK3JNkHNyQHaE8?w=222&h=180&c=7&r=0&o=5&pid=1.7",
    Monthly: "https://i.ytimg.com/vi/dBJynLx819I/maxresdefault.jpg",
    Weekly: "https://s3.envato.com/files/500220660/screenshots/15.png",
    Daily:
      "https://th.bing.com/th/id/OIP.aoXhfbHqx42fr7fUzSHh4gHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
  };

  const getHeading = () => {
    switch (user?.customerTypeId) {
      case 1:
        return "Retail Pharmacy Dashboard";
      case 2:
        return "General Merchandise Seller Dashboard";
      case 3:
        return "Pharmacy Distributor Dashboard";
      default:
        return "Seller Dashboard";
    }
  };

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] sm:w-full h-full mt-8 ">
        <div className="flex justify-center sm:justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold ml-2">
            {/* Seller Dashboard */}
            {getHeading()}
          </h1>
        </div>

        <div className="flex flex-col">
          <div className="flex  flex-wrap  gap-2 w-auto mt-8 border p-4 rounded-lg shadow-lg">
            {/* <div className='flex flex-col items-center justify-center ml-7'>
              <h1 className='text-xl font-semibold'>Order(s)</h1>
              <p className='text-3xl '>{sellerDashboard?.totalOrders}</p>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 ml-2 w-full">
              {details.map((detail, index) => (
                <div className="flex gap-4" key={index}>
                  <div
                    key={index}
                    className="bg-white w-full sm:w-full  md:w-40    Medium:w-full  Laptop:w-48 rounded-lg shadow-xl cursor-pointer  h-28 p-1  flex flex-col justify-between"
                    onClick={() => toggleGrid(detail.grid)}
                    style={{ borderBottom: `4px solid ${detail.color}` }} // Set bottom border color
                  >
                    <div className="flex justify-between items-center">
                      <h1
                        onClick={() => handleNavigation(detail.to)}
                        className="hover:text-red-600  hover:underline px-2 font-semibold "
                      >
                        {detail.label}
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <p className="items-center flex justify-center text-lg mt-4 font-semibold px-2">
                        {detail.percentage}
                      </p>
                      {/* <CircleProgress percentage={detail.percentage} color={detail.color} /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active inactive products */}

          <div className="flex flex-wrap gap-6 w-full mt-8 border rounded-lg shadow-lg p-4 ">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              {productsactives.map((productactive, index) => (
                <div className="" key={index}>
                  <div
                    style={{ borderBottom: `4px solid ${productactive.color}` }}
                    className="bg-white w-full sm:w-52 md:w-52 flex rounded-lg shadow-xl cursor-pointer flex-col  h-28 p-2 justify-between"
                  >
                    <h1 className="font-semibold">{productactive.label}</h1>
                    <p className="font-semibold text-xl">
                      {productactive.percentage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSellerDashboard;
