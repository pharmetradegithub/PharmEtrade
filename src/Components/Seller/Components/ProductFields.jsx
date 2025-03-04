

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import filter from "../../../assets/Icons/filter_icon.png";
import deleteicon from "../../../assets/trash.png";
function ProductFields() {
  const userData = (() => { try { return JSON.parse(localStorage.getItem('login')); } catch { return localStorage.getItem('login'); } })();

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

  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    categorySpecification: "",
    productType: "",
    productCategory: "",
    productName: "",
    ndcUdc: "",
    brandName: "",
    price: 0,
    amountInStock: 0,
    taxable: "",
    productDetails: "",
    aboutProduct: "",
    states: [],
    upnMemberPrice: 0,
    salePrice: 0,
    salePriceForm: "",
    salePriceTo: "",
    manufacturer: "",
    strength: "",
    form: "",
    lotNumber: "",
    expirationDate: "",
    packQuantity: "",
    packType: "",
    packQuantityAmount:"",
    packCondition: {
      tornLabel: false,
      otherCondition: "",
      otherConditionChecked:false,
    },
    imageUrl: ""
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    setIsPopupVisible(true);
  };
  const handleremove = () => {
    setIsPopupVisible(false);
  };

  // Relate filter
  const [isvisible, setIsvisible] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const handleRelateclick = () => {
    setIsvisible(true);
    setButtonClick(true);
  };

  const handleRelateClick = () => {
    setIsvisible(false);
    setButtonClick(false);
  };

  // filter upsell pop ups
  const [isVisible, setIsVisible] = useState(false);
  const [ButtonUpClick, setButtonUpClick] = useState(false);

  const click = () => {
    setIsVisible(true);
    setButtonUpClick(true);
  };

  const Click = () => {
    setIsVisible(false);
    setButtonUpClick(false);
  };
  // crosee sell filter
  const [visible, setVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleCrossClick = () => {
    setVisible(true);
    setButtonClicked(true);
  };
  const handleCrossRemoveClick = () => {
    setVisible(false);
    setButtonClicked(false);
  };

  // video
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);

  const handleVideoSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedVideos(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setVideoPreviews(previews);
  };

  const handleClearSelection = () => {
    setSelectedVideos([]);
    setVideoPreviews([]);
  };

  const tabs = [
    "Product Info",
    "Price Details",
    //  " Key Details",
    "Related Products",
    " Products",
    " Images & Videos",
  ];

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    // Convert the first image file to a binary string
    if (newImages.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          imageUrl: reader.result, // Store the binary string in imageUrl
        }));
      };
      reader.readAsDataURL(newImages[0].file); // Convert file to base64 string
    }

    // Update the images state to display the images
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));

    // If the removed image is the first one, clear the imageUrl in formData
    // if (index === 0 && images.length > 0) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setFormData((prevFormData) => ({
    //       ...prevFormData,
    //       imageUrl: reader.result || "", // Set the next image or clear the field
    //     }));
    //   };
    //   if (images[1]) {
    //     reader.readAsDataURL(images[1].file);
    //   } else {
    //     setFormData((prevFormData) => ({
    //       ...prevFormData,
    //       imageUrl: "",
    //     }));
    //   }
    // }
  };

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   multiple: true,
  // });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: file
      }));
    }
  };
  
  // Assuming getRootProps and getInputProps are defined by react-dropzone or similar
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Set the first accepted file as the imageUrl in formData
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: acceptedFiles[0]
      }));
      // Update images state for previews or other uses
      setImages((prevImages) => [...prevImages, ...acceptedFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }))]);
    },
    accept: 'image/*',
    multiple: false
  });

  const handleEditProduct = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleInputChange = (e) => {
    const { name, value, type, options, id } = e.target;

    if (type === "select-multiple") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else if (type === "select-one") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else if (type === "number") {
      setFormData({
        ...formData,
        [name]: value === "" ? "" : Number(value),
      });
    } else if (type === "radio") {
      // Handle radio buttons for packQuantity and packType
      if (name === "option") {
        setFormData({
          ...formData,
          packQuantity: value,
        });
      } else if (name === "product") {
        setFormData({
          ...formData,
          packType: value,
        });
      }
    } else if (type === "checkbox") {
      // Handle checkboxes for packCondition
      if (id === "tornLabel") {
        setFormData({
          ...formData,
          packCondition: {
            ...formData.packCondition,
            tornLabel: e.target.checked,
          },
        });
      } else if (id === "otherCondition") {
        setFormData({
          ...formData,
          packCondition: {
            ...formData.packCondition,
            otherCondition: value,
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

 
  const handleSubmit = async () => {
    const data = new FormData();
    const expirationDate = "2024-12-31";
    const caption = "Sample product caption";
    const metaKeywords = "sample, product, keywords";
    const metaTitle = "Sample Product Title";
    const metaDescription = "This is a sample description for the product.";
    const saltComposition = "Sample Salt Composition";
    const uriKey = "sample-product-uri";
  
    data.append("AddproductID", 1);
    data.append("Productcategory_id", formData.productCategory);
    data.append("Sizeid", 1);
    data.append("ProductName", formData.productName);
    data.append("NDCorUPC", formData.ndcUdc);
    data.append("BrandName", formData.brandName);
    data.append("PriceName", formData.price);
    data.append("UPNmemberPrice", formData.upnMemberPrice);
    data.append("AmountInStock", formData.amountInStock);
    data.append("Taxable", formData.taxable == 1);
  
    data.append("ExpirationDate", formData.expirationDate);
    data.append("Caption", caption);
    data.append("MetaKeywords", metaKeywords);
    data.append("MetaTitle", metaTitle);
    data.append("MetaDescription", metaDescription);
    data.append("SaltComposition", saltComposition);
    data.append("UriKey", uriKey);
  
    // Append file if it exists
    if (formData.imageUrl) {
      data.append("ImageUrl", formData.imageUrl); // File object
    }
  
    data.append("PackCondition", formData.packCondition.tornLabel===true? "Torn":formData.packCondition.otherConditionChecked==true? formData.packCondition.otherCondition:"Nill");
    data.append("ProductDescription", formData.productDetails);
  
    if (formData.salePrice) data.append("SalePrice", formData.salePrice);
    data.append("SalePriceFrom", formData.salePriceForm);
    data.append("SalePriceTo", formData.salePriceTo);
    if (formData.manufacturer) data.append("Manufacturer", formData.manufacturer);
    if (formData.strength) data.append("Strength", formData.strength);
    data.append("Fromdate", formData.form);
    if (formData.lotNumber) data.append("LotNumber", formData.lotNumber);
    data.append("PackQuantity", formData.packQuantityAmount);
    if (formData.packType) data.append("PackType", formData.packType);
    if (formData.packCondition)
      data.append("PackCondition", formData.packCondition.otherCondition);
    if (formData.productDetails)
      data.append("ProductDescription", formData.productDetails);
    if (formData.aboutProduct)
      data.append("AboutTheProduct", formData.aboutProduct);
    if (formData.categorySpecification)
      data.append("CategorySpecificationId", formData.categorySpecification);
    data.append("ProductTypeId", 1);
    data.append("SellerId", userData.userId);
  
    // Sending data with fetch
    try {
      const response = await fetch(
        "http://ec2-100-29-38-82.compute-1.amazonaws.com/api/Product/InsertProduct",
        {
          method: "POST",
          body: data,
        }
      );
  
      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
            errorDetails
          )}`
        );
      }
  
      const result = await response.json();
   
      return result;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };
  // const handleSubmit = async () => {
  //   const data = new FormData();
  //   const expirationDate = "2024-12-31"; // Static expiration date
  //   const caption = "Sample product caption";
  //   const metaKeywords = "sample, product, keywords";
  //   const metaTitle = "Sample Product Title";
  //   const metaDescription = "This is a sample description for the product.";
  //   const saltComposition = "Sample Salt Composition";
  //   const uriKey = "sample-product-uri";
  //   // const imageUrl ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4J2wAAAABJRU5ErkJggg==";
  //   data.append("AddproductID", 1
  //   data.append("Productcategory_id", formData.productCategory);
  //   data.append("Sizeid", 1);
  //   data.append("ProductName", formData.productName);
  //   data.append("NDCorUPC", formData.ndcUdc);
  //   data.append("BrandName", formData.brandName);
  //   data.append("PriceName", formData.price);
  //   data.append("UPNmemberPrice", formData.upnMemberPrice);
  //   data.append("AmountInStock", formData.amountInStock);
  //   data.append("Taxable", formData.taxable == 1);

  //   data.append("ExpirationDate", expirationDate);
  //   data.append("Caption", caption);
  //   data.append("MetaKeywords", metaKeywords);
  //   data.append("MetaTitle", metaTitle);
  //   data.append("MetaDescription", metaDescription);
  //   data.append("SaltComposition", saltComposition);
  //   data.append("UriKey", uriKey);
  //   // data.append("ImageUrl", formData.imageUrl);
  //   data.append("PackCondition", "Active");
  //   data.append("ProductDescription", "Product Description");

  //   if (formData.salePrice) data.append("SalePrice", formData.salePrice);
  //   data.append("SalePriceFrom", expirationDate);
  //   data.append("SalePriceTo", expirationDate);
  //   if (formData.manufacturer)
  //     data.append("Manufacturer", formData.manufacturer);
  //   if (formData.strength) data.append("Strength", formData.strength);
  //   data.append("Fromdate", expirationDate);
  //   if (formData.lotNumber) data.append("LotNumber", formData.lotNumber);
  //   data.append("PackQuantity", 200);
  //   if (formData.packType) data.append("PackType", formData.packType);
  //   if (formData.packCondition)
  //     data.append("PackCondition", formData.packCondition.otherCondition);
  //   if (formData.productDescription)
  //     data.append("ProductDescription", formData.productDetails);
  //   if (formData.aboutProduct)
  //     data.append("AboutTheProduct", formData.aboutProduct);
  //   if (formData.categorySpecification)
  //     data.append("CategorySpecificationId", formData.categorySpecification);
  //   data.append("ProductTypeId", 1);
  //   data.append("SellerId", 1);
  //   // if (formData.contentType) data.append("ContentType", formData.);
  //   // if (formData.contentDisposition) data.append("ContentDisposition", formData.contentDisposition);
  //   // Adding all formData fields to FormData object
  //   try {
  //     const response = await fetch(
  //       "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/InsertProduct",
  //       {
  //         method: "POST",
  //         body: data,
  //       }
  //     );

  //     // Check if the response is not ok
  //     if (!response.ok) {
  //       // Attempt to parse the error response
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
  //           errorDetails
  //         )}`
  //       );
  //     }

  //     const result = await response.json();
  //     return result; // Return the result for further handling
  //   } catch (error) {
  //     // Log and throw the exact error details
  //     console.error("There was a problem with the fetch operation:", error);
  //     throw error; // Re-throw the error for handling elsewhere if needed
  //   }
  // };
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          // <div className="space-y-4 w-full flex">
          <div className="  h-full flex font-sans font-medium ">
            <div className="flex flex-col w-full Largest:w-[80%]  justify-between text-sm">
              <div className="w-[80%] mx-4">
                <div className="flex gap-4 ">
                  <div>
                    <label className="font-semibold">
                      Category Specification:
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.categorySpecification}
                      name="categorySpecification"
                    >
                      <option value="">Select a category</option>
                      <option value="1">Merchandise</option>
                      <option value="2">OTC Product</option>
                      <option value="3">Rx Product</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold">
                      Product Type:<span className="text-red-600">*</span>
                    </label>
                    <select
                      name="productType"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.productType}
                    >
                      <option value="">Select a product type</option>
                      <option value="1">General</option>
                      <option value="2">Customizable</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold">
                      Product Category:
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="productCategory"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.productCategory}
                    >
                      <option value="">Select a product category</option>
                      <option value="1">Default Category</option>
                      <option value="2">Electronics</option>
                      <option value="3">Apparel</option>
                      <option value="4">Home Goods</option>
                      <option value="5">Health & Beauty</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 my-4">
                  <div className="font-semibold">
                    <label>
                      Product Name:<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="productName"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.productName}
                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      NDC / UDC:<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="ndcUdc"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.ndcUdc}
                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      Brand Name:<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="brandName"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.brandName}
                    />
                  </div>
                </div>
                <div className="flex gap-4 my-4 font-semibold">
                  <div>
                    <label>
                      Price ($):<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="price"
                      type="number"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.price === 0 ? "" : formData.price}
                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      Amount in Stock:<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="amountInStock"
                      type="number"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={
                        formData.amountInStock === 0
                          ? ""
                          : formData.amountInStock
                      }
                    />
                  </div>

                  <div>
                    <label className="font-semibold">
                      Taxable:<span className="text-red-600">*</span>
                    </label>

                    <select
                      name="taxable"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.taxable}
                    >
                      <option value="">Select an option</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                </div>
                <div>
                  {/* <div className="my-2">
                <span className="text-base font-semibold">
                  States (Please select multiple states by clicking on Ctrl Button) :
                </span>
                <div>
                  <select className="w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  >
                    <option>All Selected</option>
                  </select>
                </div>
              </div> */}
                </div>
                <div>
                  <div className="flex flex-col ">
                    <div>
                      <label className="font-semibold">Product Details:</label>
                      <textarea
                        name="productDetails"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.productDetails}
                      />{" "}
                    </div>
                    <div>
                      <label className="font-semibold">
                        About the Product:
                      </label>
                      <textarea
                        name="aboutProduct"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.aboutProduct}
                      />{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-2">
                    <span className="text-base font-semibold">
                      States (Please select multiple states by clicking on Ctrl
                      Button) :
                    </span>
                    <div>
                      <select
                        name="states"
                        multiple
                        className="w-48 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.states}
                      >
                        <option value="all">All Selected</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="NY">New York</option>
                        <option value="FL">Florida</option>
                        <option value="IL">Illinois</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[20%]">
              <div className="my-3 ">
                <p className="text-sm font-semibold">
                  Product Image: ( JPEG, PNG)
                </p>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
                  <div
                    {...getRootProps()}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500 text-center"  type="file" onChange={handleFileChange}
                    >
                      Click here or drag and drop images
                    </p>
                  </div>
                

                   <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {images.map((image, index) => (
                      <div key={index} className="">
                        <img
                          src={image.preview}
                          alt={`Preview ${index}`}
                          className="w-48 h-14 object-cover "
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className=" rounded-full p-1 hover:bg-gray-100 text-red-400"
                        >
                          <img src={deleteicon} className="w-24" />

                           {/* <FaTrash className="w-4" />  */}
                        </button>
                      </div>
                    ))}
                  </div> 
                </div>
              </div>
            </div>
          </div>
          // </div>
        );
      case 1:
        return (
          <div className="flex flex-col w-full   Largest:w-[80%] font-medium font-sans justify-between text-sm">
            <div className="flex ">
              <div className="flex flex-col w-[80%]  ">
                <div className="flex items-center gap-8 ">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      UPN Member Price ($):
                    </label>
                    <input
                      name="upnMemberPrice"
                      type="number"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={
                        formData.upnMemberPrice === ""
                          ? ""
                          : formData.upnMemberPrice
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Sale Price ($):
                    </label>
                    <input
                      name="salePrice"
                      type="number"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={
                        formData.salePrice === "" ? "" : formData.salePrice
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Sale Price Form ($):
                    </label>
                    <input
                      name="salePriceForm"
                      type="date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.salePriceForm}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-8 my-3">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Sale Price To($):
                    </label>
                    <input
                      name="salePriceTo"
                      type="date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.salePriceTo}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Manufacturer:
                    </label>
                    <input
                      name="manufacturer"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.manufacturer}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Strength:</label>
                    <input
                      name="strength"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.strength}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-8 ">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Form:</label>
                    <input
                      name="form"
                      type="date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.form}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Lot Number:</label>
                    <input
                      name="lotNumber"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.lotNumber}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Expiration Date:
                    </label>
                    <input
                      name="expirationDate"
                      type="date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.expirationDate}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div className="">
              <div className=" my-2 flex items-center">
                <span className="text-sm font-semibold">Pack Quantity : </span>

                <div className=" flex items-center">
                  <div className="flex items-center">
                    {" "}
                    <input
                      type="radio"
                      id="full"
                      name="option"
                      value="full"
                      checked={formData.packQuantity === "full"}
                      onChange={handleInputChange}
                      className="mx-1"
                    />{" "}
                    <label
                      htmlFor="full"
                      className="text-sm mx-1 font-semibold"
                    >
                      Full
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="partial"
                      name="option"
                      value="partial"
                      checked={formData.packQuantity === "partial"}
                      onChange={handleInputChange}
                      className="ml-2 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                    />
                    <label
                      htmlFor="partial"
                      className="text-sm mx-1 font-semibold"
                    >
                      Partial
                    </label>
                  </div>
                </div>

                <input
                  type="number"
                  name="packQuantityAmount"
                  value={formData.packQuantityAmount || ""}
                  onChange={handleInputChange}
                  className="w-[30%] Largest:w-[15%] mx-1 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:shadow focus:shadow-blue-400"
                />
                <label className="text-sm mx-1 font-semibold">EA</label>
              </div>
            </div>
            {/* section 2 end */}

            {/* section3 start */}
            <div>
              <div>
                <div className=" my-2 flex items-center">
                  <span className="text-sm font-semibold">Pack Type :</span>

                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="original"
                        name="product"
                        value="original"
                        checked={formData.packType === "original"}
                        onChange={handleInputChange}
                        className="ml-2"
                      />
                      <label
                        htmlFor="original"
                        className="text-sm mx-1 font-semibold"
                      >
                        {" "}
                        ORIGINAL PACKAGE
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="non-original"
                        name="product"
                        value="non-original"
                        checked={formData.packType === "non-original"}
                        onChange={handleInputChange}
                        className="ml-2"
                      />
                      <label
                        htmlFor="non-original"
                        className="text-sm mx-1 font-semibold"
                      >
                        ORIGINAL PACKAGE - NON SEALED
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section 3 end */}

            {/* section4 start */}
            <div>
              <div className=" my-2">
                <div>
                  <span className="text-sm font-semibold">
                    Pack Condition :
                  </span>
                  <input
                    type="checkbox"
                    id="tornLabel"
                    name="tornLabel"
                    checked={formData.packCondition.tornLabel}
                    onChange={handleInputChange}
                    className="ml-[2%]"
                  />{" "}
                  <label className="text-sm ml-1 font-semibold">
                    TORN PACKAGE LABEL
                  </label>
                  <input
                    type="checkbox"
                    id="otherCondition"
                    name="otherCondition"
                    checked={
                      formData.packCondition.otherConditionChecked || false
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        packCondition: {
                          ...formData.packCondition,
                          otherConditionChecked: e.target.checked,
                          otherCondition: e.target.checked
                            ? formData.packCondition.otherCondition
                            : "",
                        },
                      })
                    }
                    className="ml-[2%]"
                  />{" "}
                  <label className="text-sm ml-1 font-semibold">OTHER</label>
                  <input
                    type="text"
                    name="otherConditionText"
                    value={formData.packCondition.otherCondition || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        packCondition: {
                          ...formData.packCondition,
                          otherCondition: e.target.value,
                        },
                      })
                    }
                    disabled={!formData.packCondition.otherConditionChecked}
                    className="mx-1 w-[30%] Largest:w-[15%] h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:shadow focus:shadow-blue-400"
                  />
                </div>
              </div>
            </div>
            {/* section4 end */}

            {/* section5 start */}
            <div className="flex flex-col w-full Largest:w-[80%]  justify-between text-sm ">
              <div className="flex flex-col  ">
                <label className="text-base text-blue2">Tier Price:</label>
                <div className="border rounded-md  bg-white ">
                  <table className="w-full Largest:w-[80%] ">
                    <thead className="p-10">
                      <tr className="text-xl border-b bg-blue text-white">
                        <th className=" font-normal text-center text-base h-10">
                          Websites
                        </th>
                        <th className="  font-normal text-center text-base ">
                          Customer Group
                        </th>
                        <th className="    font-normal text-base  text-center ">
                          Qty
                        </th>
                        <th className="  font-normal  text-base  text-center ">
                          ($) Price
                        </th>
                        <th className="  font-normal  text-base  text-center  ">
                          Action
                        </th>
                        <th className="   font-normal   text-base  text-center  ">
                          <button
                            className="bg-white hover:bg-green2 text-black hover:text-white rounded-md font-semibold w-14"
                            onClick={handleClick}
                          >
                            Add
                          </button>{" "}
                        </th>
                      </tr>
                    </thead>
                    {isPopupVisible && (
                      // <div>
                      <tbody className="w-full Largest:w-[80%]">
                        <tr>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9  w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-2 text-left text-base h-9  ">
                                All Websites
                              </option>
                              <option>Main Website</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9 w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-1 text-left text-base h-9 hover:bg-blue ">
                                All Groups
                              </option>
                              <option>Not Logged In</option>
                              <option>General</option>
                              <option>Prescription seller</option>
                              <option>General Merchandise seller</option>
                              <option>UPN Member</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" py-1  m-2  text-left text-base h-9 w-40  border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" border m-2   py-1 text-left text-base h-9 w-40  border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className=" w-36">
                            <button
                              className="bg-blue2 hover:bg-green2 text-white m-2 w-20 flex p-2 justify-center  rounded-md font-semibold"
                              onClick={handleremove}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
            {/* section5 end */}
          </div>
        );
        // case 2:
        // return (
        // <div className="flex flex-col font-sans w-full Largest:w-[80%] font-medium justify-between text-sm ">
        {
          /* <div className="font-medium "> */
        }
        {
          /* <div className="flex justify-between items-baseline w-full  Largest:w-[80%]  my-6 gap-6"> */
        }
        {
          /* <div className="flex flex-col">
                  <label className="text-sm font-semibold">
                    Uri Key : (Related to google <br />
                    search)
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }
        {
          /* <div className="flex flex-col ml-4">
                  <label className="text-sm font-semibold">
                    Meta Title:(Related to google search)
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }

        {
          /* <div className="flex flex-col mx-4">
                  <label className="text-sm font-semibold">
                    Meta Keywords:(Related to google search)
                  </label>
                  <textarea
                    type=""
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }

        {
          /* <div className="flex flex-col mx-1">
                  <label className="text-sm font-semibold">
                    Meta Description:(Research to google search)
                  </label>
                  <textarea
                    type="area"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }
        {
          /* </div> */
        }
        {
          /* section2 start */
        }
        // <div className="flex justify-between w-full Largest:w-[80%] items-baseline  my-6 gap-6">
        {
          /* <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Salt Composition:</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }
        {
          /* <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Height {""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }

        {
          /* <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Width{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }

        {
          /* <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Length{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div> */
        }

        {
          /* <div className="flex flex-col">
            <label className="text-sm"> Weight{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-blue-900 focus:shadow-sm focus:shadow-blue-400"
            />
          </div> */
        }
        {
          /* </div> */
        }

        {
          /* section2 end */
        }

        {
          /* section 3 start  */
        }
        {
          /* <div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold"> Weight{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>
              </div> */
        }
        {
          /* section3 end */
        }

        {
          /* </div> */
        }
        {
          /* section4 start */
        }
        {
          /* <div className="flex flex-col w-full Largest:w-[80%]  justify-between text-sm my-4">
              <div className="flex flex-col  ">
                <label className="text-base">Tier Price:</label>
                <div className="border rounded-md  bg-white ">
                  <table className="w-full Largest:w-[80%] ">
                    <thead className="p-10">
                      <tr className="text-xl border-b bg-blue text-white">
                        <th className=" font-normal text-center text-base h-10">
                          Websites
                        </th>
                        <th className="  font-normal text-center text-base ">
                          Customer Group
                        </th>
                        <th className="    font-normal text-base  text-center ">
                          Qty
                        </th>
                        <th className="  font-normal  text-base  text-center ">
                          ($) Price
                        </th>
                        <th className="  font-normal  text-base  text-center  ">
                          Action
                        </th>
                        <th className="   font-normal   text-base  text-center  ">
                          <button
                            className="border border-gray-950 -ml-3 bg-white text-black w-14"
                            onClick={handleClick}
                          >
                            Add
                          </button>{" "}
                        </th>
                      </tr>
                    </thead>
                    {isPopupVisible && (
                      // <div>
                      <tbody className="w-full Largest:w-[80%]">
                        <tr>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9  w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-2 text-left text-base h-9  ">
                                All Websites
                              </option>
                              <option>Main Website</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9 w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-1 text-left text-base h-9 hover:bg-blue ">
                                All Groups
                              </option>
                              <option>Not Logged In</option>
                              <option>General</option>
                              <option>Prescription seller</option>
                              <option>General Merchandise seller</option>
                              <option>UPN Member</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" py-1  m-2  text-left text-base h-9 w-40  border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" border m-2   py-1 text-left text-base h-9 w-40  border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className=" w-36">
                            <button
                              className=" m-2 border-slate-700 bg-blue text-white w-20 flex justify-center p-2"
                              onClick={handleremove}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div> */
        }
        {
          /* section4 end */
        }
        {
          /* section 5 start */
        }
        // <div>
        //   <div className="my-6">
        //     <span className="text-base">
        //       States (Please select multiple states by clicking on Ctrl Button) :
        //     </span>
        //     <div>
        //       <select className="w-48 h-8
        //        pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
        //       >
        //         <option>All Selected</option>
        //       </select>
        //     </div>
        //   </div>
        // </div>

        {
          /* section5 end */
        }

        {
          /* section 6 start */
        }
        // <div>
        {
          /* <div className="w-full Largest:w-[80%]">
          <div className="flex justify-between my-6">
            <div className="flex flex-col">
              <p>
                Customizable products allow customers to choose options (Ex:
                shirt color). You need to create a simple product for each
              </p>
              <p>customization (Ex: a product for each color).</p>
            </div>
            <div>
              <button className="border border-gray-600 bg-blue text-white text-base p-2 font-semibold w-60">
                {" "}
                Create Customization
              </button>
            </div>
          </div>
        </div> */
        }
        {
          /* </div> */
        }

        {
          /* section 6 end */
        }
        {
          /* </div> */
        }
        {
          /* // ); */
        }

      case 2:
        return (
          <div className="font-medium font-sans">
            <div className="w-full Largest:w-[80%] ">
              <div className="flex justify-between my-6">
                <div className="flex flex-col">
                  <p>
                    Customizable products allow customers to choose options (Ex:
                    shirt color). You need to create a simple product for each
                  </p>
                  <p>customization (Ex: a product for each color).</p>
                </div>
                <div>
                  <button className="border rounded-md flex items-center justify-center border-gray-600 bg-blue text-white text-base p-2 font-semibold w-44 h-9">
                    {" "}
                    Create Customization
                  </button>
                </div>
              </div>
            </div>
            {/* section start */}
            <div className="my-3 font-semibold">
              <div className="flex flex-row w-[80%] gap-4">
                <div className="flex flex-col">
                  <label className="text-sm">Height {""} in</label>
                  <input
                    type="text"
                    className="w-56 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className="flex flex-col mx-6 ">
                  <label className="text-sm">Width {""} in</label>
                  <input
                    type="text"
                    className="w-56 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label className="text-sm">Length {""} in</label>
                  <input
                    type="text"
                    className="w-56 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className="flex my-5 justify-end mx-7">
                  <button className="border rounded-lg border-gray-400  bg-blue text-white text-base  font-semibold  w-20 h-8  ">
                    SAVE
                  </button>
                </div>
              </div>
            </div>

            {/* section start */}

            <h1 className="text-2xl font-semibold">Related Products </h1>
            <div className="flex  justify-between w-full Largest:w-[80%]">
              <p>
                Related products are shown to customers in addition to the item
                the customer is looking at.{" "}
              </p>
              <button
                className={`  text-base font-medium p-2 rounded-md  h-8 flex items-center  ${
                  buttonClick
                    ? "bg-white text-blue-900"
                    : "bg-blue text-white"
                }`}
                onClick={handleRelateclick}
              >
                <img src={filter} className="w-6 h-3 px-1" />
                Filter
              </button>
            </div>
            {isvisible && (
              <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between  ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
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

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={handleRelateClick}
                    className="bg-blue p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}

            {/* section start */}
            <div>
              <div className="my-6 border w-full Largest:w-[80%] rounded-md bg-white ">
                <table className="w-full">
                  <thead className="bg-blue text-white">
                    <tr className="border-b font-semibold">
                      <th className=" p-4  text-left text-sm  w-32">
                        <select className="text-black">
                          <option>-</option>
                        </select>
                      </th>
                      <th className=" p-2  text-left text-sm w-32">ID</th>
                      <th className=" p-2  text-left text-sm w-40">
                        Thumbnail
                      </th>
                      <th className=" p-2  text-left text-sm  w-80">Name</th>
                      <th className=" p-2  text-left text-sm w-48">
                        Attribute Set
                      </th>
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
            {/* section end */}
          </div>
        );
      case 3:
        return (
          <div className="font-sans font-medium">
            <h1 className="text-2xl font-semibold">Selected For You </h1>
            <div className="flex  justify-between w-full Largest:w-[80%]">
              <p>
                An up-sell item is offered to the customer as a pricier or
                higher-quality alternative to the product the customer is
                looking at.
              </p>
              <button
                className={` text-base font-medium p-2 rounded-md  h-8 flex items-center ${
                  ButtonUpClick
                    ? "bg-white text-blue-900"
                    : "bg-blue text-white"
                }`}
                onClick={click}
              >
                {" "}
                <img src={filter} className="w-6 h-3 px-1" />
                Filter
              </button>
            </div>
            {isVisible && (
              <div className=" bg-white p-2 px-5   w-full Largest:w-[80%]">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
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

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={Click}
                    className="bg-blue p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}
            <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%] ">
              <table className="w-full">
                <thead className="bg-blue text-white  ">
                  <tr className="border-b font-semibold">
                    <th className=" p-4  text-left text-sm  w-32">
                      <select className="text-black">
                        <option>-</option>
                      </select>
                    </th>
                    <th className=" p-2  text-left text-sm w-32">ID</th>
                    <th className=" p-2  text-left text-sm w-40">Thumbnail</th>
                    <th className=" p-2  text-left text-sm  w-80">Name</th>
                    <th className=" p-2  text-left text-sm w-48">
                      Attribute Set
                    </th>
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
            {/* section start */}
            <h1 className="text-2xl font-semibold">Inspired By Your Search History </h1>
            <div className="flex justify-between w-full Largest:w-[80%]">
              <p>
                These "impulse-buy" products appear next to the shopping cart as
                cross-sells to the items already in the shopping cart.
              </p>
              <button
                className={` text-base font-medium  p-2 rounded-md  h-8 flex items-center ${
                  isButtonClicked
                    ? "bg-white text-blue-900"
                    : "bg-blue text-white"
                }`}
                onClick={handleCrossClick}
              >
                <img src={filter} className="w-6 h-3 px-1" />
                Filter
              </button>
            </div>
            {visible && (
              <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
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

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={handleCrossRemoveClick}
                    className="bg-blue p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}
            <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%]">
              <table className="w-full">
                <thead className="bg-blue text-white  ">
                  <tr className="border-b font-semibold">
                    <th className=" p-4  text-left text-sm   w-32">
                      <select className="text-black">
                        <option>-</option>
                      </select>
                    </th>
                    <th className=" p-2  text-left text-sm w-32">ID</th>
                    <th className="p-2  text-left text-sm  w-40">Thumbnail</th>
                    <th className=" p-2  text-left text-sm w-80">Name</th>
                    <th className=" p-2  text-left text-sm w-48 ">
                      Attribute Set
                    </th>
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
      case 4:
        return (
          <div className="space-y-4 font-sans font-medium">
            <p className="font-semibold">
              Product Image: (Accepted Formats: JPEG, PNG)
            </p>
            <div className="flex flex-col  p-4 border rounded-lg shadow-md">
              <h1 className="text-xl font-bold mb-4 text-justify">
                Upload Images
              </h1>

              <div
                {...getRootProps()}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <input {...getInputProps()} />
                <p className="text-gray-500 text-center">
                  Click here or drag and drop images
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview}
                      alt={`Preview ${index}`}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="text-sm absolute top-0 right-0 m-1 text-red-500 bg-white rounded-full p-1 hover:bg-gray-100"
                    >
                      <img src={deleteicon} className="w-4" />
                      {/* <FaTrash /> */}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-semibold">
              Product Video :(Accepted Format :MP4,MPEG){" "}
            </h1>
            <div className="border shadow-md flex w-full rounded-md  mb-4">
              <div className="w-[50%]">
                <div className="p-3">
                  <h1 className="text-xl font-bold mb-4">Upload Videos</h1>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoSelect}
                    className="block mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <div className="flex flex-wrap gap-4 mb-4">
                    {videoPreviews.map((preview, index) => (
                      <div key={index} className="w-1/4">
                        <video
                          src={preview}
                          controls
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                  {selectedVideos.length > 0 && (
                    <button
                      onClick={handleClearSelection}
                      className="bg-red-500 h-7 font-semibold text-white px-4  rounded shadow hover:bg-red-600"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-[50%] p-4 font-semibold">
                <div className="flex flex-col">
                  <span>Url :</span>
                  <input className="w-96 h-8 border  focus:outline-none  rounded-md focus:shadow focus:shadow-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span>Title :</span>
                  <input className="w-96 h-8 border focus:outline-none rounded-md focus:shadow focus:shadow-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span>Description :</span>
                  <textarea className="w-96 h-10 border focus:outline-none rounded-md focus:shadow focus:shadow-blue-400" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex flex-col justify-start ">
        <div className="flex  justify-between ">
          <div>
            <h1 className="text-2xl font-bold text-blue2 -mt-5">
              ADD PRODUCT
            </h1>
            <p className="border-b border-blue2 w-40  "></p>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="border bg-blue text-white -mt-5 h-8 p-2 w-16 rounded-md font-semibold  flex items-center justify-center"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className=" mb-6   ">
        <ul className="flex  border-b border-white  gap-2 w-[69%] opacity-1">
          {tabs.map((tab, index) => (
            <li key={index} className=" mr-2 gap-4 ">
              <button
                className={`w-full  flex justify-center items-center px-2   p-3 py-1 mt-7   shadow-md  ${
                  activeTab === index
                    ? "text-white  bg-blue rounded-t-xl font-semibold "
                    : "text-blue-900  shadow-none rounded-t-xl bg-white "
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
}

export default ProductFields;
