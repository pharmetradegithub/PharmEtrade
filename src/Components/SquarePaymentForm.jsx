import React, { useEffect, useRef } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const SquarePaymentForm = ({
  applicationId,
  locationId,
  amount,
  onPaymentSuccess,
  onPaymentError,
}) => {
  console.log("amounttttt", amount)
  return (
    <PaymentForm
      applicationId="sq0idp-gB46fswzI1EYbiQKJqemGA"
      cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
        console.log("token:", token);
        console.log("verifiedBuyer:", verifiedBuyer);
      }}
       createVerificationDetails={() => ({
        amount: amount,
        billingContact: {
          addressLines: ["123 Main Street", "Apartment 1"],
          familyName: "Doe",
          givenName: "John",
          countryCode: "GB",
          city: "London",
        },
        currencyCode: "GBP",
        intent: "CHARGE",
      })}
      locationId="L0599WY5GGG3W"
    >
      <CreditCard />
    </PaymentForm>
  );
};

export default SquarePaymentForm;
