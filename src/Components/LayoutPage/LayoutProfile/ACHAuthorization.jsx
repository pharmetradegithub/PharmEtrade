import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../../assets/Edit.png';
import { fetchAddAch, fetchGetAchCustomer, fetchUpdateAch } from '../../../Api/AddressApi';
import Notification from '../../Notification';

// function ACHAuthorization() {
//   const user = useSelector((state) => state.user?.user || []);
//   const getAch = useSelector((state) => state.address.achGet)
//   const dispatch = useDispatch();
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });

//   const [formData, setFormData] = useState({
//     bankName: '',
//     BankAddress: '',
//     RoutingNumber: '',
//     AccountNumber: '',
//     AccountType: '',
//   });

//   const [errors, setErrors] = useState({});
//   const validate = () => {
//     const newErrors = {};
//     const regex = /^[0-9]*$/; // For numeric validation

//     if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
//     if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
//     if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
//     if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
//     if (!formData.AccountType) newErrors.AccountType = 'Account Type is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if there are no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setFormData({
//         bankName: '',
//         BankAddress: '',
//         RoutingNumber: '',
//         AccountNumber: '',
//         AccountType: '',
//       });
//       setErrors({});
//     }
//   };

//   const [isTabEdit, setIsTabEdit] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleTabClick = () => {
//     setIsTabEdit(true);
//   };

//   const handleTabSave = async () => {
//     setIsTabEdit(false);
//     const currentDate = new Date().toISOString();
//     const payload = {
//       // id: '',
//       customerId: user.customerId,
//       bankName: formData.bankName,
//       bankAddress: formData.BankAddress,
//       routingNumber: formData.RoutingNumber,
//       accountNumber: formData.AccountNumber,
//       accountTypeId: formData.AccountType,
//       createdBy: currentDate
//     };
    
//     if (isEditMode) {
//       // Call the update API if in edit mode
//       await dispatch(fetchUpdateAch(payload));
//     } else {
//       // Call the add API if in create mode
//       await dispatch(fetchAddAch(payload));
//     }
//     // await dispatch(fetchAddAch(payload));

//     // Show an alert message after saving
//     // alert("Beneficiary details saved successfully!");
//     setNotification({
//       show: true,
//       message: `ACH Authorization ${isEditMode ? 'updated' : 'saved'} successfully!`,
//     });
//     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   };

//   const accountTypes = ['Savings', 'Checking']; // Example account types

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
//       return; // Ignore invalid input
//     }
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     if (name === "RoutingNumber" && value.length === 9) {
//       setErrors((prev) => ({ ...prev, RoutingNumber: "" }));
//     }
//   };

//   const handleBlur = () => {
//     const { RoutingNumber } = formData;

//     // Validate RoutingNumber
//     if (RoutingNumber.length !== 9) {
//       setErrors((prev) => ({
//         ...prev,
//         RoutingNumber: "Routing Number must be exactly 9 digits.",
//       }));
//     }
//   };

//   // Populate form data with beneficiary details when available
//   useEffect(() => {
//     if (getAch) {
//       setFormData({
//         bankName: getAch.bankName || '',
//         BankAddress: getAch.bankAddress || '',
//         RoutingNumber: getAch.routingNumber || '',
//         AccountNumber: getAch.accountNumber || '',
//         AccountType: getAch.accountType || '',
//       });
//       setIsEditMode(true);
//     } else {
//       setIsEditMode(false);
//     }
//   }, [getAch]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       dispatch(fetchGetAchCustomer(user.customerId));  // Dispatch function to get beneficiary details
//     };
//     if (user) {
//       fetchdata();
//     }
//   }, [user, dispatch]);
//   return (
//     <div>
//       <h1 className="text-xl text-blue-900 font-semibold mx-6 py-4">ACH Authorization</h1>
//       <div className={`bg-white border ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
//         {isTabEdit && (
//           <h1 className="absolute -top-4 left-4 bg-blue px-2 text-xl font-semibold text-white rounded-md">
//             ACH Authorization
//           </h1>
//         )}

//         <div className="flex justify-between my-2">
//           <div className='flex flex-col'>
//           <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>
//             ACH Authorization
//           </h1>
//             <p>I hereby authorize IBG Drugs LLC d/b/a PharmEtrade to initiate entries to my checking/savings accounts at the financial institution listed below (THE FINANCIAL INSTITUTION), and, if necessary, initiate adjustments for any transactions credited/debited in error.<br />
//               This authority will remain in effect until is notified by me in writing to cancel authorization in such time as to afford and THE FINANCIAL INSTITUTION a reasonable opportunity to act on it.
//             </p>
//           </div>
//           <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" onClick={handleTabClick} alt="Edit" />
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row mb-4 mt-7">
//             <div className="mr-2 xl:ml-2">
//               {/* <label className="block mb-1">Bank Name</label> */}
//               <TextField
//                 label="Bank Name"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.bankName}
//                 helperText={errors.bankName}
//                 fullWidth
//               />
//             </div>
//             <div className=" ml-0 my-2 md:my-0 xl:ml-6 mr-2">
//               {/* <label className="block mb-1">Bank Address</label> */}
//               <TextField
//                 label="Bank Address"
//                 name="BankAddress"
//                 value={formData.BankAddress}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.BankAddress}
//                 helperText={errors.BankAddress}
//                 fullWidth
//               />
//             </div>
//             <div className="mr-2  xl:ml-6">
//               {/* <label className="block mb-1">Routing Number</label> */}
//               <TextField
//                 label="Routing Number"
//                 name="RoutingNumber"
//                 value={formData.RoutingNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.RoutingNumber}
//                 helperText={errors.RoutingNumber}
//                 fullWidth
//               />
//             </div>
//           </div>

//           <div className="flex  flex-col md:flex-row mb-4">
//             <div className="xl:ml-2 mr-2">
//               {/* <label className="block mb-1">Account Number</label> */}
//               <TextField
//                 label="Account Number"
//                 name="AccountNumber"
//                 value={formData.AccountNumber}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.AccountNumber}
//                 helperText={errors.AccountNumber}
//                 fullWidth
//               />
//             </div>
//             <div className="xl:ml-6 mr-2 my-2 md:my-0 w-full md:w-[45%] xl:w-[23%]">
//               {/* <label className="block mb-1">Account Type</label> */}
//               <FormControl fullWidth error={!!errors.AccountType} size="small" disabled={!isTabEdit}>
//                 <InputLabel id="account-type-label">Account Type</InputLabel>
//                 <Select
//                   labelId="account-type-label"
//                   name="AccountType"
//                   value={formData.AccountType}
//                   onChange={handleChange}
//                   label="Account Type"
//                 >
//                   {accountTypes.map((type, index) => (
//                     <MenuItem key={index} value={type}>
//                       {type}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
//               </FormControl>
//             </div>
//           </div>
//           <div className="flex justify-end py-2">
//             <button
//               className={`bg-blue text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               onClick={handleTabSave}
//               disabled={!isTabEdit}
//             >
//               {isEditMode ? 'Update' : 'Save'}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

function ACHAuthorization() {
  const user = useSelector((state) => state.user?.user || []);
  const getAch = useSelector((state) => state.address.achGet);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [formData, setFormData] = useState({
    bankName: '',
    BankAddress: '',
    RoutingNumber: '',
    AccountNumber: '',
    AccountType: '',
  });

  const [errors, setErrors] = useState({});
  const [isTabEdit, setIsTabEdit] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.bankName.trim() !== '' &&
      formData.BankAddress.trim() !== '' &&
      formData.RoutingNumber.trim() !== '' &&
      formData.AccountNumber.trim() !== '' &&
      // formData.AccountType.trim() !== ''
      (formData.AccountType === "Saving" || formData.AccountType === "Checking")
    );
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
    if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
    if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
    if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
    // if (!formData.AccountType) newErrors.AccountType = 'Account Type is required';
    if (formData.AccountType !== "Saving" && formData.AccountType !== "Checking") newErrors.AccountType = 'Account Type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({
        bankName: '',
        BankAddress: '',
        RoutingNumber: '',
        AccountNumber: '',
        AccountType: '',
      });
      setErrors({});
    }
  };

  const handleTabClick = () => {
    setIsTabEdit(true);
  };

  // const handleTabSave = async () => {
  //   setIsTabEdit(false);
  //   const payload = {
  //     customerId: user.customerId,
  //     bankName: formData.bankName,
  //     bankAddress: formData.BankAddress,
  //     routingNumber: formData.RoutingNumber,
  //     accountNumber: formData.AccountNumber,
  //     accountTypeId: formData.AccountType,
  //     createdBy: user.customerId
  //   };

  //   if (isEditMode) {
  //     const payloadUpdate = {
  //       customerACHDetailsId: getAch[0].customerACHDetailsId,
  //       customerId: user.customerId,
  //       bankName: formData.bankName,
  //       bankAddress: formData.BankAddress,
  //       routingNumber: formData.RoutingNumber,
  //       accountNumber: formData.AccountNumber,
  //       accountTypeId: formData.AccountType,
  //       modifiedBy: user.customerId
  //     };
  //     await dispatch(fetchUpdateAch(payloadUpdate)); // Update API call
  //   } else {
  //     await dispatch(fetchAddAch(payload)); // Add API call
  //   }

  //   setNotification({
  //     show: true,
  //     message: `ACH Authorization ${isEditMode ? 'updated' : 'saved'} successfully!`,
  //   });
  //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   dispatch(fetchGetAchCustomer(user.customerId));
  // };

  const handleTabSave = async () => {
    try {
      setIsTabEdit(false);

      const payload = {
        customerId: user.customerId,
        bankName: formData.bankName,
        bankAddress: formData.BankAddress,
        routingNumber: formData.RoutingNumber,
        accountNumber: formData.AccountNumber,
        accountTypeId: formData.AccountType === "Saving" ? 1 : 2,
        createdBy: user.customerId,
      };


      if (isEditMode) {
        // Validate getAch data before proceeding
        if (!getAch || getAch.length === 0 || !getAch[0].customerACHDetailsId) {
          console.error("Invalid ACH details for update:");
          return;
        }

        const payloadUpdate = {
          customerACHDetailsId: getAch[0].customerACHDetailsId,
          customerId: user.customerId,
          bankName: formData.bankName,
          bankAddress: formData.BankAddress,
          routingNumber: formData.RoutingNumber,
          accountNumber: formData.AccountNumber,
          accountTypeId: formData.AccountType === "Saving" ? 1 : 2,
          modifiedBy: user.customerId,
        };

        await dispatch(fetchUpdateAch(payloadUpdate)); // Update API call
      } else {
        await dispatch(fetchAddAch(payload)); // Add API call
      }

      setNotification({
        show: true,
        message: `ACH Authorization ${isEditMode ? "updated" : "saved"} successfully!`,
      });

      setTimeout(() => setNotification({ show: false, message: "" }), 3000);

      // Fetch updated ACH details after save/update
      await dispatch(fetchGetAchCustomer(user.customerId));

    } catch (error) {
      console.error("Error in handleTabSave:", error);
      setNotification({
        show: true,
        message: "An error occurred while processing the request.",
      });
    }
  };

  const accountTypes = [
    { label: 'Savings', value: "Saving"},
    { label: 'Checking', value: "Checking"}
  ];


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
      return;
    }
    setFormData({
      ...formData,
      // [name]: value,
      [name] :  value
    });
    if (name === "RoutingNumber" && value.length === 9) {
      setErrors((prev) => ({ ...prev, RoutingNumber: "" }));
    }
  };

  const handleBlur = () => {
    const { RoutingNumber } = formData;
    if (RoutingNumber.length !== 9) {
      setErrors((prev) => ({
        ...prev,
        RoutingNumber: "Routing Number must be exactly 9 digits.",
      }));
    }
  };

  useEffect(() => {
    if (getAch && getAch.length > 0) {
      setFormData({
        bankName: getAch?.[0]?.bankName || '',
        BankAddress: getAch?.[0]?.bankAddress || '',
        RoutingNumber: getAch?.[0]?.routingNumber || '',
        AccountNumber: getAch?.[0]?.accountNumber || '',
        AccountType: getAch[0]?.accountTypeId === 1 ? "Saving" : "Checking", // Convert ID to
        // AccountType: getAch?.[0]?.accountTypeId === 1? "Savings" : getAch?.[0]?.accountTypeId === 2? "Checking" : "",

      });
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
  }, [getAch]);

  useEffect(() => {
    const fetchdata = async () => {
      dispatch(fetchGetAchCustomer(user.customerId));
    };
    if (user) {
      fetchdata();
    }
  }, [user, dispatch]);

  return (
    <div>
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <h1 className="text-blue2 text-xl text-blue2 font-semibold mx-6 py-4">ACH Authorization</h1>
      <div className={`bg-white border ${isTabEdit ? 'border-blue2' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
        {isTabEdit && (
          <h1 className="text-blue2 absolute -top-4 left-4 bg-blue px-2 text-xl font-semibold text-white rounded-md">
            ACH Authorization
          </h1>
        )}

        <div className="flex justify-between my-2">
          <div className='flex flex-col'>
            <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue2'}`}>
              ACH Authorization
            </h1>
            <p>I hereby authorize IBG Drugs LLC d/b/a PharmEtrade to initiate entries to my checking/savings accounts at the financial institution listed below (THE FINANCIAL INSTITUTION), and, if necessary, initiate adjustments for any transactions credited/debited in error.<br />
              This authority will remain in effect until is notified by me in writing to cancel authorization in such time as to afford and THE FINANCIAL INSTITUTION a reasonable opportunity to act on it.
            </p>
          </div>
          <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" onClick={handleTabClick} alt="Edit" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4 mt-7">
            <div className="mr-2 xl:ml-2">
              <TextField
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.bankName}
                helperText={errors.bankName}
                fullWidth
              />
            </div>
            <div className="ml-0 my-2 md:my-0 xl:ml-6 mr-2">
              <TextField
                label="Bank Address"
                name="BankAddress"
                value={formData.BankAddress}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.BankAddress}
                helperText={errors.BankAddress}
                fullWidth
              />
            </div>
            <div className="mr-2 xl:ml-6">
              <TextField
                label="Routing Number"
                name="RoutingNumber"
                value={formData.RoutingNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.RoutingNumber}
                helperText={errors.RoutingNumber}
                fullWidth
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="xl:ml-2 mr-2">
              <TextField
                label="Account Number"
                name="AccountNumber"
                value={formData.AccountNumber}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.AccountNumber}
                helperText={errors.AccountNumber}
                fullWidth
              />
            </div>
            <div className="xl:ml-6 mr-2 my-2 md:my-0 w-full md:w-[45%] xl:w-[24%]">
              <FormControl fullWidth error={!!errors.AccountType} size="small" disabled={!isTabEdit}>
                <InputLabel id="account-type-label">Account Type</InputLabel>
                {/* <Select
                  labelId="account-type-label"
                  name="AccountType"
                  value={formData.AccountType}
                  onChange={handleChange}
                  label="Account Type"
                >
                  {accountTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select> */}
                <Select
                  labelId="account-type-label"
                  name="AccountType"
                  value={formData.AccountType}
                  onChange={handleChange}
                  label="Account Type"
                >
                  {accountTypes.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
              </FormControl>
            </div>
          </div>
          <div className="flex justify-end py-2">
            <button
              className={`bg-blue text-white p-1 w-16 rounded-md hover:bg-green2 font-semibold ${!isTabEdit || !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleTabSave}
              disabled={!isTabEdit || !isFormValid()} // Disable if not in edit mode or form is invalid
            >
              {isEditMode ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ACHAuthorization