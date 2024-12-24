import React, { useState } from "react";
import DataGrid from "react-data-grid";

// Column definition for the table
const columns = [
  { key: "productName", name: "Product Name", sortable: true },
  { key: "price", name: "Price", sortable: true },
  { key: "quantity", name: "Quantity", sortable: true },
];

// Initial row data
const initialRows = [
  { id: 1, productName: "Laptop", price: "$1000", quantity: 5 },
  { id: 2, productName: "Phone", price: "$500", quantity: 10 },
  { id: 3, productName: "Headphones", price: "$150", quantity: 20 },
  { id: 4, productName: "Keyboard", price: "$75", quantity: 15 },
  { id: 5, productName: "Mouse", price: "$50", quantity: 25 },
];

const FilterableSortableTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [filters, setFilters] = useState({});

  // Handle filtering
  const handleFilterChange = (filterKey, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterKey]: value }));
  };

  // Filter rows based on the filter values
  const filteredRows = rows.filter((row) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true; // If no filter, include the row
      return String(row[key]).toLowerCase().includes(value.toLowerCase());
    });
  });

  // Handle sorting
  const handleSort = (columnKey, direction) => {
    const sortedRows = [...filteredRows].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) return direction === "ASC" ? -1 : 1;
      if (a[columnKey] > b[columnKey]) return direction === "ASC" ? 1 : -1;
      return 0;
    });
    setRows(sortedRows);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Filterable & Sortable Table</h1>

      {/* Filter Inputs */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        {columns.map((column) => (
          <input
            key={column.key}
            placeholder={`Filter by ${column.name}`}
            className="border p-2 rounded"
            onChange={(e) =>
              handleFilterChange(column.key, e.target.value)
            }
          />
        ))}
      </div>

      {/* Table Display */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="py-2 px-4 text-left cursor-pointer"
                  onClick={() => handleSort(column.key, "ASC")}
                >
                  {column.name} ▲
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={column.key} className="py-2 px-4 border-b">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterableSortableTable;
