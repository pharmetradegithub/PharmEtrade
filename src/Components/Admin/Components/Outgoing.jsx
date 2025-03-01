import React, { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import filter from "../../../assets/Filter_icon.png";
import share from '../../../assets/upload1.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentHistory } from "../../../Api/PaymentHistoryApi";
import { Tooltip } from "@mui/material";
import eye from '../../../assets/eye.png'
import Pagination from "../../Pagination";
import { SettleGetAllApi } from "../../../Api/SettlementApi";
// import { fetchPaymentHistory } from "../../../Api/PaymentHistory";


function LayoutPaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const user = useSelector((state) => state.user?.user || [])
  const paymentHistory = useSelector((state) => state.dashboard?.getPaymentHistory || [])
  const [getAll, setGetAll] = useState(null)
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

  const stats = [
    {
      label: "Total Amount Paid",
      // value: `$${(2420 ||.0).toFixed(2)}`,
      // value: `$${getAll.reduce((total, each) => total + each.amountPaid, 0).toFixed(2)}`,
      value: `$${(Array.isArray(getAll) ? getAll : [])
        .filter(item => item?.amountPaid != null)
        .reduce((total, each) => total + each.amountPaid, 0)
        .toFixed(2)}`,
      text: "as of 01-December-2023",
      color: "text-green-500",
    },
    // {
    //   label: "Pending Payments",
    //   value: `$${(3843 ||.0).toFixed(2)}`,
    //   text: "as of 01-December-2023",
    //   color: "text-blue-900",
    // },
    // { label: "Withdrawal Method", value: `$${(1700 ||.0).toFixed(2)}`, text: "" },
  ];

  const filteredPayouts = payouts.filter(
    (payout) =>
      payout.purchase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payout.transactionid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // useEffect(() => {
  //   dispatch(fetchPaymentHistory(user?.customerId))
  // }, [user?.customerId])


  // sorting 

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

const handleSort = (key) => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
};
// const sortedItems = React.useMemo(() => {
//   if (!Array.isArray(paymentHistory)) {
//     console.error("paymentHistory is not an array:", paymentHistory);
//     return [];
//   }

//   if (sortConfig.key) {
//     return [...paymentHistory].sort((a, b) => {
//       if (sortConfig.direction === "ascending") {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });
//   }
//   return paymentHistory;
// }, [paymentHistory, sortConfig]);


// const sortedItems = React.useMemo(() => {
//   if (sortConfig.key) {
//     return [...paymentHistory].sort((a, b) => {
//       if (sortConfig.direction === "ascending") {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });
//   }
//   return paymentHistory;
// }, [paymentHistory, sortConfig]);

  const sortedItems = React.useMemo(() => {

    const validPaymentHistory = Array.isArray(getAll) ? getAll : [];
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
  }, [getAll, sortConfig]);
  

  useEffect(() => {
    const data = async () => {
      const res = await SettleGetAllApi()
      setGetAll(res)
    }
    data()
  }, [])


const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
const currentItems = (sortedItems || []).slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((getAll?.length || 0) / itemsPerPage);
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900 font-semibold"> Payments Send</h1>
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
                        className="bg-blue text-white px-4 py-2 rounded-md ml-2"
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
            {/* <thead className="bg-blue text-white">
              <tr className="border-b-2">
                
                <th className="px-4 py-2 text-left">S.NO</th>
                <th className="px-4 py-2 text-left" onClick={()=> handleSort('')}>Invoice Number {sortConfig.key ==="" && (sortConfig.direction ==="ascending"  ? '▲' : '▼')}</th>
                <th className="px-4 py-2 text-left" onClick={()=> handleSort ("")}>Invoice Date {sortConfig.key ==="" && (sortConfig.direction ==="ascending" ? '▲' : '▼')}</th>
                  <th className="px-4 py-2 text-left" onClick={() => handleSort('paymentDate')}>
                To User {sortConfig.key === 'paymentDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </th>

                <th className="px-4 py-2 text-left">Transaction Id</th>
                <th className="px-4 py-2 text-left">Transaction Date</th>
                <th className="px-4 py-2 text-left" onClick={()=> handleSort ("paymentAmount")}>Transaction Amount {sortConfig.key === "paymentAmount" && ( sortConfig.direction === "ascending" ?  '▲' : '▼')}</th>
                
                <th className="px-4 py-2 text-left">Payment mode</th>
                <th className="px-4 py-2 text-left">cheque Number</th>
                <th className="px-4 py-2 text-left">cheque Date</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead> */}
            <thead className="bg-blue text-white">
        <tr className="border-b-2">
          <th className="px-4 py-2 text-left">S.NO</th>
          {/* <th className="px-4 py-2 text-left" onClick={() => handleSort('invoiceNumber')}>
            Invoice Number {sortConfig.key === 'invoiceNumber' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('invoiceDate')}>
            Invoice Date
            {sortConfig.key === "invoiceDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {/* {sortConfig.key === 'invoiceDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} 
          </th> */}
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentDate')}>
            To User
            {sortConfig.key === "paymentDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {/* {sortConfig.key === 'paymentDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentAmount')}>
            Transaction Id 
            {sortConfig.key === "paymentAmount"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
            {/*  {sortConfig.key === 'paymentAmount' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
            </th> 
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('transactionDate')}>
            Transaction Date
            {sortConfig.key === "transactionDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {/* {sortConfig.key === 'transactionDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('transactionAmount')}>
            Transaction Amount
            {sortConfig.key === "transactionAmount"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
             {/* {sortConfig.key === 'transactionAmount' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('paymentStatus')}>Payment Mode
          {sortConfig.key === "paymentStatus"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
          {/* {sortConfig.key === 'paymentStatus' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
         
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('chequeNumber')}>Cheque Details
          {sortConfig.key === "chequeNumber"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
          {/* {sortConfig.key === 'chequeNumber' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
         
          </th>
          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('chequeDate')}>Cheque Date
          {sortConfig.key === "chequeDate"
                        ? sortConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : "▲"}
          {/* {sortConfig.key === 'chequeDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')} */}
         
          </th>
          {/* <th className="px-4 py-2 text-left">Action
         
          </th> */}
        </tr>
      </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((payout, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                    {/* <td className="px-4 py-2">{payout.invoiceNumber}</td> */}
                    {/* <td className="px-4 py-2">
                      {/* {payout.invoiceDate}
                      {new Date(payout.invoiceDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}

                    </td> */}

                    <td className="px-4 py-2">
                      {payout.sellerName}
                      {/* {new Date(payout.paymentDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")} */}
                    </td>
                    
                    <td className="px-4 py-2">{payout.transactionId || "---"}</td>
                    <td className="px-4 py-2">
                      {new Date(payout.paymentDate)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, "-")}
                    </td>
                    <td className="px-4 py-2 text-left">${payout.amountPaid.toFixed(2)}</td>
                    <td className="px-4 py-2">{payout.paymentMode}</td>
                    <td className="px-4 py-2">
                      {payout.chequeImageUrl ? (
                        <a
                          href={payout.chequeImageUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Download
                        </a>
                      ) : (
                        "N/A"
                      )}

                    </td>
                    <td className="px-4 py-2">
                      {payout.chequeMailedOn
                        ? new Date(payout.chequeMailedOn)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "-")
                        : <div className="justify-center">---</div>}
                    </td>
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
          productList={getAll}
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


