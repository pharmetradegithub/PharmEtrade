// // import React, { useEffect, useState } from "react";
// // import deleteicon from "../assets/trash.png";
// // import { TextField, InputAdornment } from "@mui/material";
// // import { Link, useSearchParams } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { FedExRatesApi, serviceTypeApi } from "../Api/TrackApi";

// // const ProccedtoShipment = ({
// //   selectedOptions,
// //   setSelectedOptions,
// //   totalNetCharges,
// //   setTotalNetCharges,
// // }) => {
// //   const fedexRate = useSelector((state) => state.trackNumber.fedExRates);
// //   console.log("fedddddrate-->", fedexRate);
// //   const serviceName = useSelector((state) => state.trackNumber.serviceType);
// //   const cartList = useSelector((state) => state.cart.cart);
// //   console.log("cartList checkout", cartList);
// //   // const [cartItems, setcartItems] = useState(cartList);
// //   console.log("service-->", serviceName);
// //   const [amount, setAmount] = useState(200);
// //   const dispatch = useDispatch();
// //   const businessInfo = useSelector((state) => state.user.businessInfo);
// //   console.log("businessInfo-->address", businessInfo);

// //   useEffect(() => {
// //     const payload = {
// //       accountNumber: {
// //         value: "235969831",
// //       },
// //       requestedShipment: {
// //         shipper: {
// //           address: {
// //             postalCode: businessInfo.zip,
// //             countryCode: businessInfo.state,
// //           },
// //         },
// //         recipient: {
// //           address: {
// //             postalCode: "65247",
// //             countryCode: "US",
// //           },
// //         },
// //         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
// //         rateRequestType: ["ACCOUNT", "LIST"],
// //         requestedPackageLineItems: [
// //           {
// //             weight: {
// //               units: "LB",
// //               value: 1,
// //             },
// //           },
// //         ],
// //       },
// //     };
// //     dispatch(serviceTypeApi(payload));
// //   }, []);

// //   useEffect(() => {
// //     // if (pincodes && stateAdd) { // Ensure they are set before making the call
// //     const payload = {
// //       accountNumber: {
// //         value: "235969831",
// //       },
// //       requestedShipment: {
// //         shipper: {
// //           address: {
// //             postalCode: businessInfo.zip,
// //             countryCode: businessInfo.state,
// //           },
// //         },
// //         recipient: {
// //           address: {
// //             postalCode: "65247",
// //             countryCode: "US",
// //           },
// //         },
// //         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
// //         rateRequestType: ["ACCOUNT", "LIST"],
// //         requestedPackageLineItems: [
// //           {
// //             weight: {
// //               units: "LB",
// //               value: 1,
// //             },
// //           },
// //         ],
// //       },
// //     };

// //     const data = async () => {
// //       try {
// //         const response = await dispatch(FedExRatesApi(payload));
// //         console.log(response); // Handle response
// //       } catch (error) {
// //         console.error("Error fetching FedEx rates:", error);
// //       }
// //     };
// //     data();
// //     // }
// //   }, []);

// //   // const [selectedOption, setSelectedOption] = useState("");
// //   // const [totalNetCharge, setTotalNetCharge] = useState(null) || 0; // Store totalNetCharge
// //   // const [selectedOptions, setSelectedOptions] = useState({
// //   //   seller: ""
// //   // });

// //   // const [totalNetCharges, setTotalNetCharges] = useState({
// //   //   seller: 0
// //   // });
// //   const [searchParams] = useSearchParams();
// //   const total = searchParams.get("total");
// //   const normalizeString = (str) =>
// //     str.replace(/\s+/g, " ").trim().toLowerCase();
// //   const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");

// //   const handleChange = (seller, e) => {
// //     const selectedServiceType = e.target.value;
// //     setSelectedOptions((prevOptions) => ({
// //       ...prevOptions,
// //       [seller]: selectedServiceType,
// //     }));
// //     console.log("Selected service type:", selectedServiceType);
// //     console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

// //     // First condition: Check if fedexRate exists and has elements
// //     if (fedexRate && fedexRate.length > 0) {
// //       // Use filter to find all matching rate details
// //       const matchingRateDetails = fedexRate.filter((rate) => {
// //         const normalizedRateServiceType = normalizeString(
// //           removeNonPrintableChars(rate.serviceName)
// //         );
// //         const normalizedSelectedServiceType = normalizeString(
// //           removeNonPrintableChars(selectedServiceType)
// //         );

// //         console.log(
// //           "Comparing:",
// //           normalizedRateServiceType,
// //           "to",
// //           normalizedSelectedServiceType
// //         );
// //         const isMatch =
// //           normalizedRateServiceType === normalizedSelectedServiceType;
// //         console.log("Match result:", isMatch);

// //         return isMatch; // Return the match result
// //       });

// //       if (matchingRateDetails.length > 0) {
// //         // Process all matching details
// //         const netCharge = matchingRateDetails.reduce((total, rate) => {
// //           return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
// //         }, 0);
// //         setTotalNetCharges((prevCharges) => ({
// //           ...prevCharges,
// //           [seller]: netCharge,
// //         }));
// //         console.log("Total Net Charge for matching services:", netCharge);

// //         // Next condition check can go here
// //         if (netCharge > 0) {
// //           const parsedTotal = parseFloat(total); // Convert total to a number

// //           // Check if parsedTotal is a valid number
// //           if (!isNaN(parsedTotal)) {
// //             navigate(
// //               `/checkout?total=${parsedTotal.toFixed(
// //                 2
// //               )}&netCharge=${netCharge.toFixed(2)}`
// //             );
// //             console.log("Valid net charge available for processing.");
// //           }
// //         } else {
// //           console.log("Net charge is zero or invalid.");
// //         }
// //       } else {
// //         console.log("No matching service type found.");
// //         setTotalNetCharges((prevCharges) => ({
// //           ...prevCharges,
// //           [seller]: null,
// //         }));
// //       }
// //     } else {
// //       console.log("fedexRate is not available or empty.");
// //       setTotalNetCharges((prevCharges) => ({
// //         ...prevCharges,
// //         [seller]: null,
// //       }));
// //     }
// //   };

// //   const calculateSubtotal = (price, quantity) => price * quantity;
// //   const groupedProducts = cartList.reduce((acc, item) => {
// //     const seller = item.product.sellerName;
// //     if (!acc[seller]) acc[seller] = [];
// //     acc[seller].push(item);
// //     return acc;
// //   }, {});

// //   return (
// //     <div className="w-full h-full  p-4 ">
// //       <h1 className="text-xl font-semibold text-orange-400">
// //         2. Select shipment
// //       </h1>
// //       <div className="flex w-full">
// //         <div className="w-[70%]">
// //           {Object.entries(groupedProducts).map(([seller, products]) => (
// //             <div key={seller}>
// //               <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

// //               <div className="border p-4 my-4 rounded-md shadow-lg bg-white">
// //                 <table className="min-w-full border shadow-md rounded-lg">
// //                   <thead>
// //                     <tr className="border-b text-base">
// //                       <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
// //                         Seller Name
// //                       </th>
// //                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
// //                         Image
// //                       </th>
// //                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
// //                         Product name
// //                       </th>
// //                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
// //                         Price
// //                       </th>
// //                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
// //                         Quantity
// //                       </th>
// //                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
// //                         Subtotal
// //                       </th>
// //                       <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
// //                         Action
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   {products.map((tabledetail) => (
// //                     <tbody key={tabledetail.product.id}>
// //                       <tr className="text-sm">
// //                         <td className="text-center">
// //                           {tabledetail.product.sellerName}
// //                         </td>
// //                         <td>
// //                           <img
// //                             className="h-16 w-16 rounded-lg"
// //                             src={tabledetail.product.imageUrl}
// //                             alt={tabledetail.product.id}
// //                           />
// //                         </td>
// //                         <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
// //                           {tabledetail.product.productName}
// //                         </td>
// //                         <td className="text-center">
// //                           $
// //                           {tabledetail.product?.salePrice > 0
// //                             ? tabledetail.product.salePrice.toFixed(2)
// //                             : tabledetail.product.unitPrice?.toFixed(2)}
// //                         </td>
// //                         <td className="text-center">{tabledetail.quantity}</td>
// //                         <td className="text-center">
// //                           {" "}
// //                           {/* ${tabledetail?.Subtotal?.toFixed(2)} */}
// //                           <strong>
// //                             $
// //                             {calculateSubtotal(
// //                               tabledetail.product?.salePrice > 0
// //                                 ? tabledetail.product.salePrice.toFixed(2)
// //                                 : tabledetail.product.unitPrice?.toFixed(2),
// //                               tabledetail.quantity
// //                             )?.toFixed(2)}
// //                           </strong>
// //                         </td>
// //                         <td className="text-center">
// //                           {" "}
// //                           <img
// //                             src={deleteicon}
// //                             className="h-5 w-5 rounded-lg flex justify-center items-center ml-6"
// //                           />
// //                         </td>
// //                       </tr>
// //                     </tbody>
// //                   ))}
// //                 </table>

// //                 <div className="h-auto p-3 border  flex  rounded-md mt-3  ">
// //                   <h1 className="text-base font-semibold text-blue-900">
// //                     Shipment :
// //                   </h1>
// //                   <div className="mx-5">
// //                     {/* <select
// //                       id="delivery-options"
// //                       value={selectedOptions[seller]}
// //                       onChange={(e) => handleChange(seller, e)}
// //                       className="bg-gray-100 border rounded-md"
// //                     >
// //                       <option value="" disabled className=" ">
// //                         Select an option
// //                       </option>

// //                       <optgroup label="Delivery options"> */}
// //                         {/* <option value="groundBusiness">FedEx Ground® (to businesses, Monday to Friday)</option> */}
// //                         {/* <option value="homeDelivery">FedEx Home Delivery® (to residences, every day)</option> */}
// //                         {/* {serviceName.map((item) => {
// //                           return (
// //                             <option
// //                               key={item.serviceType}
// //                               value={item.serviceName}
// //                             >
// //                               {item.serviceName}
// //                             </option>
// //                           );
// //                         })} */}
// //                         {/* {serviceName.map((item) => {
// //                           // Find the matching rate for the current serviceName
// //                           const matchingRate = fedexRate.find(
// //                             (fed) => item.serviceName === fed.serviceName
// //                           ); */}
// //                           <select
// //                       id="delivery-options"
// //                       value={selectedOptions[seller] || ""}
// //                       onChange={(e) => handleChange(seller, e)}
// //                       className="bg-gray-100 border rounded-md"
// //                     >
// //                       <option value="" disabled>
// //                         {/* {selectedOptions[seller] ? 'Select an option' : 'Please choose a delivery option'} */}
// //                         {selectedOptions[seller] ? 'Please choose a delivery option' : 'Select an option'}

// //                       </option>

// //                       <optgroup label="Delivery options">
// //                         {serviceName.map((item) => {
// //                           const matchingRate = fedexRate.find(
// //                             (fed) => item.serviceName === fed.serviceName
// //                           );


// //                           return (
// //                             <option
// //                               key={item.serviceType}
// //                               value={item.serviceName}
// //                             >
// //                               {item.serviceName}
// //                               {matchingRate
// //                                 ? ` (${matchingRate.ratedShipmentDetails[0].totalNetCharge})`
// //                                 : ""}
// //                             </option>
// //                           );
// //                         })}
// //                       </optgroup>
// //                     </select>
// //                   </div>

// //                   <div className="mb-4">
// //                     <TextField
// //                       label="amount"
// //                       size="small"
// //                       className="w-40 rounded-md h-4 border "
// //                       value={(totalNetCharges[seller] || 0).toFixed(2)}
// //                       onChange={(e) =>
// //                         setAmount(parseFloat(e.target.value) || 0)
// //                       }
// //                       InputProps={{
// //                         startAdornment: (
// //                           <InputAdornment position="start">$</InputAdornment>
// //                         ),
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //               {/* // ))} */}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProccedtoShipment;



// import React, { useEffect, useState } from "react";
// import deleteicon from "../assets/trash.png";
// import { TextField, InputAdornment } from "@mui/material";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FedExRatesApi, serviceTypeApi } from "../Api/TrackApi";
// import { getUserByCustomerIdApi } from "../Api/UserApi";

// const ProccedtoShipment = ({
//   selectedOptions,
//   setSelectedOptions,
//   totalNetCharges,
//   setTotalNetCharges,
// }) => {
//   const fedexRate = useSelector((state) => state.trackNumber.fedExRates);
//   console.log("fedddddrate-->", fedexRate);
//   const serviceName = useSelector((state) => state.trackNumber.serviceType);
//   const cartList = useSelector((state) => state.cart.cart);
//   console.log("cartList checkout", cartList);
//   // const [cartItems, setcartItems] = useState(cartList);
//   console.log("service-->", serviceName);
//   const [amount, setAmount] = useState(200);
//   const dispatch = useDispatch();
//   const businessInfo = useSelector((state) => state.user.businessInfo);
//   console.log("businessInfo", businessInfo);
//   const navigate = useNavigate()
//   // const [responseBusiness, setResponseBusiness] = useState(null)

//   // useEffect(() => {
//   //   const payload = {
//   //     accountNumber: {
//   //       value: "235969831",
//   //     },
//   //     requestedShipment: {
//   //       shipper: {
//   //         address: {
//   //           postalCode: responseBusiness.businessInfo.zip,
//   //           countryCode: responseBusiness.businessInfo.state,
//   //         },
//   //       },
//   //       recipient: {
//   //         address: {
//   //           postalCode: "65247",
//   //           countryCode: "US",
//   //         },
//   //       },
//   //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //       rateRequestType: ["ACCOUNT", "LIST"],
//   //       requestedPackageLineItems: [
//   //         {
//   //           weight: {
//   //             units: "LB",
//   //             value: 1,
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   };
//   //   dispatch(serviceTypeApi(payload));
//   // }, []);

//   // useEffect(() => {
//   //   // if (pincodes && stateAdd) { // Ensure they are set before making the call
//   //   const payload = {
//   //     accountNumber: {
//   //       value: "235969831",
//   //     },
//   //     requestedShipment: {
//   //       shipper: {
//   //         address: {
//   //           postalCode: responseBusiness.businessInfo.zip,
//   //           countryCode: responseBusiness.businessInfo.state,
//   //         },
//   //       },
//   //       recipient: {
//   //         address: {
//   //           postalCode: "65247",
//   //           countryCode: "US",
//   //         },
//   //       },
//   //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //       rateRequestType: ["ACCOUNT", "LIST"],
//   //       requestedPackageLineItems: [
//   //         {
//   //           weight: {
//   //             units: "LB",
//   //             value: 1,
//   //           },
//   //         },
//   //       ],
//   //     },
//   //   };

//   //   const data = async () => {
//   //     try {
//   //       const response = await dispatch(FedExRatesApi(payload));
//   //       console.log(response); // Handle response
//   //     } catch (error) {
//   //       console.error("Error fetching FedEx rates:", error);
//   //     }
//   //   };
//   //   data();
//   //   // }
//   // }, []);

//   // const [selectedOption, setSelectedOption] = useState("");
//   // const [totalNetCharge, setTotalNetCharge] = useState(null) || 0; // Store totalNetCharge
//   // const [selectedOptions, setSelectedOptions] = useState({
//   //   seller: ""
//   // });

//   // const [totalNetCharges, setTotalNetCharges] = useState({
//   //   seller: 0
//   // });
//   const [searchParams] = useSearchParams();
//   const total = searchParams.get("total");
//   const normalizeString = (str) =>
//     str.replace(/\s+/g, " ").trim().toLowerCase();
//   const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");

//   const handleChange = (seller, e) => {
//     const selectedServiceType = e.target.value;
//     setSelectedOptions((prevOptions) => ({
//       ...prevOptions,
//       [seller]: selectedServiceType,
//     }));
//     console.log("Selected service type:", selectedServiceType);
//     console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

//     // First condition: Check if fedexRate exists and has elements
//     if (fedexRate && fedexRate.length > 0) {
//       // Use filter to find all matching rate details
//       const matchingRateDetails = fedexRate.filter((rate) => {
//         const normalizedRateServiceType = normalizeString(
//           removeNonPrintableChars(rate.serviceName)
//         );
//         const normalizedSelectedServiceType = normalizeString(
//           removeNonPrintableChars(selectedServiceType)
//         );

//         console.log(
//           "Comparing:",
//           normalizedRateServiceType,
//           "to",
//           normalizedSelectedServiceType
//         );
//         const isMatch =
//           normalizedRateServiceType === normalizedSelectedServiceType;
//         console.log("Match result:", isMatch);

//         return isMatch; // Return the match result
//       });

//       if (matchingRateDetails.length > 0) {
//         // Process all matching details
//         const netCharge = matchingRateDetails.reduce((total, rate) => {
//           return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
//         }, 0);
//         setTotalNetCharges((prevCharges) => ({
//           ...prevCharges,
//           [seller]: netCharge,
//         }));
//         console.log("Total Net Charge for matching services:", netCharge);

//         // Next condition check can go here
//         if (netCharge > 0) {
//           const parsedTotal = parseFloat(total); // Convert total to a number

//           // Check if parsedTotal is a valid number
//           if (!isNaN(parsedTotal)) {
//             navigate(
//               `/checkout?total=${parsedTotal.toFixed(
//                 2
//               )}&netCharge=${netCharge.toFixed(2)}`
//             );
//             console.log("Valid net charge available for processing.");
//           }
//         } else {
//           console.log("Net charge is zero or invalid.");
//         }
//       } else {
//         console.log("No matching service type found.");
//         setTotalNetCharges((prevCharges) => ({
//           ...prevCharges,
//           [seller]: null,
//         }));
//       }
//     } else {
//       console.log("fedexRate is not available or empty.");
//       setTotalNetCharges((prevCharges) => ({
//         ...prevCharges,
//         [seller]: null,
//       }));
//     }
//   };

//   const calculateSubtotal = (price, quantity) => price * quantity;
//   const groupedProducts = cartList.reduce((acc, item) => {
//     const seller = item.product.sellerName;
//     if (!acc[seller]) acc[seller] = [];
//     acc[seller].push(item);
//     return acc;
//   }, {});

//   const user = useSelector((state) => state.user.user);


//   // useEffect(() => {
//   //   const data = async () => {
//   //     const sellerIds = new Set();

//   //     // Loop through the grouped products and collect unique sellerIds
//   //     Object.entries(groupedProducts).forEach(([seller, products]) => {
//   //       products.forEach((product) => {
//   //         sellerIds.add(product.product.sellerId);  // Collect sellerId from each product
//   //         console.log("selleerIsddd--> ", sellerIds)
//   //       });
//   //     });

//   //     // Now, call the API for each unique sellerId
//   //     for (const sellerId of sellerIds) {
//   //       const res = await getUserByCustomerIdApi(sellerId);  // Call the API for each sellerId
//   //       console.log("res---->", res)
//   //       setResponseBusiness(res)
//   //     }
//   //   };

//   //   data();
//   // }, [groupedProducts]); 



//   // useEffect(() => {
    
//   //   const fetchSellerInfoAndCalculateRates = async () => {
//   //     const sellerIds = new Set();

//   //     // Collect unique sellerIds from grouped products
//   //     Object.entries(groupedProducts).forEach(([_, products]) => {
//   //       products.forEach((product) => {
//   //         sellerIds.add(product.product.sellerId);
//   //       });
//   //     });

//   //     // Loop through each sellerId, fetch their information, and set responseBusiness
//   //     for (const sellerId of sellerIds) {
//   //       try {
//   //         const res = await getUserByCustomerIdApi(sellerId);
//   //         setResponseBusiness(res);  // Store the business info of the current seller

//   //         // Define payload for serviceTypeApi using responseBusiness
//   //         const servicePayload = {
//   //           accountNumber: {
//   //             value: "235969831",
//   //           },
//   //           requestedShipment: {
//   //             shipper: {
//   //               address: {
//   //                 postalCode: res.businessInfo.zip,       // Use dynamic response
//   //                 countryCode: res.businessInfo.state,    // Use dynamic response
//   //               },
//   //             },
//   //             recipient: {
//   //               address: {
//   //                 postalCode: "65247",
//   //                 countryCode: "US",
//   //               },
//   //             },
//   //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //             rateRequestType: ["ACCOUNT", "LIST"],
//   //             requestedPackageLineItems: [
//   //               {
//   //                 weight: {
//   //                   units: "LB",
//   //                   value: 1,
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         };

//   //         // Call serviceTypeApi with the payload
//   //         await dispatch(serviceTypeApi(servicePayload));

//   //         // Define payload for FedExRatesApi using responseBusiness
//   //         const ratePayload = {
//   //           accountNumber: {
//   //             value: "235969831",
//   //           },
//   //           requestedShipment: {
//   //             shipper: {
//   //               address: {
//   //                 postalCode: res.businessInfo.zip,
//   //                 countryCode: res.businessInfo.state,
//   //               },
//   //             },
//   //             recipient: {
//   //               address: {
//   //                 postalCode: "65247",
//   //                 countryCode: "US",
//   //               },
//   //             },
//   //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //             rateRequestType: ["ACCOUNT", "LIST"],
//   //             requestedPackageLineItems: [
//   //               {
//   //                 weight: {
//   //                   units: "LB",
//   //                   value: 1,
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         };

//   //         // Call FedExRatesApi with the payload
//   //         const rateResponse = await dispatch(FedExRatesApi(ratePayload));
//   //         console.log("FedEx Rates Response:", rateResponse);

//   //       } catch (error) {
//   //         console.error("Error processing seller or fetching rates:", error);
//   //       }
//   //     }
//   //   };

//   //   fetchSellerInfoAndCalculateRates();
//   // }, [groupedProducts]);


//   // const [responseBusiness, setResponseBusiness] = useState(null);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Step 1: Collect unique seller IDs from groupedProducts
//   //       const sellerIds = new Set();
//   //       Object.entries(groupedProducts).forEach(([_, products]) => {
//   //         products.forEach((product) => {
//   //           sellerIds.add(product.product.sellerId);
//   //         });
//   //       });

//   //       // Step 2: Fetch business information for each seller
//   //       const sellersInfo = [];
//   //       for (const sellerId of sellerIds) {
//   //         const res = await getUserByCustomerIdApi(sellerId);
//   //         sellersInfo.push(res);  // Store each response
//   //       }

//   //       // Assuming you need the first response in the next step, we set it as `responseBusiness`
//   //       setResponseBusiness(sellersInfo[0]);

//   //       // Step 3: Call `serviceTypeApi` with the first seller's data
//   //       const payload = {
//   //         accountNumber: {
//   //           value: "235969831",
//   //         },
//   //         requestedShipment: {
//   //           shipper: {
//   //             address: {
//   //               postalCode: sellersInfo[0]?.businessInfo?.zip,
//   //               countryCode: sellersInfo[0]?.businessInfo?.state,
//   //             },
//   //           },
//   //           recipient: {
//   //             address: {
//   //               postalCode: "65247",
//   //               countryCode: "US",
//   //             },
//   //           },
//   //           pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //           rateRequestType: ["ACCOUNT", "LIST"],
//   //           requestedPackageLineItems: [
//   //             {
//   //               weight: {
//   //                 units: "LB",
//   //                 value: 1,
//   //               },
//   //             },
//   //           ],
//   //         },
//   //       };
//   //       await dispatch(serviceTypeApi(payload));

//   //       // Step 4: Call `FedExRatesApi` with the same payload
//   //       const rateResponse = await dispatch(FedExRatesApi(payload));
//   //       console.log("FedEx Rates Response:", rateResponse);

//   //     } catch (error) {
//   //       console.error("Error in data fetching process:", error);
//   //     }
//   //   };

//   //   fetchData();  // Only runs once when component mounts
//   // }, []);  // Empty dependency array means it only runs once


//   // const [responseBusiness, setResponseBusiness] = useState(null);
//   // console.log("ressssss", responseBusiness)

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Step 1: Collect unique seller IDs from groupedProducts
//   //       const sellerIds = new Set();
//   //       Object.entries(groupedProducts).forEach(([_, products]) => {
//   //         products.forEach((product) => {
//   //           sellerIds.add(product.product.sellerId);
//   //         });
//   //       });

//   //       // Step 2: Fetch business information for each seller and store it in an array
//   //       const sellersInfo = [];
//   //       for (const sellerId of sellerIds) {
//   //         const res = await getUserByCustomerIdApi(sellerId);
//   //         sellersInfo.push(res); // Store each response
//   //       }

//   //       setResponseBusiness(sellersInfo); // Store the full list of sellers in state if needed

//   //       // Step 3: Iterate over each seller's info and send payload for each
//   //       for (const seller of sellersInfo) { // Use `sellersInfo` directly here
//   //         const payload = {
//   //           accountNumber: {
//   //             value: "235969831",
//   //           },
//   //           requestedShipment: {
//   //             shipper: {
//   //               address: {
//   //                 postalCode: seller?.businessInfo?.zip,
//   //                 countryCode: seller?.businessInfo?.state,
//   //               },
//   //             },
//   //             recipient: {
//   //               address: {
//   //                 postalCode: "65247",
//   //                 countryCode: "US",
//   //               },
//   //             },
//   //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //             rateRequestType: ["ACCOUNT", "LIST"],
//   //             requestedPackageLineItems: [
//   //               {
//   //                 weight: {
//   //                   units: "LB",
//   //                   value: 1,
//   //                 },
//   //               },
//   //             ],
//   //           },
//   //         };

//   //         // Send the payload with `serviceTypeApi`
//   //         await dispatch(serviceTypeApi(payload));

//   //         // Call `FedExRatesApi` with the same payload
//   //         const rateResponse = await dispatch(FedExRatesApi(payload));
//   //         console.log("FedEx Rates Response for seller", seller.sellerId, ":", rateResponse);
//   //       }

//   //     } catch (error) {
//   //       console.error("Error in data fetching process:", error);
//   //     }
//   //   };

//   //   fetchData(); // Only runs once when component mounts
//   // }, []); // Empty dependency array means it only runs once

//   return (
//     <div className="w-full h-full  p-4 ">
//       <h1 className="text-xl font-semibold text-orange-400">
//         2. Select shipment
//       </h1>
//       <div className="flex w-full">
//         <div className="w-[70%]">
//           {Object.entries(groupedProducts).map(([seller, products]) => (
//             <div key={seller}>
//               <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

//               <div className="border p-4 my-4 rounded-md shadow-lg bg-white">
//                 <table className="min-w-full border shadow-md rounded-lg">
//                   <thead>
//                     <tr className="border-b text-base">
//                       <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
//                         Seller Name
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Image
//                       </th>
//                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
//                         Product name
//                       </th>
//                       <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
//                         Price
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Quantity
//                       </th>
//                       <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
//                         Subtotal
//                       </th>
//                       <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   {products.map((tabledetail) => {
//                     useEffect(() => {
//                       const fetchSellerData = async () => {
//                         await getUserByCustomerIdApi(tabledetail.product.sellerId); // Send sellerId for each product
//                       };
//                       fetchSellerData();
//                     }, [tabledetail.product.sellerId]);
//                     return (
//                     <tbody key={tabledetail.product.id}>
//                       <tr className="text-sm">
//                         <td className="text-center">
//                             {tabledetail.product.sellerName}
//                             {/* {tabledetail.product.sellerId} */}
//                         </td>
//                         <td>
//                           <img
//                             className="h-16 w-16 rounded-lg"
//                             src={tabledetail.product.imageUrl}
//                             alt={tabledetail.product.id}
//                           />
//                         </td>
//                         <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
//                           {tabledetail.product.productName}
//                         </td>
                        
//                         {/* <td className="md:px-4 py-3 text-center">
//                         $
//                         {(() => {
//                           const currentDate = new Date();
//                           const saleStartDate = new Date(
//                             tabledetail.product?.salePriceValidFrom
//                           );
//                           const saleEndDate = new Date(
//                             tabledetail.product?.salePriceValidTo
//                           );

//                           // Check if salePrice exists, and the current date is within the sale period
//                           if (
//                             tabledetail.product?.salePrice > 0 &&
//                             currentDate >= saleStartDate &&
//                             currentDate <= saleEndDate
//                           ) {
//                             return tabledetail.product.salePrice.toFixed(2);
//                           } else {
//                             return tabledetail.product.unitPrice?.toFixed(2);
//                           }
//                         })()}
//                       </td> */}
//                         <td className="md:px-4 py-3 text-center">
//   $
//   {(() => {
//     const currentDate = new Date();
//     const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
//     const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

//     // Check if the user is a UPN member and has a special price
//     if (user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0) {
//       return tabledetail.product.upnMemberPrice.toFixed(2);
//     }

//     // Check if salePrice exists, and the current date is within the sale period
//     if (
//       tabledetail.product?.salePrice > 0 &&
//       currentDate >= saleStartDate &&
//       currentDate <= saleEndDate
//     ) {
//       return tabledetail.product.salePrice.toFixed(2);
//     }

//     // Default to unitPrice
//     return tabledetail.product.unitPrice?.toFixed(2);
//   })()}
// </td>
//                         <td className="text-center">{tabledetail.quantity}</td>

//                         {/* <td className="px-2 md:px-4 text-right py-3">
//                         <strong>
//                           $
//                           {(() => {
//                             const currentDate = new Date();
//                             const saleStartDate = new Date(
//                               tabledetail.product?.salePriceValidFrom
//                             );
//                             const saleEndDate = new Date(
//                               tabledetail.product?.salePriceValidTo
//                             );

//                             const price =
//                             tabledetail.product?.salePrice > 0 &&
//                               currentDate >= saleStartDate &&
//                               currentDate <= saleEndDate
//                                 ? tabledetail.product.salePrice
//                                 : tabledetail.product.unitPrice;

//                             return calculateSubtotal(
//                               price,
//                               tabledetail.quantity
//                             )?.toFixed(2);
//                           })()}
//                         </strong>
//                       </td> */}
//                       <td className="px-2 md:px-4 text-right py-3">
//   <strong>
//     $
//     {(() => {
//       const currentDate = new Date();
//       const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
//       const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

//       // Determine the price based on UPN membership and sale conditions
//       const price =
//         user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0
//           ? tabledetail.product.upnMemberPrice
//           : tabledetail.product?.salePrice > 0 &&
//             currentDate >= saleStartDate &&
//             currentDate <= saleEndDate
//           ? tabledetail.product.salePrice
//           : tabledetail.product.unitPrice;

//       // Calculate the subtotal based on the selected price and quantity
//       return calculateSubtotal(price, tabledetail.quantity)?.toFixed(2);
//     })()}
//   </strong>
// </td>

//                         <td className="text-center">
//                           {" "}
//                           <img
//                             src={deleteicon}
//                             className="h-5 w-5 rounded-lg flex justify-center items-center ml-6"
//                           />
//                         </td>
//                       </tr>
//                       </tbody>
//                     )
//                   })}
//                 </table>

//                 <div className="h-auto p-3 border  flex  rounded-md mt-3  ">
//                   <h1 className="text-base font-semibold text-blue-900">
//                     Shipment :
//                   </h1>
//                   <div className="mx-5">
//                     {/* <select
//                       id="delivery-options"
//                       value={selectedOptions[seller]}
//                       onChange={(e) => handleChange(seller, e)}
//                       className="bg-gray-100 border rounded-md"
//                     >
//                       <option value="" disabled className=" ">
//                         Select an option
//                       </option>

//                       <optgroup label="Delivery options"> */}
//                         {/* <option value="groundBusiness">FedEx Ground® (to businesses, Monday to Friday)</option> */}
//                         {/* <option value="homeDelivery">FedEx Home Delivery® (to residences, every day)</option> */}
//                         {/* {serviceName.map((item) => {
//                           return (
//                             <option
//                               key={item.serviceType}
//                               value={item.serviceName}
//                             >
//                               {item.serviceName}
//                             </option>
//                           );
//                         })} */}
//                         {/* {serviceName.map((item) => {
//                           // Find the matching rate for the current serviceName
//                           const matchingRate = fedexRate.find(
//                             (fed) => item.serviceName === fed.serviceName
//                           ); */}
//                           <select
//                       id="delivery-options"
//                       value={selectedOptions[seller] || ""}
//                       onChange={(e) => handleChange(seller, e)}
//                       className="bg-gray-100 border rounded-md"
//                     >
//                       <option value="" disabled>
//                         {/* {selectedOptions[seller] ? 'Select an option' : 'Please choose a delivery option'} */}
//                         {selectedOptions[seller] ? 'Please choose a delivery option' : 'Select an option'}

//                       </option>

//                       <optgroup label="Delivery options">
//                         {serviceName.map((item) => {
//                           const matchingRate = fedexRate.find(
//                             (fed) => item.serviceName === fed.serviceName
//                           );


//                           return (
//                             <option
//                               key={item.serviceType}
//                               value={item.serviceName}
//                             >
//                               {item.serviceName} $ 
//                               {matchingRate
//                                 ? ` (${matchingRate.ratedShipmentDetails[0].totalNetCharge} )`
//                                 : ""}
//                             </option>
//                           );
//                         })}
//                       </optgroup>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <TextField
//                       label="amount"
//                       size="small"
//                       className="w-40 rounded-md h-4 border "
//                       value={(totalNetCharges[seller] || 0).toFixed(2)}
//                       onChange={(e) =>
//                         setAmount(parseFloat(e.target.value) || 0)
//                       }
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">$</InputAdornment>
//                         ),
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* // ))} */}
//             </div>
//           ))}
//         </div>

//         <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
//       </div>
//     </div>
//   );
// };

// export default ProccedtoShipment;

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
  productId
}) => {
  const fedexRate = useSelector((state) => state.trackNumber.fedExRates);
  console.log("fedddddrate-->", fedexRate);
  const serviceName = useSelector((state) => state.trackNumber.serviceType);
  const cartList = useSelector((state) => state.cart.cart);
  console.log("cartList checkout", cartList);
  // const [cartItems, setcartItems] = useState(cartList);
  console.log("service-->", serviceName);
  const [amount, setAmount] = useState(200);
  const dispatch = useDispatch();
  const businessInfo = useSelector((state) => state.user.businessInfo);
  const orderPlace = useSelector((state) => state.order.orderPlace);
  console.log("orderPlace-->", orderPlace)

  console.log("businessInfo", businessInfo);
  const navigate = useNavigate()
  // const [responseBusiness, setResponseBusiness] = useState(null)

  // useEffect(() => {
  //   const payload = {
  //     accountNumber: {
  //       value: "235969831",
  //     },
  //     requestedShipment: {
  //       shipper: {
  //         address: {
  //           postalCode: responseBusiness.businessInfo.zip,
  //           countryCode: responseBusiness.businessInfo.state,
  //         },
  //       },
  //       recipient: {
  //         address: {
  //           postalCode: "65247",
  //           countryCode: "US",
  //         },
  //       },
  //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //       rateRequestType: ["ACCOUNT", "LIST"],
  //       requestedPackageLineItems: [
  //         {
  //           weight: {
  //             units: "LB",
  //             value: 1,
  //           },
  //         },
  //       ],
  //     },
  //   };
  //   dispatch(serviceTypeApi(payload));
  // }, []);

  // useEffect(() => {
  //   // if (pincodes && stateAdd) { // Ensure they are set before making the call
  //   const payload = {
  //     accountNumber: {
  //       value: "235969831",
  //     },
  //     requestedShipment: {
  //       shipper: {
  //         address: {
  //           postalCode: responseBusiness.businessInfo.zip,
  //           countryCode: responseBusiness.businessInfo.state,
  //         },
  //       },
  //       recipient: {
  //         address: {
  //           postalCode: "65247",
  //           countryCode: "US",
  //         },
  //       },
  //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //       rateRequestType: ["ACCOUNT", "LIST"],
  //       requestedPackageLineItems: [
  //         {
  //           weight: {
  //             units: "LB",
  //             value: 1,
  //           },
  //         },
  //       ],
  //     },
  //   };

  //   const data = async () => {
  //     try {
  //       const response = await dispatch(FedExRatesApi(payload));
  //       console.log(response); // Handle response
  //     } catch (error) {
  //       console.error("Error fetching FedEx rates:", error);
  //     }
  //   };
  //   data();
  //   // }
  // }, []);

  // const [selectedOption, setSelectedOption] = useState("");
  // const [totalNetCharge, setTotalNetCharge] = useState(null) || 0; // Store totalNetCharge
  // const [selectedOptions, setSelectedOptions] = useState({
  //   seller: ""
  // });

  // const [totalNetCharges, setTotalNetCharges] = useState({
  //   seller: 0
  // });
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");
  const normalizeString = (str) =>
    str.replace(/\s+/g, " ").trim().toLowerCase();
  const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, "");

  // const handleChange = (seller, e) => {
  //   const selectedServiceType = e.target.value;
  //   setSelectedOptions((prevOptions) => ({
  //     ...prevOptions,
  //     [seller]: selectedServiceType,
  //   }));
  //   console.log("Selected service type:", selectedServiceType);
  //   console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

  //   // First condition: Check if fedexRate exists and has elements
  //   if (fedexRate && fedexRate.length > 0) {
  //     // Use filter to find all matching rate details
  //     const matchingRateDetails = fedexRate.filter((rate) => {
  //       const normalizedRateServiceType = normalizeString(
  //         removeNonPrintableChars(rate.serviceName)
  //       );
  //       const normalizedSelectedServiceType = normalizeString(
  //         removeNonPrintableChars(selectedServiceType)
  //       );

  //       console.log(
  //         "Comparing:",
  //         normalizedRateServiceType,
  //         "to",
  //         normalizedSelectedServiceType
  //       );
  //       const isMatch =
  //         normalizedRateServiceType === normalizedSelectedServiceType;
  //       console.log("Match result:", isMatch);

  //       return isMatch; // Return the match result
  //     });

  //     if (matchingRateDetails.length > 0) {
  //       // Process all matching details
  //       const netCharge = matchingRateDetails.reduce((total, rate) => {
  //         return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
  //       }, 0);
  //       setTotalNetCharges((prevCharges) => ({
  //         ...prevCharges,
  //         [seller]: netCharge,
  //       }));
  //       console.log("Total Net Charge for matching services:", netCharge);

  //       // Next condition check can go here
  //       if (netCharge > 0) {
  //         const parsedTotal = parseFloat(total); // Convert total to a number

  //         // Check if parsedTotal is a valid number
  //         if (!isNaN(parsedTotal)) {
  //           navigate(
  //             `/checkout?total=${parsedTotal.toFixed(
  //               2
  //             )}&netCharge=${netCharge.toFixed(2)}`
  //           );
  //           console.log("Valid net charge available for processing.");
  //         }
  //       } else {
  //         console.log("Net charge is zero or invalid.");
  //       }
  //     } else {
  //       console.log("No matching service type found.");
  //       setTotalNetCharges((prevCharges) => ({
  //         ...prevCharges,
  //         [seller]: null,
  //       }));
  //     }
  //   } else {
  //     console.log("fedexRate is not available or empty.");
  //     setTotalNetCharges((prevCharges) => ({
  //       ...prevCharges,
  //       [seller]: null,
  //     }));
  //   }
  // };

  const handleChange = async (seller, e, products) => {
    const selectedServiceName = e.target.value;
    console.log("productsselllll---->", products)
    // Update the selected options for the seller
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [seller]: selectedServiceName,
    }));

    console.log("Selected service name:", selectedServiceName);

    // Find the matching rate for the selected service
    const matchingRate = fedexRate.find(
      (rate) =>
        normalizeString(removeNonPrintableChars(rate.serviceName)) ===
        normalizeString(removeNonPrintableChars(selectedServiceName))
    );

    if (matchingRate) {
      const totalNetCharge =
        matchingRate?.ratedShipmentDetails[0]?.totalNetCharge || 0;

      // Update the total net charges for the seller
      setTotalNetCharges((prevCharges) => ({
        ...prevCharges,
        [seller]: totalNetCharge,
      }));

      console.log("Total Net Charge for selected service:", totalNetCharge);
      console.log("sellllllll", seller)
      // Create and send the payload
      const payload = {
        orderId: orderPlace.orderId,
        sellerId: products[0].product.sellerId,
        shipmentTypeId: 4,
        shipmentSubType: selectedServiceName, // Selected service name
        shippingCost: totalNetCharge, // Total net charge
      };

      await ShipmentChargesApi(payload)
      console.log("Payload:", payload);

      // if (totalNetCharge > 0) {
      //   navigate(
      //     `/checkout?total=${totalNetCharge.toFixed(
      //       2
      //     )}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
      //   );
      if (totalNetCharge > 0) {
        const parsedTotal = parseFloat(total);
        navigate(
          `/checkout?total=${parsedTotal.toFixed(
            2
          )}&shipmentSubType=${encodeURIComponent(selectedServiceName)}`
        );
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
  const groupedProducts = cartList.reduce((acc, item) => {
    // If productId is present, filter by productId
    if (productId) {
      if (item.product.productID === productId) {
        const seller = item.product.sellerName;
        if (!acc[seller]) acc[seller] = [];
        acc[seller].push(item);
      }
    } else {
      // Usual grouping logic
      const seller = item.product.sellerName;
      if (!acc[seller]) acc[seller] = [];
      acc[seller].push(item);
    }
    return acc;
  }, {});

  console.log("groupedProducts", groupedProducts)
  const user = useSelector((state) => state.user.user);


  // useEffect(() => {
  //   const data = async () => {
  //     const sellerIds = new Set();

  //     // Loop through the grouped products and collect unique sellerIds
  //     Object.entries(groupedProducts).forEach(([seller, products]) => {
  //       products.forEach((product) => {
  //         sellerIds.add(product.product.sellerId);  // Collect sellerId from each product
  //         console.log("selleerIsddd--> ", sellerIds)
  //       });
  //     });

  //     // Now, call the API for each unique sellerId
  //     for (const sellerId of sellerIds) {
  //       const res = await getUserByCustomerIdApi(sellerId);  // Call the API for each sellerId
  //       console.log("res---->", res)
  //       setResponseBusiness(res)
  //     }
  //   };

  //   data();
  // }, [groupedProducts]); 



  // useEffect(() => {

  //   const fetchSellerInfoAndCalculateRates = async () => {
  //     const sellerIds = new Set();

  //     // Collect unique sellerIds from grouped products
  //     Object.entries(groupedProducts).forEach(([_, products]) => {
  //       products.forEach((product) => {
  //         sellerIds.add(product.product.sellerId);
  //       });
  //     });

  //     // Loop through each sellerId, fetch their information, and set responseBusiness
  //     for (const sellerId of sellerIds) {
  //       try {
  //         const res = await getUserByCustomerIdApi(sellerId);
  //         setResponseBusiness(res);  // Store the business info of the current seller

  //         // Define payload for serviceTypeApi using responseBusiness
  //         const servicePayload = {
  //           accountNumber: {
  //             value: "235969831",
  //           },
  //           requestedShipment: {
  //             shipper: {
  //               address: {
  //                 postalCode: res.businessInfo.zip,       // Use dynamic response
  //                 countryCode: res.businessInfo.state,    // Use dynamic response
  //               },
  //             },
  //             recipient: {
  //               address: {
  //                 postalCode: "65247",
  //                 countryCode: "US",
  //               },
  //             },
  //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //             rateRequestType: ["ACCOUNT", "LIST"],
  //             requestedPackageLineItems: [
  //               {
  //                 weight: {
  //                   units: "LB",
  //                   value: 1,
  //                 },
  //               },
  //             ],
  //           },
  //         };

  //         // Call serviceTypeApi with the payload
  //         await dispatch(serviceTypeApi(servicePayload));

  //         // Define payload for FedExRatesApi using responseBusiness
  //         const ratePayload = {
  //           accountNumber: {
  //             value: "235969831",
  //           },
  //           requestedShipment: {
  //             shipper: {
  //               address: {
  //                 postalCode: res.businessInfo.zip,
  //                 countryCode: res.businessInfo.state,
  //               },
  //             },
  //             recipient: {
  //               address: {
  //                 postalCode: "65247",
  //                 countryCode: "US",
  //               },
  //             },
  //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //             rateRequestType: ["ACCOUNT", "LIST"],
  //             requestedPackageLineItems: [
  //               {
  //                 weight: {
  //                   units: "LB",
  //                   value: 1,
  //                 },
  //               },
  //             ],
  //           },
  //         };

  //         // Call FedExRatesApi with the payload
  //         const rateResponse = await dispatch(FedExRatesApi(ratePayload));
  //         console.log("FedEx Rates Response:", rateResponse);

  //       } catch (error) {
  //         console.error("Error processing seller or fetching rates:", error);
  //       }
  //     }
  //   };

  //   fetchSellerInfoAndCalculateRates();
  // }, [groupedProducts]);


  // const [responseBusiness, setResponseBusiness] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Step 1: Collect unique seller IDs from groupedProducts
  //       const sellerIds = new Set();
  //       Object.entries(groupedProducts).forEach(([_, products]) => {
  //         products.forEach((product) => {
  //           sellerIds.add(product.product.sellerId);
  //         });
  //       });

  //       // Step 2: Fetch business information for each seller
  //       const sellersInfo = [];
  //       for (const sellerId of sellerIds) {
  //         const res = await getUserByCustomerIdApi(sellerId);
  //         sellersInfo.push(res);  // Store each response
  //       }

  //       // Assuming you need the first response in the next step, we set it as `responseBusiness`
  //       setResponseBusiness(sellersInfo[0]);

  //       // Step 3: Call `serviceTypeApi` with the first seller's data
  //       const payload = {
  //         accountNumber: {
  //           value: "235969831",
  //         },
  //         requestedShipment: {
  //           shipper: {
  //             address: {
  //               postalCode: sellersInfo[0]?.businessInfo?.zip,
  //               countryCode: sellersInfo[0]?.businessInfo?.state,
  //             },
  //           },
  //           recipient: {
  //             address: {
  //               postalCode: "65247",
  //               countryCode: "US",
  //             },
  //           },
  //           pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //           rateRequestType: ["ACCOUNT", "LIST"],
  //           requestedPackageLineItems: [
  //             {
  //               weight: {
  //                 units: "LB",
  //                 value: 1,
  //               },
  //             },
  //           ],
  //         },
  //       };
  //       await dispatch(serviceTypeApi(payload));

  //       // Step 4: Call `FedExRatesApi` with the same payload
  //       const rateResponse = await dispatch(FedExRatesApi(payload));
  //       console.log("FedEx Rates Response:", rateResponse);

  //     } catch (error) {
  //       console.error("Error in data fetching process:", error);
  //     }
  //   };

  //   fetchData();  // Only runs once when component mounts
  // }, []);  // Empty dependency array means it only runs once


  // const [responseBusiness, setResponseBusiness] = useState(null);
  // console.log("ressssss", responseBusiness)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Step 1: Collect unique seller IDs from groupedProducts
  //       const sellerIds = new Set();
  //       Object.entries(groupedProducts).forEach(([_, products]) => {
  //         products.forEach((product) => {
  //           sellerIds.add(product.product.sellerId);
  //         });
  //       });

  //       // Step 2: Fetch business information for each seller and store it in an array
  //       const sellersInfo = [];
  //       for (const sellerId of sellerIds) {
  //         const res = await getUserByCustomerIdApi(sellerId);
  //         sellersInfo.push(res); // Store each response
  //       }

  //       setResponseBusiness(sellersInfo); // Store the full list of sellers in state if needed

  //       // Step 3: Iterate over each seller's info and send payload for each
  //       for (const seller of sellersInfo) { // Use `sellersInfo` directly here
  //         const payload = {
  //           accountNumber: {
  //             value: "235969831",
  //           },
  //           requestedShipment: {
  //             shipper: {
  //               address: {
  //                 postalCode: seller?.businessInfo?.zip,
  //                 countryCode: seller?.businessInfo?.state,
  //               },
  //             },
  //             recipient: {
  //               address: {
  //                 postalCode: "65247",
  //                 countryCode: "US",
  //               },
  //             },
  //             pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //             rateRequestType: ["ACCOUNT", "LIST"],
  //             requestedPackageLineItems: [
  //               {
  //                 weight: {
  //                   units: "LB",
  //                   value: 1,
  //                 },
  //               },
  //             ],
  //           },
  //         };

  //         // Send the payload with `serviceTypeApi`
  //         await dispatch(serviceTypeApi(payload));

  //         // Call `FedExRatesApi` with the same payload
  //         const rateResponse = await dispatch(FedExRatesApi(payload));
  //         console.log("FedEx Rates Response for seller", seller.sellerId, ":", rateResponse);
  //       }

  //     } catch (error) {
  //       console.error("Error in data fetching process:", error);
  //     }
  //   };

  //   fetchData(); // Only runs once when component mounts
  // }, []); // Empty dependency array means it only runs once

  // const [selectedService, setSelectedService] = useState("");
  // const handleService = () => {
  //   const payload = {
  //     orderId: "",
  //     sellerId: "string",
  //     shipmentTypeId: 4,
  //     shipmentSubType: selectedService,
  //     shippingCost: 0
  //   }
  // }
  // const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  // const [openDialog, setOpenDialog] = useState(false);
  // const [cartItems, setcartItems] = useState(cartList);
  // useEffect(() => {
  //   if (cartList) setcartItems(cartList);
  // }, [cartList]);
  // const handleDeleteClick = (index) => {
  //   setSelectedItemIndex(index);
  //   setOpenDialog(true);
  // };
  // const handleDialogClose = () => {
  //   setOpenDialog(false);
  //   setSelectedItemIndex(null);
  // };
  // const handleRemove = async () => {
  //   try {
  //     const cartId = cartItems[selectedItemIndex].cartId;
  //     await removeItemFromCartApi(cartId);
  //     handleDialogClose(); // Close dialog after deleting
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  // const handleRemove = async () => {
  //   try {
  //     const cartId = cartItems[selectedItemIndex].cartId;
  //     await removeItemFromCartApi(cartId);

  //     // Remove the item from the cart items array locally after deletion
  //     setcartItems((prevItems) => prevItems.filter((_, idx) => idx !== selectedItemIndex));

  //     // Close the dialog after removing the item
  //     handleDialogClose();
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };
  // const [sellerData, setSellerData] = useState({}); 
  // useEffect(() => {
  //   // Function to fetch seller data
  //   const fetchSellerData = async (sellerId) => {
  //     if (!sellerData[sellerId]) {
  //       const data = await getCartItemsApi(user.customerId);
  //       setSellerData((prevData) => ({
  //         ...prevData,
  //         [sellerId]: data, // Store fetched data by sellerId
  //       }));
  //     }
  //   };

  //   // Loop over all products and fetch seller data for each seller
  //   Object.entries(groupedProducts).forEach(([seller, products]) => {
  //     fetchSellerData(seller);
  //   });
  // }, [groupedProducts]); 

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
  
  
  return (
    <div className="w-full h-full  p-4 ">
      {/* <Dialog open={openDialog} onClose={handleDialogClose}>
        <div className="flex  justify-end p-2">
          <img
            onClick={handleDialogClose}
            src={wrong}
            className="w-5 h-5 cursor-pointer flex justify-end"
          />
        </div>
        <DialogContent>
          Are you sure you want to delete this item from your cart?
        </DialogContent>
        <div>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={handleDialogClose}
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": { backgroundColor: "#cc0000" },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleRemove}
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "#006400" },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </div>
      </Dialog> */}
      <h1 className="text-xl font-semibold text-orange-400">
        2. Select shipment
      </h1>
      <div className="flex w-full">
        <div className="w-[70%]">
          {Object.entries(groupedProducts).map(([seller, products]) => (
            <div key={seller}>
              <h2 className="font-bold text-lg mt-4">Seller: {seller}</h2>

              <div className="border p-4 my-4 rounded-md shadow-lg bg-white">
                <table className="min-w-full border shadow-md rounded-lg">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="px-2 md:px-3 text-base text-left font-semibold text-blue-950 tracking-wider">
                        Seller Name
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Image
                      </th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
                        Product name
                      </th>
                      <th className="px-2 md:px-3 text-left font-semibold text-blue-950 tracking-wider">
                        Price
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Quantity
                      </th>
                      <th className="px-2 md:px-3  text-left font-semibold text-blue-950 tracking-wider">
                        Subtotal
                      </th>
                      {/* <th className="px-2 md:px-3 py-1 text-left font-semibold text-blue-950 tracking-wider">
                        Action
                      </th> */}
                    </tr>
                  </thead>
                  {products.map((tabledetail) => {
                    useEffect(() => {
                      const fetchSellerData = async () => {
                        await getUserByCustomerIdApi(tabledetail.product.sellerId); // Send sellerId for each product
                      };
                      fetchSellerData();
                    }, [tabledetail.product.sellerId]);
                    return (
                      <tbody key={tabledetail.product.id}>
                        <tr className="text-sm">
                          <td className="text-center">
                            {tabledetail.product.sellerName}
                            {/* {tabledetail.product.sellerId} */}
                          </td>
                          <td>
                            <img
                              className="h-16 w-16 rounded-lg"
                              src={tabledetail.product.imageUrl}
                              alt={tabledetail.product.id}
                            />
                          </td>
                          <td className="px-2 md:px-4 py-2 p-2 flex flex-wrap">
                            {tabledetail.product.productName}
                          </td>

                          {/* <td className="md:px-4 py-3 text-center">
                        $
                        {(() => {
                          const currentDate = new Date();
                          const saleStartDate = new Date(
                            tabledetail.product?.salePriceValidFrom
                          );
                          const saleEndDate = new Date(
                            tabledetail.product?.salePriceValidTo
                          );

                          // Check if salePrice exists, and the current date is within the sale period
                          if (
                            tabledetail.product?.salePrice > 0 &&
                            currentDate >= saleStartDate &&
                            currentDate <= saleEndDate
                          ) {
                            return tabledetail.product.salePrice.toFixed(2);
                          } else {
                            return tabledetail.product.unitPrice?.toFixed(2);
                          }
                        })()}
                      </td> */}
                          <td className="md:px-4 py-3 text-center">
                            $
                            {(() => {
                              const currentDate = new Date();
                              const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
                              const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

                              // Check if the user is a UPN member and has a special price
                              if (user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0) {
                                return tabledetail.product.upnMemberPrice.toFixed(2);
                              }

                              // Check if salePrice exists, and the current date is within the sale period
                              if (
                                tabledetail.product?.salePrice > 0 &&
                                currentDate >= saleStartDate &&
                                currentDate <= saleEndDate
                              ) {
                                return tabledetail.product.salePrice.toFixed(2);
                              }

                              // Default to unitPrice
                              return tabledetail.product.unitPrice?.toFixed(2);
                            })()}
                          </td>
                          <td className="text-center">{tabledetail.quantity}</td>

                          {/* <td className="px-2 md:px-4 text-right py-3">
                        <strong>
                          $
                          {(() => {
                            const currentDate = new Date();
                            const saleStartDate = new Date(
                              tabledetail.product?.salePriceValidFrom
                            );
                            const saleEndDate = new Date(
                              tabledetail.product?.salePriceValidTo
                            );

                            const price =
                            tabledetail.product?.salePrice > 0 &&
                              currentDate >= saleStartDate &&
                              currentDate <= saleEndDate
                                ? tabledetail.product.salePrice
                                : tabledetail.product.unitPrice;

                            return calculateSubtotal(
                              price,
                              tabledetail.quantity
                            )?.toFixed(2);
                          })()}
                        </strong>
                      </td> */}
                          <td className="px-2 md:px-4 text-right py-3">
                            <strong>
                              $
                              {(() => {
                                const currentDate = new Date();
                                const saleStartDate = new Date(tabledetail.product?.salePriceValidFrom);
                                const saleEndDate = new Date(tabledetail.product?.salePriceValidTo);

                                // Determine the price based on UPN membership and sale conditions
                                const price =
                                  user?.isUPNMember === 1 && tabledetail.product?.upnMemberPrice > 0
                                    ? tabledetail.product.upnMemberPrice
                                    : tabledetail.product?.salePrice > 0 &&
                                      currentDate >= saleStartDate &&
                                      currentDate <= saleEndDate
                                      ? tabledetail.product.salePrice
                                      : tabledetail.product.unitPrice;

                                // Calculate the subtotal based on the selected price and quantity
                                return calculateSubtotal(price, tabledetail.quantity)?.toFixed(2);
                              })()}
                            </strong>
                          </td>

                          {/* <td className="text-center">
                            {" "}
                            <button
                              className="text-red-600 w-4 h-3"
                              // onClick={() => handleremove(index)}
                              onClick={() => handleDeleteClick(index)}
                            >
                              <Tooltip placement="top" title="Delete">
                                <img
                                  src={deleteicon}
                                  className="w-6"
                                  alt="delete-icon"
                                />
                              </Tooltip>
                            </button>
                          </td> */}
                        </tr>
                      </tbody>
                    )
                  })}
                </table>

                {/* Check if any product has a shipping cost */}
                {products
                  .filter((product) => product.product.isShippingCostApplicable === false)
                  .length > 0 && (
                    <div className="h-auto p-3 border flex rounded-md mt-3">
                      <h1 className="text-base font-semibold text-blue-900">Shipment:</h1>
                      <div className="mx-5">
                        <select
                          id="delivery-options"
                          value={selectedOptions[seller] || ""}
                          onChange={(e) => handleChange(seller, e, products)}
                          className="bg-gray-100 border p-1 rounded-md"
                        >
                          <option value="" disabled>
                            {selectedOptions[seller]
                              ? "Please choose a delivery option"
                              : "Select an option"}
                          </option>
                          <optgroup label="Delivery options">
                            {serviceName.map((item) => {
                              const matchingRate = fedexRate.find(
                                (fed) =>
                                  normalizeString(removeNonPrintableChars(fed.serviceName)) ===
                                  normalizeString(removeNonPrintableChars(item.serviceName))
                              );

                              return (
                                <option key={item.serviceType} value={item.serviceName}>
                                  {item.serviceName} $
                                  {matchingRate
                                    ? `(${matchingRate.ratedShipmentDetails[0].totalNetCharge})`
                                    : ""}
                                </option>
                              );
                            })}
                          </optgroup>
                        </select>
                      </div>

                      <div className="mb-4">
                        <TextField
                          label="amount"
                          size="small"
                          className="w-40 rounded-md h-4 border"
                          value={(totalNetCharges[seller] || 0).toFixed(2)}
                          onChange={(e) =>
                            setAmount(parseFloat(e.target.value) || 0)
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">$</InputAdornment>
                            ),
                          }}
                        />
                        {selectedOptions[seller] && (
                          <button
                            onClick={() => handleResetDropdown(seller)}
                            className="ml-2 text-white bg-blue-900 border py-1 px-2 rounded-lg text-lg hover:text-red-700"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    </div>
                  )}



              </div>
              {/* // ))} */}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-4"></div>
      </div>
    </div>
  );
};

export default ProccedtoShipment;

