// import React, { useState } from "react";
// import { TextField } from "@mui/material";

// const Reports = () => {
//   // State to store input values and the saved reports data
//   const [reportType, setReportType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [reports, setReports] = useState([]); // Array to hold saved reports

//   // Handle report type change
//   const handleReportTypeChange = (e) => {
//     setReportType(e.target.value);
//   };

//   // Handle From date change
//   const handleFromDateChange = (e) => {
//     setFromDate(e.target.value);
//   };

//   // Handle To date change
//   const handleToDateChange = (e) => {
//     setToDate(e.target.value);
//   };

//   // Handle form submission and save data to table
//   const handleSave = () => {
//     // Make sure all fields are filled
//     if (reportType && fromDate && toDate) {
//       const newReport = {
//         reportType,
//         fromDate,
//         toDate,
//       };

//       // Add new report to the reports array
//       setReports([...reports, newReport]);

//       // Clear the input fields after saving
//       setReportType("");
//       setFromDate("");
//       setToDate("");
//     } else {
//       alert("Please fill all fields");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Form Section */}
//       <div className="bg-white shadow-lg rounded-lg mx-5 p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Generate Report</h2>
//         <div className="flex gap-5 ">
//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               Type of report
//             </label>
//             <select
//               value={reportType}
//               onChange={handleReportTypeChange}
//               className="border w-52 border-gray-300 rounded-lg px-3 py-2"
//             >
//               <option value="">Select a report</option>
//               <option value="Payments">Payments History</option>
//               <option value="Orders">Purchase History</option>
//               <option value="Settlements">NewOrders</option>
//               <option value="Returns">ExpiredItems</option>
//               <option value="Returns">PendingShipments</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               From:
//             </label>
//             <TextField
//               type="date"
//               size="small"
//               value={fromDate}
//               className="w-52"
//               onChange={handleFromDateChange}
//               InputProps={{ className: "border rounded-lg" }}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium text-gray-700">
//               To:
//             </label>
//             <TextField
//               type="date"
//               size="small"
//               className="w-52"
//               value={toDate}
//               onChange={handleToDateChange}
//               InputProps={{ className: "border rounded-lg" }}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Save
//           </button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className=" p-6">
//         <div className="flex justify-between">
//           <h2 className="text-xl text-blue-900 font-semibold mb-4">
//             Saved Reports
//           </h2>

//           <button className="bg-green-500 text-white px-3 py-1 my-3 rounded-lg hover:bg-green-600 transition">
//             Export
//           </button>
//         </div>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-blue-900 text-white">
//               <th className=" px-4 py-2 text-left">S No.</th>
//               <th className=" px-4 py-2 text-left">Report Name</th>
//               <th className=" px-4 py-2 text-left">From</th>
//               <th className=" px-4 py-2 text-left">To</th>
//               <th className=" px-4 py-2 text-left">Export Option</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length > 0 ? (
//               reports.map((report, index) => (
//                 <tr key={index} className="border-t">
//                   <td className=" px-4 py-2">{index + 1}</td>
//                   <td className=" px-4 py-2">{report.reportType}</td>
//                   <td className=" px-4 py-2">{report.fromDate}</td>
//                   <td className=" px-4 py-2">{report.toDate}</td>
//                   <td className=" px-4 py-2">
//                     <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
//                       Export
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">
//                   No reports saved
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Reports;

import React, { useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { format, parseISO } from "date-fns";
import { getReportExpiredItemsExcel, getReportNewOrderExcel, getReportPaymentHistoryExcel, getReportPendingShipmentsExcel, getReportPurchaseHistoryExcel, getReportsApi } from "../../../Api/AdminApi";
import Pagination from "../../Pagination";

const Reports = () => {
  // State to store input values and the saved reports data
  const [reportType, setReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reports, setReports] = useState([]); // Array to hold saved reports
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  // Handle report type change
  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  // Handle From date change
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  // Handle To date change
  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  // const handleDateChange = (setter) => (e) => {
  //   const inputDate = e.target.value; // YYYY-MM-DD from the native date input
  //   if (isValid(parseISO(inputDate))) {
  //     setter(inputDate); // Store the value as YYYY-MM-DD
  //   } else {
  //     alert("Invalid date format");
  //   }
  // };
  // Handle form submission and save data to table
  // const handleSave = () => {
  //   // Make sure all fields are filled
  //   if (reportType && fromDate && toDate) {
  //     const newReport = {
  //       reportType,
  //       fromDate,
  //       toDate,
  //     };

  //     // Add new report to the reports array
  //     setReports([...reports, newReport]);

  //     // Clear the input fields after saving
  //     setReportType("");
  //     setFromDate("");
  //     setToDate("");
  //   } else {
  //     alert("Please fill all fields");
  //   }
  // };
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = reports.slice(indexOfFirstItem, indexOfLastItem);
  // const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);

  const [savedReportType, setSavedReportType] = useState("");
  const [savedFromDate, setSavedFromDate] = useState("");
  const [savedToDate, setSavedToDate] = useState("");

  const handleSave = async () => {
    if (reportType && fromDate && toDate) {
      const formattedFromDate = format(parseISO(fromDate), "MM/dd/yyyy");
      const formattedToDate = format(parseISO(toDate), "MM/dd/yyyy");

      try {
        const res = await getReportsApi(
          reportType,
          formattedFromDate,
          formattedToDate
        );
        setReports(res);
      } catch (error) {
        console.error("Dispatch error:", error);
      }

      // Save the current input values
      setSavedReportType(reportType);
      setSavedFromDate(fromDate);
      setSavedToDate(toDate);

      // Clear the input fields
      setReportType("");
      setFromDate("");
      setToDate("");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      console.log('Previous Sort Config:', prevConfig);
      const newConfig = prevConfig.key === key
        ? {
          key,
          direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
        }
        : { key, direction: 'ascending' };

      console.log('New Sort Config:', newConfig);
      return newConfig;
    });
  };

  const sortedReports = useMemo(() => {
    // if (!sortConfig.key) return reports;
    // const sortedData = [...reports];
    // sortedData.sort((a, b) => {
    //   const aValue = a[sortConfig.key];
    //   const bValue = b[sortConfig.key];

    //   // if (sortConfig.key === "PaymentAmount") {
    //     if (sortConfig.key) {
    //     return sortConfig.direction === "asc"
    //       ? aValue - bValue
    //       : bValue - aValue;
    //   }

    //   const aStr = typeof aValue === "string" ? aValue.toLowerCase() : aValue;
    //   const bStr = typeof bValue === "string" ? bValue.toLowerCase() : bValue;

    //   return sortConfig.direction === "asc"
    //     ? aStr > bStr
    //       ? 1
    //       : -1
    //     : aStr < bStr
    //     ? 1
    //     : -1;
    // });

    // return sortedData;
    let sortedData = [...reports].sort((a, b) => {
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
  }, [reports, sortConfig]);

 




  const currentItems = sortedReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // const handleSort = (key) => {
  //   setSortConfig((prevConfig) => ({
  //     key,
  //     direction:
  //       prevConfig.key === key && prevConfig.direction === "asc"
  //         ? "desc"
  //         : "asc",
  //   }));
  // };

  // const getArrow = (key) => {
  //   if (sortConfig.key === key) {
  //     return sortConfig.direction === "asc" ? "▲" : "▼";
  //   }
  //   return "▲"; // Default arrow
  // };
  const reportTypeMapping = {
    1: "Payments History",
    2: "Purchase History",
    3: "NewOrders",
    4: "ExpiredItems",
    5: "PendingShipments",
  };

  const mappedReportType = reportTypeMapping[savedReportType];
  console.log("Mapped Report Type:", mappedReportType);
  const onExcelHandle = async () => {
    // if (!savedFromDate || isNaN(new Date(savedFromDate).getTime())) {
    //   alert("Please select a valid 'From Date'.");
    //   return;
    // }
    // if (!savedToDate || isNaN(new Date(savedToDate).getTime())) {
    //   alert("Please select a valid 'To Date'.");
    //   return;
    // }
    try {
          // if (!fromDate || !toDate) {
          //   console.error("Error: Missing date range inputs");
          //   return;
          // }

      const formattedFromDate = format(parseISO(savedFromDate), "yyyy-MM-dd");
      const formattedToDate = format(parseISO(savedToDate), "yyyy-MM-dd");
      // const formattedFromDate = format(new Date(fromDate), "yyyy-MM-dd");
      // const formattedToDate = format(new Date(toDate), "yyyy-MM-dd");

      console.log("Formatted From Date:", formattedFromDate);
      console.log("Formatted To Date:", formattedToDate);

      // const trimmedSavedReportType = savedReportType.trim();
      // console.log("Trimmed Report Type:", trimmedSavedReportType);

      if (mappedReportType === "Payments History") {
        await getReportPaymentHistoryExcel(formattedFromDate, formattedToDate);
      } else if (mappedReportType === "Purchase History") {
        await getReportPurchaseHistoryExcel(formattedFromDate, formattedToDate);
      } else if (mappedReportType === "NewOrders") {
        await getReportNewOrderExcel(formattedFromDate, formattedToDate);
      } else if (mappedReportType === "ExpiredItems") {
        await getReportExpiredItemsExcel(formattedFromDate, formattedToDate);
      } else if (mappedReportType === "PendingShipmets") {
        await getReportPendingShipmentsExcel(formattedFromDate, formattedToDate);
      } else {
        console.error("Unrecognized report type:", mappedReportType);
      }

      // if (data) {
      //   console.log("Excel report fetched successfully");
      //   // Further processing, like downloading the file, if required
      //   const blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

      //   // Create a temporary link element for the download
      //   const link = document.createElement('a');
      //   link.href = URL.createObjectURL(blob);
      //   link.download = `PaymentHistory_${fromDate}_to_${toDate}.xlsx`; // Set desired filename

      //   // Programmatically click the link to trigger the download
      //   document.body.appendChild(link);
      //   link.click();

      //   // Cleanup
      //   document.body.removeChild(link);
      // } else {
      //   console.error("Failed to fetch Excel report data");
      // }
    } catch (error) {
      console.error("Error handling Excel report:", error);
    }
  };

  return (
    <div className="container mx-auto overflow-y-scroll p-6">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg mx-5 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generate Report</h2>
        <div className="flex gap-5 ">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Type of report
            </label>
            <select
              value={reportType}
              onChange={handleReportTypeChange}
              className="border w-52 border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
            >
              <option value="">Select a report</option>
              {/* <option value="Payments">Payments History</option>
              <option value="Orders">Purchase History</option>
              <option value="Settlements">NewOrders</option>
              <option value="Returns">ExpiredItems</option>
              <option value="Returns">PendingShipments</option> */}
              <option value="1">Payments History</option>
              <option value="2">Purchase History</option>
              <option value="3">NewOrders</option>
              <option value="4">ExpiredItems</option>
              <option value="5">PendingShipments</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              From:
            </label>
            <TextField
              type="date"
              size="small"
              className="w-52 cursor-pointer"
              // value={fromDate ? format(parseISO(fromDate), "yyyy-MM-dd") : ""}
              value={fromDate}
              onChange={handleFromDateChange}
              InputProps={{ className: "border rounded-lg cursor-pointer" }}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              To:
            </label>
            <TextField
              type="date"
              size="small"
              className="w-52 cursor-pointer"
              // value={toDate ? format(parseISO(toDate), "yyyy-MM-dd") : ""}
              value={toDate}
              onChange={handleToDateChange}
              InputProps={{ className: "border rounded-lg cursor-pointer" }}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Show
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className=" p-6">
        {/* <div className="flex justify-between">
          <h2 className="text-xl text-blue-900 font-semibold mb-4">
            Saved Reports
          </h2>
          <div className="items-center">

          <label className="text-sm font-medium text-black-700">
            Type of report :
          </label>
          <TextField
            type="text" // Use text to prevent editing and keep it read-only
            size="small"
            className="w-52 mr-2" // Adjust width as needed (e.g., w-72 for wider input)
            value={reportTypeMapping[reportType] || "No Report Selected"} // Show the report name
            InputProps={{
              readOnly: true, // Make it read-only
              className: "border rounded-lg bg-gray-100", // Add background color to indicate it's read-only
            }}
          />
          </div>
          <h1>{fromDate}</h1>
          <h1>{toDate}</h1>
          <button className="bg-green-500 text-white px-3 py-1 my-3 rounded-lg hover:bg-green-600 transition">
            Export
          </button>
        </div> */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h2 className="text-xl text-blue-900 font-semibold">Saved Reports</h2>

          {/* <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Type of report:</label>
            <TextField
              type="text"
              size="small"
              className="w-52"
              value={reportTypeMapping[reportType] || "No Report Selected"}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div> */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Type of report:
            </label>
            <TextField
              type="text"
              size="small"
              className="w-52"
              value={reportTypeMapping[savedReportType] || "No Report Selected"}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div>

          {/* <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">From:</label>
            <TextField
              type="date"
              size="small"
              className="w-36"
              value={fromDate}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div> */}

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">From:</label>
            <TextField
              type="date"
              size="small"
              className="w-36"
              value={savedFromDate}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div>

          {/* <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">To:</label>
            <TextField
              type="date"
              size="small"
              className="w-36"
              value={toDate}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div> */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">To:</label>
            <TextField
              type="date"
              size="small"
              className="w-36"
              value={savedToDate}
              InputProps={{
                readOnly: true,
                className: "border rounded-lg bg-gray-100",
              }}
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={onExcelHandle}>
            Export
          </button>
        </div>
        <table className="min-w-full table-auto">
          <thead className="overflow-scroll">
            <tr className="bg-blue-900 text-white">
              {/* <th className=" px-4 py-2 text-left">S No.</th>
              <th className=" px-4 py-2 text-left">Report Name</th>
              <th className=" px-4 py-2 text-left">From</th>
              <th className=" px-4 py-2 text-left">To</th>
              <th className=" px-4 py-2 text-left">Export Option</th> */}
              <th className=" px-4 py-2 text-left">S.No</th>
              {/* <th className=" px-4 py-2 text-left">Customer Name</th> */}
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("CustomerName")}
              >
                Customer Name    {sortConfig.key === "CustomerName"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : "▲"}
              </th>
              <th className=" px-4 py-2 text-left">Order Number</th>
              {/* <th className=" px-4 py-2 text-left">Order Date</th> */}
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("OrderDate")}
              >
                Order Date    {sortConfig.key === "OrderDate"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : "▲"}
              </th>
              {/* <th className=" px-4 py-2 text-left">Payment Amount</th>
              <th className=" px-4 py-2 text-left">Payment Date</th> */}
              <th
                className="px-10 text-right cursor-pointer"
                onClick={() => handleSort("PaymentAmount")}
              >
                Payment Amount    {sortConfig.key === "PaymentAmount"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : "▲"}
              </th>
              <th
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort("PaymentDate")}
              >
                Payment Date   {sortConfig.key === "PaymentDate"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : "▲"}
              </th>
              <th className=" px-4 py-2 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.length > 0 ? (
              currentItems.map((report, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{report.CustomerName}</td>
                  <td className="px-4 py-2">{report.OrderNumber}</td>
                  <td className="px-4 py-2">
                    {new Date(report.OrderDate)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\//g, "-")}
                  </td>
                  <td className="px-10 text-right">
                    ${report.PaymentAmount.toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(report.PaymentDate)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\//g, "-")}
                  </td>
                  <td className="px-4 py-2">{report.PaymentMethod}</td>
                  {/* <td className="px-4 py-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
                      Export
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No reports saved
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        // productList={products}
        productList={reports}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Reports;
