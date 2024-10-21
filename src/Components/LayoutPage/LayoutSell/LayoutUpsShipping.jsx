// import React from 'react'

// const LayoutUpsShipping = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default LayoutUpsShipping


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fedexShippingGetApi, shipmentAddApi, shipmentEditApi } from "../../../Api/ShipmentApi";
import { TextField } from "@mui/material";

function LayoutUpsShipping() {
  const [formData, setFormData] = useState({
    accessLicenseNumber: '',
    userId: '',
    password: '',
    shipperNumber: '',
  });

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const getshipingDetails = useSelector((state) => state.shipment.getShipment);
  console.log("getshipingDetails--->", getshipingDetails);

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
      // if (isFormEmpty) {
      //   // If any of the form fields are empty, show an error
      //   setMessage('All fields are required.');
      //   setIsError(true);
      // } else {
        // If all fields are filled, handle shipment edit or add
        // const existingShipment = getshipingDetails.find(shipment => shipment.shipmentTypeId === 5); // Assuming UPS is type 4

        const handleSubmit = async () => {
          // Check if any required form field is empty
          const isFormComplete = formData.accessLicenseNumber && formData.userId && formData.password && formData.shipperNumber;
          if (!isFormComplete) {
            // If any of the form fields are empty, show an error message
            setMessage('All fields are required.');
            setIsError(true);
          } else {
            // Check if shipping details already exist for typeId 4 (FedEx)
            const existingShipment = getshipingDetails?.find(shipment => shipment.shipmentTypeId === 5);
        
          if (!existingShipment) {
            // If any required fields are empty, call shipmentAddApi
            const payloadAdd = {
              shipmentID: "", // New shipment (no ID yet)
              shipmentTypeId: 5, // UPS shipment type
              customerId: user.customerId,
              accessLicenseNumber: formData.accessLicenseNumber || "string", // Use default "string" if empty
              userID: formData.userId || "string", // Use default "string" if empty
              password: formData.password || "string", // Use default "string" if empty
              shipperNumber: formData.shipperNumber || "string", // Use default "string" if empty
              accountID: "string", // Placeholder for accountID
              meterNumber: "string", // Placeholder for meterNumber
              isActive: true, // Mark shipment as active
              createdDate: "2024-10-21T07:15:43.952Z", // Use current date dynamically
              key: "string" // Placeholder for key
            };
            console.log("Adding new shipment with payload:", payloadAdd);
            await dispatch(shipmentAddApi(payloadAdd));
            setMessage('UPS Shipping details added successfully.');
            setIsError(false);
          } else {
            // If all required fields are filled, call shipmentEditApi
            const payloadEdit = {
              shipmentID: existingShipment?.shipmentID, // Use existing shipment ID for updating
              shipmentTypeId: 5, // UPS shipment type
              customerId: user.customerId,
              accessLicenseNumber: formData.accessLicenseNumber,
              userID: formData.userId,
              password: formData.password,
              shipperNumber: formData.shipperNumber,
              accountID: "string", // Placeholder for accountID
              meterNumber: "string", // Placeholder for meterNumber
              isActive: true, // Mark shipment as active
              createdDate: existingShipment?.createdDate, // Preserve original created date
              key: "string" // Placeholder for key
            };
            console.log("Editing shipment with payload:", payloadEdit);
            await dispatch(shipmentEditApi(payloadEdit));
            setMessage('UPS Shipping details updated successfully.');
            setIsError(false);
          }
        }
        };
        

  useEffect(() => {
    // Fetch shipping details from API
    dispatch(fedexShippingGetApi(user?.customerId));
  }, [dispatch, user?.customerId]);

  useEffect(() => {
    // Log and populate formData when getshipingDetails changes
    console.log("getshipingDetails structure: ", getshipingDetails);

    if (Array.isArray(getshipingDetails)) {
      const upsShippingDetails = getshipingDetails.find(shipment => shipment.shipmentTypeId === 5); // Assuming UPS is type 4

      if (upsShippingDetails) {
        // Populate formData with the UPS shipping details
        setFormData({
          accessLicenseNumber: upsShippingDetails.accessLicenseNumber || '',
          userId: upsShippingDetails.userID || '',
          password: upsShippingDetails.password || '',
          shipperNumber: upsShippingDetails.shipperNumber || '',
        });
      }
    } else {
      console.warn("getshipingDetails is not an array. Please check the data structure.");
    }
  }, [getshipingDetails]);

  return (
    <div className='w-full px-4'>
      {message && (
        <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'}`}>
          {message}
        </div>
      )}
      <div className='flex justify-between border-b border-black my-5 p-4'>
        <h1 className='text-xl text-blue-900 font-semibold'>MARKETPLACE UPS CONFIGURATION</h1>
      
      </div>
<div className="w-[60%]  border rounded-md shadow-md flex flex-col justify-center">
      <div className='w-full flex flex-col justify-center ml-4'>
        <div className="w-[80%] flex justify-between text-gray-600 my-4">
          <div className="flex flex-col ">
            <label className="text-base mb-1 font-semibold">Access License Number:<span className="text-red-600 text-xl">*</span></label>
              <TextField
                label="Access License Number"
                size="small"
              type="text"
              name="accessLicenseNumber"
              className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
              value={formData.accessLicenseNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base  mb-1 font-semibold">User Id:<span className="text-red-600 text-2xl">*</span></label>
            <TextField
                type="text"
                label="UserId"
                size="small"
              name="userId"
              className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
              value={formData.userId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-between text-gray-600 my-4">
          <div className="flex flex-col">
            <label className="text-base  mb-1 font-semibold">Password:<span className="text-red-600 text-xl font-semibold">*</span></label>
            <TextField
                type="text"
                label="Password"
                size="small"
              name="password"
              className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base  mb-1 font-semibold">Shipper Number:<span className="text-red-600 text-xl">*</span></label>
              <TextField
                label="Shipper Number"
                size="small"
              type="text"
              name="shipperNumber"
              className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
              value={formData.shipperNumber}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
<div className="flex justify-end p-4">
      <button
        className='border rounded-lg h-8 p-2 px-4 font-bold flex justify-center items-center text-[15px] bg-blue-900 text-white'
        onClick={handleSubmit}
      >
        SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
export default LayoutUpsShipping