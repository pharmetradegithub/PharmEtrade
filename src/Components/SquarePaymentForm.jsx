// import React, { useEffect, useRef, useState } from "react";
// import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
// import { processpaymentApi } from "../Api/PaymentHistoryApi";

// const SquarePaymentForm = ({
//   applicationId,
//   locationId,
//   amount,
//   onPaymentSuccess,
//   onPaymentError,
// }) => {
//   const [source, setSource] = useState(null);
//   useEffect(() => {
//     const payload = {
//       sourceId: source,
//       amount: Math.floor(amount),
//       currency: "USD",
//       note: "Payment For ORD5668",
//     };
//     const data = async () => {
//       await processpaymentApi(payload);
//     };
//     data();
//   }, [source]);
//   return (
//     <PaymentForm
//       // applicationId="sq0idp-gB46fswzI1EYbiQKJqemGA"
//       applicationId="sq0idp-pSMd2d7GIg_zV67r9cPBlg"
//       cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
//         setSource(token.token);
//       }}
//       //  createVerificationDetails={() => ({
//       //   amount: amount,
//       //   billingContact: {
//       //     addressLines: ["123 Main Street", "Apartment 1"],
//       //     familyName: "Doe",
//       //     givenName: "John",
//       //     countryCode: "GB",
//       //     city: "London",
//       //   },
//       //   currencyCode: "GBP",
//       //   intent: "CHARGE",
//       // })}
//       // locationId="L0599WY5GGG3W"
//       locationId="LY0VX9YHK6X93"
//     >
//     <h2 className="text-orange-500 font-semibold mb-2">3 Select a payment method</h2>
//       <CreditCard />
//     </PaymentForm>
//   );
// };

// export default SquarePaymentForm;



import React, { useEffect, useRef, useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { processpaymentApi } from "../Api/PaymentHistoryApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderPayment } from "../Api/OrderApi";
import { getCartItemsApi } from "../Api/CartApi";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

const SquarePaymentForm = ({
  // applicationId,
  // locationId,
  amount,
  // onPaymentSuccess,
  // onPaymentError,
}) => {
  const [source, setSource] = useState(null);
  const [expiryYear, setExpiryYear] = useState(null)
  const [expiryMonth, setExpiryMonth] = useState(null)
  const [cardNumber, setCardNumber] = useState(null)
  const ordered = useSelector((state) => state.order?.orderPlace || [])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
 

  // useEffect(() => {
  //   const processAndAddPayment = async () => {
  //     try {
  //       // First, process the payment
  //       const payload = {
  //         sourceId: source,
  //         // amount: Math.floor(amount),
  //         amount: Math.ceil(amount),
  //         currency: "USD",
  //         note: "Payment For ORD5668",
  //       };
  //       await processpaymentApi(payload);

  //       // Then, add payment details
  //       const currentDate = new Date();
  //       const payloadAdd = {
  //         paymentInfoId: "",
  //         orderId: ordered?.orderId,
  //         paymentMethodId: 1,
  //         cardNumber: cardNumber,
  //         cardType: "",
  //         cvv: "",
  //         validThrough: `${expiryMonth}/${expiryYear}`,
  //         nameOnCard: "",
  //         bank: "",
  //         // paymentAmount: Math.floor(amount),
  //         paymentAmount: amount,
  //         isCreditCard: true,
  //         statusId: 3,
  //         paymentStatus: "",
  //         paymentDate: currentDate.toISOString(),
  //       };

  //       await dispatch(fetchOrderPayment(payloadAdd));

  //       // Show notification and navigate after a delay
  //       setNotification({ show: true, message: "Payment processed successfully!" });
  //       await getCartItemsApi();
  //       setTimeout(() => {
  //         setNotification({ show: false, message: "" });
  //       }, 5000); // Navigate after 5 seconds
  //       // navigate('/layout/layoutorderlist');
  //       // window.location.href="/layout/layoutorderlist"
  //     } catch (error) {
  //     }
  //   };

  //   // Call the combined function only when `source` changes
  //   if (source) {
  //     processAndAddPayment();
  //   }
  // }, [source]);


  useEffect(() => {
    const processAndAddPayment = async () => {
      try {
        // First, process the payment
        if (paymentMethod === "card") {
          const payload = {
            sourceId: source,
            amount: Math.ceil(amount),
            currency: "USD",
            note: "Payment For ORD5668",
          };

          const paymentResponse = await processpaymentApi(payload);

          if (!paymentResponse || paymentResponse.statusCode > 200) {
            // throw new Error(`Payment failed with status: ${paymentResponse?.status}`);
            throw new Error("An error occurred while processing the payment. Please try again.");

          }
        }
        // Then, add payment details
        const currentDate = new Date();
              // const payloadAdd = {
              //   paymentInfoId: "",
              //   orderId: ordered?.orderId,
              //   paymentMethodId: 1,
              //   cardNumber: cardNumber,
              //   cardType: "",
              //   cvv: "",
              //   validThrough: `${expiryMonth}/${expiryYear}`,
              //   nameOnCard: "",
              //   bank: "",
              //   // paymentAmount: Math.floor(amount),
              //   paymentAmount: Math.ceil(amount),
              //   isCreditCard: true,
              //   statusId: 3,
              //   paymentStatus: "",
              //   paymentDate: currentDate.toISOString(),
              // };

        const payloadAdd = {
          paymentInfoId: "",
          orderId: ordered?.orderId,
          paymentMethodId: paymentMethod === "card" ? 1 : 3, // 1 for card, 2 for COD
          cardNumber: paymentMethod === "card" ? cardNumber : "",
          cardType: "",
          cvv: "",
          validThrough: paymentMethod === "card" ? `${expiryMonth}/${expiryYear}` : "",
          nameOnCard: "",
          bank: "",
          paymentAmount: Math.ceil(amount),
          isCreditCard: paymentMethod === "card",
          // statusId: paymentMethod === "card" ? 3 : 4, // 3 for paid, 4 for COD
          statusId:  3,
          // paymentStatus: paymentMethod === "card" ? "Paid" : "Pending",
          paymentStatus: "",
          paymentDate: currentDate.toISOString(),
        };
        const paymentDetailsResponse = await dispatch(fetchOrderPayment(payloadAdd));

        if (!paymentDetailsResponse || paymentDetailsResponse.statusCode > 300) {
          // throw new Error(`Adding payment details failed with status: ${paymentDetailsResponse?.status}`);
          throw new Error('An error occurred while processing the payment. Please try again.');

        }

        await setNotification({ show: true, message: "Payment processed successfully!" });
        await getCartItemsApi();

        await setTimeout(() => {
          setNotification({ show: false, message: "" });
        }, 10000);
        await navigate('/layout/layoutorderlist');
        if (paymentMethod === "card") {
          window.location.href = "/layout/layoutorderlist";
        }

      } catch (error) {
        console.error("Payment Error:", error);
        setNotification({ show: true, message: error.message || "An error occurred during payment." });

        setTimeout(() => {
          setNotification({ show: false, message: "" });
        }, 5000);
      }
    };

    if (source || paymentMethod === "cash") {
      processAndAddPayment();
    }
  }, [source,paymentMethod]);

  
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <>
       <h2 className="text-orange-500 font-semibold mb-2">3 Select a payment method</h2>
      {/* <div className="flex flex-col space-y-4">
        <label className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700 font-medium">Credit Card</span>
        </label>
        <label className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700 font-medium">Cash on Delivery</span>
        </label>
      </div> */}

      <div className="flex flex-col space-y-4 mb-7">
        {/* Credit Card Option  */}
        <label
          className={`flex items-center space-x-4 p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${paymentMethod === "card"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white hover:shadow-xl"
            }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${paymentMethod === "card" ? "text-blue-500" : "text-gray-700"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="hidden"
          />
          <span className="text-lg font-semibold">Credit Card</span>
        </label>

        {/* // Cash on Delivery Option  */}
        <label
          className={`flex items-center space-x-4 p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${paymentMethod === "cash"
              ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
              : "bg-white hover:shadow-xl"
            }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${paymentMethod === "cash" ? "text-green-500" : "text-gray-700"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="hidden"
          />
          <span className="text-lg font-semibold">Cash on Delivery</span>
        </label>
      </div>

  
      {/* <div>
        {/* Credit Card Option 
        <motion.label
          className={`flex items-center space-x-6 p-6 rounded-2xl cursor-pointer relative overflow-hidden ${paymentMethod === "card"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "bg-white border border-gray-200"
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="hidden"
          />
          <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${paymentMethod === "card" ? "text-blue-600" : "text-gray-700"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold">Credit Card</span>
          <AnimatePresence>
            {paymentMethod === "card" && (
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.label>

        {/* Cash on Delivery Option
        <motion.label
          className={`flex items-center space-x-6 p-6 rounded-2xl cursor-pointer relative overflow-hidden mt-4 ${paymentMethod === "cash"
              ? "bg-gradient-to-r from-green-600 to-teal-600 text-white"
              : "bg-white border border-gray-200"
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="hidden"
          />
          <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${paymentMethod === "cash" ? "text-green-600" : "text-gray-700"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold">Cash on Delivery</span>
          <AnimatePresence>
            {paymentMethod === "cash" && (
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.label>

        {/* AI-Powered Feedback 
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-700 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {paymentMethod === "card"
                ? "Secure and instant payment with your credit card."
                : "Pay in cash when your order is delivered."}
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

    

      {paymentMethod === "card" && (
        <PaymentForm
          applicationId={import.meta.env.VITE_SQUARE_APP_ID}
          cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
            if (token?.token) {
              setSource(token.token);
              setExpiryMonth(token?.details?.card?.expMonth);
              setExpiryYear(token?.details?.card?.expYear);
              setCardNumber(token?.details?.card?.last4);
            } else {
              console.error("Token generation failed", token);
            }
          }}
          //  createVerificationDetails={() => ({
          //   amount: amount,
          //   billingContact: {
          //     addressLines: ["123 Main Street", "Apartment 1"],
          //     familyName: "Doe",
          //     givenName: "John",
          //     countryCode: "GB",
          //     city: "London",
          //   },
          //   currencyCode: "GBP",
          //   intent: "CHARGE",
          // })}
          // locationId="L0599WY5GGG3W"
          locationId="LY0VX9YHK6X93"
        >
   
          <CreditCard />
        </PaymentForm>
      )}
      {notification.show && <Notification show={notification.show} message={notification.message} />}
    </>
  );
};

export default SquarePaymentForm;

// const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
//   const cardRef = useRef(null);
//   const isInitialized = useRef(false);

//   useEffect(() => {
//     alert("effect-->squarepaymentForm")
//     const initializeSquarePayment = async () => {
//       if (isInitialized.current) return;  // Prevent multiple initializations

//       if (window.Square) {
//         try {
//           const payments = window.Square.payments(applicationId, locationId);

//           // Create card input
//           const cardInput = await payments.card();
//           await cardInput.attach("#cardNumber");

//           // Create expiration date input
//           // const expirationDateInput = await payments.expirationDate();
//           // await expirationDateInput.attach("#expirationDate");

//           // Create CVV input
//           // const cvvInput = await payments.cvv();
//           // await cvvInput.attach("#cvv");

//           // Store the card input refs
//           cardRef.current = cardInput ;
//           isInitialized.current = true; // Mark as initialized
//         } catch (error) {
//           console.error("Error initializing Square Payment:", error);
//         }
//       } else {
//         console.error("Square Payments SDK failed to load.");
//       }
//     };

//     initializeSquarePayment();

//     return () => {
//       // Clean up the payment inputs
//       if (cardRef.current) {
//         if (cardRef.current.cardInput) cardRef.current.cardInput.destroy();
//         // if (cardRef.current.expirationDateInput) cardRef.current.expirationDateInput.destroy();
//         // if (cardRef.current.cvvInput) cardRef.current.cvvInput.destroy();

//         cardRef.current = null;
//         isInitialized.current = false;
//       }
//     };
//   }, [applicationId, locationId]);

//   // const clearCardInput = async () => {
//   //   if (cardRef.current) {
//   //     await cardRef.current.cardInput.clear();
//   //     // await cardRef.current.expirationDateInput.clear();
//   //     // await cardRef.current.cvvInput.clear();
//   //   }
//   // };

//   const handlePayment = async () => {
//     if (cardRef.current) {
//       const result = await cardRef.current.cardInput.tokenize();
//       if (result.status === "OK") {
//         onPaymentSuccess(result.token, amount);
//         clearCardInput();
//       } else {
//         onPaymentError(result.errors || "Tokenization failed");
//       }
//     }
//   };

//   return (
//     <form
//       id="form"
//       className="p-6 w-full border-2 shadow-lg font-sans"
//     >
//       {/* Card Number Input */}
//       <div
//         id="cardNumber"
//         className="mb-5 p-4 border-2 w-full rounded-md shadow-sm"
//       ></div>

//       {/* Expiration Date and CVV in one row */}
//       {/* <div className="grid grid-cols-2 gap-4">
//         {/* Expiration Date Input 
//         <div
//           id="expirationDate"
//           className="p-4 border-2 rounded-md shadow-sm"
//         ></div>

//         {/* CVV Input 
//         <div
//           id="cvv"
//           className="p-4 border-2 rounded-md shadow-sm"
//         ></div>
//       </div> */}

//       {/* Payment Button */}
//       <button
//         type="button"
//         className="w-full py-3 bg-[#685fe0] text-white font-bold rounded-md transition-colors duration-300 hover:bg-[#cf644d] focus:outline-none"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };



// export default SquarePaymentForm;

// const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
//   const cardRef = useRef(null);
//   const isInitialized = useRef(false);

//   useEffect(() => {
//     alert("effect-->squarepaymentForm")
//     const initializeSquarePayment = async () => {
//       if (isInitialized.current) return;  // Prevent multiple initializations

//       if (window.Square) {
//         try {
//           const payments = window.Square.payments(applicationId, locationId);

//           // Create card input
//           const cardInput = await payments.card();
//           await cardInput.attach("#cardNumber");

//           // Create expiration date input
//           // const expirationDateInput = await payments.expirationDate();
//           // await expirationDateInput.attach("#expirationDate");

//           // Create CVV input
//           // const cvvInput = await payments.cvv();
//           // await cvvInput.attach("#cvv");

//           // Store the card input refs
//           cardRef.current = cardInput ;
//           isInitialized.current = true; // Mark as initialized
//         } catch (error) {
//           console.error("Error initializing Square Payment:", error);
//         }
//       } else {
//         console.error("Square Payments SDK failed to load.");
//       }
//     };

//     initializeSquarePayment();

//     return () => {
//       // Clean up the payment inputs
//       if (cardRef.current) {
//         if (cardRef.current.cardInput) cardRef.current.cardInput.destroy();
//         // if (cardRef.current.expirationDateInput) cardRef.current.expirationDateInput.destroy();
//         // if (cardRef.current.cvvInput) cardRef.current.cvvInput.destroy();

//         cardRef.current = null;
//         isInitialized.current = false;
//       }
//     };
//   }, [applicationId, locationId]);

//   // const clearCardInput = async () => {
//   //   if (cardRef.current) {
//   //     await cardRef.current.cardInput.clear();
//   //     // await cardRef.current.expirationDateInput.clear();
//   //     // await cardRef.current.cvvInput.clear();
//   //   }
//   // };

//   const handlePayment = async () => {
//     if (cardRef.current) {
//       const result = await cardRef.current.cardInput.tokenize();
//       if (result.status === "OK") {
//         onPaymentSuccess(result.token, amount);
//         clearCardInput();
//       } else {
//         onPaymentError(result.errors || "Tokenization failed");
//       }
//     }
//   };

//   return (
//     <form
//       id="form"
//       className="p-6 w-full border-2 shadow-lg font-sans"
//     >
//       {/* Card Number Input */}
//       <div
//         id="cardNumber"
//         className="mb-5 p-4 border-2 w-full rounded-md shadow-sm"
//       ></div>

//       {/* Expiration Date and CVV in one row */}
//       {/* <div className="grid grid-cols-2 gap-4">
//         {/* Expiration Date Input 
//         <div
//           id="expirationDate"
//           className="p-4 border-2 rounded-md shadow-sm"
//         ></div>

//         {/* CVV Input 
//         <div
//           id="cvv"
//           className="p-4 border-2 rounded-md shadow-sm"
//         ></div>
//       </div> */}

//       {/* Payment Button */}
//       <button
//         type="button"
//         className="w-full py-3 bg-[#685fe0] text-white font-bold rounded-md transition-colors duration-300 hover:bg-[#cf644d] focus:outline-none"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };



// export default SquarePaymentForm;

