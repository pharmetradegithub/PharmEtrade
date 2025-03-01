// import React, { useEffect, useState } from 'react';
// import { TextField } from '@mui/material';
// import edit from '../../../assets/Edit.png';
// import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
// import { useStates } from 'react-us-states';

// const BankInformation = () => {
//   const [formData, setFormData] = useState({
//     bankName: '',
//     BankAddress: '',
//     RoutingNumber: '',
//     AccountNumber: '',
//     AccountType :"",
//     CheckPayableTo:"",
//     firstname:"",
//     lastname:"",
//     Address1: '',
//     Address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     bankAccountDollars: '',
//   });

//   const [errors, setErrors] = useState({});

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   const validate = () => {
//     const newErrors = {};
//     const regex = /^[0-9]*$/; // For numeric validation

//     if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
//     if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
//     if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
//     if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
//     if(!formData.AccountType) newErrors.AccountType = "Account Type is required";
//    if(!formData.CheckPayableTo) newErrors.CheckPayableTo ="Check Payable To is required"
//    if(!formData.firstname) newErrors.firstname ="First Name is required"; 
//    if(!formData.lastname) newErrors.lastname ="Last Name is required";
//    if (!formData.Address1) newErrors.Address1 = 'Address Line 1 is required';
//     if (!formData.Address2) newErrors.Address2 = 'Address Line 2 is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.state) newErrors.state = 'State is required';
//     if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = 'Valid Zip is required';
//     if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
//       newErrors.bankAccountDollars = 'Valid Bank Account Dollars is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if there are no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form Data:', formData);
//       setFormData({
//         bankName: '',
//         BankAddress: '',
//         RoutingNumber: '',
//         AccountNumber: '',
//         AccountType :"",
//         CheckPayableTo:"",
//         firstname :"",
//         lastname:"",
//         Address1: '',
//         Address2: '',
//         city: '',
//         state: '',
//         zip: '',
//         bankAccountDollars: '',
//       });
//       setErrors({});
//     }
//   };

//   const [isTabEdit, setIsTabEdit] = useState(false);

//   const handleTabClick = () => {
//     setIsTabEdit(true);
//   };

//   const handletabesave = () => {
//         setIsTabEdit(false)
//        }

//        const accountTypes = ['Savings', 'Checking', 'Current']; // Example account types

//        const [states, setStates] = useState([]);

//        useEffect(() => {
//          // Set the states data
//          setStates(useStates); // Adjust based on actual structure
//        }, []);

//        const handleChange = (event) => {
//         setFormData({
//           ...formData,
//           state: event.target.value, // Update the selected state
//         });
//       };

//   return (
//     <div >
//      <h1 className='text-xl text-blue-900 font-semibold mx-6 py-4'>Bank Information</h1>
//      {/* <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] "> */}
//      <div className={`bg-white border  ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
//   {/* Conditionally display heading on the border */}
//   {isTabEdit && (
//     <h1 className="absolute -top-4 left-4 bg-blue px-2 text-xl font-semibold text-white rounded-md">
//       Beneficiary Bank Details
//     </h1>
//   )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}


//       <div className="flex justify-between my-2">
//             <h1 className={`text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>Beneficiary Bank Details</h1>
//         {/* <h1 className="text-xl font-bold mb-4 text-blue-900 "> Beneficiary Bank Details </h1> */}
//         <img src={edit} className="w-6 h-6 ml-4" onClick={handleTabClick} />
//       </div>
//       <form onSubmit={handleSubmit}>
//         {/* Bank Name and Payee */}
//         <div className="flex mb-4">
//           <div className="mr-2 ml-2">
//             <label className="block mb-1">Bank Name</label>
//             <TextField
//               label="Bank Name"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.bankName} // Shows red border if error exists
//               helperText={errors.bankName} // Displays error message
//               fullWidth
//             />
//           </div>
//           <div className="ml-6 mr-2">
//             <label className="block mb-1">Bank Address</label>
//             <TextField
//               label="Bank Address"
//               name="Bank Address"
//               value={formData.BankAddress}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.BankAddress}
//               helperText={errors.BankAddress}
//               fullWidth
//             />
//           </div>
//           <div className="mr-2  ml-6">
//             <label className="block mb-1">Routing Number</label>
//             <TextField
//               label="Routing Number"
//               name="Routing Number"
//               value={formData.RoutingNumber}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.RoutingNumber}
//               helperText={errors.RoutingNumber}
//               fullWidth
//             />
//           </div>
//         </div>

//         {/* IBAN and SWIFT BIC */}
//         <div className="flex mb-4">
          
//           <div className="ml-2 mr-2">
//             <label className="block mb-1">Account Number</label>
//             <TextField
//               label="Account Number"
//               name="Account Number"
//               value={formData.AccountNumber}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.AccountNumber}
//               helperText={errors.AccountNumber}
//               fullWidth
//             />
//           </div>
//           <div className="ml-6 mr-2 w-[27%]">
//             <label className="block mb-1">Account Type</label>
//             {/* <TextField
//               label="Account Type"
//               name="Account Type"
//               value={formData.AccountType}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.AccountType}
//               helperText={errors.AccountType}
//               fullWidth
//             /> */}

// <FormControl fullWidth error={!!errors.AccountType} size="small" disabled={!isTabEdit}>
//       <InputLabel id="account-type-label">Account Type</InputLabel>
//       <Select
//         labelId="account-type-label"
//         name="AccountType"
//         value={formData.AccountType}
//         onChange={handleChange}
//         label="Account Type"
//         // className='w-[135%]'
//       >
//         {accountTypes.map((type, index) => (
//           <MenuItem key={index} value={type}>
//             {type}
//           </MenuItem>
//         ))}
//       </Select>
//       {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
//     </FormControl>
//           </div>
//           <div className="ml-6 mr-2 ">
//             <label className="block mb-1">Check Payable To</label>
//             <TextField
//               label="Check Payable To"
//               name="Check Payable To"
//               value={formData.CheckPayableTo}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.CheckPayableTo}
//               helperText={errors.CheckPayableTo}
//               fullWidth
//             />
//           </div>
//         </div>

//         <h1 className="text-xl font-bold mb-4 text-blue-900"> Check Mailing Address </h1>

//         {/* Address 1, Address 2 */}
//         <div className="flex mb-4">
//         <div className="mr-2 ml-2">
//             <label className="block mb-1">First Name</label>
//             <TextField
//               label="First Name"
//               name="First Name"
//               value={formData.firstname}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.firstname}
//               helperText={errors.firstname}
//               fullWidth
//             />
//           </div>
//           <div className="mr-4 ml-4">
//             <label className="block mb-1">Last Name</label>
//             <TextField
//               label="Last Name"
//               name="state"
//               value={formData.lastname}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.lastname}
//               helperText={errors.lastname}
//               fullWidth
//             />
//           </div>

//           <div className="mr-2 ml-4">
//             <label className="block mb-1">Address Line 1</label>
//             <TextField
//               label="Address Line 1"
//               name="Address1"
//               value={formData.Address1}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.Address1}
//               helperText={errors.Address1}
//               fullWidth
//             />
//           </div>
        
//         </div>

//         {/* City and Zip */}
//         <div className="flex mb-4">

//             <div className="ml-2 mr-2 ">
//             <label className="block mb-1">Address Line 2</label>
//             <TextField
//               label="Address Line 2"
//               name="Address2"
//               value={formData.Address2}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.Address2}
//               helperText={errors.Address2}
//               fullWidth
//             />
//           </div>
//           <div className="mr-4 ml-4 ">
//             <label className="block mb-1">City</label>
//             <TextField
//               label="City"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.city}
//               helperText={errors.city}
//               fullWidth
//             />
//           </div>
//           <div className="mr-2 ml-4">
//             <label className="block mb-1">State</label>
//             {/* <TextField
//               label="State"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               error={!!errors.state}
//               helperText={errors.state}
//               fullWidth
//             /> */}

// <FormControl
//                 size="small"
//                 error={!!errors.States}
//                 sx={{ minWidth: 210, whiteSpace: 'initial' }}
//               >
//                 <InputLabel id="state-select-label">State</InputLabel>
//                 <Select
//                   id="state-select"
//                   label="State"
//                   value={formData.state} // Correctly bind the form value
//                   name="States" // Ensure name matches the key in addressForm
//                   onChange={(e) => handleChange(e)} // Handle state change
//                   MenuProps={{
//                     PaperProps: {
//                       style: {
//                         maxHeight: 200, // Set the maximum height of the dropdown
//                       },
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {states.map((state) => (
//                     <MenuItem key={state.abbreviation} value={state.abbreviation}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//           </div>
          
//         </div>

//         {/* State and Bank Account Dollars */}
//         <div className="flex mb-4">
         
//         <div className="ml-2 w-1/3">
//             <label className="block mb-1">Zip</label>
//             <TextField
//               label="Zip"
//               name="zip"
//               value={formData.zip}
//               onChange={handleChange}
//               size="small"
//               disabled={!isTabEdit}
//               // error={!!errors.zip}
//               error={!!errors.zip} 
//               helperText={errors.zip}
//               className= "w-[83%]"
//               // ${!!errors.zip ? 'border-red-500' : ''}`}
//             />
//           </div>
//         </div>

//         <div className='flex justify-end my-4'>
//         <button
//                     // className="bg-blue text-white p-1 w-16 rounded-md font-semibold"
//                      className={`bg-blue text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
//                      // Disable button when not editable
//                      onClick={handletabesave} >Save</button>        </div>
//       </form>
//       </div>

    

     
//     </div>
//   );
// };

// export default BankInformation;









import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { useStates } from 'react-us-states';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeneficiaryAdd, fetchGetBeneficiary } from '../../../Api/UserApi';
import Notification from '../../Notification';

// const BankInformation = () => {
//   const user = useSelector((state) => state.user?.user || []);
//   const getBeneficiaryDetails = useSelector((state) => state.user.getBeneficiary) || [];
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
//     CheckPayableTo: '',
//     firstname: '',
//     lastname: '',
//     Address1: '',
//     Address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     bankAccountDollars: '',
//   });

//   const [errors, setErrors] = useState({});
//   // const validate = () => {
//   //   const newErrors = {};
//   //   const regex = /^[0-9]*$/; // For numeric validation

//   //   if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
//   //   if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
//   //   if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
//   //   if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
//   //   if (!formData.AccountType) newErrors.AccountType = 'Account Type is required';
//   //   if (!formData.CheckPayableTo) newErrors.CheckPayableTo = 'Check Payable To is required';
//   //   if (!formData.firstname) newErrors.firstname = 'First Name is required';
//   //   if (!formData.lastname) newErrors.lastname = 'Last Name is required';
//   //   if (!formData.Address1) newErrors.Address1 = 'Address Line 1 is required';
//   //   if (!formData.Address2) newErrors.Address2 = 'Address Line 2 is required';
//   //   if (!formData.city) newErrors.city = 'City is required';
//   //   if (!formData.state) newErrors.state = 'State is required';
//   //   if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = 'Valid Zip is required';
//   //   if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
//   //     newErrors.bankAccountDollars = 'Valid Bank Account Dollars is required';
//   //   }

//   //   setErrors(newErrors);
//   //   return Object.keys(newErrors).length === 0; // Returns true if there are no errors
//   // };

//   const validate = () => {
//     const newErrors = {};
//     const regex = /^[0-9]*$/; // For numeric validation

//     if (!formData.bankName) newErrors.bankName = "Bank Name is required";
//     if (!formData.BankAddress) newErrors.BankAddress = "Bank Address is required";
//     if (!formData.RoutingNumber) newErrors.RoutingNumber = "Routing Number is required";
//     if (!formData.AccountNumber) newErrors.AccountNumber = "Account Number is required";
//     if (!formData.AccountType) newErrors.AccountType = "Account Type is required";
//     if (!formData.CheckPayableTo) newErrors.CheckPayableTo = "Check Payable To is required";
//     if (!formData.firstname) newErrors.firstname = "First Name is required";
//     if (!formData.lastname) newErrors.lastname = "Last Name is required";
//     if (!formData.Address1) newErrors.Address1 = "Address Line 1 is required";
//     if (!formData.Address2) newErrors.Address2 = "Address Line 2 is required";
//     if (!formData.city) newErrors.city = "City is required";
//     if (!formData.state) newErrors.state = "State is required";
//     if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = "Valid Zip is required";
//     if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
//       newErrors.bankAccountDollars = "Valid Bank Account Dollars is required";
//     }

//     setErrors(newErrors);
//     console.log("Validation errors:", newErrors);

//     return Object.keys(newErrors).length === 0; // Returns true if no errors
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
//         CheckPayableTo: '',
//         firstname: '',
//         lastname: '',
//         Address1: '',
//         Address2: '',
//         city: '',
//         state: '',
//         zip: '',
//         bankAccountDollars: '',
//       });
//       setErrors({});
//     }
//   };

//   const [isTabEdit, setIsTabEdit] = useState(false);

//   const handleTabClick = () => {
//     setIsTabEdit(true);
//   };

//   // const handleTabSave = async () => {
//   //   setIsTabEdit(false);
//   //   const payload = {
//   //     id: '',
//   //     customerId: user.customerId,
//   //     bankName: formData.bankName,
//   //     bankAddress: formData.BankAddress,
//   //     routingNumber: formData.RoutingNumber,
//   //     accountNumber: formData.AccountNumber,
//   //     accountType: formData.AccountType,
//   //     checkPayableTo: formData.CheckPayableTo,
//   //     firstName: formData.firstname,
//   //     lastName: formData.lastname,
//   //     addressLine1: formData.Address1,
//   //     addressLine2: formData.Address2,
//   //     city: formData.city,
//   //     state: formData.state,
//   //     zip: formData.zip
//   //   };
//   //   await dispatch(fetchBeneficiaryAdd(payload));
   
//   // };

//   // const handleTabSave = async () => {
//   //   if (!validate()) {
//   //     console.log("Validation failed, API will not be called.");
//   //     return; // Stop execution if validation fails
//   //   }

//   //   setIsTabEdit(false);

//   //   const payload = {
//   //     id: '',
//   //     customerId: user.customerId,
//   //     bankName: formData.bankName,
//   //     bankAddress: formData.BankAddress,
//   //     routingNumber: formData.RoutingNumber,
//   //     accountNumber: formData.AccountNumber,
//   //     accountType: formData.AccountType,
//   //     checkPayableTo: formData.CheckPayableTo,
//   //     firstName: formData.firstname,
//   //     lastName: formData.lastname,
//   //     addressLine1: formData.Address1,
//   //     addressLine2: formData.Address2,
//   //     city: formData.city,
//   //     state: formData.state,
//   //     zip: formData.zip
//   //   };

//   //   await dispatch(fetchBeneficiaryAdd(payload));

//   //   setNotification({
//   //     show: true,
//   //     message: "Beneficiary details saved Successfully!",
//   //   });

//   //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   // };

//   const handleTabSave = async () => {
//     console.log("handleTabSave clicked!");

//     // Ensure validate function is defined and works correctly
//     if (validate()) {
//       console.log("Validation failed. API will NOT be called.");
//       return;
//     }

//     console.log("Validation passed. Preparing API call...");

//     // Ensure setIsTabEdit is defined and works correctly
//     setIsTabEdit(false);

//     const payload = {
//       id: "",
//       customerId: user?.customerId,
//       bankName: formData.bankName,
//       bankAddress: formData.BankAddress,
//       routingNumber: formData.RoutingNumber,
//       accountNumber: formData.AccountNumber,
//       accountType: formData.AccountType,
//       checkPayableTo: formData.CheckPayableTo,
//       firstName: formData.firstname,
//       lastName: formData.lastname,
//       addressLine1: formData.Address1,
//       addressLine2: formData.Address2,
//       city: formData.city,
//       state: formData.state,
//       zip: formData.zip,
//     };

//     console.log("Submitting payload:", payload);

//     try {
//       // Ensure dispatch and fetchBeneficiaryAdd are defined and work correctly
//       const response = await dispatch(fetchBeneficiaryAdd(payload));

//       if (fetchBeneficiaryAdd.fulfilled.match(response)) {
//         console.log("API call successful!", response);
//         setNotification({
//           show: true,
//           message: "Beneficiary details saved Successfully!",
//         });

//         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//       } else {
//         console.error("API call failed!", response);
//         setNotification({
//           show: true,
//           message: "Failed to save beneficiary details. Please try again.",
//         });

//         setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//       }
//     } catch (error) {
//       console.error("Error during API call:", error);
//       setNotification({
//         show: true,
//         message: "An unexpected error occurred. Please try again.",
//       });

//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//       await dispatch(fetchGetBeneficiary(user.customerId))
//     }
//   };




//   const accountTypes = ['Savings', 'Checking']; // Example account types
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     setStates(useStates()); // Adjust based on actual structure
//   }, []);

//   const excludedStates = [
//     "AMERICAN SAMOA",
//     "GUAM",
//     "NORTHERN MARIANA ISLANDS",
//     "PALAU",
//     "PUERTO RICO",
//   ];

//   const filteredStates = states.filter(
//     (state) => !excludedStates.includes(state.name.toUpperCase())
//   );

//   // const handleChange = (event) => {
//   //   const { name, value } = event.target;
//   //   if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
//   //     return; // Ignore invalid input
//   //   }
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   //   if (name === "RoutingNumber" && value.length === 9) {
//   //     setErrors((prev) => ({ ...prev, RoutingNumber: "" }));
//   //   }
//   // };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
//       return;
//     }
//     setFormData({
//       ...formData,
//       // [name]: value,
//       [name]: value
//     });
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "", // Clear the error for this field
//     }));
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
//     if (getBeneficiaryDetails && getBeneficiaryDetails.length > 0) {
//       setFormData({
//         bankName: getBeneficiaryDetails?.[0]?.bankName || '',
//         BankAddress: getBeneficiaryDetails?.[0]?.bankAddress || '',
//         RoutingNumber: getBeneficiaryDetails?.[0]?.routingNumber || '',
//         AccountNumber: getBeneficiaryDetails?.[0]?.accountNumber || '',
//         AccountType: getBeneficiaryDetails?.[0]?.accountType || '',
//         CheckPayableTo: getBeneficiaryDetails?.[0]?.checkPayableTo || '',
//         firstname: getBeneficiaryDetails?.[0]?.firstName || '',
//         lastname: getBeneficiaryDetails?.[0]?.lastName || '',
//         Address1: getBeneficiaryDetails?.[0]?.addressLine1 || '',
//         Address2: getBeneficiaryDetails?.[0]?.addressLine2 || '',
//         city: getBeneficiaryDetails?.[0]?.city || '',
//         state: getBeneficiaryDetails?.[0]?.state || '',
//         zip: getBeneficiaryDetails?.[0]?.zip || '',
//         bankAccountDollars: getBeneficiaryDetails?.[0]?.bankAccountDollars || '',
//       });
//     }
//   }, [getBeneficiaryDetails]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       dispatch(fetchGetBeneficiary(user.customerId));  // Dispatch function to get beneficiary details
//     };
//     if (user.customerId) {
//       fetchdata();
//     }
//   }, [user.customerId, dispatch]);
//   return (
//     <div>
//       {notification.show && (
//         <Notification show={notification.show} message={notification.message} />
//       )}
//       <h1 className="text-xl text-blue-900 font-semibold mx-6 py-4">Bank Information</h1>
//       <div className={`bg-white border ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
//         {isTabEdit && (
//           <h1 className="absolute -top-4 left-4 bg-blue px-2 text-xl font-semibold text-white rounded-md">
//             Beneficiary Bank Details
//           </h1>
//         )}

//         <div className="flex justify-between my-2">
//           <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>
//             Beneficiary Bank Details
//           </h1>
//           <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" onClick={handleTabClick} alt="Edit" />
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row mb-4">
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
//             <div className="xl:ml-6 mr-2 ">
//               {/* <label className="block mb-1">Check Payable To</label> */}
//               <TextField
//                 label="Check Payable To"
//                 name="CheckPayableTo"
//                 value={formData.CheckPayableTo}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.CheckPayableTo}
//                 helperText={errors.CheckPayableTo}
                
//               />
//             </div>
//           </div>

//           <h1 className=" text-base md:text-xl font-bold mb-4 text-blue-900">Check Mailing Address</h1>

//           <div className="flex flex-col md:flex-row mb-4">
//             <div className="mr-2 xl:ml-2">
//               {/* <label className="block mb-1">First Name</label> */}
//               <TextField
//                 label="First Name"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.firstname}
//                 helperText={errors.firstname}
//                 fullWidth
//               />
//             </div>
//             <div className="mr-2 my-2 md:my-0 xl:my-0 xl:ml-4">
//               {/* <label className="block mb-1">Last Name</label> */}
//               <TextField
//                 label="Last Name"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.lastname}
//                 helperText={errors.lastname}
//                 fullWidth
//               />
//             </div>

//             <div className="mr-2 xl:ml-4">
//               {/* <label className="block mb-1">Address Line 1</label> */}
//               <TextField
//                 label="Address Line 1"
//                 name="Address1"
//                 value={formData.Address1}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.Address1}
//                 helperText={errors.Address1}
//                 fullWidth
//               />
//             </div>
//           </div>

//           <div className="flex flex-col  md:flex-row mb-4">
//             <div className="mr-2 md:mr-4 xl:ml-2">
//               {/* <label className="block mb-1">Address Line 2</label> */}
//               <TextField
//                 label="Address Line 2"
//                 name="Address2"
//                 value={formData.Address2}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.Address2}
//                 helperText={errors.Address2}
//                 fullWidth
//               />
//             </div>
//             <div className="md:mr-2 my-3 ml-0 md:ml-0 md:my-0 xl:ml-2">
//               {/* <label className="block mb-1">City</label> */}
//               <TextField
//                 label="City"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.city}
//                 helperText={errors.city}
//                 fullWidth
//               />
//             </div>
//             <div className=" mr-0 xl:mr-2 xl:ml-4  w-full md:w-[45%] xl:w-[23%]">
//               {/* <label className="block mb-1">State</label> */}
//               <FormControl   fullWidth error={!!errors.state} size="small" className='  w-[92%]' disabled={!isTabEdit}>
//                 <InputLabel id="state-label">State</InputLabel>
//                 <Select
//                   labelId="state-label"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   label="State"
                  
//                 >
//                   {filteredStates.map((state, index) => (
//                     <MenuItem key={state.abbreviation } value={state.name}>
//                       {state.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
//               </FormControl>
//             </div>
            
//           </div>

//           <div className="flex mb-4">
//             <div className="mr-2 ml-0 xl:ml-2">
//             {/* <label className="block mb-1">Zip</label> */}
//               <TextField
//                 label="Zip"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 size="small"
//                 disabled={!isTabEdit}
//                 error={!!errors.zip}
//                 helperText={errors.zip}
//                 className=' w-full md:w-40 xl:w-56'
//               />
//             </div>
//           </div>

//           {/* <div className="flex justify-end">
//             {isTabEdit ? (
//               <button
//                 type="submit"
//                 className="bg-blue text-white px-6 py-2 rounded"
//                 onClick={handleTabSave}
//               >
//                 Save
//               </button>
//             ) : null}
//           </div> */}
// {/*
// <div className="flex  justify-end py-2">
                 
//                   <button
//                     className={`bg-blue text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                       onClick={handleTabSave}
//                     disabled={!isTabEdit}
//                   >
//                     Save
//                   </button>
//                 </div> */}
//                 <div className="flex justify-end py-2">
//   <button
//     className={`bg-blue text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//     onClick={handleTabSave}
//     disabled={!isTabEdit}
//   >
//     Save
//   </button>
// </div>

//         </form>
//       </div>
//     </div>
//   );
// };



const BankInformation = () => {
  const user = useSelector((state) => state.user?.user || {});
  const getBeneficiaryDetails = useSelector((state) => state.user.getBeneficiary) || [];
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
    CheckPayableTo: '',
    firstname: '',
    lastname: '',
    Address1: '',
    Address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});
  const [isTabEdit, setIsTabEdit] = useState(false);

  // const validate = () => {
  //   const newErrors = {};
  //   const regex = /^[0-9]*$/; // For numeric validation

  //   if (!formData.bankName) newErrors.bankName = "Bank Name is required";
  //   if (!formData.BankAddress) newErrors.BankAddress = "Bank Address is required";
  //   if (!formData.RoutingNumber) newErrors.RoutingNumber = "Routing Number is required";
  //   if (!formData.AccountNumber) newErrors.AccountNumber = "Account Number is required";
  //   if (!formData.AccountType) newErrors.AccountType = "Account Type is required";
  //   if (!formData.CheckPayableTo) newErrors.CheckPayableTo = "Check Payable To is required";
  //   if (!formData.firstname) newErrors.firstname = "First Name is required";
  //   if (!formData.lastname) newErrors.lastname = "Last Name is required";
  //   if (!formData.Address1) newErrors.Address1 = "Address Line 1 is required";
  //   if (!formData.Address2) newErrors.Address2 = "Address Line 2 is required";
  //   if (!formData.city) newErrors.city = "City is required";
  //   if (!formData.state) newErrors.state = "State is required";
  //   if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = "Valid Zip is required";
  //   // if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
  //   //   newErrors.bankAccountDollars = "Valid Bank Account Dollars is required";
  //   }

  // setErrors(newErrors);
  // console.log("Validation errors:", newErrors);

  // return Object.keys(newErrors).length === 0; // Returns true if no errors
  // };

  const validate = () => {
    const newErrors = {};
    const numberRegex = /^[0-9]*$/; // For general numeric validation
    const zipRegex = /^\d{5}$/; // Ensures exactly 5 digits

    // Helper function to check empty values
    const isEmpty = (value) => !value || String(value).trim() === "";

    if (isEmpty(formData.bankName)) newErrors.bankName = "Bank Name is required";
    if (isEmpty(formData.BankAddress)) newErrors.BankAddress = "Bank Address is required";
    if (isEmpty(formData.RoutingNumber) || !numberRegex.test(formData.RoutingNumber)) {
      newErrors.RoutingNumber = "Valid Routing Number is required";
    }
    // if (isEmpty(formData.RoutingNumber)) newErrors.RoutingNumber = "Routing Number is required";
    // if (isEmpty(formData.AccountNumber)) newErrors.AccountNumber = "Account Number is required";
    if (isEmpty(formData.AccountNumber) || !numberRegex.test(formData.AccountNumber)) {
      newErrors.AccountNumber = "Valid Account Number is required";
    }
    if (isEmpty(formData.AccountType)) newErrors.AccountType = "Account Type is required";
    if (isEmpty(formData.CheckPayableTo)) newErrors.CheckPayableTo = "Check Payable To is required";
    if (isEmpty(formData.firstname)) newErrors.firstname = "First Name is required";
    if (isEmpty(formData.lastname)) newErrors.lastname = "Last Name is required";
    if (isEmpty(formData.Address1)) newErrors.Address1 = "Address Line 1 is required";
    if (isEmpty(formData.Address2)) newErrors.Address2 = "Address Line 2 is required";
    if (isEmpty(formData.city)) newErrors.city = "City is required";
    if (isEmpty(formData.state)) newErrors.state = "State is required";
    if (isEmpty(formData.zip) || !zipRegex.test(formData.zip)) {
      newErrors.zip = "Zip code must be exactly 5 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
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
        CheckPayableTo: '',
        firstname: '',
        lastname: '',
        Address1: '',
        Address2: '',
        city: '',
        state: '',
        zip: '',
      });
      setErrors({});
    }
  };

  const handleTabClick = () => {
    setIsTabEdit(true);
  };

  const handleTabSave = async () => {
    if (!validate()) {
      return;
    }

    setIsTabEdit(false);

    const payload = {
      id: "",
      customerId: user?.customerId,
      bankName: formData.bankName,
      bankAddress: formData.BankAddress,
      routingNumber: formData.RoutingNumber,
      accountNumber: formData.AccountNumber,
      accountType: formData.AccountType,
      checkPayableTo: formData.CheckPayableTo,
      firstName: formData.firstname,
      lastName: formData.lastname,
      addressLine1: formData.Address1,
      addressLine2: formData.Address2,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
    };


    try {
      const response = await dispatch(fetchBeneficiaryAdd(payload));

      if (fetchBeneficiaryAdd.fulfilled.match(response)) {
        setNotification({
          show: true,
          message: "Beneficiary details saved Successfully!",
        });

        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      } else {
        console.error("API call failed!");
        setNotification({
          show: true,
          message: "Failed to save beneficiary details. Please try again.",
        });

        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setNotification({
        show: true,
        message: "An unexpected error occurred. Please try again.",
      });

      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      await dispatch(fetchGetBeneficiary(user.customerId));
    }
  };

  const accountTypes = ['Savings', 'Checking']; // Example account types
  const [states, setStates] = useState([]);

  useEffect(() => {
    setStates(useStates()); // Adjust based on actual structure
  }, []);

  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];

  const filteredStates = states.filter(
    (state) => !excludedStates.includes(state.name.toUpperCase())
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors((prev) => ({
      ...prev,
      [name]: "", // Clear the error for this field
    }));
    if (name === "RoutingNumber" && value.length === 9) {
      setErrors((prev) => ({ ...prev, RoutingNumber: "" }));
    }
  };

  const handleBlur = () => {
    const { RoutingNumber } = formData;

    // Validate RoutingNumber
    if (RoutingNumber.length !== 9) {
      setErrors((prev) => ({
        ...prev,
        RoutingNumber: "Routing Number must be exactly 9 digits.",
      }));
    }
  };

  // Populate form data with beneficiary details when available
  useEffect(() => {
    if (getBeneficiaryDetails && getBeneficiaryDetails.length > 0) {
      setFormData({
        bankName: getBeneficiaryDetails?.[0]?.bankName || '',
        BankAddress: getBeneficiaryDetails?.[0]?.bankAddress || '',
        RoutingNumber: getBeneficiaryDetails?.[0]?.routingNumber || '',
        AccountNumber: getBeneficiaryDetails?.[0]?.accountNumber || '',
        AccountType: getBeneficiaryDetails?.[0]?.accountType || '',
        CheckPayableTo: getBeneficiaryDetails?.[0]?.checkPayableTo || '',
        firstname: getBeneficiaryDetails?.[0]?.firstName || '',
        lastname: getBeneficiaryDetails?.[0]?.lastName || '',
        Address1: getBeneficiaryDetails?.[0]?.addressLine1 || '',
        Address2: getBeneficiaryDetails?.[0]?.addressLine2 || '',
        city: getBeneficiaryDetails?.[0]?.city || '',
        state: getBeneficiaryDetails?.[0]?.state || '',
        zip: getBeneficiaryDetails?.[0]?.zip || '',
        bankAccountDollars: getBeneficiaryDetails?.[0]?.bankAccountDollars || '',
      });
    }
  }, [getBeneficiaryDetails]);

  useEffect(() => {
    const fetchdata = async () => {
      dispatch(fetchGetBeneficiary(user.customerId));  // Dispatch function to get beneficiary details
    };
    if (user.customerId) {
      fetchdata();
    }
  }, [user.customerId, dispatch]);

  return (
    <div>
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <h1 className="text-xl text-blue2 font-semibold mx-6 py-4">Bank Information</h1>
      <div className={`bg-white border ${isTabEdit ? 'border-blue2' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
        {isTabEdit && (
          <h1 className="text-blue2 absolute -top-4 left-4 bg-blue px-2 text-xl font-semibold text-white rounded-md">
            Beneficiary Bank Details
          </h1>
        )}

        <div className="flex justify-between my-2">
          <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue2'}`}>
            Beneficiary Bank Details
          </h1>
          <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" onClick={handleTabClick} alt="Edit" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4">
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
            <div className=" ml-0 my-2 md:my-0 xl:ml-6 mr-2">
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
            <div className="mr-2  xl:ml-6">
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

          <div className="flex  flex-col md:flex-row mb-4">
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
            <div className="xl:ml-6 mr-2 my-2 md:my-0 w-full md:w-[45%] xl:w-[24.5%]">
              <FormControl fullWidth error={!!errors.AccountType} size="small" disabled={!isTabEdit}>
                <InputLabel id="account-type-label">Account Type</InputLabel>
                <Select
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
                </Select>
                {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
              </FormControl>
            </div>
            <div className="xl:ml-6 mr-2 ">
              <TextField
                label="Check Payable To"
                name="CheckPayableTo"
                value={formData.CheckPayableTo}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.CheckPayableTo}
                helperText={errors.CheckPayableTo}
              />
            </div>
          </div>

          <h1 className=" text-base md:text-xl font-bold mb-4 text-blue2">Check Mailing Address</h1>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="mr-2 xl:ml-2">
              <TextField
                label="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.firstname}
                helperText={errors.firstname}
                fullWidth
              />
            </div>
            <div className="mr-2 my-2 md:my-0 xl:my-0 xl:ml-4">
              <TextField
                label="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.lastname}
                helperText={errors.lastname}
                fullWidth
              />
            </div>

            <div className="mr-2 xl:ml-4">
              <TextField
                label="Address Line 1"
                name="Address1"
                value={formData.Address1}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.Address1}
                helperText={errors.Address1}
                fullWidth
              />
            </div>
          </div>

          <div className="flex flex-col  md:flex-row mb-4">
            <div className="mr-2 md:mr-4 xl:ml-2">
              <TextField
                label="Address Line 2"
                name="Address2"
                value={formData.Address2}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.Address2}
                helperText={errors.Address2}
                fullWidth
              />
            </div>
            <div className="md:mr-2 my-3 ml-0 md:ml-0 md:my-0 xl:ml-2">
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.city}
                helperText={errors.city}
                fullWidth
              />
            </div>
            <div className=" mr-0 xl:mr-2 xl:ml-4  w-full md:w-[45%] xl:w-[24.5%]">
              <FormControl   fullWidth error={!!errors.state} size="small" className='  w-[92%]' disabled={!isTabEdit}>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State"
                >
                  {filteredStates.map((state, index) => (
                    <MenuItem key={state.abbreviation } value={state.name}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
              </FormControl>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="mr-2 ml-0 xl:ml-2">
              <TextField
                label="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                size="small"
                disabled={!isTabEdit}
                error={!!errors.zip}
                helperText={errors.zip}
                className=' w-full md:w-40 xl:w-56'
              />
            </div>
          </div>

          <div className="flex justify-end py-2">
            <button
              className={`bg-blue text-white p-1 w-16 rounded-md hover:bg-green2 font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleTabSave}
              disabled={!isTabEdit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default BankInformation;
