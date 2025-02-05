
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fedexShippingGetApi, shipmentAddApi, shipmentEditApi, } from '../../../Api/ShipmentApi';
// import { TextField } from '@mui/material';
// import edit from '../../../assets/Edit.png'
// function LayoutFedexshipping() {

//   const dispatch = useDispatch()

//   const user = useSelector((state) => state.user.user)

//   const getshipingDetails = useSelector((state) => state.shipment.getShipment)
//   const [formData, setFormData] = useState({
//     accountid: '',
//     meterNumber: '',
//     key: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const formatDateToUS = (date) => {
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
//     const day = String(date.getDate()).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
//   };


//   const handleSubmit = async () => {
//     const isFormComplete = formData.accountid && formData.meterNumber && formData.key && formData.password;

//     if (!isFormComplete) {
//       // If any of the form fields are empty, show an error message
//       setMessage('All fields are required.');
//       setIsError(true);
//     } else {
//       // Check if shipping details already exist for typeId 4 (FedEx)
//       const existingShipment = getshipingDetails?.find(shipment => shipment.shipmentTypeId === 4);

//       if (!existingShipment) {
//         // If no existing shipment, call shipmentAddApi
//         const payloadAdd = {
//           shipmentID: "", // Empty since it's a new shipment
//           shipmentTypeId: 4, // Assuming FedEx is type 4
//           customerId: user.customerId,
//           accessLicenseNumber: "string", // Placeholder values as per your logic
//           userID: "string",
//           password: formData.password,
//           shipperNumber: "string",
//           accountID: formData.accountid,
//           meterNumber: formData.meterNumber,
//           isActive: true,
//           createdDate: "2024-10-21T07:15:43.952Z",
//           key: formData.key,
//         };
//         await dispatch(shipmentAddApi(payloadAdd));
//         setMessage('FedEx Shipping details added successfully.');
//         setIsError(false);
//       } else {
//         // If existing shipment, call shipmentEditApi
//         const payloadEdit = {
//           shipmentID: getshipingDetails[0]?.shipmentID, // Use the existing shipment ID for update
//           shipmentTypeId: 4, // FedEx
//           customerId: user.customerId,
//           accessLicenseNumber: "string",
//           userID: "string",
//           password: formData.password,
//           shipperNumber: "string",
//           accountID: formData.accountid,
//           meterNumber: formData.meterNumber,
//           isActive: true,
//           createdDate: getshipingDetails[0]?.createdDate, // Keep the original created date
//           key: formData.key,
//         };
//         await dispatch(shipmentEditApi(payloadEdit));
//         setMessage('FedEx Shipping details updated successfully.');
//         setIsError(false);
//       }
//     }
//   };

//   useEffect(() => {
//     dispatch(fedexShippingGetApi(user?.customerId))
//   }, [])

//   useEffect(() => {
//     // Filter the shipment details based on shipmentTypeId == 4 (FedEx)

//     // Check if getshipingDetails is an array
//     if (Array.isArray(getshipingDetails)) {
//       // Filter the shipment details based on shipmentTypeId == 4 (FedEx)
//       const fedexShippingDetails = getshipingDetails.find(shipment => shipment.shipmentTypeId === 4);

//       if (fedexShippingDetails) {
//         // Populate formData with the FedEx shipping details
//         setFormData({
//           accountid: fedexShippingDetails.accountID || '',
//           meterNumber: fedexShippingDetails.meterNumber || '',
//           key: fedexShippingDetails.key || '',
//           password: fedexShippingDetails.password || '',
//         });
//       }
//     } else {
//       console.warn("getshipingDetails is not an array. Please check the data structure.");
//     }

//   }, [getshipingDetails]);

//   return (
//     <div className=' w-full px-4'>
//       {message && (
//         <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'} `}>
//           {message}
//         </div>
//       )}
//       <div className='flex justify-between border-b border-black my-5 p-4'>
//         <h1 className='text-xl text-blue-900 font-semibold'>Manage Fedex Configuration</h1>
//       </div>
//       <div className='w-[60%] border rounded-md shadow-md flex flex-col justify-center'>
//       <div className='w-full ml-8 flex flex-col justify-center mt-4'>
//       <div className="flex justify-end -ml-4 w-[95%]">

// <img src={edit} className="w-6 h-6"/>
//   </div>
//       <div className="w-[80%] flex justify-between text-gray-600 my-4 ">
//         <div className="flex flex-col">
//           {/* <label className="text-base  mb-1 font-semibold">
//             Account ID:<span className="text-red-600 text-xl">*</span>
//           </label> */}
//             <TextField
//               label="  Account ID"
//               size='small'
//             type="text"
//             name="accountid"
//             className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
//             value={formData.accountid}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex flex-col">
//           {/* <label className="text-base  mb-1 font-semibold">
//             Meter Number<span className="text-red-600 text-xl">*</span>
//           </label> */}
//           <TextField
//               type="text"
//               label=" Meter Number"
//               size='small'
//             name="meterNumber"
//             className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
//             value={formData.meterNumber}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="w-[80%] flex justify-between text-gray-600 my-4">
//         <div className="flex flex-col">
//           {/* <label className="text-base  mb-1 font-semibold">
//             Key<span className="text-red-600 text-xl">*</span>
//           </label> */}
//           <TextField
//               type="text"
//               label="Key"
//               size='small'
//             name="key"
//             className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
//             value={formData.key}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex flex-col">
//           {/* <label className="text-base  mb-1 font-semibold">
//             Password:<span className="text-red-600 text-xl">*</span>
//           </label> */}
//           <TextField
//               type="text"
//               label="Password"
//               size='small'
//             name="password"
//             className='border rounded-md h-8 w-52 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
//             value={formData.password}
//             onChange={handleChange}
//           />
//           </div>

//         </div>

//       </div>
//       <div className='flex justify-end p-4'>
//       <button
//         className='border font-bold text-[15px] rounded-lg p-2 px-4 h-8 flex justify-center items-center bg-blue-900 text-white '
//         onClick={handleSubmit}
//       >
//         SAVE
//         </button>
//       </div>
//      </div>
//     </div>
//   );
// }

// export default  LayoutFedexshipping;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';
import Notification from '../../Notification';
import { fetchFedExAddApi, fetchFedexEditApi, fetchGetFedex } from '../../../Api/FedexApi';

function LayoutFedexshipping() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const getshipingDetails = useSelector((state) => state.fedex.getFedex);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [formData, setFormData] = useState({
    // accountid: '',
    // meterNumber: '',
    // key: '',
    // password: '',
    fedExBaseUrl: "",
    grant_type: "",
    client_id: "",
    client_secret: "",
    rates_grant_type: "",
    rates_client_id: "",
    rates_client_secret: "",
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isEditable, setIsEditable] = useState(false); // State to manage editability of fields

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Remove error when the user starts typing
    setErrors((prev) => ({ ...prev, [name]: value.trim() ? "" : "This field is required" }));
  };

  const [CallHistory, setCallHistory] = useState(0);
  const handleEditClick = () => {
    setIsEditable(true); // Enable input fields when the edit icon is clicked
  };

  // const handleSubmit = async () => {
  //   // const isFormComplete = formData.accountid && formData.meterNumber && formData.key && formData.password;
  //   const isFormComplete = formData.fedExBaseUrl && formData.grant_type && formData.client_id && formData.client_secret && formData.rates_grant_type && formData.rates_client_id && formData.rates_client_secret

  //   if (!isFormComplete) {
  //     setMessage('All fields are required.');
  //     setIsError(true);
  //   } else {
  //     // const existingShipment = getshipingDetails?.find(shipment => shipment.shipmentTypeId === 4);

  //     const currentDate = new Date();
  //     const createdDate = currentDate.toISOString();
  //     const modifiedDate = currentDate.toISOString();
  //     if (!getshipingDetails) {
  //       const payloadAdd = {
  //       fedExid: "",
  //       sellerId: user.customerId,
  //       fedExBaseUrl: formData.fedExBaseUrl,
  //       grant_type: formData.grant_type,
  //       client_id: formData.client_id,
  //       client_secret: formData.client_secret,
  //       rates_grant_type: formData.rates_grant_type,
  //       rates_client_id: formData.rates_client_id,
  //       rates_client_secret: formData.rates_client_secret,
  //       createdDate: createdDate,
  //       modifiedDate: modifiedDate
  //       };
  //       await dispatch(fedExAddApi(payloadAdd));
  //       // setMessage('FedEx Shipping details added successfully.');
  //       setNotification({
  //         show: true,
  //         message: "FedEx Shipping details added Successfully!",
  //       });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //       setIsError(false);
  //     } else {
  //       const payloadEdit = {
  //         // shipmentID: getshipingDetails[0]?.shipmentID,
  //         // shipmentTypeId: 4,
  //         // customerId: user.customerId,
  //         // accessLicenseNumber: 'string',
  //         // userID: 'string',
  //         // password: formData.password,
  //         // shipperNumber: 'string',
  //         // accountID: formData.accountid,
  //         // meterNumber: formData.meterNumber,
  //         // isActive: true,
  //         // createdDate: getshipingDetails[0]?.createdDate,
  //         // key: formData.key,
  //         fedExid: getshipingDetails[0]?.fedExid,
  //         sellerId: user.customerId,
  //         fedExBaseUrl: formData.fedExBaseUrl,
  //         grant_type: formData.grant_type,
  //         client_id: formData.client_id,
  //         client_secret: formData.client_secret,
  //         rates_grant_type: formData.rates_grant_type,
  //         rates_client_id: formData.rates_client_id,
  //         rates_client_secret: formData.rates_client_secret,
  //         createdDate: createdDate,
  //         modifiedDate: modifiedDate
  //       };
  //       await dispatch(fedexEditApi(payloadEdit));
  //       // setMessage('FedEx Shipping details updated successfully.');
  //       setNotification({
  //         show: true,
  //         message: "FedEx Shipping details updated Successfully!",
  //       });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //       setIsError(false);
  //     }
  //     setIsEditable(false); // Disable editing after save
  //   }
  // };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fedExBaseUrl) newErrors.fedExBaseUrl = "FedEx Base URL is required";
    if (!formData.grant_type) newErrors.grant_type = "Grant Type is required";
    if (!formData.client_id) newErrors.client_id = "Client ID is required";
    if (!formData.client_secret) newErrors.client_secret = "Client Secret is required";
    if (!formData.rates_grant_type) newErrors.rates_grant_type = "Rates Grant Type is required";
    if (!formData.rates_client_id) newErrors.rates_client_id = "Rates Client ID is required";
    if (!formData.rates_client_secret) newErrors.rates_client_secret = "Rates Client Secret is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


    const handleSave = () => {
      if (validateForm()) {
        handleSubmit(); // Call submit function if validation passes
      }
    };
  
  const handleSubmit = async () => {
    setMessage("");
    setIsError(false);

    // Check if all fields are filled
    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");
    // const isFormComplete =
    //   formData.fedExBaseUrl &&
    //   formData.grant_type &&
    //   formData.client_id &&
    //   formData.client_secret &&
    //   formData.rates_grant_type &&
    //   formData.rates_client_id &&
    //   formData.rates_client_secret;

    if (!isFormComplete) {
      setMessage("All fields are required.");
      setIsError(true);
    } else {
      const currentDate = new Date();
      const createdDate = currentDate.toISOString();
      const modifiedDate = currentDate.toISOString();

      if (!getshipingDetails || getshipingDetails.length === 0) {
        // Call fedExAddApi if no existing shipping details are found
        const payloadAdd = {
          fedExid: "",
          sellerId: user.customerId,
          fedExBaseUrl: formData.fedExBaseUrl,
          grant_type: formData.grant_type,
          client_id: formData.client_id,
          client_secret: formData.client_secret,
          rates_grant_type: formData.rates_grant_type,
          rates_client_id: formData.rates_client_id,
          rates_client_secret: formData.rates_client_secret,
          createdDate,
          modifiedDate,
        };

        await dispatch(fetchFedExAddApi(payloadAdd));
        setNotification({
          show: true,
          message: "FedEx Shipping details added successfully!",
        });
      } else {
        // Check if any field has changed
        const hasChanges =
          getshipingDetails[0]?.fedExBaseUrl !== formData.fedExBaseUrl ||
          getshipingDetails[0]?.grant_type !== formData.grant_type ||
          getshipingDetails[0]?.client_id !== formData.client_id ||
          getshipingDetails[0]?.client_secret !== formData.client_secret ||
          getshipingDetails[0]?.rates_grant_type !== formData.rates_grant_type ||
          getshipingDetails[0]?.rates_client_id !== formData.rates_client_id ||
          getshipingDetails[0]?.rates_client_secret !== formData.rates_client_secret;

        if (hasChanges) {
          // Call fedexEditApi only if there are changes
          const payloadEdit = {
            fedExid: getshipingDetails[0]?.fedExid,
            sellerId: user.customerId,
            fedExBaseUrl: formData.fedExBaseUrl,
            grant_type: formData.grant_type,
            client_id: formData.client_id,
            client_secret: formData.client_secret,
            rates_grant_type: formData.rates_grant_type,
            rates_client_id: formData.rates_client_id,
            rates_client_secret: formData.rates_client_secret,
            createdDate: getshipingDetails[0]?.createdDate || createdDate,
            modifiedDate,
          };

          // await dispatch(fedexEditApi(payloadEdit));
          await dispatch(fetchFedexEditApi(payloadEdit))
          setNotification({
            show: true,
            message: "FedEx Shipping details updated successfully!",
          });
        } else {
          setNotification({
            show: true,
            message: "No changes detected.",
          });
        }
      }

      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setCallHistory((prev) => prev + 1);
      setIsError(false);
      setIsEditable(false); // Disable editing after save
    }
  };


  useEffect(() => {
    dispatch(fetchGetFedex(user?.customerId));
  }, [dispatch, user, CallHistory]);

  // useEffect(() => {
  // //   if (Array.isArray(getshipingDetails)) {
  //     // const fedexShippingDetails = getshipingDetails.find(shipment => shipment.shipmentTypeId === 4);
  //     if (getshipingDetails) {
  //       setFormData({
  //         fedExBaseUrl: getshipingDetails.fedExBaseUrl || '',
  //         grant_type: getshipingDetails.grant_type || '',
  //         client_id: getshipingDetails.client_id || '',
  //         client_secret: getshipingDetails.client_secret || '',
  //         rates_grant_type: getshipingDetails.rates_grant_type || '',
  //         rates_client_id: getshipingDetails.rates_client_id || '',
  //         rates_client_secret: getshipingDetails.rates_client_secret || '',
  //       });
  //     }
  // //   }
  // }, [getshipingDetails]);
  useEffect(() => {
    if (getshipingDetails?.length) {
      setFormData({
        fedExBaseUrl: getshipingDetails[0].fedExBaseUrl || "",
        grant_type: getshipingDetails[0].grant_type || "",
        client_id: getshipingDetails[0].client_id || "",
        client_secret: getshipingDetails[0].client_secret || "",
        rates_grant_type: getshipingDetails[0].rates_grant_type || "",
        rates_client_id: getshipingDetails[0].rates_client_id || "",
        rates_client_secret: getshipingDetails[0].rates_client_secret || "",
      });
    }
  }, [getshipingDetails]);

  

  return (
    <div className="w-full px-4">
      {/* {message && (
        <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'}`}>
          {message}
        </div>
      )} */}
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="flex justify-between border-b border-black my-2 md:my-5 p-4">
        <h1 className="text-base md:text-xl text-blue-900 font-semibold">Manage Fedex Configuration</h1>
      </div>
      <div className="w-full md:w-[80%] xl:w-[60%]  border rounded-md shadow-md flex flex-col justify-center">
        <div className="w-full ml-2 md:ml-6 flex flex-col  justify-center">
          <div className="flex justify-end -ml-4 w-[95%]">
            <img src={edit} className="w-6 h-6 cursor-pointer" onClick={handleEditClick} alt="Edit" />
          </div>
          <div className="w-[80%] flex flex-col md:flex-row justify-between gap-4 text-gray-600 my-0 md:my-4">
            <div className="flex flex-col">
              <TextField
                label="FedExBaseUrl"
                size="small"
                type="text"
                name="fedExBaseUrl"
                className="border rounded-md h-8 w-52"
                value={formData.fedExBaseUrl}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.fedExBaseUrl}
                helperText={errors.fedExBaseUrl || ""}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Grant type"
                size="small"
                name="grant_type"
                className="border rounded-md h-8 w-52"
                value={formData.grant_type}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.grant_type}
                helperText={errors.grant_type || ""}
              />
            </div>

          </div>

          <div className="w-[80%] flex flex-col md:flex-row gap-4 justify-between text-gray-600 my-4">
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Client id"
                size="small"
                name="client_id"
                className="border rounded-md h-8 w-52"
                value={formData.client_id}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.client_id}
                helperText={errors.client_id || ""}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Client secret"
                size="small"
                name="client_secret"
                className="border rounded-md h-8 w-52"
                value={formData.client_secret}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.client_secret}
                helperText={errors.client_secret || ""}
              />
            </div>
          </div>
          <div className="w-[80%] flex flex-col md:flex-row gap-4 justify-between text-gray-600 my-4">
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Rates grant type"
                size="small"
                name="rates_grant_type"
                className="border rounded-md h-8 w-52"
                value={formData.rates_grant_type}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.rates_grant_type}
                helperText={errors.rates_grant_type || ""}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Rates client id"
                size="small"
                name="rates_client_id"
                className="border rounded-md h-8 w-52"
                value={formData.rates_client_id}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.rates_client_id}
                helperText={errors.rates_client_id || ""}
              />
            </div>
          </div>
          <div className="w-[80%] flex flex-col md:flex-row gap-4 justify-between text-gray-600 my-4">
            <div className="flex flex-col">
              <TextField
                type="text"
                label="Rates client secret"
                size="small"
                name="rates_client_secret"
                className="border rounded-md h-8 w-52"
                value={formData.rates_client_secret}
                onChange={handleChange}
                disabled={!isEditable} // Disable the input if not editable
                error={!!errors.rates_client_secret}
                helperText={errors.rates_client_secret || ""}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            className="border font-bold text-[15px] rounded-lg p-2 px-4 h-8 flex justify-center items-center bg-blue-900 text-white"
            onClick={handleSave}
            disabled={!isEditable} // Disable the save button if not in edit mode
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutFedexshipping;

