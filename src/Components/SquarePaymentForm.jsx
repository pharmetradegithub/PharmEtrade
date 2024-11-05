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
    } catch (error) {
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
      } catch (error) {
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
      setErrorMessage(error.message);
      onPaymentError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="form"
      className="p-6 w-full border-2 shadow-lg font-sans"
    >
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