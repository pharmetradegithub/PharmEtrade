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
import LayoutRelatedProducts from "./LayoutRelatedProducts";
import { ProductInfoValidation } from "../../../Validations/AddProduct";

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
  const [Submitted , setSubmitted] = useState([]);
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
    mainImageUrl: null,
    price: "",
    amountInStock: "",
    taxable: null,
    productDetails: "",
    aboutProduct: "",
    discount: "",
    form: "",
    Height: "",
    Weight: "",
    Length: "",
    Width: "",
    states: [],
    upnMemberPrice: "",
    salePrice: "",
    salePriceForm: "",
    salePriceTo: "",
    manufacturer: "",
    strength: "",
    lotNumber: "",
    expirationDate: "",
    packQuantity: "",
    packType: "",
    packCondition: {
      tornLabel: null,
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
    videoUrl: null,
  });
  const [productFetched, setproductFetched] = useState();
  const [Heading, setHeading] = useState("ADD PRODUCT");
  const AssignFormData = (product) => {
    setThumnails([
      product.productGallery.thumbnail1,
      product.productGallery.thumbnail2,
      product.productGallery.thumbnail3,
      product.productGallery.thumbnail4,
      product.productGallery.thumbnail5,
      product.productGallery.thumbnail6,
    ]);
    setFormData({
      categorySpecification:
        product.categorySpecification.categorySpecificationId,
      productType: product.productType,
      productCategory: product.productCategoryId,
      Height: product.height,
      Weight: product.weight,
      Length: product.length,
      Width: product.width,
      discount: product.discount,
      productName: product.productName,
      ndcUpc: product.ndCorUPC,
      brandName: product.brandName,
      price: product.unitPrice,
      amountInStock: product.amountInStock,
      taxable: product.taxable,
      productDetails: product.productDescription,
      aboutProduct: product.aboutTheProduct,
      states: product.states.split(",").map((state) => state.trim()),
      size: product.size,
      form: product.form,
      unitOfMeasurement: product.unitOfMeasure,
      upnMemberPrice: product.upnMemberPrice,
      salePrice: product.salePrice,
      salePriceForm: product.salePriceValidFrom,
      salePriceTo: "",
      manufacturer: product.manufacturer,
      strength: product.strength,
      lotNumber: product.lotNumber,
      expirationDate: product.expiryDate,
      packQuantity: "full",
      packType: product.packType,
      packCondition: {
        tornLabel: true,
        otherCondition: "",
      },
      imageUrl: product.productGallery.imageUrl,
      productSizeId: 0,
      thumbnail1: product.productGallery.thumbnail1,
      thumbnail2: product.productGallery.thumbnail2,
      thumbnail3: product.productGallery.thumbnail3,
      thumbnail4: product.productGallery.thumbnail4,
      thumbnail5: product.productGallery.thumbnail5,
      thumbnail6: product.productGallery.thumbnail6,
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
        console.log(response, "APi,response");
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
    setFormData({ ...formData, ["videoUrl"]: files[0] });
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
    setThumnails((prevImages) => prevImages.filter((_, i) => i !== index));
    setFormData({ ...formData, [`thumbnail${index + 1}`]: null });
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
      console.log(acceptedFiles[0], "file");
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
  console.log(thumbnails, "thumnails");
  // const handleSizeChange = (e) => {
  //   const { name, value, type, options, id } = e.target;
  //   setsizeData({
  //     ...sizeData,
  //     [name]: value === "" ? "" : Number(value),
  //   });
  // };
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
    setFormData({ ...formData, ["imageUrl"]: null });
  };

  console.log(user);
  const handleSubmit = async () => {
    // if(ProductInfoValidation(formData)==true)
    // {
    //     return;
    // }
    const productId = localStorage.getItem("productId");

    const searchParams = new URLSearchParams(location.search);
    const queryProductId = searchParams.get("productId");

    const defaultImageUrl =
      "https://pharmaetrade.s3.us-east-1.amazonaws.com/PharmaEtrade/Products/510b1b0a-596d-11ef-8a1f-0affd374995f/30d4c3d5-6f52-11ef-8a1f-0affd374995f/NO_IMG.jpg";

    const mainImageUrl =
      formData.mainImageUrl == null
        ? defaultImageUrl
        : typeof formData.mainImageUrl === "string"
        ? formData.mainImageUrl
        : await uploadImageApi(
            user.customerId,
            productId,
            formData.mainImageUrl
          );

    const imageUrl =
      formData.imageUrl == null
        ? defaultImageUrl
        : typeof formData.imageUrl === "string"
        ? formData.imageUrl
        : await uploadImageApi(user.customerId, productId, formData.imageUrl);

    const thumbnail1 =
      formData.thumbnail1 == null
        ? "null"
        : typeof formData.thumbnail1 === "string"
        ? formData.thumbnail1
        : await uploadImageApi(user.customerId, productId, formData.thumbnail1);

    const thumbnail2 =
      formData.thumbnail2 == null
        ? "null"
        : typeof formData.thumbnail2 === "string"
        ? formData.thumbnail2
        : await uploadImageApi(user.customerId, productId, formData.thumbnail2);

    const thumbnail3 =
      formData.thumbnail3 == null
        ? "null"
        : typeof formData.thumbnail3 === "string"
        ? formData.thumbnail3
        : await uploadImageApi(user.customerId, productId, formData.thumbnail3);

    const thumbnail4 =
      formData.thumbnail4 == null
        ? "null"
        : typeof formData.thumbnail4 === "string"
        ? formData.thumbnail4
        : await uploadImageApi(user.customerId, productId, formData.thumbnail4);

    const thumbnail5 =
      formData.thumbnail5 == null
        ? "null"
        : typeof formData.thumbnail5 === "string"
        ? formData.thumbnail5
        : await uploadImageApi(user.customerId, productId, formData.thumbnail5);

    const thumbnail6 =
      formData.thumbnail6 == null
        ? "null"
        : typeof formData.thumbnail6 === "string"
        ? formData.thumbnail6
        : await uploadImageApi(user.customerId, productId, formData.thumbnail6);

    const videoUrl =
      formData.videoUrl == null
        ? "null"
        : typeof formData.videoUrl === "string"
        ? formData.videoUrl
        : await uploadImageApi(user.customerId, productId, formData.videoUrl);

    const tab1 = {
      productID: queryProductId != null ? queryProductId : "string",
      productCategoryId: formData.productCategory,
      productName: formData.productName,
      ndCorUPC: formData.ndcUpc,
      brandName: formData.brandName,
      size: formData.size,
      form: formData.form,
      height: formData.Height,
      width: formData.Width,
      length: formData.Length,
      weight: formData.Weight,
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
      UnitOfMeasure: formData.unitOfMeasurement,
      mainImageUrl: imageUrl,
    };
    setFormData({ ...formData, ["imageUrl"]: imageUrl });
    const tab2 = {
      productPriceId: "string",
      productId: queryProductId != null ? queryProductId : productId,
      unitPrice: formData.price,
      upnMemberPrice: formData.upnMemberPrice,
      discount: formData.discount,
      salePrice: formData.salePrice,
      salePriceValidFrom: formData.salePriceForm,
      salePriceValidTo: formData.salePriceTo,
      taxable: formData.taxable == 1 ? true : false,
      shippingCostApplicable: true,
      shippingCost: 20,
      amountInStock: formData.amountInStock,
    };
    // const tab4 = {
    //   productGalleryId: "0",
    //   productId: productId,
    //   caption: "Caption",
    //   imageUrl: formData.imageUrl,
    //   thumbnail1: thumbnail1,
    //   thumbnail2: thumbnail2,
    //   thumbnail3: thumbnail3,
    //   thumbnail4: thumbnail4,
    //   thumbnail5: thumbnail5,
    //   thumbnail6: thumbnail6,
    //   videoUrl: videoUrl,
    // };
    const tab4 = {
      productGalleryId: "0",
      productId: queryProductId != null ? queryProductId : productId,
      caption: "Caption",
      imageUrl: imageUrl,
      thumbnail1: thumbnail1,
      thumbnail2: thumbnail2,
      thumbnail3: thumbnail3,
      thumbnail4: thumbnail4,
      thumbnail5: thumbnail5,
      thumbnail6: thumbnail6,
      videoUrl: videoUrl,
    };
    try {
      if (activeTab == 0) {
        if (queryProductId) {
          const response = await EditProductInfoApi(tab1, user.customerId);
          console.log("Product Data", response);
          setSubmitted([...Submitted,0]);
          setNotification({
            show: true,
            message: "Product Info Edited Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } else {
          const response = await AddProductInfoApi(tab1, user.customerId);
          localStorage.setItem("productId", response);
          setSubmitted([...Submitted,0]);

          setNotification({
            show: true,
            message: "Product Info Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        }
      } else if (activeTab == 1) {
        if (queryProductId) {
          const response = await EditProductPriceApi(tab2, user.customerId);
          setSubmitted([...Submitted,1]);

          setNotification({
            show: true,
            message: "Price Details Edited Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } else {
          const response = await AddProductPriceApi(tab2, user.customerId);
          console.log("Product Data", response);
          setSubmitted([...Submitted,1]);

          setNotification({
            show: true,
            message: "Price Details Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        }
      } else if (activeTab == 2) {
        setNotification({
          show: true,
          message: "Related Products Added Successfully!",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      } else if (activeTab == 3) {
        if (queryProductId) {
          console.log(tab4);
          const response = await EditProductGallery(tab4, user.customerId);
          console.log("Product Data", response);
          setSubmitted([...Submitted,3]);

          setNotification({
            show: true,
            message: "Product Edited Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } else {
          console.log(tab4);

          const response = await AddProductGallery(tab4, user.customerId);
          console.log("Product Data", response);
          setSubmitted([]);

          setNotification({
            show: true,
            message: "Product Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
          setFormData({
            categorySpecification: "",
            productType: "",
            productCategory: "",
            productName: "",
            ndcUpc: "",
            brandName: "",
            size: "",
            form: "",
            Weight: "",
            Height: "",
            Weight: "",
            Length: "",
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
            lotNumber: "",
            expirationDate: "",
            packQuantity: "",
            packType: "",
            packCondition: {
              tornLabel: null,
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
          setThumnails([]);
        }
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setAllSelected(checked);
    if (checked) {
      setFormData({ ...formData, states: states.map((state) => state.name) });
    } else {
      setFormData({ ...formData, states: [] });
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
                      <option value="1">Prescription Medications</option>
                      <option value="2">Baby & Child Care Products</option>
                      <option value="4">Health care products</option>
                      <option value="5">Household Suppliers</option>
                      <option value="6">Oral Care Products</option>
                      <option value="7">
                        Stationery & Gift Wrapping Supplies
                      </option>
                      <option value="8">Vision Products</option>
                      <option value="9">Diet & Sports Nutrition</option>
                      <option value="10">
                        Vitamins, Minerals & Supplements
                      </option>
                      <option value="11">Personal Care products</option>

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
                          value={
                            formData.expirationDate
                              ? formData.expirationDate.split("T")[0]
                              : ""
                          }
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
                        checked={
                          formData.packCondition.tornLabel != null
                            ? formData.packCondition.tornLabel
                            : null
                        }
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
                      <label className="text-sm">Height {""}(Inches)</label>
                      <input
                        type="number"
                        name="Height"
                        value={formData.Height}
                        onChange={handleInputChange}
                        className="w-40 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Width {""} (Cm) </label>
                      <input
                        type="number"
                        name="Width"
                        value={formData.Width}
                        onChange={handleInputChange}
                        className="w-40 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Length {""} (Cm) </label>
                      <input
                        type="number"
                        name="Length"
                        value={formData.Length}
                        onChange={handleInputChange}
                        className="w-40 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div className="flex flex-col  ">
                      <label className="text-sm">Weight {""} (Grams)</label>
                      <input
                        type="number"
                        name="Weight"
                        value={formData.Weight}
                        onChange={handleInputChange}
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
                    {formData.imageUrl ? (
                      <div className="relative">
                        <img
                          src={
                            typeof formData.imageUrl === "object"
                              ? URL.createObjectURL(formData.imageUrl)
                              : formData.imageUrl
                          }
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
                        className="flex flex-col justify-center items-center w-full h-32 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                      >
                        <span className="text-gray-500 text-center">
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
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="selectAll"
                          checked={allSelected}
                          onChange={handleSelectAll}
                          className="mr-2"
                        />
                        All Selected
                      </label>{" "}
                      {states.map((state) => (
                        <label className="flex  mt-1" key={state.abbreviation}>
                          <input
                            type="checkbox"
                            name="states"
                            value={state.name}
                            onChange={handleInputChange}
                            checked={formData.states.includes(state.name)}
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
                </div>
                <div className="flex items-center gap-8">
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
                      type="Date"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      onChange={handleInputChange}
                      value={
                        formData.salePriceForm
                          ? formData.salePriceForm.split("T")[0]
                          : ""
                      }
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
                        value={
                          formData.salePriceTo
                            ? formData.salePriceTo.split("T")[0]
                            : ""
                        }
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
                      value={
                        formData.taxable == null
                          ? ""
                          : formData.taxable == true
                          ? 1
                          : 0
                      }
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
          <div>
            <LayoutRelatedProducts
              formData={formData}
              handleInputChange={handleInputChange}
            />{" "}
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
                {selectedImage || formData.imageUrl ? (
                  <div className="relative">
                    <img
                      src={selectedImage || formData.imageUrl}
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
                  {thumbnails?.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={
                          typeof image === "string"
                            ? image
                            : image != null
                            ? URL.createObjectURL(image)
                            : ""
                        } // Check if `image` is a string (URL) or a File object
                        alt={`Preview ${image}`}
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
          disabled={Submitted.includes(activeTab)}
          className={`
            border bg-blue-900 flex justify-center items-center text-white my-4 h-8 w-16 rounded-md font-semibold
            ${Submitted.includes(activeTab) 
              ? 'opacity-50 cursor-not-allowed' 
              : 'flex hover:bg-blue-800 active:bg-blue-700'}
          `}        >
          Save
        </button>
      </div>
    </div>
  );
}

export default LayoutaddProduct;
