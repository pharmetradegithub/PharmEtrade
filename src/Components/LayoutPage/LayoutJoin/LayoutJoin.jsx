import React, { useEffect, useState } from "react";
// import "../App.css";
import logoImage from "../../../assets/logo_04.png";
import back from "../../../assets/Previous1_icon.png";
import next from "../../../assets/Next1_icon.png";
import background_image from "../../../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";

// import DatePicker from 'react-datepicker';
import FormControl from "@mui/material/FormControl";
import refresh from "../../../assets/reload-arrow (1).png";
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
} from "@mui/material";

function getSteps() {
  return ["Personal-Info", "User-Info", "Business-Info1", "Business-Info-2"];
}

const LayoutJoin = () => {
  const [userType, setUserType] = useState("");
  const [accountType, setAccountType] = useState("");

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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userTypes = [
    "Prescription Drug Seller",
    "General Merchandise Seller",
    "Vendor",
    "Retail Customer",
  ];

  const accountTypes = {
    default: ["Buyer", "Seller", "Buyer/Seller"],
    normalCustomer: ["Buyer"],
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setAccountType("");
  };
  useEffect(() => {
    if (userType === "Retail Customer") {
      setAccountType("Buyer");
    }
  }, [userType]);

  const getAccountTypes = () => {
    return userType === "Retail Customer"
      ? accountTypes.normalCustomer
      : accountTypes.default;
  };

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
    legalBusinessName: "",
    dbaName: "",
    address1: "",
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
    Bussiness_License: "",
    NPI: "",
    NCPDP: "",
    Federal_Tax_ID: "",
    Address1: "",
    Address: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});
  const steps = getSteps();
  const [uploadedFile, setUploadedFile] = useState("");
  const [file1, setfile1] = useState(null);
  const [file2, setfile2] = useState(null);
  console.log(formData);
  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
    if (!files) {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    } else {
      const file = files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (name === "Pharmacy_License_Copy") {
        setfile2(null),
          setFormData((prev) => ({
            ...prev,
            [name]: "",
          }));
      }
      if (name === "DEA_License_Copy") {
        setfile1(null),
          setFormData((prev) => ({
            ...prev,
            [name]: "",
          }));
      }
      if (allowedTypes.includes(file.type)) {
        setFormData({
          ...formData,
          [name]: file,
        });
        setUploadedFile(URL.createObjectURL(files[0]));
        if (name === "DEA_License_Copy") setfile1(file ? file.name : "");
        else setfile2(file ? file.name : "");
      } else {
        if (name === "Pharmacy_License_Copy") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "upload only jpg, jpeg, or png file",
          }));
        }
        if (name === "DEA_License_Copy") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "upload only jpg, jpeg, or png file",
          }));
        }
      }
    }
    console.log(formData);
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

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  const validateStep = (step) => {
    let newErrors = {};
    if (step === 0) {
      const regex = /^[a-zA-Z\s']+$/;
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!formData.First_Name.match(regex))
        newErrors.First_Name = "First name is required.";
      if (!formData.Last_Name) newErrors.Last_Name = "Last name is required.";

      const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!formData.Email_id.match(regexp))
        newErrors.Email_id = "Email_id is required";
      const regphn = /^(?:\+1\s?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

      if (!formData.Phone_number.match(regphn)) {
        console.log(formData.Phone_number.length, "hmmmm");
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
    } else if (step === 1) {
      if (!userType) newErrors.userType = "User Type is required";

      if (!accountType) newErrors.accountType = "Account Type is required";

      if (
        (userType === "Prescription Drug Seller" ||
          userType === "Vendor" ||
          userType === "Retail Customer" ||
          userType !== "General Merchandise Seller") &&
        !selectedValue &&
        !formData.upnMember
      )
        newErrors.upnMember = "UPN Member selection is required";
    } else if (step === 2) {
      if (
        !formData.shopName &&
        userType != "Vendor" &&
        userType != "General Merchandise Seller" &&
        userType != "Retail Customer"
      )
        newErrors.shopName = "Shop name is required.";
      if (!formData.legalBusinessName && userType != "Retail Customer")
        newErrors.legalBusinessName = "Legal business name is required.";

      if (
        !formData.dbaName &&
        userType != "Vendor" &&
        userType != "General Merchandise Seller" &&
        userType != "Retail Customer"
      )
        newErrors.dbaName = "DBA name is required.";
      if (!formData.BusinessPhone && userType != "Retail Customer")
        newErrors.BusinessPhone = "bussinessphone is required";
      if (!formData.Business_Fax && userType != "Retail Customer")
        newErrors.Business_Fax = "Bussiness_Fax is required";

      const regexpns = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.Business_Email.match(regexpns) && userType != "Retail Customer")
        newErrors.Business_Email = " Bussiness_Email is required";

      if (!formData.zip) newErrors.zip = "Zip is required";
      if (!formData.Address1) newErrors.Address1 = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.State) newErrors.State = "State is required";
    } else if (step === 3) {
      if (
        !formData.DEA &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.DEA = "DEA is required";

      if (
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
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
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.DEA_License_Copy = "DEA_License_Copy is required";

      if (
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
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
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.Pharmacy_License_Copy = "Pharmacy_License_Copy is required";

      if (
        !formData.Pharmacy_License &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.Pharmacy_License = "Pharmacy_License is required";
      if (
        !formData.NCPDP &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.NCPDP = "NCPDP is required";
      if (
        !formData.Federal_Tax_ID &&
        userType != "General Merchandise Seller" &&
        userType != "Retail Customer"
      )
        newErrors.Federal_Tax_ID = "Federal is required";
      if (
        !formData.NPI &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Retail Customer"
      )
        newErrors.NPI = "NPI is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const isStepOptional = (step) => step === 1 || step === 2 || step === 3;

  const isStepSkipped = (step) => skippedSteps.includes(step);

  const navigate = useNavigate();
  const [isSubmit, setisSubmit] = useState(true);
  console.log("hh", activeStep, usertype)

  const handleNext = () => {
    if (activeStep === 0) validatePassword(formData.password);
    if (validateStep(activeStep)) {
      setisSubmit(true);
      if (activeStep === 2 && userType === "Retail Customer") {

        setActiveStep(4);
        return;
      }
      if (activeStep === 0 && validatePassword(formData.password) == false) {
        return;
      }

      if (activeStep === 1 && usertype === "buyer") {
        setActiveStep(3);
      } else if (
        activeStep === steps.length
        // || (activeStep == 1 && userType === "Retail Customer")
      ) {
        localStorage.removeItem("formData");
        formData.userType = userType;
        localStorage.setItem("formData", JSON.stringify(formData));

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

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps((prevSkippedSteps) => [...prevSkippedSteps, activeStep]);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

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
    console.log("value", value)
    setusertype(value);
    if (activeStep === 1) {
      validateStep(activeStep);
    }
  };
  console.log(usertype);
  console.log(errors);
  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];
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
                  size="small"
                  className="w-full"
                />
              </div>

              <div className="w-[45%]">
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  name="Last_Name"
                  type="text"
                  value={formData.Last_Name}
                  onChange={handleInputChange}
                  error={!!errors.Last_Name}
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
                  helperText={
                    errors?.Phone_number !== null && formData.Phone_number != 0
                      ? errors.Phone_number
                      : "phone number"
                  }
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
                  helperText={
                    !formData.confirmPassword
                      ? ""
                      : errors.confirmPassword
                        ? errors.confirmPassword
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
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="p-4">
              <div className="mb-4">
                <label
                  className=" flex gap-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userType"
                >
                  User Type
                  <div className="text-red-400">
                    {errors.userType && <div>{errors.userType}</div>}
                  </div>
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select User Type</option>
                  {userTypes.map((type, index) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4  ">
                <label className=" flex gap-2 text-gray-700 text-sm font-bold mb-2">
                  Account Type
                  <div className="text-red-400">
                    {errors.accountType && <div>{errors.accountType}</div>}
                  </div>
                </label>
                {getAccountTypes().map((type) => (
                  <div key={type} className="flex ml-4 items-center mb-2">
                    <input
                      type="radio"
                      id={type}
                      name="accountType"
                      value={type}
                      checked={accountType === type}
                      onChange={(e) =>
                        setAccountType(e.target.value) &&
                        handleusertypechange(e.target.value)
                      }
                      className="mr-2 leading-tight flex"
                    />
                    <label htmlFor={type} className="text-gray-700">
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              {/* <div className={${userType === "Vendor" ? "" :""}}>
              <input type="checkbox" className="mr-2 leading-tight ml-4" />
              <label className= "text-gray-700 "> Are you a UPN Member</label>
            </div> */}

              <div
                className={`${userType === "General Merchandise Seller"
                    ? " opacity-50 pointer-events-none"
                    : ""
                  } flex items-center`}
              >
                <label className="text-gray-700">
                  <span className="text-red-500">*</span>Are you a UPN Member
                </label>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <div>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "A" } }}
                    />
                    <span>YES</span>
                  </div>
                  <div>
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "B" } }}
                    />
                    <span>NO</span>
                  </div>
                </Box>
              </div>
              <span>
                {errors.upnMember && (
                  <span
                    className={`${userType === "General Merchandise Seller" ? " hidden" : ""
                      } text-red-500`}
                  >
                    {errors.upnMember}
                  </span>
                )}
              </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-4 align-middle">
            <div
              className={`${userType === "Vendor" ||
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
                size="small"
                className="w-[92%]"
              />
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Legal Bussiness Name"
                  id="outlined-size-small"
                  name="legalBusinessName"
                  value={formData.legalBusinessName}
                  onChange={handleInputChange}
                  error={!!errors.legalBusinessName}
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>
            <div
              className={`${userType === "Vendor" ||
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
                size="small"
                className="w-[92%]"
              />
            </div>

            <div>
              <TextField
                label="Address1"
                id="outlined-size-small"
                name="Address1"
                value={formData.Address1}
                onChange={handleInputChange}
                error={!!errors.Address1}
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
                onChange={handleInputChange}
                error={!!errors.city}
                size="small"
                className="w-[92%]"
              />
            </div>

            <div>
              {/* <FormControl
                className="w-[92%]"
                size="small"
                error={!!errors.State}
              >
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  id="state-select"
                  label="State"
                  value={formData.State}
                  name="State"
                  onChange={handleInputChange}
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
                      value={state.abbreviation}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.State && <span>{errors.State}</span>}
              </FormControl> */}
              <FormControl
                className="w-[92%]"
                size="small"
                error={!!errors.State}
              >
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  id="state-select"
                  label="State"
                  value={formData.State}
                  name="State"
                  onChange={handleInputChange}
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
                        value={state.abbreviation} // Use abbreviation as the value
                      >
                        {state.name}
                      </MenuItem>
                    ))}
                </Select>
                {errors.State && <span>{errors.State}</span>}
              </FormControl>
            </div>

            <div>
              <TextField
                label="Zip"
                id="outlined-size-small"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                error={!!errors.zip}
                size="small"
                className="w-[92%]"
              />
            </div>

            {/* Address */}

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Business Phone"
                  id="outlined-size-small"
                  name="BusinessPhone"
                  type="phone_number"
                  value={formData.BusinessPhone}
                  onChange={handleInputChange}
                  error={!!errors.BusinessPhone}
                  placeholder="Enter your business phone"
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Bussiness Fax"
                  id="outlined-size-small"
                  name="Business_Fax"
                  value={formData.Business_Fax}
                  onChange={handleInputChange}
                  error={!!errors.Business_Fax}
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>

            <div
              className={`${userType === "Retail Customer" ? "hidden" : ""}`}
            >
              <div>
                <TextField
                  label="Bussiness Email"
                  id="outlined-size-small"
                  type="email"
                  name="Business_Email"
                  value={formData.Business_Email}
                  onChange={handleInputChange}
                  error={!!errors.Business_Email}
                  size="small"
                  className="w-[92%]"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="my-2 w-full flex flex-col justify-center items-center ">
            <div className="flex flex-row w-full   my-3 justify-between">
              <div className="w-[45%]">
                <TextField
                  label="DEA"
                  id="outlined-size-small"
                  name="DEA"
                  value={formData.DEA}
                  onChange={handleInputChange}
                  error={!!errors.DEA}
                  size="small"
                  inputProps={{ tabIndex: "1" }}
                  className="w-full"
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
                  inputProps={{ tabIndex: "4" }}
                  tabIndex={4}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between ">
              <div className="w-[45%] flex flex-col">
                <span className="text-xs">DEA Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  name="DEA_Expiration_Date"
                  value={formData.DEA_Expiration_Date}
                  onChange={handleInputChange}
                  id="outlined-size-small"
                  error={!!errors.DEA_Expiration_Date}
                  size="small"
                  inputProps={{ tabIndex: "2" }}
                  tabIndex={2}
                  className="w-full"
                  helperText={
                    formData.DEA_Expiration_Date != null ?
                      errors.DEA_Expiration_Date : ""
                  }
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
                  inputProps={{ tabIndex: "5" }}
                  tabIndex={5}
                  className="w-full"
                  helperText={
                    formData.Pharmacy_Expiration_Date != null ?
                      errors.Pharmacy_Expiration_Date : ""
                  }

                />
              </div>
            </div>

            <div className="flex flex-row w-full justify-between ">
              <div className=" w-[45%]">
                <span className="text-xs">DEA License Copy(jpg,png,jpeg) </span>
                <TextField
                  label=""
                  type="file"
                  onChange={handleInputChange}
                  name="DEA_License_Copy"
                  id="outlined-size-small"
                  error={!!errors.DEA_License_Copy}
                  size="small"
                  inputProps={{ tabIndex: "3" }}
                  tabIndex={3}
                  className="w-full"
                  helperText={errors?.DEA_License_Copy}
                />
                {file1 && (
                  <div className={`${file1.length > 0 ? "" : "hidden"}`}>
                    {file1}
                  </div>
                )}
              </div>

              <div className="w-[45%]">
                <span className="text-xs">
                  Pharmacy License Copy(jpeg,jpg,png){" "}
                </span>
                <TextField
                  label=""
                  type="file"
                  onChange={handleInputChange}
                  name="Pharmacy_License_Copy"
                  id="outlined-size-small"
                  error={!!errors.Pharmacy_License_Copy}
                  size="small"
                  inputProps={{ tabIndex: "6" }}
                  tabIndex={6}
                  className="w-full"
                  helperText={errors?.Pharmacy_License_Copy}
                />
                {file2 && (
                  <div className={`${file2.length > 0 ? "" : "hidden"}`}>
                    {file2}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row w-full  my-3 justify-between">
              <div className="w-[45%]">
                <TextField
                  label="NPI"
                  id="outlined-size-small"
                  name="NPI"
                  value={formData.NPI}
                  onChange={handleInputChange}
                  error={!!errors.NPI}
                  size="small"
                  inputProps={{ tabIndex: "7" }}
                  tabIndex={7}
                  className="w-full"
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
                  inputProps={{ tabIndex: "8" }}
                  tabIndex={8}
                  className="w-full"

                // style={{ width: "101%" }}
                />
              </div>
            </div>

            <div className="flex w-full flex-row my-2 justify-start ">
              <div className="w-[45%]">
                <TextField
                  label="Federal Tax ID"
                  id="outlined-size-small"
                  name="Federal_Tax_ID"
                  value={formData.Federal_Tax_ID}
                  onChange={handleInputChange}
                  error={!!errors.Federal_Tax_ID}
                  size="small"
                  inputProps={{ tabIndex: "9" }}
                  tabIndex={9}
                  className="w-full"
                />
              </div>
            </div>
            <div className=" w-full">
              <div>
                <input
                  type="checkbox"
                  className=" leading-tight "
                  inputProps={{ tabIndex: "10" }}
                  tabIndex={10}
                />
                <label className="text-gray-700  ">
                  {" "}
                  Signup for News letters
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className=" leading-tight "
                  onClick={handleVisibleClick}
                  inputProps={{ tabIndex: "11" }}
                  tabIndex={11}
                />
                <label className="text-gray-700 ml-1 ">
                  Please Accepts for PharmEtrade{" "}
                  <Link to="/termsandconditions" className="text-red-500">
                    Terms& Conditions{" "}
                  </Link>
                </label>
              </div>
              {/* {Visible && (
                <div>
                  <div className="flex justify-center items-center ">
                    {/* <h5 className="text-[18px] ml-1">Enter OTP</h5> 
                    <TextField
                      id="standard-basic"
                      label="Enter Captcha"
                      variant="standard"
                      tabIndex={12}
                    />

                    {/* <OTPInput length={6}  /> 
                  </div>
                </div>
              )} */}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full flex justify-center">
            <div className="">
              Thank you for registering as
              <span className="font-bold text-green-500"> {userType} </span>,
              You are successfully registered.
              <p>
                If you have any question contact us.{" "}
                <span className="hover:text-green-500 hover:font-semibold text-blue-900 underline">
                  help@pharmetrade.com{" "}
                </span>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="">
      <div className=" h-screen w-screen">
        <img
          src={background_image}
          alt="Background"
          className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
        />

        <div className="w-full h-full ">
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "220px", margin: "5px" }}
            />
          </Link>
          <div className="h-[80%]  flex justify-center items-center">
            <div className="bg-white w-[600px] px-12 py-6 rounded-lg shadow-lg">
              <span
                className={`text-blue-900 ${activeStep == 4 ? "hidden" : ""
                  } text-[25px]  text-center font-bold     flex justify-center items-center  `}
              >
                SignUp
              </span>
              <div className={`flex my-4 ${activeStep == 4 ? "hidden" : ""}  `}>
                {steps.map((label, index) => (
                  <div
                    key={label}
                    className="flex  items-center flex-1 flex-col"
                  >
                    <div
                      className=" w-11 h-11 border rounded-full bg-blue-900 text-white flex justify-center items-center"
                      style={{
                        ...(activeStep === index ? activeCircleStyle : {}),
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-base">{label}</div>
                  </div>
                ))}
              </div>

              {getStepContent(activeStep)}
              <div className="flex justify-around m-2">
                <button
                  onClick={handleBack}
                  className={`${activeStep === 0 ? "opacity-50 " : ""} ${activeStep === 4 ? "hidden" : ""
                    } bg-blue-900 w-24 p-2 flex justify-center text-white h-10 cursor-pointer font-semibold border rounded-lg my-4 `}
                >
                  <img src={back} className="w-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-blue-900 w-24 h-10 cursor-pointer  border rounded-lg my-4 flex items-center justify-center"
                >
                  {activeStep === 4 ? (
                    <div className="text-white font-bold">Go To Home</div>
                  ) : (
                    <img src={next} alt="Next" className="w-6" />
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
  backgroundColor: "#037d50",
};

export default LayoutJoin;
