import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import filter from "../../../assets/Icons/filter_icon.png";
import deleteicon from "../../../assets/trash.png";
import { useStates } from "react-us-states";
import { Box, Radio, Tooltip } from "@mui/material";
import { fetchNdcUpcListApi } from "../../../Api/MasterDataApi";
import Notification from "../../../Components/Notification";
import related from "../../../assets/Related.png";
import upSell from "../../../assets/upSell.png";
import crossSell from "../../../assets/crossSell.png";
import {
  AddProductApi,
  AddProductGallery,
  AddProductInfoApi,
  AddProductPriceApi,
  AddProductSizeApi,
  EditProductGallery,
  EditProductInfoApi,
  EditProductPriceApi,
  fetchProductByIdApi,
  uploadImageApi,
} from "../../../Api/ProductApi";
import { useSelector } from "react-redux";

function LayoutaddProduct() {
  const user = useSelector((state) => state.user.user);

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

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [sizeData, setsizeData] = useState({
    Height: "",
    Weight: "",
    Length: "",
    Width: "",
  });
  const [formData, setFormData] = useState({
    categorySpecification: "",
    productType: "",
    productCategory: "",
    productName: "",
    ndcUpc: "",
    brandName: "",
    size: "",
    unitOfMeasurement: "",
    price: "",
    amountInStock: "",
    taxable: "",
    productDetails: "",
    aboutProduct: "",
    states: [],
    upnMemberPrice: "",
    salePrice: "",
    salePriceForm: "",
    salePriceTo: "",
    manufacturer: "",
    strength: "",
    form: "",
    lotNumber: "",
    expirationDate: "",
    packQuantity: "",
    packType: "",
    packCondition: {
      tornLabel: false,
      otherCondition: "",
    },
    imageUrl: null,
    productSizeId: 0,
    thumbnail1: null,
    thumbnail2: null,
    thumbnail3: null,
    thumbnail4: null,
    thumbnail5: null,
    thumbnail6: null,
  });
  const [productFetched, setproductFetched] = useState();
  const [Heading, setHeading] = useState("ADD PRODUCT");
  const AssignFormData = (product) => {
    setFormData({
      categorySpecification:
        product.categorySpecification.categorySpecificationId,
      productType: product.productType,
      productCategory: product.productCategoryId,
      productName: product.productName,
      ndcUpc: product.ndCorUPC,
      brandName: product.brandName,
      price: product.unitPrice,
      amountInStock: product.amountInStock,
      taxable: product.taxable,
      productDetails: product.productDescription,
      aboutProduct: product.aboutTheProduct,
      states: [],
      size: product.size,
      form: product.form,
      unitOfMeasure: product.unitOfMeasure,
      upnMemberPrice: product.upnMemberPrice,
      salePrice: product.salePrice,
      salePriceForm: product.salePriceValidFrom,
      salePriceTo: "",
      manufacturer: product.manufacturer,
      strength: product.strength,
      form: product.form,
      lotNumber: product.lotNumber,
      expirationDate: product.expiryDate,
      packQuantity: product.packQuantity,
      packType: product.packType,
      packCondition: {
        tornLabel: false,
        otherCondition: "",
      },
      imageUrl: product.imageUrl,
      productSizeId: 0,
      thumbnail1: null,
      thumbnail2: null,
      thumbnail3: null,
      thumbnail4: null,
      thumbnail5: null,
      thumbnail6: null,
    });
  };
  useEffect(() => {
    const productId = localStorage.getItem("productId");
    const searchParams = new URLSearchParams(location.search);
    const queryProductId = searchParams.get("productId");

    const fetchProduct = async () => {
      if (queryProductId) {
        const response = await fetchProductByIdApi(queryProductId);
        localStorage.removeItem("productId");
        setHeading("EDIT PRODUCT");
        AssignFormData(response);
        setproductFetched(response);
      } else {
        const response = await fetchProductByIdApi(productId);
        setHeading("ADD PRODUCT");
        setproductFetched(response);
      }
    };
    fetchProduct();
  }, []);
  console.log(productFetched, "hey");
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
    // "Related Products",
    " Related Products",
    " Additional Images & Videos",
  ];

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFormData({
        ...formData,
        imageUrl: file,
      });
    }
  };

  const [thumbnails, setThumnails] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const isDuplicate = thumbnails.some(
        (file) =>
          file.name === acceptedFiles[0].name &&
          file.size === thumbnails[0].size &&
          file.lastModified === thumbnails[0].lastModified
      );

      if (isDuplicate) {
        console.log("This file has already been uploaded.");
        return;
      }
      setThumnails([...thumbnails, acceptedFiles[0]]);
      if (formData.thumbnail1 == null) {
        setFormData({ ...formData, thumbnail1: acceptedFiles[0] });
      } else if (formData.thumbnail2 == null) {
        setFormData({ ...formData, thumbnail2: acceptedFiles[0] });
      } else if (formData.thumbnail3 == null) {
        setFormData({ ...formData, thumbnail3: acceptedFiles[0] });
      } else if (formData.thumbnail4 == null) {
        setFormData({ ...formData, thumbnail4: acceptedFiles[0] });
      } else if (formData.thumbnail5 == null) {
        setFormData({ ...formData, thumbnail5: acceptedFiles[0] });
      } else if (formData.thumbnail6 == null) {
        setFormData({ ...formData, thumbnail6: acceptedFiles[0] });
      } else {
        console.log("cannot upload more than 6 thumnails");
      }
    },
    accept: "image/*",
    multiple: false,
  });

  const handleSizeChange = (e) => {
    const { name, value, type, options, id } = e.target;
    setsizeData({
      ...sizeData,
      [name]: value === "" ? "" : Number(value),
    });
  };
  console.log(sizeData);
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
      if (name === "states") {
        // Handle "All Selected" checkbox separately
        if (value === "all") {
          const isAllSelected = formData.states.includes("all");
          setFormData({
            ...formData,
            states: isAllSelected ? [] : ["all", "CA", "TX", "NY", "FL", "IL"],
          });
        } else {
          const isSelected = formData.states.includes(value);
          const updatedStates = isSelected
            ? formData.states.filter(
                (state) => state !== value && state !== "all"
              )
            : [...formData.states, value];

          setFormData({
            ...formData,
            states: updatedStates,
          });
        }
      }
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

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleSizeSubmit = async () => {
    if (formData.productSizeId != 0) {
      setFormData({ ...formData, ["productSizeId"]: 0 });
      setsizeData({
        Height: "",
        Weight: "",
        Length: "",
        Width: "",
      });
      return;
    }
    try {
      const response = await AddProductSizeApi(sizeData);
      setFormData({
        ...formData,
        ["productSizeId"]: response,
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };
  console.log(user);
  const handleSubmit = async () => {
    const productId = localStorage.getItem("productId");

    const searchParams = new URLSearchParams(location.search);
    const queryProductId = searchParams.get("productId");

    const defaultImageUrl = "https://pharmaetrade.s3.us-east-1.amazonaws.com/PharmaEtrade/Products/510b1b0a-596d-11ef-8a1f-0affd374995f/30d4c3d5-6f52-11ef-8a1f-0affd374995f/NO_IMG.jpg";

    const imageUrl =
      formData.imageUrl == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.imageUrl);

    const thumbnail1 =
      formData.thumbnail1 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail1);

    const thumbnail2 =
      formData.thumbnail2 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail2);

    const thumbnail3 =
      formData.thumbnail3 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail3);

    const thumbnail4 =
      formData.thumbnail4 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail4);

    const thumbnail5 =
      formData.thumbnail5 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail5);

    const thumbnail6 =
      formData.thumbnail6 == null
        ? defaultImageUrl
        : await uploadImageApi(user.customerId, productId, formData.thumbnail6);

    // const imageUrl =
    //   formData.imageUrl == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.imageUrl);
    // const thumbnail1 =
    //   formData.thumbnail1 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail1);
    // const thumbnail2 =
    //   formData.thumbnail2 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail2);
    // const thumbnail3 =
    //   formData.thumbnail3 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail3);
    // const thumbnail4 =
    //   formData.thumbnail4 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail4);
    // const thumbnail5 =
    //   formData.thumbnail5 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail5);
    // const thumbnail6 =
    //   formData.thumbnail6 == null
    //     ? "null"
    //     : await uploadImageApi(user.customerId, productId, formData.thumbnail6);

    const data = {
      productID: "0",
      productCategoryId: formData.productCategory, // Correct field name
      productGalleryId: 0, // Adding missing field
      productSizeId: formData.productSizeId, // Correct field name
      productName: formData.productName, // Correct field name
      ndCorUPC: formData.ndcUpc, // Correct field name
      brandName: formData.brandName, // Correct field name
      priceName: formData.price, // Ensure this field is a string
      upnMemberPrice: formData.upnMemberPrice,
      amountInStock: formData.amountInStock,
      taxable: formData.taxable == 1,
      salePrice: formData.salePrice,
      salePriceValidFrom: formData.salePriceForm, // Placeholder date, adjust if needed
      salePriceValidTo: formData.salePriceTo, // Placeholder date, adjust if needed
      manufacturer: formData.manufacturer,
      strength: formData.strength,
      availableFromDate: "2024-09-01", // Placeholder date, adjust if needed
      lotNumber: formData.lotNumber,
      expiryDate: formData.expirationDate, // Placeholder date, adjust if needed
      packQuantity: 200,
      packType: formData.packType,
      packCondition: formData.packCondition.tornLabel
        ? "torn"
        : formData.packCondition.otherCondition, // Added fallback for missing value
      states: formData.states.join(","),
      videoUrl: "random",
      thumbnail1: thumbnail1,
      thumbnail2: thumbnail2,
      thumbnail3: thumbnail3,
      thumbnail4: thumbnail4,
      thumbnail5: thumbnail5,
      thumbnail6: thumbnail6,

      productDescription: formData.productDetails, // Correct field name
      metaKeywords: "sample, product, keywords", // Static value
      metaTitle: "Sample Product Title", // Static value
      metaDescription: "This is a sample description for the product.", // Static value
      saltComposition: "Sample Salt Composition", // Static value
      uriKey: "sample-product-uri", // Static value
      aboutTheProduct: formData.aboutProduct, // Correct field name
      categorySpecificationId: formData.categorySpecification, // Correct field name
      productTypeId: 1, // Static value
      sellerId: user.customerId, // Static value
      imageUrl: imageUrl, // Added missing field, placeholder value
      caption: "Sample product caption", // Added missing field, placeholder value
    };
    const tab1 = {
      productID: "0",
      productCategoryId: formData.productCategory,
      productName: formData.productName,
      ndCorUPC: formData.ndcUpc,
      brandName: formData.brandName,
      size: "Size",
      manufacturer: formData.manufacturer,
      strength: formData.strength,
      lotNumber: formData.lotNumber,
      availableFromDate: "2024-09-01",
      expiryDate: formData.expirationDate,
      formattedAvailableFromDate: "2024-09-01",
      formattedExpiryDate: formData.expirationDate,
      packQuantity: 200,
      packType: formData.packType,
      packCondition: formData.packCondition.tornLabel
        ? "torn"
        : formData.packCondition.otherCondition,
      productDescription: formData.productDetails,
      aboutTheProduct: formData.aboutProduct, // Correct field name
      categorySpecificationId: formData.categorySpecification, // Correct field name
      productTypeId: 1, // Static value
      sellerId: user.customerId, // Static value
      states: formData.states.join(","),
      unitOfMeasure: "nill",
    };
    const tab2 = {
      productPriceId: "string",
      productId: productId,
      unitPrice: formData.price,
      upnMemberPrice: formData.upnMemberPrice,
      discount: formData.discount,
      salePrice: formData.salePrice,
      salePriceValidFrom: formData.salePriceForm,
      salePriceValidTo: formData.salePriceTo,
      taxable: formData.taxable == 1 ? true : false,
      shippingCostApplicable: true,
      shippingCost: 20,
      amountInStock: 200,
    };
    const tab4 = {
      productGalleryId: "0",
      productId: productId,
      caption: "Caption",
      imageUrl: imageUrl,
      thumbnail1: thumbnail1,
      thumbnail2: thumbnail2,
      thumbnail3: thumbnail3,
      thumbnail4: thumbnail4,
      thumbnail5: thumbnail5,
      thumbnail6: thumbnail6,
      videoUrl: "VideoUrl",
    };
    try {
      if (activeTab == 0) {
        if (queryProductId) {
          const response = await EditProductInfoApi(tab1, user.customerId);
          console.log("Product Data", response);
          setNotification({
            show: true,
            message: "Product Info Edited Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } else {
          const response = await AddProductInfoApi(tab1, user.customerId);
          localStorage.setItem("productId", response);
          setNotification({
            show: true,
            message: "Product Info Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        }
      } else if (activeTab == 1) {
        if (queryProductId) {
          const response = await EditProductPriceApi(tab2, user.customerId);
          console.log("Product Data", response);
        } else {
          const response = await AddProductPriceApi(tab2, user.customerId);
          console.log("Product Data", response);
          setNotification({
            show: true,
            message: "Price Details Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        }
      } else if (activeTab == 3) {
        if (queryProductId) {
          console.log(tab4);
          const response = await EditProductGallery(tab4, user.customerId);
          console.log("Product Data", response);
        } else {
          console.log(tab4);

          const response = await AddProductGallery(tab4, user.customerId);
          console.log("Product Data", response);
          setNotification({
            show: true,
            message: "Product Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        }
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };
  const handleNdcUpc = async (value) => {
    try {
      // 67777014630
      const response = await fetchNdcUpcListApi(value);
      if (response)
        setFormData({
          ...formData,
          ["productName"]: response.productName,
          ["manufacturer"]: response.manufacturerName,
          ["form"]: response.form,
          ["size"]: response.size,
          ["unitOfMeasurement"]: response.unitOfMeasurement,
        });
      else return;
      // console.log(manufacturerName,"response");
    } catch (error) {
      console.log(response);
    }
  };
  console.log(formData, "formdata");
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          // <div className="space-y-4 w-full flex">
          <div className="w-[100%] h-full flex font-sans font-medium overflow-hidden ">
            <div className="flex   w-full Largest:w-[100%] text-sm">
              <div className=" ">
                <div className="font-semibold flex flex-col mb-4">
                  <label>
                    NDC / UPC:<span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-3">
                    <input
                      name="ndcUpc"
                      type="text"
                      className="w-80 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      onBlur={() => handleNdcUpc(formData.ndcUpc)}
                      value={formData.ndcUpc}
                    />
                    {/* <button
                      onClick={() => handleNdcUpc(formData.ndcUpc)}
                      className="bg-blue-900 text-white px-2 rounded-sm"
                    >
                      Apply
                    </button> */}
                  </div>
                </div>
                <div className="flex   ">
                  <div className="flex flex-col mr-5">
                    <label className="font-semibold">
                      Category Specification:
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="w-56 h-8  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
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
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.productCategory}
                    >
                      <option value="">Select a product category</option>
                      <option value="1">Default Category</option>
                      <option value="2">Electronics</option>
                      {/* <option value="3">Apparel</option>
                      <option value="4">Home Goods</option>
                      <option value="5">Health & Beauty</option> */}
                    </select>
                  </div>
                  <div className="font-semibold flex flex-col mr-6">
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
                </div>

                <div className="flex  my-4 gap-4">
                  <div className="flex flex-col ">
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
                    <label className="text-sm font-semibold">Size:</label>
                    <input
                      name="size"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.size}
                    />
                  </div>
                  <div className="flex flex-col mx-2">
                    <label className="text-sm font-semibold">Form:</label>
                    <input
                      name="form"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.form}
                    />
                  </div>
                </div>

                <div className="flex  my-4 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Unit Of Measurement:
                    </label>
                    <input
                      name="unitOfMeasurement"
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.unitOfMeasurement}
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
                  <div className="font-semibold  ml-0 flex flex-col">
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

                <div className="flex ">
                  <div className="flex flex-col">
                    <div className="flex gap-4 ">
                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">
                          Lot Number:
                        </label>
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
                          type="Date"
                          className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                          onChange={handleInputChange}
                          value={formData.expirationDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex w-full mt-3">
                    <div className="mr-4 flex flex-col w-[47%] ">
                      <label className="font-semibold">Product Details:</label>
                      <textarea
                        name="productDetails"
                        className="w-full min-h-12  border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.productDetails}
                      />{" "}
                    </div>
                    <div className="flex flex-col w-[47%]">
                      <label className="font-semibold">
                        About the Product:
                      </label>
                      <textarea
                        name="aboutProduct"
                        className="w-full min-h-12 border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.aboutProduct}
                      />{" "}
                    </div>
                  </div>
                </div>

                {/* section 2 */}
                <div className="">
                  <div className=" my-4 flex items-center">
                    <span className="text-sm font-semibold">
                      Pack Quantity :{" "}
                    </span>

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
                      type="text"
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
                    <div className=" my-4 flex items-center">
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
                  <div className=" my-4">
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
                      <label className="text-sm ml-1 font-semibold">
                        OTHER
                      </label>
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

                <div className="my-3 font-semibold">
                  <div className="flex flex-row w-[90%] gap-2 ">
                    <div className="flex flex-col">
                      <label className="text-sm">Height {""} in</label>
                      <input
                        type="text"
                        name="Height"
                        value={sizeData.Height}
                        onChange={handleSizeChange}
                        className="w-40 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Width {""} in</label>
                      <input
                        type="text"
                        name="Width"
                        value={sizeData.Width}
                        onChange={handleSizeChange}
                        className="w-40 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Length {""} in</label>
                      <input
                        type="text"
                        name="Length"
                        value={sizeData.Length}
                        onChange={handleSizeChange}
                        className="w-40 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Weight {""} in</label>
                      <input
                        type="text"
                        name="Weight"
                        value={sizeData.Weight}
                        onChange={handleSizeChange}
                        
                        className="w-40 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    {/* {formData.productSizeId != 0 ? (
                      <button
                        onClick={() => handleSizeSubmit()}
                        className="flex text-white justify-center items-center mt-3 bg-red-900 px-3"
                      >
                        Clear
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSizeSubmit()}
                        className="flex text-white justify-center items-center mt-3 bg-blue-900 px-3"
                      >
                        Apply
                      </button>
                    )} */}
                  </div>
                </div>
              </div>

              {/* section start */}

              <div className="w-[19%] flex flex-col ">
                <div className=" ">
                  <p className="text-sm mt-1 font-semibold">
                    Main Product Image:
                  </p>
                  <p className="text-sm font-semibold"> ( JPEG, PNG)</p>
                  <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg">
                    {selectedImage ? (
                      <div className="relative">
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="w-64 h-64 object-cover rounded-md"
                        />
                        <button
                          onClick={handleRemoveImage}
                          className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full focus:outline-none"
                        >
                          &times;
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="imageUpload"
                        className="flex flex-col justify-center  items-center w-full h-32 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                      >
                        <span className="text-gray-500   text-center">
                          {" "}
                          Click here or drag and drop image
                        </span>
                        <input
                          type="file"
                          id="imageUpload"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <span className="text-base font-semibold">States :</span>
                    <div className="w-56 h-44 pl-2   py-1 border border-slate-300 rounded-md overflow-y-scroll">
                      <label className="flex items-center">All Selected</label>
                      {states.map((state) => (
                        <label className="flex  mt-1" key={state.abbreviation}>
                          <input
                            type="checkbox"
                            name="states"
                            value={state.abbreviation}
                            onChange={handleInputChange}
                            checked={formData.states.includes(
                              state.abbreviation
                            )}
                            className="mr-2 overflow-y-scroll"
                          />
                          {state.name}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col w-full   font-medium font-sans justify-between text-sm">
            <div className="flex ">
              <div className="flex flex-col   ">
                <div className="flex gap-8 my-2 items-center font-semibold">
                  <div className="flex flex-col">
                    <label>
                      Price ($):<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="price"
                      type="number"
                      className="w-56 h-8 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.price === 0 ? "" : formData.price}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Discount:</label>
                    <input
                      name="discount"
                      type="number"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.discount === "" ? "" : formData.discount}
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
                </div>
                <div className="flex items-center gap-8">
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
                      Sale Price Form ($):
                    </label>
                    <input
                      name="salePriceForm"
                      type="Date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={formData.salePriceForm}
                    />
                  </div>

                  <div className="flex items-center gap-8 my-2">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold">
                        Sale Price To($):
                      </label>
                      <input
                        name="salePriceTo"
                        type="Date"
                        className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                        onChange={handleInputChange}
                        value={formData.salePriceTo}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 ">
                  <div className="font-semibold flex flex-col">
                    <label>
                      Amount in Stock:<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="amountInStock"
                      type="number"
                      className="w-56 h-8  border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={
                        formData.amountInStock === 0
                          ? ""
                          : formData.amountInStock
                      }
                    />
                  </div>
                  <div className="flex flex-col">
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
              </div>
            </div>
            <div className="my-4">
              <div className="flex gap-2 items-center">
                <label className="font-semibold">
                  Price includes the shipping cost
                </label>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <div>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "A" } }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 14, // adjust the size of the icon
                        },
                      }}
                    />
                    <span>Yes</span>
                  </div>
                  <div>
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "B" } }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 14, // adjust the size of the icon
                        },
                      }}
                    />
                    <span>No</span>
                  </div>
                </Box>
              </div>
            </div>

            {/* section5 start */}
            <div className="flex flex-col w-full Largest:w-[60%]  justify-between text-sm ">
              <div className="flex flex-col  ">
                <label className="text-base font-semibold">Tier Price:</label>
                <div className="border rounded-md  ">
                  <table className="w-full Largest:w-[60%] ">
                    <thead className="p-10">
                      <tr className="text-xl border-b bg-blue-900 text-white">
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
                      <tbody className="w-full Largest:w-[60%]">
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
                              <option className=" py-1 text-left text-base h-9 hover:bg-blue-900 ">
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
                              className=" m-2 border-slate-700 bg-blue-900 text-white w-20 flex justify-center p-2"
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
              <button className="border border-gray-600 bg-blue-900 text-white text-base p-2 font-semibold w-60">
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
                    <label className="text-sm font-semibold">
                      Manufacturer:
                    </label>
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
                    <label className="text-sm font-semibold">
                      Expiration Date:
                    </label>
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
                    <label className="text-sm font-semibold">
                      Sale Price To($):
                    </label>
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
                <div className="my-4 flex">
                  <button className="bg-blue-900 text-white p-2 mx-2 border rounded-md">
                    APPLY FILTER
                  </button>
                  <button
                    onClick={handleRelateClick}
                    className="bg-blue-900 p-2 mx-1 text-white border rounded-md"
                  >
                    {" "}
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
                      <th className=" p-2  text-left text-sm w-40">
                        Thumbnail
                      </th>
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
                        <Tooltip title = "Related Products" placement="top">
                        <img
                          src={related}
                          alt="related"
                          className="cursor-pointer w-6 h-6"
                          onClick={() => handlerelatedProduct(product)}
                        />
                        </Tooltip>
                        <Tooltip title = "Up-Sell Products" placement="top">
                        <img
                          src={upSell}
                          alt="upSell"
                          className="cursor-pointer w-6 h-5"
                        />
                        </Tooltip>
                        <Tooltip title = "Cross-Sell Products" placement="top">
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
                Related products are shown to customers in addition to the item
                the customer is looking at.{" "}
              </p>
              <button
                className={`  text-base font-medium p-2 rounded-md  h-8 flex items-center  ${
                  buttonClick
                    ? "bg-white text-blue-900"
                    : "bg-blue-900 text-white"
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
            <div className="font-sans font-medium">
              <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
              <div className="flex  justify-between w-full Largest:w-[60%]">
                <p>
                  An up-sell item is offered to the customer as a pricier or
                  higher-quality alternative to the product the customer is
                  looking at.
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
                      <th className=" p-2  text-left text-sm w-40">
                        Thumbnail
                      </th>
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
      case 3:
        return (
          <div className="space-y-4 Largest:w-[60%] font-sans font-medium ">
            <p className="font-semibold">
              Main Product Image: (Accepted Formats: JPEG, PNG)
            </p>

            <div className="flex w-full gap-4 justify-between">
              <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg">
                {selectedImage ? (
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-64 h-64 object-cover rounded-md"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full focus:outline-none"
                    >
                      &times;
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="imageUpload"
                    className="flex flex-col justify-center  items-center w-full  h-32 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                  >
                    <span className="text-gray-500   text-center">
                      {" "}
                      Click here or drag and drop image
                    </span>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="flex flex-col w-full p-4 border rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4 text-justify">
                  Upload Thumbnails
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
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    {error}
                  </p>
                )}
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {thumbnails.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        className="w-full h-40 object-cover"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="text-sm absolute top-0 right-0 m-1 text-red-500 bg-white rounded-full p-1 hover:bg-gray-100"
                      >
                        <img
                          src={deleteicon}
                          className="w-4"
                          alt="delete icon"
                        />
                      </button>
                    </div>
                  ))}
                </div>
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
    <div className="w-[95%]  h-full mx-auto pt-8 ml-10 overflow-scroll">
      <Notification show={notification.show} message={notification.message} />
      <div className="flex flex-col  justify-center ">
        <div className="flex  justify-between ">
          <div>
            <h1 className="text-2xl font-bold text-blue-900 -mt-5">
              {Heading}
            </h1>
            <p className="border-b border-blue-900 w-40  "></p>
          </div>
        </div>
      </div>
      <div className=" mb-6    ">
        <ul className="flex  border-b border-white  gap-2 w-[69%] opacity-1">
          {tabs.map((tab, index) => (
            <li key={index} className=" mr-2 gap-4 ">
              <button
                className={`w-full  flex justify-center items-center px-2   p-3 py-1 mt-7   shadow-md  ${
                  activeTab === index
                    ? "text-white  bg-blue-900 rounded-t-xl font-semibold "
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
      {/* <div className="">{renderTabContent()}
      
      </div>
      <div className="flex 2xl:w-[60%] xl:w-full justify-end">
        <button
          onClick={handleSubmit}
          className="border bg-blue-900 text-white my-4  h-8 w-16 rounded-md font-semibold  "
        >
          Save
        </button>
      </div> */}

      <div className="">{renderTabContent()}</div>
      <div className="flex 2xl:w-[60%] xl:w-full justify-end">
        <button
          onClick={handleSubmit}
          className={`border bg-blue-900 text-white my-4 h-8 w-16 rounded-md font-semibold `}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default LayoutaddProduct;
