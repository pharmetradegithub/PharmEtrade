



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
import {
  fetchGetOrderBySellerId,
  fetchOrderDownloadInvoice,
  fetchOrderInvoice,
  fetchOrderView,
  orderStatusUpdateApi,
} from "../../../Api/OrderApi";
import { FaFileInvoice } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import eye from "../../../assets/eye.png";
import Invoice from "../../../assets/Icons/Invoice.png";
import download from "../../../assets/Icons/download.png";
import wrong from "../../../assets/Icons/wrongred.png";
import Pagination from "../../Pagination";
import { MasterOrderStatusGetAll } from "../../../Api/MasterDataApi";

function LayoutSellOrders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [searchQuery, setSearchQuery] = useState("");
  const SellerOrder = useSelector((state) => state.order.OrderBySellerId);
 
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const ordered = useSelector((state) => state.order.orderView);
 
  const orderStatusGetAll = useSelector(
    (state) => state.master.orderStatusGetAll
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  useEffect(() => {
    dispatch(MasterOrderStatusGetAll());
  }, [dispatch]);

  const localData = localStorage.getItem("userId");
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

  const approvedData = SellerOrder.filter(item => item.orderStatusId === 3);
  console.log("Approved===", SellerOrder)
  const stats = [
    {
      label: "Total Orders",
      value: SellerOrder ? SellerOrder.length : 0,
      percentage: SellerOrder
        ? (((SellerOrder.length - 100) / 100) * 100).toFixed(2)
        : 0,
    },
    {
      label: "Total Products",
      value: SellerOrder ? SellerOrder.length : 0,
      percentage: SellerOrder
        ? (((SellerOrder.length - 100) / 100) * 100).toFixed(2)
        : 0,
    },
    {
      label: "Base Amount",
      value: `$${
        SellerOrder
          ? SellerOrder.reduce(
              (total, order) => total + (order.baseAmount || 0),
              0
            ).toFixed(2)
          : 0.0
      }`,
      percentage: SellerOrder
        ? Math.floor(
            ((Math.floor(
              SellerOrder.reduce(
                (total, order) => total + (order.baseAmount || 0),
                0
              )
            ) -
              1500) /
              1500) *
              100
          )
        : 0,
    },
    {
      label: "Purchase Amount",
      value: `$${
        approvedData
        ? approvedData.reduce(
              (total, order) => total + (order.totalAmount || 0),
              0
            ).toFixed(2)
          : 0.0
      }`,
      // `$${SellerOrder
      //   ? Math.floor(SellerOrder.reduce((total, order) => total + (order.totalAmount || 0), 0) .toFixed(2) : 0.00)
      //   : 0}`,
      percentage: SellerOrder
        ? Math.floor(
            ((Math.floor(
              approvedData.reduce(
                (total, order) => total + (order.totalAmount || 0),
                0
              )
            ) -
              2000) /
              2000) *
              100
          )
        : 0,
    },
  ];

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product?.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product?.productId.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const pathname = location.pathname; // e.g., /layout/sellorders/123
 
  const parts = pathname.split("/"); // ['layout', 'sellorders', '123']
  
  const orderSellerId = parts[2]; // Assuming '123' is the seller ID
 

  const [modal, setModal] = useState(false);
  const [orderID, setOrderID] = useState(null);

  useEffect(() => {
    const fetchGetOrder = async () => {
      if (user?.customerId) {
        await dispatch(fetchGetOrderBySellerId(user.customerId));
      }
    };

    if (orderSellerId) {
      fetchGetOrder();
    }
  }, [user, orderSellerId, dispatch, isModalOpen]);

  const handleClickView = async (orderId) => {
    setModal(true);
    await dispatch(fetchOrderView(orderId));
    setOrderID(orderId);
  };

  const handleClickInvoice = async () => {
   
    await dispatch(fetchOrderInvoice(orderID));
  };

  // const handleDownload = (orderId) => {
  //   dispatch(fetchOrderDownloadInvoice(orderId))
  // }
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  const sortedProducts = React.useMemo(() => {
    const validSellerOrder = Array.isArray(SellerOrder) ? SellerOrder : [];
    // Default sort by `paymentDate` in descending order
    let sortedData = [...validSellerOrder].sort((a, b) => {
      const aDate = new Date(a.orderDate).getTime();
      const bDate = new Date(b.orderDate).getTime();
      return bDate - aDate; // Descending order
    });

    // Apply additional sorting based on `sortConfig`
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        console.log('Comparing:', aValue, bValue); // Log values being compared

        if (aValue === bValue) return 0;

        if (sortConfig.direction === 'ascending') {
          return aValue > bValue ? 1 : -1;
        }
        return aValue < bValue ? 1 : -1;
      });
    }

    return sortedData;
  }, [SellerOrder, sortConfig]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = SellerOrder.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = SellerOrder ? SellerOrder.slice(indexOfFirstItem, indexOfLastItem) : [];
  // const currentItems = sortedProducts
  //   ? sortedProducts.slice(indexOfFirstItem, indexOfLastItem).sort(
  //       (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  //     )
  //   : [];
  const currentItems = Array.isArray(sortedProducts)
    ? sortedProducts.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil((SellerOrder?.length || 0) / itemsPerPage);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  // const handleStatus = async (orderId, statusId) => {

  //   if (orderId && statusId) {
  //     await dispatch(orderStatusUpdateApi(orderId, statusId));
  //   }
  // };

  // This function is triggered when the user selects a new status
  const [customerId, setCustomerId] = useState(null);
  const handleStatusChange = (product, statusId) => {
    setCustomerId(product?.customerId);
    setSelectedOrder(product); // Store the selected product (order) for confirmation
    setSelectedStatus(statusId); // Store the selected status for confirmation
    setIsModalOpen(true); // Open the modal
  };

  // Handle confirming the action (Yes)
  const [comment, setComment] = useState("");
  const handleConfirm = async () => {
    if (selectedOrder && selectedStatus) {
      // Update the status through the API only after confirmation
      await dispatch(
        orderStatusUpdateApi(selectedOrder?.orderId, customerId, selectedStatus, comment)
      );
      setIsModalOpen(false);// Close the modal after confirmation
      setComment("")
    }
  };

  // Handle cancelling the action (No)
  const handleCancel = () => {
    setIsModalOpen(false); // Just close the modal without any action
    setComment(""); // Reset comment
  };
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      {isModalOpen && (
        <div
          className="fixed top-0 left-25 w-[70%] sm:w-[90%] h-full flex justify-center items-center bg-slate-600 bg-opacity-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full sm:w-96 h-44 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end  ">
              <button
                className="w-5 p-1 mx-2 sm:mt-3 mt-5"
                onClick={handleCancel}
              >
                <img src={wrong} className="w-6 h-4" />
              </button>
            </div>
            <h1 className="text-black text-center mt-0">
              Are you sure you want to update the status?
            </h1>
            <div className="flex justify-center">
              <textarea
                type="text"
                className="border w-72 p-2 h-10 mt-3 rounded-md text-left"
                placeholder="Write a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="flex justify-around sm:mt-6 mt-2 mb-5">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancel}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
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
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">
            List of Orders
          </h1>
          {/* <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md">
            <FaPlus /> Add New Product
          </button> */}
        </div>

        <div className="flex flex-wrap my-4 gap-2 -ml-4 justify-normal items-center p-4">
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
                    className={`text-sm ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    } p-1 rounded-lg`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"} {Math.abs(stat.percentage)}%
                  </div> */}
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
              {/* <button className="bg-green-300 p-2 h-8 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button> */}
              {/* <FaFilter className="m-2" /> */}
              {/* <button className='text-2xl'>Filter</button> */}
            </div>
            {/* <div className="flex bg-white h-9 p-2 items-center w-48 justify-evenly border rounded-md">
     
              <select className="">
                <option>-Select Group-</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="border rounded-md text-[15px] bg-white mt-4">
          <div className="overflow-x-auto">
            <div className="block lg:hidden md:hidden ">
              {/* Mobile View: Card layout */}
              {Array.isArray(currentItems) && currentItems.length > 0 ? (
                currentItems.map((product, index) => (
                  <div
                    key={product.productId}
                    className="border rounded-lg shadow-md p-4 mb-4 bg-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-bold">
                        Order ID: {indexOfFirstItem + index + 1}
                      </h2>
                      <img
                        className="w-10 h-10"
                        src={product.imageUrl}
                        alt="Product Thumbnail"
                      />
                    </div>
                    <p className="mb-2">
                      <span className="font-semibold">Product Name:</span>{" "}
                      {product?.productName}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Purchased On:</span>{" "}
                      {new Date(product.orderDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Amount:</span> $
                      {product?.totalAmount.toFixed(2)}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Customer:</span>{" "}
                      {product?.customerName}
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold">Order Status:</span>
                      <select
                        className="sm:ml-2 m-0 p-1 border rounded cursor-pointer"
                        disabled={
                          !Array.isArray(orderStatusGetAll) ||
                          orderStatusGetAll.length === 0
                        }
                        onChange={(e) =>
                          handleStatusChange(product, e.target.value)
                        }
                        value={product?.orderStatusId}
                      >
                        {Array.isArray(orderStatusGetAll) &&
                          orderStatusGetAll.length > 0 &&
                          orderStatusGetAll.map((item) => (
                            <option key={item.statusId} value={item.statusId}>
                              {item.statusDescription}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <Tooltip title="View Invoice" placement="top">
                        <img
                          src={eye}
                          className="w-5 h-5 cursor-pointer"
                          onClick={() => handleClickView(product?.orderId)}
                        />
                      </Tooltip>
                      <Tooltip title="Download" placement="top">
                        <img
                          src={download}
                          className="w-5 h-5 cursor-pointer"
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No Orders available</p>
              )}
            </div>

            <div className="hidden lg:block md:block">
              {/* Desktop View: Table layout */}
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr className="border-b-2">
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Thumbnail</th>
                    <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("productName")}>Product Name 
                      {sortConfig.key === "productName"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("orderDate")}>Purchased On
                      {sortConfig.key === "orderDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort("totalAmount")}>Amount
                      {sortConfig.key === "totalAmount"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("customerName")}>Customer
                      {sortConfig.key === "customerName"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
                    </th>
                    <th className="px-4 py-2 text-left">Order Status</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(currentItems) && currentItems.length > 0 ? (
                    currentItems.map((product, index) => (
                      <tr key={product.productId} className="border-b">
                        <td className="px-4 py-2">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-4 py-2">
                          <img className="w-10 h-10" src={product.imageUrl} />
                        </td>
                        <td className="px-4 py-2">{product?.productName}</td>
                        <td className="px-4 py-2">
                          {new Date(product.orderDate)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, "-")}
                        </td>
                        <td className="text-right px-4 py-2">
                          ${product?.totalAmount.toFixed(2)}
                        </td>
                        <td className="px-4 py-2">{product?.customerName}</td>
                        <td className="px-4 py-2">
                          <select
                            className="cursor-pointer"
                            disabled={
                              !Array.isArray(orderStatusGetAll) ||
                              orderStatusGetAll.length === 0
                            }
                            onChange={(e) =>
                              handleStatusChange(product, e.target.value)
                            }
                            value={product?.orderStatusId}
                          >
                            {Array.isArray(orderStatusGetAll) &&
                              orderStatusGetAll.length > 0 &&
                              orderStatusGetAll.map((item) => (
                                <option
                                  key={item.statusId}
                                  value={item.statusId}
                                >
                                  {item.statusDescription}
                                </option>
                              ))}
                          </select>
                        </td>
                        <td className="px-4 py-2 flex gap-1">
                          <Tooltip title="View Invoice" placement="top">
                            <img
                              src={eye}
                              className="w-5 h-5 cursor-pointer"
                              onClick={() => handleClickView(product?.orderId)}
                            />
                          </Tooltip>
                          <Tooltip title="Download" placement="top">
                            <img
                              src={download}
                              className="w-5 h-5 cursor-pointer"
                            />
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No Orders available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={SellerOrder}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default LayoutSellOrders;
