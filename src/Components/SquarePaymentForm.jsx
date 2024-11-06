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
      <CreditCard />
    </PaymentForm>
  );
};

export default SquarePaymentForm;
