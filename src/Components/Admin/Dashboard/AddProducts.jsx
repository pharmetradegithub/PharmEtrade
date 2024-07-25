import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import { FaPlus } from "react-icons/fa6";
// import ProductFields from "../Components/ProductFields";
import EditFields from "../Components/EditFields";
import filter from "../../../assets/Filter_icon.png";

const AddProducts = () => {
  const navigate = useNavigate();
  const stats = [
    { label: "Total Product", value: 150, percentage: 75 },
    { label: "Total Approved Product", value: 120, percentage: 60 },
    { label: "Total Enabled Product", value: 90, percentage: -11 },
    { label: "Price", value: "$2000", percentage: 50 },
  ];

  const products = [
    // Sample data
    {
      id: 1,
      thumbnail: "DO62D23",
      name: "Product 1",
      attributeSet: "Set 1",
      productStatus: "Available",
      status: "Active",
      type: "Type A",
      sku: "54447743",
      qty: "1",
      qtySold: "0",
      qtyconfirm: "0",
      qtyPending: "0",
      price: "$76.2",
      created: "Sep 2021",
      visibility: "Catalog",
      websites: "Main Website",
      Action: "Edit",
    },
    {
      id: 2,
      thumbnail: "DO62D23",
      name: "Product 2",
      attributeSet: "Set 2",
      productStatus: "Out of Stock",
      status: "Inactive",
      type: "Type B",
      sku: "54447743",
      qty: "2",
      qtySold: "1",
      qtyconfirm: "0",
      qtyPending: "1",
      price: "$62.99",
      created: "Sep 8 2021",
      visibility: "Catalog",
      websites: "Main Website",
      Action: "Edit",
    },
  ];

  const [showPopup, setShowPopup] = useState({
    editProduct: false,
  });

  const handleAddNewProductClick = () => {
    navigate("Create");
  };

  const handleEditProduct = () => {
    setShowPopup({ ...showPopup, editProduct: true });
  };

  const handleClosePopup = () => {
    setShowPopup({ addProduct: false, editProduct: false });
  };

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center items-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between">
          <h2 className="text-[22px] text-blue-900 font-medium">
            Marketplace Product List
          </h2>
          <button
            className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md"
            onClick={handleAddNewProductClick}
          >
            <FaPlus /> Add New Product
          </button>

          {/* {showPopup.addProduct && (
            <div className="absolute bg-black inset-0 flex items-center justify-center overflow-scroll bg-gray-">
              <ProductFields />
              <button onClick={handleClosePopup}>Close</button>
            </div>
          )} */}
        </div>

        <div className="flex flex-wrap gap-2 w-full justify-normal items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56 border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[15px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div
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
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <button className="bg-green-300 p-1 flex items-center">
              <img src={filter} className="w-8 h-8" />
              Filter
            </button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="border rounded-md bg-white text-[15px]  mt-4">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr className="border-b-2">
                  <th className=" px-4 py-2 text-left">Product ID</th>
                  <th className="px-4 py-2 text-left">Thumbnail</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Attribute Set</th>
                  <th className="px-4 py-2 text-left">Product Status</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">SKU</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.thumbnail}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.attributeSet}</td>
                    <td className="px-4 py-2">{product.productStatus}</td>
                    <td className="px-4 py-2">{product.status}</td>
                    <td className="px-4 py-2">{product.type}</td>
                    <td className="px-4 py-2">{product.sku}</td>
                    <td
                      className="px-4 py-2 cursor-pointer"
                      onClick={handleEditProduct}
                    >
                      {product.Action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showPopup.editProduct && (
        <div className="absolute inset-0 flex  flex-col bg-gray-100">
          <button onClick={handleClosePopup} className=" flex justify-end mr-4">
            Close
          </button>

          <EditFields />
        </div>
      )}
    </div>
  );
};

export default AddProducts;
