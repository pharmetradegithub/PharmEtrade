import React, { useEffect, useState } from "react";
// import deleteicon from "../assets/trash.png";
import { TextField, InputAdornment } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { FedExRatesApi, serviceTypeApi } from "../Api/TrackApi";
import { getUserByCustomerIdApi } from "../Api/UserApi";
import { ShipmentChargesApi } from "../Api/ShipmentApi";
// import wrong from "../assets/Icons/wrongred.png";
// import { getCartItemsApi, removeItemFromCartApi } from "../Api/CartApi";
const ProccedtoShipment = ({
  selectedOptions,
  setSelectedOptions,
  totalNetCharges,
  setTotalNetCharges,
  productId,
}) => {
  // const fedexRate = useSelector((state) => state.trackNumber?.fedExRates || []);
  // const serviceName = useSelector((state) => state.trackNumber?.serviceType || []);
  const cartList = useSelector((state) => state.cart?.cart || []);
  // const [cartItems, setcartItems] = useState(cartList);
  const [amount, setAmount] = useState(200);
  const dispatch = useDispatch();
  const businessInfo = useSelector((state) => state.user?.businessInfo || []);
  const orderPlace = useSelector((state) => state.order?.orderPlace || []);
  

  const navigate = useNavigate()

  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");
  const normalizeString = (str) =>
    str.replace(/\s+/g, " ").trim().toLowerCase();
  const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");


  // const handleChange = async (seller, e, products) => {
  //   const selectedServiceName = e.target.value;
  //   // Update the selected options for the seller
  //   setSelectedOptions((prevOptions) => ({
  //     ...prevOptions,
  //     [seller]: selectedServiceName,
  //   }));


  //   // Find the matching rate for the selected service
  //   const matchingRate = fedexRate.find(
  //     (rate) =>
  //       normalizeString(removeNonPrintableChars(rate.serviceName)) ===
  //       normalizeString(removeNonPrintableChars(selectedServiceName))
  //   );

  //   if (matchingRate) {
  //     const totalNetCharge =
  //       matchingRate?.ratedShipmentDetails[0]?.totalNetCharge || 0;

  //     // Update the total net charges for the seller
  //     setTotalNetCharges((prevCharges) => ({
  //       ...prevCharges,
  //       [seller]: totalNetCharge,
  //     }));

  //     // Create and send the payload
  //     const payload = {
  //       orderId: orderPlace.orderId,
  //       sellerId: products[0].product.sellerId,
  //       shipmentTypeId: 4,
  //       shipmentSubType: selectedServiceName, // Selected service name
  //       shippingCost: totalNetCharge, // Total net charge
  //     };

  //     await ShipmentChargesApi(payload)

  //     // if (totalNetCharge > 0) {
  //     //   navigate(
  //     //     `/checkout?total=${totalNetCharge.toFixed(
  //     //       2
  //     //     )}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
  //     //   );
  //     if (totalNetCharge > 0) {
  //       const parsedTotal = parseFloat(total);
  //       if (productId != null) {
  //         navigate(
  //           `/checkout?total=${parsedTotal.toFixed(
  //             2
  //           )}&productId=${productId}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
  //         );
  //       }
  //       else
  //         navigate(
  //           `/checkout?total=${parsedTotal.toFixed(
  //             2
  //           )}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
  //         );
  //     } else {
  //       console.error("TotalNetCharge is zero or invalid.");
  //     }
  //   } else {
  //     console.error("No matching rate found for the selected service.");
  //     setTotalNetCharges((prevCharges) => ({
  //       ...prevCharges,
  //       [seller]: null,
  //     }));
  //   }
  // };

  const handleChange = async (seller, e, products) => {
    const selectedServiceName = e.target.value;
    const sellerId = products[0]?.product.sellerId; // Extract sellerId from the first product

    if (!sellerId) {
      console.error("Seller ID not found for the selected product.");
      return;
    }

    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [seller]: selectedServiceName,
    }));

    const matchingRate = fedexRate[sellerId]?.find(
      (rate) =>
        normalizeString(removeNonPrintableChars(rate.serviceName)) ===
        normalizeString(removeNonPrintableChars(selectedServiceName))
    );

    if (matchingRate) {
      const totalNetCharge = matchingRate?.ratedShipmentDetails[0]?.totalNetCharge || 0;
      setTotalNetCharges((prevCharges) => ({
        ...prevCharges,
        [seller]: totalNetCharge,
      }));

      const payload = {
        orderId: orderPlace.orderId,
        sellerId: sellerId, // Use the extracted sellerId
        shipmentTypeId: 4,
        shipmentSubType: selectedServiceName,
        shippingCost: totalNetCharge,
      };

      await ShipmentChargesApi(payload);

      if (totalNetCharge > 0) {
        const parsedTotal = parseFloat(total);
        if (productId != null) {
          navigate(
            `/checkout?total=${parsedTotal.toFixed(2)}&productId=${productId}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
          );
        } else {
          navigate(
            `/checkout?total=${parsedTotal.toFixed(2)}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
          );
        }
      } else {
        console.error("TotalNetCharge is zero or invalid.");
      }
    } else {
      console.error("No matching rate found for the selected service.");
      setTotalNetCharges((prevCharges) => ({
        ...prevCharges,
        [seller]: null,
      }));
    }
  };
  const calculateSubtotal = (price, quantity) => price * quantity;
  // const groupedProducts = cartList.reduce((acc, item) => {
  //   // If productId is present, filter by productId
  //   if (productId) {
  //     if (item.product.productID === productId) {
  //       const seller = item.product.sellerName;
  //       if (!acc[seller]) acc[seller] = [];
  //       acc[seller].push(item);
  //     }
  //   } else {
  //     // Usual grouping logic
  //     const seller = item.product.sellerName;
  //     if (!acc[seller]) acc[seller] = [];
  //     acc[seller].push(item);
  //   }
  //   return acc;
  // }, {});

  const groupedProducts = cartList.reduce((acc, item) => {
    if (productId) {
      if (item.product.productID === productId) {
        const seller = item.product.sellerName;
        const sellerId = item.product.sellerId; // Extract sellerId
        if (!acc[seller]) acc[seller] = { products: [], sellerId };
        acc[seller].products.push(item);
      }
    } else {
      const seller = item.product.sellerName;
      const sellerId = item.product.sellerId; // Extract sellerId
      if (!acc[seller]) acc[seller] = { products: [], sellerId };
      acc[seller].products.push(item);
    }
    return acc;
  }, {});
  const user = useSelector((state) => state.user?.user || []);



  const handleResetDropdown = (seller) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [seller]: "", // Reset the dropdown selection
    }));

    setTotalNetCharges((prev) => ({
      ...prev,
      [seller]: 0, // Reset the amount to 0
    }));
  };

  useEffect(() => {
    const fetchSellerData = async () => {
      await getUserByCustomerIdApi(tabledetail.product.sellerId); // Send sellerId for each product
    };
    fetchSellerData();
  }, []);


  return (
    // <div className="w-full h-full  p-4 ">

    //   <h1 className="text-xl font-semibold text-orange-400">
    //     2. Select shipment
    //   </h1>
    //   <div className="flex w-full">
    //     <div className="w-full sm:w-[90%] md:w-[100%] lg:w-[70%] xl:w-[70%]">
    //       {Object.entries(groupedProducts).map(([seller, products]) => (
    //         <div key={seller}>
    //           <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

    //           <div className="border p-2 sm:p-4 md:p-6 my-4 min-w-full rounded-md shadow-lg bg-white">
    //             <table className="min-w-full border shadow-md rounded-lg">
    //               <thead>
    //                 <tr className="border-b text-base">
    //                   <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
    //                     Seller Name
    //                   </th>
    //                   <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
    //                     Image
    //                   </th>
    //                   <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
    //                     Product name
    //                   </th>
    //                   <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
    //                     Price
    //                   </th>
    //                   <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
    //                     Quantity
    //                   </th>
    //                   <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
    //                     Subtotal
    //                   </th>
    //                   {/* <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
    //                     Action
    //                   </th> */}
    //                 </tr>
    //               </thead>
    //               {products.map((tabledetail) => {

    //                 return (
    //                   <tbody key={tabledetail.product.id}>
    //                     <tr className="text-sm">
    //                       <td className="text-center">
    //                         {tabledetail.product.sellerName}
    //                         {/* {tabledetail.product.sellerId} */}
    //                       </td>
    //                       <td>
    //                         <img
    //                           className="h-16 w-16 rounded-lg"
    //                           src={tabledetail.product.imageUrl}
    //                           alt={tabledetail.product.id}
    //                         />
    //                       </td>
    //                       <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
    //                         {tabledetail.product.productName}
    //                       </td>
    //                       <td className="md:px-4 py-3 text-center">
    //                         $
    //                         {(() => {
    //                           const currentDate = new Date();
    //                           const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
    //                           const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

    //                           // Check if the user is a UPN member and has a special price
    //                           if (user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0) {
    //                             return tabledetail.product.upnMemberPrice.toFixed(2);
    //                           }

    //                           // Check if salePrice exists, and the current date is within the sale period
    //                           if (
    //                             tabledetail.product?.salePrice > 0 &&
    //                             currentDate >= saleStartDate &&
    //                             currentDate <= saleEndDate
    //                           ) {
    //                             return tabledetail.product.salePrice.toFixed(2);
    //                           }

    //                           // Default to unitPrice
    //                           return tabledetail.product.unitPrice?.toFixed(2);
    //                         })()}
    //                       </td>
    //                       <td className="text-center">{tabledetail.quantity}</td>

    //                       {/* <td className="px-2 md:px-4 text-right py-3">
    //                     <strong>
    //                       $
    //                       {(() => {
    //                         const currentDate = new Date();
    //                         const saleStartDate = new Date(
    //                           tabledetail.product?.salePriceValidFrom
    //                         );
    //                         const saleEndDate = new Date(
    //                           tabledetail.product?.salePriceValidTo
    //                         );

    //                         const price =
    //                         tabledetail.product?.salePrice > 0 &&
    //                           currentDate >= saleStartDate &&
    //                           currentDate <= saleEndDate
    //                             ? tabledetail.product.salePrice
    //                             : tabledetail.product.unitPrice;

    //                         return calculateSubtotal(
    //                           price,
    //                           tabledetail.quantity
    //                         )?.toFixed(2);
    //                       })()}
    //                     </strong>
    //                   </td> */}
    //                       <td className="px-2 md:px-4 text-right py-3">
    //                         <strong>
    //                           $
    //                           {(() => {
    //                             const currentDate = new Date();
    //                             const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
    //                             const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

    //                             // Determine the price based on UPN membership and sale conditions
    //                             const price =
    //                               user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0
    //                                 ? tabledetail.product.upnMemberPrice
    //                                 : tabledetail.product?.salePrice > 0 &&
    //                                   currentDate >= saleStartDate &&
    //                                   currentDate <= saleEndDate
    //                                   ? tabledetail.product.salePrice
    //                                   : tabledetail.product.unitPrice;

    //                             // Calculate the subtotal based on the selected price and quantity
    //                             return calculateSubtotal(price, tabledetail.quantity)?.toFixed(2);
    //                           })()}
    //                         </strong>
    //                       </td>

    //                       {/* <td className="text-center">
    //                         {" "}
    //                         <button
    //                           className="text-red-600 w-4 h-3"
    //                           // onClick={() => handleremove(index)}
    //                           onClick={() => handleDeleteClick(index)}
    //                         >
    //                           <Tooltip placement="top" title="Delete">
    //                             <img
    //                               src={deleteicon}
    //                               className="w-6"
    //                               alt="delete-icon"
    //                             />
    //                           </Tooltip>
    //                         </button>
    //                       </td> */}
    //                     </tr>
    //                   </tbody>
    //                 )
    //               })}
    //             </table>

    //             {/* Check if any product has a shipping cost */}
    //             {products
    //               .filter((product) => product.product.isShippingCostApplicable === false)
    //               .length > 0 && (
    //                 <div className="h-auto p-3 border flex rounded-md mt-3">
    //                   <h1 className="text-base font-semibold text-blue-900">Shipment:</h1>
    //                   <div className="flex flex-col xl:flex-row">
    //                     <div className="mx-5">
    //                       <select
    //                         id="delivery-options"
    //                         value={selectedOptions[seller] || ""}
    //                         onChange={(e) => handleChange(seller, e, products)}
    //                         className="bg-gray-100 border p-1 rounded-md"
    //                       >
    //                         <option value="" disabled>
    //                           {selectedOptions[seller]
    //                             ? "Please choose a delivery option"
    //                             : "Select an option"}
    //                         </option>
    //                         <optgroup label="Delivery options">
    //                           {serviceName.map((item) => {
    //                             const matchingRate = fedexRate.find(
    //                               (fed) =>
    //                                 normalizeString(removeNonPrintableChars(fed.serviceName)) ===
    //                                 normalizeString(removeNonPrintableChars(item.serviceName))
    //                             );

    //                             return (
    //                               <option key={item.serviceType} value={item.serviceName}>
    //                                 {item.serviceName} $
    //                                 {matchingRate
    //                                   ? `(${matchingRate.ratedShipmentDetails[0].totalNetCharge})`
    //                                   : ""}
    //                               </option>
    //                             );
    //                           })}
    //                         </optgroup>
    //                       </select>
    //                     </div>

    //                     <div className="mb-4 mt-3 xl:mt-0">
    //                       <TextField
    //                         label="amount"
    //                         size="small"
    //                         className="w-40 rounded-md h-4 border"
    //                         value={(totalNetCharges[seller] || 0).toFixed(2)}
    //                         onChange={(e) =>
    //                           setAmount(parseFloat(e.target.value) || 0)
    //                         }
    //                         InputProps={{
    //                           startAdornment: (
    //                             <InputAdornment position="start">$</InputAdornment>
    //                           ),
    //                         }}
    //                       />
    //                       {selectedOptions[seller] && (
    //                         <button
    //                           onClick={() => handleResetDropdown(seller)}
    //                           className="ml-2 text-white bg-blue border py-1 px-2 rounded-lg text-lg hover:text-red-700"
    //                         >
    //                           Reset
    //                         </button>
    //                       )}
    //                     </div>
    //                   </div>
    //                 </div>

    //               )}



    //           </div>
    //           {/* // ))} */}
    //         </div>
    //       ))}
    //     </div>

    //     <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
    //   </div>
    // </div>
    <div className="w-full h-full p-4">
      <h1 className="text-xl font-semibold text-blue2">2. Select shipment</h1>
      <div className="flex w-full">
        <div className="w-full sm:w-[90%] md:w-[100%] lg:w-[70%] xl:w-[70%]">
          {Object.entries(groupedProducts).map(([seller, { products, sellerId }]) => {
              // Use sellerId in the useSelector hook
              const serviceName = useSelector((state) => state.trackNumber.serviceType[sellerId] || []);
              const fedexRate = useSelector((state) => state.trackNumber.fedExRates[sellerId] || []);

              return(
            <div key={seller}>
              <h2 className="font-bold text-lg mt-4 text-green2">Seller: {seller}</h2>
              <div className="border p-2 sm:p-4 md:p-6 my-4 min-w-full rounded-md shadow-lg bg-white">
                <table className="min-w-full border shadow-md rounded-lg">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">Seller Name</th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">Image</th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">Product name</th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">Price</th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">Quantity</th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((tabledetail) => (
                      <tr key={tabledetail.product.id} className="text-sm">
                        <td className="text-center">{tabledetail.product.sellerName}</td>
                        <td>
                          <img className="h-16 w-16 rounded-lg" src={tabledetail.product.imageUrl} alt={tabledetail.product.id} />
                        </td>
                        <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">{tabledetail.product.productName}</td>
                        <td className="md:px-4 py-3 text-center">
                          $
                          {(() => {
                            const currentDate = new Date();
                            const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
                            const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

                            if (user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0) {
                              return tabledetail.product.upnMemberPrice.toFixed(2);
                            }

                            if (tabledetail.product?.salePrice > 0 && currentDate >= saleStartDate && currentDate <= saleEndDate) {
                              return tabledetail.product.salePrice.toFixed(2);
                            }

                            return tabledetail.product.unitPrice?.toFixed(2);
                          })()}
                        </td>
                        <td className="text-center">{tabledetail.quantity}</td>
                        <td className="px-2 md:px-4 text-right py-3">
                          <strong>
                            $
                            {(() => {
                              const currentDate = new Date();
                              const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
                              const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

                              const price =
                                user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0
                                  ? tabledetail.product.upnMemberPrice
                                  : tabledetail.product?.salePrice > 0 && currentDate >= saleStartDate && currentDate <= saleEndDate
                                    ? tabledetail.product.salePrice
                                    : tabledetail.product.unitPrice;

                              return calculateSubtotal(price, tabledetail.quantity)?.toFixed(2);
                            })()}
                          </strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {products.filter((product) => product.product.isShippingCostApplicable === false).length > 0 && (
                  <div className="h-auto p-3 border flex rounded-md mt-3">
                    <h1 className="text-base font-semibold text-blue2">Shipment:</h1>
                    <div className="flex flex-col xl:flex-row">
                      <div className="mx-5">
                        <select
                          id="delivery-options"
                          value={selectedOptions[seller] || ""}
                          onChange={(e) => handleChange(seller, e, products)}
                          className="bg-gray-100 border p-1 rounded-md"
                        >
                          <option value="" disabled>
                            {selectedOptions[seller] ? "Please choose a delivery option" : "Select an option"}
                          </option>
                          <optgroup label="Delivery options">
                            {serviceName?.map((item) => {
                              const matchingRate = fedexRate?.find(
                                (fed) =>
                                  normalizeString(removeNonPrintableChars(fed.serviceName)) ===
                                  normalizeString(removeNonPrintableChars(item.serviceName))
                              );

                              return (
                                <option key={item.serviceType} value={item.serviceName}>
                                  {item.serviceName} $
                                  {matchingRate ? `(${matchingRate.ratedShipmentDetails[0].totalNetCharge})` : ""}
                                </option>
                              );
                            })}
                          </optgroup>
                        </select>
                      </div>

                      <div className="mb-4 mt-3 xl:mt-0">
                        <TextField
                          label="amount"
                          size="small"
                          className="w-40 rounded-md h-4 border"
                          value={(totalNetCharges[seller] || 0).toFixed(2)}
                          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                        />
                        {selectedOptions[seller] && (
                          <button
                            onClick={() => handleResetDropdown(seller)}
                            className="ml-2 text-white bg-blue border py-1 px-2 rounded-lg text-lg hover:text-red-700"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
      </div>
    </div>
  );
};

export default ProccedtoShipment;

