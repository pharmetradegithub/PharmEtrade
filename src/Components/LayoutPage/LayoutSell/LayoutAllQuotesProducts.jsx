import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
// import QuoteDetail from "../Components/QuoteDetail";
import filter from "../../../assets/Filter_icon.png";
import { useSelector } from "react-redux";
import { fetchQuotedProduct, UpdateBid } from "../../../Api/BidApi";
import Bin from "../../../assets/Bin.png";
import { Tooltip } from "@mui/material";

import Pagination from "../../Pagination";
import Notification from "../../Notification";

const LayoutAllQuotesProducts = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "productName",
    direction: "asc",
  }); // Add sorting state
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const bidQuotedProduct = useSelector((state) => state.bid.bidQuotedProduct);

  const stats = [
    { label: "Return Requested", value: 150, percentage: 75 },
    { label: "Return Approved", value: 120, percentage: 60 },
    { label: "Return PickedUp", value: 90, percentage: -11 },
    { label: "Refund Processed", value: 20, percentage: 50 },
  ];

  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const quotes = [
    {
      id: 234,
      thumbnail: "Metrogyl",
      price: "67",
      status: "Sent to Seller",
      quantity: "4",
      created: "22-08-12",
      updated: "22-08-12",
    },
    {
      id: 430,
      thumbnail: "Metrogyl",
      price: "89",
      status: "Sent to Seller",
      quantity: "6",
      created: "22-08-12",
      updated: "22-08-12",
    },
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const [currentItems, setCurrentItems] = useState([]);

  // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const [currentItems, setcurrentItems] = useState(
    bidQuotedProduct.slice(indexOfFirstItem, indexOfLastItem)
  );
  useEffect(() => {
    if (bidQuotedProduct) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setcurrentItems(bidQuotedProduct.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage,bidQuotedProduct]);
  useEffect(() => {
    if (bidQuotedProduct) {
      const sortedProducts = [...bidQuotedProduct].sort((a, b) => {
        const isAsc = sortConfig.direction === "asc";
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return isAsc ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return isAsc ? 1 : -1;
        }
        return 0;
      });
      setcurrentItems(sortedProducts.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, bidQuotedProduct, sortConfig]);

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const product = async () => {
      await fetchQuotedProduct(user.customerId);
    };
    product();
  }, []);
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  const statusMapping = {
    1: "Pending",
    2: "In Review",
    3: "Approved",
    4: "Rejected",
    5: "Cancelled",
  };
  const handleStatusChange = async (newStatusId, quoted) => {
    console.log("Selected Status ID:", newStatusId, quoted);
    const data = {
      bidId: quoted.bidId,
      buyerId: quoted.buyerId,
      productId: quoted.productId,
      price: quoted.price,
      quantity: quoted.quantity,
      comments: quoted.comments,
      statusId: parseInt(newStatusId, 10),
      isActive: true,
      createdOn: new Date().toISOString(),
    };
    console.log(data);
    try {
      const response = await UpdateBid(data);
      setcurrentItems((prevItems) =>
        prevItems.map((item) =>
          item.bidId === quoted.bidId
            ? { ...item, statusId: parseInt(newStatusId, 10) } // Update statusId
            : item
        )
      );
      console.log(response);
      setNotification({
        show: true,
        message: "Bid Updated successfully!",
      });
     
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log(error);
    }
    // Update your state or perform other actions based on the selection.
  };

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center items-center overflow-y-auto">
        {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className=" w-[95%] h-full mt-8">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            {" "}
            All Quoted Products{" "}
          </p>
        </div>

        <div className="flex  gap-2 flex-wrap justify-normal items-center p-4">
          {/* {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[15px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  {/* <div className="menu-icon">
                    <CiMenuKebab />
                  </div> *
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  {/* <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"}{" "}
                    {Math.abs(stat.percentage)}%
                  </div> 
                </div>
              </div>
            </div>
          ))} */}
        </div>
        <div className="hidden">{currentItems?.length}</div>
        <div className="w-full">
          {/* <div className="flex justify-end">
            <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>{" "}
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div> */}

          <div className=" text-[15px] w-full font-sans">
            <table className="rounded-lg bg-white w-full hidden md:table">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {/* <th className="border-b-2 py-4 min-w-36 pl-4 text-left">
                    Product Id
                  </th> */}
                  {/* <th className="border-b-2 min-w-36 text-left">Thumbnail</th> */}
                  <th className="border-b-2 py-2  pl-4 text-left">S.NO</th>
                  <th
                    className="border-b-2 py-2  pl-4 text-left cursor-pointer"
                    onClick={() => handleSort("productName")}
                  >
                    Product Name
                    {sortConfig.key === "productName"
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  <th
                    className="border-b-2  text-left cursor-pointer"
                    onClick={() => handleSort("price")}
                  >
                    Price
                    {sortConfig.key === "price"
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  <th
                    className="border-b-2  text-left cursor-pointer"
                    onClick={() => handleSort("quantity")}
                  >
                    Quantity
                    {sortConfig.key === "quantity"
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  <th
                    className="border-b-2  text-left cursor-pointer"
                    onClick={() => handleSort("createdOn")}
                  >
                    Created Date
                    {sortConfig.key === "createdOn"
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  <th
                    className="border-b-2  text-left cursor-pointer"
                    onClick={() => handleSort("customerName")}
                  >
                    Customer Name
                    {sortConfig.key === "customerName"
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  <th className="border-b-2 text-left">Status</th>
                  <th className="border-b-2  text-left">Action</th>

                  {/* <th className="border-b-2 min-w-36 text-left">
                    Bulk Order Quantity
                  </th> */}
                  {/* <th className="border-b-2 min-w-36 text-left">Updated On</th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-2 px-2">
                      We couldn't find any bids
                    </td>
                  </tr>
                ) : (
                  currentItems.map((quoted, index) => (
                    <tr key={index}>
                      {/* <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
                        {quoted.id}
                      </td> */}
                      <td className="border-b-2 text-center cursor-pointer">
                        {indexOfFirstItem + index + 1}
                      </td>
                      {/* <td className="border-b-2 py-2  px-2 pl-4 text-left">
                          {quoted.productName}
                      </td> */}
                      <td className="border-b-2 py-2  px-2 pl-4 text-left">
                        <Tooltip title={quoted.productName} placement="right">
                          <span className="truncate block w-24 cursor-pointer">
                            {" "}
                            {/* Truncate and make clickable */}
                            {quoted.productName}
                          </span>
                        </Tooltip>
                      </td>
                      <td className="border-b-2 px-2 text-left">
                        ${" "}
                        {quoted.price
                          ? Number(quoted.price).toFixed(2)
                          : "0.00"}
                      </td>
                      <td className="border-b-2 px-2 text-left cursor-pointer">
                        {quoted.quantity}
                      </td>
                      <td className="border-b-2 px-2  text-left cursor-pointer">
                        {new Date(quoted.createdOn)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </td>
                      <td className="border-b-2 px-2 text-left cursor-pointer">
                        {quoted.customerName}
                      </td>
                      <td className="border-b-2 px-2  text-left">
                        {/* {quoted.statusId ? "Active" : "Inactive"} */}
                        <select
                          value={quoted.statusId}
                          onChange={(e) =>
                            handleStatusChange(e.target.value, quoted)
                          }
                        >
                          {Object.entries(statusMapping).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border-b-2 px-2 text-left">
                        <Tooltip placement="top" title="Delete">
                          <img
                            src={Bin}
                            alt="Delete"
                            className="cursor-pointer w-4 h-4 ml-4"
                            // onClick={() => DeleteProduct(product.productID)}
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
                currentItems.map((quoted, i) => (
                  <div
                    key={i}
                    className="bg-white shadow rounded-lg p-4 border"
                  >
                    <div className="flex gap-2">
                      <span className="font-semibold text-sm">S.No:</span>
                      <span>{indexOfFirstItem + i + 1}</span>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-semibold">Product Name:</span>{" "}
                        {quoted.productName}
                      </p>
                      <p>
                        <span className="font-semibold">Price:</span>{" "}
                        {quoted.price
                          ? Number(quoted.price).toFixed(2)
                          : "0.00"}
                      </p>
                      <p>
                        <span className="font-semibold">Quantity:</span>{" "}
                        {quoted.quantity}
                      </p>
                      <p>
                        <span className="font-semibold"> Created Date:</span>{" "}
                        {new Date(quoted.createdOn)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </p>
                      <p>
                        <span className="font-semibold"> Customer Name:</span>{" "}
                        {quoted.customerName}
                      </p>
                      <p>
                        <span className="font-semibold"> Status:</span>{" "}
                        {quoted.isActive ? "Active" : "Inactive"}
                      </p>
                      <p>
                        <span className="font-semibold"> Action:</span>{" "}
                        {quoted.totalAmount}
                      </p>
                    </div>
                    <div className="mt-4 flex space-x-4 items-center justify-start">
                      {/* <Tooltip title="Edit" placement="top">
                      <img
                        src={edit}
                        alt="Edit"
                        className={`cursor-pointer w-7 h-7 ${
                          deletedCustomers.includes(customer.name) ||
                          deactivatedCustomers.includes(customer.name)
                            ? "opacity-50 pointer-events-none"
                            : ""
                        }`}
                        onClick={() => console.log("Edit clicked")}
                      />
                    </Tooltip> */}
                      <Tooltip title="Delete" placement="top">
                        <img
                          src={Bin}
                          alt="Delete"
                          className="cursor-pointer w-4 h-4 "
                        />
                      </Tooltip>
                    </div>
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
        </div>

        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={bidQuotedProduct}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default LayoutAllQuotesProducts;
