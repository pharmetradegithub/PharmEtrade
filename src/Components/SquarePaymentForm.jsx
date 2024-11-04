import React, { useEffect, useRef } from 'react';
// import './SquarePaymentForm.css';

const SquarePaymentForm = ({ applicationId, locationId, amount, onPaymentSuccess, onPaymentError }) => {
  const cardRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const initializeSquarePayment = async () => {

      if (isInitialized.current) return;

      if (window.Square) {
        console.log(window, "win")
        const payments = window.Square.payments(applicationId, locationId);
        const cardInput = await payments.card();
        await cardInput.attach("#paymentCard");
        cardRef.current = cardInput;
        isInitialized.current = true;
      } else {
        console.error("Square payments SDK failed to load.");
      }
    };

    initializeSquarePayment();

    return () => {
      if (cardRef.current) {
        cardRef.current.destroy();
        cardRef.current = null;
        isInitialized.current = false;
      }
    };
  }, [applicationId, locationId]);

  const clearCardInput = async () => {
    if (cardRef.current) {
      alert("Ggfdg")
      await cardRef.current.clear();
    }
  };

  const handlePayment = async () => {
    if (cardRef.current) {
      const result = await cardRef.current.tokenize();
      if (result.status === "OK") {
        onPaymentSuccess(result.token, amount);
        clearCardInput();
      } else {
        onPaymentError(result.errors || "Tokenization failed");
      }
    }
  };

  return (
    <form id="form" className="payment-form">
      <div id="paymentCard" className="payment-card"></div>
      <button type="button" className="pay-button" onClick={handlePayment}>Pay Now</button>
    </form>
  );
};

export default SquarePaymentForm;
