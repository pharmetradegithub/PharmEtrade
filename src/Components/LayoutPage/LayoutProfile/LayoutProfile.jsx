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
import { useLocation } from "react-router-dom";
const LayoutProfile = () => {
  const userdata = useSelector((state) => state.user?.user || []); // Get user data from redux
  const businessInfo = useSelector((state) => state.user?.businessInfo || []);

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


  // // Handle changes to input fields
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserDetails({ ...userDetails, [name]: value });
  // };
  const [errors, setErrors] = useState({});
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
  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
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
      customerTypeId: userdata.customerTypeId,
      accountTypeId: userdata.accountTypeId,
      isUPNMember: userdata.isUPNMember,
    };
    if (userinfo) {
      await UserInfoUpdate(userinfo);
      await RefreshUser();
    }

    // alert("Data saved successfully!"); // Show notification
    setNotification({
      show: true,
      message: "User Information saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

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

  const location = useLocation();
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
      label: "State Tax Information",
      grid: "Tax",
    },
    {
      label: "Fees",
      grid: "charges",
    },
  ];
  const [visibleGrid, setVisibleGrid] = useState("account"); // Default to Account Information
  useEffect(() => {
    // Set the default grid based on the state passed during navigation
    if (location.state?.defaultGrid) {
      setVisibleGrid(location.state.defaultGrid);
    }
  }, [location.state]);
  const toggleGrid = (grid) => {
    setVisibleGrid(grid); // Set the visible grid to the selected one
  };
  // const handleAddressChange = (e) => {
  //   const { name, value } = e.target;

  //   setAddressData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleAddressChange = (e) => {
  //   console.log("Field changed:", e.target.name, e.target.value);
  //   const { name, value } = e.target;
  //   setAddressData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
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
    // if (![4].includes(userdata?.customerTypeId)) {
    //   if (!addressData.businessFax?.trim()) {
    //     validationErrors.businessFax = "Business Fax is required";
    //   } else {
    //     // Remove non-digit characters before validation
    //     const phoneDigits = addressData.businessFax.replace(/\D/g, ""); // Strip non-numeric characters
    //     if (phoneDigits.length !== 10) {
    //       validationErrors.businessFax =
    //         "Business Fax must be exactly 10 digits";
    //     }
    //   }
    // }
    // if (![4].includes(userdata?.customerTypeId)) {
    //   if (!addressData.businessEmail?.trim()) {
    //     validationErrors.businessEmail = "Business Email is required";
    //   } else if (
    //     !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addressData.businessEmail.trim())
    //   ) {
    //     validationErrors.businessEmail = "Enter a valid email address";
    //   }
    // }

    if (![4].includes(userdata?.customerTypeId)) {
      // Remove non-digit characters for both businessPhone and businessFax
      const phoneDigits = addressData.businessPhone?.replace(/\D/g, ""); // Strip non-numeric characters from businessPhone
      const faxDigits = addressData.businessFax?.replace(/\D/g, ""); // Strip non-numeric characters from businessFax
  
      // Validate businessPhone
      if (!addressData.businessPhone?.trim()) {
        validationErrors.businessPhone = "Business Phone is required";
      } else if (phoneDigits.length !== 10) {
        validationErrors.businessPhone =
          "Business Phone must be exactly 10 digits";
      }

      // Validate businessFax
      if (!addressData.businessFax?.trim()) {
        validationErrors.businessFax = "Business Fax is required";
      } else if (faxDigits.length !== 10) {
        validationErrors.businessFax = "Business Fax must be exactly 10 digits";
      } else if (faxDigits === phoneDigits) {
        validationErrors.businessFax =
          "Business Fax cannot be the same as Business Phone";
      }
    }

    // if (![4].includes(userdata?.customerTypeId)) {
    //   if (!addressData.companyWebsite?.trim()) {
    //     validationErrors.companyWebsite = "Company Website is required";
    //   } else if (
    //     !/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
    //       addressData.companyWebsite.trim()
    //     )
    //   ) {
    //     validationErrors.companyWebsite = "Enter a valid website";
    //   }
    // }

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
      await BusinessInfoUpdate(businessInfoObj);
      await RefreshUser();
    }
    // Here you would typically dispatch an action to save the updated address
    // alert("Address information saved successfully!");
    setNotification({
      show: true,
      message: "Address information saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  // State for editing Account Information
  const [isAccountEdit, setIsAccountEdit] = useState(false);

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
      return; // Stop execution if validation fails
    }
    setIsAccountEdit(false);
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
      await BusinessInfoUpdate(businessInfoObj);
      await RefreshUser();
    }
    // Here you would typically dispatch an action to save the updated account information
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


  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];

  return (
    <div className="w-full h-full flex-col bg-slate-200 flex justify-center overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="w-[95%] mt-8 h-full flex flex-col justify-normal">
        {/* Render Profile Buttons */}
        {/* <div className="grid flex-col md:grid-cols-3  xl:flex md:flex-row gap-4 md:gap-3">
          {profiles.map((profile, index) =>
            // Hide index 1 if user.customerTypeId is 4
            userdata?.customerTypeId === 4 &&
            (index === 1 || index === 2) ? null : (
              <div key={profile.grid} className="flex  ml-6">
                <div
                  className={`w-44 bg-white rounded-lg flex   items-center justify-center cursor-pointer ${
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
        </div> */}
        <div className="grid flex-col md:grid-cols-3 xl:flex md:flex-row gap-4 md:gap-3">
          {profiles.map((profile, index) =>
            userdata?.customerTypeId === 4 &&
            (index === 1 ||
              index === 2 ||
              profile.grid === "charges") ? null : (
              <div key={profile.grid} className="flex ml-6">
                <div
                  className={`w-44 bg-white layoutBuyProducts rounded-lg flex items-center justify-center cursor-pointer ${
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
              } rounded-lg px-3 lg:px-8 mx-3 lg:mx-6 layoutBuyProducts w-[85%] lg:w-[90%] mt-8 relative`}
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

              <div className="flex flex-col ">
                <div className="flex justify-end">
                  <img
                    src={edit}
                    className="w-6 h-6 ml-4 cursor-pointer"
                    onClick={handleEditClick}
                    alt="Edit"
                  />
                </div>
                <div className="py-4 flex   flex-col md:flex-row gap-4">
                  {/* <TextField
                    label="First Name"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-52 md:w-56 "
                  /> */}
                  <TextField
                    label="First Name"
                    value={userDetails?.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    // className="w-full"
                    error={!!errors.firstName} // Highlight field in error
                    helperText={errors.firstName} // Display error message
                  />
                  <div className=" ml-0 xl:ml-52">
                    {/* <TextField
                      label="Last Name"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      size="small"
                      className="w-52 md:w-56 "
                    /> */}
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
                  </div>
                </div>
                <div className=" flex  flex-col md:flex-row gap-4">
                  {/* <TextField
                    label="Email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className=" w-52 md:w-56"
                  /> */}
                  <TextField
                    label="Email ID"
                    value={userDetails?.email}
                    name="email"
                    // onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    // className="w-full"
                    error={!!errors.email} // Highlight the email field in case of error
                    helperText={errors.email} // Display error message for invalid email
                  />
                  <div className=" ml-0 xl:ml-52">
                    {/* <TextField
                      label="Phone Number"
                      name="mobile"
                      value={userDetails.mobile}
                      onChange={handlePhoneNumberChange}
                      // onChange={handlePhoneChange}
                      inputProps={{ maxLength: 12 }}
                      disabled={!isEditable}
                      size="small"
                      className=" w-52 md:w-56"
                    /> */}
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
                </div>
                <div className="py-4">
                  <TextField
                    label="Password"
                    name="password"
                    value={userDetails.password}
                    // onChange={handleInputChange}
                    disabled={!isEditable}
                    size="small"
                    className="w-52 layoutBuyProducts md:w-56"
                  />
                </div>
                <div className="flex  justify-end py-2">
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
          <div className="flex flex-col bg-white border  border-gray-400 p-6 h-full  ml-3 lg:ml-6  rounded-lg px-3 lg:px-8 layoutBuyProducts  w-[80%] lg:w-[90%] mt-8">
            <h1 className="text-blue-900 font-semibold -mt-2 text-xl ">
              User Type
            </h1>
            <div className="mt-2">
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
                className="ml-3 layoutBuyProducts"
                size="small"
              />
            </div>
            {userdata?.customerTypeId !== 4 &&
              userdata?.customerTypeId !== 2 &&
              userdata?.customerTypeId !== 3 && (
                <div className="mt-2">
                  <label className="mr-3 text-gray-400">UPN Member</label>

                  <input
                    type="radio"
                    id="yes"
                    value="1"
                    checked={userdata?.isUPNMember === 1}
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
                    checked={userdata?.isUPNMember === 0}
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
          <div className="flex flex-col bg-slate-200 main-container layoutBuyProducts p-6 w-full h-full">
            {/* Address Information Section */}
            <div
              className={`bg-white layoutBuyProducts border ${
                isAddressEdit ? "border-blue-900" : "border-gray-400"
              } rounded-lg  lg:px-8  -ml-2   w-full lg:w-[95%] mt-8 relative`}
            >
              {isAddressEdit && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md p-2">
                  Address Information
                </h1>
              )}
              <h1
                className={`text-xl font-semibold my-2 p-2 ${
                  isAddressEdit ? "invisible" : "text-blue-900"
                }`}
              >
                Address Information
              </h1>
              <div className="flex justify-end ">
                <img
                  src={edit}
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleAddressEditClick}
                />
              </div>
              <div className="flex flex-col  md:flex-row mx-3 py-4">
                <div className="grid grid-cols-2 gap-x-36 gap-y-3">
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
                  {userdata?.customerTypeId !== 4 &&
                    userdata?.customerTypeId !== 3 &&
                    userdata?.customerTypeId !== 2 && (
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

                  {/* <FormControl
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
                    {/* Custom error message below the Select component
                    {errors.state && (
                      <div className="text-red-600 ml-2">{errors.state}</div>
                    )}
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
                      {states
                        .filter((state) => !excludedStates.includes(state.name.toUpperCase())) // Exclude unwanted states
                        .map((state) => (
                          <MenuItem
                            key={state.abbreviation}
                            value={state.name} // Match this value to what you want to save in addressData
                          >
                            {state.name}
                          </MenuItem>
                        ))}
                    </Select>
                    {/* Custom error message below the Select component */}
                    {errors.state && <div className="text-red-600 ml-2">{errors.state}</div>}
                  </FormControl>

                  {/* {userdata?.customerTypeId !== 4 && (
                    
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
                  )} */}

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

                  {userdata?.customerTypeId !== 4 && (
                    <div className="my-2">
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
                    </div>
                  )}
                </div>
              </div>
              <div className="flex  justify-end py-2">
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

            {/* Account Information Section */}

            {userdata?.customerTypeId !== 4 && (
              <div
                className={`bg-white  border -ml-2 md:ml-0 ${
                  isAccountEdit ? "border-blue-900" : "border-gray-400"
                } rounded-lg px-3 lg:px-8  w-full lg:w-[95%]  mt-8 relative mb-6`}
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
                <div className="flex justify-end">
                  <img
                    src={edit}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleAccountEditClick}
                  />
                </div>
                <div className="flex flex-col md:flex-row  py-4">
                  <div className="flex flex-col gap-3">
                    {/* <TextField
                      label="DEA"
                      id="dea"
                      name="dea"
                      value={accountData.dea}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className=" w-52 md:w-56 "
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
                      className="w-[60%] input-full-width"
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
                      className=" w-52 md:w-56 "
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
                      className="w-[60%] input-full-width"
                    />

                    {/* <label> DEA Expiration File </label>
                    <TextField
                      label=""
                      type="file"
                      id="outlined-size-small"
                      name="deaLicenseCopy"
                      onChange={handleFileChange} // Separate handler for file selection
                      disabled={!isAccountEdit}
                      size="small"
                      className=" w-52 md:w-56 "
                    />
                   {accountData.deaLicenseCopy && (
  <a
    href={isAccountEdit ? accountData.deaLicenseCopy : undefined}
    target={isAccountEdit ? "_blank" : undefined}
    rel={isAccountEdit ? "noopener noreferrer" : undefined}
    onClick={(e) => {
      if (!isAccountEdit) {
        e.preventDefault(); // Prevent navigation when disabled
      }
    }}
    className={`text-sm -mt-3 underline ${
      isAccountEdit ? "text-blue-500" : "text-gray-400 cursor-not-allowed"
    }`}
  >
    View DEA License Copy
  </a>
)} */}
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
                      className="w-[60%] input-full-width"
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

                    {/* <TextField
                      label="NPI"
                      id="npi"
                      name="npi"
                      value={accountData.npi}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-56 mt-3"
                    /> */}
                    <TextField
                      label="NPI"
                      name="npi"
                      disabled={!isAccountEdit}
                      value={accountData?.npi || ""}
                      onChange={handleAccountChange}
                      error={!!errors.npi}
                      helperText={errors.npi}
                      size="small"
                      className="w-[60%] input-full-width mt-3"
                    />
                    {/* <TextField
                      label="Federal Tax"
                      id="federalTaxId"
                      name="federalTaxId"
                      value={accountData.federalTaxId}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className=" w-52 md:w-56 "
                    /> */}
                    <TextField
                      label="Federal Tax"
                      name="federalTaxId"
                      value={accountData?.federalTaxId || ""}
                      onChange={handleAccountChange}
                      size="small"
                      className="w-[60%] input-full-width"
                      disabled={!isAccountEdit} // Disable unless in edit mode
                      inputProps={{ maxLength: 10 }} // Limit max length to 10 (including the hyphen)
                      helperText={errors.federalTaxId} // Show the error message below the input
                      error={!!errors.federalTaxId} // Show error state if there's an error
                    />
                  </div>
                  <div className="flex flex-col mt-3 md:mt-0 ml-0 md:ml-6 xl:ml-52 gap-3">
                    {/* <TextField
                      label="Pharmacy License"
                      id="pharmacyLicence"
                      name="pharmacyLicence"
                      value={accountData.pharmacyLicence}
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      size="small"
                      className=" w-52 md:w-56 "
                    /> */}
                    <TextField
                      label="Pharmacy License"
                      name="pharmacyLicence"
                      value={accountData?.pharmacyLicence || ""}
                      onChange={handleAccountChange}
                      error={!!errors.pharmacyLicence}
                      helperText={errors.pharmacyLicence}
                      disabled={!isAccountEdit}
                      size="small"
                      className="w-[60%] input-full-width"
                    />
                    <label> Pharmacy License Expiration Date </label>

                    {/* <TextField
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
                      className=" w-52 md:w-56 "
                    /> */}
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
                      className="w-[60%] input-full-width"
                    />

                    {/* <label>Pharmacy License Expiration File</label>
                    <TextField
                      label=""
                      type="file"
                      id="outlined-size-small"
                      name="pharmacyLicenseCopy"
                      onChange={handleFileChangePharma} // Separate handler for file input
                      disabled={!isAccountEdit}
                      size="small"
                      className=" w-52 md:w-56 "
                    />
                   
                    {accountData.pharmacyLicenseCopy && (
  <a
    href={isAccountEdit ? accountData.pharmacyLicenseCopy : undefined}
    target={isAccountEdit ? "_blank" : undefined}
    rel={isAccountEdit ? "noopener noreferrer" : undefined}
    onClick={(e) => {
      if (!isAccountEdit) {
        e.preventDefault(); // Prevent navigation when disabled
      }
    }}
    className={`text-sm -mt-3 underline ${
      isAccountEdit ? "text-blue-500" : "text-gray-400 cursor-not-allowed"
    }`}
  >
    View Pharmacy License Copy
  </a>
)} */}
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
                      className="w-[60%] input-full-width"
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

                    {/* <TextField
                      label="NCPDP"
                      id="ncpdp"
                      name="ncpdp"
                      onChange={handleAccountChange}
                      disabled={!isAccountEdit}
                      value={accountData.ncpdp}
                      size="small"
                      className=" w-52 md:w-56 mt-3"
                    /> */}
                    <TextField
                      label="NCPDP"
                      name="ncpdp"
                      disabled={!isAccountEdit}
                      value={accountData?.ncpdp || ""}
                      onChange={handleAccountChange}
                      error={!!errors.ncpdp}
                      helperText={errors.ncpdp}
                      size="small"
                      className="w-[60%] input-full-width mt-3"
                    />
                  </div>
                </div>
                <div className="flex  justify-end py-2">
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
