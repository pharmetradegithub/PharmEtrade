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

        // Then, add payment details
        const currentDate = new Date();
              const payloadAdd = {
                paymentInfoId: "",
                orderId: ordered?.orderId,
                paymentMethodId: 1,
                cardNumber: cardNumber,
                cardType: "",
                cvv: "",
                validThrough: `${expiryMonth}/${expiryYear}`,
                nameOnCard: "",
                bank: "",
                // paymentAmount: Math.floor(amount),
                paymentAmount: Math.ceil(amount),
                isCreditCard: true,
                statusId: 3,
                paymentStatus: "",
                paymentDate: currentDate.toISOString(),
              };

        const paymentDetailsResponse = await dispatch(fetchOrderPayment(payloadAdd));

        if (!paymentDetailsResponse || paymentDetailsResponse.statusCode > 300) {
          // throw new Error(`Adding payment details failed with status: ${paymentDetailsResponse?.status}`);
          throw new Error('An error occurred while processing the payment. Please try again.');

        }

        // Show success notification
        setNotification({ show: true, message: "Payment processed successfully!" });
        await getCartItemsApi();

        setTimeout(() => {
          setNotification({ show: false, message: "" });
        }, 5000);
         navigate('/layout/layoutorderlist');
         window.location.href="/layout/layoutorderlist"

      } catch (error) {
        console.error("Payment Error:", error);
        setNotification({ show: true, message: error.message || "An error occurred during payment." });

        setTimeout(() => {
          setNotification({ show: false, message: "" });
        }, 5000);
      }
    };

    if (source) {
      processAndAddPayment();
    }
  }, [source]);


  // useEffect(() => {
  //   const processAndAddPayment = async () => {
  //     try {
  //       // First, process the payment
  //       const payload = {
  //         sourceId: source,
  //         amount: Math.ceil(amount),
  //         currency: "USD",
  //         note: "Payment For ORD5668",
  //       };
  //       const res = await processpaymentApi(payload);

  //       if (res.statusCode === 500) {
  //         setNotification({
  //           show: true,
  //           message: "An error occurred while processing the payment. Please try again.",
  //           type: "error",
  //         });
  //         setTimeout(() => setNotification({ show: false, message: "" }), 5000);
  //         return; // Stop further actions if payment fails
  //       }

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
  //         paymentAmount: Math.ceil(amount),
  //         isCreditCard: true,
  //         statusId: 3,
  //         paymentStatus: "",
  //         paymentDate: currentDate.toISOString(),
  //       };

  //       await dispatch(fetchOrderPayment(payloadAdd));

  //       if (res.statusCode === 500) {
  //         setNotification({
  //           show: true,
  //           message: "An error occurred while processing the payment. Please try again.",
  //           type: "error",
  //         });
  //         setTimeout(() => setNotification({ show: false, message: "" }), 5000);
  //         return; // Stop further actions if payment fails
  //       }
  //       // Show success notification
  //       setNotification({
  //         show: true,
  //         message: "Payment processed successfully!",
  //         type: "success",
  //       });
  //       await getCartItemsApi();
  //       setTimeout(() => setNotification({ show: false, message: "" }), 5000);

  //       // Navigate to another page after success
  //       navigate('/layout/layoutorderlist');
  //       window.location.href = "/layout/layoutorderlist";
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setNotification({
  //         show: true,
  //         message: "An unexpected error occurred. Please contact support.",
  //         type: "error",
  //       });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 5000);
  //     }
  //   };

  //   if (source) {
  //     processAndAddPayment();
  //   }
  // }, [source, amount, cardNumber, expiryMonth, expiryYear, ordered, dispatch]);
  // useEffect(() => {
  //   const showNotification = (message, type) => {
  //     setNotification({ show: true, message, type });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 5000);
  //   };

  //   const processPayment = async () => {
  //     const payload = {
  //             sourceId: source,
  //             // amount: Math.floor(amount),
  //             amount: Math.ceil(amount),
  //             currency: "USD",
  //             note: "Payment For ORD5668",
  //           };

  //     try {
  //       const res = await processpaymentApi(payload);
  //       if (!res || res.statusCode !== 200 || (res.status && res.status !== 200)) {
  //         showNotification("An error occurred while processing the payment. Please try again.", "error");
  //         return null;
  //       }
  //       return res;
  //     } catch (error) {
  //       console.error("Payment Processing Error:", error);
  //       showNotification("An unexpected error occurred during payment processing.", "error");
  //       return null;
  //     }
  //   };

  //   const addPaymentDetails = async () => {
  //     const currentDate = new Date();
  //     const payloadAdd = {
  //       paymentInfoId: "",
  //       orderId: ordered?.orderId,
  //       paymentMethodId: 1,
  //       cardNumber,
  //       cardType: "",
  //       cvv: "",
  //       validThrough: `${expiryMonth}/${expiryYear}`,
  //       nameOnCard: "",
  //       bank: "",
  //       paymentAmount: Math.ceil(amount),
  //       isCreditCard: true,
  //       statusId: 3,
  //       paymentStatus: "",
  //       paymentDate: currentDate.toISOString(),
  //     };

  //     try {
  //       const paymentResponse = await dispatch(fetchOrderPayment(payloadAdd));
  //       if (!paymentResponse || paymentResponse.statusCode !== 200) {
  //         showNotification("An error occurred while adding payment details. Please try again.", "error");
  //         return null;
  //       }
  //       return paymentResponse;
  //     } catch (error) {
  //       console.error("Add Payment Details Error:", error);
  //       showNotification("An unexpected error occurred while adding payment details.", "error");
  //       return null;
  //     }
  //   };

  //   const processAndAddPayment = async () => {
  //     try {
  //       // Step 1: Process Payment
  //       const paymentResult = await processPayment();
  //       if (!paymentResult) return;

  //       // Step 2: Add Payment Details
  //       const addPaymentResult = await addPaymentDetails();
  //       if (!addPaymentResult) return;

  //       // Step 3: Both Steps Successful
  //       showNotification("Payment processed successfully!", "success");

  //       // Step 4: Update Cart and Navigate
  //       await getCartItemsApi();
  //       // navigate("/layout/layoutorderlist");
  //       // window.location.href = "/layout/layoutorderlist"
  //     } catch (error) {
  //       console.error("Unexpected Error:", error);
  //       showNotification("An unexpected error occurred. Please contact support.", "error");
  //     }
  //   };

  //   if (source) {
  //     processAndAddPayment();
  //   }
  // }, [source]);




  // useEffect(() => {
  //   const showNotification = (message, type) => {
  //     setNotification({ show: true, message, type });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 5000);
  //   };

  //   const processPayment = async () => {
  //     const payload = {
  //       sourceId: source,
  //       amount: Math.ceil(amount),
  //       currency: "USD",
  //       note: "Payment For ORD5668",
  //     };

  //     try {
  //       const res = await processpaymentApi(payload);
  //       if (!res || res.statusCode !== 200) {
  //         showNotification("An error occurred while processing the payment. Please try again.", "error");
  //         return null;
  //       }
  //       return res;
  //     } catch (error) {
  //       console.error("Payment Processing Error:", error);
  //       showNotification("An unexpected error occurred during payment processing.", "error");
  //       return null;
  //     }
  //   };

  //   const addPaymentDetails = async () => {
  //     const currentDate = new Date();
  //         const payloadAdd = {
  //           paymentInfoId: "",
  //           orderId: ordered?.orderId,
  //           paymentMethodId: 1,
  //           cardNumber,
  //           cardType: "",
  //           cvv: "",
  //           validThrough: `${expiryMonth}/${expiryYear}`,
  //           nameOnCard: "",
  //           bank: "",
  //           paymentAmount: Math.ceil(amount),
  //           isCreditCard: true,
  //           statusId: 3,
  //           paymentStatus: "",
  //           paymentDate: currentDate.toISOString(),
  //         };

  //     try {
  //       const paymentResponse = await dispatch(fetchOrderPayment(payloadAdd));
  //       if (!paymentResponse || paymentResponse.statusCode !== 200) {
  //         showNotification("An error occurred while adding payment details. Please try again.", "error");
  //         return null;
  //       }
  //       return paymentResponse;
  //     } catch (error) {
  //       console.error("Add Payment Details Error:", error);
  //       showNotification("An unexpected error occurred while adding payment details.", "error");
  //       return null;
  //     }
  //   };

  //   const processAndAddPayment = async () => {
  //     try {
  //       // Step 1: Process Payment
  //       const paymentResult = await processPayment();
  //       if (!paymentResult) return; // Stop execution if there's an error

  //       // Step 2: Add Payment Details
  //       const addPaymentResult = await addPaymentDetails();
  //       if (!addPaymentResult) return; // Stop execution if there's an error

  //       // Step 3: Both Steps Successful
  //       showNotification("Payment processed successfully!", "success");

  //       // Step 4: Update Cart and Navigate
  //       await getCartItemsApi();
  //       navigate("/layout/layoutorderlist");
  //       window.location.href = "/layout/layoutorderlist"
  //     } catch (error) {
  //       console.error("Unexpected Error:", error);
  //       showNotification("An unexpected error occurred. Please contact support.", "error");
  //     }
  //   };

  //   if (source) {
  //     processAndAddPayment();
  //   }
  // }, [source]);

  return (
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
      {notification.show && <Notification show={notification.show} message={notification.message} />}
    <h2 className="text-orange-500 font-semibold mb-2">3 Select a payment method</h2>
      <CreditCard />
    </PaymentForm>
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

