import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import edit from "../../../assets/Edit.png";
import { useSelector } from "react-redux";
import { Box, Radio } from "@mui/material";
import { Button, Textarea } from "@material-tailwind/react";
import {
  ActivateUserAPI,
  BusinessInfoUpdate,
  DeactivateUserAPI,
  fetchCustomerActivateDeactivateById,
  getUserByCustomerIdApi,
  UserInfoUpdate,
} from "../../../Api/UserApi";
import Notification from "../../Notification";
import ChargesInformations from "./ChargesInformations";
import { useStates } from "react-us-states";
import { useParams } from "react-router-dom";
// import ChargesInformation from "../../LayoutPage/LayoutProfile/ChargesInformation";
// import BankInformation from "./BankInformation";
// import LayoutProfileAddress from "./LayoutProfileAddress";
const EditSellerList = () => {
  const searchParams = new URLSearchParams(location.search);
  const CustomerId = searchParams.get("CustomerId");
  const [userdata, setuserdata] = useState(null);
  const [businessInfo, setbusinessInfo] = useState(null);
  const user = useSelector((state) => state.user.user);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  useEffect(() => {
    const FetchUserDetails = async () => {
      const user = await getUserByCustomerIdApi(CustomerId);
      if (user) {
        setuserdata(user.customerDetails);
        setbusinessInfo(user.businessInfo);
      }
    };
    if (CustomerId) {
      FetchUserDetails();
    }
  }, [CustomerId]);

  const DeactivateCustomer = async (customerId, comments) => {
    await DeactivateUserAPI(customerId, comments);
    setNotification({
      show: true,
      message: "User Deactivated Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setCallHistory((prev) => prev + 1);
  };

  const ActivateCustomer = async (customerId, comments) => {
    await ActivateUserAPI(customerId, comments);
    setNotification({
      show: true,
      message: "User Activated Successfully!",
    });

    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setCallHistory((prev) => prev + 1);
  };


  const handleCommentSaveClick = () => {
    if (comments.trim() === "") {
      setNotification({
        show: true,
        message: "Please add a comment before saving!",
      });
  
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      return; // Exit the function early if comments are empty
    }
  
    setNotification({
      show: true,
      message: "Comment Saved Successfully!",
    });
  
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };
  
  const [confirmPassword, setConfirmPassword] = useState(""); // State to track user input

  const [notes, setNotes] = useState("");
  const [submittedNotes, setSubmittedNotes] = useState(null);
  const handleSend = () => {
    setSubmittedNotes(notes); // Save the notes to display below
    setNotes(""); // Clear the TextField after submission
  };
  const profiles = [
    {
      label: "User Details",
      grid: "primary",
    },
    {
      label: "Charges Informations",
      grid: "charges",
    },
  ];

  const userTypes = [
    "Retail Pharmacy",
    "Wholesale Pharmacy",
    "Hospital",
    "Other",
  ];

  const [userType, setUserType] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSelectedValue(""); // Reset UPN Member selection on User Type change
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const [visibleGrid, setVisibleGrid] = useState("primary"); // Default to Primary

  const toggleGrid = (grid) => {
    setVisibleGrid(grid); // Set the visible grid to the selected one
  };

  // bussiness phone
  const [businessPhone, setBusinessPhone] = useState("");

  const [userDetails, setUserDetails] = useState({
    firstName: userdata?.firstName || "",
    lastName: userdata?.lastName || "",
    customerTypeId: userdata?.customerTypeId || "",
    email: userdata?.email || "",
    password: userdata?.password || "",
    mobile: userdata?.mobile || "",
    isUPNMember:
      userdata?.isUPNMember == null
        ? ""
        : userdata?.isUPNMember == 1
        ? "true"
        : "false",
  });

  const [userTypeDetails, setUserTypeDetails] = useState({
    firstName: userdata?.firstName || "",
    lastName: userdata?.lastName || "",
    customerTypeId: userdata?.customerTypeId || "",
    email: userdata?.email || "",
    password: userdata?.password || "",
    mobile: userdata?.mobile || "",
    isUPNMember:
      userdata?.isUPNMember == null
        ? ""
        : userdata?.isUPNMember == 1
        ? "true"
        : "false",
  });

  useEffect(() => {
    setUserDetails({
      firstName: userdata?.firstName || "",
      lastName: userdata?.lastName || "",
      customerTypeId: userdata?.customerTypeId || "",
      email: userdata?.email || "",
      password: userdata?.password || "",
      mobile: userdata?.mobile || "",
      // isUPNMember : userdata?.isUPNMember==null? "":userdata?.isUPNMember==1? "true":"false",
    });
    setUserTypeDetails({
      // firstName: userdata?.firstName || "",
      // lastName: userdata?.lastName || "",
      customerTypeId: userdata?.customerTypeId || "",
      // email: userdata?.email || "",
      // password: userdata?.password || "",
      // mobile: userdata?.mobile || "",
      isUPNMember:
        userdata?.isUPNMember == null
          ? ""
          : userdata?.isUPNMember == 1
          ? "true"
          : "false",
    });
  }, [userdata]);
  console.log(userDetails);
  const handleBusinessPhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedBusinessPhone = input;

    if (input.length > 3 && input.length <= 6) {
      formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 6) {
      formattedBusinessPhone = `${input.slice(0, 3)}-${input.slice(
        3,
        6
      )}-${input.slice(6, 10)}`;
    }

    setBusinessPhone(formattedBusinessPhone);
  };
  // federal tax

  const [federalTax, setFederalTax] = useState("");

  const handleFederalTaxChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedFederalTax = input;

    // Format the input to 77-7777777
    if (input.length > 2) {
      formattedFederalTax = `${input.slice(0, 2)}-${input.slice(2)}`;
    }

    setFederalTax(formattedFederalTax);
  };
  // phone number
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handlePhoneNumberChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    handleInputChange({
      target: {
        name: e.target.name,
        value: formattedPhone,
      },
    });
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

  // tab1
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prev) => !prev); // Toggle edit mode
  };
  const [isUserEditable, setIsUserEditable] = useState(false);

  const handleUserEditClick = () => {
    setIsUserEditable((prev) => !prev); // Toggle edit mode
  };

  const RefreshUser = async () => {
    await getUserByCustomerIdApi(userdata.customerId);
  };
  const handleUserSaveClick = async () => {
    setIsUserEditable(false);
    const usertypeinfo = {
      customerId: userdata.customerId,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      mobile: userDetails.mobile,
      password: userDetails.password,
      customerTypeId: userDetails.customerTypeId,
      // accountTypeId: userDetails.accountTypeId,
      isUPNMember: userTypeDetails.isUPNMember == "true" ? 1 : 0,
      accountTypeId: userdata.accountTypeId,
    };
    console.log(usertypeinfo, "usertypeinfo");
    if (usertypeinfo) {
      await UserInfoUpdate(usertypeinfo);
      await RefreshUser();
    }

    console.log("Data saved:", userDetails); // You can dispatch this to Redux or send it to the backend
    // alert("Data saved successfully!"); // Show notification
    setNotification({
      show: true,
      message: "User Type saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const handleSaveClick = async () => {
    setIsEditable(false);
    const userinfo = {
      customerId: userdata.customerId,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      mobile: userDetails.mobile,
      password: userDetails.password,
      customerTypeId: userDetails.customerTypeId,
      accountTypeId: userDetails.accountTypeId,
      // isUPNMember: userDetails.isUPNMember,
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

  const handleAddressChange = (e) => {
    console.log("Field changed:", e.target.name, e.target.value);
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const [isAccountEdit, setIsAccountEdit] = useState(false);

  const handleAccountEditClick = () => {
    setIsAccountEdit(true);
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

  // tab2
  const [isselectable, setIsselectable] = useState(false);
  const handleselectClick = () => {
    setIsselectable((prev) => !prev); // Toggle edit mode
  };
  // Handle save button click
  const handleSelectClick = () => {
    setIsselectable(false);
    alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({ ...prevData, [name]: value }));
  };

  // tab3

  const [istabable, setIstabable] = useState(false);

  // Function to handle the edit button click
  const handleEdittabClick = () => {
    setIstabable(true); // Enable editing when edit icon is clicked
  };
  // Handle save button click
  const handletabSaveClick = () => {
    setIstabable(false);
    alert("Data saved successfully!"); // Show notification (can replace with your own notification system)
  };

  // tab4
  const [istabedit, setIstabedit] = useState(false);

  const handletabclick = () => {
    setIstabedit(true);
  };
  const handletabesave = () => {
    setIstabedit(false);
  };

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    setNotes(e.target.value); // Update notes state with input value

    setConfirmPassword(e.target.value); // Update state with user input

    // Dispatch an action to update the Redux state here if necessary
    // dispatch(updateUserData({ ...userdata, [name]: value }));

    // For example:
    // dispatch(updateUser({ ...userdata, [name]: value }));
  };
  // const [confirmPassword, setConfirmPassword] = useState(""); // State to track user input

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [historyData, setHistoryData] = useState([]);

  // useEffect(() => {
  //   const CustomerActivateDeactivateAPI = async () => {
  //     try {
  //       const customer = await fetchCustomerActivateDeactivateById(CustomerId);
  //       console.log("Fetched customer data:", customer);
  //       setHistoryData(Array.isArray(customer) ? customer : []);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   CustomerActivateDeactivateAPI();
  // }, [CustomerId, historyData]);
  const [CallHistory, setCallHistory] = useState(0);
  useEffect(() => {
    const CustomerActivateDeactivateAPI = async () => {
      try {
        const customer = await fetchCustomerActivateDeactivateById(CustomerId);

        const sortedData = Array.isArray(customer)
          ? customer.sort(
              (a, b) => new Date(b.auditDate) - new Date(a.auditDate)
            )
          : [];

        setHistoryData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };

    CustomerActivateDeactivateAPI();
  }, [CustomerId, CallHistory]);

  // console.log("ppppp", historyData);

  const [comments, setComments] = useState("");

  // 2. Create the handleCommentsChange function
  const handleCommentsChange = (event) => {
    setComments(event.target.value); // Update comments state with input value
  };

  const [upnMember, setUpnMember] = useState(0);

  // Function to handle changes in radio button selection
  const handleUpnChange = (event) => {
    setUserTypeDetails({ ...userDetails, isUPNMember: event.target.value });
    setUpnMember(Number(event.target.value)); // Ensure the value is a number (0 or 1)
  };

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Update the value of the corresponding field
    }));
  };

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
          {profiles.map((profile) => (
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
          ))}
        </div>

        {/* Primary Grid */}
        {visibleGrid === "primary" && (
          <div>
            <h1 className="text-xl text-blue-900 font-semibold mt-4 ml-6 ">
              Primary
            </h1>

            <div
              className={`bg-white border  mx-6 ${
                isEditable ? "border-blue-900" : "border-gray-400"
              } rounded-lg px-8 w-[90%] mt-8 relative`}
            >
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
                    // id="outlined-size-small"
                    value={userDetails?.firstName} // Ensure it handles null or undefined
                    name="firstName" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Email ID"
                    // id="outlined-size-small"
                    value={userDetails?.email} // Ensure it handles null or undefined
                    name="email" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                  <TextField
                    label="Password"
                    // id="outlined-size-small"
                    value={userDetails?.password} // Ensure it handles null or undefined
                    name="password" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="py-4 gap-4 flex-col flex">
                  <TextField
                    label="Last Name"
                    // id="outlined-size-small"
                    value={userDetails?.lastName} // Ensure it handles null or undefined
                    name="lastName" // Use camelCase for the name
                    onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />

                  <TextField
                    label="Phone Number"
                    name="mobile"
                    value={userDetails?.mobile} // Ensure value is not undefined
                    onChange={handlePhoneNumberChange}
                    size="small"
                    className="w-full"
                    disabled={!isEditable} // Disable unless in edit mode
                    inputProps={{ maxLength: 12 }} // Limit the max length to 12 (including dashes)
                    // InputLabelProps={{
                    //   shrink: !!userDetails?.mobile, // Shrink the label if there is a value
                    // }}
                  />
                </div>

                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleEditClick} // Handle edit icon click
                    alt="Edit" // Add alt text for accessibility
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                      !isEditable ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleSaveClick}
                    disabled={!isEditable} // Disable button when not editable/ Save button is disabled if not editable
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="bg-white border border-gray-400  p-6 mx-6 rounded-lg px-8 w-[90%] mt-8 relative mb-4">
              <h1 className="text-blue-900 font-semibold text-xl">User Type</h1> */}
            <div
              className={`bg-white border mx-6 ${
                isUserEditable ? "border-blue-900" : "border-gray-400"
              } rounded-lg px-8 w-[90%] mt-8 relative`}
            >
              {isUserEditable && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  User Type
                </h1>
              )}

              <h1
                className={`text-xl font-semibold my-2 ${
                  isUserEditable ? "invisible" : "text-blue-900"
                }`}
              >
                User Type
              </h1>
              <div className="flex justify-between">
                <div className="mt-2">
                  {/* Editable dropdown for User Type */}
                  {isUserEditable ? (
                    <FormControl className="ml-3" size="small" fullWidth>
                      <InputLabel id="customerTypeId-label">
                        User type
                      </InputLabel>
                      <Select
                        labelId="customerTypeId-label"
                        label="User type"
                        id="customerTypeId"
                        name="customerTypeId"
                        value={userDetails.customerTypeId}
                        onChange={handleUserChange}
                      >
                        {Object.entries(customerTypeLabels).map(
                          ([key, label]) => (
                            <MenuItem key={key} value={Number(key)}>
                              {label}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  ) : (
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
                  )}

                  {/* UPN Member Section */}
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 2 &&
                    userdata?.customerTypeId !== 3 && (
                      <div className="my-2">
                        <label className="mr-3">UPN Member</label>

                        <input
                          type="radio"
                          id="yes"
                          value="true"
                          checked={userTypeDetails.isUPNMember == "true"}
                          onChange={handleUpnChange}
                          className="mr-2"
                          disabled={!isUserEditable}
                        />
                        <label className="mr-2" htmlFor="yes">
                          Yes
                        </label>

                        <input
                          type="radio"
                          id="no"
                          value="false"
                          checked={userTypeDetails.isUPNMember == "false"}
                          onChange={handleUpnChange}
                          className="mr-2"
                          disabled={!isUserEditable}
                        />
                        <label className="mr-2" htmlFor="no">
                          No
                        </label>
                      </div>
                    )}
                </div>

                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleUserEditClick} // Handle edit icon click
                    alt="Edit" // Add alt text for accessibility
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                      !isUserEditable ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleUserSaveClick}
                    disabled={!isUserEditable} // Disable button when not editable
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="bg-white border  flex justify-between flex-col border-gray-400 rounded-lg  px-8 mx-6 w-[90%] mt-4"> */}

            {/* <div className="button-group"></div> */}

            <div
              className={`bg-white border  mx-6 ${
                isAddressEdit ? "border-blue-900" : "border-gray-400"
              } rounded-lg px-8 w-[90%] mt-8 relative`}
            >
              {isAddressEdit && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  Address Information
                </h1>
              )}
              {/* <h1 className="text-xl font-semibold text-blue-900 my-2">
                Address Information
              </h1> */}
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
                        name="shopName" // Make sure the name is correct if it's used elsewhere
                        // disabled={!istabable}
                        value={addressData?.shopName || ""} // Use optional chaining to avoid errors
                        disabled={!isAddressEdit}
                        onChange={handleAddressChange}
                        size="small"
                        className="w-full" // Uncomment or modify this line as needed
                      />
                    )}
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 2 &&
                    userdata?.customerTypeId !== 3 && (
                      <TextField
                        label="DBA Name"
                        name="dba"
                        // disabled={!istabable}
                        onChange={handleAddressChange}
                        disabled={!isAddressEdit}
                        value={addressData?.dba || ""}
                        size="small"
                      />
                    )}
                  <TextField
                    label="City"
                    // id="outlined-size-small"
                    name="city"
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    value={addressData?.city || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    // className="w-full"
                  />
                  <TextField
                    label="Zip"
                    // id="outlined-size-small"
                    name="zip"
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    value={addressData?.zip || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    // className="w-full"
                  />
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Business Fax"
                      // id="outlined-size-small"
                      name="businessFax"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.businessFax || ""}
                      // onChange={handleInputChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      // className="w-full"
                    />
                  )}

                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Company Website"
                      id="outlined-size-small"
                      name="companyWebsite"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.companyWebsite || ""}
                      // onChange={handleInputChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      // className="w-full"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Legal Business Name"
                      id="outlined-size-small"
                      name="legalBusinessName"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.legalBusinessName || ""}
                      // onChange={handleInputChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      // className="w-full"
                    />
                  )}
                  <TextField
                    label="Address"
                    id="outlined-size-small"
                    name="address"
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    value={addressData?.address || ""}
                    // onChange={handleInputChange}
                    // error={!!errors.First_Name}
                    // helperText={errors.First_Name}

                    size="small"
                    // className="w-full"
                  />

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
                      id="outlined-size-small"
                      name="businessEmail"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.businessEmail || ""}
                      size="small"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-between py-2">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleAddressEditClick} // Handle edit icon click
                  />
                  <button
                    className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                      !isAddressEdit ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleAddressSaveClick}
                    disabled={!isAddressEdit} // Disable button when not editable// Save button is disabled if not editable
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            {userdata?.customerTypeId !== 4 && (
              <div
                className={`bg-white border mx-6 ${
                  isAccountEdit ? "border-blue-900" : "border-gray-400"
                } rounded-lg px-8 w-[90%] mt-8 relative mb-4`}
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
                      id="outlined-size-small"
                      name="dea"
                      value={accountData?.dea || ""}
                      onChange={handleAccountChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}
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
                      // id="outlined-size-small"
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
                        className="text-blue-500 underline text-sm  -mt-3"
                      >
                        View DEA License Copy
                      </a>
                    )}
                    <TextField
                      label="NPI"
                      // id="outlined-size-small"
                      name="npi"
                      disabled={!isAccountEdit}
                      value={accountData?.npi || ""}
                      onChange={handleAccountChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      className="w-[60%] mt-3"
                    />
                    <TextField
                      label="Federal Tax"
                      // id="outlined-size-small"
                      name="federalTaxId"
                      value={accountData?.federalTaxId || ""}
                      // onChange={handleFederalTaxChange}
                      onChange={handleAccountChange}
                      size="small"
                      className="w-[60%]"
                      disabled={!isAccountEdit} // Disable unless in edit mode
                      inputProps={{ maxLength: 10 }} // Limit max length to 10 (including the dash)
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <TextField
                      label="Pharmacy License"
                      // id="outlined-size-small"
                      name="pharmacyLicence"
                      disabled={!isAccountEdit}
                      value={accountData?.pharmacyLicence || ""}
                      onChange={handleAccountChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      className="w-[60%]"
                    />
                    <label> Pharmacy License Expiration Date </label>

                    <TextField
                      label=""
                      type="date"
                      // id="outlined-size-small"
                      name="pharmacyLicenseExpirationDate"
                      disabled={!isAccountEdit}
                      value={
                        accountData.pharmacyLicenseExpirationDate
                          ? formatDate(
                              accountData.pharmacyLicenseExpirationDate
                            )
                          : ""
                      } // Extracts the "YYYY-MM-DD" portion
                      // onChange={handleInputChange}
                      onChange={handleAccountChange}
                      size="small"
                      className="w-[60%]"
                    />

                    <label>Pharmacy License Expiration File</label>
                    <TextField
                      label=""
                      type="file"
                      // id="outlined-size-small"
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
                        className="text-blue-500 underline text-sm -mt-3"
                      >
                        View Pharmacy License Copy
                      </a>
                    )}
                    <TextField
                      label="NCPDP"
                      // id="outlined-size-small"
                      name="ncpdp"
                      disabled={!isAccountEdit}
                      value={accountData?.ncpdp || ""}
                      onChange={handleAccountChange}
                      // error={!!errors.First_Name}
                      // helperText={errors.First_Name}

                      size="small"
                      className="w-[60%] mt-3"
                    />
                  </div>

                  <div className="flex flex-col justify-between py-2">
                    <img
                      src={edit}
                      className="w-6 h-6 ml-4"
                      onClick={handleAccountEditClick}
                    />
                    <button
                      // className="bg-blue-900 text-white p-1 w-16 rounded-md font-semibold"
                      className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${
                        !isAccountEdit ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      // Disable button when not editable
                      onClick={handleAccountSaveClick}
                      disabled={!isAccountEdit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-between  rounded-lg mx-8 w-[90%] mt-4">
              {/* TextField for input */}

              <TextField
                label="Add Comments" // Updated label to "Add Comments"
                id="outlined-size-small"
                value={comments} // Set input value from state
                name="comments"
                onChange={handleCommentsChange} // Handles input change
                size="small"
                className="w-[99%] m-2 bg-white border"
                multiline
                rows={4}
              />
            
              <button
  onClick={handleCommentSaveClick}
  className={`w-1/5 m-2 py-2 px-4 rounded-lg transition duration-200 ${
    comments.trim()
      ? "bg-blue-900 text-white hover:bg-blue-800"
      : "bg-gray-400 text-gray-200 cursor-not-allowed"
  }`}
  disabled={!comments.trim()} // Disable if comments are empty
>
  Save
</button>

              {/* Button to submit the notes */}
            </div>

            {/* </div> */}

            <div className="flex justify-between flex-col  rounded-lg  px-8  w-[95%] mt-4">
              <div className="button-group">
                <Button
                  onClick={() => ActivateCustomer(CustomerId, comments)}
                  className={`mr-2 text-white ${
                    userdata?.isActive === 1
                      ? "bg-green-500 cursor-not-allowed opacity-50"
                      : "bg-green-500"
                  }`}
                  disabled={userdata?.isActive === 1} // Disable the button if isActive is 1
                >
                  Activate
                </Button>

                <Button
                  onClick={() => DeactivateCustomer(CustomerId, comments)}
                  className={`mr-2 text-white ${
                    userdata?.isActive === 0
                      ? "bg-red-500 cursor-not-allowed opacity-50"
                      : "bg-red-500"
                  }`}
                  disabled={userdata?.isActive === 0} // Disable the button if isActive is 0
                >
                  Deactivate
                </Button>

                <Button
                  // variant="filled" // Replaced "contained" with "filled"
                  // color="default"
                  className="mr-2  bg-blue-900 text-white"
                  // onClick={handleSendEmail} // Function to handle sending email
                >
                  Send Email
                </Button>

                <Button
                  // variant="filled" // Replaced "contained" with "filled"
                  className="ml-2  bg-gray-400 text-white"
                  // color="default"
                  component="label" // Allows the button to trigger a file upload
                >
                  Load Supporting Documents
                  <input
                    type="file"
                    hidden

                    // Hide the default input element
                    // onChange={handleFileUpload} // Function to handle file upload
                  />
                </Button>
              </div>
            </div>
            {/* {submittedNotes && ( */}
            <div className=" flex justify-between flex-col  rounded-lg  px-8  w-[90%]  my-4">
              <div className="data-group bg-white p-4 rounded-lg">
                {/* {submittedNotes} */}
                {historyData.length > 0 ? (
                  historyData.map((item, index) => (
                    <div key={index}>
                      <div className="data-item flex flex-col">
                        <div className="flex gap-1">
                          <label className="font-bold">Date: </label>
                          <span>
                            {
                              new Date(item.auditDate)
                                .toLocaleDateString("en-us", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                })
                                .replace(/\//g, "-")
                              // .toISOString()
                              // .split("T")[0]
                            }
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <label className="font-bold"> User:</label>
                          <span>
                            {user?.firstName}&nbsp;{user?.lastName}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <label className="font-bold">Action:</label>
                          <span>{item.action}</span>
                        </div>
                      </div>
                      <div className="data-item flex flex-row gap-2 ">
                        <label className="font-bold">Comments:</label>
                        <span>{item.comments}</span>
                      </div>
                      <span>
                        ______________________________________________________
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No history data available.</p>
                )}
              </div>
            </div>
            {/* )} */}
          </div>
        )}

        {/* * Bank Information Grid */}
        {visibleGrid === "charges" && (
          <div
          //  className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4"
          >
            <ChargesInformations />
          </div>
        )}

        {/* Address Grid */}
        {/* {visibleGrid === "address" && (
          <div */}
        {/* // className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4" */}
        {/* > */}
        {/* Your address details grid here */}
        {/* <LayoutProfileAddress /> */}
        {/* </div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default EditSellerList;
