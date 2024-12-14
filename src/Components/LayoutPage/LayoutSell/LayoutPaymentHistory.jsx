import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import filter from "../../../assets/Filter_icon.png";
import share from "../../../assets/upload1.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentHistory } from "../../../Api/PaymentHistoryApi";
import { Tooltip } from "@mui/material";
import eye from "../../../assets/eye.png";
import Pagination from "../../Pagination";
// import { fetchPaymentHistory } from "../../../Api/PaymentHistory";

function LayoutPaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const user = useSelector((state) => state.user.user);
  const paymentHistory = useSelector(
    (state) => state.dashboard.getPaymentHistory
  );

  const dispatch = useDispatch();

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

  const stats = [
    {
      label: "Total Earnings",
      // value: `$${(2420 || 0.0).toFixed(2)}`,
      value: `$${paymentHistory.reduce((total, each) => total + each.paymentAmount, 0).toFixed(2)}`,
      text: "as of 01-December-2023",
      color: "text-green-500",
    },
    {
      label: "Pending Payments",
      value: `$${(3843 || 0).toFixed(2)}`,
      text: "as of 01-December-2023",
      color: "text-blue-900",
    },
    {
      label: "Withdrawal Method",
      value: `$${(1700 || 0).toFixed(2)}`,
      text: "",
    },
  ];

  const filteredPayouts = payouts.filter(
    (payout) =>
      payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  // const sortedProducts = [...paymentHistory].sort((a, b) => {
  //   if (sortConfig.key) {
  //     const aValue = a[sortConfig.key];
  //     const bValue = b[sortConfig.key];

  //     if (sortConfig.direction === "ascending") {
  //       return aValue > bValue ? 1 : -1;
  //     } else {
  //       return aValue < bValue ? 1 : -1;
  //     }
  //   }
  //   return 0;
  // });

  const sortedProducts = React.useMemo(() => {
    // Default sort by `paymentDate` in descending order
    let sortedData = [...paymentHistory].sort((a, b) => {
      const aDate = new Date(a.paymentDate).getTime();
      const bDate = new Date(b.paymentDate).getTime();
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
  }, [paymentHistory, sortConfig]);

  useEffect(() => {
    dispatch(fetchPaymentHistory(user?.customerId));
  }, [user?.customerId]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = paymentHistory.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = Array.isArray(sortedProducts)
    ? sortedProducts.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil((sortedProducts?.length || 0) / itemsPerPage);
 
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

 


  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold">
            Payment History
          </h1>
        </div>

        <div className="flex justify-normal md:flex-row flex-col sm:flex-row   gap-2 w-full mt-4">
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
          <h2 className="text-[22px] font-semibold">Payment History</h2>
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
          <div className="overflow-x-auto">
            <div className="block lg:hidden md:hidden">
              {/* Mobile View: Card layout */}
              {currentItems.length > 0 ? (
                currentItems.map((payout, index) => (
                  <div
                    key={index}
                    className="border rounded-lg shadow-md p-4 mb-4 bg-white"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-bold">
                        Order ID: {indexOfFirstItem + index + 1}
                      </h2>
                      <Tooltip title="View" placement="top">
                        <img
                          src={eye}
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleClickView(payout.orderId)}
                        />
                      </Tooltip>
                    </div>
                    <p className="mb-2">
                      <span className="font-semibold">Payment Date:</span>{" "}
                      {new Date(payout.paymentDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Payment Status:</span>{" "}
                      {payout.paymentStatus}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Payment Amount:</span> $
                      {payout.paymentAmount.toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No payment history available
                </p>
              )}
            </div>

            <div className="hidden lg:block md:block">
              {/* Desktop View: Table layout */}
              <table className="w-full">
                <thead className="bg-blue-900 text-white ">
                  <tr className="border-b-2 flex justify-around">
                    <th className="px-4 py-2">
                      S.NO
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("paymentDate")}>Payment Date {sortConfig.key === "paymentDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}</th>
                    <th className="px-4 py-2">Payment Status</th>
                    <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort("paymentAmount")}>Payment Amount  {sortConfig.key === "paymentAmount"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}</th>
                    {/* <th className="px-4 py-2 text-left">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((payout, index) => (
                      <tr key={index} className="border-b flex justify-around">
                        <td className="px-4 py-2 text-right">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="py-2 text-right">
                          {new Date(payout.paymentDate)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, "-")}
                        </td>
                        <td className="px-14 py-2 text-right">{payout.paymentStatus}</td>
                        <td className=" text-right">
                          ${payout.paymentAmount.toFixed(2)}
                        </td>
                        {/* <td className="px-4 py-2">
                          <Tooltip title="View" placement="top">
                            <img
                              src={eye}
                              className="w-5 h-5 cursor-pointer"
                              onClick={() => handleClickView(payout.orderId)}
                            />
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
          </div>
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
