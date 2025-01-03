import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import edit from "../../../assets/Edit.png";
import { useDispatch, useSelector } from "react-redux";
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
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import {
  addCommentsApi,
  AdminChargesGetApi,
  fetchCommentsByadmin,
} from "../../../Api/AdminApi";

// import ChargesInformation from "../../LayoutPage/LayoutProfile/ChargesInformation";
// import BankInformation from "./BankInformation";
// import LayoutProfileAddress from "./LayoutProfileAddress";
const EditSellerList = () => {
  const searchParams = new URLSearchParams(location.search);
  const CustomerId = searchParams.get("CustomerId");
  const [userdata, setuserdata] = useState(null);
  const [businessInfo, setbusinessInfo] = useState(null);
  const user = useSelector((state) => state.user.user);
  const [isRefresh, setisRefresh] = useState(0);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  useEffect(() => {
    const FetchUserDetails = async () => {
      const user = await getUserByCustomerIdApi(CustomerId);
      if (user) {
        console.log("user fetched");
        setuserdata(user.customerDetails);
        setbusinessInfo(user.businessInfo);
      }
    };
    if (CustomerId) {
      FetchUserDetails();
    }
  }, [CustomerId, isRefresh]);
  console.log(isRefresh);
  // const DeactivateCustomer = async (customerId, comments) => {
  //   await DeactivateUserAPI(customerId, comments);
  //   setNotification({
  //     show: true,
  //     message: "User Deactivated Successfully!",
  //   });
  //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   setCallHistory((prev) => prev + 1);
  // };

  // const ActivateCustomer = async (customerId, comments) => {
  //   await ActivateUserAPI(customerId, comments);
  //   setNotification({
  //     show: true,
  //     message: "User Activated Successfully!",
  //   });

  //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   setCallHistory((prev) => prev + 1);
  // };

  // const handleCommentSaveClick = () => {
  //   if (usercomment.trim() === "") {
  //     setNotification({
  //       show: true,
  //       message: "Please add a comment before saving!",
  //     });

  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     return; // Exit the function early if comments are empty
  //   }
  //   setUserComment((prevComments) => [...prevComments, usercomment.trim()]);

  //   setNotification({
  //     show: true,
  //     message: "Comment Saved Successfully!",
  //   });
  //   setUsercomment("");
  //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  // };

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

  // const handlePhoneNumberChange = (e) => {
  //   const formattedPhone = formatPhoneNumber(e.target.value);
  //   handleInputChange({
  //     target: {
  //       name: e.target.name,
  //       value: formattedPhone,
  //     },
  //   });
  // };

  const handlePhoneNumberChange = (e) => {
    const { name, value } = e.target;

    // Format the phone number (assuming you have a formatPhoneNumber function)
    const formattedPhone = formatPhoneNumber(value);

    // Call the common input handler
    handleInputChange({
      target: {
        name,
        value: formattedPhone,
      },
    });

    // Field required validation for phone number
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim().length === 0 ? "Phone Number is required" : "", // Show error if empty
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
    setisRefresh((item) => item + 1);
    // await getUserByCustomerIdApi(userdata.customerId);
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
    const errors = {};
    if (!userDetails.firstName?.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!userDetails.lastName?.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (
      !userDetails.email?.trim() ||
      !/^\S+@\S+\.\S+$/.test(userDetails.email)
    ) {
      errors.email = "Valid email is required";
    }
    const phoneNumber = userDetails.mobile?.replace(/\D/g, ""); // Remove non-numeric characters (dashes, spaces)

    if (!phoneNumber || phoneNumber.length !== 10) {
      errors.mobile = "Valid 10-digit mobile number is required";
    }

    // Update the errors state
    setErrors(errors);

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

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
    // Validation logic
    const validationErrors = {};
    if (![4, 3, 2].includes(userdata?.customerTypeId)) {
      if (!addressData.shopName?.trim()) {
        validationErrors.shopName = "Shop Name is required";
      }
    }
    if (![4, 3, 2].includes(userdata?.customerTypeId)) {
      if (!addressData.dba?.trim()) {
        validationErrors.dba = "DBA is required";
      }
    }

    if (!addressData.address?.trim()) {
      validationErrors.address = "Address is required";
    }
    if (!addressData.city?.trim()) {
      validationErrors.city = "City is required";
    }
    if (![4].includes(userdata?.customerTypeId)) {
      if (!addressData.legalBusinessName?.trim()) {
        validationErrors.legalBusinessName = "Legal Business Name is required";
      }
    }
    // if (!addressData.legalBusinessName?.trim()) {
    //   validationErrors.legalBusinessName = "Legal Business Name is required";
    // }
    if (!addressData.state?.trim()) {
      validationErrors.state = "State is required";
    }
    if (!addressData.zip?.trim()) {
      validationErrors.zip = "Zip is required";
    } else if (!/^\d{5}$/.test(addressData.zip.trim())) {
      validationErrors.zip = "Zip must be exactly 5 digits";
    }
    if (![4].includes(userdata?.customerTypeId)) {
      if (!addressData.businessPhone?.trim()) {
        validationErrors.businessPhone = "Business Phone is required";
      } else {
        // Remove non-digit characters before validation
        const phoneDigits = addressData.businessPhone.replace(/\D/g, ""); // Strip non-numeric characters
        if (phoneDigits.length !== 10) {
          validationErrors.businessPhone =
            "Business Phone must be exactly 10 digits";
        }
      }
    }

    if (![4].includes(userdata?.customerTypeId)) {
      if (!addressData.businessFax?.trim()) {
        validationErrors.businessFax = "Business Fax is required";
      } else {
        // Remove non-digit characters before validation
        const phoneDigits = addressData.businessFax.replace(/\D/g, ""); // Strip non-numeric characters
        if (phoneDigits.length !== 10) {
          validationErrors.businessFax =
            "Business Fax must be exactly 10 digits";
        }
      }
    }
    if (![4].includes(userdata?.customerTypeId)) {
      if (!addressData.businessEmail?.trim()) {
        validationErrors.businessEmail = "Business Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addressData.businessEmail.trim())
      ) {
        validationErrors.businessEmail = "Enter a valid email address";
      }
    }

    if (![4].includes(userdata?.customerTypeId)) {
      if (!addressData.companyWebsite?.trim()) {
        validationErrors.companyWebsite = "Company Website is required";
      } else if (
        !/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
          addressData.companyWebsite.trim()
        )
      ) {
        validationErrors.companyWebsite = "Enter a valid website";
      }
    }

    // if (!addressData.companyWebsite?.trim()) {
    //   validationErrors.companyWebsite = "Company Website is required";
    // } else if (
    //   !/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
    //     addressData.companyWebsite.trim()
    //   )
    // ) {
    //   validationErrors.companyWebsite = "Enter a valid website";
    // }

    // Set validation errors
    setErrors(validationErrors);

    // If there are validation errors, prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation errors:", validationErrors);
      return;
    }

    // If validation passes, proceed with saving the data
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
      console.log("Before submit:", businessInfoObj);
      await BusinessInfoUpdate(businessInfoObj);
      await RefreshUser();
    }

    // Show success notification
    setNotification({
      show: true,
      message: "Address information saved successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  // const handleAddressChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddressData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));

  //   // Clear any error when the field value changes
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: value.trim() === "" ? `${name} is required` : "",
  //   }));
  // };

  // const handleAddressChange = (e) => {
  //   const { name, value } = e.target;
  //   let error = "";

  //   if (name === "businessPhone" || name === "businessFax") {
  //     const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters

  //     if (digitsOnly.length > 10) {
  //       return; // Prevent more than 10 digits
  //     }

  //     setAddressData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));

  //     if (digitsOnly.trim() === "") {
  //       error = `${name === "businessPhone" ? "Business Phone" : "Business Fax"} is required`;
  //     } else if (digitsOnly.length !== 10) {
  //       error = `${name === "businessPhone" ? "Business Phone" : "Business Fax"} must be exactly 10 digits`;
  //     }
  //   }
  //    else if (name === "businessEmail") {
  //     setAddressData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));

  //     if (value.trim() === "") {
  //       error = "Business Email is required";
  //     } else if (
  //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) // Basic email regex
  //     ) {
  //       error = "Enter a valid email address";
  //     }
  //   } else {
  //     setAddressData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));

  //     error = value.trim() === "" ? `${name} is required` : "";
  //   }

  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: error,
  //   }));
  // };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "businessPhone" || name === "businessFax") {
      const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters

      if (digitsOnly.length > 10) {
        return; // Prevent more than 10 digits
      }

      setAddressData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (digitsOnly.trim() === "") {
        error = `${
          name === "businessPhone" ? "Business Phone" : "Business Fax"
        } is required`;
      } else if (digitsOnly.length !== 10) {
        error = `${
          name === "businessPhone" ? "Business Phone" : "Business Fax"
        } must be exactly 10 digits`;
      }
    } else if (name === "businessEmail") {
      setAddressData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (value.trim() === "") {
        error = "Business Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) // Basic email regex
      ) {
        error = "Enter a valid email address";
      }
    } else if (name === "companyWebsite") {
      setAddressData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (value.trim() === "") {
        error = "Company Website is required";
      } else if (!/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
        error = "Enter a valid website (e.g., www.company.com)";
      }
    } else {
      setAddressData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      error = value.trim() === "" ? `${name} is required` : "";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error, // Set or clear the error for the specific field
    }));
  };

  // const handleAddressChange = (e) => {
  //   console.log("Field changed:", e.target.name, e.target.value);
  //   const { name, value } = e.target;
  //   setAddressData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
  //     setAccountData((prevData) => ({
  //       ...prevData,
  //       deaLicenseCopy: fileUrl, // Update state with the selected file URL
  //     }));
  //   }
  // };

  // const handleFileChangePharma = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
  //     setAccountData((prevData) => ({
  //       ...prevData,
  //       pharmacyLicenseCopy: fileUrl, // Update state with the selected file URL
  //     }));
  //   }
  // };

  const [fileErrorDEA, setFileErrorDEA] = useState(""); // Separate error for DEA
  const [fileErrorPharma, setFileErrorPharma] = useState(""); // Separate error for Pharmacy License

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "application/pdf",
      ]; // Allowed file types

      // Check file type
      if (!allowedTypes.includes(file.type)) {
        setFileErrorDEA("File must be in JPG, PNG, JPEG, or PDF format.");
        return;
      }

      // Check file size
      if (file.size > maxSizeInBytes) {
        setFileErrorDEA("File size must be less than 5MB.");
        return;
      }

      setFileErrorDEA(""); // Clear any previous error

      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(file);

      // Update the account data with the file URL
      setAccountData((prevData) => ({
        ...prevData,
        deaLicenseCopy: fileUrl,
      }));
    }
  };

  const handleFileChangePharma = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "application/pdf",
      ]; // Allowed file types

      // Check file type
      if (!allowedTypes.includes(file.type)) {
        setFileErrorPharma("File must be in JPG, PNG, JPEG, or PDF format.");
        return;
      }

      // Check file size
      if (file.size > maxSizeInBytes) {
        setFileErrorPharma("File size must be less than 5MB.");
        return;
      }

      setFileErrorPharma(""); // Clear any previous error

      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(file);

      // Update the account data with the file URL
      setAccountData((prevData) => ({
        ...prevData,
        pharmacyLicenseCopy: fileUrl,
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
  console.log("account", accountData);
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
    const newErrors = {};
    if (!accountData.dea?.trim()) {
      newErrors.dea = "DEA is required.";
    }
    if (!accountData.pharmacyLicence?.trim()) {
      newErrors.pharmacyLicence = "Pharmacy License is required.";
    }
    if (!accountData.npi?.trim()) {
      newErrors.npi = "NPI is required.";
    }
    if (!accountData.ncpdp?.trim()) {
      newErrors.ncpdp = "NCPDP is required.";
    }
    if (!accountData.federalTaxId?.trim()) {
      newErrors.federalTaxId = "Federal Tax ID is required.";
    } else if (accountData.federalTaxId.replace(/[^0-9]/g, "").length < 9) {
      newErrors.federalTaxId = "Federal Tax must be 9 digits.";
    }

    if (!accountData.deaExpirationDate?.trim()) {
      newErrors.deaExpirationDate = "DEA Expiration Date is required.";
    }
    if (!accountData.pharmacyLicenseExpirationDate?.trim()) {
      newErrors.pharmacyLicenseExpirationDate =
        "Pharmacy License Expiration Date is required.";
    }

    const deaFile = document.querySelector('input[name="deaLicenseCopy"]')
      ?.files[0];
    if (deaFile) {
      // Check file size
      if (deaFile.size > 5 * 1024 * 1024) {
        newErrors.deaLicenseCopy = "DEA License Copy must be less than 5MB.";
      }
      // Check file type
      const validFileTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validFileTypes.includes(deaFile.type)) {
        newErrors.deaLicenseCopy =
          "DEA License Copy must be in JPG, PNG, JPEG, or PDF format.";
      }
    }

    // File size validation for pharmacyLicenseCopy
    const pharmacyFile = document.querySelector(
      'input[name="pharmacyLicenseCopy"]'
    )?.files[0];
    if (pharmacyFile) {
      // Check file size
      if (pharmacyFile.size > 5 * 1024 * 1024) {
        newErrors.pharmacyLicenseCopy =
          "Pharmacy License Copy must be less than 5MB.";
      }
      // Check file type
      const validFileTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validFileTypes.includes(pharmacyFile.type)) {
        newErrors.pharmacyLicenseCopy =
          "Pharmacy License Copy must be in JPG, PNG, JPEG, or PDF format.";
      }
    }

    // Check if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update error state
      console.log("Validation errors:", newErrors);
      return; // Stop execution if validation fails
    }
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

  // const handleAccountChange = (e) => {
  //   const { name, value } = e.target;
  //   setAccountData((prevData) => ({ ...prevData, [name]: value }));
  // };
  const handleAccountChange = (e) => {
    const { name, value } = e.target;

    // Dynamic field label mapping
    const fieldLabels = {
      dea: "DEA",
      pharmacyLicence: "Pharmacy License",
      npi: "NPI",
      ncpdp: "NCPDP",
      deaExpirationDate: "DEA Expiration Date",
      pharmacyLicenseExpirationDate: "Pharmacy License Expiration Date",
      federalTaxId: "Federal Tax", // Add federalTaxId label
    };

    let sanitizedValue = value;

    // For the federalTaxId field, enforce specific validation format (12-3456789)
    if (name === "federalTaxId") {
      // Allow only numbers and hyphen
      sanitizedValue = value.replace(/[^0-9-]/g, "");

      // Enforce format of 2 digits, hyphen, and 7 digits (e.g., 12-3456789)
      if (sanitizedValue.length > 2 && sanitizedValue[2] !== "-") {
        sanitizedValue =
          sanitizedValue.substring(0, 2) + "-" + sanitizedValue.substring(2); // Insert hyphen after 2 digits
      }

      // const regex = /^\d{2}-\d{7}$/; // Regex for 12-3456789 format

      // Check if the field is empty (required check)
      if (sanitizedValue.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Federal Tax is required.",
        }));
      } else if (sanitizedValue.length < 10) {
        // If the length is less than 9 digits, show the "must be 9 digits" error
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Federal Tax must be 9 digits.",
        }));
      } else {
        // Clear errors if valid
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    } else {
      // For other fields, filter out non-alphanumeric characters
      if (["dea", "pharmacyLicence", "npi", "ncpdp"].includes(name)) {
        sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
      }

      // Validation: Check if the field is required
      if (
        sanitizedValue.trim() === "" ||
        (name.includes("ExpirationDate") && !sanitizedValue)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: `${fieldLabels[name] || "This field"} is required.`,
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error if valid
      }
    }

    // Update state with sanitized value or raw value for dates
    setAccountData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
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
  const [errors, setErrors] = useState({});

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserDetails({ ...userDetails, [name]: value });
  //   setNotes(e.target.value); // Update notes state with input value

  //   setConfirmPassword(e.target.value); // Update state with user input

  // };

  const validateNameInput = (value) => /^[a-zA-Z0-9']*$/.test(value);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate firstName and lastName inputs (only letters and apostrophes)
    if (
      (name === "firstName" || name === "lastName") &&
      !validateNameInput(value) &&
      value !== ""
    ) {
      return; // Exit if input is invalid
    }

    // Validate email format
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Please enter a valid email address",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    // Update userDetails state
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));

    // Update specific states for notes and confirmPassword
    if (name === "notes") {
      setNotes(value); // Update notes state
    }

    if (name === "confirmPassword") {
      setConfirmPassword(value); // Update confirmPassword state
    }

    // Field required validation
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        value.trim().length === 0
          ? `${
              name === "firstName"
                ? "First Name"
                : name === "lastName"
                ? "Last Name"
                : name === "email"
                ? "Email"
                : "This field"
            } is required`
          : "",
    }));
  };

  // Email validation function
  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
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
  const [usercomment, setUserComment] = useState([]);

  const handleuserCommentsChange = (event) => {
    setUserComment(event.target.value); // Update comments state with input value
  };
  // const handleCommentSaveClick = () => {
  //   if (usercomment.trim() === "") {
  //     setNotification({
  //       show: true,
  //       message: "Please add a comment before saving!",
  //     });

  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     return; // Exit the function early if comments are empty
  //   }
  //   setUserComment((prevComments) => [...prevComments, usercomment.trim()]);

  //   setNotification({
  //     show: true,
  //     message: "Comment Saved Successfully!",
  //   });
  //   setUsercomment("");
  //   setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  // };

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

  const [showPopup, setShowPopup] = useState(false);
  const [actionType, setActionType] = useState(""); // "activate" or "deactivate"

  const handleOpenPopup = (type) => {
    setActionType(type);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setComments("");
  };

  const handleSave = async () => {
    if (actionType === "activate") {
      await ActivateCustomer(CustomerId, comments);
    } else if (actionType === "deactivate") {
      await DeactivateCustomer(CustomerId, comments);
    }
    handleClosePopup();
  };

  const DeactivateCustomer = async (customerId, comments) => {
    await DeactivateUserAPI(customerId, comments);
    RefreshUser();
    setNotification({
      show: true,
      message: "User Deactivated Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setCallHistory((prev) => prev + 1);
  };

  const ActivateCustomer = async (customerId, comments) => {
    await ActivateUserAPI(customerId, comments);
    RefreshUser();

    setNotification({
      show: true,
      message: "User Activated Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setCallHistory((prev) => prev + 1);
  };

  const [usercomments, setUserComments] = useState([]); // Array to store comments
  const [currentComment, setCurrentComment] = useState(""); // Temporary input value

  const handleUserCommentsChange = (event) => {
    setCurrentComment(event.target.value); // Update temporary comment value
  };

  const handleCommentSaveClick = async () => {
    const commentData = {
      customerId: userdata.customerId,
      comments: currentComment,
      action: "Comment Added",
      updatedBy: user.customerId,
    };

    try {
      await addCommentsApi(commentData);
      setNotification({
        show: true,
        message: "Comment added Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setCallHistory((prev) => prev + 1);
      setCurrentComment(""); // Clear input field
    } catch (error) {
      console.error("Error adding comments:", error);
    }
  };
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.comments);
  console.log("ccccc", comment);
  const fetchCharges = async () => {
    try {
      const res = await dispatch(AdminChargesGetApi(CustomerId));
      console.log(res,"charges response");
    } catch (error) {
      console.error("Error fetching charges:", error);
    }
  };
  const GetCharges = useSelector((state) => state.charges.getCharges);
  useEffect(() => {
    console.log(CustomerId,"heyehy")
    if(CustomerId)
      fetchCharges();
  }, [CustomerId])
  
  return (
    <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
        {/* Render Profile Buttons */}
        {/* <div className="flex">
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
        </div> */}
        <div className="flex">
          {profiles.map(
            (profile) =>
              (profile.label !== "Charges Informations" ||
                userDetails?.customerTypeId !== 4) && (
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
                    value={userDetails?.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                    error={!!errors.firstName} // Highlight field in error
                    helperText={errors.firstName} // Display error message
                  />
                  <TextField
                    label="Email ID"
                    value={userDetails?.email}
                    name="email"
                    // onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                    error={!!errors.email} // Highlight the email field in case of error
                    helperText={errors.email} // Display error message for invalid email
                  />

                  <TextField
                    label="Password"
                    // id="outlined-size-small"
                    value={userDetails?.password} // Ensure it handles null or undefined
                    name="password" // Use camelCase for the name
                    // onChange={handleInputChange} // Handle input change
                    disabled={!isEditable} // Disable field unless in edit mode
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="py-4 gap-4 flex-col flex">
                  <TextField
                    label="Last Name"
                    value={userDetails?.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-full"
                    error={!!errors.lastName} // Highlight field in error
                    helperText={errors.lastName}
                  />

                  <TextField
                    label="Phone Number"
                    name="mobile"
                    value={userDetails?.mobile || ""} // Ensure value is not undefined
                    // onChange={handlePhoneNumberChange}
                    size="small"
                    className="w-full"
                    disabled={!isEditable} // Disable unless in edit mode
                    inputProps={{ maxLength: 12 }} // Limit max length to 12 (including dashes)
                    error={!!errors.mobile} // Display error if there is a validation message for 'mobile'
                    helperText={errors.mobile} // Display the error message for the mobile number
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
                        name="shopName"
                        value={addressData?.shopName || ""}
                        disabled={!isAddressEdit}
                        onChange={handleAddressChange}
                        size="small"
                        className="w-full"
                        error={!!errors.shopName} // Show error state
                        helperText={errors.shopName} // Display the error message
                      />
                    )}
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 2 &&
                    userdata?.customerTypeId !== 3 && (
                      <TextField
                        label="DBA Name"
                        name="dba"
                        value={addressData?.dba || ""}
                        disabled={!isAddressEdit}
                        onChange={handleAddressChange}
                        size="small"
                        className="w-full"
                        error={!!errors.dba} // Show error state
                        helperText={errors.dba} // Display the error message
                      />
                    )}
                  {/* <TextField
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
                  /> */}
                  <TextField
                    label="City"
                    name="city"
                    value={addressData?.city || ""}
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    size="small"
                    className="w-full"
                    error={!!errors.city} // Show error state
                    helperText={errors.city} // Display the error message
                  />
                  {/* <TextField
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
                  /> */}
                  <TextField
                    label="Zip"
                    name="zip"
                    value={addressData?.zip || ""}
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    size="small"
                    className="w-full"
                    error={!!errors.zip} // Show error state
                    helperText={errors.zip} // Display the error message
                  />
                  {userdata?.customerTypeId !== 4 && (
                    // <TextField
                    //   label="Business Fax"
                    //   // id="outlined-size-small"
                    //   name="businessFax"
                    //   disabled={!isAddressEdit}
                    //   onChange={handleAddressChange}
                    //   value={addressData?.businessFax || ""}
                    //   // onChange={handleInputChange}
                    //   // error={!!errors.First_Name}
                    //   // helperText={errors.First_Name}

                    //   size="small"
                    //   // className="w-full"
                    // />
                    <TextField
                      label="Business Fax"
                      name="businessFax"
                      value={addressData.businessFax || ""}
                      disabled={!isAddressEdit}
                      onChange={handlePhoneChange}
                      size="small"
                      error={!!errors.businessFax}
                      helperText={errors.businessFax}
                    />
                  )}

                  {userdata?.customerTypeId !== 4 && (
                    // <TextField
                    //   label="Company Website"
                    //   id="outlined-size-small"
                    //   name="companyWebsite"
                    //   disabled={!isAddressEdit}
                    //   onChange={handleAddressChange}
                    //   value={addressData?.companyWebsite || ""}
                    //   // onChange={handleInputChange}
                    //   // error={!!errors.First_Name}
                    //   // helperText={errors.First_Name}

                    //   size="small"
                    //   // className="w-full"
                    // />
                    <TextField
                      label="Company Website"
                      id="outlined-size-small"
                      name="companyWebsite"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.companyWebsite || ""}
                      size="small"
                      error={!!errors.companyWebsite} // Show error state
                      helperText={errors.companyWebsite} // Display the error message
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {userdata?.customerTypeId !== 4 && (
                    <TextField
                      label="Legal Business Name"
                      name="legalBusinessName"
                      value={addressData?.legalBusinessName || ""}
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      size="small"
                      className="w-full"
                      error={!!errors.legalBusinessName} // Show error state
                      helperText={errors.legalBusinessName} // Display the error message
                    />
                  )}

                  <TextField
                    label="Address"
                    name="address"
                    value={addressData?.address || ""}
                    disabled={!isAddressEdit}
                    onChange={handleAddressChange}
                    size="small"
                    className="w-full"
                    error={!!errors.address} // Show error state
                    helperText={errors.address} // Display the error message
                  />

                  {/* <FormControl size="small" disabled={!isAddressEdit}>
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
                  </FormControl> */}

                  <FormControl
                    size="small"
                    disabled={!isAddressEdit}
                    error={!!errors.state} // Show error state if there's an error
                  >
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
                    {/* Custom error message below the Select component */}
                    {errors.state && (
                      <div className="text-red-600 ml-2">{errors.state}</div>
                    )}
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
                      className="w-full"
                      error={!!errors.businessPhone} // Show error state
                      helperText={errors.businessPhone}
                      inputProps={{ maxLength: 12 }}
                    />
                  )}
                  {userdata?.customerTypeId !== 4 && (
                    // <TextField
                    //   label="Business Email"
                    //   id="outlined-size-small"
                    //   name="businessEmail"
                    //   disabled={!isAddressEdit}
                    //   onChange={handleAddressChange}
                    //   value={addressData?.businessEmail || ""}
                    //   size="small"
                    // />
                    <TextField
                      label="Business Email"
                      id="outlined-size-small"
                      name="businessEmail"
                      disabled={!isAddressEdit}
                      onChange={handleAddressChange}
                      value={addressData?.businessEmail || ""}
                      size="small"
                      error={!!errors.businessEmail} // Show error state
                      helperText={errors.businessEmail} // Display the error message
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
                    {/* <TextField
                      label="DEA"
                      id="outlined-size-small"
                      name="dea"
                      value={accountData?.dea || ""}
                      onChange={handleAccountChange}
                      error={!!errors.dea}
                      helperText={errors.dea}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    /> */}
                    <TextField
                      label="DEA"
                      name="dea"
                      value={accountData?.dea || ""}
                      onChange={handleAccountChange}
                      error={!!errors.dea}
                      helperText={errors.dea}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    <label> DEA Expiration Date </label>
                    {/* <TextField
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
                    /> */}
                    <TextField
                      // label="DEA Expiration Date"
                      type="date"
                      id="deaExpirationDate"
                      name="deaExpirationDate"
                      value={
                        accountData.deaExpirationDate
                          ? formatDate(accountData.deaExpirationDate)
                          : ""
                      }
                      onChange={handleAccountChange}
                      error={!!errors.deaExpirationDate}
                      helperText={errors.deaExpirationDate}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />

                    <label className="flex flex-col">
                      {" "}
                      DEA Expiration File
                      <span>(jpg, png, jpeg,pdf,Max size 5MB)</span>
                    </label>
                    <TextField
                      label=""
                      type="file"
                      name="deaLicenseCopy"
                      onChange={handleFileChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    {fileErrorDEA && (
                      <p className="text-red-500 text-sm">{fileErrorDEA}</p>
                    )}
                    {accountData.deaLicenseCopy && (
                      <a
                        href={
                          isAccountEdit ? accountData.deaLicenseCopy : undefined
                        }
                        target={isAccountEdit ? "_blank" : undefined}
                        rel={isAccountEdit ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (!isAccountEdit) {
                            e.preventDefault();
                          }
                        }}
                        className={`text-sm -mt-3 underline ${
                          isAccountEdit ? "text-blue-500" : "text-gray-400"
                        }`}
                      >
                        View DEA License Copy
                      </a>
                    )}

                    <TextField
                      label="NPI"
                      name="npi"
                      disabled={!isAccountEdit}
                      value={accountData?.npi || ""}
                      onChange={handleAccountChange}
                      error={!!errors.npi}
                      helperText={errors.npi}
                      size="small"
                      className="w-[60%] mt-3"
                    />
                    {/* <TextField
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
                    /> */}
                    <TextField
                      label="Federal Tax"
                      name="federalTaxId"
                      value={accountData?.federalTaxId || ""}
                      onChange={handleAccountChange}
                      size="small"
                      className="w-[60%]"
                      disabled={!isAccountEdit} // Disable unless in edit mode
                      inputProps={{ maxLength: 10 }} // Limit max length to 10 (including the hyphen)
                      helperText={errors.federalTaxId} // Show the error message below the input
                      error={!!errors.federalTaxId} // Show error state if there's an error
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <TextField
                      label="Pharmacy License"
                      name="pharmacyLicence"
                      value={accountData?.pharmacyLicence || ""}
                      onChange={handleAccountChange}
                      error={!!errors.pharmacyLicence}
                      helperText={errors.pharmacyLicence}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    <label> Pharmacy License Expiration Date </label>
                    <TextField
                      // label="Pharmacy License Expiration Date"
                      type="date"
                      name="pharmacyLicenseExpirationDate"
                      disabled={!isAccountEdit}
                      value={
                        accountData.pharmacyLicenseExpirationDate
                          ? formatDate(
                              accountData.pharmacyLicenseExpirationDate
                            )
                          : ""
                      }
                      onChange={handleAccountChange}
                      error={!!errors.pharmacyLicenseExpirationDate}
                      helperText={errors.pharmacyLicenseExpirationDate}
                      size="small"
                      className="w-[60%]"
                    />

                    <label className="flex flex-col">
                      {" "}
                      Pharmacy License Expiration File
                      <span>(jpg, png, jpeg,pdf,Max size 5MB)</span>
                    </label>

                    <TextField
                      label=""
                      type="file"
                      name="pharmacyLicenseCopy"
                      onChange={handleFileChangePharma}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%]"
                    />
                    {fileErrorPharma && (
                      <p className="text-red-500 text-sm">{fileErrorPharma}</p>
                    )}
                    {accountData.pharmacyLicenseCopy && (
                      <a
                        href={
                          isAccountEdit
                            ? accountData.pharmacyLicenseCopy
                            : undefined
                        }
                        target={isAccountEdit ? "_blank" : undefined}
                        rel={isAccountEdit ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (!isAccountEdit) {
                            e.preventDefault();
                          }
                        }}
                        className={`text-sm -mt-3 underline ${
                          isAccountEdit ? "text-blue-500" : "text-gray-400"
                        }`}
                      >
                        View Pharmacy License Copy
                      </a>
                    )}

                    <TextField
                      label="NCPDP"
                      name="ncpdp"
                      disabled={!isAccountEdit}
                      value={accountData?.ncpdp || ""}
                      onChange={handleAccountChange}
                      error={!!errors.ncpdp}
                      helperText={errors.ncpdp}
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

              {/* <TextField
                label="Add Comments" // Updated label to "Add Comments"
                id="outlined-size-small"
                // value={comments} // Set input value from state
                name="comments"
                // onChange={handleCommentsChange} // Handles input change
                size="small"
                className="w-[99%] m-2 bg-white border"
                multiline
                rows={4}
              /> */}
              {/* <textarea
                name="usercomment"
                rows="4"
                className="w-[99%] mr-2 bg-white border resize p-2 rounded"
                placeholder="Add Comments"
                onChange={handleuserCommentsChange} // Handles input change
              />

              <button
                onClick={handleCommentSaveClick}
                className={`w-1/5 m-2 py-2 px-4 rounded-lg transition duration-200 ${
                  usercomment.trim()
                    ? "bg-blue-900 text-white hover:bg-blue-800"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                disabled={!usercomment.trim()} // Disable if comments are empty
              >
                Save
              </button> */}

              <textarea
                name="usercomment"
                rows="4"
                className="w-[99%] mr-2 bg-white border resize p-2 rounded"
                placeholder="Add Comments"
                value={currentComment} // Controlled input value
                onChange={handleUserCommentsChange} // Handles input change
              />

              <button
                onClick={handleCommentSaveClick}
                className={`w-1/5 m-2 py-2 px-4 rounded-lg transition duration-200 ${
                  currentComment.trim()
                    ? "bg-blue-900 text-white hover:bg-blue-800"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                disabled={!currentComment.trim()} // Disable if input is empty
              >
                Save
              </button>

              {/* Button to submit the notes */}
            </div>

            {/* </div> */}

            <div className="flex justify-between flex-col  rounded-lg  px-8  w-[95%] mt-4">
              <div className="button-group">
                {/* <>
                  {GetCharges.length === 0 && (
                    <p className="text-red-500 mb-2">
                      To Activate User You Should Provide Charges Information Under Charges Information Tab
                    </p>
                  )}
                  <Button
                    onClick={() => handleOpenPopup("activate")}
                    className={`mr-2 text-white ${
                      userdata?.isActive === 1 || GetCharges.length === 0
                        ? "bg-green-500 cursor-not-allowed opacity-50"
                        : "bg-green-500"
                    }`}
                    disabled={
                      userdata?.isActive === 1 || GetCharges.length === 0
                    }
                  >
                    Activate
                  </Button>
                </> */}

                <>
                  {GetCharges.length === 0 &&
                    userDetails?.customerTypeId !== 4 && (
                      <p className="text-red-500 mb-2">
                        To Activate User You Should Provide Charges Information
                        Under Charges Information Tab
                      </p>
                    )}
                  <Button
                    onClick={() => handleOpenPopup("activate")}
                    className={`mr-2 text-white ${
                      userdata?.isActive === 1 ||
                      (GetCharges.length === 0 &&
                        userDetails?.customerTypeId !== 4)
                        ? "bg-green-500 cursor-not-allowed opacity-50"
                        : "bg-green-500"
                    }`}
                    disabled={
                      userdata?.isActive === 1 ||
                      (GetCharges.length === 0 &&
                        userDetails?.customerTypeId !== 4)
                    }
                  >
                    Activate
                  </Button>
                </>

                <Button
                  onClick={() => handleOpenPopup("deactivate")}
                  className={`mr-2 text-white ${
                    userdata?.isActive === 0
                      ? "bg-red-500 cursor-not-allowed opacity-50"
                      : "bg-red-500"
                  }`}
                  disabled={userdata?.isActive === 0}
                >
                  Deactivate
                </Button>

                <Dialog open={showPopup} onClose={handleClosePopup}>
                  <DialogTitle className="">Write a Comment</DialogTitle>
                  <p></p>
                  <DialogContent>
                    <TextField
                      label="Add Comments"
                      value={comments}
                      onChange={handleCommentsChange}
                      size="small"
                      multiline
                      rows={4}
                      fullWidth
                      className="bg-white"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClosePopup} className="bg-red-500">
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-blue-900">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>

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
            <div className=" flex justify-between rounded-lg  px-8  w-[90%]  my-4">
              <div className="data-group bg-white p-4 h-full rounded-lg w-[50%]">
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
              {/* <div className="w-[50%] data-group ml-4 h-full bg-white p-4 rounded-lg">
                {usercomments.length > 0 ? (
                  <ul className="mt-4">
                    {usercomments.map((comment, index) => (
                      <li key={index} className="border-b py-2">
                        {comment}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 mt-4">No comments added.</p>
                )}
              </div> */}
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
