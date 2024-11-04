import React, { useEffect, useRef } from 'react';
// // // import './SquarePaymentForm.css';

// // const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
// //   const cardRef = useRef(null);
// //   const isInitialized = useRef(false);

// //   useEffect(() => {
// //     const initializeSquarePayment = async () => {

// //       if (isInitialized.current) return;

// //       if (window.Square) {
// //         console.log(window, "win")
// //         const payments = window.Square.payments(applicationId, locationId);
// //         const cardInput = await payments.card();
// //         await cardInput.attach("#paymentCard");
// //         cardRef.current = cardInput;
// //         isInitialized.current = true;
// //       } else {
// //         console.error("Square payments SDK failed to load.");
// //       }
// //     };

// //     initializeSquarePayment();

// //     return () => {
// //       if (cardRef.current) {
// //         cardRef.current.destroy();
// //         cardRef.current = null;
// //         isInitialized.current = false;
// //       }
// //     };
// //   }, [applicationId, locationId]);

// //   const clearCardInput = async () => {
// //     if (cardRef.current) {
// //       alert("Ggfdg")
// //       await cardRef.current.clear();
// //     }
// //   };

// //   const handlePayment = async () => {
// //     if (cardRef.current) {
// //       const result = await cardRef.current.tokenize();
// //       if (result.status === "OK") {
// //         onPaymentSuccess(result.token, amount);
// //         clearCardInput();
// //       } else {
// //         onPaymentError(result.errors || "Tokenization failed");
// //       }
// //     }
// //   };

// //   return (
// //     <form id="form" className="payment-form">
// //       <div id="paymentCard" className="payment-card"></div>
// //       <button type="button" className="pay-button" onClick={handlePayment}>Pay Now</button>
// //     </form>
// //   );
// // };

// // export default SquarePaymentForm;


// const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
//   const cardRef = useRef(null);
//   const isInitialized = useRef(false);

//   useEffect(() => {
//     const initializeSquarePayment = async () => {
//       if (isInitialized.current) return;

//       if (window.Square) {
//         const payments = window.Square.payments(applicationId, locationId);
//         const cardInput = await payments.card();
//         await cardInput.attach("#paymentCard");
//         cardRef.current = cardInput;
//         isInitialized.current = true;
//       } else {
//         console.error("Square payments SDK failed to load.");
//       }
//     };

//     initializeSquarePayment();

//     return () => {
//       if (cardRef.current) {
//         cardRef.current.destroy();
//         cardRef.current = null;
//         isInitialized.current = false;
//       }
//     };
//   }, [applicationId, locationId]);

//   const clearCardInput = async () => {
//     if (cardRef.current) {
//       await cardRef.current.clear();
//     }
//   };

//   const handlePayment = async () => {
//     if (cardRef.current) {
//       const result = await cardRef.current.tokenize();
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
//       className="h-48 mx-auto p-6 w-full border-2 shadow-lg font-sans"
//     >
//       <div
//         id="paymentCard"
//         className="mb-5 p-4 border-2 w-full rounded-md shadow-lg"
//       ></div>
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

const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
  const cardRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const initializeSquarePayment = async () => {
      if (isInitialized.current) return;  // Prevent multiple initializations

      if (window.Square) {
        try {
          const payments = window.Square.payments(applicationId, locationId);

          // Create card input
          const cardInput = await payments.card();
          await cardInput.attach("#cardNumber");

          // Create expiration date input
          // const expirationDateInput = await payments.expirationDate();
          // await expirationDateInput.attach("#expirationDate");

          // Create CVV input
          // const cvvInput = await payments.cvv();
          // await cvvInput.attach("#cvv");

          // Store the card input refs
          cardRef.current = cardInput ;
          isInitialized.current = true; // Mark as initialized
        } catch (error) {
          console.error("Error initializing Square Payment:", error);
        }
      } else {
        console.error("Square Payments SDK failed to load.");
      }
    };

    initializeSquarePayment();

    return () => {
      // Clean up the payment inputs
      if (cardRef.current) {
        if (cardRef.current.cardInput) cardRef.current.cardInput.destroy();
        // if (cardRef.current.expirationDateInput) cardRef.current.expirationDateInput.destroy();
        // if (cardRef.current.cvvInput) cardRef.current.cvvInput.destroy();

        cardRef.current = null;
        isInitialized.current = false;
      }
    };
  }, [applicationId, locationId]);

  const clearCardInput = async () => {
    if (cardRef.current) {
      await cardRef.current.cardInput.clear();
      // await cardRef.current.expirationDateInput.clear();
      // await cardRef.current.cvvInput.clear();
    }
  };

  const handlePayment = async () => {
    if (cardRef.current) {
      const result = await cardRef.current.cardInput.tokenize();
      if (result.status === "OK") {
        onPaymentSuccess(result.token, amount);
        clearCardInput();
      } else {
        onPaymentError(result.errors || "Tokenization failed");
      }
    }
  };

  return (
    <form
      id="form"
      className="p-6 w-full border-2 shadow-lg font-sans"
    >
      {/* Card Number Input */}
      <div
        id="cardNumber"
        className="mb-5 p-4 border-2 w-full rounded-md shadow-sm"
      ></div>

      {/* Expiration Date and CVV in one row */}
      {/* <div className="grid grid-cols-2 gap-4">
        {/* Expiration Date Input 
        <div
          id="expirationDate"
          className="p-4 border-2 rounded-md shadow-sm"
        ></div>

        {/* CVV Input 
        <div
          id="cvv"
          className="p-4 border-2 rounded-md shadow-sm"
        ></div>
      </div> */}

      {/* Payment Button */}
      <button
        type="button"
        className="w-full py-3 bg-[#685fe0] text-white font-bold rounded-md transition-colors duration-300 hover:bg-[#cf644d] focus:outline-none"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </form>
  );
};



export default SquarePaymentForm;
