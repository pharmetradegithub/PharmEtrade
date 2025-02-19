// import React, { useEffect, useState } from "react";
// import plus from '../../assets/Icons/plus[1].png';
// import AmericanExpress from "../../assets/AmericanExpress.png";
// import visa from "../../assets/visa.png";
// import Discover from "../../assets/Discover.png";
// import dotspaymenticon from "../../assets/dotpaymenticon.png";
// import net from "../../assets/net.png";
// import cross from "../../assets/letter-x[1].png";
// import ItemsAndDelivery from "./ItemsAndDelivery";

// import {
//   Box,
//   TextField,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOrderPayment } from "../../Api/OrderApi";
// import Notification from "../Notification";
// import { useNavigate } from "react-router-dom";
// import { getCartItemsApi } from "../../Api/CartApi";


// const Payment = () => {
//   const [isButtonVisible, setIsButtonVisible] = useState(false);
//   const [showItemsAndDelivery, setShowItemsAndDelivery] = useState(false); // State to control visibility

//   const [selectedPayment, setSelectedPayment] = useState(false);
//   const [isPopupShow, setIsPopupShow] = useState(false);
//   const [isCardPopup, setIsCardPopup] = useState(false);
//   const [isEmiPopup, SetIsEmiPopup] = useState(false)
//   const [cardNumber, setCardNumber] = useState("");
//   const [nickName, setNickName] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");

//   const generateYears = (startYear, endYear) => {
//     let years = [];
//     for (let year = startYear; year <= endYear; year++) {
//       years.push(year);
//     }
//     return years;
//   };

//   const generateMonths = () => {
//     const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     return months;
//   };

//   const currentYear = new Date().getFullYear();
//   const futureYears = generateYears(2024, currentYear + 10); // Including future years (e.g., 10 years ahead)
//   const months = generateMonths();
//   const getOrder = useSelector((state) => state.order.getOrder)
//   console.log("getorderPayment-->", getOrder)
//   const [orderGet, setorderGet] = useState(getOrder)
//   const ordered = useSelector((state) => state.order.orderPlace)
//   console.log("ordered-->", ordered)

//   const handleemiopen = () => {
//     SetIsEmiPopup(true)
//   }


//   const handleCardOpen = () => {
//     setIsCardPopup(true);
//   };

//   const handleCardRemove = () => {
//     setIsCardPopup(false);
//   };

//   // proceed payment
//   const [cvv, setCvv] = useState("");

//   const [successMessage, setSuccessMessage] = useState("");
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });

//   const dispatch = useDispatch()


//   //   const [cardNumber, setCardNumber] = useState('');
//   // const [nickName, setNickName] = useState('');
//   // const [expiryMonth, setExpiryMonth] = useState('');
//   // const [expiryYear, setExpiryYear] = useState('');
//   // const [cvv, setCvv] = useState('');

//   const [errors, setErrors] = useState({
//     cardNumber: false,
//     nickName: false,
//     expiryMonth: false,
//     expiryYear: false,
//     cvv: false,
//   });

//   const validateFields = () => {
//     const newErrors = {
//       cardNumber: cardNumber.length !== 16,
//       nickName: nickName.trim() === "",
//       expiryMonth: expiryMonth === "",
//       expiryYear: expiryYear === "",
//       cvv: cvv.length !== 3 && cvv.length !== 4,
//     };

//     setErrors(newErrors);
//     return !Object.values(newErrors).some((error) => error); // Return true if no errors
//   };

//   const navigate = useNavigate()
//   const handleProceedPayment = async () => {
//     if (!validateFields()) {
//       setSuccessMessage("Please fill all the fields correctly.");
//       return;
//     }

//     setCardNumber('')
//     setNickName('')
//     setExpiryMonth("")
//     setExpiryYear("")
//     setCvv('')
//     if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
//       setSuccessMessage("Please fill all the fields.");
//       return; // Exit the function if validation fails
//     }
//     const currentDate = new Date();
//     const payload = {
//       paymentInfoId: "",
//       orderId: ordered?.orderId,
//       paymentMethodId: 1,
//       cardNumber: cardNumber,
//       cardType: "",
//       cvv: cvv,
//       validThrough: `${expiryMonth}/${expiryYear}`,
//       nameOnCard: nickName,
//       bank: "",
//       paymentAmount: 0,
//       isCreditCard: true,
//       statusId: 3,
//       paymentStatus: "",
//       paymentDate: currentDate.toISOString()
//     };

//   //   try {
//   //     await dispatch(fetchOrderPayment(payload));
//   //     setIsCardPopup(false);
//   //     setNotification({ show: true, message: "Payment processed successfully!" });
//   //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   //     await navigate('/layout/layoutorderlist')
//   //   } catch (error) {
//   //     console.log("error", error);
//     //   }
//     // try {
//     //   await dispatch(fetchOrderPayment(payload));
//     //   setIsCardPopup(false);
//     //   setNotification({ show: true, message: "Payment processed successfully!" });
//     //   setTimeout(() => {
//     //     setNotification({ show: false, message: "" });
//     //     navigate('/layout/layoutorderlist');
//     //   }, 5000); // Navigate after 3 seconds
//     // } catch (error) {
//     //   console.log("error", error);
//     // }
//     try {
//       await dispatch(fetchOrderPayment(payload));
//       setIsCardPopup(false);
//       setTimeout(() => {
//         setNotification({ show: true, message: "Payment processed successfully!" });
//       }, 3000)
//       await getCartItemsApi()
//       setTimeout(() => {
//         setNotification({ show: false, message: "" });
//         navigate('/layout/layoutorderlist');
//       }, 5000); // Navigate after 3 seconds
//     } catch (error) {
//       console.log("error", error);
//     }

  
//   };


//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       await getCartItemsApi()
//   //     } catch (error) {
//   //       console.log("error", error);
//   //     }
//   //   }
//   //   fetchData()

//   // }, [dispatch])


//   const handleProceedCodPayment = () => {
//     // / Set notification
//     setNotification({ show: true, message: "Proceeding to payment..." });

//     // Hide the notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: "" });
//     }, 3000); // 3000 milliseconds = 3 seconds

//     // Show the ItemsAndDelivery component
//     setShowItemsAndDelivery(true);
//   };

//   const handlePaymentcodSelection = (paymentMethod) => {
//     setSelectedPayment(paymentMethod);
//     setIsButtonVisible(paymentMethod === "cod");
//     setIsPopupShow(false)
//     // Show button only if "Cash on Delivery" is selected
//   };
//   // const handleProceedPayment = async () => {
//   //   // if (cardNumber && nickName && expiryMonth && expiryYear && cvv) {
//   //   //   setSuccessMessage("Payment processed successfully!");
//   //   // } else {
//   //   //   setSuccessMessage("Please fill all the fields.");

//   //   // }

//   //     // Clear success message initially
//   // setSuccessMessage("");

//   // // Validation checks
//   // const cardNumberPattern = /^\d{16}$/; // 16 digits only
//   // const namePattern = /^[A-Za-z\s]+$/; // Only alphabets and spaces
//   // const cvvPattern = /^\d{3,4}$/; // 3 or 4 digits

//   // // Validate card number
//   // if (!cardNumberPattern.test(cardNumber)) {
//   //   setSuccessMessage("Please enter a valid 16-digit card number.");
//   //   return;
//   // }

//   // // Validate name
//   // if (!namePattern.test(nickName)) {
//   //   setSuccessMessage("Please enter a valid name (alphabets only).");
//   //   return;
//   // }

//   // // Validate expiry date
//   // if (!expiryMonth || !expiryYear) {
//   //   setSuccessMessage("Please select the card's expiry date.");
//   //   return;
//   // }

//   // // Validate CVV
//   // if (!cvvPattern.test(cvv)) {
//   //   setSuccessMessage("Please enter a valid CVV (3 or 4 digits).");
//   //   return;
//   // }

//   //   setCardNumber('')
//   //   setNickName('')
//   //   setExpiryMonth("")
//   //   setExpiryYear("")
//   //   setCvv('')
//   //   if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
//   //     setSuccessMessage("Please fill all the fields.");
//   //     return; // Exit the function if validation fails
//   //   }
//   //   const currentDate = new Date();
//   //   console.log("payload-->", orderGet)
//   //   const payload = {
//   //     paymentInfoId: "",
//   //     orderId: ordered?.orderId,
//   //     paymentMethodId: 1,
//   //     cardNumber: cardNumber,
//   //     cardType: "",
//   //     cvv: cvv,
//   //     validThrough: `${expiryMonth}/${expiryYear}`,
//   //     nameOnCard: nickName,
//   //     bank: "",
//   //     paymentAmount: 0,
//   //     isCreditCard: true,
//   //     statusId: 3,
//   //     paymentDate: currentDate.toISOString()
//   //   }
//   //   try {
//   //     await dispatch(fetchOrderPayment(payload));
//   //     setIsCardPopup(false);
//   //     setNotification({ show: true, message: "Payment processed successfully!" });
//   //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   //   } catch (error) {
//   //     console.log("error", error);
//   //   }
//   //   // try {

//   //   //   await dispatch(fetchOrderPayment(payload));
//   //   //   setIsCardPopup(false);
//   //   //   setNotification({ show: true, message: "Payment processed successfully!" });
//   //   //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   //   // } catch (error) {
//   //   //   console.log("error", error)
//   //   // }
//   // };
//   const handlePaymentSelection = (paymentMethod) => {
//     setSelectedPayment(paymentMethod);
//     if (paymentMethod === 'card') {
//       setIsPopupShow(true);
//     } else {
//       setIsPopupShow(false);
//       setIsCardPopup(false);
//     }
//     setShowItemsAndDelivery(false);

//   };
//   // const handleCardOpen = () => {
//   //   setIsCardPopup(true);
//   // };

//   // const handleCardRemove = () => {
//   //   setIsCardPopup(false);
//   // };

//   // const DeliveryOptions = () => {
//     const [selectedOption, setSelectedOption] = useState("");
  
//     const handleChange = (e) => {
//       setSelectedOption(e.target.value);
//     };
//   return (
//     <div>
//       {notification.show && <Notification show={notification.show} message={notification.message} />}



//       <div className="my-2 flex flex-col">
//         <div className="my-2">

        
//       <label htmlFor="delivery-options" className=" text-orange-500"> 2.Select Delivery Option:</label>
//       </div>
//       <div>

     
//       <select id="delivery-options" value={selectedOption} onChange={handleChange} className="bg-gray-100 border rounded-md">
//         <option value="" disabled className=" ">Select an option</option>
//         <optgroup label="Same-day delivery">
//           <option value="sameDay">FedEx SameDay®</option>
//         </optgroup>
//         <optgroup label="Overnight delivery">
//           <option value="firstOvernight">FedEx First Overnight® (by 8 AM or 10 AM)</option>
//           <option value="priorityOvernight">FedEx Priority Overnight® (by 10:30 AM, 12 PM, or 4:30 PM)</option>
//           <option value="standardOvernight">FedEx Standard Overnight® (by 3 PM or 8 PM)</option>
//         </optgroup>
//         <optgroup label="2-day delivery">
//           <option value="twoDay">FedEx 2Day® (by 4:30 PM or 8 PM)</option>
//         </optgroup>
//         <optgroup label="3-day delivery">
//           <option value="threeDay">FedEx Express Saver® (by 4:30 PM or 8 PM)</option>
//         </optgroup>
//         <optgroup label="Ground services">
//           <option value="groundBusiness">FedEx Ground® (to businesses, Monday to Friday)</option>
//           <option value="homeDelivery">FedEx Home Delivery® (to residences, every day)</option>
//         </optgroup>
//       </select>
//       </div>

//       {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
//     </div>


//       <h2 className="text-orange-500">3 Select a payment method</h2>

//       <div className="border rounded-md p-4">


//         <div>
//           <div className="flex flex-col">
//             <div
//               className={`flex w-[95%] cursor-pointer bg-pink-50 border border-black rounded-md items-center p-2
//                 `}
//               onClick={() => handlePaymentSelection("card")}
//             >
//               <input
//                 type="radio"
//                 checked
//                 // ={selectedPayment === "card"}
//                 readOnly
//                 // defaultChecked
//                 className="cursor-pointer"
//               />
//               <span className="ml-2">Credit or debit card</span>
//             </div>
//             {/* {selectedPayment === "card" && ( */}
//               <div className="flex mt-2">
//                 <img src={AmericanExpress} className="w-12 h-9 mr-2" />
//                 <img src={visa} className="w-12 h-9 mr-2" />
//                 <img src={Discover} className="w-12 h-9 mr-2" />
//                 <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
//                 <img src={net} className="w-12 h-9" />
//               </div>
//             {/* )} */}




//             {/* {isPopupShow && ( */}



//               <div className="p-8 bg-gray-100 rounded-lg m-8 -ml-0 mt-2">
//                 <h1 className="text-xl font-bold mb-4">Enter Card Details</h1>

//                 <div className="flex flex-col space-y-4">
//                   <div className="flex space-x-6">
//                     {/* Card Number */}
//                     <div className="flex flex-col w-1/2">
//                       <label className="text-sm mb-2">Card Number</label>
//                       <input
//                         type="text"
//                         value={cardNumber}
//                         onChange={(e) => {
//                           const value = e.target.value;
//                           if (/^\d*$/.test(value)) {
//                             setCardNumber(value);
//                           }
//                         }}
//                         className={`h-10 border px-3 rounded-md ${errors.cardNumber ? "border-red-500" : "border-black"}`}
//                         maxLength="16"
//                         placeholder="Enter card number"
//                       />
//                       {errors.cardNumber && <p className="text-red-500 text-sm">Card number must be 16 digits.</p>}
//                     </div>

//                     {/* Name */}
//                     <div className="flex flex-col w-1/2">
//                       <label className="text-sm mb-2">Name</label>
//                       <input
//                         type="text"
//                         value={nickName}
//                         onChange={(e) => setNickName(e.target.value)}
//                         className={`h-10 border px-3 rounded-md ${errors.nickName ? "border-red-500" : "border-black"}`}
//                         placeholder="Enter name"
//                       />
//                       {errors.nickName && <p className="text-red-500 text-sm">Name is required.</p>}
//                     </div>
//                   </div>

//                   {/* Expiry Date and CVV */}
//                   <div>
//                     <label className="text-sm">Expiry Date</label>
//                     <div className="flex items-center mt-1">
//                       <select
//                         className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-2 ${errors.expiryMonth ? "border-red-500" : "border-black"}`}
//                         value={expiryMonth}
//                         onChange={(e) => setExpiryMonth(e.target.value)}
//                       >
//                         <option value="">Month</option>
//                         {months.map((month, index) => (
//                           <option key={index} value={month}>
//                             {month}
//                           </option>
//                         ))}
//                       </select>
//                       <select
//                         className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-4 ${errors.expiryYear ? "border-red-500" : "border-black"}`}
//                         value={expiryYear}
//                         onChange={(e) => setExpiryYear(e.target.value)}
//                       >
//                         <option value="">Year</option>
//                         {futureYears.map((year) => (
//                           <option key={year} value={year}>
//                             {year}
//                           </option>
//                         ))}
//                       </select>
//                       {/* {errors.expiryMonth && <p className="text-red-500 text-sm">Month name is required.</p>} */}


//                       {/* CVV */}
//                       <div className="flex items-center">
//                         <input
//                           type="text"
//                           value={cvv}
//                           onChange={(e) => {
//                             const value = e.target.value;
//                             if (/^\d{0,4}$/.test(value)) {
//                               setCvv(value);
//                             }
//                           }}
//                           className={`w-20 h-10 border px-2 rounded-md ${errors.cvv ? "border-red-500" : "border-black"}`}
//                           placeholder="CVV"
//                           maxLength="4"
//                         />
//                         <label className="ml-2 text-sm">CVV</label>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                     {errors.expiryMonth && <p className="text-red-500 text-sm">Month & Year name is required.</p>}

//                     {errors.cvv && <p className="text-red-500 text-sm">CVV must be 3 or 4 digits.</p>}
//                </div>
//                   </div>

//                   {/* Info Text */}
//                   <div className="text-sm text-gray-600 mt-4">
//                     <p>
//                       Please ensure that you enable your card for online payments from your bank’s app.
//                     </p>
//                   </div>

//                   {/* Proceed Payment Button */}
//                   <div className="flex justify-end mt-4">
//                     <button
//                       className="w-40 h-10 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors"
//                       onClick={handleProceedPayment}
//                     >
//                       Proceed Payment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             {/* )} */}





//           </div>




//           {/* <div
//             className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
//               ? "bg-pink-50 border border-black rounded-md"
//               : ""
//               }`}
//             onClick={() => handlePaymentSelection("cod")}
//           >
//             <input type="radio" className="cursor-pointer" checked={selectedPayment === "cod"} readOnly />
//             <span className="ml-2">Cash on Delivery</span>
//           </div> */}



//           {/* <div>
//             {notification.show && <div>{notification.message}</div>}

//             <div className="flex flex-col">
//               <div
//                 className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
//                   ? "bg-pink-50 border border-black rounded-md"
//                   : ""
//                   }`}
//                 onClick={() => handlePaymentcodSelection("cod")}
//               >
//                 <input
//                   type="radio"
//                   className="cursor-pointer"
//                   checked={selectedPayment === "cod"}
//                   readOnly
//                 />
//                 <span className="ml-2">Cash on Delivery</span>
//               </div>

//               {isButtonVisible && (
//                 <button
//                   onClick={handleProceedCodPayment}
//                   className="mt-4 bg-blue-900 text-white w-40 p-1 rounded-full"
//                 >
//                   Proceed Payment
//                 </button>
//               )}
//             </div>

//           </div> */}
//         </div>



//       </div>

//       <div className="my-2 border-b">
//         <h1> 3 Offers</h1>
//       </div>
//       {/* {showItemsAndDelivery &&  */}
//       <ItemsAndDelivery />
//       {/* } */}

//     </div>
//   );
// };

// export default Payment;

import React, { useEffect, useState } from "react";
import plus from '../../assets/Icons/plus[1].png';
import AmericanExpress from "../../assets/AmericanExpress.png";
import visa from "../../assets/visa.png";
import Discover from "../../assets/Discover.png";
import dotspaymenticon from "../../assets/dotpaymenticon.png";
import net from "../../assets/net.png";
import cross from "../../assets/letter-x[1].png";
import ItemsAndDelivery from "./ItemsAndDelivery";

import {
  Box,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderPayment } from "../../Api/OrderApi";
import Notification from "../Notification";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCartItemsApi } from "../../Api/CartApi";


const Payment = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showItemsAndDelivery, setShowItemsAndDelivery] = useState(false); // State to control visibility

  const [selectedPayment, setSelectedPayment] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isCardPopup, setIsCardPopup] = useState(false);
  const [isEmiPopup, SetIsEmiPopup] = useState(false)
  const [cardNumber, setCardNumber] = useState("");
  const [nickName, setNickName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const generateMonths = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return months;
  };

  const currentYear = new Date().getFullYear();
  const futureYears = generateYears(2024, currentYear + 10); // Including future years (e.g., 10 years ahead)
  const months = generateMonths();
  const getOrder = useSelector((state) => state.order.getOrder)
  
  const [orderGet, setorderGet] = useState(getOrder)
  const ordered = useSelector((state) => state.order.orderPlace)
 

  const fedexRate = useSelector((state) => state.trackNumber.fedExRates)
  
  const serviceName = useSelector((state) => state.trackNumber.serviceType)

  const handleemiopen = () => {
    SetIsEmiPopup(true)
  }


  const handleCardOpen = () => {
    setIsCardPopup(true);
  };

  const handleCardRemove = () => {
    setIsCardPopup(false);
  };

  // proceed payment
  const [cvv, setCvv] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const dispatch = useDispatch()


  //   const [cardNumber, setCardNumber] = useState('');
  // const [nickName, setNickName] = useState('');
  // const [expiryMonth, setExpiryMonth] = useState('');
  // const [expiryYear, setExpiryYear] = useState('');
  // const [cvv, setCvv] = useState('');

  const [errors, setErrors] = useState({
    cardNumber: false,
    nickName: false,
    expiryMonth: false,
    expiryYear: false,
    cvv: false,
  });

  const validateFields = () => {
    const newErrors = {
      cardNumber: cardNumber.length !== 16,
      nickName: nickName.trim() === "",
      expiryMonth: expiryMonth === "",
      expiryYear: expiryYear === "",
      cvv: cvv.length !== 3 && cvv.length !== 4,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error); // Return true if no errors
  };

  const navigate = useNavigate()
  // const handleProceedPayment = async () => {
  //   if (!validateFields()) {
  //     setSuccessMessage("Please fill all the fields correctly.");
  //     return;
  //   }

  //   setCardNumber('')
  //   setNickName('')
  //   setExpiryMonth("")
  //   setExpiryYear("")
  //   setCvv('')
  //   if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
  //     setSuccessMessage("Please fill all the fields.");
  //     return; // Exit the function if validation fails
  //   }
  //   const currentDate = new Date();
  //   const payload = {
  //     paymentInfoId: "",
  //     orderId: ordered?.orderId,
  //     paymentMethodId: 1,
  //     cardNumber: cardNumber,
  //     cardType: "",
  //     cvv: cvv,
  //     validThrough: `${expiryMonth}/${expiryYear}`,
  //     nameOnCard: nickName,
  //     bank: "",
  //     paymentAmount: 0,
  //     isCreditCard: true,
  //     statusId: 3,
  //     paymentStatus: "",
  //     paymentDate: currentDate.toISOString()
  //   };

  // //   try {
  // //     await dispatch(fetchOrderPayment(payload));
  // //     setIsCardPopup(false);
  // //     setNotification({ show: true, message: "Payment processed successfully!" });
  // //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  // //     await navigate('/layout/layoutorderlist')
  // //   } catch (error) {
  // //     console.log("error", error);
  //   //   }
  //   // try {
  //   //   await dispatch(fetchOrderPayment(payload));
  //   //   setIsCardPopup(false);
  //   //   setNotification({ show: true, message: "Payment processed successfully!" });
  //   //   setTimeout(() => {
  //   //     setNotification({ show: false, message: "" });
  //   //     navigate('/layout/layoutorderlist');
  //   //   }, 5000); // Navigate after 3 seconds
  //   // } catch (error) {
  //   //   console.log("error", error);
  //   // }
  //   try {
  //     await dispatch(fetchOrderPayment(payload));
  //     setIsCardPopup(false);
  //     setTimeout(() => {
  //       setNotification({ show: true, message: "Payment processed successfully!" });
  //     }, 3000)
  //     await getCartItemsApi()
  //     setTimeout(() => {
  //       setNotification({ show: false, message: "" });
  //       navigate('/layout/layoutorderlist');
  //     }, 5000); // Navigate after 3 seconds
  //   } catch (error) {
  //     console.log("error", error);
  //   }

  
  // };


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await getCartItemsApi()
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   fetchData()

  // }, [dispatch])


  const handleProceedCodPayment = () => {
    // / Set notification
    setNotification({ show: true, message: "Proceeding to payment..." });

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 3000); // 3000 milliseconds = 3 seconds

    // Show the ItemsAndDelivery component
    setShowItemsAndDelivery(true);
  };

  const handlePaymentcodSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setIsButtonVisible(paymentMethod === "cod");
    setIsPopupShow(false)
    // Show button only if "Cash on Delivery" is selected
  };
  // const handleProceedPayment = async () => {
  //   // if (cardNumber && nickName && expiryMonth && expiryYear && cvv) {
  //   //   setSuccessMessage("Payment processed successfully!");
  //   // } else {
  //   //   setSuccessMessage("Please fill all the fields.");

  //   // }

  //     // Clear success message initially
  // setSuccessMessage("");

  // // Validation checks
  // const cardNumberPattern = /^\d{16}$/; // 16 digits only
  // const namePattern = /^[A-Za-z\s]+$/; // Only alphabets and spaces
  // const cvvPattern = /^\d{3,4}$/; // 3 or 4 digits

  // // Validate card number
  // if (!cardNumberPattern.test(cardNumber)) {
  //   setSuccessMessage("Please enter a valid 16-digit card number.");
  //   return;
  // }

  // // Validate name
  // if (!namePattern.test(nickName)) {
  //   setSuccessMessage("Please enter a valid name (alphabets only).");
  //   return;
  // }

  // // Validate expiry date
  // if (!expiryMonth || !expiryYear) {
  //   setSuccessMessage("Please select the card's expiry date.");
  //   return;
  // }

  // // Validate CVV
  // if (!cvvPattern.test(cvv)) {
  //   setSuccessMessage("Please enter a valid CVV (3 or 4 digits).");
  //   return;
  // }

  //   setCardNumber('')
  //   setNickName('')
  //   setExpiryMonth("")
  //   setExpiryYear("")
  //   setCvv('')
  //   if (!cardNumber || !nickName || !expiryMonth || !expiryYear || !cvv) {
  //     setSuccessMessage("Please fill all the fields.");
  //     return; // Exit the function if validation fails
  //   }
  //   const currentDate = new Date();
  //   console.log("payload-->", orderGet)
  //   const payload = {
  //     paymentInfoId: "",
  //     orderId: ordered?.orderId,
  //     paymentMethodId: 1,
  //     cardNumber: cardNumber,
  //     cardType: "",
  //     cvv: cvv,
  //     validThrough: `${expiryMonth}/${expiryYear}`,
  //     nameOnCard: nickName,
  //     bank: "",
  //     paymentAmount: 0,
  //     isCreditCard: true,
  //     statusId: 3,
  //     paymentDate: currentDate.toISOString()
  //   }
  //   try {
  //     await dispatch(fetchOrderPayment(payload));
  //     setIsCardPopup(false);
  //     setNotification({ show: true, message: "Payment processed successfully!" });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   // try {

  //   //   await dispatch(fetchOrderPayment(payload));
  //   //   setIsCardPopup(false);
  //   //   setNotification({ show: true, message: "Payment processed successfully!" });
  //   //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   // } catch (error) {
  //   //   console.log("error", error)
  //   // }
  // };
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    if (paymentMethod === 'card') {
      setIsPopupShow(true);
    } else {
      setIsPopupShow(false);
      setIsCardPopup(false);
    }
    setShowItemsAndDelivery(false);

  };
  // const handleCardOpen = () => {
  //   setIsCardPopup(true);
  // };

  // const handleCardRemove = () => {
  //   setIsCardPopup(false);
  // };

  // const DeliveryOptions = () => {
  //   const [selectedOption, setSelectedOption] = useState("");
  
  // const handleChange = (e) => {
  //   const selectedServiceType = e.target.value; // Get the selected serviceType value
  //   setSelectedOption(selectedServiceType);     // Update selected option in state

  //   // Log both values to debug
  //   console.log("Selected service type:", selectedServiceType);

  //   // Guard clause: check if fedexRate and the nested properties are defined
  //   if (fedexRate?.output?.rateReplyDetails?.serviceType) {
  //     const fedExServiceType = fedexRate.output.rateReplyDetails.serviceType;

  //     // Compare serviceType (convert both to lowercase and trim for a safer comparison)
  //     if (fedExServiceType.trim().toLowerCase() === selectedServiceType.trim().toLowerCase()) {
  //       console.log("Service type matches:", selectedServiceType);
  //     } else {
  //       console.log("Service type does not match.");
  //     }
  //   } else {
  //     console.log("fedexRate or serviceType is not available.");
  //   }
  // };

  const [selectedOption, setSelectedOption] = useState("");
  const [totalNetCharge, setTotalNetCharge] = useState(null); // Store totalNetCharge
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");
  const normalizeString = (str) => str.replace(/\s+/g, ' ').trim().toLowerCase();
  const removeNonPrintableChars = (str) => str.replace(/[^\x20-\x7E]/g, '');

  const handleChange = (e) => {
    const selectedServiceType = e.target.value;
    setSelectedOption(selectedServiceType);

    // console.log("Selected service type:", selectedServiceType);
    // console.log("FedEx rates:", JSON.stringify(fedexRate, null, 2));

    // First condition: Check if fedexRate exists and has elements
    if (fedexRate && fedexRate.length > 0) {
      // Use filter to find all matching rate details
      const matchingRateDetails = fedexRate.filter((rate) => {
        const normalizedRateServiceType = normalizeString(removeNonPrintableChars(rate.serviceName));
        const normalizedSelectedServiceType = normalizeString(removeNonPrintableChars(selectedServiceType));

        // console.log("Comparing:", normalizedRateServiceType, "to", normalizedSelectedServiceType);
        const isMatch = normalizedRateServiceType === normalizedSelectedServiceType;
        // console.log("Match result:", isMatch);

        return isMatch; // Return the match result
      });

      // Second condition: Check if any matching rate details were found
      if (matchingRateDetails.length > 0) {
        // Process all matching details
        const netCharge = matchingRateDetails.reduce((total, rate) => {
          return total + (rate?.ratedShipmentDetails[0]?.totalNetCharge || 0);
        }, 0);
        setTotalNetCharge(netCharge);
        

        // Next condition check can go here
        if (netCharge > 0) {
          // navigate(`/checkout?total=${total?.toFixed(2)}&netCharge=${netCharge?.toFixed(2)}`);
          // console.log("Valid net charge available for processing.");
          // Proceed with further logic here
          const parsedTotal = parseFloat(total); // Convert total to a number

          // Check if parsedTotal is a valid number
          if (!isNaN(parsedTotal)) {
            navigate(`/checkout?total=${parsedTotal.toFixed(2)}&netCharge=${netCharge.toFixed(2)}`);
            
          }
        } else {
          console.log("Net charge is zero or invalid.");
        }
      } else {
        console.log("No matching service type found.");
        setTotalNetCharge(null);
      }
    } else {
      console.log("fedexRate is not available or empty.");
      setTotalNetCharge(null);
    }
  };


  const handleService = (serviceType) => {
    if (fedexRate.output.rateReplyDetails.serviceType === serviceType) {
      // console.log("kjjhsjgh")
    }
  }


  const handleProceedPayment = async () => {
    // if (!validateFields()) {
    //   setSuccessMessage("Please cash on delivery field.");
    //   return;
    // }

    // setSelectedPayment(false)
    // setCardNumber('')
    // setNickName('')
    // setExpiryMonth("")
    // setExpiryYear("")
    // setCvv('')
    // if (!selectedPayment) {
    //   setSuccessMessage("Please select the cash on delivery field.");
    //   return; // Exit the function if validation fails
    // }
    const currentDate = new Date();
    const payload = {
      paymentInfoId: "",
      orderId: ordered?.orderId,
      paymentMethodId: 3,
      cardNumber: "",
      cardType: "",
      cvv: "",
      validThrough: "",
      nameOnCard: "",
      bank: "",
      paymentAmount: 0,
      isCreditCard: true,
      statusId: 3,
      paymentStatus: "",
      paymentDate: currentDate.toISOString()
    };

    //   try {
    //     await dispatch(fetchOrderPayment(payload));
    //     setIsCardPopup(false);
    //     setNotification({ show: true, message: "Payment processed successfully!" });
    //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    //     await navigate('/layout/layoutorderlist')
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // try {
    //   await dispatch(fetchOrderPayment(payload));
    //   setIsCardPopup(false);
    //   setNotification({ show: true, message: "Payment processed successfully!" });
    //   setTimeout(() => {
    //     setNotification({ show: false, message: "" });
    //     navigate('/layout/layoutorderlist');
    //   }, 5000); // Navigate after 3 seconds
    // } catch (error) {
    //   console.log("error", error);
    // }
    try {
      await dispatch(fetchOrderPayment(payload));
      // setIsCardPopup(false);
      // setTimeout(() => {
        setNotification({ show: true, message: "Payment processed successfully!" });
      // }, 3000)
      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 5000);
      await getCartItemsApi()
      navigate('/layout/layoutorderlist');
      // setTimeout(() => {
      //   setNotification({ show: false, message: "" });
      //   navigate('/layout/layoutorderlist');
      // }, 5000); // Navigate after 3 seconds
    } catch (error) {
      console.log("error", error);
    }


  };

  return (
    <div>
      {notification.show && <Notification show={notification.show} message={notification.message} />}

      {/* <p>Total Net Charge: {totalNetCharge ? `$${totalNetCharge}` : "N/A"}</p> */}
      {/* <div className="my-2 flex flex-col">
        <div className="my-2">

        
      <label htmlFor="delivery-options" className=" text-orange-500"> 2.Select Delivery Option:</label>
      </div>
      <div>

     
          <select id="delivery-options" value={selectedOption} onChange={handleChange}className="bg-gray-100 border rounded-md">
        <option value="" disabled className=" ">Select an option</option>
        
        <optgroup label="Delivery options">
              {serviceName.map((item) => {
                return (
                    <option key={item.serviceType} value={item.serviceName}>{item.serviceName}</option> 
                )
              })}
        </optgroup>
      </select>
      </div>

    </div> */}


      {/* <h2 className="text-orange-500 font-semibold">3 Select a payment method</h2> */}

      <div className="border rounded-md p-4 mx-4">


        
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
          {/* Full-Width Payment Card */}
          <div className="p-8 w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 transition-all hover:shadow-3xl">
            {/* <h1 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight text-center">
              Choose Payment Method
            </h1> */}

            {/* Payment Option */}
            <div
              className={`flex w-full items-center p-5 cursor-pointer border rounded-2xl transition-all ${selectedPayment === "cod"
                  ? "bg-gradient-to-r from-blue-200 to-blue-100 border-blue-400 shadow-lg scale-105"
                  : "bg-white/50 border-gray-300 hover:border-gray-500 hover:shadow-md"
                }`}
              onClick={() => handlePaymentSelection("cod")}
            >
              {/* Custom Radio Button */}
              <div
                className={`w-6 h-6 flex justify-center items-center rounded-full border-2 transition-all ${selectedPayment === "cod"
                  ? "border-blue-500 bg-blue-500 scale-110 shadow-md"
                  : "border-gray-400 bg-white hover:border-gray-500"
                  }`}
              >
                {selectedPayment === "cod" && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>

              <span className="ml-4 text-lg text-gray-800 font-medium">Cash on Delivery</span>
            </div>

            {/* Proceed Button */}
            <div className="flex justify-end mt-6">
              <button
                className={`w-[40%] h-14 text-white text-lg font-medium rounded-full shadow-lg transition-transform ${selectedPayment
                    ? "bg-gradient-to-r from-blue-500 to-indigo-700 hover:scale-105 hover:shadow-xl"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
                onClick={handleProceedPayment}
                disabled={!selectedPayment} // Disable button if no selection
              >
                Proceed Payment
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="flex flex-col">
            <div
              className={`flex w-[95%] cursor-pointer bg-pink-50 border border-black rounded-md items-center p-2
                `}
              onClick={() => handlePaymentSelection("card")}
            >
              <input
                type="radio"
                checked
                // ={selectedPayment === "card"}
                readOnly
                // defaultChecked
                className="cursor-pointer"
              />
              <span className="ml-2">Credit or debit card</span>
            </div>
            {/* {selectedPayment === "card" && ( *
              <div className="flex mt-2">
                <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                <img src={visa} className="w-12 h-9 mr-2" />
                <img src={Discover} className="w-12 h-9 mr-2" />
                <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                <img src={net} className="w-12 h-9" />
              </div>
            {/* )} *




            {/* {isPopupShow && ( *



              <div className="p-8 bg-gray-100 rounded-lg m-8 -ml-0 mt-2">
                <h1 className="text-xl font-bold mb-4">Enter Card Details</h1>

                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-6">
                    {/* Card Number *
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-2">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            setCardNumber(value);
                          }
                        }}
                        className={`h-10 border px-3 rounded-md ${errors.cardNumber ? "border-red-500" : "border-black"}`}
                        maxLength="16"
                        placeholder="Enter card number"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm">Card number must be 16 digits.</p>}
                    </div>

                    {/* Name *
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-2">Name</label>
                      <input
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                        className={`h-10 border px-3 rounded-md ${errors.nickName ? "border-red-500" : "border-black"}`}
                        placeholder="Enter name"
                      />
                      {errors.nickName && <p className="text-red-500 text-sm">Name is required.</p>}
                    </div>
                  </div>

                  {/* Expiry Date and CVV *
                  <div>
                    <label className="text-sm">Expiry Date</label>
                    <div className="flex items-center mt-1">
                      <select
                        className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-2 ${errors.expiryMonth ? "border-red-500" : "border-black"}`}
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                      >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <select
                        className={`border rounded-md shadow-md bg-slate-200 px-2 py-1 mr-4 ${errors.expiryYear ? "border-red-500" : "border-black"}`}
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                      >
                        <option value="">Year</option>
                        {futureYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      {/* {errors.expiryMonth && <p className="text-red-500 text-sm">Month name is required.</p>} */}


                      {/* CVV *
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,4}$/.test(value)) {
                              setCvv(value);
                            }
                          }}
                          className={`w-20 h-10 border px-2 rounded-md ${errors.cvv ? "border-red-500" : "border-black"}`}
                          placeholder="CVV"
                          maxLength="4"
                        />
                        <label className="ml-2 text-sm">CVV</label>
                      </div>
                    </div>
                    <div className="flex gap-2">
                    {errors.expiryMonth && <p className="text-red-500 text-sm">Month & Year name is required.</p>}

                    {errors.cvv && <p className="text-red-500 text-sm">CVV must be 3 or 4 digits.</p>}
               </div>
                  </div>

                  {/* Info Text *
                  <div className="text-sm text-gray-600 mt-4">
                    <p>
                      Please ensure that you enable your card for online payments from your bank’s app.
                    </p>
                  </div>

                  {/* Proceed Payment Button *
                  <div className="flex justify-end mt-4">
                    <button
                      className="w-40 h-10 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors"
                      onClick={handleProceedPayment}
                    >
                      Proceed Payment
                    </button>
                  </div>
                </div>
              </div>
            {/* )} *





          </div> */}




          {/* <div
            className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
              ? "bg-pink-50 border border-black rounded-md"
              : ""
              }`}
            onClick={() => handlePaymentSelection("cod")}
          >
            <input type="radio" className="cursor-pointer" checked={selectedPayment === "cod"} readOnly />
            <span className="ml-2">Cash on Delivery</span>
          </div> */}



          {/* <div>
            {notification.show && <div>{notification.message}</div>}

            <div className="flex flex-col">
              <div
                className={`flex w-[95%] items-center p-2 cursor-pointer mt-2 border-b ${selectedPayment === "cod"
                  ? "bg-pink-50 border border-black rounded-md"
                  : ""
                  }`}
                onClick={() => handlePaymentcodSelection("cod")}
              >
                <input
                  type="radio"
                  className="cursor-pointer"
                  checked={selectedPayment === "cod"}
                  readOnly
                />
                <span className="ml-2">Cash on Delivery</span>
              </div>

              {isButtonVisible && (
                <button
                  onClick={handleProceedCodPayment}
                  className="mt-4 bg-blue-900 text-white w-40 p-1 rounded-full"
                >
                  Proceed Payment
                </button>
              )}
            </div>

          </div> */}
        </div>



      </div>

      {/* <div className="my-2 border-b">
        <h1> 4 Offers</h1>
      </div>
      {/* {showItemsAndDelivery &&  *
      <ItemsAndDelivery /> */}
      {/* } */}

    </div>
  );
};

export default Payment;

