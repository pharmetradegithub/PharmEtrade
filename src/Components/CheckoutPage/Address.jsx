
// import React, { useState, useEffect } from "react";
// import {
//   Link,
//   Navigate,
//   useNavigate,
//   useParams,
//   useSearchParams,
// } from "react-router-dom";
// import cross from "../../assets/letter-x[1].png";
// import plus from "../../assets/Icons/plus[1].png";
// import logo from "../../assets/logo2.png";
// import payment from "../../assets/Icons/paymenticons.png";
// import dropdown from "../../assets/Icons/dropDownb.png";
// import { Box, TextField, Tooltip } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductByIdApi } from "../../Api/ProductApi";
// import Payment from "./Payment";
// import { FaLock } from "react-icons/fa";
// import ItemsAndDelivery from "./ItemsAndDelivery";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Notification from "../Notification";
// import { useStates } from "react-us-states";
// import { fetchGetOrder, orderGetByIdApi } from "../../Api/OrderApi";
// import Remove from "../../assets/trash.png";
// import Bin from "../../assets/Bin.png";
// import edit from "../../assets/Edit.png";
// import axios from "axios";
// import wrong from "../../assets/Icons/wrongred.png";
// import { fetchAddAddress, fetchDeleteAddressApi, fetchEditAddress, fetchGetByCustomerId, orderDeliveryAddress, SetDefaultApi } from "../../Api/AddressApi";
// import { FedExRatesApi, serviceTypeApi } from "../../Api/TrackApi";
// // import { setAddress } from "../../Store/Store";
// import Proccedtoshipment from '../ProccedtoShipment'
// import SquarePaymentForm from "../SquarePaymentForm";
// import { getUserByCustomerIdApi } from "../../Api/UserApi";
// function Address({ topMargin, totalAmount, amount }) {
//   const dispatch = useDispatch()
//   const applicationId = 'sandbox-sq0idb-vXdVdM6tMjTG6Zi2XCoE-A';
//   const locationId = 'L0599WY5GGG3W';
//   // const Payment_Amnount = 500;
//   const handlePaymentSuccess = async(token, amount) => {
//     console.log("Payment Successful, Token:", token);
//     console.log("Payment Successful, amount:", amount);

//     const payload = {
//       sourceId: token,
//       amount: Math.floor(amount),
//       currency: "USD",
//       note: "Payment for ORD763847827"
//     }
//     await paymentProcessApi(payload)

//   };

//   const handlePaymentError = (error) => {
//     console.error("Payment Error:", error);
//   };

//   const [selectedOptions, setSelectedOptions] = useState({
//     seller: ""
//   });

//   const [totalNetCharges, setTotalNetCharges] = useState({
//     seller: 0
//   });


//   // const fetchData = useSelector((state) => state.product.Products);
//   const [searchParams] = useSearchParams();
//   const total = parseFloat(searchParams.get("total")); // Convert total to a number
//   const netCharge = parseFloat(searchParams.get("netCharge")) || 0;
//   console.log("netAddress-->", netCharge)

//   console.log("total-->", total);

//   // Check if netCharge and total are valid numbers
//   const validNetCharge = !isNaN(netCharge) && netCharge !== null ? netCharge : 0.00;
//   const validTotal = !isNaN(total) && total !== null ? total : 0.00;
//   // const netCharge = searchParams.get("netCharge")
//   const [deletePop, setDeletePop] = useState(false);
//   const [deleteProduct, setDeleteProduct] = useState(null);
//   const placeOrder = useSelector((state) => state.order.orderPlace)
//   console.log("placeeeeeeeeeeeeeee", placeOrder)
//   const cartList = useSelector((state) => state.cart.cart);
//   console.log("addresss cart details", cartList)
//   // console.log("ffffffff--->", totalAmount)
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedAddressId, setSelectedAddressId] = useState(null);

//   const getAddress = useSelector((state) => state.address.customerId);
//   const businessInfo = useSelector((state) => state.user.businessInfo);
//   console.log("businessInfo-->address", businessInfo);
//   const user = useSelector((state) => state.user.user);
//   console.log("user-->address", user);
//   console.log("addressdataaaaaa", getAddress);


//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     townCity: "",
//     stateCountry: "",
//     postalCode: "",
//     email: "",
//     phone: "",
//     Bussiness_phone: "",
//   });

//   const [isTotalHidden, setIsTotalHidden] = useState(false);
//   const handleOpenAddress = () => {
//     // Navigate("/address");
//     setIsTotalHidden(false);
//   };
//   const [showError, setShowError] = useState(false);

//   const [pincodes, setPincodes] = useState(null)
//   const [stateAdd, setStateAdd] = useState(null)
//   const [res, setRes] = useState([]);

//   const [response, setResponse] = useState(null)
//   useEffect(() => {
//     const data = async () => {
//       const res = await SetDefaultApi(user.customerId, selectedAddressId)
//       console.log("resSetDefault--->", res)
//       setResponse(res)
//     }
//     data()
//   }, [selectedAddressId])


//   // useEffect(() => {
//   //   const fetchSellers = async () => {
//   //     for (const product of cartList) {
//   //       try {
//   //         const response = await getUserByCustomerIdApi(product.product.sellerId);
//   //         // Do something with the response
//   //         setRes(response)
//   //         console.log("resss", response)
//   //         console.log(`Response for seller ${product.sellerId}:`, res);
//   //       } catch (error) {
//   //         console.error(`Error fetching seller ${product.sellerId}:`, error);
//   //       }
//   //     }
//   //   };

//   //   if (cartList?.length > 0) {
//   //     fetchSellers();
//   //   }
//   // }, []);
//   // useEffect(() => {
//   //   const fetchSellersAndSendPayload = async () => {
//   //     for (const product of cartList) {
//   //       try {
//   //         // Fetch seller data first
//   //         const sellerData = await getUserByCustomerIdApi(product.product.sellerId);

//   //         if (sellerData) {
//   //           console.log("Seller data:", sellerData.businessInfo.zip);

//   //           // Prepare payload based on seller data and product details
//   //           const payload = {
//   //             accountNumber: {
//   //               value: "235969831"
//   //             },
//   //             requestedShipment: {
//   //               shipper: {
//   //                 address: {
//   //                   postalCode: sellerData.businessInfo.zip,  // Shipper's postal code
//   //                   countryCode: "US"
//   //                 }
//   //               },
//   //               recipient: {
//   //                 address: {
//   //                   postalCode: pincodes,  // Use the pincode from seller data
//   //                   countryCode: 'US'
//   //                 }
//   //               },
//   //               pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //               rateRequestType: ["ACCOUNT", "LIST"],
//   //               requestedPackageLineItems: [
//   //                 {
//   //                   weight: {
//   //                     units: "LB",
//   //                     value: 1  // Example weight, adjust as needed
//   //                   }
//   //                 }
//   //               ]
//   //             }
//   //           };

//   //           // Dispatch the action with the payload
//   //           const response = await dispatch(serviceTypeApi(payload));
//   //           const responses = await dispatch(FedExRatesApi(payload));
//   //           console.log("Response for seller:", product.product.sellerId, response);
//   //         } else {
//   //           console.warn("No seller data found for sellerId:", product.product.sellerId);
//   //         }
//   //       } catch (error) {
//   //         console.error(`Error processing seller ${product.product.sellerId}:`, error);
//   //       }
//   //     }
//   //   };

//   //   if (cartList?.length > 0) {
//   //     fetchSellersAndSendPayload();  // Call the function to fetch and send payloads
//   //   }
//   // }, [cartList, dispatch, stateAdd, pincodes]);///itt gooooood

// console.log("pincode---->", pincodes)
//   useEffect(() => {
//     const fetchSellersAndSendPayload = async () => {
//       try {
//         // Map over cartList to fetch seller data and prepare payloads concurrently
//         const sellerPromises = cartList.map(async (product) => {
//           // Fetch seller data first
//           const sellerData = await getUserByCustomerIdApi(product.product.sellerId);

//           if (sellerData) {
//             console.log("Seller data:", sellerData); // Log the entire seller data to inspect the structure

//             // Ensure the postal code exists in sellerData
//             // const postalCode = sellerData.businessInfo?.zip;
//             // if (!postalCode) {
//             //   console.warn(`Postal code not found for seller ${product.product.sellerId}`);
//             //   return null;  // Skip if postal code is missing
//             // }

//             // Prepare payload based on seller data and product details
//             const payload = {
//               accountNumber: {
//                 value: "235969831"
//               },
//               requestedShipment: {
//                 shipper: {
//                   address: {
//                     postalCode: sellerData.businessInfo.zip,  // Shipper's postal code from sellerData
//                     countryCode: "US"
//                   }
//                 },
//                 recipient: {
//                   address: {
//                     postalCode: pincodes,  // Use the pincode from the selected address or state
//                     countryCode: 'US'
//                   }
//                 },
//                 pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//                 rateRequestType: ["ACCOUNT", "LIST"],
//                 requestedPackageLineItems: [
//                   {
//                     weight: {
//                       units: "LB",
//                       value: 1  // Example weight, adjust as needed
//                     }
//                   }
//                 ]
//               }
//             };

//             // Dispatch the action with the payloads for each product
//             const serviceResponse = await dispatch(serviceTypeApi(payload));
//             const rateResponse = await dispatch(FedExRatesApi(payload));

//             console.log(`Responses for seller ${product.product.sellerId}:`, {
//               serviceResponse,
//               rateResponse,
//             });

//             return { product: product.product.sellerId, serviceResponse, rateResponse };
//           } else {
//             console.warn("No seller data found for sellerId:", product.product.sellerId);
//             return null;
//           }
//         });

//         // Wait for all promises to resolve concurrently
//         const allResponses = await Promise.all(sellerPromises);

//         // Filter out any null responses (in case no seller data was found)
//         const successfulResponses = allResponses.filter((response) => response !== null);

//         console.log("All successful responses:", successfulResponses);
//       } catch (error) {
//         console.error("Error processing sellers:", error);
//       }
//     };

//     // Ensure cartList has items before triggering the fetch
//     if (cartList?.length > 0) {
//       fetchSellersAndSendPayload();  // Call the function to fetch and send payloads concurrently
//     }
//   }, [cartList, pincodes]);
//   // console.log(res, "Resolved results--->");

//   // Function to handle the "Use this address" button click
//   const handleUseAddress = async (state, pincode) => {
//     setPincodes(pincode)
//     setStateAdd(state)
//     // setIsTotalHidden(true);
//     await dispatch(orderDeliveryAddress(placeOrder.customerId, placeOrder.orderId, selectedAddressId))


//     // const payload = {
//     //   accountNumber: {
//     //     value: "235969831"
//     //   },
//     //   requestedShipment: {
//     //     shipper: {
//     //       address: {
//     //         postalCode: businessInfo.zip,
//     //         countryCode:"US"
//     //       }
//     //     },
//     //     recipient: {
//     //       address: {
//     //         postalCode: pincode,
//     //         countryCode: 'US'
//     //       }
//     //     },
//     //     pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//     //       rateRequestType: [
//     //         "ACCOUNT",
//     //         "LIST"
//     //       ],
//     //         requestedPackageLineItems: [
//     //           {
//     //             weight: {
//     //               units: "LB",
//     //               value: 1
//     //             }
//     //           }
//     //         ]

//     // }

//     // }
//     // await dispatch(serviceTypeApi(payload))
//     // if (selectedAddressId) {
//     //   // Logic to handle using the selected address
//     //   console.log(`Using address with ID: ${selectedAddressId}`);
//     //   // You can add your navigation logic here
//     // } else {
//     //   setShowError(true); // Show error if no address is selected
//     // }
//   };

//   // useEffect(() => {
//   //   const payload = {
//   //     accountNumber: {
//   //       value: "235969831"
//   //     },
//   //     requestedShipment: {
//   //       shipper: {
//   //         address: {
//   //           postalCode: businessInfo.zip,
//   //           countryCode: businessInfo.state
//   //         }
//   //       },
//   //       recipient: {
//   //         address: {
//   //           postalCode: pincodes,
//   //           countryCode: stateAdd
//   //         }
//   //       },
//   //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //       rateRequestType: [
//   //         "ACCOUNT",
//   //         "LIST"
//   //       ],
//   //       requestedPackageLineItems: [
//   //         {
//   //           weight: {
//   //             units: "LB",
//   //             value: 1
//   //           }
//   //         }
//   //       ]
//   //     }
//   //   }

//   //   const data = async () => {
//   //     try {
//   //       const response = await dispatch(FedExRatesApi(payload));
//   //       // Handle response
//   //       console.log(response);
//   //     } catch (error) {
//   //       console.error('Error fetching FedEx rates:', error);
//   //     }
//   //   }
//   //   data();
//   // }, [pincodes, stateAdd]);

//   // useEffect(() => {
//   //   if (pincodes && stateAdd) { // Ensure they are set before making the call
//   //     const payload = {
//   //       accountNumber: {
//   //         value: "235969831"
//   //       },
//   //       requestedShipment: {
//   //         shipper: {
//   //           address: {
//   //             postalCode: businessInfo.zip,
//   //             countryCode: "US"
//   //           }
//   //         },
//   //         recipient: {
//   //           address: {
//   //             postalCode: pincodes,
//   //             countryCode: "US"
//   //           }
//   //         },
//   //         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
//   //         rateRequestType: ["ACCOUNT", "LIST"],
//   //         requestedPackageLineItems: [
//   //           {
//   //             weight: {
//   //               units: "LB",
//   //               value: 1
//   //             }
//   //           }
//   //         ]
//   //       }
//   //     };

//   //     const data = async () => {
//   //       try {
//   //         const response = await dispatch(FedExRatesApi(payload));
//   //         console.log(response); // Handle response
//   //       } catch (error) {
//   //         console.error('Error fetching FedEx rates:', error);
//   //       }
//   //     };
//   //     data();
//   //   }
//   // }, [pincodes, stateAdd]);

//   useEffect(() => {
//     dispatch(orderGetByIdApi(placeOrder.orderId))
//   }, [placeOrder])

//   // const [formErrors, setFormErrors] = useState({});

//   const [showWeekendOptions, setShowWeekendOptions] = useState(false);
//   const [showInstructions, setShowInstructions] = useState(false);
//   const details = [
//     {
//       name: "Ram",
//       // lastname: "Smith",
//       Address: "Dollars",
//       City: "Dollars",
//       States: "Dollars",
//       Country: "US",
//       Pin: 56789,
//       email: "ram@example.com",
//       phone: "+1234567890",
//     },
//   ];
//   const [formErrors, setFormErrors] = useState({
//     First_Name: "",
//     Last_Name: "",
//     Address: "",
//     Phone_Number: "",
//     Town_City: "",
//     Pin_Code: "",
//     Bussiness_phone: "",
//   });

//   const formatPhoneNumber = (phoneNumber) => {
//     // Remove non-digit characters
//     phoneNumber = phoneNumber.replace(/\D/g, "");

//     // Format as 3-3-4
//     let formattedPhoneNumber = "";
//     for (let i = 0; i < phoneNumber.length; i++) {
//       if (i === 3 || i === 6) {
//         formattedPhoneNumber += "-";
//       }
//       formattedPhoneNumber += phoneNumber[i];
//     }
//     return formattedPhoneNumber;
//   };



//   useEffect(() => {
//     dispatch(fetchGetOrder(user?.customerId));
//   }, [user]);

//   useEffect(() => {
//     if (shortPopup) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   });
//   // add new address popup
//   const [showPopUp, setShowPopUp] = useState(false);
//   // edit address popup
//   const [isShowPopUp, setIsShowPopUp] = useState(false);

//   const [shortPopup, setShortPopup] = useState(false);
//   const [isShortPopup, setIsShortPopup] = useState(false);
//   const [selectedAddressType, setSelectedAddressType] = useState("");
//   const [iscardEmiopen, SetIsCardEmiOpen] = useState(false);

//   const handleRemove = () => setShowPopUp(false);
//   const handleshortpopOpen = () => setShortPopup(!shortPopup);

//   const handleAddressTypeClick = (type) => {
//     setSelectedAddressType(type);
//   };

//   const handlepopOpen = () => {
//     document.body.style.overflow = "hidden"; // Disable scrolling
//     setNewAddressForm({
//       First_Name: "",
//       Last_Name: "",
//       Phone_Number: "",
//       Pin_Code: "",
//       Address: "",
//       Town_City: "",
//       States: "",
//     });
//     setShowPopUp(true);
//   };

//   const handleCardemiOpen = () => {
//     SetIsCardEmiOpen(true);
//   };

//   const handleCardemiremove = () => {
//     SetIsCardEmiOpen(false);
//   };

//   const handleAddaddress = () => {
//     setShortPopup(true);
//   };
//   const handleAddaddressremove = () => {
//     setShortPopup(false);
//   };

//   const handleUseAddressbutton = () => {
//     const errors = {};

//     // Check for empty required fields and set error messages
//     if (!document.getElementById("First_Name").value) {
//       errors.First_Name = "First Name is required";
//     }
//     if (!document.getElementById("Phone_Number").value) {
//       errors.Phone_Number = "Phone Number is required";
//     }
//     if (!document.getElementById("Pin_Code").value) {
//       errors.Pin_Code = "Pin Code is required";
//     }
//     if (!document.getElementById("Address").value) {
//       errors.Address = "Address is required";
//     }
//     if (!document.getElementById("Bussiness_phone").value) {
//       errors.Bussiness_phone = "Bussiness_phone is required";
//     }
//     if (!document.getElementById("States").value) {
//       errors.States = "States is required";
//     }
//     if (!document.getElementById("Town_City").value) {
//       errors.Town_City = "Town_City is required";
//     }

//     setFormErrors(errors);

//     // If no errors, proceed with using the address
//     if (Object.keys(errors).length === 0) {
//       // Handle the logic for using the address
//       alert("Address used successfully!");
//     }
//   };
//   const navigate = useNavigate();

//   const userId = localStorage.getItem("userId");

//   const [showpagepopup, setShowpagepopup] = useState(false);

//   const handleNavigate = () => {
//     setShowpagepopup(true);
//   };

//   const handleStayInCheckout = () => {
//     // Handle action when "Stay in Checkout" is clicked
//     setShowpagepopup(false);
//     // Add your logic here
//   };

//   const handleReturnToCart = () => {
//     // Handle action when "Return to Cart" is clicked
//     // setShowpagepopup(false);
//     // Add your logic here
//     navigate("/cart");
//   };

//   const handleDeliveryInstruction = () => {
//     setIsShortPopup(true);
//   };
//   const handledeliveryremove = () => {
//     setIsShortPopup(false);
//   };

//   const [addressForm, setAddressForm] = useState({
//     First_Name: "",
//     Last_Name: "",
//     Phone_Number: "",
//     Pin_Code: "",
//     Address: "",
//     Bussiness_phone: "",
//     States: "",
//     Town_City: "",

//   });

//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });


//   const handleEditAddress = async (addressId, item) => {
//     // Assuming you want to edit the first address (index 0)

//     // Populate the form with the selected address
//     setAddressForm({
//       First_Name: item.firstName,
//       Last_Name: item.lastName,
//       Phone_Number: item.phoneNumber,
//       Town_City: item.city,
//       Pin_Code: item.pincode,
//       States: item.state,
//       Address: item.address1,
//       // Bussiness_phone: selectedAddress.Bussiness_phone,
//     });

//     setSelectedAddressId(addressId);
//     // Show the popup with the pre-filled address
//     setIsShowPopUp(true);

//     // try {
//     //   const response = await fetch(
//     //     `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
//     //     {
//     //       method: "GET",
//     //     }
//     //   );

//     //   if (!response.ok) {
//     //     const errorDetails = await response.json();
//     //     throw new Error(
//     //       `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
//     //         errorDetails
//     //       )}`
//     //     );
//     //   }

//     //   const result = await response.json();
//     //   // setProductData(result.result[0]);
//     //   console.log("getnewForm-->", result.result);
//     //   // setGetAddress(result.result[0])
//     // } catch (error) {
//     //   console.error("There was a problem with the fetch operation:", error);
//     //   throw error;
//     // }
//   };

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setAddressForm((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Phone number formatting (777-777-7777)
//     if (name === "Phone_Number") {
//       const formattedPhone = formatPhoneNumber(value);
//       setAddressForm((prev) => ({
//         ...prev,
//         [name]: formattedPhone,
//       }));
//     } else {
//       setAddressForm((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };


//   const validateForm = () => {
//     const errors = {};

//     if (!addressForm.First_Name.trim()) {
//       errors.First_Name = "First name is required";
//     }
//     if (!addressForm.Last_Name.trim()) {
//       errors.Last_Name = "Last name is required";
//     }
//     if (!addressForm.Address.trim()) {
//       errors.Address = "Address is required";
//     }
//     if (!addressForm.Town_City.trim()) {
//       errors.Town_City = "City is required";
//     }
//     if (!/^\d{5}$/.test(addressForm.Pin_Code)) {
//       errors.Pin_Code = "Zip code must be required";
//     }
//     // if (!/^\d{3}-\d{3}-\d{4}$/.test(addressForm.Phone_Number)) {
//     //   errors.Phone_Number = "Phone number must be in 777-777-7777 format";
//     // }
//     if (!addressForm.States) {
//       errors.States = "State is required";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };



//   const handleSaveAddress = async (e) => {
//     // Implement save address functionality here
//     // e.preventDefault();

//     if (!validateForm()) {
//       return; // Stop if validation fails
//     }
//     console.log("Address saved:", addressForm);
//     e.preventDefault();
//     console.log("saveee--->", addressForm);
//     const payload = {
//       addressId: selectedAddressId, // If `selectedAddressId` is present, it means we're editing
//       customerId: userId,
//       firstName: addressForm.First_Name,
//       middleName: null,
//       lastName: addressForm.Last_Name,
//       phoneNumber: addressForm.Phone_Number,
//       pincode: addressForm.Pin_Code,
//       address1: addressForm.Address,
//       address2: null,
//       landmark: "",
//       city: addressForm.Town_City,
//       state: addressForm.States,
//       // state: selectedState ? selectedState.name : "", 
//       country: null,
//       isDefault: true,
//       addressTypeId: 1,
//       deliveryInstructions: null,
//     };

//     // try {
//       // If selectedAddressId is present, update the address, otherwise add a new one
//       // const apiUrl = selectedAddressId
//       //   ? `http://your-api-url.com/api/Customer/Address/Update/${selectedAddressId}`
//       //   : 'http://your-api-url.com/api/Customer/Address/Add';

//       // const method = selectedAddressId ? 'PUT' : 'POST';

//       // const response = await fetch(
//       //   "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Edit",
//       //   {
//       //     method: "POST",
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //     body: JSON.stringify(payload),
//       //   }
//       // );

//       // if (!response.ok) {
//       //   throw new Error(
//       //     `Failed to ${selectedAddressId ? "update" : "add"} address`
//       //   );
//       // }

//       // const responseData = await response.json();
//       // if (responseData.result && responseData.result.length > 0) {
//       //   const newAddress = responseData.result[0];
//       //   if (newAddress && newAddress.addressId) {
//       //     setNewAddressData(newAddress); // Save the new address object to state
//       //     fetchCustomerById();
//       //     setIsShowPopUp(false);
//       //     setNotification({
//       //       show: true,
//       //       message: "Edit Successfully!",
//       //     });
//       //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//       //   } else {
//       //     console.warn("Address data is missing addressId:", newAddress);
//       //     setIsShowPopUp(false);
//       //   }
//       // } else {
//       //   console.warn("No address data found in response");
//       //   setIsShowPopUp(false); // Close the popup after saving
//     // }
//     try {
//       await dispatch(fetchEditAddress(payload))
//           fetchCustomerById();
//           setIsShowPopUp(false);
//           setNotification({
//             show: true,
//             message: "Edit Successfully!",
//           });
//           setTimeout(() => setNotification({ show: false, message: "" }), 3000);

//     } catch (error) {
//       console.error("Error adding address:", error);
//       setIsShowPopUp(false);
//     }
//   };
//   const [newAddressForm, setNewAddressForm] = useState({
//     First_Name: "",
//     Last_Name: "",
//     Phone_Number: "",
//     Pin_Code: "",
//     Address: "",
//     Town_City: "",
//     States: "",
//   });

//   const handleChangeForm = (e) => {
//     const { name, value } = e.target;
//     setNewAddressForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const addAddress = useSelector((state) => state.address.address);
//   console.log("addd-->", addAddress);
//   const [newAddressData, setNewAddressData] = useState([]);

//   // const [getAddress, setGetAddress] = useState(getCustomer);

//   // useEffect(() => {
//   //   if (newAddressData && newAddressData.addressId) {
//   //     console.log("Fetching address details for ID:", newAddressData.addressId);
//   //     fetchGetFormData(newAddressData.addressId);
//   //   } else {
//   //     console.warn("newAddressData is missing or addressId is undefined");
//   //   }
//   // }, [newAddressData]);

//   // const fetchGetFormData = async (addressId) => {
//   //   // console.log("ressss-->",responseData)
//   //   try {
//   //     const response = await fetch(
//   //       `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
//   //       {
//   //         method: "GET",
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       const errorDetails = await response.json();
//   //       throw new Error(
//   //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
//   //           errorDetails
//   //         )}`
//   //       );
//   //     }

//   //     const result = await response.json();
//   //     // setProductData(result.result[0]);
//   //     console.log("getnewForm-->", result.result);
//   //     setGetAddress(result.result);
//   //   } catch (error) {
//   //     console.error("There was a problem with the fetch operation:", error);
//   //     throw error;
//   //   }
//   // };

//   // const handleSubmitForm = async (e) => {
//   //   e.preventDefault();

//   //   const payLaodNewForm = {
//   //     addressId: "0",
//   //     customerId: userId,
//   //     firstName: newAddressForm.First_Name,
//   //     middleName: null,
//   //     lastName: null,
//   //     phoneNumber: newAddressForm.Phone_Number,
//   //     pincode: newAddressForm.Pin_Code,
//   //     address1: newAddressForm.Address,
//   //     address2: null,
//   //     landmark: "",
//   //     city: newAddressForm.Town_City,
//   //     state: newAddressForm.States,
//   //     country: null,
//   //     isDefault: true,
//   //     addressTypeId: 1,
//   //     deliveryInstructions: null,
//   //   };

//   //   try {
//   //     const response = await fetch(
//   //       "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           // 'Authorization': `Bearer ${localStorage.getItem('token')}`
//   //         },
//   //         body: JSON.stringify(payLaodNewForm),
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error("Failed to add address");
//   //     }

//   //     const responseData = await response.json();
//   //     if (responseData.result && responseData.result.length > 0) {
//   //       const newAddress = responseData.result[0];
//   //       if (newAddress && newAddress.addressId) {
//   //         setNewAddressData(newAddress); // Save the new address object to state
//   //         fetchCustomerById();
//   //         setShowPopUp(false);
//   //         setNotification({
//   //           show: true,
//   //           message: "Add new address Successfully!",
//   //         });
//   //         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   //       } else {
//   //         console.warn("Address data is missing addressId:", newAddress);
//   //         setShowPopUp(false);
//   //       }
//   //     } else {
//   //       console.warn("No address data found in response");
//   //       setShowPopUp(false);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error adding address:", error);
//   //     setShowPopUp(false);
//   //   }
//   // };

//   // useEffect(() => {

//   //   const handleSubmitForm = async (e) => {
//   //     e.preventDefault();

//   //     // Validation logic
//   //     const errors = {};

//   //     if (!newAddressForm.First_Name) {
//   //       errors.First_Name = "First Name is required";
//   //     }
//   //     if (!newAddressForm.Last_Name) {
//   //       errors.Last_Name = "Last Name is required";
//   //     }

//   //     if (!newAddressForm.Phone_Number) {
//   //       errors.Phone_Number = "Phone Number is required";
//   //     } else if (newAddressForm.Phone_Number.length !== 10 || isNaN(newAddressForm.Phone_Number)) {
//   //       errors.Phone_Number = "Phone Number must be 10 digits";
//   //     }
//   //     // if (!newAddressForm.Phone_Number || newAddressForm.Phone_Number.length < 10) {
//   //     //   errors.Phone_Number = "Phone number is required and must be 10 digits";
//   //     // }
//   //     if (!newAddressForm.Address) {
//   //       errors.Address = "Address is required";
//   //     }
//   //     if (!newAddressForm.Town_City) {
//   //       errors.Town_City = "City is required";
//   //     }
//   //      // State Validation
//   // if (!newAddressForm.States) {
//   //   errors.States = "State is required";
//   // }
//   //     // if (!newAddressForm.States) {
//   //     //   errors.States = "State is required";
//   //     // }
//   //     if (!newAddressForm.Pin_Code) {
//   //       errors.Pin_Code = "Zip/Pin Code is required";
//   //     } else if (isNaN(newAddressForm.Pin_Code) || newAddressForm.Pin_Code.length !== 6) {
//   //       errors.Pin_Code = "Zip/Pin Code must be 6 digits";
//   //     }

//   //     setFormErrors(errors); // Update the state with validation errors

//   //     // If there are errors, stop form submission
//   //     if (Object.keys(errors).length > 0) {
//   //       return;
//   //     }

//   //     const payLaodNewForm = {
//   //       addressId: "0",
//   //       customerId: userId,
//   //       firstName: newAddressForm.First_Name,
//   //       middleName: null,
//   //       lastName: newAddressForm.Last_Name,
//   //       phoneNumber: newAddressForm.Phone_Number,
//   //       pincode: newAddressForm.Pin_Code,
//   //       address1: newAddressForm.Address,
//   //       address2: null,
//   //       landmark: "",
//   //       city: newAddressForm.Town_City,
//   //       state: newAddressForm.States,
//   //       country: null,
//   //       isDefault: true,
//   //       addressTypeId: 1,
//   //       deliveryInstructions: null,
//   //     };

//   //     try {
//   //       const response = await fetch(
//   //         "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //           body: JSON.stringify(payLaodNewForm),
//   //         }
//   //       );

//   //       if (!response.ok) {
//   //         throw new Error("Failed to add address");
//   //       }

//   //       const responseData = await response.json();
//   //       if (responseData.result && responseData.result.length > 0) {
//   //         const newAddress = responseData.result[0];
//   //         if (newAddress && newAddress.addressId) {
//   //           setNewAddressData(newAddress); // Save the new address object to state
//   //           fetchCustomerById();
//   //           setShowPopUp(false);
//   //           setNotification({
//   //             show: true,
//   //             message: "Add new address Successfully!",
//   //           });
//   //           setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   //         } else {
//   //           console.warn("Address data is missing addressId:", newAddress);
//   //           setShowPopUp(false);
//   //         }
//   //       } else {
//   //         console.warn("No address data found in response");
//   //         setShowPopUp(false);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error adding address:", error);
//   //       setShowPopUp(false);
//   //     }
//   //   };

//   const fetchCustomerById = async () => {
//     // console.log("Fetching address details for ID:", addressId);

//     // try {
//     //   const response = await fetch(
//     //     `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetByCustomerId?customerId=${userId}`,
//     //     {
//     //       method: "GET",
//     //     }
//     //   );

//     //   if (!response.ok) {
//     //     const errorDetails = await response.json();
//     //     throw new Error(
//     //       `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
//     //         errorDetails
//     //       )}`
//     //     );
//     //   }

//     //   const result = await response.json();
//     //   console.log("Fetched address details:", result.result);
//     //   // setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
//     //   // else if (result.result) {
//     //   //   // Append the single address
//     //   //   setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
//     //   // }
//     //   setGetAddress(result.result);
//     // } catch (error) {
//     //   console.error("Error fetching address details:", error);
//     // }
//     dispatch(fetchGetByCustomerId(user?.customerId));
//   };
//   const handleSubmitForm = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     const errors = {};

//     // First Name Validation
//     if (!newAddressForm.First_Name.trim()) {
//       errors.First_Name = "First Name is required";
//     }

//     // Last Name Validation
//     if (!newAddressForm.Last_Name.trim()) {
//       errors.Last_Name = "Last Name is required";
//     }

//     // Phone Number Validation
//     // if (!newAddressForm.Phone_Number) {
//     //   errors.Phone_Number = "Phone Number is required";
//     // } else if (!/^\d{10}$/.test(newAddressForm.Phone_Number)) {
//     //   errors.Phone_Number = "Phone Number must be exactly 10 digits";
//     // }

//     // Address Validation
//     if (!newAddressForm.Address.trim()) {
//       errors.Address = "Address is required";
//     }

//     // City Validation
//     if (!newAddressForm.Town_City.trim()) {
//       errors.Town_City = "City is required";
//     }
//     // Check if the "State" field is empty
//     if (!newAddressForm.States || newAddressForm.States.trim() === "") {
//       errors.States = "State is required";
//     }

//     // State Validation
//     // if (!newAddressForm.States) {
//     //   errors.States = "State is required";
//     // }

//     // Zip Code (Pin Code) Validation
//     if (!newAddressForm.Pin_Code) {
//       errors.Pin_Code = "Zip Code is required";
//     } else if (!/^\d{5}$/.test(newAddressForm.Pin_Code)) {
//       errors.Pin_Code = "Zip  Code must be required";
//     }

//     setFormErrors(errors); // Update the state with validation errors

//     // If there are errors, stop form submission
//     if (Object.keys(errors).length > 0) {
//       return;
//     }
//     console.log(newAddressForm, "new address");
//     const payLaodNewForm = {
//       addressId: "0",
//       customerId: userId,
//       firstName: newAddressForm.First_Name,
//       middleName: null,
//       lastName: newAddressForm.Last_Name,
//       phoneNumber: newAddressForm.Phone_Number,
//       pincode: newAddressForm.Pin_Code,
//       address1: newAddressForm.Address,
//       address2: null,
//       landmark: "",
//       city: newAddressForm.Town_City,
//       state: newAddressForm.States,
//       country: null,
//       isDefault: true,
//       addressTypeId: 1,
//       deliveryInstructions: null,
//     };

//     // try {
//     //   const response = await fetch(
//     //     "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
//     //     {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(payLaodNewForm),
//     //     }
//     //   );

//     //   if (!response.ok) {
//     //     throw new Error("Failed to add address");
//     //   }

//     //   const responseData = await response.json();
//     //   if (responseData.result && responseData.result.length > 0) {
//     //     const newAddress = responseData.result[0];
//     //     if (newAddress && newAddress.addressId) {
//     //       setNewAddressData(newAddress); // Save the new address object to state
//     //       fetchCustomerById();
//     //       setShowPopUp(false);
//     //       setNotification({
//     //         show: true,
//     //         message: "Address added successfully!",
//     //       });
//     //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     //     } else {
//     //       console.warn("Address data is missing addressId:", newAddress);
//     //       setShowPopUp(false);
//     //     }
//     //   } else {
//     //     console.warn("No address data found in response");
//     //     setShowPopUp(false);
//     //   }
//     // } catch (error) {
//     //   console.error("Error adding address:", error);
//     //   setShowPopUp(false);
//     // }
//     try {
//       await dispatch(fetchAddAddress(payLaodNewForm));
//       setShowPopUp(false);
//       setNotification({
//         show: true,
//         message: "Address added successfully!",
//       });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//       await fetchCustomerById();
//     } catch (error) {
//       console.error("Error adding address:", error);
//       setShowPopUp(false);
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchGetByCustomerId(user?.customerId));
//   }, [dispatch, user?.customerId,deleteProduct]);

//   // })

//   const handleUseAddressButtons = (e) => {
//     e.preventDefault();
//     setShowPopUp(false);
//     setShowPopUp(true);
//     handleSubmitForm(e);
//   };

//   // console.log("add----->", getAddress);

//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     // Set the states data
//     setStates(useStates); // Adjust based on actual structure
//   }, []);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredStates = states.filter((state) => {
//     return state.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   // const [selectedaddressId, setSelectedaddressId] = useState(getAddress[0]?.addressId);

//   // useEffect(() => {
//   //   if (getAddress.length > 0 && !selectedAddressId) {
//   //     // Set the first address as the default selected address when data is loaded
//   //     setSelectedAddressId(getAddress[0].addressId);
//   //   }
//   // }, [getAddress]);
//   const [isInitialized, setIsInitialized] = useState(false); // Flag to track if default selection is set

//   useEffect(() => {
//     // Check if getAddress has data and we haven't initialized the selection yet
//     if (getAddress.length > 0 && !isInitialized) {
//       // Set the first address as the default selected address
//       setSelectedAddressId(getAddress[0].addressId);
//       setIsInitialized(true); // Mark as initialized
//     }
//   }, [getAddress, isInitialized]);

//   const handleChangeAddress = (addressId) => {
//     setSelectedAddressId(addressId);
//   };

//   const selectedAddress = getAddress.find(
//     (item) => item.addressId === selectedAddressId
//   );

//   const [address, setAddress] = useState(null);
//   // const handleRemoveAddress = async (addressId) => {
//   //   try {
//   //     // Send a POST request to delete the address
//   //     const response = await axios.post(
//   //       `/api/Customer/Address/Delete?addressId=${addressId}`
//   //     );

//   //     console.log("Response from delete:", response);

//   //     if (response.status === 200) {
//   //       // Filter out the deleted address from the address list
//   //       const updatedAddresses = getAddress.filter(
//   //         (address) => address.addressId !== addressId
//   //       );

//   //       // Update the state with the new list of addresses
//   //       setAddress(updatedAddresses);

//   //       // Optionally, show a success message
//   //       alert("Address removed successfully!");
//   //     } else {
//   //       // Handle cases where the deletion was not successful
//   //       alert("Failed to remove the address. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     // Catch and handle any errors (network or other)
//   //     console.error("Error deleting address:", error);
//   //     alert(
//   //       "An error occurred while deleting the address. Please try again later."
//   //     );
//   //   }
//   // };


//   // const [notification, setNotification] = useState({ show: false, message: "" });

//   // Delete Address Handler
//   const handleDeleteAddress = (addressId) => {
//     console.log("Opening delete modal for address ID:", addressId);
//     setDeletePop(true); // Set modal to visible
//     setDeleteProduct(addressId); // Set the selected product to delete
//   };

//   // Cancel Delete Button
//   const cancelDeleteButton = () => {
//     console.log("Canceling delete operation");
//     setDeletePop(false); // Close modal without deleting
//     // setDeleteProduct(null); // Reset selected product
//   };

//   // Success Delete Button
//   const successDeleteButton = async () => {
//     try {
//       console.log("Deleting product:", deleteProduct);
//       if (deleteProduct) {
//         await fetchDeleteAddressApi(deleteProduct); // Call delete API
//         setDeletePop(false); // Close modal after deletion
//         setDeleteProduct(null); // Reset selected product
//         setNotification({ show: true, message: "Address Deleted Successfully!" });
//         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//         await dispatch(fetchGetByCustomerId(user?.customerId));

//       }
//     } catch (error) {
//       console.error("Error while deleting product:", error);
//       setNotification({ show: true, message: "Error deleting address." });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     }
//   };

//   // Close Modal Button
//   const closeDeleteButton = () => {
//     console.log("Closing delete modal");
//     setDeletePop(false); // Close modal
//     setDeleteProduct(null); // Reset selected product
//   };


//   return (
//     <div className="w-full flex justify-center">
//       {deletePop && (
//         <div
//           className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
//             <div className="flex justify-end">
//               <button className="w-5 p-1 -mt-8 mx-2" onClick={closeDeleteButton}>
//                 <img src={wrong} className="w-6 h-4" alt="Close" />
//               </button>
//             </div>
//             <h1 className="text-black text-center mt-2">
//               Are you sure you want to delete this address?
//             </h1>
//             <div className="flex justify-around mt-6">
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={cancelDeleteButton}
//               >
//                 No
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={successDeleteButton}
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="bg-white  Largest:w-[1550px]  Laptop:w-full  w-full h-fit text-lg text-black px-12 py-2 relative">
//         <div className=" w-[85%] flex   items-center shadow-transparent ">
//           <div className="w-[50%]">
//             <img
//               src={logo}
//               className="w-48 h-16 cursor-pointer"
//               alt="logo"
//               onClick={handleNavigate}
//             />
//             <Notification
//               show={notification.show}
//               message={notification.message}
//             />
//             {/* {showpagepopup && ( */}
//             <div className="z-50 -ml-20 flex items-center justify-center bg-opacity-50">
//               <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
//                 <div className="flex justify-center gap-4">
//                   <button
//                     className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded"
//                     onClick={handleStayInCheckout}
//                   >
//                     Stay in Checkout
//                   </button>
//                   <button
//                     className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded"
//                     onClick={handleReturnToCart}
//                   >
//                     Return to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* )} */}
//           </div>
//           <h1 className="text-3xl flex  text-center text-black ">Checkout</h1>
//           {/* <FaLock /> */}
//         </div>
//         <div className="bg-white p-4 w-full h-full border-t">
//           <div className="flex flex-col">
//             <div className="">
//               {!isTotalHidden && (
//                 <h1 className="text-orange-400 font-semibold text-lg my-2">
//                   1 Select a delivery and service address
//                 </h1>
//               )}
//               <div className="flex w-full ">
//                 {!isTotalHidden && (
//                   // {isOpenAddress &&

//                   <div className="flex min-w-full">
//                     {/* <div className=""> */}


//                     <div className="border shadow-md rounded-md h-56 w-full overflow-y-auto">
//                       <div className="p-2 mx-5 ">
//                         <h1 className="border-b-2 text-base  bg-white mt-3">
//                           Your Address
//                         </h1>
//                         <div className="overflow-y-scroll h-28">
//                           {getAddress.length === 0 ? (
//                             <div className="w-full">
//                               <p className="mt-6 pt-2 flex justify-center text-xl text-blue-900 font-semibold">
//                                 Please select an address before continuing
//                               </p>
//                             </div>
//                           ) : (
//                             getAddress.map((item) => (
//                               <div
//           key={item.addressId}
//           className="border flex-col rounded-md flex my-2 p-2 px-6 bg-pink-50 border-orange-200"
//         >
//           <div className="flex flex-col">
//             <div className="flex text-base w-full">
//               <div className="flex items-center w-full">
//                 <div className="flex flex-wrap">
//                   <div className="flex">
//                     <input
//                       type="radio"
//                       checked={selectedAddressId === item.addressId} // Check if the current item is selected
//                       onChange={() => handleChangeAddress(item.addressId)} // Change the selected address when clicked
//                       onClick={() => {
//                         if (selectedAddressId) {
//                           handleUseAddress(item.state, item.pincode); // Proceed with navigation
//                         } else {
//                           alert(
//                             "Please select an address before continuing."
//                           ); // Or display error message
//                         }
//                       }}
//                       className="mr-3"
//                     />
//                   </div>

//                   {/* Address display */}
//                   <h1 className="font-semibold">
//                     {item.firstName} {item.lastName || ""}, 
//                   </h1>
//                   {item.address2 && <p className="mr-1">{item.address2},</p>}
//                   <p className="mr-1">{item.address1},</p>
//                   <p className="mr-1">{item.city},</p>
//                   <p className="mr-1">{item.state}</p>
//                   <p className="mr-1">{item.pincode},</p>
//                   <p>{item.phoneNumber}</p>

//                   {/* Edit button */}
//                   <p
//                     className="ml-2 items-center flex justify-center text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
//                     onClick={() => handleEditAddress(item.addressId, item)}
//                   >
//                     <Tooltip title="Edit" placement="top">
//                       <img
//                         src={edit}
//                         alt="Edit"
//                         className="cursor-pointer w-7 h-7"
//                       />
//                     </Tooltip>
//                   </p>

//                   {/* Delete button */}
//                   <p
//                     className="flex items-center justify-center ml-2 text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
//                     onClick={() => handleDeleteAddress(item.addressId)}
//                   >
//                     <Tooltip placement="top" title="Delete">
//                       <img
//                         src={Bin}
//                         alt="Delete"
//                         className="cursor-pointer w-4 h-4"
//                       />
//                     </Tooltip>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//                             ))
//                           )}
//                         </div>
//                         <div className="flex cursor-pointer">
//                           <img src={plus} className="w-5 h-5" />
//                           <h1
//                             className="hover:text-red-400 hover:underline text-cyan-600 "
//                             onClick={handlepopOpen}
//                           >
//                             Add a new address
//                           </h1>
//                         </div>

//                         {/* Conditionally show the "Use this address" button if there are addresses */}
//                         {getAddress.length > 0 && (
//                           <div></div>
//                           // <button
//                           //   className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white "
//                           //   onClick={() => {
//                           //     if (selectedAddressId) {
//                           //       handleUseAddress(); // Proceed with navigation
//                           //     } else {
//                           //       alert(
//                           //         "Please select an address before continuing."
//                           //       ); // Or display error message
//                           //     }
//                           //   }}
//                           // >
//                           //   Use this address
//                           // </button>
//                         )}
//                       </div>
//                     </div>

//                     {/* Edit ddress Pop up */}
//                     {isShowPopUp && (
//                       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                         <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
//                           <div className="flex justify-between border-b pb-4 items-center">
//                             <h1>Edit Address</h1>
//                             <img
//                               src={cross} // Replace with your close icon source
//                               className="w-5 h-5 cursor-pointer"
//                               onClick={() => setIsShowPopUp(false)}
//                               alt="Close Icon"
//                             />
//                           </div>
//                           {/* Address form fields */}

//                           <div className="flex my-2 gap-2">
//                             <TextField
//                               label="First Name"
//                               name="First_Name"
//                               size="small"
//                               className="w-full"
//                               value={addressForm.First_Name}
//                               onChange={handleInputChange}
//                               error={!!formErrors.First_Name}
//                               helperText={formErrors.First_Name}
//                             />

// <TextField
//             label="Last Name"
//             name="Last_Name"
//             size="small"
//             className="w-full"
//             value={addressForm.Last_Name}
//             onChange={handleInputChange}
//             error={!!formErrors.Last_Name}
//             helperText={formErrors.Last_Name}
//           />
//                           </div>

//                           <div className="my-4 flex gap-2">
//                             <TextField
//                               label="Address"
//                               id="Address"
//                               name="Address"
//                               size="small"
//                               className="w-full"
//                               value={addressForm.Address}
//                               onChange={handleInputChange}
//                               error={!!formErrors.Address}
//                               helperText={formErrors.Address}
//                             />
//                             <TextField
//                               label="City"
//                               name="Town_City"
//                               size="small"
//                               className="w-full"
//                               value={addressForm.Town_City}
//                               onChange={handleInputChange}
//                               error={!!formErrors.Town_City}
//                               helperText={formErrors.Town_City}
//                             />
//                           </div>

//                           <div className="flex my-2 gap-2">
//                             <FormControl
//                               className="w-[50%]"
//                               size="small"
//                               error={!!formErrors.States}
//                             >
//                               <InputLabel id="state-select-label">
//                                 State
//                               </InputLabel>
//                               <Select
//                                 id="state-select"
//                                 label="State"
//                                 value={addressForm.States} // Correctly bind the form value
//                                 name="States" // Ensure name matches the key in addressForm
//                                 onChange={handleInputChange}
//                                 MenuProps={{
//                                   PaperProps: {
//                                     style: {
//                                       maxHeight: 200, // Set the maximum height of the dropdown
//                                     },
//                                   },
//                                 }}
//                               >
//                                 <MenuItem value="">
//                                   <em>None</em>
//                                 </MenuItem>
//                                 {states.map((state) => (
//                                   <MenuItem
//                                     key={state.abbreviation}
//                                     // value={state.abbreviation}
//                                     value={state.name}
//                                   >
//                                     {state.name}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                               {/* {error.State && <span className="text-red-500">{error.State}</span>} */}
//                             </FormControl>

//                             <TextField
//                               label="Zip "
//                               name="Pin_Code"
//                               size="small"
//                               className="w-[50%]"
//                               value={addressForm.Pin_Code}
//                               // onChange={handleInputChange}
//                               onChange={(e) => {
//                                 const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//                                 handleInputChange({
//                                   target: { name: "Pin_Code", value },
//                                 }); // Update the state with only numbers
//                               }}
//                               error={!!formErrors.Pin_Code}
//                               helperText={formErrors.Pin_Code}
//                               inputProps={{ maxLength: 5 }}
//                             />
//                           </div>
//                           <div className="flex my-2 gap-2">
//                             <TextField
//                               label="Phone Number"
//                               name="Phone_Number"
//                               size="small"
//                               className="w-full"
//                               value={formatPhoneNumber(
//                                 addressForm.Phone_Number
//                               )}
//                               onChange={handleInputChange}
//                               error={!!formErrors.Phone_Number}
//                               helperText={formErrors.Phone_Number}
//                               inputProps={{ maxLength: 12 }}
//                             />

//                             <TextField
//                               label="Email ID"
//                               name="Email ID"
//                               size="small"
//                               className="w-full"
//                               // value ={}
//                             // value={formatPhoneNumber(addressForm.Phone_Number)}
//                             // onChange={handleInputChange}
//                             // error={!!formErrors.Phone_Number}
//                             // helperText={formErrors.Phone_Number}
//                             // inputProps={{ maxLength: 12 }}
//                             />
//                           </div>

//                           <div className="my-4">
//                             <input type="checkbox" id="default-address" />
//                             <label htmlFor="default-address" className="ml-2">
//                               Make this my default address
//                             </label>
//                           </div>

//                           <div className="flex justify-between mt-6">
//                             <button
//                               className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
//                               onClick={handleSaveAddress}
//                             >
//                               Save Address
//                             </button>
//                             <button
//                               className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
//                               onClick={() => setIsShowPopUp(false)}
//                             >
//                               Cancel
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {/* Add new Address popup */}
//                     {showPopUp && (
//                       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                         <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
//                           <form onSubmit={handleSubmitForm}>
//                             <div className="flex justify-between border-b pb-4 items-center">
//                               <h1 className="text-blue-900 font-semibold">
//                                 Add a new address
//                               </h1>
//                               <img
//                                 src={cross}
//                                 className="w-5 h-5 cursor-pointer"
//                                 onClick={handleRemove}
//                                 alt="Close Icon"
//                               />
//                             </div>

//                             <div className="flex my-2 gap-2">
//                               <TextField
//                                 label="First Name"
//                                 id="First_Name"
//                                 name="First_Name" // Matches state key
//                                 value={newAddressForm.First_Name} // Controlled input
//                                 onChange={handleChangeForm} // Call the change handler
//                                 size="small"
//                                 className="w-full"
//                                 error={!!formErrors.First_Name}
//                                 helperText={formErrors.First_Name}
//                               />

//                               <TextField
//                                 label="Last Name"
//                                 id="Last_Name"
//                                 name="Last_Name" // Matches state key
//                                 value={newAddressForm.Last_Name} // Controlled input
//                                 onChange={handleChangeForm} // Call the change handler
//                                 size="small"
//                                 className="w-full"
//                                 error={!!formErrors.Last_Name}
//                                 helperText={formErrors.Last_Name}
//                               />
//                             </div>

//                             <div className="my-4 flex gap-2">
//                               <TextField
//                                 label="Address"
//                                 id="Address"
//                                 name="Address" // Matches state key
//                                 value={newAddressForm.Address}
//                                 onChange={handleChangeForm}
//                                 size="small"
//                                 className="w-full"
//                                 error={!!formErrors.Address}
//                                 helperText={formErrors.Address}
//                               />

//                               <TextField
//                                 label="City"
//                                 id="Town_City"
//                                 name="Town_City" // Matches state key
//                                 value={newAddressForm.Town_City}
//                                 onChange={handleChangeForm}
//                                 size="small"
//                                 className="w-full"
//                                 error={!!formErrors.Town_City}
//                                 helperText={formErrors.Town_City}
//                               />
//                             </div>

//                             <div className="flex my-2 gap-2">
//                               {/* <FormControl
//                                 className="w-[50%]"
//                                 size="small"
//                                 error={!!formErrors.States}
//                               >
//                                 <InputLabel id="state-select-label">State</InputLabel>
//                                 <Select
//                                   id="state-select"
//                                   label="State"
//                                   value={newAddressForm.States}
//                                   name="State"
//                                   onChange={handleInputChange}
//                                   MenuProps={{
//                                     PaperProps: {
//                                       style: {
//                                         maxHeight: 200, // Set the maximum height of the dropdown
//                                       },
//                                     },
//                                   }}
//                                 >
//                                   <MenuItem value="">
//                                     <em>None</em>
//                                   </MenuItem>
//                                   {states.map((state) => (
//                                     <MenuItem
//                                       key={state.abbreviation}
//                                       value={state.abbreviation}
//                                     >
//                                       {state.name}
//                                     </MenuItem>
//                                   ))}
//                                 </Select>
//                                 {/* {error.State && <span className="text-red-500">{error.State}</span>} 
//                               </FormControl> */}
//                               <FormControl
//                                 className="w-[50%]"
//                                 size="small"
//                                 error={!!formErrors.States}
//                               >
//                                 <InputLabel id="state-select-label">
//                                   State
//                                 </InputLabel>
//                                 <Select
//                                   id="state-select"
//                                   label="State"
//                                   value={newAddressForm.States} // Bind value to addressForm.States
//                                   name="States" // Ensure name matches the state key in addressForm
//                                   onChange={handleChangeForm} // Call handleInputChange on selection
//                                   MenuProps={{
//                                     PaperProps: {
//                                       style: {
//                                         maxHeight: 200, // Set the max height of the dropdown
//                                       },
//                                     },
//                                   }}
//                                 >
//                                   <MenuItem value="">
//                                     <em>None</em>
//                                   </MenuItem>
//                                   {states.map((state) => (
//                                     <MenuItem
//                                       key={state.abbreviation}
//                                       // value={state.abbreviation}
//                                       value={state.name}
//                                     >
//                                       {state.name}
//                                     </MenuItem>
//                                   ))}
//                                 </Select>
//                                 {formErrors.States && (
//                                   <span className="text-red-700 text-sm">
//                                     {formErrors.States}
//                                   </span>
//                                 )}
//                               </FormControl>

//                               <TextField
//                                 label="zip"
//                                 id="Pin_Code"
//                                 name="Pin_Code" // Matches state key
//                                 value={newAddressForm.Pin_Code}
//                                 // onChange={handleChangeForm}
//                                 onChange={(e) => {
//                                   const value = e.target.value.replace(
//                                     /\D/g,
//                                     ""
//                                   ); // Remove non-numeric characters
//                                   handleChangeForm({
//                                     target: { name: "Pin_Code", value },
//                                   }); // Update the state with only numbers
//                                 }}
//                                 size="small"
//                                 className="w-[50%]"
//                                 error={!!formErrors.Pin_Code}
//                                 helperText={formErrors.Pin_Code}
//                                 inputProps={{ maxLength: 5 }}
//                               />
//                             </div>
//                             <div className="flex my-2 gap-2">
//                               <TextField
//                                 label="Phone Number"
//                                 name="Phone_Number"
//                                 size="small"
//                                 className="w-full"
//                                 value={formatPhoneNumber(
//                                   newAddressForm.Phone_Number
//                                 )}
//                                 onChange={handleChangeForm}
//                                 error={!!formErrors.Phone_Number}
//                                 helperText={formErrors.Phone_Number}
//                                 inputProps={{ maxLength: 12 }}
//                               />

//                               <TextField
//                                 label="Email ID"
//                                 name="Email ID"
//                                 size="small"
//                                 className="w-full"
//                               // value={formatPhoneNumber(addressForm.Phone_Number)}
//                               // onChange={handleInputChange}
//                               // error={!!formErrors.Phone_Number}
//                               // helperText={formErrors.Phone_Number}
//                               // inputProps={{ maxLength: 12 }}
//                               />
//                             </div>

//                             <div className="my-4">
//                               <input type="checkbox" id="default-address" />
//                               <label htmlFor="default-address" className="ml-2">
//                                 Make this my default address
//                               </label>
//                             </div>

//                             <div className="flex justify-between mt-6">
//                               <button
//                                 className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
//                                 type="submit"
//                                 onClick={handleUseAddressButtons}
//                               >
//                                 Use this address
//                               </button>
//                               <button
//                                 className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
//                                 onClick={handleRemove}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     )}
//                     {/* </div> */}
//                     <div className=" w-[30%]  mx-16  flex flex-col pt-2 items-center relative">
//                     <div className="border fixed shadow-md rounded-md p-7 py-5">
//                       {/* <div className="flex items-center justify-center">
//                         <button className="border rounded-full text-sm flex justify-center items-center px-4 py-2 bg-blue-900 text-white">
//                           Use this payment method
//                         </button>
//                       </div> */}
//                       <div className="text-base flex items-center justify-center flex-col my-1 border-b">
//                         <p>Choose a payment method to continue</p>
//                         <p>checking out. You will still have a chance to</p>
//                         <p>review and edit your order before it is final.</p>
//                       </div>
//                       <div>
//                         <h1 className="font-semibold text-xl my-2">
//                           Order Summary
//                         </h1>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Items(s) Subtotal :</p>
//                         <p>${total.toFixed(2)}</p>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Shipping:</p>
//                         <p>${Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0).toFixed(2)}</p>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Total:</p>
//                         {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
//                         <p>${(validTotal  + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>

//                       </div>
//                       <div className="flex justify-between text-sm border-b my-2">
//                         <p>Promotion Applied :</p>
//                         <p>$0.00</p>
//                       </div>
//                       <div className="flex justify-between text-red-500 font-semibold">
//                         <p>Grand Total:</p>
//                         {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
//                         <p>${(validTotal  + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>
//                       </div>
//                     </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* other components start */}

//             {/* <div className="flex justify-between"> */}
//                       {/* <h1>1 Selected address</h1> */}
//                       {/* <div>
//                         {selectedAddress && (
//                           <div className="mt-4 flex">
//                             <h2 className="font-bold mr-2 ">Selected Address:</h2>
//                             <p className="mr-1">{selectedAddress.firstName}, </p>
//                             <p className="mr-1">{selectedAddress.address1},</p>
//                             <p className="mr-1">{selectedAddress.city},</p>
//                             <div className="flex">
//                               <p className="mr-1">{selectedAddress.state},</p>
//                               <p className="ml-2">{selectedAddress.pincode}.</p>
//                             </div>
//                           </div>
//                          )} 
//                       </div> */}

//             {!isTotalHidden && (

//               <div className="">

//                 <Proccedtoshipment selectedOptions = {selectedOptions} setSelectedOptions = {setSelectedOptions} totalNetCharges = {totalNetCharges} setTotalNetCharges = {setTotalNetCharges} />
//                 {/* <div className="border-b my-3 w-[70%]"> */}
//                   {/* <Payment /> */}
//                   {/* <SquarePaymentForm */}
//                     {/* // applicationId={applicationId} */}
//                     {/* // locationId={locationId}  */}
//                     {/* amount={(validTotal + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)} */}
//                     {/* // onPaymentSuccess={handlePaymentSuccess} */}
//                     {/* // onPaymentError={handlePaymentError} */}
//                   {/* /> */}
//                     <div className="ml-6 w-[65%]">
//                     {selectedAddressId ? (

//                       <SquarePaymentForm
//                         amount={(validTotal + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}
//                       />
//                     ) : (
//                       <p className="text-red-500 font-semibold mt-3">Please select an address for payment.</p>
//                     )}
//                     {/* </div> */}
//                 </div>
//                 {/* <div className="border-b my-3">
//                   <h1>3 Offers</h1>
//                 </div>
//                 <div className="border-b my-3">
//                   <h1>4 Items and delivery</h1>
//                 </div> */}
//               </div>
//             )}
//           </div>

//           {/* <div className="flex justify-between w-full">
//             <div className="flex flex-col w-full">
//               {isTotalHidden && (
//                 <div className="flex border-b w-full ">
//                   <div className="w-[60%]">
//                     <div className="flex justify-between">
//                       <h1>1 Delivery address</h1>
//                       <div>
//                         {selectedAddress && (
//                           <div className="mt-4">
//                             <h2 className="font-bold">Selected Address:</h2>
//                             <p>{selectedAddress.firstName},</p>
//                             <p>{selectedAddress.address1},</p>
//                             <p>{selectedAddress.city},</p>
//                             <div className="flex">
//                               <p>{selectedAddress.state},</p>
//                               <p className="ml-2">{selectedAddress.pincode}.</p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                       <div>
//                         <button
//                           onClick={handleOpenAddress}
//                           className="text-cyan-500"
//                         >
//                           Change
//                         </button>
//                       </div>
//                     </div>

//                     <Payment />


//                   </div>
//                   <div className=" w-[30%] mx-16 flex flex-col pt-2 items-center">
//                     <div className="border fixed shadow-md rounded-md p-7 py-5">

//                       <div className="text-base flex items-center justify-center flex-col my-1 border-b">
//                         <p>Choose a payment method to continue</p>
//                         <p>checking out. You will still have a chance to</p>
//                         <p>review and edit your order before it is final.</p>
//                       </div>
//                       <div>
//                         <h1 className="font-semibold text-xl my-2">
//                           Order Summary
//                         </h1>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Items :</p>
//                         <p>${total}</p>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Shipment:</p>
//                         <p>${netCharge.toFixed(2)}</p>
//                       </div>
//                       <div className="flex justify-between text-sm mt-3">
//                         <p>Total:</p>
//                         <p>${(validTotal + validNetCharge).toFixed(2)}</p>
//                       </div>
//                       <div className="flex justify-between text-sm border-b my-2">
//                         <p>Promotion Applied :</p>
//                         <p>$0.00</p>
//                       </div>
//                       <div className="flex justify-between text-red-500 font-semibold">
//                         <p>Order Total:</p>
//                         <p>${(validTotal + validNetCharge).toFixed(2)}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Address;


















import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import cross from "../../assets/letter-x[1].png";
import plus from "../../assets/Icons/plus[1].png";
import logo from "../../assets/logo2.png";
import payment from "../../assets/Icons/paymenticons.png";
import dropdown from "../../assets/Icons/dropDownb.png";
import { Box, TextField, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdApi } from "../../Api/ProductApi";
import Payment from "./Payment";
import { FaLock } from "react-icons/fa";
import ItemsAndDelivery from "./ItemsAndDelivery";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Notification from "../Notification";
import { useStates } from "react-us-states";
import { orderGetByIdApi } from "../../Api/OrderApi";
import Remove from "../../assets/trash.png";
import Bin from "../../assets/Bin.png";
import shipping from "../../assets/Icons/Shipment.png";
import tax from "../../assets/Icons/tax icon.png";
import edit from "../../assets/Edit.png";
import axios from "axios";
import wrong from "../../assets/Icons/wrongred.png";
import { fetchAddAddress, fetchDeleteAddressApi, fetchEditAddress, fetchGetByCustomerId, orderDeliveryAddress, SetDefaultApi } from "../../Api/AddressApi";
import { FedExRatesApi, serviceTypeApi } from "../../Api/TrackApi";
// import { setAddress } from "../../Store/Store";
import Proccedtoshipment from '../ProccedtoShipment'
import SquarePaymentForm from "../SquarePaymentForm";
import { getUserByCustomerIdApi } from "../../Api/UserApi";
// import { getCartItemsApi } from "../../Api/CartApi";
function Address({ topMargin, totalAmount, amount }) {
  const dispatch = useDispatch()
  const applicationId = 'sandbox-sq0idb-vXdVdM6tMjTG6Zi2XCoE-A';
  const locationId = 'L0599WY5GGG3W';
  // const Payment_Amnount = 500;


  const handlePaymentSuccess = async (token, amount) => {
    console.log("Payment Successful, Token:", token);
    console.log("Payment Successful, amount:", amount);


    const payload = {
      sourceId: token,
      amount: Math.floor(amount),
      currency: "USD",
      note: "Payment for ORD763847827"
    }
    await paymentProcessApi(payload)

  };

  const handlePaymentError = (error) => {
    console.error("Payment Error:", error);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    seller: ""
  });

  const [totalNetCharges, setTotalNetCharges] = useState({
    seller: 0
  });


  // const fetchData = useSelector((state) => state.product.Products);
  const [searchParams] = useSearchParams();
  const total = parseFloat(searchParams.get("total")); // Convert total to a number
  const netCharge = parseFloat(searchParams.get("netCharge")) || 0;
  const isCart = searchParams.get("isCart") == "true"; // Convert total to a number
  const productId = searchParams.get("productId"); // Convert total to a number
  const DeliveryAddress = useSelector((state) => state.order.orderDeliveryAddress)
  console.log("delivery-->", DeliveryAddress)
  console.log("netAddress--> isCart", isCart)

  console.log("total-->", total);

  // Check if netCharge and total are valid numbers
  const validNetCharge = !isNaN(netCharge) && netCharge !== null ? netCharge : 0.00;


  // const netCharge = searchParams.get("netCharge")
  const [deletePop, setDeletePop] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const placeOrder = useSelector((state) => state.order.orderPlace)
  console.log("placeeeeeeeeeeeeeee", placeOrder)
  const cartList = useSelector((state) => state.cart.cart);
  console.log("addresss cart details", cartList)
  // console.log("ffffffff--->", totalAmount)
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const getAddress = useSelector((state) => state.address.customerId);
  const businessInfo = useSelector((state) => state.user.businessInfo);
  console.log("businessInfo-->address", businessInfo);
  const user = useSelector((state) => state.user.user);
  console.log("user-->address", user);
  console.log("addressdataaaaaa", getAddress);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
    Bussiness_phone: "",
  });

  const [isTotalHidden, setIsTotalHidden] = useState(false);
  const handleOpenAddress = () => {
    // Navigate("/address");
    setIsTotalHidden(false);
  };
  const [showError, setShowError] = useState(false);

  const [pincodes, setPincodes] = useState(null)
  const [stateAdd, setStateAdd] = useState(null)
  const [res, setRes] = useState([]);

  // const [response, setResponse] = useState(null)
  // useEffect(() => {
  //   const data = async () => {
  //     const res = await SetDefaultApi(user.customerId, selectedAddressId)
  //     console.log("resSetDefault--->", res)
  //     setResponse(res)
  //   }
  //   data()
  // }, [selectedAddressId])




  console.log("pincode---->", pincodes)
  // useEffect(() => {
  //   const fetchSellersAndSendPayload = async () => {
  //     try {
  //       // Map over cartList to fetch seller data and prepare payloads concurrently
  //       const sellerPromises = cartList.map(async (product) => {
  //         // Fetch seller data first
  //         const sellerData = await getUserByCustomerIdApi(product.product.sellerId);

  //         if (sellerData) {
  //           console.log("Seller data:", sellerData); // Log the entire seller data to inspect the structure

  //           // Ensure the postal code exists in sellerData
  //           // const postalCode = sellerData.businessInfo?.zip;
  //           // if (!postalCode) {
  //           //   console.warn(`Postal code not found for seller ${product.product.sellerId}`);
  //           //   return null;  // Skip if postal code is missing
  //           // }

  //           // Prepare payload based on seller data and product details
  //           const payload = {
  //             accountNumber: {
  //               value: "235969831"
  //             },
  //             requestedShipment: {
  //               shipper: {
  //                 address: {
  //                   postalCode: sellerData.businessInfo.zip,  // Shipper's postal code from sellerData
  //                   countryCode: "US"
  //                 }
  //               },
  //               recipient: {
  //                 address: {
  //                   postalCode: pincodes,  // Use the pincode from the selected address or state
  //                   countryCode: 'US'
  //                 }
  //               },
  //               pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //               rateRequestType: ["ACCOUNT", "LIST"],
  //               requestedPackageLineItems: [
  //                 {
  //                   weight: {
  //                     units: "LB",
  //                     value: 1  // Example weight, adjust as needed
  //                   }
  //                 }
  //               ]
  //             }
  //           };

  //           // Dispatch the action with the payloads for each product
  //           const serviceResponse = await dispatch(serviceTypeApi(payload));
  //           const rateResponse = await dispatch(FedExRatesApi(payload));

  //           console.log(`Responses for seller ${product.product.sellerId}:`, {
  //             serviceResponse,
  //             rateResponse,
  //           });

  //           return { product: product.product.sellerId, serviceResponse, rateResponse };
  //         } else {
  //           console.warn("No seller data found for sellerId:", product.product.sellerId);
  //           return null;
  //         }
  //       });

  //       // Wait for all promises to resolve concurrently
  //       const allResponses = await Promise.all(sellerPromises);

  //       // Filter out any null responses (in case no seller data was found)
  //       const successfulResponses = allResponses.filter((response) => response !== null);

  //       console.log("All successful responses:", successfulResponses);
  //     } catch (error) {
  //       console.error("Error processing sellers:", error);
  //     }
  //   };

  //   // Ensure cartList has items before triggering the fetch
  //   if (cartList?.length > 0) {
  //     fetchSellersAndSendPayload();  // Call the function to fetch and send payloads concurrently
  //   }
  // }, [cartList, pincodes]);
  // console.log(res, "Resolved results--->");

  // Function to handle the "Use this address" button click
  //   useEffect(() => {
  //     const data = async () => {
  //       await getCartItemsApi(user.customerId)
  //     }
  //     data()
  //  }, [])
  console.log("cartList===", cartList)
  useEffect(() => {
    const fetchSellersAndSendPayload = async () => {
      try {
        // Map over cartList to process only products with shipping cost
        const sellerPromises = cartList
          .filter((product) => product.product.isShippingCostApplicable === false) // Only include products with shipping cost
          .map(async (product) => {
            // Fetch seller data first
            const sellerData = await getUserByCustomerIdApi(product.product.sellerId);

            if (sellerData && sellerData.businessInfo?.zip) {
              console.log("Seller data:", sellerData);

              // Prepare payload based on seller data and product details
              const payload = {
                accountNumber: {
                  value: "235969831",
                },
                requestedShipment: {
                  shipper: {
                    address: {
                      postalCode: sellerData.businessInfo.zip, // Shipper's postal code from sellerData
                      countryCode: "US",
                    },
                  },
                  recipient: {
                    address: {
                      postalCode: pincodes, // Use the pincode from the selected address or state
                      countryCode: "US",
                    },
                  },
                  pickupType: "DROPOFF_AT_FEDEX_LOCATION",
                  rateRequestType: ["ACCOUNT", "LIST"],
                  requestedPackageLineItems: [
                    {
                      weight: {
                        units: "LB",
                        value: 1, // Example weight, adjust as needed
                      },
                    },
                  ],
                },
              };

              // Dispatch the actions for the product with shipping cost
              const serviceResponse = await dispatch(serviceTypeApi(payload, user.customerId));
              const rateResponse = await dispatch(FedExRatesApi(payload, user.customerId));

              console.log(`Responses for seller ${product.product.sellerId}:`, {
                serviceResponse,
                rateResponse,
              });

              return { product: product.product.sellerId, serviceResponse, rateResponse };
            } else {
              console.warn(`Postal code not found for seller ${product.product.sellerId}`);
              return null; // Skip if postal code is missing
            }
          });

        // Wait for all promises to resolve concurrently
        const allResponses = await Promise.all(sellerPromises);

        // Filter out any null responses (in case no seller data was found)
        const successfulResponses = allResponses.filter((response) => response !== null);

        console.log("All successful responses:", successfulResponses);
      } catch (error) {
        console.error("Error processing sellers:", error);
      }
    };

    // Ensure cartList has items before triggering the fetch
    if (cartList?.length > 0) {
      fetchSellersAndSendPayload(); // Call the function to fetch and send payloads concurrently
    }
  }, [cartList, pincodes]);


  // useEffect(() => {
  //   const fetchSellersAndSendPayload = async () => {
  //     try {
  //       // Process only products where isShippingCostApplicable is false
  //       const sellerPromises = cartList
  //         .filter((product) => product.product.isShippingCostApplicable === false) // Filter condition
  //         .map(async (product) => {
  //           try {
  //             // Dispatch the API calls
  //             const serviceResponse = await dispatch(serviceTypeApi(user.customerId));
  //             const rateResponse = await dispatch(FedExRatesApi(user.customerId));

  //             console.log(`Responses for product ${product.product.sellerId}:`, {
  //               serviceResponse,
  //               rateResponse,
  //             });

  //             return { productId: product.product.sellerId, serviceResponse, rateResponse };
  //           } catch (error) {
  //             console.error(`Error for product ${product.product.sellerId}:`, error);
  //             return null; // Skip on error but continue processing other promises
  //           }
  //         });

  //       // Wait for all the API calls to finish
  //       const allResponses = await Promise.all(sellerPromises);

  //       // Filter out unsuccessful responses
  //       const successfulResponses = allResponses.filter((response) => response !== null);

  //       console.log("All successful responses:", successfulResponses);
  //     } catch (error) {
  //       console.error("Error processing sellers:", error);
  //     }
  //   };

  //   // Trigger the function if cartList has items
  //   if (cartList?.length > 0) {
  //     fetchSellersAndSendPayload();
  //   }
  // }, [cartList, pincodes, dispatch, user.customerId]);



  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const handleUseAddress = async (state, pincode, addressId) => {
    setPincodes(pincode)
    setStateAdd(state)
    // setIsTotalHidden(true);
    setIsAddressSelected(true)

    await SetDefaultApi(user.customerId, addressId)
    await dispatch(orderDeliveryAddress(placeOrder.customerId, placeOrder.orderId, addressId))
    await dispatch(fetchGetByCustomerId(user?.customerId));


    // const payload = {
    //   accountNumber: {
    //     value: "235969831"
    //   },
    //   requestedShipment: {
    //     shipper: {
    //       address: {
    //         postalCode: businessInfo.zip,
    //         countryCode:"US"
    //       }
    //     },
    //     recipient: {
    //       address: {
    //         postalCode: pincode,
    //         countryCode: 'US'
    //       }
    //     },
    //     pickupType: "DROPOFF_AT_FEDEX_LOCATION",
    //       rateRequestType: [
    //         "ACCOUNT",
    //         "LIST"
    //       ],
    //         requestedPackageLineItems: [
    //           {
    //             weight: {
    //               units: "LB",
    //               value: 1
    //             }
    //           }
    //         ]

    // }

    // }
    // await dispatch(serviceTypeApi(payload))
    // if (selectedAddressId) {
    //   // Logic to handle using the selected address
    //   console.log(`Using address with ID: ${selectedAddressId}`);
    //   // You can add your navigation logic here
    // } else {
    //   setShowError(true); // Show error if no address is selected
    // }
  };

  // useEffect(() => {
  //   const payload = {
  //     accountNumber: {
  //       value: "235969831"
  //     },
  //     requestedShipment: {
  //       shipper: {
  //         address: {
  //           postalCode: businessInfo.zip,
  //           countryCode: businessInfo.state
  //         }
  //       },
  //       recipient: {
  //         address: {
  //           postalCode: pincodes,
  //           countryCode: stateAdd
  //         }
  //       },
  //       pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //       rateRequestType: [
  //         "ACCOUNT",
  //         "LIST"
  //       ],
  //       requestedPackageLineItems: [
  //         {
  //           weight: {
  //             units: "LB",
  //             value: 1
  //           }
  //         }
  //       ]
  //     }
  //   }

  //   const data = async () => {
  //     try {
  //       const response = await dispatch(FedExRatesApi(payload));
  //       // Handle response
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching FedEx rates:', error);
  //     }
  //   }
  //   data();
  // }, [pincodes, stateAdd]);

  // useEffect(() => {
  //   if (pincodes && stateAdd) { // Ensure they are set before making the call
  //     const payload = {
  //       accountNumber: {
  //         value: "235969831"
  //       },
  //       requestedShipment: {
  //         shipper: {
  //           address: {
  //             postalCode: businessInfo.zip,
  //             countryCode: "US"
  //           }
  //         },
  //         recipient: {
  //           address: {
  //             postalCode: pincodes,
  //             countryCode: "US"
  //           }
  //         },
  //         pickupType: "DROPOFF_AT_FEDEX_LOCATION",
  //         rateRequestType: ["ACCOUNT", "LIST"],
  //         requestedPackageLineItems: [
  //           {
  //             weight: {
  //               units: "LB",
  //               value: 1
  //             }
  //           }
  //         ]
  //       }
  //     };

  //     const data = async () => {
  //       try {
  //         const response = await dispatch(FedExRatesApi(payload));
  //         console.log(response); // Handle response
  //       } catch (error) {
  //         console.error('Error fetching FedEx rates:', error);
  //       }
  //     };
  //     data();
  //   }
  // }, [pincodes, stateAdd]);

  useEffect(() => {
    dispatch(orderGetByIdApi(placeOrder.orderId))
  }, [placeOrder])

  // const [formErrors, setFormErrors] = useState({});

  const [showWeekendOptions, setShowWeekendOptions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const details = [
    {
      name: "Ram",
      // lastname: "Smith",
      Address: "Dollars",
      City: "Dollars",
      States: "Dollars",
      Country: "US",
      Pin: 56789,
      email: "ram@example.com",
      phone: "+1234567890",
    },
  ];
  const [formErrors, setFormErrors] = useState({
    First_Name: "",
    Last_Name: "",
    Address: "",
    Phone_Number: "",
    Town_City: "",
    Pin_Code: "",
    Bussiness_phone: "",
  });

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, "");

    // Format as 3-3-4
    let formattedPhoneNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += "-";
      }
      formattedPhoneNumber += phoneNumber[i];
    }
    return formattedPhoneNumber;
  };



  // useEffect(() => {
  //   dispatch(fetchGetOrder(user?.customerId));
  // }, [user]);

  useEffect(() => {
    if (shortPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  // add new address popup
  const [showPopUp, setShowPopUp] = useState(false);
  // edit address popup
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const [shortPopup, setShortPopup] = useState(false);
  const [isShortPopup, setIsShortPopup] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState("");
  const [iscardEmiopen, SetIsCardEmiOpen] = useState(false);

  const handleRemove = () => setShowPopUp(false);
  const handleshortpopOpen = () => setShortPopup(!shortPopup);

  const handleAddressTypeClick = (type) => {
    setSelectedAddressType(type);
  };

  const handlepopOpen = () => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    setNewAddressForm({
      First_Name: "",
      Last_Name: "",
      Phone_Number: "",
      Pin_Code: "",
      Address: "",
      Town_City: "",
      States: "",
    });
    setShowPopUp(true);
  };

  const handleCardemiOpen = () => {
    SetIsCardEmiOpen(true);
  };

  const handleCardemiremove = () => {
    SetIsCardEmiOpen(false);
  };

  const handleAddaddress = () => {
    setShortPopup(true);
  };
  const handleAddaddressremove = () => {
    setShortPopup(false);
  };

  const handleUseAddressbutton = () => {
    const errors = {};

    // Check for empty required fields and set error messages
    if (!document.getElementById("First_Name").value) {
      errors.First_Name = "First Name is required";
    }
    if (!document.getElementById("Phone_Number").value) {
      errors.Phone_Number = "Phone Number is required";
    }
    if (!document.getElementById("Pin_Code").value) {
      errors.Pin_Code = "Pin Code is required";
    }
    if (!document.getElementById("Address").value) {
      errors.Address = "Address is required";
    }
    if (!document.getElementById("Bussiness_phone").value) {
      errors.Bussiness_phone = "Bussiness_phone is required";
    }
    if (!document.getElementById("States").value) {
      errors.States = "States is required";
    }
    if (!document.getElementById("Town_City").value) {
      errors.Town_City = "Town_City is required";
    }

    setFormErrors(errors);

    // If no errors, proceed with using the address
    if (Object.keys(errors).length === 0) {
      // Handle the logic for using the address
      alert("Address used successfully!");
    }
  };
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const [showpagepopup, setShowpagepopup] = useState(false);

  const handleNavigate = () => {
    setShowpagepopup(true);
  };

  const handleStayInCheckout = () => {
    // Handle action when "Stay in Checkout" is clicked
    setShowpagepopup(false);
    // Add your logic here
  };

  const handleReturnToCart = () => {
    // Handle action when "Return to Cart" is clicked
    // setShowpagepopup(false);
    // Add your logic here
    navigate("/cart");
  };

  const handleDeliveryInstruction = () => {
    setIsShortPopup(true);
  };
  const handledeliveryremove = () => {
    setIsShortPopup(false);
  };

  const [addressForm, setAddressForm] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Pin_Code: "",
    Address: "",
    Bussiness_phone: "",
    States: "",
    Town_City: "",

  });

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });


  const handleEditAddress = async (item) => {
    // Assuming you want to edit the first address (index 0)

    // Populate the form with the selected address
    setAddressForm({
      First_Name: item.firstName,
      Last_Name: item.lastName,
      Phone_Number: item.phoneNumber,
      Town_City: item.city,
      Pin_Code: item.pincode,
      States: item.state,
      Address: item.address1,
      // Bussiness_phone: selectedAddress.Bussiness_phone,
    });

    setSelectedAddressId(item.addressId);
    // Show the popup with the pre-filled address
    setIsShowPopUp(true);

    // try {
    //   const response = await fetch(
    //     `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
    //     {
    //       method: "GET",
    //     }
    //   );

    //   if (!response.ok) {
    //     const errorDetails = await response.json();
    //     throw new Error(
    //       `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
    //         errorDetails
    //       )}`
    //     );
    //   }

    //   const result = await response.json();
    //   // setProductData(result.result[0]);
    //   console.log("getnewForm-->", result.result);
    //   // setGetAddress(result.result[0])
    // } catch (error) {
    //   console.error("There was a problem with the fetch operation:", error);
    //   throw error;
    // }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddressForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Phone number formatting (777-777-7777)
    if (name === "Phone_Number") {
      const formattedPhone = formatPhoneNumber(value);
      setAddressForm((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setAddressForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const validateForm = () => {
    const errors = {};

    if (!addressForm.First_Name.trim()) {
      errors.First_Name = "First name is required";
    }
    if (!addressForm.Last_Name.trim()) {
      errors.Last_Name = "Last name is required";
    }
    if (!addressForm.Address.trim()) {
      errors.Address = "Address is required";
    }
    if (!addressForm.Town_City.trim()) {
      errors.Town_City = "City is required";
    }
    if (!/^\d{5}$/.test(addressForm.Pin_Code)) {
      errors.Pin_Code = "Zip code must be required";
    }
    // if (!/^\d{3}-\d{3}-\d{4}$/.test(addressForm.Phone_Number)) {
    //   errors.Phone_Number = "Phone number must be in 777-777-7777 format";
    // }
    if (!addressForm.States) {
      errors.States = "State is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleSaveAddress = async (e) => {
    // Implement save address functionality here
    // e.preventDefault();

    if (!validateForm()) {
      return; // Stop if validation fails
    }
    console.log("Address saved:", addressForm);
    e.preventDefault();
    console.log("saveee--->", addressForm);
    const payload = {
      addressId: selectedAddressId, // If `selectedAddressId` is present, it means we're editing
      customerId: userId,
      firstName: addressForm.First_Name,
      middleName: null,
      lastName: addressForm.Last_Name,
      phoneNumber: addressForm.Phone_Number,
      pincode: addressForm.Pin_Code,
      address1: addressForm.Address,
      address2: null,
      landmark: "",
      city: addressForm.Town_City,
      state: addressForm.States,
      // state: selectedState ? selectedState.name : "", 
      country: null,
      isDefault: true,
      addressTypeId: 1,
      deliveryInstructions: null,
    };

    // try {
    // If selectedAddressId is present, update the address, otherwise add a new one
    // const apiUrl = selectedAddressId
    //   ? `http://your-api-url.com/api/Customer/Address/Update/${selectedAddressId}`
    //   : 'http://your-api-url.com/api/Customer/Address/Add';

    // const method = selectedAddressId ? 'PUT' : 'POST';

    // const response = await fetch(
    //   "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Edit",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error(
    //     `Failed to ${selectedAddressId ? "update" : "add"} address`
    //   );
    // }

    // const responseData = await response.json();
    // if (responseData.result && responseData.result.length > 0) {
    //   const newAddress = responseData.result[0];
    //   if (newAddress && newAddress.addressId) {
    //     setNewAddressData(newAddress); // Save the new address object to state
    //     fetchCustomerById();
    //     setIsShowPopUp(false);
    //     setNotification({
    //       show: true,
    //       message: "Edit Successfully!",
    //     });
    //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    //   } else {
    //     console.warn("Address data is missing addressId:", newAddress);
    //     setIsShowPopUp(false);
    //   }
    // } else {
    //   console.warn("No address data found in response");
    //   setIsShowPopUp(false); // Close the popup after saving
    // }
    try {
      await dispatch(fetchEditAddress(payload))
      fetchCustomerById();
      setIsShowPopUp(false);
      setNotification({
        show: true,
        message: "Address Edited Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);

    } catch (error) {
      console.error("Error adding address:", error);
      setIsShowPopUp(false);
    }
  };
  const [newAddressForm, setNewAddressForm] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Pin_Code: "",
    Address: "",
    Town_City: "",
    States: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewAddressForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const addAddress = useSelector((state) => state.address.address);
  console.log("addd-->", addAddress);
  const [newAddressData, setNewAddressData] = useState([]);

  // const [getAddress, setGetAddress] = useState(getCustomer);

  // useEffect(() => {
  //   if (newAddressData && newAddressData.addressId) {
  //     console.log("Fetching address details for ID:", newAddressData.addressId);
  //     fetchGetFormData(newAddressData.addressId);
  //   } else {
  //     console.warn("newAddressData is missing or addressId is undefined");
  //   }
  // }, [newAddressData]);

  // const fetchGetFormData = async (addressId) => {
  //   // console.log("ressss-->",responseData)
  //   try {
  //     const response = await fetch(
  //       `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetById?addressId=${addressId}`,
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
  //           errorDetails
  //         )}`
  //       );
  //     }

  //     const result = await response.json();
  //     // setProductData(result.result[0]);
  //     console.log("getnewForm-->", result.result);
  //     setGetAddress(result.result);
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //     throw error;
  //   }
  // };

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();

  //   const payLaodNewForm = {
  //     addressId: "0",
  //     customerId: userId,
  //     firstName: newAddressForm.First_Name,
  //     middleName: null,
  //     lastName: null,
  //     phoneNumber: newAddressForm.Phone_Number,
  //     pincode: newAddressForm.Pin_Code,
  //     address1: newAddressForm.Address,
  //     address2: null,
  //     landmark: "",
  //     city: newAddressForm.Town_City,
  //     state: newAddressForm.States,
  //     country: null,
  //     isDefault: true,
  //     addressTypeId: 1,
  //     deliveryInstructions: null,
  //   };

  //   try {
  //     const response = await fetch(
  //       "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  //         },
  //         body: JSON.stringify(payLaodNewForm),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to add address");
  //     }

  //     const responseData = await response.json();
  //     if (responseData.result && responseData.result.length > 0) {
  //       const newAddress = responseData.result[0];
  //       if (newAddress && newAddress.addressId) {
  //         setNewAddressData(newAddress); // Save the new address object to state
  //         fetchCustomerById();
  //         setShowPopUp(false);
  //         setNotification({
  //           show: true,
  //           message: "Add new address Successfully!",
  //         });
  //         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //       } else {
  //         console.warn("Address data is missing addressId:", newAddress);
  //         setShowPopUp(false);
  //       }
  //     } else {
  //       console.warn("No address data found in response");
  //       setShowPopUp(false);
  //     }
  //   } catch (error) {
  //     console.error("Error adding address:", error);
  //     setShowPopUp(false);
  //   }
  // };

  // useEffect(() => {

  //   const handleSubmitForm = async (e) => {
  //     e.preventDefault();

  //     // Validation logic
  //     const errors = {};

  //     if (!newAddressForm.First_Name) {
  //       errors.First_Name = "First Name is required";
  //     }
  //     if (!newAddressForm.Last_Name) {
  //       errors.Last_Name = "Last Name is required";
  //     }

  //     if (!newAddressForm.Phone_Number) {
  //       errors.Phone_Number = "Phone Number is required";
  //     } else if (newAddressForm.Phone_Number.length !== 10 || isNaN(newAddressForm.Phone_Number)) {
  //       errors.Phone_Number = "Phone Number must be 10 digits";
  //     }
  //     // if (!newAddressForm.Phone_Number || newAddressForm.Phone_Number.length < 10) {
  //     //   errors.Phone_Number = "Phone number is required and must be 10 digits";
  //     // }
  //     if (!newAddressForm.Address) {
  //       errors.Address = "Address is required";
  //     }
  //     if (!newAddressForm.Town_City) {
  //       errors.Town_City = "City is required";
  //     }
  //      // State Validation
  // if (!newAddressForm.States) {
  //   errors.States = "State is required";
  // }
  //     // if (!newAddressForm.States) {
  //     //   errors.States = "State is required";
  //     // }
  //     if (!newAddressForm.Pin_Code) {
  //       errors.Pin_Code = "Zip/Pin Code is required";
  //     } else if (isNaN(newAddressForm.Pin_Code) || newAddressForm.Pin_Code.length !== 6) {
  //       errors.Pin_Code = "Zip/Pin Code must be 6 digits";
  //     }

  //     setFormErrors(errors); // Update the state with validation errors

  //     // If there are errors, stop form submission
  //     if (Object.keys(errors).length > 0) {
  //       return;
  //     }

  //     const payLaodNewForm = {
  //       addressId: "0",
  //       customerId: userId,
  //       firstName: newAddressForm.First_Name,
  //       middleName: null,
  //       lastName: newAddressForm.Last_Name,
  //       phoneNumber: newAddressForm.Phone_Number,
  //       pincode: newAddressForm.Pin_Code,
  //       address1: newAddressForm.Address,
  //       address2: null,
  //       landmark: "",
  //       city: newAddressForm.Town_City,
  //       state: newAddressForm.States,
  //       country: null,
  //       isDefault: true,
  //       addressTypeId: 1,
  //       deliveryInstructions: null,
  //     };

  //     try {
  //       const response = await fetch(
  //         "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(payLaodNewForm),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to add address");
  //       }

  //       const responseData = await response.json();
  //       if (responseData.result && responseData.result.length > 0) {
  //         const newAddress = responseData.result[0];
  //         if (newAddress && newAddress.addressId) {
  //           setNewAddressData(newAddress); // Save the new address object to state
  //           fetchCustomerById();
  //           setShowPopUp(false);
  //           setNotification({
  //             show: true,
  //             message: "Add new address Successfully!",
  //           });
  //           setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //         } else {
  //           console.warn("Address data is missing addressId:", newAddress);
  //           setShowPopUp(false);
  //         }
  //       } else {
  //         console.warn("No address data found in response");
  //         setShowPopUp(false);
  //       }
  //     } catch (error) {
  //       console.error("Error adding address:", error);
  //       setShowPopUp(false);
  //     }
  //   };

  const fetchCustomerById = async () => {
    // console.log("Fetching address details for ID:", addressId);

    // try {
    //   const response = await fetch(
    //     `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/GetByCustomerId?customerId=${userId}`,
    //     {
    //       method: "GET",
    //     }
    //   );

    //   if (!response.ok) {
    //     const errorDetails = await response.json();
    //     throw new Error(
    //       `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
    //         errorDetails
    //       )}`
    //     );
    //   }

    //   const result = await response.json();
    //   console.log("Fetched address details:", result.result);
    //   // setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
    //   // else if (result.result) {
    //   //   // Append the single address
    //   //   setGetAddress((prevAddresses) => [...prevAddresses, result.result]);
    //   // }
    //   setGetAddress(result.result);
    // } catch (error) {
    //   console.error("Error fetching address details:", error);
    // }
    dispatch(fetchGetByCustomerId(user?.customerId));
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};

    // First Name Validation
    if (!newAddressForm.First_Name.trim()) {
      errors.First_Name = "First Name is required";
    }

    // Last Name Validation
    if (!newAddressForm.Last_Name.trim()) {
      errors.Last_Name = "Last Name is required";
    }

    // Phone Number Validation
    // if (!newAddressForm.Phone_Number) {
    //   errors.Phone_Number = "Phone Number is required";
    // } else if (!/^\d{10}$/.test(newAddressForm.Phone_Number)) {
    //   errors.Phone_Number = "Phone Number must be exactly 10 digits";
    // }

    // Address Validation
    if (!newAddressForm.Address.trim()) {
      errors.Address = "Address is required";
    }

    // City Validation
    if (!newAddressForm.Town_City.trim()) {
      errors.Town_City = "City is required";
    }
    // Check if the "State" field is empty
    if (!newAddressForm.States || newAddressForm.States.trim() === "") {
      errors.States = "State is required";
    }

    // State Validation
    // if (!newAddressForm.States) {
    //   errors.States = "State is required";
    // }

    // Zip Code (Pin Code) Validation
    if (!newAddressForm.Pin_Code) {
      errors.Pin_Code = "Zip Code is required";
    } else if (!/^\d{5}$/.test(newAddressForm.Pin_Code)) {
      errors.Pin_Code = "Zip  Code must be required";
    }

    setFormErrors(errors); // Update the state with validation errors

    // If there are errors, stop form submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log(newAddressForm, "new address");
    const payLaodNewForm = {
      addressId: "0",
      customerId: userId,
      firstName: newAddressForm.First_Name,
      middleName: null,
      lastName: newAddressForm.Last_Name,
      phoneNumber: newAddressForm.Phone_Number,
      pincode: newAddressForm.Pin_Code,
      address1: newAddressForm.Address,
      address2: null,
      landmark: "",
      city: newAddressForm.Town_City,
      state: newAddressForm.States,
      country: null,
      isDefault: true,
      addressTypeId: 1,
      deliveryInstructions: null,
    };

    // try {
    //   const response = await fetch(
    //     "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Address/Add",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payLaodNewForm),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Failed to add address");
    //   }

    //   const responseData = await response.json();
    //   if (responseData.result && responseData.result.length > 0) {
    //     const newAddress = responseData.result[0];
    //     if (newAddress && newAddress.addressId) {
    //       setNewAddressData(newAddress); // Save the new address object to state
    //       fetchCustomerById();
    //       setShowPopUp(false);
    //       setNotification({
    //         show: true,
    //         message: "Address added successfully!",
    //       });
    //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    //     } else {
    //       console.warn("Address data is missing addressId:", newAddress);
    //       setShowPopUp(false);
    //     }
    //   } else {
    //     console.warn("No address data found in response");
    //     setShowPopUp(false);
    //   }
    // } catch (error) {
    //   console.error("Error adding address:", error);
    //   setShowPopUp(false);
    // }
    try {
      await dispatch(fetchAddAddress(payLaodNewForm));
      setShowPopUp(false);
      setNotification({
        show: true,
        message: "Address added successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      await fetchCustomerById();
    } catch (error) {
      console.error("Error adding address:", error);
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    dispatch(fetchGetByCustomerId(user?.customerId));
  }, [dispatch, user?.customerId, deleteProduct]);

  // })

  const handleUseAddressButtons = (e) => {
    e.preventDefault();
    setShowPopUp(false);
    setShowPopUp(true);
    handleSubmitForm(e);
  };

  // console.log("add----->", getAddress);

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredStates = states.filter((state) => {
  //   return state.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const [selectedaddressId, setSelectedaddressId] = useState(getAddress[0]?.addressId);

  // useEffect(() => {
  //   if (getAddress.length > 0 && !selectedAddressId) {
  //     // Set the first address as the default selected address when data is loaded
  //     setSelectedAddressId(getAddress[0].addressId);
  //   }
  // }, [getAddress]);
  const [isInitialized, setIsInitialized] = useState(false); // Flag to track if default selection is set

  // useEffect(() => {
  //   // Check if getAddress has data and we haven't initialized the selection yet
  //   if (getAddress.length > 0 && !isInitialized) {
  //     // Set the first address as the default selected address
  //     // setSelectedAddressId(null);
  //     // setIsInitialized(true); // Mark as initialized
  //     const defaultAddress = getAddress.find((element) => element.isDefault === true);
  //     if (defaultAddress) {
  //       setSelectedAddressId(defaultAddress?.addressId);
  //       setPincodes(defaultAddress.pincode); // Set default pincode
  //       setIsInitialized(true);
  //      }
  //   }
  // }, [getAddress, isInitialized]);
  useEffect(() => {
    // Check if getAddress has data and we haven't initialized the selection yet
    if (getAddress.length > 0 && !isInitialized) {
      // Find the default address
      const defaultAddress = getAddress.find((element) => element.isDefault === true);
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress.addressId);  // Set the default address ID
        setPincodes(defaultAddress.pincode); // Set the default pincode
        setIsInitialized(true); // Mark as initialized
      }
    }
  }, [getAddress, isInitialized]);


  const handleChangeAddress = (addressId) => {
    console.log("sueryaaaa", addressId)
    setSelectedAddressId(addressId);
  };


  const selectedAddress = getAddress.find(
    (item) => item.addressId === selectedAddressId
  );

  const [address, setAddress] = useState(null);
  // const handleRemoveAddress = async (addressId) => {
  //   try {
  //     // Send a POST request to delete the address
  //     const response = await axios.post(
  //       `/api/Customer/Address/Delete?addressId=${addressId}`
  //     );

  //     console.log("Response from delete:", response);

  //     if (response.status === 200) {
  //       // Filter out the deleted address from the address list
  //       const updatedAddresses = getAddress.filter(
  //         (address) => address.addressId !== addressId
  //       );

  //       // Update the state with the new list of addresses
  //       setAddress(updatedAddresses);

  //       // Optionally, show a success message
  //       alert("Address removed successfully!");
  //     } else {
  //       // Handle cases where the deletion was not successful
  //       alert("Failed to remove the address. Please try again.");
  //     }
  //   } catch (error) {
  //     // Catch and handle any errors (network or other)
  //     console.error("Error deleting address:", error);
  //     alert(
  //       "An error occurred while deleting the address. Please try again later."
  //     );
  //   }
  // };


  // const [notification, setNotification] = useState({ show: false, message: "" });

  const products = placeOrder?.products || [];
  const deliveryTax = DeliveryAddress?.products || []

  const calculateTaxAmount = () => {
    if (!isAddressSelected) {
      // alert("place")
      // Default tax calculation
      return products.reduce((total, product) => {
        const price = (product?.pricePerProduct * product?.quantity) || 0;
        const taxPercentage = product?.taxPercentage || 0;
        return total + (price * taxPercentage) / 100;
      }, 0);
    } else {
      // Conditional calculation based on selectedDeliveryAddress
      //  alert("delivery")
      return deliveryTax.reduce((total, product) => {
        const price = (product?.pricePerProduct * product?.quantity) || 0;
        const taxPercentage = product?.taxPercentage || 0;

        // Example: Apply a condition based on state or pincode
        let adjustedTaxPercentage = taxPercentage;
        // if (selectedDeliveryAddress?.state === "SpecialState") {
        //   adjustedTaxPercentage += 5; // Add an additional tax for this state
        // }

        return total + (price * adjustedTaxPercentage) / 100;
      }, 0);
    }
  };

  const totalTaxAmount = calculateTaxAmount();
  // Calculate total tax amount by iterating through the products
  // const totalTaxAmount = products.reduce((total, product) => {
  //   const price = (product?.pricePerProduct * product?.quantity) || 0;
  //   console.log("priceeeeeee-->", price)
  //   const taxPercentage = product?.taxPercentage || 0;
  //   console.log("taxPercentage-->", taxPercentage)

  //   const taxAmount = (price * taxPercentage) / 100;
  //   console.log("taxAmount-->", taxAmount)

  //   return total + taxAmount;
  // }, 0);
  const validTotal = !isNaN(total) && total !== null ? total : 0.00;
  // const totalWithTax = validTotal * totalTaxAmount; // Include tax in the subtotal
  const totalWithTax = totalTaxAmount > 0 ? validTotal + totalTaxAmount : validTotal;
  // Delete Address Handler
  const handleDeleteAddress = (addressId) => {
    console.log("Opening delete modal for address ID:", addressId);
    setDeletePop(true); // Set modal to visible
    setDeleteProduct(addressId); // Set the selected product to delete
  };

  // Cancel Delete Button
  const cancelDeleteButton = () => {
    console.log("Canceling delete operation");
    setDeletePop(false); // Close modal without deleting
    // setDeleteProduct(null); // Reset selected product
  };

  // Success Delete Button
  const successDeleteButton = async () => {
    try {
      console.log("Deleting product:", deleteProduct);
      if (deleteProduct) {
        await fetchDeleteAddressApi(deleteProduct); // Call delete API
        setDeletePop(false); // Close modal after deletion
        setDeleteProduct(null); // Reset selected product
        setNotification({ show: true, message: "Address Deleted Successfully!" });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        await dispatch(fetchGetByCustomerId(user?.customerId));

      }
    } catch (error) {
      console.error("Error while deleting product:", error);
      setNotification({ show: true, message: "Error deleting address." });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }
  };

  // Close Modal Button
  const closeDeleteButton = () => {
    console.log("Closing delete modal");
    setDeletePop(false); // Close modal
    setDeleteProduct(null); // Reset selected product
  };

  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];

  return (
    <div className="w-full flex justify-center items-center">
      {deletePop && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end">
              <button className="w-5 p-1 -mt-8 mx-2" onClick={closeDeleteButton}>
                <img src={wrong} className="w-6 h-4" alt="Close" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to delete this address?
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
      <div className="bg-white  Largest:w-[1550px]  Laptop:w-full  w-full h-fit text-lg text-black px-12 py-2 relative">
        <div className=" w-[85%] flex   items-center shadow-transparent ">
          <div className="w-[50%]">
            <img
              src={logo}
              className="w-48 h-16 cursor-pointer"
              alt="logo"
              onClick={handleNavigate}
            />
            <Notification
              show={notification.show}
              message={notification.message}
            />
            {/* {showpagepopup && ( */}
            <div className="z-50  ml-0 lg:-ml-20  flex items-center justify-center bg-opacity-50">
              <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-white hover:bg-gray-200 text-sm lg:text-xl text-black px-2 md:px-4 py-0 md:py-2 rounded"
                    onClick={handleStayInCheckout}
                  >
                    Stay in Checkout
                  </button>
                  <button
                    className="bg-blue-900 hover:bg-blue-950 text-sm lg:text-xl text-white px-4 py-2 rounded"
                    onClick={handleReturnToCart}
                  >
                    Return to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
          <h1 className=" text-xl lg:text-3xl flex ml-10 md:ml-0 text-center text-black ">Checkout</h1>
          {/* <FaLock /> */}
        </div>
        <div className="bg-white p-4 w-full h-full border-t">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex ">
              {!isTotalHidden && (
                <h1 className="text-orange-400 font-semibold text-lg my-2">
                  1 Select a delivery and service address
                </h1>
              )}
              <div className="flex w-full ">
                {!isTotalHidden && (
                  // {isOpenAddress &&

                  <div className="flex min-w-full  flex-col lg:flex-row">
                    {/* <div className=""> */}


                    <div className="border shadow-md rounded-md h-56 w-full   overflow-y-auto">
                      <div className="p-2 mx-5 ">
                        <h1 className="border-b-2 text-base  bg-white mt-3">
                          Your Address
                        </h1>
                        <div className="overflow-y-scroll h-28">
                          {getAddress.length === 0 ? (
                            <div className="w-full">
                              <p className="mt-6 pt-2 flex justify-center text-base md:text-xl text-blue-900 font-semibold">
                                Please select an address before continuing
                              </p>
                            </div>
                          ) : (
                            getAddress.map((item) => (
                              <div
                                key={item.addressId}
                                className="border flex-col rounded-md flex my-2 p-2 px-6 bg-pink-50 border-orange-200"
                              >
                                <div className="flex flex-col">
                                  <div className="flex text-base w-full">
                                    <div className="flex items-center w-full">
                                      <div className="flex flex-wrap">
                                        <div className="flex">
                                          <input
                                            type="radio"
                                            checked={selectedAddressId === item.addressId} // Check if the current item is selected
                                            onChange={() => handleChangeAddress(item?.addressId)} // Handle the change when a new address is selected
                                            onClick={() => {
                                              handleUseAddress(item.state, item.pincode, item?.addressId); // Proceed with address usage
                                            }}
                                            className="mr-3"
                                          />
                                        </div>

                                        {/* Address display */}
                                        <h1 className="font-semibold">
                                          {item.firstName} {item.lastName || ""},
                                        </h1>
                                        {item.address2 && <p className="mr-1">{item.address2},</p>}
                                        <p className="mr-1">{item.address1},</p>
                                        <p className="mr-1">{item.city},</p>
                                        <p className="mr-1">{item.state}</p>
                                        <p className="mr-1">{item.pincode},</p>
                                        <p>{item.phoneNumber}</p>

                                        {/* Edit button */}
                                        <p
                                          className="ml-2 items-center flex justify-center text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
                                          onClick={() => handleEditAddress(item)}
                                        >
                                          <Tooltip title="Edit" placement="top">
                                            <img
                                              src={edit}
                                              alt="Edit"
                                              className="cursor-pointer w-7 h-7"
                                            />
                                          </Tooltip>
                                        </p>

                                        {/* Delete button */}
                                        <p
                                          className="flex items-center justify-center ml-2 text-sm text-cyan-500 hover:underline hover:text-red-500 cursor-pointer"
                                          onClick={() => handleDeleteAddress(item.addressId)}
                                        >
                                          <Tooltip placement="top" title="Delete">
                                            <img
                                              src={Bin}
                                              alt="Delete"
                                              className="cursor-pointer w-4 h-4"
                                            />
                                          </Tooltip>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        <div className="flex cursor-pointer">
                          <img src={plus} className="w-5 h-5" />
                          <h1
                            className="hover:text-red-400 hover:underline text-cyan-600 "
                            onClick={handlepopOpen}
                          >
                            Add a new address
                          </h1>
                        </div>

                        {/* Conditionally show the "Use this address" button if there are addresses */}
                        {/* {getAddress.length > 0 && ( */}


                        {/* //<div></div> */}
                        {/* // <button */}
                        {/* //   className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white "
                          //   onClick={() => {
                          //     if (selectedAddressId) {
                          //       handleUseAddress(); // Proceed with navigation
                          //     } else { */}
                        {/* //       alert(
                          //         "Please select an address before continuing."
                          //       ); // Or display error message
                          //     }
                          //   }}
                          // >
                          //   Use this address */}
                        {/* // </button>
                        )} */}
                      </div>
                    </div>

                    {/* Edit ddress Pop up */}
                    {isShowPopUp && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                          <div className="flex justify-between border-b pb-4 items-center">
                            <h1>Edit Address</h1>
                            <img
                              src={cross} // Replace with your close icon source
                              className="w-5 h-5 cursor-pointer"
                              onClick={() => setIsShowPopUp(false)}
                              alt="Close Icon"
                            />
                          </div>
                          {/* Address form fields */}

                          <div className="flex my-2 gap-2">
                            <TextField
                              label="First Name"
                              name="First_Name"
                              size="small"
                              className="w-full"
                              value={addressForm.First_Name}
                              onChange={handleInputChange}
                              error={!!formErrors.First_Name}
                              helperText={formErrors.First_Name}
                            />

                            <TextField
                              label="Last Name"
                              name="Last_Name"
                              size="small"
                              className="w-full"
                              value={addressForm.Last_Name}
                              onChange={handleInputChange}
                              error={!!formErrors.Last_Name}
                              helperText={formErrors.Last_Name}
                            />
                          </div>

                          <div className="my-4 flex gap-2">
                            <TextField
                              label="Address"
                              id="Address"
                              name="Address"
                              size="small"
                              className="w-full"
                              value={addressForm.Address}
                              onChange={handleInputChange}
                              error={!!formErrors.Address}
                              helperText={formErrors.Address}
                            />
                            <TextField
                              label="City"
                              name="Town_City"
                              size="small"
                              className="w-full"
                              value={addressForm.Town_City}
                              onChange={handleInputChange}
                              error={!!formErrors.Town_City}
                              helperText={formErrors.Town_City}
                            />
                          </div>

                          <div className="flex my-2 gap-2">
                            {/* <FormControl
                              className="w-[50%]"
                              size="small"
                              error={!!formErrors.States}
                            >
                              <InputLabel id="state-select-label">
                                State
                              </InputLabel>
                              <Select
                                id="state-select"
                                label="State"
                                value={addressForm.States} // Correctly bind the form value
                                name="States" // Ensure name matches the key in addressForm
                                onChange={handleInputChange}
                                MenuProps={{
                                  PaperProps: {
                                    style: {
                                      maxHeight: 200, // Set the maximum height of the dropdown
                                    },
                                  },
                                }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {states.map((state) => (
                                  <MenuItem
                                    key={state.abbreviation}
                                    // value={state.abbreviation}
                                    value={state.name}
                                  >
                                    {state.name}
                                  </MenuItem>
                                ))}
                              </Select>
                              {/* {error.State && <span className="text-red-500">{error.State}</span>} 
                          </FormControl> */}
                          
                          <FormControl
                            className="w-[50%]"
                            size="small"
                            error={!!formErrors.States}
                          >
                            <InputLabel id="state-select-label">State</InputLabel>
                            <Select
                              id="state-select"
                              label="State"
                              value={addressForm.States} // Correctly bind the form value
                              name="States" // Ensure name matches the key in addressForm
                              onChange={handleInputChange}
                              MenuProps={{
                                PaperProps: {
                                  style: {
                                    maxHeight: 200, // Set the maximum height of the dropdown
                                  },
                                },
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {states
                                .filter((state) => !excludedStates.includes(state.name.toUpperCase())) // Filter out excluded states
                                .map((state) => (
                                  <MenuItem
                                    key={state.abbreviation}
                                    value={state.name} // Bind value to the state's name
                                  >
                                    {state.name}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>;

                            <TextField
                              label="Zip "
                              name="Pin_Code"
                              size="small"
                              className="w-[50%]"
                              value={addressForm.Pin_Code}
                              // onChange={handleInputChange}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                handleInputChange({
                                  target: { name: "Pin_Code", value },
                                }); // Update the state with only numbers
                              }}
                              error={!!formErrors.Pin_Code}
                              helperText={formErrors.Pin_Code}
                              inputProps={{ maxLength: 5 }}
                            />
                          </div>
                          <div className="flex my-2 gap-2">
                            <TextField
                              label="Phone Number"
                              name="Phone_Number"
                              size="small"
                              className="w-full"
                              value={formatPhoneNumber(
                                addressForm.Phone_Number
                              )}
                              onChange={handleInputChange}
                              error={!!formErrors.Phone_Number}
                              helperText={formErrors.Phone_Number}
                              inputProps={{ maxLength: 12 }}
                            />

                            <TextField
                              label="Email ID"
                              name="Email ID"
                              size="small"
                              className="w-full"
                            // value ={}
                            // value={formatPhoneNumber(addressForm.Phone_Number)}
                            // onChange={handleInputChange}
                            // error={!!formErrors.Phone_Number}
                            // helperText={formErrors.Phone_Number}
                            // inputProps={{ maxLength: 12 }}
                            />
                          </div>

                          <div className="my-4">
                            <input type="checkbox" id="default-address" checked={!getAddress.isDefault}
                              readOnly={!getAddress.isDefault} style={{
                                accentColor: 'blue', // Inline style for checkmark color
                              }} />
                            <label htmlFor="default-address" className="ml-2">
                              Make this my default address
                            </label>
                          </div>

                          <div className="flex justify-between mt-6">
                            <button
                              className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                              onClick={handleSaveAddress}
                            >
                              Save Address
                            </button>
                            <button
                              className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                              onClick={() => setIsShowPopUp(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Add new Address popup */}
                    {showPopUp && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                          <form onSubmit={handleSubmitForm}>
                            <div className="flex justify-between border-b pb-4 items-center">
                              <h1 className="text-blue-900 font-semibold">
                                Add a new address
                              </h1>
                              <img
                                src={cross}
                                className="w-5 h-5 cursor-pointer"
                                onClick={handleRemove}
                                alt="Close Icon"
                              />
                            </div>

                            <div className="flex my-2 gap-2">
                              <TextField
                                label="First Name"
                                id="First_Name"
                                name="First_Name" // Matches state key
                                value={newAddressForm.First_Name} // Controlled input
                                onChange={handleChangeForm} // Call the change handler
                                size="small"
                                className="w-full"
                                error={!!formErrors.First_Name}
                                helperText={formErrors.First_Name}
                              />

                              <TextField
                                label="Last Name"
                                id="Last_Name"
                                name="Last_Name" // Matches state key
                                value={newAddressForm.Last_Name} // Controlled input
                                onChange={handleChangeForm} // Call the change handler
                                size="small"
                                className="w-full"
                                error={!!formErrors.Last_Name}
                                helperText={formErrors.Last_Name}
                              />
                            </div>

                            <div className="my-4 flex gap-2">
                              <TextField
                                label="Address"
                                id="Address"
                                name="Address" // Matches state key
                                value={newAddressForm.Address}
                                onChange={handleChangeForm}
                                size="small"
                                className="w-full"
                                error={!!formErrors.Address}
                                helperText={formErrors.Address}
                              />

                              <TextField
                                label="City"
                                id="Town_City"
                                name="Town_City" // Matches state key
                                value={newAddressForm.Town_City}
                                onChange={handleChangeForm}
                                size="small"
                                className="w-full"
                                error={!!formErrors.Town_City}
                                helperText={formErrors.Town_City}
                              />
                            </div>

                            <div className="flex my-2 gap-2">
                              {/* <FormControl
                                className="w-[50%]"
                                size="small"
                                error={!!formErrors.States}
                              >
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                  id="state-select"
                                  label="State"
                                  value={newAddressForm.States}
                                  name="State"
                                  onChange={handleInputChange}
                                  MenuProps={{
                                    PaperProps: {
                                      style: {
                                        maxHeight: 200, // Set the maximum height of the dropdown
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  {states.map((state) => (
                                    <MenuItem
                                      key={state.abbreviation}
                                      value={state.abbreviation}
                                    >
                                      {state.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {/* {error.State && <span className="text-red-500">{error.State}</span>} 
                              </FormControl> */}
                              <FormControl
                                className="w-[50%]"
                                size="small"
                                error={!!formErrors.States}
                              >
                                <InputLabel id="state-select-label">
                                  State
                                </InputLabel>
                                <Select
                                  id="state-select"
                                  label="State"
                                  value={newAddressForm.States} // Bind value to addressForm.States
                                  name="States" // Ensure name matches the state key in addressForm
                                  onChange={handleChangeForm} // Call handleInputChange on selection
                                  MenuProps={{
                                    PaperProps: {
                                      style: {
                                        maxHeight: 200, // Set the max height of the dropdown
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  {states.map((state) => (
                                    <MenuItem
                                      key={state.abbreviation}
                                      // value={state.abbreviation}
                                      value={state.name}
                                    >
                                      {state.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {formErrors.States && (
                                  <span className="text-red-700 text-sm">
                                    {formErrors.States}
                                  </span>
                                )}
                              </FormControl>

                              <TextField
                                label="zip"
                                id="Pin_Code"
                                name="Pin_Code" // Matches state key
                                value={newAddressForm.Pin_Code}
                                // onChange={handleChangeForm}
                                onChange={(e) => {
                                  const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                  ); // Remove non-numeric characters
                                  handleChangeForm({
                                    target: { name: "Pin_Code", value },
                                  }); // Update the state with only numbers
                                }}
                                size="small"
                                className="w-[50%]"
                                error={!!formErrors.Pin_Code}
                                helperText={formErrors.Pin_Code}
                                inputProps={{ maxLength: 5 }}
                              />
                            </div>
                            <div className="flex my-2 gap-2">
                              <TextField
                                label="Phone Number"
                                name="Phone_Number"
                                size="small"
                                className="w-full"
                                value={formatPhoneNumber(
                                  newAddressForm.Phone_Number
                                )}
                                onChange={handleChangeForm}
                                error={!!formErrors.Phone_Number}
                                helperText={formErrors.Phone_Number}
                                inputProps={{ maxLength: 12 }}
                              />

                              <TextField
                                label="Email ID"
                                name="Email ID"
                                size="small"
                                className="w-full"
                              // value={formatPhoneNumber(addressForm.Phone_Number)}
                              // onChange={handleInputChange}
                              // error={!!formErrors.Phone_Number}
                              // helperText={formErrors.Phone_Number}
                              // inputProps={{ maxLength: 12 }}
                              />
                            </div>

                            <div className="my-4">
                              <input type="checkbox" id="default-address" />
                              <label htmlFor="default-address" className="ml-2">
                                Make this my default address
                              </label>
                            </div>

                            <div className="flex justify-between mt-6">
                              <button
                                className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                                type="submit"
                                onClick={handleUseAddressButtons}
                              >
                                Use this address
                              </button>
                              <button
                                className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                                onClick={handleRemove}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {/* </div> */}
                    <div className="hidden w-full lg:w-[30%]  mx-16  lg:flex flex-col pt-2 items-center lg:relative">
                      <div className="border lg:fixed shadow-md rounded-md p-7  py-5">
                        {/* <div className="flex items-center justify-center">
                        <button className="border rounded-full text-sm flex justify-center items-center px-4 py-2 bg-blue-900 text-white">
                          Use this payment method
                        </button>
                      </div> */}
                        <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                          <p>Choose a payment method to continue</p>
                          <p>checking out. You will still have a chance to</p>
                          <p>review and edit your order before it is final.</p>
                        </div>
                        <div>
                          <h1 className="font-semibold text-xl my-2">
                            Order Summary
                          </h1>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                          <p>Items(s) Subtotal :</p>
                          <p>${validTotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                          <div className="flex ">
                          <img src={shipping} className="w-5 h-5 mr-1"/>
                          <p>Shipping:</p>
                          </div>
                          <p>${Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                        <div className="flex ">
                        <img src={tax} className="w-5 h-5 mr-1"/>
                          <p>Tax :</p>
                          </div>
                          {getAddress.length === 0 ? (
                            <p>$0.00</p>
                          ) : (
                            <p>${totalTaxAmount.toFixed(2)}</p>
                          )}
                        </div>
                        <div className="flex justify-between text-sm  border-b my-2">
                          <p>Total:</p>
                          {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
                          <p>${(totalWithTax + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>
                        </div>
                        {/* <div className="flex justify-between text-sm border-b my-2">
                        <p>Promotion Applied :</p>
                        <p>$0.00</p>
                      </div> */}
                        <div className="flex justify-between text-red-500 font-semibold">
                          <p>Grand Total:</p>
                          {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
                          <p>${(totalWithTax + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* other components start */}

            {/* <div className="flex justify-between"> */}
            {/* <h1>1 Selected address</h1> */}
            {/* <div>
                        {selectedAddress && (
                          <div className="mt-4 flex">
                            <h2 className="font-bold mr-2 ">Selected Address:</h2>
                            <p className="mr-1">{selectedAddress.firstName}, </p>
                            <p className="mr-1">{selectedAddress.address1},</p>
                            <p className="mr-1">{selectedAddress.city},</p>
                            <div className="flex">
                              <p className="mr-1">{selectedAddress.state},</p>
                              <p className="ml-2">{selectedAddress.pincode}.</p>
                            </div>
                          </div>
                         )} 
                      </div> */}

            {!isTotalHidden && (

              <div className="">

                <Proccedtoshipment selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} totalNetCharges={totalNetCharges} setTotalNetCharges={setTotalNetCharges} productId={productId} />
                {/* <div className="border-b my-3 w-[70%]"> */}
                {/* <Payment /> */}
                {/* <SquarePaymentForm */}
                {/* // applicationId={applicationId} */}
                {/* // locationId={locationId}  */}
                {/* amount={(validTotal + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)} */}
                {/* // onPaymentSuccess={handlePaymentSuccess} */}
                {/* // onPaymentError={handlePaymentError} */}
                {/* /> */}
                <div className="ml-6 w-[65%]">
                  {selectedAddressId ? (

                    <SquarePaymentForm
                      // amount={(validTotal + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}
                      amount={(totalWithTax + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}
                    />
                  ) : (
                    <p className="text-red-500 font-semibold mt-3">Please select an address for payment.</p>
                  )}
                  {/* </div> */}
                </div>
                {/* <div className="border-b my-3">
                  <h1>3 Offers</h1>
                </div>
                <div className="border-b my-3">
                  <h1>4 Items and delivery</h1>
                </div> */}
              </div>
            )}
          </div>


          <div className="block lg:hidden sm:w-[90%] md:w-[70%] h-auto  pt-2 items-center lg:relative">
            <div className="border lg:fixed shadow-md rounded-md p-4  py-5">
              {/* <div className="flex items-center justify-center">
                        <button className="border rounded-full text-sm flex justify-center items-center px-4 py-2 bg-blue-900 text-white">
                          Use this payment method
                        </button>
                      </div> */}
              <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                <p>Choose a payment method to continue</p>
                <p>checking out. You will still have a chance to</p>
                <p>review and edit your order before it is final.</p>
              </div>
              <div>
                <h1 className="font-semibold text-xl my-2">
                  Order Summary
                </h1>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <p>Items(s) Subtotal :</p>
                <p>${validTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <p>Shipping:</p>
                <p>${Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0).toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <p>Tax :</p>
                {getAddress.length === 0 ? (
                  <p>$0.00</p>
                ) : (
                  <p>${totalTaxAmount.toFixed(2)}</p>
                )}
              </div>
              <div className="flex justify-between text-sm  border-b my-2">
                <p>Total:</p>
                {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
                <p>${(totalWithTax + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>
              </div>
              {/* <div className="flex justify-between text-sm border-b my-2">
                        <p>Promotion Applied :</p>
                        <p>$0.00</p>
                      </div> */}
              <div className="flex justify-between text-red-500 font-semibold">
                <p>Grand Total:</p>
                {/* <p>${(validTotal + validNetCharge).toFixed(2)}</p> */}
                <p>${(totalWithTax + Object.values(totalNetCharges).reduce((acc, value) => acc + value, 0)).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between w-full">
            <div className="flex flex-col w-full">
              {isTotalHidden && (
                <div className="flex border-b w-full ">
                  <div className="w-[60%]">
                    <div className="flex justify-between">
                      <h1>1 Delivery address</h1>
                      <div>
                        {selectedAddress && (
                          <div className="mt-4">
                            <h2 className="font-bold">Selected Address:</h2>
                            <p>{selectedAddress.firstName},</p>
                            <p>{selectedAddress.address1},</p>
                            <p>{selectedAddress.city},</p>
                            <div className="flex">
                              <p>{selectedAddress.state},</p>
                              <p className="ml-2">{selectedAddress.pincode}.</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={handleOpenAddress}
                          className="text-cyan-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                   
                    <Payment />

                   
                  </div>
                  <div className=" w-[30%] mx-16 flex flex-col pt-2 items-center">
                    <div className="border fixed shadow-md rounded-md p-7 py-5">
                 
                      <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                        <p>Choose a payment method to continue</p>
                        <p>checking out. You will still have a chance to</p>
                        <p>review and edit your order before it is final.</p>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl my-2">
                          Order Summary
                        </h1>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Items :</p>
                        <p>${total}</p>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Shipment:</p>
                        <p>${netCharge.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Total:</p>
                        <p>${(validTotal + validNetCharge).toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm border-b my-2">
                        <p>Promotion Applied :</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex justify-between text-red-500 font-semibold">
                        <p>Order Total:</p>
                        <p>${(validTotal + validNetCharge).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Address;

