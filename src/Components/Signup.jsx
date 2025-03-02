

import React, { useEffect, useState } from "react";
import "../App.css";
import logoImage from "../assets/logo2.png";
import logo from "../assets/logo2.png";
// import logo from "../assets/Icons/logo2.png";
import back from "../assets/Previous1_icon.png";
import next from "../assets/Next1_icon.png";
import background_image from "../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";

// import DatePicker from 'react-datepicker';
import FormControl from "@mui/material/FormControl";
import refresh from "../assets/reload-arrow (1).png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useStates } from "react-us-states";

import {
  Box,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import TermsAndConditions from "./TermsAndConditions";
import { UserInfoUpdate } from "../Api/UserApi";

function getSteps() {
  return [
    { label: "User", para: "Information" },
    { label: "Account Type" },
    { label: "Address", para: "Information" },
    { label: "Account", para: "Information" },
  ];
}

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [accountType, setAccountType] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const [captcha, setCaptcha] = useState(generateCaptcha());
  // const [userInput, setUserInput] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    // Set the states data
    setStates(useStates); // Adjust based on actual structure
  }, []);
  const handleRefresh = () => {
    setCaptcha(generateCaptcha()); // Generate a new CAPTCHA
    setUserInput("");
    setErrors("");
  };
  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const validateCheckboxes = () => {
    // Set showErrors to true if either checkbox is not checked
    setShowErrors(true);
  };

  const handleNewsletterChange = (e) => {
    setNewsletterChecked(e.target.checked);
    setShowErrors(true); // Immediately validate on change
  };

  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
    setShowErrors(true); // Immediately validate on change
  };

  // Federal Tax Id
  const formatFederalTaxID = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Format according to the 99-9999999 pattern
    if (numericValue.length <= 2) {
      return numericValue; // 99
    } else if (numericValue.length <= 9) {
      return `${numericValue.slice(0, 2)}-${numericValue.slice(2)}`; // 99-9999999
    }

    return `${numericValue.slice(0, 2)}-${numericValue.slice(2, 9)}`; // 99-9999999 (limit to 9 digits after dash)
  };
  const handleFederalTaxIDChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatFederalTaxID(value);
    handleInputChange({
      target: { name: "Federal_Tax_ID", value: formattedValue },
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userTypes = [
    "Retail Pharmacy",
    "General Merchandise Seller",
    "Pharmacy Distributor",
    "Retail Customer",
  ];




  const [isActive, setIsActive] = useState(true);

  const handleOptionClick = () => {
    setIsActive(true);
    // setIsCheck(!ischeck);
  };

  const [Visible, setVisible] = useState(false);

  const handleVisibleClick = () => {
    setVisible(true);
  };

  const [buyerVisible, setBuyerVisible] = useState(false);

  const handlebuyerclick = () => {
    setBuyerVisible(true);
  };

  // Validate the newsletter checkbox on change
  useEffect(() => {
    if (!newsletterChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        newsletter: "Please sign up for newsletters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        newsletter: "",
      }));
    }
  }, [newsletterChecked]);

  useEffect(() => {
    if (!termsChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: "You must accept the Terms & Conditions.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: "",
      }));
    }
  }, [termsChecked]);

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email_id: "",
    Phone_number: "",
    password: "",
    confirmPassword: "",
    upnMember: "",
    shopName: "",
    companyWebsite: "",
    legalBusinessName: "",
    dbaName: "",
    address1: "",
    customerTypeId:null,
    city: "",
    State: "",
    zip: "",
    seller: "",
    buyer: "",
    buyerseller: "",
    newsletter: false,
    BusinessPhone: "",
    Business_Fax: "",
    Business_Email: "",
    DEA: "",
    DEA_Expiration_Date: "",
    DEA_License_Copy: "",
    Pharmacy_License: "",
    Pharmacy_Expiration_Date: "",
    Pharmacy_License_Copy: "",
    Business_License: "",
    NPI: "",
    NCPDP: "",
    Federal_Tax_ID: "",
    Address1: "",
    Address: "",
    userType: "",
    sendRegistrationMail: true
    // customerId: "",
  });
  
  const handleUserTypeChange = (e) => {
    setFormData({...formData,["customerTypeId"]:e.target.value})
    const customerTypeId = parseInt(e.target.value, 10);
    // console.log(userTypes[customerTypeId],customerTypeId)
    setUserType(userTypes[customerTypeId]);
    setSelectedValue(""); // Reset UPN Member selection on User Type change
  };
  const [errors, setErrors] = useState({});
  const steps = getSteps();
  const [uploadedFile, setUploadedFile] = useState("");
  const [file1, setfile1] = useState(null);
  const [file2, setfile2] = useState(null);
  const uploadFile = async (file, name) => {
    const formData1 = new FormData();
    formData1.append("image", file); // Assuming the field name is "image"

    try {
      const response = await fetch(
        // "https://ec2-100-29-38-82.compute-1.amazonaws.com/api/Customer/Upload",
`${import.meta.env.VITE_API_BASE_URL}/api/Customer/Upload`,        {
          method: "POST",
          body: formData1,
        }
      );

      const data = await response.json();
      // console.log(data);
      if (response.status === 200) {
        // console.log(data.message); // "Image Uploaded Successfully."
        setFormData({
          ...formData,
          [name]: data.imageUrl,
        });
      } else {
        console.error("Failed to upload image:", data.message);
      }
    } catch (error) {
      console.error("Error occurred during the upload:", error);
    }
  };

  // const [formDatas, setFormDatas] = useState({ taxId: '' });
  // const [errorss, setErrorss] = useState({});

  // const taxIdRegex = /^\d{2}-\d{7}$/;

  // const handleInputChanges = (e) => {
  //   const { name, value } = e.target;
  //   setFormDatas({ ...formDatas, [name]: value });

  //   if (!value.match(taxIdRegex)) {
  //     setErrorss({ ...errorss, [name]: "Valid Federal Tax ID (EIN) is required" });
  //   } else {
  //     setErrorss({ ...errorss, [name]: '' });
  //   }
  // };
  // const handleInputChanges = (e) => {
  //   const { name, value } = e.target;
  //   setFormDatas({ ...formDatas, [name]: value });

  //   const taxIdRegex = /^\d{2}-\d{7}$/; // Match XX-XXXXXXX format
  //   if (!value.match(taxIdRegex)) {
  //     setErrorss({ ...errorss, [name]: "Valid Federal Tax ID (EIN) is required. Format: XX-XXXXXXX" });
  //   } else {
  //     setErrorss({ ...errorss, [name]: '' });
  //   }
  // };
  // const handleInputChanges = (e) => {
  //   const { name, value } = e.target;
  //   let formattedValue = '';

  //   // Format the input value as XX-XXXXXXX
  //   if (value.length <= 2) {
  //     formattedValue = value;
  //   } else if (value.length > 2 && value.length <= 9) {
  //     formattedValue = `${value.slice(0, 2)}-${value.slice(2)}`;
  //   } else {
  //     formattedValue = value;
  //   }

  //   setFormDatas({ ...formDatas, [name]: formattedValue });

  //   const taxIdRegex = /^\d{2}-\d{7}$/;
  //   if (!formattedValue.match(taxIdRegex)) {
  //     setErrorss({ ...errorss, [name]: "Valid Federal Tax ID (EIN) is required. Format: XX-XXXXXXX" });
  //   } else {
  //     setErrorss({ ...errorss, [name]: '' });
  //   }
  // };

  // const handleInputChanges = (e) => {
  //   const { name, value } = e.target;
  //   let formattedValue = value;

  //   // Remove all non-digit characters
  //   formattedValue = formattedValue.replace(/\D+/g, '');

  //   // Add the hyphen after the first two digits
  //   if (formattedValue.length > 2) {
  //     formattedValue = formattedValue.substring(0, 2) + '-' + formattedValue.substring(2);
  //   }

  //   // Restrict the input to 10 characters
  //   if (formattedValue.length > 10) {
  //     formattedValue = formattedValue.substring(0, 10);
  //   }

  //   setFormDatas({ ...formDatas, [name]: formattedValue });

  //   if (!formattedValue.match(taxIdRegex)) {
  //     setErrorss({ ...errorss, [name]: "Invalid Federal Tax ID (EIN) format. Please use xx-xxxxxxx." });
  //   } else {
  //     setErrorss({ ...errorss, [name]: '' });
  //   }
  // };
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Add leading zero to month
    const day = String(today.getDate()).padStart(2, "0"); // Add leading zero to day
    return `${year}-${month}-${day}`; // Return today's date in 'YYYY-MM-DD' format
  };
  const handleInputChange = async (e) => {
    const { name, value, type, files, checked } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));

    if (files) {
      const file = files[0]; // Assuming only one file is uploaded
      // const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes


      if (!allowedTypes.includes(file.type)) {
        // Set error for incorrect file type
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Invalid file format. Only jpg, jpeg, png files are allowed.",
        }));
        return; // Stop further processing
      } 
      // else {
      //   // Clear the error if the file type is correct
      //   setErrors((prevErrors) => ({
      //     ...prevErrors,
      //     [name]: "",
      //   }));
      // }

      if (file.size > maxSize) {
        // Set error for exceeding file size
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "File size cannot exceed 5MB.",
        }));
        return; // Stop further processing
      }
  
      // If valid, clear errors and set the file
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));

      // Proceed with setting the file in state if valid
      if (name === "DEA_License_Copy") {
        setfile1(file.name); // Display file name
        setFormData((prev) => ({
          ...prev,
          [name]: file,
        }));
      } else if (name === "Pharmacy_License_Copy") {
        setfile2(file.name);
        setFormData((prev) => ({
          ...prev,
          [name]: file,
        }));
      }

      // Handle the file upload
      await uploadFile(file, name);
    } else {
      // Handle regular input changes
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    if (name === "DEA_Expiration_Date") {
      const today = getTodayDate();
      if (new Date(value) < new Date(today)) {
        setErrors((prev) => ({
          ...prev,
          DEA_Expiration_Date: "DEA Expiration Date cannot be in the past.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          DEA_Expiration_Date: "",
        }));
      }
    }
    if (name === "Pharmacy_Expiration_Date") {
      const today = getTodayDate();
      if (new Date(value) < new Date(today)) {
        setErrors((prev) => ({
          ...prev,
          Pharmacy_Expiration_Date:
            "Pharmacy Expiration Date cannot be in the past.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          Pharmacy_Expiration_Date: "",
        }));
      }
    }
    if (name === "password") validatePassword(value);

    if (activeStep === 1) {
      validateStep(activeStep);
    }
  };

  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    return selectedDate > currentDate;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const [searchTerm, setSearchTerm] = useState('');

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Prevent special characters from being typed
  const handleKeyPress = (e) => {
    const regexShop = /^[a-zA-Z0-9\s]*$/;
    if (!regexShop.test(e.key)) {
      e.preventDefault(); // Prevents special characters from being typed
    }
  };
  // bussiness afx
  // Function to format phone number as 222-222-1457
  const formatFaxNumber = (value) => {
    const cleaned = value.replace(/\D/g, ""); // Remove all non-numeric characters
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const part1 = match[1] ? `${match[1]}` : "";
      const part2 = match[2] ? `-${match[2]}` : "";
      const part3 = match[3] ? `-${match[3]}` : "";
      return `${part1}${part2}${part3}`;
    }

    return value;
  };

  // const validateForm = () => {
  //   const newErrors = {};
  const [PasswordErros, setPasswordErrors] = useState({});
  const validatePassword = (password) => {
    const newErrors = {};
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (!minLength) newErrors.passwordLength = "Min 8 characters";
    if (!hasUppercase) newErrors.passwordUppercase = "One uppercase letter";
    if (!hasSpecialChar)
      newErrors.passwordSpecialChar = "One special character";
    setisSubmit(true);
    setPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [usertype, setusertype] = useState("");

  const validateStep = async (step) => {
    let newErrors = {};
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regphn = /^(?:\+1\s?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    if (step === 0) {
      // const regex = /^[a-zA-Z\s']+$/;
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!formData.First_Name)
        newErrors.First_Name = "First Name is required.";
      if (!formData.Last_Name) newErrors.Last_Name = "Last Name is required.";

      if (!formData.Email_id.match(regexp))
        newErrors.Email_id = "Email Id is required";

      if (!formData.Phone_number.match(regphn)) {
        // console.log(formData.Phone_number.length, "hmmmm");
        if (formData.Phone_number.length === 0) {
          newErrors.Phone_number = "Phone Number is required";
        } else if (formData.Phone_number.length !== 12)
          newErrors.Phone_number = "Phone Number must be 10 digits";
      }

      if (!formData.confirmPassword.length)
        newErrors.confirmPassword = "Confirm password is required.";
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";

      if (!formData.captcha) newErrors.captcha = "captcha is required";
      if (formData.captcha != captcha)
        newErrors.captcha = "captcha not matched";

      if (Object.keys(newErrors).length === 0 && localStorage.getItem('userId') == null) {
        try {
          // console.log(formData.Email_id, formData.Phone_number);
          // const responseEmail = await fetch(
          //   `https://ec2-100-29-38-82.compute-1.amazonaws.com/api/Customer/GetCustomers?email=${encodeURIComponent(
          //     formData.Email_id
          //   )}`
          // );
          // const responsePhone = await fetch(
          //   `https://ec2-100-29-38-82.compute-1.amazonaws.com/api/Customer/GetCustomers?mobile=${formData.Phone_number}`
          // );
          const responseEmail = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/Customer/GetCustomers?email=${encodeURIComponent(
              formData.Email_id
            )}`
          );
          
          const responsePhone = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/Customer/GetCustomers?mobile=${formData.Phone_number}`
          );
          if (responsePhone.ok) {
            const data = await responsePhone.json(); // Convert response to JSON
            if (data?.result != null) {
              newErrors.Phone_number = "Phone Number already Exists";
            }
          } else {
            console.error("Server error:", response.statusText);
          }
          if (responseEmail.ok) {
            const data = await responseEmail.json(); // Convert response to JSON
            if (data?.result != null) {
              newErrors.Email_id = "Email Id already Exists";
            }
            // Now you can work with the data, e.g., update the UI
          } else {
            console.error("Server error:", response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
        setErrors(newErrors);
        // console.log(newErrors);

        return Object.keys(newErrors).length === 0;
      }
    }
    // else if (step === 1) {
    //   if (!userType) newErrors.userType = "User Type is required";

    //   if (!accountType) newErrors.accountType = "Account Type is required";

    //   if (
    //     (userType === "Retail Pharmacy" ||
    //       userType === "Pharmacy Distributor" ||
    //       userType === "Retail Customer" ||
    //       userType !== "General Merchandise Seller") &&
    //     !selectedValue &&
    //     !formData.upnMember
    //   )
    //     newErrors.upnMember = "UPN Member selection is required";
    // }

    if (step === 1) {
      if (!userType) newErrors.userType = "User Type is required";

      if (
        userType === "Retail Pharmacy" &&
        !selectedValue &&
        !formData.upnMember
      )
        newErrors.upnMember = "UPN Member selection is required";
    } else if (step === 2) {
      if (
        !formData.shopName &&
        userType != "Pharmacy Distributor" &&
        userType != "General Merchandise Seller" &&
        userType != "Retail Customer"
      )
        newErrors.shopName = "Shop Name is required.";
      if (!formData.legalBusinessName && userType != "Retail Customer")
        newErrors.legalBusinessName = "Legal Business Name is required.";

      if (
        !formData.dbaName &&
        userType != "Pharmacy Distributor" &&
        userType != "General Merchandise Seller" &&
        userType != "Retail Customer"
      )
        newErrors.dbaName = "DBA Name is required.";

      // if (!formData.BusinessPhone && userType != "Retail Customer")
      //   newErrors.BusinessPhone = "businessphone is required";

      // if (userType !== "Retail Customer") {
      //   const cleanedPhone = formData.BusinessPhone.replace(/\D/g, ""); // Remove non-numeric characters

      //   if (formData.BusinessPhone.length === 0) {
      //     newErrors.BusinessPhone = "Business PhoneNumber is required";
      //   } else if (cleanedPhone.replace(/\D/g, "").length !== 10) {
      //     newErrors.BusinessPhone = "Business PhoneNumber must be 10 digits";
      //   } else if (!formData.BusinessPhone.match(regphn)) {
      //     newErrors.BusinessPhone = "Invalid phone number format";
      //   }
      // }
      // if (userType !== "Retail Customer") {
      //   // Only validate for non-retail customers
      //   if (!formData.Business_Fax) {
      //     newErrors.Business_Fax = "Business Fax is required";
      //   } else if (formData.Business_Fax.replace(/\D/g, "").length !== 10) {
      //     newErrors.Business_Fax = "Business Fax must be exactly 10 digits";
      //   }
      // }


      if (userType !== "Retail Customer") {
        const cleanedPhone = formData.BusinessPhone.replace(/\D/g, ""); // Remove non-numeric characters
        const cleanedFax = formData.Business_Fax
          ? formData.Business_Fax.replace(/\D/g, "")
          : ""; // Handle empty fax

        // Validate Business Phone
        if (formData.BusinessPhone.length === 0) {
          newErrors.BusinessPhone = "Business PhoneNumber is required";
        } else if (cleanedPhone.length !== 10) {
          newErrors.BusinessPhone = "Business PhoneNumber must be 10 digits";
        } else if (!formData.BusinessPhone.match(regphn)) {
          newErrors.BusinessPhone = "Invalid phone number format";
        }

        // Validate Business Fax
        if (!formData.Business_Fax) {
          newErrors.Business_Fax = "Business Fax is required";
        } else if (cleanedFax.length !== 10) {
          newErrors.Business_Fax = "Business Fax must be exactly 10 digits";
        }

        // Ensure Business Phone and Business Fax are not the same
        if (cleanedPhone && cleanedFax && cleanedPhone === cleanedFax) {
          newErrors.Business_Fax =
            "Business Fax cannot be the same as Business Phone";
        }
      }
      if (userType !== "Retail Customer") {
        const cleanedFax = formData.Business_Fax ? formData.Business_Fax.replace(/\D/g, "") : "";
        const cleanedPhone = formData.Phone_number.replace(/\D/g, "");

        // Validate Business Fax
        if (!formData.Business_Fax) {
          newErrors.Business_Fax = "Business Fax is required";
        } else if (cleanedFax.length !== 10) {
          newErrors.Business_Fax = "Business Fax must be exactly 10 digits";
        }

        // Ensure Business Fax and Phone Number are not the same
        if (cleanedPhone && cleanedFax && cleanedPhone === cleanedFax) {
          newErrors.Business_Fax = "Business Fax cannot be the same as Phone Number";
        }
      }

      const businessEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.Business_Email && userType !== "Retail Customer") {
        newErrors.Business_Email = "Business Email is required";
      } else if (formData.Business_Email && !businessEmailRegex.test(formData.Business_Email)) {
        newErrors.Business_Email = "Please enter a valid Business Email address";
      }


      if (!formData.zip) {
        newErrors.zip = "Zip is required";
      } else if (formData.zip.length < 5) {
        newErrors.zip = "Zip must be at least 5 digits long";
      }
      if (!formData.Address1) newErrors.Address1 = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.State) newErrors.State = "State is required";
    } else if (step === 3) {
      if (
        !formData.DEA &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.DEA = "DEA is required";

      if (
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      ) {
        if (!formData.DEA_Expiration_Date) {
          newErrors.DEA_Expiration_Date = "DEA Expiration Date is required";
        } else if (!validateDate(formData.DEA_Expiration_Date)) {
          newErrors.DEA_Expiration_Date = "Enter a valid future date";
        }
      }

      if (
        !formData.DEA_License_Copy &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.DEA_License_Copy = "DEA License Copy is required";

      if (
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      ) {
        if (!formData.Pharmacy_Expiration_Date) {
          newErrors.Pharmacy_Expiration_Date =
            "Pharmacy Expiration Date is required";
        } else if (!validateDate(formData.Pharmacy_Expiration_Date)) {
          newErrors.Pharmacy_Expiration_Date = "Enter a valid future date";
        }
      }

      if (
        !formData.Pharmacy_License_Copy &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.Pharmacy_License_Copy = "Pharmacy License Copy is required";

      if (
        !formData.Pharmacy_License &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.Pharmacy_License = "Pharmacy License is required";
      if (
        !formData.NCPDP &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.NCPDP = "NCPDP is required";
      // if (
      //   !formData.Federal_Tax_ID &&
      //   // userType != "General Merchandise Seller" &&
      //   userType != "Retail Customer"
      // )
      //   newErrors.Federal_Tax_ID = "Federal is required";
      if (!formData.Federal_Tax_ID && userType != "Retail Customer") {
        newErrors.Federal_Tax_ID = "Federal Tax ID is required";
      } else if (userType != "Retail Customer" && formData.Federal_Tax_ID) {
        const cleanedTaxID = formData.Federal_Tax_ID.replace(/\D/g, ""); // Remove non-numeric characters
        if (cleanedTaxID.length !== 9) {
          newErrors.Federal_Tax_ID = "Federal Tax ID must be 9 digits";
        }
      }
      if (
        !formData.NPI &&
        // userType != "General Merchandise Seller" &&
        // userType != "Pharmacy Distributor" &&
        userType != "Retail Customer"
      )
        newErrors.NPI = "NPI is required";

      if (termsChecked == false) {
        newErrors.TermsAndConditions = "Terms and confition requried";
      }
      // if(newsletterChecked==false)
      // {
      //   newErrors.newsletterchecked = "news letter checked is required";
      // }
    }

    setErrors(newErrors);
    // console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const isStepOptional = (step) => step === 1 || step === 2 || step === 3;

  const isStepSkipped = (step) => skippedSteps.includes(step);

  const navigate = useNavigate();
  const [isSubmit, setisSubmit] = useState(true);

  const customerId = localStorage.getItem("customerId");

  const handleNext = async () => {
    if (activeStep === 0) {
      validatePassword(formData.password);
    }

    if (await validateStep(activeStep)) {
      setisSubmit(true);

      if (activeStep === 2 && userType === "Retail Customer") {
        setActiveStep(4);
        try {
          const isRegistered = await RegisterBusinessInfo();
          if (isRegistered) setActiveStep(4); // Move to the next step if API call is successful
        } catch (error) {
          setisSubmit(false);
          return; // Exit the function if there is an error
        }
        return;
      }

      if (activeStep === 0 && !validatePassword(formData.password)) {
        return;
      }

      if (activeStep === 1) {
        try {
          const isRegistered = await registerUser(formData, userType);
          if (formData.customerId != "") setActiveStep(2); // Move to the next step if API call is successful
        } catch (error) {
          setisSubmit(false);
          return; // Exit the function if there is an error
        }
        return;
      }
      if (activeStep === 3) {
        try {
          const isRegistered = await RegisterBusinessInfo();
          if (isRegistered) setActiveStep(4); // Move to the next step if API call is successful
        } catch (error) {
          setisSubmit(false);
          return; // Exit the function if there is an error
        }
        return;
      }

      if (activeStep === 1 && userType === "buyer") {
        setActiveStep(3);
      } else if (activeStep === steps.length) {
        localStorage.removeItem("formData");
        formData.userType = userType;
        localStorage.setItem("formData", JSON.stringify(formData));
        // localStorage.removeItem('userId');
        navigate("/app");
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkippedSteps((prevSkippedSteps) =>
          prevSkippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    } else {
      setisSubmit(false);
    }
  };
  const RegisterBusinessInfo = async () => {
    const requestBody = {
      customerBusinessInfoId: 0,
      customerId: formData.customerId,
      shopName: formData.shopName,
      dba: formData.dbaName,
      legalBusinessName: formData.legalBusinessName,
      address: formData.Address1,
      city: formData.city,
      state: formData.State,
      zip: formData.zip,
      businessPhone: formData.BusinessPhone,
      businessFax: formData.Business_Fax,
      businessEmail: formData.Business_Email,
      federalTaxId: formData.Federal_Tax_ID,
      dea: formData.DEA,
      pharmacyLicence: formData.Pharmacy_License,
      deaExpirationDate: formData.DEA_Expiration_Date,
      pharmacyLicenseExpirationDate: formData.Pharmacy_Expiration_Date,
      deaLicenseCopy: formData.DEA_License_Copy,
      pharmacyLicenseCopy: formData.Pharmacy_License_Copy,
      npi: formData.NPI,
      ncpdp: formData.NCPDP,
      companyWebsite: formData.companyWebsite,
      sendRegistrationMail: formData.sendRegistrationMail
    };
    Object.keys(requestBody).forEach((key) => {
      if (requestBody[key] === '') {
        requestBody[key] = null;
      }
    });
    try {
      const response = await fetch(
        // "https://ec2-100-29-38-82.compute-1.amazonaws.com/api/Customer/BusinessInfo",
        `${import.meta.env.VITE_API_BASE_URL}/api/Customer/BusinessInfo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return true;
    } catch (error) {
      console.error("Error during API request:", error);
      throw error;
    }
  };
  const registerUser = async (formData, userType) => {
    const requestBody = {
      customerId: null,
      // customerId:querycustomerId != null? querycustomerId: customerId != null? customerId: "String",
      firstName: formData.First_Name,
      lastName: formData.Last_Name,
      email: formData.Email_id,
      password: formData.password,
      mobile: formData.Phone_number,
      customerTypeId: parseInt(formData.customerTypeId, 10)+1,
      accountTypeId:
        accountType === "Buyer" ? 1 : accountType === "Seller" ? 2 : 3,
      isUPNMember: formData.upnMember == "true" ? 1 : 0, // Convert to boolean if needed
      loginOTP: "string",
      otpExpiryDate: "2024-08-12T13:32:54.749Z",
    };
    const userId = localStorage.getItem('userId');
    if (userId != null) {
      requestBody.customerId = userId;
    }
    try {
      if (requestBody.customerId != null) {
        const res = await UserInfoUpdate(requestBody);
        if (res) {

          return true;
        }
        else {
          return false;
        }
      }
      requestBody.customerId = "0";

      const response = await fetch(
        // "https://ec2-100-29-38-82.compute-1.amazonaws.com/api/Customer/Register",
        `${import.meta.env.VITE_API_BASE_URL}/api/Customer/Register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      localStorage.setItem("customerId", data);
      localStorage.setItem("userId", data.customerId);

      setFormData({ ...formData, customerId: data.customerId });
      // return data; // Return data for further use if needed
      return true;
    } catch (error) {
      console.error("Error during API request:", error);
      throw error; // Re-throw the error to be handled in the caller function
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (e) => {
    setFormData({...formData,upnMember:e.target.value})
    setSelectedValue(e.target.value);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps((prevSkippedSteps) => [...prevSkippedSteps, activeStep]);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  const [searchTerm, setSearchTerm] = useState("");

  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];
  // const filteredStates = states.filter((state) => {
  //   return state.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });
  const [selectedStates, setSelectedStates] = useState([]);
  const filteredStates = states.filter(
    (state) => !excludedStates.includes(state.name.toUpperCase())
  );

   useEffect(() => {
      if (filteredStates?.length) {
        setSelectedStates(filteredStates); // Select all states by default
      }
    }, [filteredStates]);

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, "");

    // Format as 3-3-4
    let formattedPhoneNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += "-";
      }
      formattedPhoneNumber += phoneNumber[i];
    }
    return formattedPhoneNumber;
  };

  const handleusertypechange = (value) => {
    setusertype(value);
    if (activeStep === 1) {
      validateStep(activeStep);
    }
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="w-full">
            <div className="flex flex-row w-full  my-4 justify-evenly">
              <div className="w-[45%] ">
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  name="First_Name"
                  value={formData.First_Name}
                  onChange={handleInputChange}
                  error={!!errors.First_Name}
                  helperText={errors.First_Name}
                  size="small"
                  className="w-full"
                />
              </div>

              <div className="w-[45%]">
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  name="Last_Name"
                  value={formData.Last_Name}
                  onChange={handleInputChange}
                  error={!!errors.Last_Name}
                  helperText={errors.Last_Name}
                  size="small"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-row  w-full my-4 justify-evenly">
              <div className="w-[45%] ">
                <TextField
                  label="Email ID"
                  id="outlined-size-small"
                  name="Email_id"
                  value={formData.Email_id}
                  onChange={handleInputChange}
                  error={!!errors.Email_id}
                  size="small"
                  className="w-full"
                  helperText={errors?.Email_id !== null ? errors.Email_id : ""}
                />
              </div>

              <div className="w-[45%] ">
                <TextField
                  label="Phone Number"
                  id="outlined-size-small"
                  name="Phone_number"
                  value={formatPhoneNumber(formData.Phone_number)}
                  onChange={handleInputChange}
                  error={!!errors.Phone_number}
                  size="small"
                  // helperText={
                  //   errors?.Phone_number !== null && formData.Phone_number != 0
                  //     ? errors.Phone_number
                  //     : ""
                  // }
                  helperText={errors.Phone_number}
                  inputProps={{ maxLength: 12 }}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-row  w-full my-4 justify-evenly">
              <div className="w-[45%] ">
                <TextField
                  label="Password"
                  id="outlined-size-small"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  error={Object.keys(PasswordErros).length > 0}
                  helperText={
                    formData.password.length > 0 &&
                      Object.keys(PasswordErros).length > 0
                      ? Object.values(PasswordErros).join(", ")
                      : ""
                  }
                  FormHelperTextProps={{
                    style: { color: isSubmit ? "black" : "red" },
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className="w-full"
                />
              </div>

              <div className="w-[45%] ">
                <TextField
                  label="Confirm Password"
                  id="outlined-size-small"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  // disabled={!formData.password}
                  error={!!errors.confirmPassword}
                  size="small"
                  // helperText={
                  //   !formData.confirmPassword
                  //     ? ""
                  //     : errors.confirmPassword
                  //     ? errors.confirmPassword
                  //     : ""
                  // }
                  helperText={
                    formData.confirmPassword
                      ? errors.confirmPassword // Show error message if validation fails
                        ? errors.confirmPassword
                        : ""
                      : ""
                  }
                  className="w-full"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>

            <div className="flex text-red-500 items-center justify-center flex-col">
              {errors?.password?.length > 1 && (
                <div className="w-[80%]">{errors.password}</div>
              )}
              {/* {errors.confirmPassword && 
              <div>
                {errors.confirmPassword}
              </div>
              } */}
            </div>

            <div className="flex justify-center items-center">
              <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
                <div className="text-xl font-bold  mt-1    ">{captcha}</div>

                <button
                  onClick={handleRefresh}
                  className="bg-gray-500 text-white w-8 mx-1 h-8"
                >
                  <img src={refresh} />
                  {/* <p className="text-white">Refresh</p> */}
                </button>
              </div>
              <TextField
                name="captcha"
                type="text"
                value={formData.captcha}
                onChange={handleInputChange}
                className=" p-2 mx-2"
                id="standard-basic"
                label="Enter Captcha"
                variant="standard"
                error={!!errors.captcha}
                helperText={errors.captcha}
              />
            </div>
          </div>
        );
      case 1:
        return (

          <div>
            <div className="p-4">
              {/* User Type Section */}
              <div className="mb-4">
                <label
                  className="flex gap-2 text-blue2 text-sm font-bold mb-2"
                  htmlFor="userType"
                >
                  User Type
                  <div className="text-red-400">
                    {errors.userType && <div>{errors.userType}</div>}
                  </div>
                </label>
                <select
                  id="userType"
                  value={formData.customerTypeId}
                  onChange={handleUserTypeChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select User Type</option>
                  {userTypes.map((type,index) => (
                    <option key={type} value={index}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* UPN Member Section - Only enabled for Retail Pharmacy */}
              {userType === "Retail Pharmacy" && (
                <div className="flex items-center">
                  <label className="text-gray-700">
                    <span className="text-green2">*</span>Are you a UPN Member
                  </label>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <div>
                      <Radio
                        checked={formData.upnMember == "true"}
                        onChange={handleChange}
                        value={true}
                        name="radio-buttons"
                        size="small"
                        slotProps={{ input: { "aria-label": "A" } }}
                      />
                      <span>YES</span>
                    </div>
                    <div>
                      <Radio
                        checked={formData.upnMember == "false"}
                        onChange={handleChange}
                        value={false}
                        name="radio-buttons"
                        size="small"
                        slotProps={{ input: { "aria-label": "B" } }}
                      />
                      <span>NO</span>
                    </div>
                  </Box>
                </div>
              )}
              <span>
                {errors.upnMember && (
                  <span className="text-red-500">{errors.upnMember}</span>
                )}
              </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-4 align-middle">
            <div
              className={`${userType === "Pharmacy Distributor" ||
                  userType === "Retail Customer" ||
                  userType === "General Merchandise Seller"
                  ? "hidden"
                  : ""
                } w-full`}
            >
              <TextField
                label="Shop Name"
                id="outlined-size-small"
                name="shopName"
                value={formData.shopName}
                onChange={handleInputChange}
                error={!!errors.shopName}
                helperText={errors.shopName}
                // onKeyPress={handleKeyPress}
                size="small"
                className="w-[92%]"
              />
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Legal Business Name"
                  id="outlined-size-small"
                  name="legalBusinessName"
                  value={formData.legalBusinessName}
                  // onChange={handleInputChange}
                  onChange={(e) => {
                    const { value } = e.target;
                    // Allow only alphabets and spaces by replacing anything else
                    const alphabeticValue = value.replace(/[^a-zA-Z0-9\s!@#$%^&*(),.?":{}|<>']/g, "");
                    handleInputChange({
                      target: {
                        name: "legalBusinessName",
                        value: alphabeticValue,
                      },
                    });
                  }}
                  error={!!errors.legalBusinessName}
                  helperText={errors.legalBusinessName}
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>
            <div
              className={`${userType === "Pharmacy Distributor" ||
                  userType === "Retail Customer" ||
                  userType === "General Merchandise Seller"
                  ? "hidden"
                  : ""
                } `}
            >
              <TextField
                label="DBA"
                id="outlined-size-small"
                name="dbaName"
                value={formData.dbaName}
                onChange={handleInputChange}
                error={!!errors.dbaName}
                // onKeyPress={handleKeyPress}
                helperText={errors.dbaName}
                size="small"
                className="w-[92%]"
              />
            </div>

            <div>
              <TextField
                label="Address"
                id="outlined-size-small"
                name="Address1"
                value={formData.Address1}
                onChange={handleInputChange}
                error={!!errors.Address1}
                helperText={errors.Address1}
                size="small"
                className="w-[92%]"
              />
            </div>
            <div>
              <TextField
                label="City"
                id="outlined-size-small"
                name="city"
                value={formData.city}
                // onChange={handleInputChange}
                onChange={(e) => {
                  const { value } = e.target;
                  // Allow only alphabets and spaces by replacing anything else
                  const alphabeticValue = value.replace(/[^a-zA-Z0-9\s!@#\$%\^\&\*\(\)\-_=\+\[\]{};:'",.<>\/?\\|`~]/g, "");
                  handleInputChange({
                    target: { name: "city", value: alphabeticValue },
                  });
                }}
                error={!!errors.city}
                helperText={errors.city}
                size="small"
                className="w-[92%]"
              />
            </div>

            <div>
              {/* <FormControl className="w-[92%]" error={!!errors.State}>
                <InputLabel id="state-select-label"></InputLabel>
                <Autocomplete
                  id="state-select"
                  options={states}
                  getOptionLabel={(option) => option.name}
                  value={
                    states.find((state) => state.name === formData.State) ||
                    null
                  }
                  onChange={(event, newValue) => {
                    handleInputChange({
                      target: {
                        name: "State",
                        value: newValue ? newValue.name : "",
                      },
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      size="small"
                      variant="outlined"
                      error={!!errors.State}
                    />
                  )}
                  filterOptions={(options, { inputValue }) => {
                    return options.filter((option) =>
                      option.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                  }}
                />
                {errors.State && (
                  <FormHelperText>{errors.State}</FormHelperText>
                )}
              </FormControl> */}
              <FormControl className="w-[92%]" error={!!errors.State}>
                <InputLabel id="state-select-label"></InputLabel>
                <Autocomplete
                  id="state-select"
                  options={filteredStates} // Use the filtered states array
                  getOptionLabel={(option) => option.name}
                  value={
                    filteredStates.find((state) => state.name === formData.State) || null
                  }
                  onChange={(event, newValue) => {
                    handleInputChange({
                      target: {
                        name: "State",
                        value: newValue ? newValue.name : "",
                      },
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      size="small"
                      variant="outlined"
                      error={!!errors.State}
                    />
                  )}
                  filterOptions={(options, { inputValue }) => {
                    return options.filter((option) =>
                      option.name.toLowerCase().includes(inputValue.toLowerCase())
                    );
                  }}
                />
                {errors.State && <FormHelperText>{errors.State}</FormHelperText>}
              </FormControl>
            </div>

            <div>
              <TextField
                label="Zip"
                id="outlined-size-small"
                name="zip"
                value={formData.zip}
                // onChange={handleInputChange}
                onChange={(e) => {
                  const { value } = e.target;
                  // Allow only numbers by replacing non-numeric characters
                  const numericValue = value.replace(/[^0-9]/g, "");
                  handleInputChange({
                    target: { name: "zip", value: numericValue },
                  });
                }}
                // error={!!errors.zip}
                size="small"
                error={!!errors.zip}
                className="w-[92%]"
                inputProps={{ maxLength: 5 }}
                helperText={errors.zip}
              />
            </div>

            {/* Address */}

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                {/* <TextField
                  label="Business Phone"
                  id="outlined-size-small"
                  name="BusinessPhone"
                  value={formatPhoneNumber(formData.BusinessPhone)}
                  onChange={handleInputChange}
                  error={!!errors.BusinessPhone}
                  placeholder="Enter your business phone"
                  size="small"
                  className="w-[92%]"
                  helperText={ 
                   "" && formData.BusinessPhone !== "" 
                      ?""
                      : "Bussiness phone is required" // Fallback to helper text
                  }
                /> */}

                <TextField
                  label="Business Phone"
                  id="outlined-size-small"
                  name="BusinessPhone"
                  value={formatPhoneNumber(formData.BusinessPhone)}
                  onChange={handleInputChange}
                  error={!!errors.BusinessPhone}
                  placeholder="Enter your business phone"
                  size="small"
                  inputProps={{ maxLength: 12 }}
                  className="w-[92%]"
                  // helperText={
                  //   errors.BusinessPhone && formData.BusinessPhone === ""
                  //     ? "Business phone is required" // Show helper text only if validation fails
                  //     : ""
                  // }
                  helperText={errors.BusinessPhone ? errors.BusinessPhone : ""}
                />
              </div>
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Business Fax"
                  id="outlined-size-small"
                  name="Business_Fax"
                  value={formatFaxNumber(formData.Business_Fax)} // Apply formatting
                  onChange={handleInputChange}
                  error={!!errors.Business_Fax}
                  size="small"
                  className="w-[92%]"
                  helperText={errors.Business_Fax} // Display error message if present
                  inputProps={{ maxLength: 12 }} // Limit input length for the formatted value
                />
              </div>
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                {/* <TextField
                  label="Business Email"
                  id="outlined-size-small"
                  name="Business_Email"
                  value={formData.Business_Email}
                  onChange={handleInputChange}
                  error={!!errors.Business_Email}
                  helperText={errors.Business_Email}
                  size="small"
                  className="w-[92%]"
                /> */}
                <TextField
                  label="Business Email"
                  id="outlined-size-small"
                  name="Business_Email"
                  value={formData.Business_Email}
                  onChange={handleInputChange}
                  error={!!errors.Business_Email}
                  helperText={errors.Business_Email}
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>
            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <TextField
                label="Company website"
                id="outlined-size-small"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                // error={!!errors.companyWebsite}
                // helperText={errors.companyWebsite}
                size="small"
                className="w-[92%]"
                placeholder="www.example.com" // Display example format

              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className=" w-full flex flex-col justify-center items-center">
            <div className="flex flex-row w-full  justify-between">
              <div className="w-[45%]">
                <TextField
                  label="DEA"
                  id="outlined-size-small"
                  name="DEA"
                  value={formData.DEA}
                  onChange={handleInputChange}
                  error={!!errors.DEA}
                  size="small"
                  inputProps={{ maxLength: 20 }}
                  helperText={errors.DEA}
                  className="w-full"
                  onKeyPress={handleKeyPress}
                  FormHelperTextProps={{
                    sx: { visibility: errors.DEA ? "visible" : "hidden" },
                  }}
                />
              </div>

              <div className="w-[45%]">
                <TextField
                  label="Pharmacy License"
                  id="outlined-size-small"
                  name="Pharmacy_License"
                  value={formData.Pharmacy_License}
                  onChange={handleInputChange}
                  error={!!errors.Pharmacy_License}
                  size="small"
                  inputProps={{ maxLength: 20 }}
                  className="w-full"
                  onKeyPress={handleKeyPress}
                  helperText={errors.Pharmacy_License}
                  FormHelperTextProps={{
                    sx: {
                      visibility: errors.Pharmacy_License
                        ? "visible"
                        : "hidden",
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row w-full  justify-between">
              <div className="w-[45%] flex flex-col">
                <span className="text-xs">DEA Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  name="DEA_Expiration_Date"
                  id="outlined-size-small"
                  value={formData.DEA_Expiration_Date}
                  error={!!errors.DEA_Expiration_Date}
                  onChange={handleInputChange}
                  size="small"
                  inputProps={{ min: today }}
                  className="w-full"
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                  helperText={errors.DEA_Expiration_Date}
                  FormHelperTextProps={{
                    sx: {
                      visibility: errors.DEA_Expiration_Date
                        ? "visible"
                        : "hidden",
                    },
                  }}
                />
              </div>

              <div className="w-[45%] flex flex-col">
                <span className="text-xs">Pharmacy Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  name="Pharmacy_Expiration_Date"
                  id="outlined-size-small"
                  value={formData.Pharmacy_Expiration_Date}
                  error={!!errors.Pharmacy_Expiration_Date}
                  onChange={handleInputChange}
                  size="small"
                  inputProps={{ min: today }}
                  className="w-full"
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                  helperText={errors.Pharmacy_Expiration_Date}
                  FormHelperTextProps={{
                    sx: {
                      visibility: errors.Pharmacy_Expiration_Date
                        ? "visible"
                        : "hidden",
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row w-full -mb-2 justify-between">
              <div className="w-[45%]">
                <span className="text-xs">
                  DEA License Copy (jpg, png, jpeg,pdf, Max size 5MB)
                </span>
                <input
                  type="file"
                  name="DEA_License_Copy"
                  id="dea-license-copy"
                  onChange={handleInputChange}
                  accept="image/*"
                  className={`w-full p-2 border rounded-md ${errors.DEA_License_Copy
                      ? "border-red-500"
                      : "border-gray-300"
                    }`}
                  style={{
                    borderColor: errors.DEA_License_Copy ? "red" : "gray",
                    outline: "none",
                    transition: "border-color 0.3s ease", // Smooth transition for the border color
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "black")} // Black border on focus
                  onBlur={(e) =>
                  (e.target.style.borderColor = errors.DEA_License_Copy
                    ? "red"
                    : "gray")
                  } // Revert back to the original color after losing focus
                />
                <p
                  style={{
                    color: "red",
                    visibility: errors.DEA_License_Copy ? "visible" : "hidden",
                  }}
                >
                  {errors.DEA_License_Copy}
                </p>
                {file1 && <div>{file1}</div>}
              </div>

              <div className="w-[45%]">
                <span className="text-xs">
                  Pharmacy License Copy (jpeg, jpg, png,pdf, Max size 5MB)
                </span>
                <input
                  type="file"
                  onChange={handleInputChange}
                  name="Pharmacy_License_Copy"
                  accept="image/*,pdf"
                  // accept="image/jpeg, image/jpg, image/png"
                  className="file-input"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px 12px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ced4da",
                  }}
                />
                <p
                  style={{
                    color: "red",
                    visibility: errors.Pharmacy_License_Copy
                      ? "visible"
                      : "hidden",
                  }}
                >
                  {errors.Pharmacy_License_Copy}
                </p>
                {file2 && <div>{file2}</div>}
              </div>
            </div>

            <div className="flex flex-row w-full my-3 justify-between">
              <div className="w-[45%]">
                <TextField
                  label="NPI"
                  id="outlined-size-small"
                  name="NPI"
                  value={formData.NPI}
                  onChange={handleInputChange}
                  error={!!errors.NPI}
                  size="small"
                  inputProps={{ maxLength: 20 }}
                  className="w-full"
                  onKeyPress={handleKeyPress}
                  helperText={errors.NPI}
                  FormHelperTextProps={{
                    sx: { visibility: errors.NPI ? "visible" : "hidden" },
                  }}
                />
              </div>

              <div className="w-[45%]">
                <TextField
                  label="NCPDP"
                  id="outlined-size-small"
                  name="NCPDP"
                  value={formData.NCPDP}
                  onChange={handleInputChange}
                  error={!!errors.NCPDP}
                  size="small"
                  inputProps={{ maxLength: 20 }}
                  className="w-full"
                  onKeyPress={handleKeyPress}
                  helperText={errors.NCPDP}
                  FormHelperTextProps={{
                    sx: { visibility: errors.NCPDP ? "visible" : "hidden" },
                  }}
                />
              </div>
            </div>

            <div className="flex w-full flex-row -mt-1 justify-start">
              <div className="w-[45%]">
                <TextField
                  label="Federal Tax ID"
                  id="outlined-size-small"
                  name="Federal_Tax_ID"
                  value={formData.Federal_Tax_ID}
                  // onChange={handleInputChange}
                  onChange={handleFederalTaxIDChange}
                  error={!!errors.Federal_Tax_ID}
                  size="small"
                  inputProps={{ maxLength: 20 }}
                  tabIndex={9}
                  className="w-full"
                  onKeyPress={handleKeyPress}
                  helperText={errors.Federal_Tax_ID}
                />
                {/* <TextField
          label="Federal Tax ID"
          id="outlined-size-small"
          name="Federal_Tax_ID"
          value={formData.Federal_Tax_ID}
          onChange={handleInputChange}
          error={!!errors.Federal_Tax_ID}
          size="small"
          inputProps={{ maxLength: 20 }}
          className="w-full"
          onKeyPress={handleKeyPress}
          helperText={errors.Federal_Tax_ID}
          FormHelperTextProps={{
            sx: { visibility: errors.Federal_Tax_ID ? "visible" : "hidden" },
            
          }}
        /> */}
              </div>
            </div>

            {/* <div className="w-full">
      <div>
        <input type="checkbox" className="leading-tight" tabIndex={10} />
        <label className="text-gray-700"> Signup for News letters</label>
      </div>
      <div className="-mb-2">
        <input type="checkbox" className="leading-tight" onClick={() => {}} tabIndex={11} />
        <label className="text-gray-700 ml-1">
          Please Accepts for PharmEtrade{" "}
          <Link onClick={() => {}} className="text-red-500">
            Terms & Conditions
          </Link>
        </label>
      </div>
    </div> */}

            {/* <div className="w-full">
      <div>
        <input
          type="checkbox"
          className="leading-tight"
          tabIndex={10}
          checked={newsletterChecked}
          onChange={() => setNewsletterChecked(!newsletterChecked)}
        />
        <label className="text-gray-700"> Signup for Newsletters</label>
        {errors.newsletter && <p className="text-red-500">{errors.newsletter}</p>}
      </div>

      <div className="-mb-2">
        <input
          type="checkbox"
          className="leading-tight"
          tabIndex={11}
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
        />
        <label className="text-gray-700 ml-1">
          Please accept PharmEtrade{" "}
          <Link onClick={() => {}} className="text-red-500">
            Terms & Conditions
          </Link>
        </label>
        {errors.terms && <p className="text-red-500">{errors.terms}</p>}
      </div>
    </div> */}

            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  className="leading-tight"
                  tabIndex={10}
                  checked={newsletterChecked}
                  onChange={handleNewsletterChange}
                  onBlur={validateCheckboxes}
                // error={!!errors.newsletterchecked}
                />
                <label className="text-gray-700"> Signup for Newsletters</label>
                {/* {errors.newsletterchecked!=null && (
                  <p className="text-red-500">Please sign up for newsletters.</p>
                )} */}
              </div>

              <div className="-mb-2">
                <input
                  type="checkbox"
                  className="leading-tight"
                  tabIndex={11}
                  checked={termsChecked}
                  onChange={handleTermsChange}
                  onError={!!errors.TermsAndConditions}
                  onBlur={validateCheckboxes}
                />
                <label className="text-gray-700 ml-1">
                  Please accept PharmEtrade{" "}
                  {/* <Link onClick={() => setActiveStep(5)} className="text-red-500">
                    Terms & Conditions
                  </Link> */}
                  <Link
                    onClick={(e) => {
                      e.preventDefault(); // Prevents default behavior if needed
                      // setActiveStep(5); // This keeps your original functionality
                      window.open(
                        "/termsandconditions",
                        "_blank",
                        "noopener,noreferrer"
                      ); // Opens the link in a new tab
                    }}
                    className="text-red-500"
                  >
                    Terms & Conditions
                  </Link>
                </label>
                {errors.TermsAndConditions != null && (
                  <p className="text-red-500 text-sm">
                    You must accept the Terms & Conditions.
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full flex justify-center">
            <div className="">
              Thank you for registering as
              <span className="font-bold text-green2"> {userType} </span>
              Your registration is under review.
              <p>
                <p>
                  You will receive a confirmation email when the review is
                  completed.{" "}
                </p>
                <p>Please allow up to 48 hours for the process. </p>
                If you have any question please contact us.{" "}
                <span className=" cursor-pointer hover:text-green2 hover:font-semibold text-blue2 underline">
                  help@pharmetrade.com{" "}
                </span>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      <div className=" h-full w-screen">
        <img
          src={background_image}
          alt="Background"
          className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
        />
        {activeStep == 5 && (
          <div className="w-full absolute bg-black overflow-scroll flex justify-center">
            <TermsAndConditions setActiveStep={setActiveStep} />
          </div>
        )}

        <div className="w-full h-full ">
          <Link to="/">
            <img
              // src={logoImage}
              src={logo}
              alt="Logo"
              style={{ width: "220px" }}
            />
          </Link>
          <div className="h-[80%]  flex justify-center items-center">
            <div className="bg-white w-[600px] px-12 py-6 rounded-lg shadow-lg mt-10">
              <span
                className={`text-blue2 ${activeStep == 4 ? "hidden" : ""
                  } text-[25px]  text-center font-bold     flex justify-center items-center  `}
              >
                Sign Up
              </span>
              <div className={`flex my-4 ${activeStep == 4 ? "hidden" : ""}  `}>
                {steps.map(({ label, para }, index) => (
                  <div
                    key={label}
                    className="flex items-center flex-1 flex-col"
                  >
                    <div
                      className=" w-11 h-11 border rounded-full bg-blue2 text-white flex justify-center items-center "
                      style={{
                        ...(activeStep === index ? activeCircleStyle : {}),
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-base p-0 m-0">
                      <p className="text-center text-blue2 font-semibold">{label}</p>
                      {para && <p className="-mt-1.5 text-blue2 font-semibold">{para}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {getStepContent(activeStep)}
              <div className="flex justify-around m-2">
                <button
                  onClick={handleBack}
                  className={`${activeStep === 0 ? "opacity-50 " : ""} ${activeStep === 4 ? "hidden" : ""
                    } bg-blue2 hover:bg-green2 w-24 p-2 flex justify-center text-white h-10 cursor-pointer font-semibold border rounded-lg my-4 `}
                >
                  {/* <img src={back} className="w-6" /> */}
                  <div className="text-lg font-semibold text-white">BACK</div>
                </button>

                <button
                  onClick={handleNext}
                  className="bg-blue2 hover:bg-green2 w-24 h-10 cursor-pointer  border rounded-lg my-4 flex items-center justify-center"
                >
                  {activeStep === 4 ? (
                    <div className="text-white font-bold">Go To Home</div>
                  ) : (
                    // <img src={next} alt="Next" className="w-6" />
                    <div className="text-white  font-semibold text-lg">NEXT</div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const activeCircleStyle = {
  backgroundColor: "#00b153",
};

export default Signup;
