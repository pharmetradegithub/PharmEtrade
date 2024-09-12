import React, { useState } from "react";
import plus from '../../assets/Icons/plus[1].png';
import AmericanExpress from "../../assets/AmericanExpress.png";
import visa from "../../assets/visa.png";
import Discover from "../../assets/Discover.png";
import dotspaymenticon from "../../assets/dotpaymenticon.png";
import net from "../../assets/net.png";
import cross from "../../assets/letter-x[1].png";


import {
  Box,
  TextField,
} from "@mui/material";


const Payment = () => {

  const [selectedPayment, setSelectedPayment] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isCardPopup, setIsCardPopup] = useState(false);
  const [isEmiPopup, SetIsEmiPopup] = useState(false)


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
  const futureYears = generateYears(2024, currentYear + 40); // Including future years (e.g., 10 years ahead)
  const months = generateMonths();

  const handleemiopen = () => {
    SetIsEmiPopup(true)
  }


  const handleCardOpen = () => {
    setIsCardPopup(true);
  };

  const handleCardRemove = () => {
    setIsCardPopup(false);
  };
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    if (paymentMethod === 'card') {
      setIsPopupShow(true);
    } else {
      setIsPopupShow(false);
      setIsCardPopup(false);
    }
  };
  // const handleCardOpen = () => {
  //   setIsCardPopup(true);
  // };

  // const handleCardRemove = () => {
  //   setIsCardPopup(false);
  // };
  return (
    <div>
      <h2 className="text-orange-500">2 Select a payment method</h2>

      <div className="border rounded-md p-4">
        {/* <h1 className="border-b text-lg">Your available balance</h1> */}

        {/* <div className="flex items-center my-3">
          <img src={plus} className="w-5 h-5 mr-3" />
          <TextField
            label="Enter Code"
            id="outlined-size-small"
            name="Enter Code"
            size="small"
            className="w-52"
          />
          <button className="border mx-3 w-16 h-8  text-base  bg-blue-900 text-white flex items-center justify-center rounded-full">
            Apply
          </button>
        </div> */}

        {/* <div>
          <h1 className="border-b">Another payment method</h1>
        </div> */}

        <div>
          <div className="flex flex-col">
            <div
              className={`flex items-center p-2 ${selectedPayment === "card"
                  ? "bg-pink-50 border border-black rounded-md"
                  : ""
                }`}
              onClick={() => handlePaymentSelection("card")}
            >
              <input
                type="radio"
                checked={selectedPayment === "card"}
                readOnly
              />
              <span className="ml-2">Credit or debit card</span>
            </div>
            {selectedPayment === "card" && (
              <div className="flex mt-2">
                <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                <img src={visa} className="w-12 h-9 mr-2" />
                <img src={Discover} className="w-12 h-9 mr-2" />
                <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                <img src={net} className="w-12 h-9" />
              </div>
            )}
            {isPopupShow && (
              <div className="flex mt-2">
                <img src={plus} className="w-5 h-5 mr-2" />
                <p className="cursor-pointer" onClick={handleCardOpen}>
                  Enter card details
                </p>
              </div>
            )}
          </div>

          {isCardPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white border rounded-md w-96 p-5">
                <div className="flex justify-between border-b pb-3">
                  <h1>Enter Card Details</h1>
                  <img
                    src={cross}
                    className="w-5 h-5 cursor-pointer"
                    onClick={handleCardRemove}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex mb-3">
                    <label className="w-32">Card Number</label>
                    <input
                      type="text"
                      className="flex-1 h-8 border border-black px-2"
                    />
                  </div>
                  <div className="flex mb-3">
                    <label className="w-32">Nick Name</label>
                    <input
                      type="text"
                      className="flex-1 h-8 border border-black px-2"
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label>Expiry Date</label>
                    <div className="flex">
                      <select className="border border-black rounded-md  shadow-md bg-slate-200">
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                        {futureYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <div className="flex">
                        <input type="text" className="w-48 h-8 border border-black" />
                        <label>CVV</label>
                        
                      </div>

                    
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      Please ensure that you enable your card for online
                      payments from your bank’s app.
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                    <img src={visa} className="w-12 h-9 mr-2" />
                    <img src={Discover} className="w-12 h-9 mr-2" />
                    <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                    <img src={net} className="w-12 h-9" />
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <button
                    className="border rounded-full w-24 border-black h-8 mr-2"
                    onClick={handleCardRemove}
                  >
                    Cancel
                  </button>
                  <button className="flex justify-center items-center w-40 h-8 bg-blue-900 text-white rounded-full">
                    Enter Card Details
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* <div
            className={`flex flex-col  p-2 mt-2 ${
              selectedPayment === "netbanking"
                ? "bg-pink-50 border border-black rounded-md"
                : ""
            }`}
            onClick={() => handlePaymentSelection("netbanking")}
          >
            <div>
              <input
                type="radio"
                checked={selectedPayment === "netbanking"}
                readOnly
              />
              <span className="ml-2">Net Banking</span>
            </div>
            <div>
              <select className="border rounded-md">
                <option>Choose an option</option>
                <option>HDFC</option>
                <option>Axis</option>
              </select>
            </div>
          </div> */}
          {/* <div
            className={`flex flex-col  p-2 mt-2 ${
              selectedPayment === "emi"
                ? "bg-pink-50 border border-black rounded-md"
                : ""
            }`}
            onClick={() => handlePaymentSelection("emi")}
          >
            <div>
              <input
                type="radio"
                checked={selectedPayment === "emi"}
                readOnly
                onClick={handleemiopen}
              />
              <span className="ml-2">EMI</span>
            </div>
            <div>
              {isEmiPopup && (
                <div>
                  <div className="flex mt-2">
                    <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                    <img src={visa} className="w-12 h-9 mr-2" />
                    <img src={Discover} className="w-12 h-9 mr-2" />
                    <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                    <img src={net} className="w-12 h-9" />
                  </div>

                  <div className="flex mt-2">
                    <img src={plus} className="w-5 h-5 mr-2" />
                    <p className="cursor-pointer" onClick={handleCardemiOpen}>
                      Enter card details
                    </p>
                    <div>
                      {iscardEmiopen && (
                        <div>
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white border rounded-md w-96 p-5">
                              <div className="flex justify-between border-b pb-3">
                                <h1>Enter Card Details</h1>
                                <img
                                  src={cross}
                                  className="w-5 h-5 cursor-pointer"
                                  onClick={handleCardemiremove}
                                />
                              </div>
                              <div className="flex flex-col mt-4">
                                <div className="flex mb-3">
                                  <label className="w-32">Card Number</label>
                                  <input
                                    type="text"
                                    className="flex-1 h-8 border border-black px-2"
                                  />
                                </div>
                                <div className="flex mb-3">
                                  <label className="w-32">Nick Name</label>
                                  <input
                                    type="text"
                                    className="flex-1 h-8 border border-black px-2"
                                  />
                                </div>
                                <div className="flex flex-col mb-3">
                                  <label>Expiry Date</label>
                                  <div className="flex">
                                    <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                      {futureYears.map((year) => (
                                        <option key={year} value={year}>
                                          {year}
                                        </option>
                                      ))}
                                    </select>

                                    <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                      {months.map((month, index) => (
                                        <option key={index} value={month}>
                                          {month}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                  <p>
                                    Please ensure that you enable your card for
                                    online payments from your bank’s app.
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <img
                                    src={AmericanExpress}
                                    className="w-12 h-9 mr-2"
                                  />
                                  <img src={visa} className="w-12 h-9 mr-2" />
                                  <img
                                    src={Discover}
                                    className="w-12 h-9 mr-2"
                                  />
                                  <img
                                    src={dotspaymenticon}
                                    className="w-12 h-9 mr-2"
                                  />
                                  <img src={net} className="w-12 h-9" />
                                </div>
                              </div>
                              <div className="flex justify-end mt-5">
                                <button
                                  className="border rounded-full w-24 border-black h-8 mr-2"
                                  onClick={handleCardemiremove}
                                >
                                  Cancel
                                </button>
                                <button className="flex justify-center items-center w-40 h-8 bg-blue-900 text-white rounded-full">
                                  Enter Card Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}

          <div
            className={`flex items-center p-2 mt-2 border-b ${selectedPayment === "cod"
                ? "bg-pink-50 border border-black rounded-md"
                : ""
              }`}
            onClick={() => handlePaymentSelection("cod")}
          >
            <input type="radio" checked={selectedPayment === "cod"} readOnly />
            <span className="ml-2">Cash on Delivery</span>
          </div>
        </div>
        <div className=" mt-2 items-center flex ">
          <button className="w-60 border rounded-full bg-blue-900 text-basep-1 text-white">
            Use this payment method
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

