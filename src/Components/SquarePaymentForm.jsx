// import React, { useEffect, useRef } from 'react';

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


// import React, { useState, useEffect } from 'react';

// const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
//   const [payments, setPayments] = useState(null);
//   const [card, setCard] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     if (!window.Square) {
//       setErrorMessage('Square SDK not loaded');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const paymentsInstance = window.Square.payments(applicationId, locationId);
//       setPayments(paymentsInstance);
//     } catch (error) {
//       setErrorMessage('Failed to initialize Square payments');
//       setIsLoading(false);
//     }
//   }, [applicationId, locationId]);

//   useEffect(() => {
//     const initializeCard = async () => {
//       if (!payments) return;

//       try {
//         const cardInstance = await payments.card();
//         await cardInstance.attach('#cardNumber');
//         setCard(cardInstance);
//       } catch (error) {
//         setErrorMessage('Failed to setup card input');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     initializeCard();

//     return () => {
//       if (card) {
//         card.destroy();
//       }
//     };
//   }, [payments]);

//   const handlePayment = async () => {
//     setIsLoading(true);
//     setErrorMessage('');

//     if (!card) {
//       setErrorMessage('Card not initialized');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const result = await card.tokenize();
//       if (result.status === 'OK') {
//         onPaymentSuccess(result.token, amount);
//       } else {
//         throw new Error(result.errors?.[0]?.message || 'Payment failed');
//       }
//     } catch (error) {
//       setErrorMessage(error.message);
//       onPaymentError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form
//       id="form"
//       className="p-6 w-full border-2 shadow-lg font-sans"
//     >
//       {errorMessage && (
//         <div className="mb-4 p-3 text-red-700">
//           {errorMessage}
//         </div>
//       )}
      
//       <div
//         id="cardNumber"
//         className="mb-5 p-4 border-2 w-full rounded-md shadow-sm"
//       ></div>

//       <button
//         type="button"
//         className="w-full py-3 bg-[#685fe0] text-white font-bold rounded-md transition-colors duration-300 hover:bg-[#cf644d] focus:outline-none disabled:opacity-50"
//         onClick={handlePayment}
//         disabled={isLoading || !card}
//       >
//         {isLoading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default SquarePaymentForm;


import React, { useState, useEffect } from 'react';

const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
  const [payments, setPayments] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!window.Square) {
      setErrorMessage('Square SDK not loaded');
      setIsLoading(false);
      return;
    }

    try {
      const paymentsInstance = window.Square.payments(applicationId, locationId);
      setPayments(paymentsInstance);
      console.log("Payments instance initialized:", paymentsInstance);
    } catch (error) {
      console.error('Error initializing Square payments:', error);
      setErrorMessage('Failed to initialize Square payments');
      setIsLoading(false);
    }
  }, [applicationId, locationId]);

  useEffect(() => {
    const initializeCard = async () => {
      if (!payments) return;

      try {
        const cardInstance = await payments.card();
        await cardInstance.attach('#cardNumber');
        setCard(cardInstance);
        console.log("Card instance initialized:", cardInstance);
      } catch (error) {
        console.error('Error setting up card input:', error);
        setErrorMessage('Failed to setup card input');
      } finally {
        setIsLoading(false);
      }
    };

    initializeCard();

    return () => {
      if (card) {
        card.destroy();
      }
    };
  }, [payments]);

  const handlePayment = async () => {
    setIsLoading(true);
    setErrorMessage('');

    if (!card) {
      setErrorMessage('Card not initialized');
      setIsLoading(false);
      return;
    }

    try {
      const result = await card.tokenize();
      if (result.status === 'OK') {
        onPaymentSuccess(result.token, amount);
      } else {
        throw new Error(result.errors?.[0]?.message || 'Payment failed');
      }
    } catch (error) {
      console.error("Payment error:", error);
      setErrorMessage(error.message);
      onPaymentError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id="form" className="p-6 w-full border-2 shadow-lg font-sans">
      {errorMessage && (
        <div className="mb-4 p-3 text-red-700">
          {errorMessage}
        </div>
      )}
      
      <div
        id="cardNumber"
        className="mb-5 p-4 border-2 w-full rounded-md shadow-sm"
      ></div>

      <button
        type="button"
        className="w-full py-3 bg-[#685fe0] text-white font-bold rounded-md transition-colors duration-300 hover:bg-[#cf644d] focus:outline-none disabled:opacity-50"
        onClick={handlePayment}
        disabled={isLoading || !card}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default SquarePaymentForm;

