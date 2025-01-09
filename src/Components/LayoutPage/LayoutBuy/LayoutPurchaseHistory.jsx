


import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import filter from "../../../assets/Filter_icon.png";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Pagination from "../../Pagination";
import Deactivate from "../../../assets/Deactivate.png";
import { Button, Dialog, DialogActions, DialogContent, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetBidsBySeller, removeBidApi } from "../../../Api/BidApi";
import Notification from "../../Notification";
import wrong from '../../../assets/Icons/wrongred.png';
import Loading from "../../Loading";
import { fetchGetOrder, fetchGetOrderByCustomerIdPage } from "../../../Api/OrderApi";

const LayoutPurchaseHistory = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" }); // For sorting
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const Order = useSelector((state) => state.order.getOrder);
  console.log("rrrrrr", Order)

  const [openDialog, setOpenDialog] = useState(false);
 


  const [currentItems, setCurrentItems] = useState([]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    if (Order) {
      setCurrentItems(Order.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, Order, indexOfFirstItem, indexOfLastItem]);

  // Sorting logic
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    if (Order && sortConfig.key !== "") {
      const sortedItems = [...Order].sort((a, b) => {
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
  }, [sortConfig, Order, indexOfFirstItem, indexOfLastItem]);


  const [deleteBidId, setDeleteBidId] = useState(null)
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const DeleteBid = (bidId) => {
    setDeleteBidId(bidId)
    setOpenDialog(true);
  }



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state
      try {
        await dispatch(fetchGetOrder(user?.customerId));
      } catch (error) {
        console.error("Error fetching bids:", error);
      } finally {
        setLoading(false); // Reset loading state
      }
    };
    fetchData();
  }, [user?.customerId, dispatch]);
  
  


  return (
    <div className="relative bg-gray-100  w-full h-full flex justify-center items-center overflow-y-auto ">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
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
          Are you sure you want to Delete this Bid?
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
            {/* <Button
              onClick={handleModalSave}
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "#006400" },
              }}
            >
              Yes
            </Button> */}
          </DialogActions>
        </div>
      </Dialog>
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            Purchase History
          </p>
        </div>

        <div className="w-full overflow-x-scroll text-[15px] mt-4">
          {loading && (
            <div>
              <Loading />
            </div>
          )}
          {error && <div>Error: {error.message}</div>}
          {!loading && !error && (
            <>
            <table className="rounded-lg bg-white w-full hidden md:table">
              <thead className="bg-blue-900 text-white">
                <tr>
                <th className="border-b-2 py-2 min-w-8 pl-4 text-left">S.No</th>
                  <th className="border-b-2 py-2 min-w-8 pl-4 text-left">Order Number</th>
                  <th className="border-b-2 py-2 min-w-8 pl-4 text-left">Tracking Number</th>

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
                    <th className="border-b-2 py-2 min-w-16 pl-4 text-center">
                    Quantity
                  </th>
                  <th className="border-b-2 py-2 min-w-36 pl-4 text-center">
                    Seller Name
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
                    Purchased Date{" "}
                    {sortConfig.key === "productName"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▲"}
                  </th>
                  {/* <th className="border-b-2 min-w-16 text-left">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-gray-600 text-lg py-4 px-2">
                      There are no purchase history
                    </td>
                  </tr>
                ) : (
                  currentItems.map((request, index) => (
                    <tr key={index}>
                         <td className="border-b-2 py-2 min-w-8 pl-4 text-left">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="border-b-2 py-2 min-w-8 pl-4 text-left">
                        {request.orderNumber}
                      </td>
                      <td className="border-b-2 py-2 min-w-36 pl-4 text-left">
                        {request.trackingNumber}
                        {/* {Math.floor(Math.random() * 10000000)} Generates a random number between 0 and 99 */}
                        
                    </td>
                      <td className="border-b-2 min-w-32 text-left">
                        <Tooltip title={request.productName} placement="right">
                          <span className="truncate block w-28 cursor-pointer">
                            {request.productName}
                          </span>
                        </Tooltip>
                      </td>
                      <td className="border-b-2 py-2 min-w-16 pl-4 text-center">
                        ${request?.pricePerProduct?.toFixed(2)}
                      </td>
                      <td className="border-b-2 py-2 min-w-16 pl-4 text-center">
                        {request.quantity}
                      </td>
                      <td className="border-b-2 py-2 min-w-36 pl-4 text-center">
                        {request.sellerName}
                    </td>

                      <td className="border-b-2 min-w-16 text-left">
                        {/* {request.statusId ? "Active" : "Inactive"} */}
                        {
                          request.orderStatusId=== 1
                            ? "Pending"
                            : request.orderStatusId === 2
                              ? "In Review"
                              : request.orderStatusId === 3
                                ? "Approved"
                                : request.orderStatusId === 4
                                  ? "Rejected"
                                  : request.orderStatusId === 5
                                    ? "Cancelled"
                                    : "Unknown Status"
                        }

                      </td>
                      <td className="border-b-2 min-w-24 text-left">
                        {new Date(request.orderDate)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")}
                      </td>
                      {/* <td className="border-b-2 min-w-16 text-left">
                        <Tooltip placement="top" title="Delete">
                          <img
                            src={Bin}
                            alt="Delete"
                            className="cursor-pointer w-4 h-4 ml-4"
                            onClick={() => DeleteBid(request.bidId)}
                          />
                        </Tooltip>
                      </td> */}
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
                      <span className="font-semibold text-sm">Order Number:</span>
                      <span>{indexOfFirstItem + i + 1}</span>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-semibold">Tracking Number:</span>{" "}
                        {request.trackingNumber}
                      </p>
                      <p>
                        <span className="font-semibold">Product Name:</span>{" "}
                        {request.productName}
                      </p>
                      <p>
                        <span className="font-semibold">Price:</span>{" "}
                        ${request?.pricePerProduct?.toFixed(2)}
                      </p>
                      <p>
                        <span className="font-semibold">Quantity:</span>{" "}
                        {request.quantity}
                      </p>
                      <p>
                        <span className="font-semibold">Seller Name:</span>{" "}
                        {request.sellerName}
                        </p>
                      <p>
                        <span className="font-semibold">Status:</span>{" "}
                        {request.isActive ? "Active" : "Inactive"}
                      </p>
                      <p>
                        <span className="font-semibold"> Purchased Date:</span>{" "}
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
                      {/* <p>
                        <span className="font-semibold"> Action:</span>{" "}
                        <Tooltip title="Delete" placement="top">
                          <img
                            src={Bin}
                            alt="Delete"
                            className="cursor-pointer w-4 h-4 "
                          />
                        </Tooltip>
                      </p> */}
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
            </>
          )}

        </div>
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={Order}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default LayoutPurchaseHistory;


