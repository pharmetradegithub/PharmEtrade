import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import ProductFields from "../Components/ProductFields";
import EditFields from "../Components/EditFields";

const AddProducts = () => {
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
      created: "sep 2021",
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
      created: "sep 8 2021",
      visibility: "Catalog",
      websites: "Main Website",
      Action: "Edit",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);


  const handleAddNewProductClick = () => {
    setShowDetailPopup(true);
  };
  const handleEditProduct = () => {
    setShowEditPopup(true);
  };
  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  const handleContinueClick = () => {
    console.log("Category:", category);
    console.log("Product Type:", productType);
    // handleClosePopup();
    setShowDetailPopup(true);
  };

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center items-center ">
      <div className=" w-[95%] h-full mt-4">
        <div className=" flex justify-between">
          <h2 className="text-[22px] text-blue-900 font-medium">
            {" "}
            Marketplace Product List{" "}
          </h2>
          <button className="bg-blue-900 flex items-center text-white p-2 text-[15px] rounded-md" 
          onClick={handleAddNewProductClick}>
            <FaPlus /> Add New Product
          </button>

          {/* <div
            className="flex items-center bg-blue-900 p-2 rounded-lg text-white text-[15px] cursor-pointer"
            onClick={handleAddNewProductClick}>
            <FiPlus />
            <button className="ml-1"> Add New Product</button>
          </div> */}

          {showDetailPopup && (
            <div className="absolute inset-0 flex items-center justify-center overflow-scroll bg-gray-100 ">
              <ProductFields/>
            </div>
          )}
        </div>

        <div className=" flex flex-wrap gap-2 justify-normal items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
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
                    className={`text-sm 
                     ${
                       stat.percentage > 0 ? " bg-green-400" : " bg-red-400"
                     } p-1 rounded-lg`}>
                    ↑ {stat.percentage} %
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end ">
            <button className="bg-green-300 p-1">Filter</button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="overflow-x-scroll text-[15px] w-full mt-4 font-sans">
            <table className=" rounded-lg  bg-white">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border-b-2 py-4 min-w-28 pl-4 text-left">
                    Product ID
                  </th>
                  <th className="border-b-2 min-w-28  text-left">Thumbnail</th>
                  <th className="border-b-2 min-w-28 text-left">Name</th>
                  <th className="border-b-2 min-w-28 text-left">
                    Attribute Set
                  </th>
                  <th className="border-b-2 min-w-28 text-left">
                    Product Status
                  </th>
                  <th className="border-b-2 min-w-28 text-left">Status</th>
                  <th className="border-b-2 min-w-28 text-left">Type</th>
                  <th className="border-b-2 min-w-28 text-left">SKU</th>
                  {/* <th className="border-b-2 min-w-28 text-left">Qty</th>
                  <th className="border-b-2 min-w-28 text-left">Qty Sold</th> */}
                  <th className="border-b-2 min-w-28 text-left cursor-pointer">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border-b border-gray-300 pl-4 py-4">
                      {product.id}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.thumbnail}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.name}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.attributeSet}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.productStatus}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.status}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.type}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.sku}
                    </td>
                    {/* <td className="border-b border-gray-300 py-4">
                      {product.qty}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qtySold}
                    </td>
                     <td className="border-b border-gray-300 py-4">
                      {product.qtyconfirm}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qtyPending}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.price}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.created}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.visibility}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.websites}
                    </td> */}
                    <td className="border-b border-gray-300 py-4" onClick={handleEditProduct} >
                      {product.Action}
                    </td>
                    {showEditPopup && (
            <div className="absolute inset-0 flex items-center justify-center overflow-scroll bg-gray-100 ">
              <EditFields/>
            </div>
          )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
