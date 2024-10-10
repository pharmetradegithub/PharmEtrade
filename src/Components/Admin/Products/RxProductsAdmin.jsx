// import React from 'react'

// const RxProductsAdmin = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default RxProductsAdmin



import React, { useState } from "react";
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
import { DeactivateProductAPI } from "../../../Api/ProductApi";
const RxProductsAdmin = () => {
  const products = useSelector((state) => state.product.rxProducts);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
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

  return (
    <>
      <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
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
        <div className="w-[95%] h-full mt-8">
          <div>
            <h1 className="text-blue-900 text-xl font-semibold my-3">
              RX PRODUCTS LIST
            </h1>
          </div>

          <table className="w-full">
            <thead className="bg-blue-900 text-white  ">
              <tr className="border-b-2 text-left ">
                <th className="py-2 px-5">S.NO</th>
                <th className="py-2 px-5">Thumbnail</th>
                <th className="py-2">Product Name</th>
                <th className="py-2 px-5">Created Date</th>
                <th className="py-2 px-2">Seller Name</th>
                {/* <th className="py-2">Category Specification</th> */}
                <th className="py-2 px-2 text-right">Unit Price</th>
                <th className="py-2 px-4">Saleprice Start</th>
                <th className="py-2 px-4">Saleprice End</th>
                <th className="py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((detail, index) => (
                <tr className="border-b" key={detail.id}>
                  <td className='px-4 py-2"'>{indexOfFirstItem+index + 1}</td>
                  <td className='px-4 py-2"'>
                    <img
                      src={detail?.productGallery?.imageUrl}
                      className="w-16 h-12"
                    />
                  </td>
                  {/* <td>{detail.productName}</td> */}
                  <Tooltip title={detail.productName} placement="right">
                    <span className="truncate block w-40 cursor-pointer"> {/* Truncate and make clickable */}
                      {detail.productName}
                    </span>
                  </Tooltip>
                  <td>{}</td>
                  <td className="text-left">{detail.sellerFirstName}</td>
                  {/* <td>{detail.categorySpecification.specificationName}</td> */}
                  <td className="text-right">{detail.unitPrice?.toFixed(2)}</td>
                  <td className="px-4 py-2">{new Date(detail.salePriceValidFrom).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                          .replace(/\//g, "-")}</td>
                        <td className="px-4 py-2">{new Date(detail.salePriceValidTo).toLocaleDateString("en-US", {
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
                      //   onClick={() => DeleteProduct(product.productID)}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-center">
        {" "}
        <Pagination
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          productList={products}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default RxProductsAdmin;