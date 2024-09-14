import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import related from "../../../assets/Related.png";
import upSell from "../../../assets/upSell.png";
import crossSell from "../../../assets/crossSell.png";
import filter from "../../../assets/Icons/filter_icon.png";
import { fetchCriteriaProductsApi } from "../../../Api/ProductApi";



const LayoutRelatedProducts = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isvisible, setIsvisible] = useState(false);
  const [ButtonUpClick, setButtonUpClick] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [visible, setVisible] = useState(false);




  const handleRelateclick = () => {
    setIsvisible(true);
    setButtonClick(true);
  };
  const click = () => {
    setIsVisible(true);
    setButtonUpClick(true);
  };
  const Click = () => {
    setIsVisible(false);
    setButtonUpClick(false);
  };
  const handleCrossClick = () => {
    setVisible(true);
    setButtonClicked(true);
  };

  const handleCriteria =async () => {
    let Criteria = {
    //   deals: null,
    //   brands: null,
    //   generics: null,
    //   discount: 0,
    //   expiring: 0,
    //   wholeSeller: null,
    //   pharmacyItems: null,
    //   prescriptionDrugs: null,
    //   otcProducts: null,
    //   vawdSeller: null,
    //   topSellingProducts: null,
    //   buyAgain: null,
    deals: "string",
    brands: "string",
    generics: "string",
    discount: 0,
    expiring: 0,
    wholeSeller: "string",
    pharmacyItems: true,
    prescriptionDrugs: true,
    otcProducts: true,
    vawdSeller: "string",
    topSellingProducts: true,
    buyAgain: true,
    productCategoryId: 0,
    categorySpecificationId: 0,
    expiryDate: "2024-09-14T11:09:45.838Z",
    ndcupc: "string",
    salePriceValidFrom: "2024-09-14T11:09:45.838Z",
    salePriceValidTo: "2024-09-14T11:09:45.838Z",
    productName: "string"
    };
   
    await fetchCriteriaProductsApi(Criteria, "Apply Filter");

  };




// const handleCriteria = async () => {
//     let Criteria = {
//       deals: null,
//       brands: formData.brandName || null,
//       generics: null,
//       discount: 0,
//       expiring: 0,
//       wholeSeller: null,
//       pharmacyItems: true,
//       prescriptionDrugs: true,
//       otcProducts: true,
//       vawdSeller: null,
//       topSellingProducts: true,
//       buyAgain: true,
//       productCategoryId: formData.productCategory || 0,
//       categorySpecificationId: formData.categorySpecification || 0,
//       expiryDate: formData.expirationDate || new Date().toISOString(),
//       ndcupc: formData.ndcUpc || '',
//       salePriceValidFrom: formData.salePriceForm || new Date().toISOString(),
//       salePriceValidTo: formData.salePriceTo || new Date().toISOString(),
//       productName: formData.productName || ''
//     };
  
//     try {
//       // Fetch data from the API
//       const response = await fetchCriteriaProductsApi(Criteria);
      
//       // Log the full response for debugging purposes
//       console.log("API response:", response);
  
//       // Check if response is valid and has a statusCode
//       if (response && response.statusCode === 200) {
//         console.log("Successfully Fetched Data:", response.result);
//         // Set the data in state if needed
//         setFetchedData(response.result);
//       } else {
//         // Handle case where the response is not as expected
//         console.error("Unexpected API response:", response?.message || "No message available");
//       }
//     } catch (error) {
//       // Catch any errors that occur during the API call
//       console.error("API call failed:", error);
//     }
  
//   };

  const [formData, setFormData] = useState({
    categorySpecification: "",
    productCategory: "",
    manufacturer: "",
    brandName: "",
    expirationDate: "",
    ndcUpc: "",
    salePriceForm: "",
    salePriceTo: "",
    productName: "",
  });

  // Handle input change for all form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Placeholder for reset functionality
  const handleRelateClick = () => {
    setFormData({
      categorySpecification: "",
      productCategory: "",
      manufacturer: "",
      brandName: "",
      expirationDate: "",
      ndcUpc: "",
      salePriceForm: "",
      salePriceTo: "",
      productName: "",
    });
  };

  const products = [
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
  ];

  return (
    <div className="font-sans font-medium">
      <div className=" bg-white p-2 px-4   w-full Largest:w-[60%] ">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            {/* <div className="flex flex-col w-36">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div> */}
            <div className="flex flex-col mr-5">
              <label className="font-semibold">
                Category Specification:
                <span className="text-red-600">*</span>
              </label>
              <select
                className="w-52 h-8  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.categorySpecification}
                name="categorySpecification"
              >
                <option value="">Select a category</option>
                <option value="1"> Prescription Drug</option>
                <option value="2">OTC Product</option>
                <option value="3">General Merchandise</option>
              </select>
            </div>
            <div className="flex flex-col mr-7">
              <label className="font-semibold">
                Product Category:
                <span className="text-red-600">*</span>
              </label>
              <select
                name="productCategory"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.productCategory}
              >
                <option value="">Select a product category</option>
                <option value="1">Default Category</option>
                <option value="2">Electronics</option>
              </select>
            </div>
            <div className="flex flex-col mr-6 ">
              <label className="text-sm font-semibold">Manufacturer:</label>
              <input
                name="manufacturer"
                type="text"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.manufacturer}
              />
            </div>
            <div className="font-semibold  ml-0 flex flex-col">
              <label>
                Brand Name:<span className="text-red-600">*</span>
              </label>
              <input
                name="brandName"
                type="text"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.brandName}
              />
            </div>
          </div>

          <div className="flex justify-between items-center my-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Expiration Date:</label>
              <input
                name="expirationDate"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.expirationDate}
              />
            </div>
            <div className="font-semibold flex flex-col ">
              <label>
                NDC / UPC:<span className="text-red-600">*</span>
              </label>
              <input
                name="ndcUpc"
                type="text"
                className="w-56 h-8 pl-1 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.ndcUpc}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-sm font-semibold">
                Sale Price Form ($):
              </label>
              <input
                name="salePriceForm"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceForm}
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-sm font-semibold">Sale Price To($):</label>
              <input
                name="salePriceTo"
                type="Date"
                className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                onChange={handleInputChange}
                value={formData.salePriceTo}
              />
            </div>
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="font-semibold flex flex-col mr-6">
            <label>
              Product Name:<span className="text-red-600">*</span>
            </label>
            <input
              name="productName"
              type="text"
              className="w-52 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
              onChange={handleInputChange}
              value={formData.productName}
            />
          </div>
          {/* <div className="my-4 flex">
            <button className="bg-blue-900 text-white p-2 mx-2 border rounded-md">
              APPLY FILTER
            </button>
            <button
              onClick={handleCriteria}
              className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
            >
              {" "}
              RESET
            </button>
          </div> */}
          <div className="my-4 flex">
  <button
    onClick={handleCriteria}
    className="bg-blue-900 text-white p-2 mx-2 border rounded-md"
  >
    APPLY FILTER
  </button>
  <button
    // onClick={() => setFormData(initialFormState)} 
    className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
  >
    RESET
  </button>
</div>
        </div>
      </div>

      <div>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                {/* <th className=" p-4  text-left text-sm  w-32">
                        <select className="text-black">
                          <option>-</option>
                        </select>
                      </th> */}
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-32">Category</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2  text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
                <th className=" p-2   text-sm w-48">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  {/* <td className=" p-2">
                          <input className=" h-6 w-4" type="checkbox" />
                        </td> */}
                  <td className="text-sm p-2"> {product.id}</td>
                  <td className="text-sm p-2">{product.thumbnail}</td>
                  <td className="text-sm p-2">{product.name}</td>
                  <td className="text-sm p-2">{product.attribute}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.type}</td>
                  <td className="text-sm p-2">{product.price}</td>
                  <td className="px-4 py-2 cursor-pointer flex items-center space-x-2">
                    <Tooltip title="Related Products" placement="top">
                      <img
                        src={related}
                        alt="related"
                        className="cursor-pointer w-6 h-6"
                        onClick={() => handlerelatedProduct(product)}
                      />
                    </Tooltip>
                    <Tooltip title="Up-Sell Products" placement="top">
                      <img
                        src={upSell}
                        alt="upSell"
                        className="cursor-pointer w-6 h-5"
                      />
                    </Tooltip>
                    <Tooltip title="Cross-Sell Products" placement="top">
                      <img
                        src={crossSell}
                        alt="crossSell"
                        className="cursor-pointer w-7 h-7"
                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Related Products </h1>
      <div className="flex  justify-between w-full Largest:w-[60%]">
        <p>
          Related products are shown to customers in addition to the item the
          customer is looking at.{" "}
        </p>
        <button
          className={`  text-base font-medium p-2 rounded-md  h-8 flex items-center  ${
            buttonClick ? "bg-white text-blue-900" : "bg-blue-900 text-white"
          }`}
          onClick={handleRelateclick}
        >
          <img src={filter} className="w-6 h-3 px-1" />
          Filter
        </button>
      </div>
      {isvisible && (
        <div className=" bg-white p-2 px-4   w-full Largest:w-[60%] ">
          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Id From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>Price From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>

            <div className="flex flex-col w-36">
              <label>Name</label>
              <input className="border rounded-sm" />
            </div>
          </div>

          <div className="flex justify-between my-2">
            <div className="flex flex-col w-36">
              <label>Status</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label> Attribute Set</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Merchandise</option>
                <option>OTC Product</option>
                <option>Rx Product</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>Type</label>
              <select className="border rounded-sm w-">
                <option></option>
                <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>SKU</label>
              <input className="border rounded-sm" />
            </div>

            <div className="my-4 flex">
              <button
                onClick={handleRelateClick}
                className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
              >
                {" "}
                Cancel
              </button>
              <button className="bg-blue-900 text-white p-2 mx-2 border rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* section start */}
      <div>
        <div className="my-6 border w-full Largest:w-[60%] rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-32">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Attribute Set</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2  text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">SKU</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {product.id}</td>
                  <td className="text-sm p-2">{product.thumbnail}</td>
                  <td className="text-sm p-2">{product.name}</td>
                  <td className="text-sm p-2">{product.attribute}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.type}</td>
                  <td className="text-sm p-2">{product.sku}</td>
                  <td className="text-sm p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-sans font-medium">
        <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
        <div className="flex  justify-between w-full Largest:w-[60%]">
          <p>
            An up-sell item is offered to the customer as a pricier or
            higher-quality alternative to the product the customer is looking
            at.
          </p>
          <button
            className={`  text-base font-medium p-2 rounded-md  h-8 flex  items-center justify-end ${
              ButtonUpClick
                ? "bg-white text-blue-900"
                : "bg-blue-900 text-white"
            }`}
            onClick={click}
          >
            {" "}
            <img src={filter} className="w-6 h-3 px-1" />
            Filter
          </button>
        </div>
        {isVisible && (
          <div className=" bg-white p-2 px-5   w-full Largest:w-[60%]">
            <div className="flex justify-between">
              <div className="flex flex-col w-36">
                <label>Id From</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>to</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>Price From</label>
                <input className="border rounded-sm" />
              </div>
              <div className="flex flex-col w-36">
                <label>to</label>
                <input className="border rounded-sm" />
              </div>

              <div className="flex flex-col w-36">
                <label>Name</label>
                <input className="border rounded-sm" />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col w-36">
                <label>Status</label>
                <select className="border rounded-sm">
                  <option></option>
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label> Attribute Set</label>
                <select className="border rounded-sm">
                  <option></option>
                  <option>Merchandise</option>
                  <option>OTC Product</option>
                  <option>Rx Product</option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label>Type</label>
                <select className="border rounded-sm w-">
                  <option></option>
                  <option>Simple Product</option>
                  <option>Virtual Product</option>
                  <option>Configurable Product</option>
                  <option>Downloadable Product</option>
                  <option>Grouped Product</option>
                  <option>Bundle Product</option>
                  <option>Quote </option>
                </select>
              </div>

              <div className="flex flex-col w-36">
                <label>SKU</label>
                <input className="border rounded-sm" />
              </div>

              <div className="my-4 flex justify-end">
                <button
                  onClick={Click}
                  className="bg-blue-900 p-2 mx-2 text-white border rounded-md"
                >
                  {" "}
                  Cancel
                </button>
                <button className="bg-blue-900 text-white p-2 mx-1 border rounded-md">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%] ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white  ">
              <tr className="border-b font-semibold">
                <th className=" p-4  text-left text-sm  w-32">
                  <select className="text-black">
                    <option>-</option>
                  </select>
                </th>
                <th className=" p-2  text-left text-sm w-32">ID</th>
                <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                <th className=" p-2  text-left text-sm  w-80">Name</th>
                <th className=" p-2  text-left text-sm w-48">Attribute Set</th>
                <th className=" p-2  text-left text-sm w-32">Status</th>
                <th className=" p-2 text-left text-sm bw-44">Type</th>
                <th className=" p-2  text-left text-sm  w-44">SKU</th>
                <th className=" p-2  text-left text-sm  w-44">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2">
                    <input className=" h-6 w-4" type="checkbox" />
                  </td>
                  <td className="text-sm p-2"> {product.id}</td>
                  <td className="text-sm p-2">{product.thumbnail}</td>
                  <td className="text-sm p-2">{product.name}</td>
                  <td className="text-sm p-2">{product.attribute}</td>
                  <td className="text-sm p-2">{product.status}</td>
                  <td className="text-sm p-2">{product.type}</td>
                  <td className="text-sm p-2">{product.sku}</td>
                  <td className="text-sm p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* section start */}
      <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
      <div className="flex justify-between w-full Largest:w-[60%]">
        <p>
          These "impulse-buy" products appear next to the shopping cart as
          cross-sells to the items already in the shopping cart.
        </p>
        <button
          className={` text-base font-medium  p-2 rounded-md  h-8 flex items-center ${
            isButtonClicked
              ? "bg-white text-blue-900"
              : "bg-blue-900 text-white"
          }`}
          onClick={handleCrossClick}
        >
          <img src={filter} className="w-6 h-3 px-1" />
          Filter
        </button>
      </div>
      {visible && (
        <div className=" bg-white p-2 px-5  w-full Largest:w-[60%] ">
          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Id From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>Price From</label>
              <input className="border rounded-sm" />
            </div>
            <div className="flex flex-col w-36">
              <label>to</label>
              <input className="border rounded-sm" />
            </div>

            <div className="flex flex-col w-36">
              <label>Name</label>
              <input className="border rounded-sm" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-36">
              <label>Status</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label> Attribute Set</label>
              <select className="border rounded-sm">
                <option></option>
                <option>Merchandise</option>
                <option>OTC Product</option>
                <option>Rx Product</option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>Type</label>
              <select className="border rounded-sm w-">
                <option></option>
                <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
              </select>
            </div>

            <div className="flex flex-col w-36">
              <label>SKU</label>
              <input className="border rounded-sm" />
            </div>
            <div className="my-4 flex justify-end">
              <button
                onClick={handleCrossRemoveClick}
                className="bg-blue-900 p-2 mx-2 text-white border rounded-md"
              >
                {" "}
                Cancel
              </button>
              <button className="bg-blue-900 text-white p-2 mx-1 border rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="my-6 border rounded-md bg-white w-full Largest:w-[60%]">
        <table className="w-full">
          <thead className="bg-blue-900 text-white  ">
            <tr className="border-b font-semibold">
              <th className=" p-4  text-left text-sm   w-32">
                <select className="text-black">
                  <option>-</option>
                </select>
              </th>
              <th className=" p-2  text-left text-sm w-32">ID</th>
              <th className="p-2  text-left text-sm  w-40">Thumbnail</th>
              <th className=" p-2  text-left text-sm w-80">Name</th>
              <th className=" p-2  text-left text-sm w-48 ">Attribute Set</th>
              <th className=" p-2  text-left text-sm w-32">Status</th>
              <th className=" p-2 text-left text-sm w-44">Type</th>
              <th className=" p-2  text-left text-sm w-44">SKU</th>
              <th className=" p-2 text-left text-sm w-32">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className=" p-2">
                  <input className=" h-6 w-4" type="checkbox" />
                </td>
                <td className="text-sm p-2"> {product.id}</td>
                <td className="text-sm p-2">{product.thumbnail}</td>
                <td className="text-sm p-2">{product.name}</td>
                <td className="text-sm p-2">{product.attribute}</td>
                <td className="text-sm p-2">{product.status}</td>
                <td className="text-sm p-2">{product.type}</td>
                <td className="text-sm p-2">{product.sku}</td>
                <td className="text-sm p-2">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* section end */}
    </div>
  );
};

export default LayoutRelatedProducts;
