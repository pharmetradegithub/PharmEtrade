import React, { useEffect, useRef, useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { processpaymentApi } from "../Api/PaymentHistoryApi";

const SquarePaymentForm = ({
  applicationId,
  locationId,
  amount,
  onPaymentSuccess,
  onPaymentError,
}) => {
  console.log("amounttttt", amount)
  const [source, setSource] = useState(null);
  useEffect(() => {
    const payload = {
      sourceId: source,
      amount: Math.floor(amount),
      currency: "USD",
      note: "Payment For ORD5668",
    };
    const data = async () => {
      await processpaymentApi(payload);
    };
    data();
  }, [source]);
  return (
    <PaymentForm
      // applicationId="sq0idp-gB46fswzI1EYbiQKJqemGA"
      applicationId="sq0idp-pSMd2d7GIg_zV67r9cPBlg"
      cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
        console.log("token:", token);
        setSource(token.token);
        console.log("verifiedBuyer:", verifiedBuyer);
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
//     console.log("squarePyamentform------->")
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
