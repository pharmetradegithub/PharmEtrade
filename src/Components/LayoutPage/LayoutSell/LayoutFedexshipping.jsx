// import React from 'react'

// const LayoutFedexshipping = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default LayoutFedexshipping




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fedexShippingGetApi, shipmentAddApi, shipmentEditApi, } from '../../../Api/ShipmentApi';
import { TextField } from '@mui/material';

function LayoutFedexshipping() {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  console.log("user--->", user)

  const getshipingDetails = useSelector((state) => state.shipment.getShipment)
  console.log("getshipingDetails--->", getshipingDetails)
  const [formData, setFormData] = useState({
    accountid: '',
    meterNumber: '',
    key: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDateToUS = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  // const handleSubmit = async () => {
  //   const payloadAdd = {
  //     shipmentID: "",
  //     shipmentTypeId: 4,
  //     customerId: user.customerId,
  //     accessLicenseNumber: "string",
  //     userID: "string",
  //     password: formData.password,
  //     shipperNumber: "string",
  //     accountID: formData.accountid,
  //     meterNumber: formData.meterNumber,
  //     isActive: true,
  //     createdDate: formatDateToUS(new Date()),
  //     key: "string"
  //   }
  //   console.log(payload)
  //   await dispatch(shipmentAddApi(payload))
  //   // const { accountid, meterNumber, key, password } = formData;

  //   // if (!accountid || !meterNumber || !key || !password) {
  //   //   setMessage('All fields are must be required.');
  //   //   setIsError(true);
  //   // } else {
  //   //   setMessage('Fedex Shipping details saved successfully.');
  //   //   setIsError(false);
  //   // }
  //   const payload = {
  //     shipmentID: getshipingDetails.shipmentID,
  //     shipmentTypeId: 4,
  //     customerId: user.customerId,
  //     accessLicenseNumber: "string",
  //     userID: "string",
  //     password: formData.password,
  //     shipperNumber: "string",
  //     accountID: formData.accountid,
  //     meterNumber: formData.meterNumber,
  //     isActive: true,
  //     createdDate: formatDateToUS(new Date()),
  //     key: "string"
  //   }
  //   console.log(payload)
  //   await dispatch(shipmentEditApi(payload))
  //   // try {
  //   //   await dispatch(shipmentAddApi(payload));
  //   //   console.log("Payload submitted successfully");
  //   // } catch (error) {
  //   //   if (error.response) {
  //   //     console.error("Error response from server:", error.response.data); // Log server response
  //   //   } else {
  //   //     console.error("Error message:", error.message); // Log error message
  //   //   }
  //   // }
  // };


  // const handleSubmit = async () => {
  //   const payload = {
  //     shipmentID: "",
  //     shipmentTypeId: 4,
  //     customerId: user.customerId,
  //     accessLicenseNumber: "string",
  //     userID: "string",
  //     password: formData.password,
  //     shipperNumber: "string",
  //     accountID: formData.accountid,
  //     meterNumber: formData.meterNumber,
  //     isActive: true,
  //     createdDate: formatDateToUS(new Date()),
  //     key: "string"
  //   }
  //   console.log(payload)
  //   await dispatch(shipmentEditApi(payload))
  //   try {
  //     await dispatch(shipmentAddApi(payload));
  //     console.log("Payload submitted successfully");
  //   } catch (error) {
  //     if (error.response) {
  //       console.error("Error response from server:", error.response.data); // Log server response
  //     } else {
  //       console.error("Error message:", error.message); // Log error message
  //     }
  //   }
  // };

  const handleSubmit = async () => {
    const isFormComplete = formData.accountid && formData.meterNumber && formData.key && formData.password;
  
    if (!isFormComplete) {
      // If any of the form fields are empty, show an error message
      setMessage('All fields are required.');
      setIsError(true);
    } else {
      // Check if shipping details already exist for typeId 4 (FedEx)
      const existingShipment = getshipingDetails?.find(shipment => shipment.shipmentTypeId === 4);
  
      if (!existingShipment) {
        // If no existing shipment, call shipmentAddApi
        const payloadAdd = {
          shipmentID: "", // Empty since it's a new shipment
          shipmentTypeId: 4, // Assuming FedEx is type 4
          customerId: user.customerId,
          accessLicenseNumber: "string", // Placeholder values as per your logic
          userID: "string",
          password: formData.password,
          shipperNumber: "string",
          accountID: formData.accountid,
          meterNumber: formData.meterNumber,
          isActive: true,
          createdDate: "2024-10-21T07:15:43.952Z",
          key: formData.key,
        };
        console.log("Adding new shipment with payload:", payloadAdd);
        await dispatch(shipmentAddApi(payloadAdd));
        setMessage('FedEx Shipping details added successfully.');
        setIsError(false);
      } else {
        // If existing shipment, call shipmentEditApi
        const payloadEdit = {
          shipmentID: getshipingDetails[0]?.shipmentID, // Use the existing shipment ID for update
          shipmentTypeId: 4, // FedEx
          customerId: user.customerId,
          accessLicenseNumber: "string",
          userID: "string",
          password: formData.password,
          shipperNumber: "string",
          accountID: formData.accountid,
          meterNumber: formData.meterNumber,
          isActive: true,
          createdDate: getshipingDetails[0]?.createdDate, // Keep the original created date
          key: formData.key,
        };
        console.log("Editing shipment with payload:", payloadEdit);
        await dispatch(shipmentEditApi(payloadEdit));
        setMessage('FedEx Shipping details updated successfully.');
        setIsError(false);
      }
    }
  };
  
  useEffect(() => {
    dispatch(fedexShippingGetApi(user?.customerId))
  }, [])

  useEffect(() => {
    // Filter the shipment details based on shipmentTypeId == 4 (FedEx)
    console.log("getshipingDetails structure: ", getshipingDetails);

    // Check if getshipingDetails is an array
    if (Array.isArray(getshipingDetails)) {
      // Filter the shipment details based on shipmentTypeId == 4 (FedEx)
      const fedexShippingDetails = getshipingDetails.find(shipment => shipment.shipmentTypeId === 4);

      if (fedexShippingDetails) {
        // Populate formData with the FedEx shipping details
        setFormData({
          accountid: fedexShippingDetails.accountID || '',
          meterNumber: fedexShippingDetails.meterNumber || '',
          key: fedexShippingDetails.key || '',
          password: fedexShippingDetails.password || '',
        });
      }
    } else {
      console.warn("getshipingDetails is not an array. Please check the data structure.");
    }

  }, [getshipingDetails]);

  return (
    <div className=' w-full px-4'>
      {message && (
        <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'} `}>
          {message}
        </div>
      )}
      <div className='flex justify-between border-b border-black my-5 p-4'>
        <h1 className='text-xl text-blue-900 font-semibold'>Manage Fedex Configuration</h1>
      </div>
      <div className='w-[60%] border rounded-md shadow-md flex flex-col justify-center'>
      <div className='w-full ml-8 flex flex-col justify-center mt-4'>

      <div className="w-[80%] flex justify-between text-gray-600 my-4 ">
        <div className="flex flex-col">
          {/* <label className="text-base  mb-1 font-semibold">
            Account ID:<span className="text-red-600 text-xl">*</span>
          </label> */}
            <TextField
              label="  Account ID"
              size='small'
            type="text"
            name="accountid"
            className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.accountid}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          {/* <label className="text-base  mb-1 font-semibold">
            Meter Number<span className="text-red-600 text-xl">*</span>
          </label> */}
          <TextField
              type="text"
              label=" Meter Number"
              size='small'
            name="meterNumber"
            className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.meterNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-[80%] flex justify-between text-gray-600 my-4">
        <div className="flex flex-col">
          {/* <label className="text-base  mb-1 font-semibold">
            Key<span className="text-red-600 text-xl">*</span>
          </label> */}
          <TextField
              type="text"
              label="Key"
              size='small'
            name="key"
            className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.key}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          {/* <label className="text-base  mb-1 font-semibold">
            Password:<span className="text-red-600 text-xl">*</span>
          </label> */}
          <TextField
              type="text"
              label="Password"
              size='small'
            name="password"
            className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.password}
            onChange={handleChange}
          />
          </div>
          
        </div>
        
      </div>
      <div className='flex justify-end p-4'>
      <button
        className='border font-bold text-[15px] rounded-lg p-2 px-4 h-8 flex justify-center items-center bg-blue-900 text-white '
        onClick={handleSubmit}
      >
        SAVE
        </button>
      </div>
     </div>
    </div>
  );
}

export default  LayoutFedexshipping;



