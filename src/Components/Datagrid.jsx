import React, { useState } from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const columns = [
  { key: "sno", name: "S.No", sortable: true },
  { key: "thumbnail", name: "Thumbnail", sortable: false },
  { key: "productName", name: "Product Name", sortable: true },
  { key: "createdDate", name: "Created Date", sortable: true },
  { key: "price", name: "Price", sortable: true },
  { key: "upnPrice", name: "UPN Price", sortable: true },
  { key: "salePrice", name: "Sale Price", sortable: true },
  { key: "salePriceStart", name: "Sale Price Start", sortable: true },
  { key: "salePriceEnd", name: "Sale Price End", sortable: true },
  { key: "receivablePrice", name: "Receivable Price", sortable: true },
  { key: "receivableUpnPrice", name: "Receivable UPN Price", sortable: true },
  { key: "receivableSalePrice", name: "Receivable Sale Price", sortable: true },
  { key: "status", name: "Status", sortable: true },
  { key: "action", name: "Action" },
];

const initialRows = [
  {
    sno: 1,
    thumbnail: "https",
    productName: "Laptop",
    createdDate: "2024-01-01",
    price: "$1000",
    upnPrice: "$950",
    salePrice: "$900",
    salePriceStart: "2024-01-05",
    salePriceEnd: "2024-01-15",
    receivablePrice: "$850",
    receivableUpnPrice: "$800",
    receivableSalePrice: "$750",
    status: "Active",
  },
  {
    sno: 2,
    thumbnail: "https",
    productName: "Phone",
    createdDate: "2024-02-01",
    price: "$500",
    upnPrice: "$450",
    salePrice: "$400",
    salePriceStart: "2024-02-10",
    salePriceEnd: "2024-02-20",
    receivablePrice: "$350",
    receivableUpnPrice: "$300",
    receivableSalePrice: "$250",
    status: "Inactive",
  },
  {
    sno: 3,
    thumbnail: "https",
    productName: "Lap",
    createdDate: "2024-01-01",
    price: "$1000",
    upnPrice: "$950",
    salePrice: "$900",
    salePriceStart: "2024-01-05",
    salePriceEnd: "2024-01-15",
    receivablePrice: "$850",
    receivableUpnPrice: "$800",
    receivableSalePrice: "$750",
    status: "Active",
  },
  {
    sno: 4,
    thumbnail: "https",
    productName: "one",
    createdDate: "2024-02-01",
    price: "$500",
    upnPrice: "$450",
    salePrice: "$400",
    salePriceStart: "2024-02-10",
    salePriceEnd: "2024-02-20",
    receivablePrice: "$350",
    receivableUpnPrice: "$300",
    receivableSalePrice: "$250",
    status: "Inactive",
  },
  // Add more rows here for pagination to be meaningful
];

const FilterableTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [filters, setFilters] = useState({ sno: "", productName: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter rows based on inputs for S.No and Product Name
  const filteredRows = rows.filter((row) => {
    const snoMatch =
      filters.sno === "" || row.sno.toString().includes(filters.sno);
    const productNameMatch =
      filters.productName === "" ||
      row.productName.toLowerCase().includes(filters.productName.toLowerCase());
    return snoMatch && productNameMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredRows.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Searchable Data Grid</h1>

      {/* Filter Inputs */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <input
    type="text"
    placeholder="Search by S.No"
    className="border bg-gray-100 p-2 rounded w-[160px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => handleFilterChange("sno", e.target.value)}
  />
  <input
    type="text"
    placeholder="Search by Product Name"
    className="border bg-gray-100 p-2 rounded w-[160px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => handleFilterChange("productName", e.target.value)}
  />
</div>


      <div className="overflow-auto">
        <DataGrid
          columns={columns}
          rows={currentItems}
          defaultColumnOptions={{
            sortable: true,
          }}
          className="rdg-light border border-gray-300 rounded-lg"
          headerRowHeight={40}
          rowHeight={60}
          style={{
            "--rdg-header-background-color": "#42f5ec", // Blue background
            "--rdg-header-color": "#FFFFFF", // White text
            "--rdg-row-hover-background-color": "#F3F4F6", // Gray hover effect
            "--rdg-border-color": "#E5E7EB", // Light gray borders
          }}
        />
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredRows.length)} of {filteredRows.length}
        </span>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-l-md"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterableTable;
