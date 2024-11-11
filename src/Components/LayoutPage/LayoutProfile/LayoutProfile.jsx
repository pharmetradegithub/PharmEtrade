// import { useEffect, useState } from "react";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// // import editIcon from "../../../assets/Edit.png"; // Renamed for clarity
// import edit from "../../../assets/Edit.png";
// import BankInformation from "./BankInformation";
// import ChargesInformation from "../../../Components/LayoutPage/LayoutProfile/ChargesInformation";
// import { useSelector } from "react-redux";
// import { useStates } from "react-us-states";
// import TaxInformation from "./TaxInformation";
// import {
//   BusinessInfoUpdate,
//   getUserByCustomerIdApi,
//   UserInfoUpdate,
// } from "../../../Api/UserApi";
// import Chargesinformation from "./ChargesInformation";
// import Notification from "../../Notification";
// const LayoutProfile = () => {
//   const userdata = useSelector((state) => state.user.user); // Get user data from redux
//   const businessInfo = useSelector((state) => state.user.businessInfo);

//   console.log("rrrrrrrrrrrrrrrrr", userdata);
//   const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode
//   // State to handle user data (controlled inputs)
//   const [notification, setNotification] = useState({
//     show: false,
//     message: "",
//   });

//   const [userDetails, setUserDetails] = useState({
//     firstName: userdata?.firstName || "",
//     lastName: userdata?.lastName || "",
//     email: userdata?.email || "",
//     password: userdata?.password || "",
//     // phoneNumber: userdata?.phoneNumber || "",
//     mobile: userdata?.mobile || "",
//   });

//   useEffect(() => {
//     setUserDetails({
//       firstName: userdata?.firstName || "",
//       lastName: userdata?.lastName || "",
//       email: userdata?.email || "",
//       password: userdata?.password || "",
//       // phoneNumber: userdata?.phoneNumber || "",
//       mobile: userdata?.mobile || "",
//     });
//   }, [userdata]);

//   console.log("uuuuuuu", userdata);

//   // Handle changes to input fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };
//   const handlePhoneNumberChange = (e) => {
//     const formattedPhone = formatPhoneNumber(e.target.value);
//     handleInputChange({
//       target: {
//         name: e.target.name,
//         value: formattedPhone,
//       },
//     });
//   };

//   // Toggle edit mode
//   const handleEditClick = () => {
//     setIsEditable((prev) => !prev);
//   };
//   const RefreshUser = async () => {
//     await getUserByCustomerIdApi(userdata.customerId);
//   };
//   // Handle save action
//   const handleSaveClick = async () => {
//     setIsEditable(false);
//     const userinfo = {
//       customerId: userdata.customerId,
//       firstName: userDetails.firstName,
//       lastName: userDetails.lastName,
//       email: userDetails.email,
//       mobile: userDetails.mobile,
//       password: userDetails.password,
//       customerTypeId: userdata.customerTypeId,
//       accountTypeId: userdata.accountTypeId,
//       isUPNMember: userdata.isUPNMember,
//     };
//     if (userinfo) {
//       await UserInfoUpdate(userinfo);
//       await RefreshUser();
//     }

//     console.log("Data saved:", userDetails); // You can dispatch this to Redux or send it to the backend
//     // alert("Data saved successfully!"); // Show notification
//     setNotification({
//       show: true,
//       message: "User Information saved Successfully!",
//     });
//     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   };

//   console.log("business", businessInfo);
//   // State for editing Address Information
//   const [isAddressEdit, setIsAddressEdit] = useState(false);
//   const [addressData, setAddressData] = useState({
//     shopName: businessInfo?.shopName || "",
//     dba: businessInfo?.dba || "",
//     city: businessInfo?.city || "",
//     zip: businessInfo?.zip || "",
//     legalBusinessName: businessInfo?.legalBusinessName || "",
//     address: businessInfo?.address || "",
//     state: businessInfo?.state || "",
//     businessPhone: businessInfo?.businessPhone || "",
//     businessFax: businessInfo?.businessFax || "",
//     deaExpirationDate: businessInfo?.deaExpirationDate || "",
//     businessEmail: businessInfo?.businessEmail || "",

//     companyWebsite: businessInfo?.companyWebsite || "",

//     pharmacyLicenseExpirationDate:
//       businessInfo?.pharmacyLicenseExpirationDate || "",
//   });

//   // const [addressData, setAddressData] = useState({
//   //   shopName: "",
//   //   dba: "",
//   //   city: "",
//   //   zip: "",
//   //   legalBusinessName: "",
//   //   address: "",
//   //   state: "",
//   //   businessPhone: "",
//   //   businessFax: "",
//   //   deaExpirationDate: "",
//   //   businessEmail: "",
//   //   companyWebsite: "",
//   //   pharmacyLicenseExpirationDate: "",
//   // });

//   const [accountData, setAccountData] = useState({
//     dea: businessInfo?.dea || "",
//     deaExpirationDate: businessInfo?.deaExpirationDate || "",
//     npi: businessInfo?.npi || "",
//     ncpdp: businessInfo?.ncpdp || "",
//     federalTax: businessInfo?.federalTax || "",
//     pharmacyLicense: businessInfo?.pharmacyLicense || "",
//     pharmacyLicenseExpirationDate:
//       businessInfo?.pharmacyLicenseExpirationDate || "",
//     federalTaxId: businessInfo?.federalTaxId || "",
//     pharmacyLicence: businessInfo?.pharmacyLicence || "",
//     deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
//     pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
//   });
//   useEffect(() => {
//     setAddressData({
//       shopName: businessInfo?.shopName || "",
//       dba: businessInfo?.dba || "",
//       city: businessInfo?.city || "",
//       zip: businessInfo?.zip || "",
//       legalBusinessName: businessInfo?.legalBusinessName || "",
//       address: businessInfo?.address || "",
//       state: businessInfo?.state || "",
//       businessPhone: businessInfo?.businessPhone || "",
//       businessFax: businessInfo?.businessFax || "",
//       deaExpirationDate: businessInfo?.deaExpirationDate || "",
//       businessEmail: businessInfo?.businessEmail || "",

//       companyWebsite: businessInfo?.companyWebsite || "",

//       pharmacyLicenseExpirationDate:
//         businessInfo?.pharmacyLicenseExpirationDate || "",
//       deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
//       pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
//     });
//     setAccountData({
//       dea: businessInfo?.dea || "",
//       deaExpirationDate: businessInfo?.deaExpirationDate || "",
//       npi: businessInfo?.npi || "",
//       ncpdp: businessInfo?.ncpdp || "",
//       federalTax: businessInfo?.federalTax || "",
//       pharmacyLicense: businessInfo?.pharmacyLicense || "",
//       pharmacyLicenseExpirationDate:
//         businessInfo?.pharmacyLicenseExpirationDate || "",
//       federalTaxId: businessInfo?.federalTaxId || "",
//       pharmacyLicence: businessInfo?.pharmacyLicence || "",
//       deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
//       pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
//     });
//   }, [businessInfo]);

//   useEffect(() => {
//     if (businessInfo) {
//       setAddressData({
//         shopName: businessInfo.shopName || "",
//         dba: businessInfo.dba || "",
//         city: businessInfo.city || "",
//         zip: businessInfo.zip || "",
//         legalBusinessName: businessInfo.legalBusinessName || "",
//         address: businessInfo.address || "",
//         state: businessInfo.state || "",
//         businessPhone: businessInfo.businessPhone || "",
//         businessFax: businessInfo.businessFax || "",
//         deaExpirationDate: businessInfo.deaExpirationDate || "",
//         businessEmail: businessInfo.businessEmail || "",
//         companyWebsite: businessInfo.companyWebsite || "",
//         pharmacyLicenseExpirationDate: businessInfo.pharmacyLicenseExpirationDate || "",
//       });
//     }
//   }, [businessInfo]);

//   const profiles = [
//     {
//       label: "Primary",
//       grid: "account",
//     },
//     {
//       label: "Bank Information",
//       grid: "bank",
//     },
//     {
//       label: "Tax Information",
//       grid: "Tax",
//     },
//     {
//       label: "Charges Information",
//       grid: "charges",
//     },
//   ];
//   const [visibleGrid, setVisibleGrid] = useState("account"); // Default to Account Information
//   const toggleGrid = (grid) => {
//     setVisibleGrid(grid); // Set the visible grid to the selected one
//   };
//   // const handleAddressChange = (e) => {
//   //   const { name, value } = e.target;

//   //   setAddressData((prevData) => ({ ...prevData, [name]: value }));
//   // };

//   const handleAddressChange = (e) => {
//     console.log("Field changed:", e.target.name, e.target.value);
//     const { name, value } = e.target;
//     setAddressData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handlePhoneChange = (e) => {
//     const formattedPhone = formatPhoneNumber(e.target.value);
//     handleAddressChange({
//       target: {
//         name: e.target.name,
//         value: formattedPhone,
//       },
//     });
//   };

//   const handleAddressEditClick = () => {
//     setIsAddressEdit(true);
//   };

//   const handleAddressSaveClick = async () => {
//     setIsAddressEdit(false);
//     const businessInfoObj = {
//       customerBusinessInfoId: businessInfo.customerBusinessInfoId,
//       customerId: userdata.customerId,
//       shopName: addressData.shopName,
//       dba: addressData.dba,
//       legalBusinessName: addressData.legalBusinessName,
//       address: addressData.address,
//       city: addressData.city,
//       state: addressData.state,
//       zip: addressData.zip,
//       businessPhone: addressData.businessPhone,
//       businessFax: addressData.businessFax,
//       businessEmail: addressData.businessEmail,
//       federalTaxId: businessInfo.federalTaxId,
//       dea: businessInfo.dea,
//       pharmacyLicence: businessInfo.pharmacyLicence,
//       deaExpirationDate: businessInfo.deaExpirationDate == "" ? null : businessInfo.deaExpirationDate,
//       pharmacyLicenseExpirationDate:
//         businessInfo.pharmacyLicenseExpirationDate == "" ? null : businessInfo.pharmacyLicenseExpirationDate,
//       deaLicenseCopy: businessInfo.deaLicenseCopy,
//       pharmacyLicenseCopy: businessInfo.pharmacyLicenseCopy,
//       npi: businessInfo.npi,
//       ncpdp: businessInfo.ncpdp,
//       companyWebsite: addressData.companyWebsite,
//     };
//     if (businessInfo) {
//       console.log("before sbubmit", businessInfoObj);
//       await BusinessInfoUpdate(businessInfoObj);
//       await RefreshUser();
//     }
//     // Here you would typically dispatch an action to save the updated address
//     console.log("Address saved:", addressData);
//     // alert("Address information saved successfully!");
//     setNotification({
//       show: true,
//       message: "Address information saved Successfully!",
//     });
//     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   };

//   // State for editing Account Information
//   const [isAccountEdit, setIsAccountEdit] = useState(false);

//   const handleAccountChange = (e) => {
//     const { name, value } = e.target;
//     setAccountData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleAccountEditClick = () => {
//     setIsAccountEdit(true);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   // const handleFileChange = (event) => {
//   //   const file = event.target.files[0]; // Get the selected file
//   //   if (file) {
//   //     // Handle the file (e.g., store in state, upload it, etc.)
//   //     setAccountData((prevState) => ({
//   //       ...prevState,
//   //       deaLicenseCopy: file, // Update state with the selected file
//   //     }));
//   //   }
//   // };

//   // const handleFileChangePharma = (event) => {
//   //   const file = event.target.files[0]; // Get the selected file
//   //   if (file) {
//   //     // Update the state with the selected file for pharmacy license
//   //     setAccountData((prevState) => ({
//   //       ...prevState,
//   //       pharmacyLicenseCopy: file, // Store the selected file object
//   //     }));
//   //   }
//   // };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
//       setAccountData((prevData) => ({
//         ...prevData,
//         deaLicenseCopy: fileUrl, // Update state with the selected file URL
//       }));
//     }
//   };

//   const handleFileChangePharma = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
//     setAccountData((prevData) => ({
//       ...prevData,
//       pharmacyLicenseCopy: fileUrl, // Update state with the selected file URL
//     }));
//   }
// };

//   const handleAccountSaveClick = async () => {
//     setIsAccountEdit(false);
//     console.log("acc", accountData);
//     const businessInfoObj = {
//       customerBusinessInfoId: businessInfo.customerBusinessInfoId,
//       customerId: userdata.customerId,
//       shopName: businessInfo.shopName,
//       dba: businessInfo.dba,
//       legalBusinessName: businessInfo.legalBusinessName,
//       address: businessInfo.address,
//       city: businessInfo.city,
//       state: businessInfo.state,
//       zip: businessInfo.zip,
//       businessPhone: businessInfo.businessPhone,
//       businessFax: businessInfo.businessFax,
//       businessEmail: businessInfo.businessEmail,
//       federalTaxId: accountData.federalTaxId,
//       dea: accountData.dea,
//       pharmacyLicence: accountData.pharmacyLicence,
//       deaExpirationDate: accountData.deaExpirationDate == "" ? null : accountData.deaExpirationDate,
//       pharmacyLicenseExpirationDate:
//         accountData.pharmacyLicenseExpirationDate == "" ? null : accountData.pharmacyLicenseExpirationDate,
//       // deaLicenseCopy: businessInfo.deaLicenseCopy,
//       // pharmacyLicenseCopy: businessInfo.pharmacyLicenseCopy,
//       deaLicenseCopy: accountData.deaLicenseCopy || businessInfo.deaLicenseCopy,
//       pharmacyLicenseCopy: accountData.pharmacyLicenseCopy || businessInfo.pharmacyLicenseCopy,
//       npi: accountData.npi,
//       ncpdp: accountData.ncpdp,
//       companyWebsite: businessInfo.companyWebsite,
//     };
//     if (businessInfo) {
//       console.log("before sbubmit", businessInfoObj);
//       await BusinessInfoUpdate(businessInfoObj);
//       await RefreshUser();
//     }
//     // Here you would typically dispatch an action to save the updated account information
//     console.log("Account saved:", accountData);
//     // alert("Account information saved successfully!");
//     setNotification({
//       show: true,
//       message: "Account information saved Successfully!",
//     });
//     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//   };

//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     // Set the states data
//     setStates(useStates); // Adjust based on actual structure
//   }, []);

//   const formatPhoneNumber = (value) => {
//     // Remove all non-numeric characters
//     const cleaned = ("" + value).replace(/\D/g, "");

//     // Match the cleaned input with a pattern and format it as 777-777-7777
//     const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

//     if (match) {
//       const part1 = match[1] ? match[1] : "";
//       const part2 = match[2] ? `-${match[2]}` : "";
//       const part3 = match[3] ? `-${match[3]}` : "";
//       return `${part1}${part2}${part3}`;
//     }

//     return value;
//   };

//   return (
//     <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
//       {notification.show && (
//         <Notification show={notification.show} message={notification.message} />
//       )}
//       <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
//         {/* Render Profile Buttons */}
//         <div className="flex">
//           {profiles.map((profile, index) =>
//             // Hide index 1 if user.customerTypeId is 4
//             userdata?.customerTypeId === 4 &&
//               (index === 1 || index === 2) ? null : (
//               <div key={profile.grid} className="flex ml-6">
//                 <div
//                   className={`w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer ${visibleGrid === profile.grid
//                     ? "border-b-4 border-blue-900"
//                     : ""
//                     }`}
//                   onClick={() => toggleGrid(profile.grid)}
//                 >
//                   <h1 className="text-lg text-blue-900 font-semibold">
//                     {profile.label}
//                   </h1>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         {visibleGrid === "account" && (
//           <div>
//             <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">
//               Primary
//             </h1>
//             <div
//               className={`bg-white border ${isEditable ? "border-blue-900" : "border-gray-400"
//                 } rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}
//             >
//               {/* <h1 className={`text-xl font-semibold my-2 text-blue-900`}>
//                 User Information
//               </h1> */}

// {isEditable && (
//                 <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
//                   User Information
//                 </h1>
//               )}
//               <h1
//                 className={`text-xl font-semibold my-2 ${isEditable ? "invisible" : "text-blue-900"
//                   }`}
//               >
//                 User Information
//               </h1>

//               <div className="flex justify-between">
//                 <div className="py-4 flex flex-col gap-4">
//                   <TextField
//                     label="First Name"
//                     name="firstName"
//                     value={userDetails.firstName}
//                     onChange={handleInputChange}
//                     disabled={!isEditable}
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Email"
//                     name="email"
//                     value={userDetails.email}
//                     onChange={handleInputChange}
//                     disabled={!isEditable}
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Password"
//                     name="password"
//                     value={userDetails.password}
//                     onChange={handleInputChange}
//                     disabled={!isEditable}
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="py-4 flex flex-col gap-4">
//                   <TextField
//                     label="Last Name"
//                     name="lastName"
//                     value={userDetails.lastName}
//                     onChange={handleInputChange}
//                     disabled={!isEditable}
//                     size="small"
//                     className="w-full"
//                   />
//                   <TextField
//                     label="Phone Number"
//                     name="mobile"
//                     value={userDetails.mobile}
//                     onChange={handlePhoneNumberChange}
//                     // onChange={handlePhoneChange}
//                     inputProps={{ maxLength: 12 }}
//                     disabled={!isEditable}
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between py-2">
//                   <img
//                     src={edit}
//                     className="w-6 h-6 ml-4 cursor-pointer"
//                     onClick={handleEditClick}
//                     alt="Edit"
//                   />
//                   <button
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isEditable ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                     onClick={handleSaveClick}
//                     disabled={!isEditable}
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {visibleGrid === "account" && (
//           <div className="flex flex-col bg-slate-200 p-6 w-full h-full">
//             {/* Address Information Section */}
//             <div
//               className={`bg-white border ${isAddressEdit ? "border-blue-900" : "border-gray-400"
//                 } rounded-lg px-8  w-[95%] mt-8 relative`}
//             >
//               {isAddressEdit && (
//                 <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
//                   Address Information
//                 </h1>
//               )}
//               <h1
//                 className={`text-xl font-semibold my-2 ${isAddressEdit ? "invisible" : "text-blue-900"
//                   }`}
//               >
//                 Address Information
//               </h1>
//               <div className="flex justify-between py-4">
//                 <div className="flex flex-col gap-3">
//                   {userdata?.customerTypeId !== 4 && userdata?.customerTypeId !== 2 && userdata?.customerTypeId !== 3 && (
//                     <TextField
//                       label="Shop Name"
//                       id="shopName"
//                       name="shopName"
//                       value={addressData.shopName}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}
//                   {userdata?.customerTypeId !== 4 && userdata?.customerTypeId !== 3 && userdata?.customerTypeId !== 2 && (
//                     <TextField
//                       label="DBA Name"
//                       id="dba"
//                       name="dba"
//                       value={addressData.dba}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}

//                   <TextField
//                     label="City"
//                     id="city"
//                     name="city"
//                     value={addressData.city}
//                     onChange={handleAddressChange}
//                     disabled={!isAddressEdit}
//                     size="small"
//                   />
//                   <TextField
//                     label="Zip"
//                     id="zip"
//                     name="zip"
//                     value={addressData.zip}
//                     onChange={handleAddressChange}
//                     disabled={!isAddressEdit}
//                     size="small"
//                     inputProps={{ maxLength: 10 }}
//                   />
//                   {userdata?.customerTypeId !== 4 && (
//                     <TextField
//                       label=" Business Fax"
//                       id="businessFax"
//                       name="businessFax"
//                       value={addressData.businessFax}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}
//                   {userdata?.customerTypeId !== 4 && (
//                     <TextField
//                       label=" Company Website"
//                       id="companyWebsite"
//                       name="companyWebsite"
//                       value={addressData.companyWebsite}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   {userdata?.customerTypeId !== 4 && (
//                     <TextField
//                       label="Legal Business Name"
//                       id="legalBusinessName"
//                       name="legalBusinessName"
//                       value={addressData.legalBusinessName}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}
//                   <TextField
//                     label="Address"
//                     id="address"
//                     name="address"
//                     value={addressData.address}
//                     onChange={handleAddressChange}
//                     disabled={!isAddressEdit}
//                     size="small"
//                   />
//                   {/* <TextField
//                     label="State"
//                     id="state"
//                     name="state"
//                     value={addressData.state}
//                     onChange={handleAddressChange}
//                     disabled={!isAddressEdit}
//                     size="small"
//                   /> */}
//                   <FormControl size="small" disabled={!isAddressEdit}>
//                     <InputLabel id="state-select-label">State</InputLabel>
//                     <Select
//                       id="state-select"
//                       label="State"
//                       value={addressData.state || ""} // Ensure a default value
//                       name="state" // Ensure the name matches the key in addressData
//                       onChange={handleAddressChange}
//                       MenuProps={{
//                         PaperProps: {
//                           style: {
//                             maxHeight: 200, // Set the maximum height of the dropdown
//                           },
//                         },
//                       }}
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {states.map((state) => (
//                         <MenuItem
//                           key={state.abbreviation}
//                           value={state.name} // Match this value to what you want to save in addressData
//                         >
//                           {state.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>

//                   {userdata?.customerTypeId !== 4 && (
//                     <TextField
//                       label="Business Phone"
//                       id="businessPhone"
//                       name="businessPhone"
//                       value={addressData.businessPhone}
//                       onChange={handlePhoneChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                       inputProps={{ maxLength: 12 }}
//                     />
//                   )}
//                   {userdata?.customerTypeId !== 4 && (
//                     <TextField
//                       label="Business Email"
//                       id="businessEmail"
//                       name="businessEmail"
//                       value={addressData.businessEmail}
//                       onChange={handleAddressChange}
//                       disabled={!isAddressEdit}
//                       size="small"
//                     />
//                   )}
//                 </div>
//                 <div className="flex flex-col justify-between py-2">
//                   <img
//                     src={edit}
//                     className="w-6 h-6 cursor-pointer"
//                     onClick={handleAddressEditClick}
//                   />
//                   <button
//                     className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isAddressEdit ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                     onClick={handleAddressSaveClick}
//                     disabled={!isAddressEdit}
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Account Information Section */}

//             {userdata?.customerTypeId !== 4 && (
//               <div
//                 className={`bg-white border ${isAccountEdit ? "border-blue-900" : "border-gray-400"
//                   } rounded-lg px-8 w-[95%]  mt-8 relative mb-6`}
//               >
//                 {isAccountEdit && (
//                   <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
//                     Account Information
//                   </h1>
//                 )}
//                 <h1
//                   className={`text-xl font-semibold my-2 ${isAccountEdit ? "invisible" : "text-blue-900"
//                     }`}
//                 >
//                   Account Information
//                 </h1>
//                 <div className="flex justify-between py-4">
//                   <div className="flex flex-col gap-3">
//                     <TextField
//                       label="DEA"
//                       id="dea"
//                       name="dea"
//                       value={accountData.dea}
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />
//                     <label> DEA Expiration Date </label>
//                     <TextField
//                       label=""
//                       type="date"
//                       id="deaExpirationDate"
//                       name="deaExpirationDate"
//                       value={
//                         accountData.deaExpirationDate
//                           ? formatDate(accountData.deaExpirationDate)
//                           : ""
//                       }
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />

//                     <label> DEA Expiration File </label>
//                     <TextField
//                       label=""
//                       type="file"
//                       id="outlined-size-small"
//                       name="deaLicenseCopy"
//                       onChange={handleFileChange} // Separate handler for file selection
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />
//                     {accountData.deaLicenseCopy && (
//                       <a
//                         href={accountData.deaLicenseCopy}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                          className="text-blue-500 underline  -mt-3"
//                       >
//                         View DEA License Copy
//                       </a>
//                     )}

//                     <TextField
//                       label="NPI"
//                       id="npi"
//                       name="npi"
//                       value={accountData.npi}
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%] mt-3"
//                     />
//                     <TextField
//                       label="Federal Tax"
//                       id="federalTaxId"
//                       name="federalTaxId"
//                       value={accountData.federalTaxId}
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-3">
//                     <TextField
//                       label="Pharmacy License"
//                       id="pharmacyLicence"
//                       name="pharmacyLicence"
//                       value={accountData.pharmacyLicence}
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />
//                     <label> Pharmacy License Expiration Date </label>
//                     {/* <TextField
//                       label=""
//                       type="date"
//                       id="pharmacyLicenseExpirationDate"
//                       name="pharmacyLicenseExpirationDate"
//                       value={accountData.pharmacyLicenseExpirationDate}
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     /> */}
//                     <TextField
//                       label=""
//                       type="date"
//                       id="pharmacyLicenseExpirationDate"
//                       name="pharmacyLicenseExpirationDate"
//                       value={
//                         accountData.pharmacyLicenseExpirationDate
//                           ? formatDate(
//                             accountData.pharmacyLicenseExpirationDate
//                           )
//                           : ""
//                       }
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />

//                     <label>Pharmacy License Expiration File</label>
//                     <TextField
//                       label=""
//                       type="file"
//                       id="outlined-size-small"
//                       name="pharmacyLicenseCopy"
//                       onChange={handleFileChangePharma} // Separate handler for file input
//                       disabled={!isAccountEdit}
//                       size="small"
//                       className="w-[60%]"
//                     />
//                     {accountData.pharmacyLicenseCopy && (
//                       <a
//                         href={accountData.pharmacyLicenseCopy}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                          className="text-blue-500 underline  -mt-3"
//                       >
//                         View Pharmacy License Copy
//                       </a>
//                     )}

//                     <TextField
//                       label="NCPDP"
//                       id="ncpdp"
//                       name="ncpdp"
//                       onChange={handleAccountChange}
//                       disabled={!isAccountEdit}
//                       value={accountData.ncpdp}
//                       size="small"
//                       className="w-[60%] mt-3"
//                     />
//                   </div>
//                   <div className="flex flex-col justify-between py-2">
//                     <img
//                       src={edit}
//                       className="w-6 h-6 cursor-pointer"
//                       onClick={handleAccountEditClick}
//                     />
//                     <button
//                       className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isAccountEdit ? "opacity-50 cursor-not-allowed" : ""
//                         }`}
//                       onClick={handleAccountSaveClick}
//                       disabled={!isAccountEdit}
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         {visibleGrid === "bank" && (
//           <div
//           //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
//           >
//             {/* Your bank information grid details here */}
//             <BankInformation />
//           </div>
//         )}

//         {visibleGrid === "Tax" && (
//           <div
//           //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
//           >
//             {/* Your bank information grid details here */}
//             <TaxInformation />
//           </div>
//         )}

//         {visibleGrid === "charges" && (
//           <div
//           //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
//           >
//             {/* Your bank information grid details here */}
//             <Chargesinformation />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LayoutProfile;

import { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import editIcon from "../../../assets/Edit.png"; // Renamed for clarity
import edit from "../../../assets/Edit.png";
import BankInformation from "./BankInformation";
import ChargesInformation from "../../../Components/LayoutPage/LayoutProfile/ChargesInformation";
import { useSelector } from "react-redux";
import { useStates } from "react-us-states";
import TaxInformation from "./TaxInformation";
import {
  BusinessInfoUpdate,
  getUserByCustomerIdApi,
  UserInfoUpdate,
} from "../../../Api/UserApi";
import Chargesinformation from "./ChargesInformation";
import Notification from "../../Notification";
const LayoutProfile = () => {
  const userdata = useSelector((state) => state.user.user); // Get user data from redux
  const businessInfo = useSelector((state) => state.user.businessInfo);

  console.log("rrrrrrrrrrrrrrrrr", userdata);
  const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode
  // State to handle user data (controlled inputs)
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [userDetails, setUserDetails] = useState({
    firstName: userdata?.firstName || "",
    lastName: userdata?.lastName || "",
    email: userdata?.email || "",
    password: userdata?.password || "",
    // phoneNumber: userdata?.phoneNumber || "",
    mobile: userdata?.mobile || "",
    customerTypeId: userdata?.customerTypeId || "",
  });

  useEffect(() => {
    setUserDetails({
      firstName: userdata?.firstName || "",
      lastName: userdata?.lastName || "",
      email: userdata?.email || "",
      password: userdata?.password || "",
      // phoneNumber: userdata?.phoneNumber || "",
      mobile: userdata?.mobile || "",
      customerTypeId: userdata?.customerTypeId || "",
    });
  }, [userdata]);

  console.log("uuuuuuu", userdata);

  // Handle changes to input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handlePhoneNumberChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    handleInputChange({
      target: {
        name: e.target.name,
        value: formattedPhone,
      },
    });
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditable((prev) => !prev);
  };
  const RefreshUser = async () => {
    await getUserByCustomerIdApi(userdata.customerId);
  };
  // Handle save action
  const handleSaveClick = async () => {
    setIsEditable(false);
    const userinfo = {
      customerId: userdata.customerId,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      mobile: userDetails.mobile,
      password: userDetails.password,
      customerTypeId: userdata.customerTypeId,
      accountTypeId: userdata.accountTypeId,
      isUPNMember: userdata.isUPNMember,
    };
    if (userinfo) {
      await UserInfoUpdate(userinfo);
      await RefreshUser();
    }

    console.log("Data saved:", userDetails); // You can dispatch this to Redux or send it to the backend
    // alert("Data saved successfully!"); // Show notification
    setNotification({
      show: true,
      message: "User Information saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  console.log("business", businessInfo);
  // State for editing Address Information
  const [isAddressEdit, setIsAddressEdit] = useState(false);
  const [addressData, setAddressData] = useState({
    shopName: businessInfo?.shopName || "",
    dba: businessInfo?.dba || "",
    city: businessInfo?.city || "",
    zip: businessInfo?.zip || "",
    legalBusinessName: businessInfo?.legalBusinessName || "",
    address: businessInfo?.address || "",
    state: businessInfo?.state || "",
    businessPhone: businessInfo?.businessPhone || "",
    businessFax: businessInfo?.businessFax || "",
    deaExpirationDate: businessInfo?.deaExpirationDate || "",
    businessEmail: businessInfo?.businessEmail || "",

    companyWebsite: businessInfo?.companyWebsite || "",

    pharmacyLicenseExpirationDate:
      businessInfo?.pharmacyLicenseExpirationDate || "",
  });

  // const [addressData, setAddressData] = useState({
  //   shopName: "",
  //   dba: "",
  //   city: "",
  //   zip: "",
  //   legalBusinessName: "",
  //   address: "",
  //   state: "",
  //   businessPhone: "",
  //   businessFax: "",
  //   deaExpirationDate: "",
  //   businessEmail: "",
  //   companyWebsite: "",
  //   pharmacyLicenseExpirationDate: "",
  // });

  const [accountData, setAccountData] = useState({
    dea: businessInfo?.dea || "",
    deaExpirationDate: businessInfo?.deaExpirationDate || "",
    npi: businessInfo?.npi || "",
    ncpdp: businessInfo?.ncpdp || "",
    federalTax: businessInfo?.federalTax || "",
    pharmacyLicense: businessInfo?.pharmacyLicense || "",
    pharmacyLicenseExpirationDate:
      businessInfo?.pharmacyLicenseExpirationDate || "",
    federalTaxId: businessInfo?.federalTaxId || "",
    pharmacyLicence: businessInfo?.pharmacyLicence || "",
    deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
    pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
  });
  useEffect(() => {
    setAddressData({
      shopName: businessInfo?.shopName || "",
      dba: businessInfo?.dba || "",
      city: businessInfo?.city || "",
      zip: businessInfo?.zip || "",
      legalBusinessName: businessInfo?.legalBusinessName || "",
      address: businessInfo?.address || "",
      state: businessInfo?.state || "",
      businessPhone: businessInfo?.businessPhone || "",
      businessFax: businessInfo?.businessFax || "",
      deaExpirationDate: businessInfo?.deaExpirationDate || "",
      businessEmail: businessInfo?.businessEmail || "",

      companyWebsite: businessInfo?.companyWebsite || "",

      pharmacyLicenseExpirationDate:
        businessInfo?.pharmacyLicenseExpirationDate || "",
      deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
      pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
    });
    setAccountData({
      dea: businessInfo?.dea || "",
      deaExpirationDate: businessInfo?.deaExpirationDate || "",
      npi: businessInfo?.npi || "",
      ncpdp: businessInfo?.ncpdp || "",
      federalTax: businessInfo?.federalTax || "",
      pharmacyLicense: businessInfo?.pharmacyLicense || "",
      pharmacyLicenseExpirationDate:
        businessInfo?.pharmacyLicenseExpirationDate || "",
      federalTaxId: businessInfo?.federalTaxId || "",
      pharmacyLicence: businessInfo?.pharmacyLicence || "",
      deaLicenseCopy: businessInfo?.deaLicenseCopy || "",
      pharmacyLicenseCopy: businessInfo?.pharmacyLicenseCopy || "",
    });
  }, [businessInfo]);

  useEffect(() => {
    if (businessInfo) {
      setAddressData({
        shopName: businessInfo.shopName || "",
        dba: businessInfo.dba || "",
        city: businessInfo.city || "",
        zip: businessInfo.zip || "",
        legalBusinessName: businessInfo.legalBusinessName || "",
        address: businessInfo.address || "",
        state: businessInfo.state || "",
        businessPhone: businessInfo.businessPhone || "",
        businessFax: businessInfo.businessFax || "",
        deaExpirationDate: businessInfo.deaExpirationDate || "",
        businessEmail: businessInfo.businessEmail || "",
        companyWebsite: businessInfo.companyWebsite || "",
        pharmacyLicenseExpirationDate:
          businessInfo.pharmacyLicenseExpirationDate || "",
      });
    }
  }, [businessInfo]);

  const profiles = [
    {
      label: "Primary",
      grid: "account",
    },
    {
      label: "Bank Information",
      grid: "bank",
    },
    {
      label: "Tax Information",
      grid: "Tax",
    },
    {
      label: "Charges Information",
      grid: "charges",
    },
  ];
  const [visibleGrid, setVisibleGrid] = useState("account"); // Default to Account Information
  const toggleGrid = (grid) => {
    setVisibleGrid(grid); // Set the visible grid to the selected one
  };
  // const handleAddressChange = (e) => {
  //   const { name, value } = e.target;

  //   setAddressData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleAddressChange = (e) => {
    console.log("Field changed:", e.target.name, e.target.value);
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    handleAddressChange({
      target: {
        name: e.target.name,
        value: formattedPhone,
      },
    });
  };

  const handleAddressEditClick = () => {
    setIsAddressEdit(true);
  };

  const handleAddressSaveClick = async () => {
    setIsAddressEdit(false);
    const businessInfoObj = {
      customerBusinessInfoId: businessInfo.customerBusinessInfoId,
      customerId: userdata.customerId,
      shopName: addressData.shopName,
      dba: addressData.dba,
      legalBusinessName: addressData.legalBusinessName,
      address: addressData.address,
      city: addressData.city,
      state: addressData.state,
      zip: addressData.zip,
      businessPhone: addressData.businessPhone,
      businessFax: addressData.businessFax,
      businessEmail: addressData.businessEmail,
      federalTaxId: businessInfo.federalTaxId,
      dea: businessInfo.dea,
      pharmacyLicence: businessInfo.pharmacyLicence,
      deaExpirationDate:
        businessInfo.deaExpirationDate == ""
          ? null
          : businessInfo.deaExpirationDate,
      pharmacyLicenseExpirationDate:
        businessInfo.pharmacyLicenseExpirationDate == ""
          ? null
          : businessInfo.pharmacyLicenseExpirationDate,
      deaLicenseCopy: businessInfo.deaLicenseCopy,
      pharmacyLicenseCopy: businessInfo.pharmacyLicenseCopy,
      npi: businessInfo.npi,
      ncpdp: businessInfo.ncpdp,
      companyWebsite: addressData.companyWebsite,
    };
    if (businessInfo) {
      console.log("before sbubmit", businessInfoObj);
      await BusinessInfoUpdate(businessInfoObj);
      await RefreshUser();
    }
    // Here you would typically dispatch an action to save the updated address
    console.log("Address saved:", addressData);
    // alert("Address information saved successfully!");
    setNotification({
      show: true,
      message: "Address information saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  // State for editing Account Information
  const [isAccountEdit, setIsAccountEdit] = useState(false);

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAccountEditClick = () => {
    setIsAccountEdit(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     // Handle the file (e.g., store in state, upload it, etc.)
  //     setAccountData((prevState) => ({
  //       ...prevState,
  //       deaLicenseCopy: file, // Update state with the selected file
  //     }));
  //   }
  // };

  // const handleFileChangePharma = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     // Update the state with the selected file for pharmacy license
  //     setAccountData((prevState) => ({
  //       ...prevState,
  //       pharmacyLicenseCopy: file, // Store the selected file object
  //     }));
  //   }
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
      setAccountData((prevData) => ({
        ...prevData,
        deaLicenseCopy: fileUrl, // Update state with the selected file URL
      }));
    }
  };

  const handleFileChangePharma = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
      setAccountData((prevData) => ({
        ...prevData,
        pharmacyLicenseCopy: fileUrl, // Update state with the selected file URL
      }));
    }
  };

  const handleAccountSaveClick = async () => {
    setIsAccountEdit(false);
    console.log("acc", accountData);
    const businessInfoObj = {
      customerBusinessInfoId: businessInfo.customerBusinessInfoId,
      customerId: userdata.customerId,
      shopName: businessInfo.shopName,
      dba: businessInfo.dba,
      legalBusinessName: businessInfo.legalBusinessName,
      address: businessInfo.address,
      city: businessInfo.city,
      state: businessInfo.state,
      zip: businessInfo.zip,
      businessPhone: businessInfo.businessPhone,
      businessFax: businessInfo.businessFax,
      businessEmail: businessInfo.businessEmail,
      federalTaxId: accountData.federalTaxId,
      dea: accountData.dea,
      pharmacyLicence: accountData.pharmacyLicence,
      deaExpirationDate:
        accountData.deaExpirationDate == ""
          ? null
          : accountData.deaExpirationDate,
      pharmacyLicenseExpirationDate:
        accountData.pharmacyLicenseExpirationDate == ""
          ? null
          : accountData.pharmacyLicenseExpirationDate,
      // deaLicenseCopy: businessInfo.deaLicenseCopy,
      // pharmacyLicenseCopy: businessInfo.pharmacyLicenseCopy,
      deaLicenseCopy: accountData.deaLicenseCopy || businessInfo.deaLicenseCopy,
      pharmacyLicenseCopy:
        accountData.pharmacyLicenseCopy || businessInfo.pharmacyLicenseCopy,
      npi: accountData.npi,
      ncpdp: accountData.ncpdp,
      companyWebsite: businessInfo.companyWebsite,
    };
    if (businessInfo) {
      console.log("before sbubmit", businessInfoObj);
      await BusinessInfoUpdate(businessInfoObj);
      await RefreshUser();
    }
    // Here you would typically dispatch an action to save the updated account information
    console.log("Account saved:", accountData);
    // alert("Account information saved successfully!");
    setNotification({
      show: true,
      message: "Account information saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = ("" + value).replace(/\D/g, "");

    // Match the cleaned input with a pattern and format it as 777-777-7777
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const part1 = match[1] ? match[1] : "";
      const part2 = match[2] ? `-${match[2]}` : "";
      const part3 = match[3] ? `-${match[3]}` : "";
      return `${part1}${part2}${part3}`;
    }

    return value;
  };

  const [upnMember, setUpnMember] = useState(0);

  // Function to handle changes in radio button selection
  // const handleUserChange = (event) => {
  //   setUpnMember(Number(event.target.value)); // Ensure the value is a number (0 or 1)
  // };

  const customerTypeLabels = {
    1: "Retail Pharmacy",
    2: "General Merchandise Seller",
    3: "Pharmacy Distributor",
    4: "Retail Customer",
  };

  return (
    <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
        {/* Render Profile Buttons */}
        <div className="flex">
          {profiles.map((profile, index) =>
            // Hide index 1 if user.customerTypeId is 4
            userdata?.customerTypeId === 4 &&
            (index === 1 || index === 2) ? null : (
              <div key={profile.grid} className="flex ml-6">
                <div
                  className={`w-44 bg-white rounded-lg flex items-center justify-center cursor-pointer ${
                    visibleGrid === profile.grid
                      ? "border-b-4 border-blue-900"
                      : ""
                  }`}
                  onClick={() => toggleGrid(profile.grid)}
                >
                  <h1 className="text-lg text-blue-900 font-semibold">
                    {profile.label}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>

        {visibleGrid === "account" && (
          <div>
            <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">
              Primary
            </h1>
            <div
              className={`bg-white border ${
                isEditable ? "border-blue-900" : "border-gray-400"
              } rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}
            >
              {/* <h1 className={`text-xl font-semibold my-2 text-blue-900`}>
                User Information
              </h1> */}

              {isEditable && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  User Information
                </h1>
              )}
              <h1
                className={`text-xl font-semibold my-2 ${
                  isEditable ? "invisible" : "text-blue-900"
                }`}
              >
                User Information
              </h1>

              <div className="flex justify-between">
                <div className="py-4 flex flex-col gap-4">
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="py-4 flex flex-col gap-4">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Phone Number"
                    name="mobile"
                    value={userDetails.mobile}
                    onChange={handlePhoneNumberChange}
                    // onChange={handlePhoneChange}
                    inputProps={{ maxLength: 12 }}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleEditClick}
                    alt="Edit"
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                      !isEditable ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleSaveClick}
                    disabled={!isEditable}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {visibleGrid === "account" && (
          <div className="flex flex-col bg-white border  border-gray-400 p-6 h-full ml-6  rounded-lg px-8  w-[90%] mt-8">
            <h1 className="text-blue-900 font-semibold -mt-2 text-xl ">
              User Type
            </h1>
            <div className="mt-2" >
              {/* <label className="gap-2 mr-3" >Account type :</label> */}
              {/* <TextField
                label="User type"
                id="customerTypeId"
                name="customerTypeId"
                value={userDetails.customerTypeId}
                // onChange={handleAddressChange}
                disabled={!isAddressEdit}
                className="ml-3"
                size="small"
              /> */}
               <TextField
                      label="User type"
                      id="customerTypeId"
                      name="customerTypeId"
                      value={
                        customerTypeLabels[userDetails.customerTypeId] ||
                        userDetails.customerTypeId
                      }
                      disabled
                      className="ml-3"
                      size="small"
                    />
            </div>
            {userdata?.customerTypeId !== 4 &&
              userdata?.customerTypeId !== 2 &&
              userdata?.customerTypeId !== 3 && (
                <div className="mt-2" >
                  <label className="mr-3 text-gray-400" >UPN Member</label>

                  <input
                    type="radio"
                    id="yes"
                    value="1"
                    checked={upnMember === 1}
                    // onChange={handleChange}
                    className="mr-2"
                    disabled={!isAddressEdit}

                  />
                  <label className="mr-2 text-gray-400" htmlFor="yes">
                    Yes
                  </label>

                  <input
                    type="radio"
                    id="no"
                    value="0"
                    checked={upnMember === 0}
                    // onChange={handleChange}
                    className="mr-2"
                    disabled={!isAddressEdit}
                  />
                  <label className="mr-2 text-gray-400" htmlFor="no">
                    No
                  </label>
                </div>
              )}
          </div>
        )}

        {visibleGrid === "account" && (
          <div className="flex flex-col bg-slate-200 p-6 w-full h-full">
            {/* Address Information Section */}
            <div
              className={`bg-white border ${
                isAddressEdit ? "border-blue-900" : "border-gray-400"
              } rounded-lg px-8  w-[95%] mt-8 relative`}
            >
              {isAddressEdit && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  Address Information
                </h1>
              )}
              <h1
                className={`text-xl font-semibold my-2 ${
                  isAddressEdit ? "invisible" : "text-blue-900"
                }`}
              >
                Address Information
              </h1>
              <div className="flex justify-between py-4">
                <div className="flex flex-col gap-3">
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 2 &&
                    userdata?.customerTypeId !== 3 && (
                      <TextField
                        label="Shop Name"
                        id="shopName"
                        name="shopName"
                        value={addressData.shopName}
                        onChange={handleAddressChange}
                        disabled={!isAddressEdit}
                        size="small"
                      />
                    )}
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 3 &&
                    userdata?.customerTypeId !== 2 && (
                      <TextField
                        label="DBA Name"
                        id="dba"
                        name="dba"
                        value={addressData.dba}
                        onChange={handleAddressChange}
                        disabled={!isAddressEdit}
                        size="small"
                      />
                    )}

                  <TextField
                    label="City"
                    id="city"
                    name="city"
                    value={addressData.city}
                    onChange={handleAddressChange}
                    disabled={!isAddressEdit}
                    size="small"
                  />
                  <TextField
                    label="Zip"
                    id="zip"
                    name="zip"
                    value={addressData.zip}
                    onChange={handleAddressChange}
                    disabled={!isAddressEdit}
                    size="small"
                    inputProps={{ maxLength: 10 }}
                  />
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label=" Business Fax"
                      id="businessFax"
                      name="businessFax"
                      value={addressData.businessFax}
                      onChange={handleAddressChange}
                      disabled={!isAddressEdit}
                      size="small"
                    />
                  )}
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label=" Company Website"
                      id="companyWebsite"
                      name="companyWebsite"
                      value={addressData.companyWebsite}
                      onChange={handleAddressChange}
                      disabled={!isAddressEdit}
                      size="small"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Legal Business Name"
                      id="legalBusinessName"
                      name="legalBusinessName"
                      value={addressData.legalBusinessName}
                      onChange={handleAddressChange}
                      disabled={!isAddressEdit}
                      size="small"
                    />
                  )}
                  <TextField
                    label="Address"
                    id="address"
                    name="address"
                    value={addressData.address}
                    onChange={handleAddressChange}
                    disabled={!isAddressEdit}
                    size="small"
                  />
                  {/* <TextField
                    label="State"
                    id="state"
                    name="state"
                    value={addressData.state}
                    onChange={handleAddressChange}
                    disabled={!isAddressEdit}
                    size="small"
                  /> */}
                  <FormControl size="small" disabled={!isAddressEdit}>
                    <InputLabel id="state-select-label">State</InputLabel>
                    <Select
                      id="state-select"
                      label="State"
                      value={addressData.state || ""} // Ensure a default value
                      name="state" // Ensure the name matches the key in addressData
                      onChange={handleAddressChange}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200, // Set the maximum height of the dropdown
                          },
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {states.map((state) => (
                        <MenuItem
                          key={state.abbreviation}
                          value={state.name} // Match this value to what you want to save in addressData
                        >
                          {state.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Business Phone"
                      id="businessPhone"
                      name="businessPhone"
                      value={addressData.businessPhone}
                      onChange={handlePhoneChange}
                      disabled={!isAddressEdit}
                      size="small"
                      inputProps={{ maxLength: 12 }}
                    />
                  )}
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Business Email"
                      id="businessEmail"
                      name="businessEmail"
                      value={addressData.businessEmail}
                      onChange={handleAddressChange}
                      disabled={!isAddressEdit}
                      size="small"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleAddressEditClick}
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                      !isAddressEdit ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleAddressSaveClick}
                    disabled={!isAddressEdit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Account Information Section */}

            {userdata?.customerTypeId !== 4 && (
              <div
                className={`bg-white border ${
                  isAccountEdit ? "border-blue-900" : "border-gray-400"
                } rounded-lg px-8 w-[95%]  mt-8 relative mb-6`}
              >
                {isAccountEdit && (
                  <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                    Account Information
                  </h1>
                )}
                <h1
                  className={`text-xl font-semibold my-2 ${
                    isAccountEdit ? "invisible" : "text-blue-900"
                  }`}
                >
                  Account Information
                </h1>
                <div className="flex justify-between py-4">
                  <div className="flex flex-col gap-3">
                    <TextField
                      label="DEA"
                      id="dea"
                      name="dea"
                      value={accountData.dea}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    <label> DEA Expiration Date </label>
                    <TextField
                      label=""
                      type="date"
                      id="deaExpirationDate"
                      name="deaExpirationDate"
                      value={
                        accountData.deaExpirationDate
                          ? formatDate(accountData.deaExpirationDate)
                          : ""
                      }
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />

                    <label> DEA Expiration File </label>
                    <TextField
                      label=""
                      type="file"
                      id="outlined-size-small"
                      name="deaLicenseCopy"
                      onChange={handleFileChange} // Separate handler for file selection
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    {accountData.deaLicenseCopy && (
                      <a
                        href={accountData.deaLicenseCopy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline  -mt-3"
                      >
                        View DEA License Copy
                      </a>
                    )}

                    <TextField
                      label="NPI"
                      id="npi"
                      name="npi"
                      value={accountData.npi}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%] mt-3"
                    />
                    <TextField
                      label="Federal Tax"
                      id="federalTaxId"
                      name="federalTaxId"
                      value={accountData.federalTaxId}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <TextField
                      label="Pharmacy License"
                      id="pharmacyLicence"
                      name="pharmacyLicence"
                      value={accountData.pharmacyLicence}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    <label> Pharmacy License Expiration Date </label>
                    {/* <TextField
                      label=""
                      type="date"
                      id="pharmacyLicenseExpirationDate"
                      name="pharmacyLicenseExpirationDate"
                      value={accountData.pharmacyLicenseExpirationDate}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    /> */}
                    <TextField
                      label=""
                      type="date"
                      id="pharmacyLicenseExpirationDate"
                      name="pharmacyLicenseExpirationDate"
                      value={
                        accountData.pharmacyLicenseExpirationDate
                          ? formatDate(
                              accountData.pharmacyLicenseExpirationDate
                            )
                          : ""
                      }
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />

                    <label>Pharmacy License Expiration File</label>
                    <TextField
                      label=""
                      type="file"
                      id="outlined-size-small"
                      name="pharmacyLicenseCopy"
                      onChange={handleFileChangePharma} // Separate handler for file input
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    {accountData.pharmacyLicenseCopy && (
                      <a
                        href={accountData.pharmacyLicenseCopy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline  -mt-3"
                      >
                        View Pharmacy License Copy
                      </a>
                    )}

                    <TextField
                      label="NCPDP"
                      id="ncpdp"
                      name="ncpdp"
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      value={accountData.ncpdp}
                      size="small"
                      className="w-[60%] mt-3"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-2">
                    <img
                      src={edit}
                      className="w-6 h-6 cursor-pointer"
                      onClick={handleAccountEditClick}
                    />
                    <button
                      className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                        !isAccountEdit ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={handleAccountSaveClick}
                      disabled={!isAccountEdit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {visibleGrid === "bank" && (
          <div
          //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
          >
            {/* Your bank information grid details here */}
            <BankInformation />
          </div>
        )}

        {visibleGrid === "Tax" && (
          <div
          //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
          >
            {/* Your bank information grid details here */}
            <TaxInformation />
          </div>
        )}

        {visibleGrid === "charges" && (
          <div
          //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
          >
            {/* Your bank information grid details here */}
            <Chargesinformation />
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutProfile;
