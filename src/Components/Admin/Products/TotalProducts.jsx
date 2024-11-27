import React, { useEffect, useState } from "react";
// import offer from "../../../assets/offers_1.png";
import edit from "../../../assets/Edit.png";
import rxicon from "../../../assets/Icons/rx_12214494.png";
import otc from "../../../assets/Icons/OTC.png";
// import sold from "../../../assets/Icons/sold_6188755.png";
import discount from "../../../assets/Icons/discount.png";
//  "../../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import view from "../../../assets/eye.png";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination";
import search from '../../../assets/search.png'

import wrong from '../../../assets/Icons/wrongred.png'
import {
  Button,
  Dialog,
  Checkbox,
  Typography,
  DialogBody,
  IconButton,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { DeactivateProductAPI, DeleteProductAPI, fetchAllProductsApi, fetchCriteriaProductsApi, productAdminGetAllApi } from "../../../Api/ProductApi";
import Notification from "../../Notification";
import Loading from "../../Loading";
const TotalProducts = () => {
  const products = useSelector((state) => state.product.adminProducts);
  console.log("===>", products)
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  // const [trigger, settrigger] = useState(1);


  const [data, setData] = useState(products)
  useEffect(() => {
    if(products)
      setData(products)
  }, [products])
  const [SearchInput, setSearchInput] = useState({
    productName: null,
  });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setSearchInput({
      ...SearchInput,
      [e.target.name]: e.target.value,
    });

    
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSearchClick(); // Call submit function when Enter is pressed
    }
  };

  const handleSearchClick = async () => {
    console.log("SearchInput:", SearchInput); // Check SearchInput value
    const payload = {
      customerId : "",
      productName: SearchInput.productName,
  }
    try {
      const productsData = await fetchCriteriaProductsApi(payload);
      console.log("API Response:", productsData); // Check API response
      if (productsData) {
        setData(productsData); // Only set if valid
      } else {
        console.log("No data returned from API.");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  
  // useEffect(() => {
  //   if (data) {
  //     console.log("Updated data:", data); // Log the updated data
  //   }
  // }, [data]);
  
  console.log("Data:", data);
  
  
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'ascending'; // Reset to ascending after descending
    }
    setSortConfig({ key, direction });
  };
  
  
  // const sortedItems = React.useMemo(() => {
  //   if (sortConfig.key) {
  //     return [...data].sort((a, b) => {
  //       if (sortConfig.direction === "ascending") {
  //         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
  //       }
  //       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  //     });
  //   }
  //   return data;
  // }, [data, sortConfig]);


  const sortedItems = React.useMemo(() => {
    if (sortConfig.key) {
      return [...data].sort((a, b) => {
        if (sortConfig.key === "createdDate") {
          // Sort by createdDate in descending order
          return new Date(b.createdDate) - new Date(a.createdDate);
        } else if (sortConfig.direction === "ascending") {
          return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        }
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      });
    }
    // Default sorting by createdDate in descending order
    return [...data].sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
  }, [data, sortConfig]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
    // alert("clicked successfully");
  };

  const handleEditProduct = (detail) => {
    navigate(`/pharmEtradeadmin/EditProductAdmin?productId=${detail.productID}`);
  };

  const [openPop, setOpenPop] = useState(false);
  const [deactive, setDeactive] = useState(null);
  const [deactivatedProducts, setDeactivatedProducts] = useState([]);
  const dispatch = useDispatch()

  // Trigger the deactivation popup
  const deactivatePopUp = (productID) => {
    setOpenPop(true);
    setDeactive(productID); // Store the productID to be deactivated
  };

  // Close the popup without action
  const cancelButton = () => {
    setOpenPop(false);
  };

  // Confirm deactivation and update the state
  const successButton = () => {
    try {
      // Assuming DeactivateProductAPI is asynchronous
      dispatch(DeactivateProductAPI(deactive)).then(() => {
        setDeactivatedProducts((prev) => [...prev, deactive]); // Add the deactivated product ID
        setOpenPop(false); // Close the popup
        setNotification({
          show: true,
          message: "Product Deactivated Successfully!",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      });
    } catch (error) {
      console.log(error);
      setOpenPop(false);
    }
  };

  // Close the popup
  const closeButton = () => {
    setOpenPop(false);
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletePop, setDeletePop] = useState(false);
  const [trigger, settrigger] = useState(1);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const DeleteProduct = (productID) => {
    setDeletePop(true);
    setDeleteProduct(productID);
  };
  const cancelDeleteButton = () => {
    setDeletePop(false);
  };
  const successDeleteButton = async () => {
    try {
      await DeleteProductAPI(deleteProduct);
      settrigger((prev) => prev + 1);
      setDeletePop(false);
      setNotification({ show: true, message: "Product Delete Successfully!" });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const closeDeleteButton = () => {
    setDeletePop(false);
  };

  useEffect(() => {
    if (!SearchInput.productName) {
      // If search input is empty, fetch all products
      const fetchAllProducts = async () => {
        setLoading(true);
        try {
          console.log("sosso")
          dispatch(productAdminGetAllApi());
          // setData(response); // Set to all products
        } catch (error) {
          console.error("Error fetching products:", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchAllProducts();
    }
  }, [SearchInput.productName, trigger]);
  // useEffect(() => {
  //   // Fetch product data from the server when 'trigger' updates
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchAllProductsApi(); // Replace with your actual fetch function
  //       // setProductList(response.data); // Update the product list
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchData();
  // }, [trigger]); // This useEffect will run whenever 'trigger' changes

  // useEffect(() => {
  //   // Fetch product data from the server when 'trigger' updates
  //   const fetchData = async () => {
  //     setLoading(true); // Set loading state before the request
  
  //     try {
  //       const response = await fetchAllProductsApi(); // Replace with your actual fetch function
  //       // setProductList(response.data); // Update the product list
  //     } catch (error) {
  //       setError(error); // Handle and store error
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false); // Ensure loading is stopped
  //     }
  //   };
  
  //   fetchData();
  // }, [trigger]);

  const clearSearch = ()=>{
    setSearchInput ({ productName:""})
  }
  
  return (
    <>
      <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
        {notification.show && (
          <Notification show={notification.show} message={notification.message} />
        )}
      {openPop && (
          <div
            className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
              <div className="flex justify-end  ">
                <button className="w-5 p-1 -mt-8 mx-2" onClick={closeButton}>
                  <img src={wrong} className="w-6 h-4" />
                </button>
              </div>
              <h1 className="text-black text-center mt-2">
                Are you sure you want to deactivate this product ?
              </h1>
              <div className="flex justify-around mt-6">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={cancelButton}
                >
                  No
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={successButton}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
        {deletePop && (
          <div
            className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
              <div className="flex justify-end  ">
                <button
                  className="w-5 p-1 -mt-8 mx-2"
                  onClick={closeDeleteButton}
                >
                  <img src={wrong} className="w-6 h-4" />
                </button>
              </div>
              <h1 className="text-black text-center mt-2">
                Are you sure you want to delete this product ?
              </h1>
              <div className="flex justify-around mt-6">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={cancelDeleteButton}
                >
                  No
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={successDeleteButton}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-[95%] h-full mt-8">
          <div className="flex justify-between">
            <h1 className="text-blue-900 text-xl font-semibold my-3">
              Products List
            </h1>
            <div className="flex relative mb-4">
            <button className="absolute left-2  top-1/2 transform -translate-y-1/2">
                  <img src={search} className="w-4 h-4"/>
                </button>
              <input
                className=" pl-7 rounded-lg p-1"
                placeholder="Search Product..."
                name="productName"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleKeyDown}
                value={SearchInput.productName}
              />

{SearchInput.productName &&(
  <button
  onClick={clearSearch}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
>
  <img src={wrong} className="w-2 h-2" /> {/* This is the wrong (X) symbol */}
</button>
)}
              {/* <button onClick={() => handleSearchClick()}>Search</button> */}
            </div>
          </div>

          
          <div className="overflow-y-auto h-full clearfix">
          {loading && (
              <div>
                <Loading />
              </div>
            )}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && (

          <table className="w-full text-sm">
            <thead className="bg-blue-900 text-white  ">
            <tr className="border-b-2 text-left ">
                <th className="py-2 px-5">S.NO</th>
                <th className="py-2 px-5" onClick={() => handleSort('')}>Thumbnail</th>
                
                <th className="py-2" onClick={() => handleSort('productName')}>Product Name
                {sortConfig.key === 'productName' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'}
                </th>
                <th className="py-2 px-5"  onClick={() => handleSort('createdDate')}>Created Date
                {sortConfig.key === 'createdDate' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'}                </th>
                <th className="py-2 px-2"  onClick={() => handleSort('sellerFirstName')}>Seller Name
                {sortConfig.key === 'sellerFirstName' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'}                 </th>
                {/* <th className="py-2">Category Specification</th> */}
                <th className="py-2 px-2 text-center"  onClick={() => handleSort('unitPrice')}>Unit Price
                {sortConfig.key === 'unitPrice' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'}                 </th>
                <th className="py-2 px-4"  onClick={() => handleSort('salePriceValidFrom')}>Saleprice Start
                {sortConfig.key === 'salePriceValidFrom' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'} 
                </th>
                <th className="py-2 px-4"  onClick={() => handleSort('salePriceValidTo')}>Saleprice End
                {sortConfig.key === 'salePriceValidTo' ? (
                      sortConfig.direction === 'ascending' ? '▲' : '▼'
                    ) : '▲'} 
                </th>
                <th className="py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {currentItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No Products available
                      </td>
                    </tr>
                  ) : (currentItems.map((detail, index) => (
                <tr className="border-b" key={detail.id}>
                  <td className='px-4 py-2"'>{indexOfFirstItem+index + 1}</td>
                  <td className='px-4 py-2"'>
                    <img
                      src={detail?.productGallery?.imageUrl}
                      className="w-16 h-12"
                    />
                  </td>
                  <Tooltip title={detail.productName} placement="right">
                    <span className="truncate block w-24 cursor-pointer"> {/* Truncate and make clickable */}
                      {detail.productName}
                    </span>
                  </Tooltip>
                  <td className="px-4 py-2 text-center">{new Date(detail.createdDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                    .replace(/\//g, "-")}</td>
                  <td className="text-center">{detail.sellerFirstName}</td>
                  {/* <td>{detail.categorySpecification.specificationName}</td> */}
                  <td className="text-right">${detail.unitPrice?.toFixed(2)}</td>
                  <td className="px-4 py-2 text-center">{new Date(detail.salePriceValidFrom).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                          .replace(/\//g, "-")}</td>
                        <td className="px-4 py-2 text-center">{new Date(detail.salePriceValidTo).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                          .replace(/\//g, "-")}</td>
                  <td className="px-4  justify-center py-2 cursor-pointer flex items-center space-x-2 bg-transparent">
                    <Tooltip title="Edit" placement="top">
                      <img
                        src={edit}
                        alt="Edit"
                        className="cursor-pointer w-7 h-7 "
                        onClick={() => handleEditProduct(detail)}
                      />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete">
                      <img
                        src={Bin}
                        alt="Delete"
                        className="cursor-pointer w-4 h-4"
                        onClick={() => DeleteProduct(detail.productID)}
                      />
                    </Tooltip>
                    <Tooltip title="Deactivate" placement="top">
                      <img
                        src={Deactivate}
                        alt="Deactivate"
                        className="cursor-pointer w-4 h-4"
                        onClick={() => deactivatePopUp(detail.productID)}
                      />
                    </Tooltip>
                    <Tooltip title="View" placement="top">
                      <img
                        src={view}
                        alt="View"
                        style={{ width: "20px", height: "20px" }}
                        className="cursor-pointer w-4 h-4"
                        onClick={handleOpen}
                      //   onClick={() => deactivatePopUp(product.productID)}
                      />
                    </Tooltip>
                    {/* Popup */}
                    <div
                      className="flex justify-center"
                      style={{ opacity: "0" }}
                    >
                      <Dialog
                        style={{
                          width: "auto",
                          height: "auto",
                          opacity: 0,
                          // position: "80px",
                          position: "absolute",
                          left: "500px",
                          top: "180px",
                          boxShadow: "none",
                        }}
                        // backdrop={false}
                        size="s"
                        open={open}
                        // handler={handleOpen}
                        className="p-4  "
                      >
                        <DialogHeader className="relative m-0 block">
                          <Typography variant="h4" color="blue-gray">
                            Select Categories
                          </Typography>
                          {/* <Typography className="mt-1 font-normal text-gray-600">
                            Categories help you organize your contacts based on
                            their interests and interactions.
                          </Typography> */}
                          <IconButton
                            size="sm"
                            variant="text"
                            className="!absolute right-3.5 top-3.5"
                            onClick={handleOpen}
                          >
                            <XMarkIcon className="h-4 w-4 stroke-2" />
                          </IconButton>
                        </DialogHeader>

                        <DialogBody className=" px-2 flex gap-1 ">
                          <img
                            src={otc}
                            alt="otc"
                            style={{ width: "48px", height: "48px" }}
                            className="cursor-pointer w-4 h-4"
                          //   onClick={() => deactivatePopUp(product.productID)}
                          />
                          <Checkbox
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Move to OTC
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                ></Typography>
                              </div>
                            }
                            containerProps={{
                              className: "-mt-5",
                            }}
                          />

                          {/* <img
                            src={sold}
                            alt="sold"
                            style={{ width: "48px", height: "48px" }}
                            className="cursor-pointer w-4 h-4"
                            //   onClick={() => deactivatePopUp(product.productID)}
                          /> */}

                          {/* <Checkbox
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Move to Sold Produ
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                ></Typography>
                              </div>
                            }
                            containerProps={{
                              className: "-mt-5",
                            }}
                          /> */}
                          <img
                            src={rxicon}
                            alt="rxicon"
                            style={{ width: "48px", height: "48px" }}
                            className="cursor-pointer w-4 h-4"
                          //   onClick={() => deactivatePopUp(product.productID)}
                          />
                          <Checkbox
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="text-base font-medium"
                                >
                                  Move to RX
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                ></Typography>
                              </div>
                            }
                            containerProps={{
                              className: "-mt-5",
                            }}
                          />
                          <img
                            src={discount}
                            alt="discount"
                            style={{ width: "48px", height: "48px" }}
                            className="cursor-pointer w-4 h-4"
                          //   onClick={() => deactivatePopUp(product.productID)}
                          />
                          <Checkbox
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="text-base font-medium"
                                >
                                  Move to Offers
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                ></Typography>
                              </div>
                            }
                            containerProps={{
                              className: "-mt-5",
                            }}
                          />
                        </DialogBody>

                        <DialogFooter>
                          <Button className="ml-auto" onClick={handleOpen}>
                            Apply
                          </Button>
                        </DialogFooter>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                ))
              ) }
            </tbody>
          </table>
                  )}
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-100 flex items-center justify-center"> */}
        {" "}
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          // productList={products}
          productList={data}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      {/* </div> */}
    </>
  );
};

export default TotalProducts;