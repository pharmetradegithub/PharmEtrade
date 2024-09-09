import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import cross from "../../assets/letter-x[1].png";
import plus from "../../assets/Icons/plus[1].png";
import logo from "../../assets/logo2.png";
import payment from "../../assets/Icons/paymenticons.png";
import dropdown from "../../assets/Icons/dropDownb.png";
import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchProductByIdApi } from "../../Api/ProductApi";
import Payment from "./Payment";
import { FaLock } from "react-icons/fa";
import ItemsAndDelivery from "./ItemsAndDelivery";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
function Address({ topMargin, totalAmount }) {
  const fetchData = useSelector((state) => state.product.Products);
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");

  // console.log("ffffffff--->", totalAmount)
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  // const [states, setStates] = useState([]);

  // useEffect(() => {
  //   // Set the states data
  //   setStates(useStates); // Adjust based on actual structure
  // }, []);
  const [isTotalHidden, setIsTotalHidden] = useState(false);
  const handleOpenAddress = () => {
    // Navigate("/address");
    setIsTotalHidden(false)
  };


  // Function to handle the "Use this address" button click
  const handleUseAddress = () => {
    setIsTotalHidden(true);
  };

  // const [formErrors, setFormErrors] = useState({});

  const [showWeekendOptions, setShowWeekendOptions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const details = [
    {
      name: "Ram",
      // lastname: "Smith",
       Address: 'Dollars',
      City: "Dollars",
      States: "Dollars",
      Country: "US",
      Pin: 56789,
      email: "ram@example.com",
      phone: "+1234567890",

    },
  ];
  const [formErrors, setFormErrors] = useState({
    First_Name: "",
    Phone_Number: "",
    Town_City: "",
    Pin_Code: ""
  });



  // card pop up open
  //  const[ isCardPopup, SetIsCardPopup] =useState(false)

  //  const handlecardopen =()=>{
  //  SetIsCardPopup(true)
  //  }

  //  const handlecardremove =()=>{
  //  SetIsCardPopup(false)
  // }
  useEffect(() => {
    if (shortPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const [shortPopup, setShortPopup] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState("");
  const [iscardEmiopen, SetIsCardEmiOpen] = useState(false);

  const handleRemove = () => setShowPopUp(false);
  const handleshortpopOpen = () => setShortPopup(!shortPopup);

  const handleAddressTypeClick = (type) => {
    setSelectedAddressType(type);
  };

  const handlepopOpen = () => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    setShowPopUp(true);
  };

  const handleCardemiOpen = () => {
    SetIsCardEmiOpen(true);
  };

  const handleCardemiremove = () => {
    SetIsCardEmiOpen(false);
  };

  const handleAddaddress = () => {
    setShortPopup(true);
  };
  const handleAddaddressremove = () => {
    setShortPopup(false);
  };

  const handleUseAddressbutton = () => {
    const errors = {};

    // Check for empty required fields and set error messages
    if (!document.getElementById("First_Name").value) {
      errors.First_Name = "First Name is required";
    }
    if (!document.getElementById("Phone_Number").value) {
      errors.Phone_Number = "Phone Number is required";
    }
    if (!document.getElementById("Pin_Code").value) {
      errors.Pin_Code = "Pin Code is required";
    }
    if (!document.getElementById("Address").value) {
      errors.Address =
        "Address is required";
    }
    if (!document.getElementById("Bussiness_phone").value) {
      errors.Bussiness_phone = "Bussiness_phone is required";
    }
    if (!document.getElementById("States").value) {
      errors.States = "States is required";
    }
    if (!document.getElementById("Town_City").value) {
      errors.Town_City = "Town_City is required";
    }

    setFormErrors(errors);

    // If no errors, proceed with using the address
    if (Object.keys(errors).length === 0) {
      // Handle the logic for using the address
      alert("Address used successfully!");
    }
  };
  const navigate = useNavigate();

  //   const handleNavigate = () => {
  //     navigate("/app");
  //   };

  // year month drop down

  //   const generateYears = (startYear, endYear) => {
  //     let years = [];
  //     for (let year = startYear; year <= endYear; year++) {
  //       years.push(year);
  //     }
  //     return years;
  //   };

  //   const generateMonths = () => {
  //     const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //     return months;
  //   };

  //   const currentYear = new Date().getFullYear();
  //   const futureYears = generateYears(2024, currentYear + 40); // Including future years (e.g., 10 years ahead)
  //   const months = generateMonths();

  const [showpagepopup, setShowpagepopup] = useState(false);

  const handleNavigate = () => {
    setShowpagepopup(true);
  };

  const handleStayInCheckout = () => {
    // Handle action when "Stay in Checkout" is clicked
    setShowpagepopup(false);
    // Add your logic here
  };

  const handleReturnToCart = () => {
    // Handle action when "Return to Cart" is clicked
    // setShowpagepopup(false);
    // Add your logic here
    navigate('/cart')
  };

  // Edit
  // const [editAddressIndex, setEditAddressIndex] = useState(null); // To track which address is being edited

  // const [addressForm, setAddressForm] = useState({
  //   First_Name: '',
  //   Phone_Number: '',
  //   Pin_Code: '',
  //   Address: '',
  //   Bussiness_phone: '',
  //   States: '',
  //   Town_City: '',
  // });

  const [addressForm, setAddressForm] = useState({
    First_Name: '',
    Phone_Number: '',
    Pin_Code: '',
    Address: '',
    Bussiness_phone: '',
    States: '',
    Town_City: '',
  });
  // const handleEditAddress = () => {
  //   const selectedAddress = details;
  //   setEditAddressIndex();
  //   setAddressForm({
  //     First_Name: selectedAddress.name,
  //     Phone_Number: selectedAddress.phone,
  //     Pin_Code: selectedAddress.Pin,
  //     Address: selectedAddress.Address,
  //     Bussiness_phone: '',
  //     States: '',
  //     Town_City: selectedAddress.City,
  //   });
  //   setShowPopUp(true);
  // };

  const handleEditAddress = () => {
    // Assuming you want to edit the first address (index 0)
    const selectedAddress = details[0];

    // Populate the form with the selected address
    setAddressForm({
      First_Name: selectedAddress.name,
      Phone_Number: selectedAddress.phone,
      Town_City: selectedAddress.City,
      Pin_Code: selectedAddress.Pin,
      States:selectedAddress.States,
      Address:selectedAddress.Address,
    });

    // Show the popup with the pre-filled address
    setIsShowPopUp(true);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddressForm({ ...addressForm, [name]: value });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSaveAddress = () => {
  //   if (editAddressIndex !== null) {
  //     const updatedDetails = [...details];
  //     updatedDetails[editAddressIndex] = {
  //       ...updatedDetails[editAddressIndex],
  //       name: addressForm.First_Name,
  //       phone: addressForm.Phone_Number,
  //       Pin: addressForm.Pin_Code,
  //       Address: addressForm.Address,
  //       City: addressForm.Town_City,
  //       // Add other fields as needed
  //     };
  //     setDetails(updatedDetails);
  //     setShowPopUp(false);
  //   }
  // };



  const handleSaveAddress = () => {
    // Implement save address functionality here
    console.log("Address saved:", addressForm);
    setShowPopUp(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white  Largest:w-[1550px]  Laptop:w-full  w-full h-fit text-lg text-black px-12 py-2 relative">
        <div className=" w-[85%] flex items-center shadow-transparent justify-between">
          <div>
            <img
              src={logo}
              className="w-48 h-16 cursor-pointer"
              alt="logo"
              onClick={handleNavigate}
            />
            {showpagepopup && (
              <div className="z-50 flex items-center justify-center bg-opacity-50">
                <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
                  <div className="flex justify-center gap-4">
                    <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded"
                      onClick={handleStayInCheckout}>
                      Stay in Checkout
                    </button>
                    <button className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded"
                      onClick={handleReturnToCart}>
                      Return to Cart
                    </button>
                  </div>
                </div>
              </div>

            )}
          </div>
          <h1 className="text-3xl flex justify-center items-center text-black ">
            Checkout
          </h1>
          <FaLock />
        </div>
        <div className="bg-white p-4 w-full h-full border-t">
          <div className="flex flex-col">
            <div className="">
              {!isTotalHidden && (
                <h1 className="text-orange-700 font-semibold text-lg my-2">
                  1 Select a delivery and service address
                </h1>
              )}
              <div className="flex w-full ">
                {!isTotalHidden && (
                  // {isOpenAddress &&
                  <div className="flex min-w-full">
                    {/* <div className=""> */}
                    <div className=" border shadow-md rounded-md h-full">
                      <div className="p-2 mx-8 ">
                        <h1 className="border-b-2 text-base">Your Address</h1>
                        <div className="border flex-col rounded-md flex my-2 p-2  px-8  bg-pink-50 border-orange-200">
                          {/* <div className="flex">
                            <input
                              type="radio"
                              checked
                              className="mr-2"
                              readOnly
                            />
                            <div className="flex items-center justify-center text-base">
                              <h1 className="font-semibold">
                                {details[0].name},
                              </h1>
                              <p>{details[0].Address},</p>
                              <p className="mx-1">{details[0].City},</p>
                              <p>{details[0].State},</p>
                              <p className="mx-1">{details[0].Country},</p>
                              <p>{details[0].Pin},</p>
                              <p className="mx-1">{details[0].email},</p>
                              <p>{details[0].phone}</p>
                              <div className="flex hover:underline hover:text-red-500 cursor-pointer ml-2" onClick={() => handleEditAddress()}>
                                <p className=" text-sm    text-cyan-500">
                                  Edit{" "}
                                </p>
                                <p className=" text-sm  text-cyan-500">
                                  Address{" "}
                                </p>
                              </div>

                              {showPopUp && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                  <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                                    <div className="flex justify-between border-b pb-4 items-center">
                                      <h1>Edit Address</h1>
                                      <img src={cross} className="w-5 h-5 cursor-pointer" onClick={() => setShowPopUp(false)} alt="Close Icon" />
                                    </div>

                                    
                                    <div className="my-4">
                                      <TextField
                                        label="First Name"
                                        name="First_Name"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.First_Name}
                                        onChange={handleInputChange}
                                        error={!!formErrors.First_Name}
                                        helperText={formErrors.First_Name}
                                      />
                                    </div>
                                    <div className="my-4">
                                      <TextField
                                        label="Phone Number"
                                        name="Phone_Number"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Phone_Number}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Phone_Number}
                                        helperText={formErrors.Phone_Number}
                                      />
                                    </div>
                                    
                                   
                                    <div className="my-4">
                                      <TextField
                                        label="Town/City"
                                        name="Town_City"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Town_City}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Town_City}
                                        helperText={formErrors.Town_City}
                                      />
                                    </div>
                                    <div className="my-4">
                                      <TextField
                                        label="Pin Code"
                                        name="Pin_Code"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Pin_Code}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Pin_Code}
                                        helperText={formErrors.Pin_Code}
                                      />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                      <button className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white" onClick={handleSaveAddress}>
                                        Save Address
                                      </button>
                                      <button className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm" onClick={() => setShowPopUp(false)}>
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div> */}


                          <div className="flex">
                            <input
                              type="radio"
                              checked
                              className="mr-2"
                              readOnly
                            />
                            <div className="flex items-center justify-center text-base">
                              <h1 className="font-semibold">{details[0].name},</h1>
                              <p>{details[0].Address},</p>
                              <p className="mx-1">{details[0].City},</p>
                              <p>{details[0].States},</p>
                              <p className="mx-1">{details[0].Country},</p>
                              <p>{details[0].Pin},</p>
                              <p className="mx-1">{details[0].email},</p>
                              <p>{details[0].phone}</p>

                              <div className="flex hover:underline hover:text-red-500 cursor-pointer ml-2" onClick={handleEditAddress}>
                                <p className="text-sm text-cyan-500">Edit</p>
                                <p className="text-sm text-cyan-500">Address</p>
                              </div>

                              {isShowPopUp && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                  <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                                    <div className="flex justify-between border-b pb-4 items-center">
                                      <h1>Edit Address</h1>
                                      <img
                                        src={cross} // Replace with your close icon source
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => setIsShowPopUp(false)}
                                        alt="Close Icon"
                                      />
                                    </div>

                                    {/* Address form fields */}

                                    <div className="flex my-2 gap-2">
                                      <TextField
                                        label="First Name"
                                        name="First_Name"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.First_Name}
                                        onChange={handleInputChange}
                                        error={!!formErrors.First_Name}
                                        helperText={formErrors.First_Name}
                                      />

                                      <TextField
                                        label="Phone Number"
                                        name="Phone_Number"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Phone_Number}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Phone_Number}
                                        helperText={formErrors.Phone_Number}
                                      />
                                    </div>

                                    <div className="my-4 flex gap-2">
                                      <TextField
                                        label="Address"
                                        id="Address"
                                        name="Address"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Address}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Address}
                                        helperText={formErrors.Address}
                                      />

                                      <TextField
                                        label="Town/City"
                                        name="Town_City"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Town_City}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Town_City}
                                        helperText={formErrors.Town_City}
                                      />
                                    </div>

                                   
                                 

                                    <div className="flex my-2 gap-2">
                                      <TextField
                                        label="States"
                                        id="States"
                                        name="States"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.States}
                                        onChange={handleInputChange}
                                        error={!!formErrors.States}
                                        helperText={formErrors.States}
                                      />

                                      <TextField
                                        label="Pin Code"
                                        name="Pin_Code"
                                        size="small"
                                        className="w-full"
                                        value={addressForm.Pin_Code}
                                        onChange={handleInputChange}
                                        error={!!formErrors.Pin_Code}
                                        helperText={formErrors.Pin_Code}
                                      />

                                    </div>


                                    <div className="flex gap-2">
                                      <TextField
                                        label="Bussiness_phone"
                                        id="Bussiness_phone"
                                        name="Bussiness_phone"
                                        size="small"
                                        className="w-[49%]"
                                        error={!!formErrors.Bussiness_phone}
                                        helperText={formErrors.Bussiness_phone}
                                      />
                                    </div>
                                    <div className="flex justify-between mt-6">
                                      <button
                                        className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                                        onClick={handleSaveAddress}
                                      >
                                        Save Address
                                      </button>
                                      <button
                                        className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                                        onClick={() => setIsShowPopUp(false)}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <p className=" text-sm  ml-5  text-cyan-500">
                              Add delivery instruction{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex cursor-pointer">
                          <img src={plus} className="w-5 h-5" />
                          <h1
                            className="hover:text-red-400 hover:underline text-cyan-600"
                            onClick={handlepopOpen}
                          >
                            Add a new address{" "}
                          </h1>

                          {showPopUp && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                              <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                                <div className="flex justify-between border-b pb-4 items-center">
                                  <h1>Add a new address</h1>
                                  <img
                                    src={cross} // replace with the actual path to your close icon
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={handleRemove}
                                    alt="Close Icon"
                                  />
                                </div>
                                <div className="flex my-2 gap-2">
                                  <TextField
                                    label="Full Name"
                                    id="First_Name"
                                    name="First_Name"
                                    size="small"
                                    className="w-full "
                                    error={!!formErrors.First_Name}
                                    helperText={formErrors.First_Name}
                                  />

                                  <TextField
                                    label="Phone Number"
                                    id="Phone_Number"
                                    name="Phone_Number"
                                    size="small"
                                    className="w-full "
                                    error={!!formErrors.Phone_Number}
                                    helperText={formErrors.Phone_Number}
                                  />
                                </div>
                                <div className="my-4 flex gap-2">
                                  <TextField
                                    label="Address"
                                    id="Address"
                                    name="Address"
                                    size="small"
                                    className="w-full"
                                    error={
                                      !!formErrors.Address
                                    }
                                    helperText={
                                      formErrors.Address
                                    }
                                  />

                                  <TextField
                                    label="City"
                                    id="Town_City"
                                    name="Town_City"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Town_City}
                                    helperText={formErrors.Town_City}
                                  />
                                </div>
                                <div className="flex my-2 gap-2">
                                  <TextField
                                    label="States"
                                    id="States"
                                    name="States"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.States}
                                    helperText={formErrors.States}
                                  />

                                  <TextField
                                    label="Pin Code"
                                    id="Pin_Code"
                                    name="Pin_Code"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Pin_Code}
                                    helperText={formErrors.Pin_Code}
                                  />

                                </div>
                                <div className="flex my-2 gap-2">
                                  {/* <TextField
                                    label="LandMark"
                                    id="LandMark"
                                    name="LandMark"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.LandMark}
                                    helperText={formErrors.LandMark}
                                  /> */}
                                  {/* <FormControl
                className="w-[92%]"
                size="small"
                // error={!!errors.State}
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
                                  <TextField
                                    label="Bussiness_phone"
                                    id="Bussiness_phone"
                                    name="Bussiness_phone"
                                    size="small"
                                    className="w-[49%]"
                                    error={!!formErrors.Bussiness_phone}
                                    helperText={formErrors.Bussiness_phone}
                                  />


                                </div>


                                <div className="my-4">
                                  <input type="checkbox" id="default-address" />
                                  <label
                                    htmlFor="default-address"
                                    className="ml-2"
                                  >
                                    Make this my default address
                                  </label>
                                </div>

                                <div className="my-4 cursor-pointer">
                                  <h1>Delivery instructions (optional)</h1>
                                  <div
                                    className="flex"
                                    onClick={handleshortpopOpen}
                                  >
                                    <img src={dropdown} className="w-5 h-5 " />
                                    <p className="hover:text-red-400 hover:underline text-base text-cyan-600">
                                      Add Preference, notes, access codes and
                                      more
                                    </p>
                                  </div>

                                  {shortPopup && (
                                    <div>
                                      <div>
                                        <h1>Address Type</h1>
                                        <div className="flex">
                                          <h1
                                            className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === "House" &&
                                              "bg-gray-300"
                                              }`}
                                            onClick={() =>
                                              handleAddressTypeClick("House")
                                            }
                                          >
                                            House
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-24 h-7 cursor-pointer ${selectedAddressType ===
                                              "Apartment" && "bg-gray-300"
                                              }`}
                                            onClick={() =>
                                              handleAddressTypeClick(
                                                "Apartment"
                                              )
                                            }
                                          >
                                            Apartment
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-18 h-7 cursor-pointer ${selectedAddressType ===
                                              "Business" && "bg-gray-300"
                                              }`}
                                            onClick={() =>
                                              handleAddressTypeClick("Business")
                                            }
                                          >
                                            Business
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === "Other" &&
                                              "bg-gray-300"
                                              }`}
                                            onClick={() =>
                                              handleAddressTypeClick("Other")
                                            }
                                          >
                                            Other
                                          </h1>
                                        </div>
                                      </div>

                                      <div className="my-4">
                                        {(selectedAddressType === "House" ||
                                          selectedAddressType ===
                                          "Apartment") && (
                                            <div className="border rounded-md shadow-md  p-4">
                                              <h1 className="text-sm">
                                                Independent house, villa, or
                                                builder floor (6 AM - 11 PM
                                                delivery)
                                              </h1>

                                              <div className="flex justify-evenly flex-col mt-4">
                                                <div className="flex flex-col">
                                                  <div
                                                    onClick={() =>
                                                      setShowWeekendOptions(
                                                        !showWeekendOptions
                                                      )
                                                    }
                                                    className="cursor-pointer"
                                                  >
                                                    <p className="text-base border-b hover:text-cyan-500">
                                                      Can you receive deliveries
                                                      at this address on weekends?
                                                    </p>
                                                  </div>
                                                  {showWeekendOptions && (
                                                    <div className="flex border-b mt-2">
                                                      <div className="flex-col flex mr-4">
                                                        <h1>Saturday</h1>
                                                        <div className="flex justify-between mt-1">
                                                          <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                            Yes
                                                          </p>
                                                          <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                            No
                                                          </p>
                                                        </div>
                                                      </div>
                                                      <div className="flex-col flex">
                                                        <h1>Sunday</h1>
                                                        <div className="flex justify-between mt-1">
                                                          <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                            Yes
                                                          </p>
                                                          <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                            No
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>

                                                <div className="flex flex-col mt-4">
                                                  <div
                                                    onClick={() =>
                                                      setShowInstructions(
                                                        !showInstructions
                                                      )
                                                    }
                                                    className="cursor-pointer"
                                                  >
                                                    <p className="border-b text-base hover:text-cyan-500">
                                                      Do we need additional
                                                      instructions to deliver to
                                                      this address?
                                                    </p>
                                                  </div>
                                                  {showInstructions && (
                                                    <div className="mt-2">
                                                      <textarea
                                                        type="text"
                                                        className="w-96 h-20 border border-black outline-none"
                                                        placeholder="provide details such as building description , a nearby landmark, or other navigation instructions."
                                                      />
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          )}

                                        {(selectedAddressType === "Business" ||
                                          selectedAddressType === "Other") && (
                                            <div className="border rounded-md shadow-md  p-4">
                                              <h1 className="text-sm">
                                                Commercial building, office, or
                                                store (10 AM - 7 PM delivery)
                                              </h1>
                                              <div className="mt-3 border-b pb-2">
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">Monday</h1>
                                                </div>
                                                <div className="flex  ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">
                                                    Tuesday
                                                  </h1>
                                                </div>
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">
                                                    Wednesday
                                                  </h1>
                                                </div>
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">
                                                    Thursday
                                                  </h1>
                                                </div>
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">Friday</h1>
                                                </div>
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">
                                                    Saturday
                                                  </h1>
                                                </div>
                                                <div className="flex ">
                                                  <input type="checkbox" />
                                                  <h1 className="mx-2">Sunday</h1>
                                                </div>
                                              </div>

                                              <div className="flex flex-col mt-4">
                                                <div
                                                  onClick={() =>
                                                    setShowInstructions(
                                                      !showInstructions
                                                    )
                                                  }
                                                  className="cursor-pointer"
                                                >
                                                  <p className="border-b text-sm hover:text-cyan-500">
                                                    Do we need additional
                                                    instructions to deliver to
                                                    this address?
                                                  </p>
                                                </div>
                                                {showInstructions && (
                                                  <div className="mt-2">
                                                    <textarea
                                                      type="text"
                                                      className="w-96 h-20 border border-black outline-none"
                                                      placeholder="provide details such as building description , a nearby landmark, or other navigation instructions."
                                                    />
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="flex justify-between mt-6">
                                  <button
                                    className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                                    onClick={handleUseAddressbutton}
                                  >
                                    Use this address
                                  </button>
                                  <button
                                    className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                                    onClick={handleRemove}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Hide this button after it's clicked */}
                        <button
                          className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
                          onClick={handleUseAddress}
                        >
                          Use this address
                        </button>
                      </div>
                    </div>
                    {/* </div> */}
                    <div className=" w-[30%]  mx-16  flex flex-col pt-2 items-center relative">
                      <div className="border fixed shadow-md rounded-md p-7 py-5">
                        <div className="flex items-center justify-center">
                          <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">
                            Use this address
                          </button>
                        </div>
                        <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                          <p>Choose a shipping address and payment</p>
                          <p>method to calculate shipping, handling and</p>
                          <p>tax.</p>
                        </div>
                        <div>
                          <h1 className="font-semibold text-xl my-2">
                            Order Summary
                          </h1>
                        </div>
                        <div className="flex justify-between text-sm mt-3">
                          <p>Items :</p>
                          <p>--</p>
                        </div>
                        <div className="flex justify-between text-sm border-b my-2">
                          <p>Delivery :</p>
                          <p>--</p>
                        </div>
                        <div className="flex justify-between text-red-500 font-semibold">
                          <p>Order Total:</p>
                          <p>${total}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </div>

            {/* other components start */}
            {!isTotalHidden && (
              <div className="w-[60%]">
                <div className="border-b my-3">
                  <h1>2 Payment method</h1>
                </div>
                <div className="border-b my-3">
                  <h1>3 Offers</h1>
                </div>
                <div className="border-b my-3">
                  <h1>4 Items and delivery</h1>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full">
              {isTotalHidden && (
                <div className="flex border-b w-full ">
                  <div className="w-[60%]">
                    {/* <div className=" ">  */}
                    <div className="flex justify-between">
                      <h1>1 Delivery address</h1>
                      <div>
                        {details.map((detail, index) => (
                          <div key={index}>
                            <p>{detail.name}</p>
                            <p>{detail.Address}</p>
                            <p>{detail.City}</p>
                            <div className="flex">
                              <p>{detail.State},</p>
                              <p className="mx-2">{detail.Country},</p>
                              <p>{detail.Pin}</p>
                            </div>
                            <p
                              className="text-cyan-500 cursor-pointer hover:text-red-400 hover:underline"
                              onClick={handleAddaddress}
                            >
                              Add delivery instruction
                            </p>

                            {shortPopup && (
                              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-md shadow-lg max-h-[90vh] overflow-auto">
                                  <div className="flex justify-between">
                                    <h1>Address Type</h1>
                                    <img
                                      src={cross}
                                      onClick={handleAddaddressremove}
                                      className="w-5 h-4 cursor-pointer"
                                      alt="Close"
                                    />
                                  </div>
                                  <div className="flex mt-4">
                                    <h1
                                      className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === "House" &&
                                        "bg-gray-300"
                                        }`}
                                      onClick={() =>
                                        handleAddressTypeClick("House")
                                      }
                                    >
                                      House
                                    </h1>
                                    <h1
                                      className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-24 h-7 cursor-pointer ${selectedAddressType === "Apartment" &&
                                        "bg-gray-300"
                                        }`}
                                      onClick={() =>
                                        handleAddressTypeClick("Apartment")
                                      }
                                    >
                                      Apartment
                                    </h1>
                                    <h1
                                      className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-18 h-7 cursor-pointer ${selectedAddressType === "Business" &&
                                        "bg-gray-300"
                                        }`}
                                      onClick={() =>
                                        handleAddressTypeClick("Business")
                                      }
                                    >
                                      Business
                                    </h1>
                                    <h1
                                      className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === "Other" &&
                                        "bg-gray-300"
                                        }`}
                                      onClick={() =>
                                        handleAddressTypeClick("Other")
                                      }
                                    >
                                      Other
                                    </h1>
                                  </div>

                                  <div className="my-4">
                                    {(selectedAddressType === "House" ||
                                      selectedAddressType === "Apartment") && (
                                        <div className="border rounded-md shadow-md p-4">
                                          <h1 className="text-sm">
                                            Independent house, villa, or builder
                                            floor (6 AM - 11 PM delivery)
                                          </h1>

                                          <div className="flex justify-evenly flex-col mt-4">
                                            <div className="flex flex-col">
                                              <div
                                                onClick={() =>
                                                  setShowWeekendOptions(
                                                    !showWeekendOptions
                                                  )
                                                }
                                                className="cursor-pointer"
                                              >
                                                <p className="text-base border-b hover:text-cyan-500">
                                                  Can you receive deliveries at
                                                  this address on weekends?
                                                </p>
                                              </div>
                                              {showWeekendOptions && (
                                                <div className="flex border-b mt-2">
                                                  <div className="flex-col flex mr-4">
                                                    <h1>Saturday</h1>
                                                    <div className="flex justify-between mt-1">
                                                      <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                        Yes
                                                      </p>
                                                      <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                        No
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div className="flex-col flex">
                                                    <h1>Sunday</h1>
                                                    <div className="flex justify-between mt-1">
                                                      <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                        Yes
                                                      </p>
                                                      <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                        No
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>

                                            <div className="flex flex-col mt-4">
                                              <div
                                                onClick={() =>
                                                  setShowInstructions(
                                                    !showInstructions
                                                  )
                                                }
                                                className="cursor-pointer"
                                              >
                                                <p className="border-b text-base hover:text-cyan-500">
                                                  Do we need additional
                                                  instructions to deliver to this
                                                  address?
                                                </p>
                                              </div>
                                              {showInstructions && (
                                                <div className="mt-2">
                                                  <textarea
                                                    className="w-96 h-20 border border-black outline-none"
                                                    placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                                                  />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                    {(selectedAddressType === "Business" ||
                                      selectedAddressType === "Other") && (
                                        <div className="border rounded-md shadow-md p-4">
                                          <h1 className="text-sm">
                                            Commercial building, office, or store
                                            (10 AM - 7 PM delivery)
                                          </h1>
                                          <div className="mt-3 border-b pb-2">
                                            {[
                                              "Monday",
                                              "Tuesday",
                                              "Wednesday",
                                              "Thursday",
                                              "Friday",
                                              "Saturday",
                                              "Sunday",
                                            ].map((day) => (
                                              <div
                                                className="flex items-center mt-2"
                                                key={day}
                                              >
                                                <input type="checkbox" />
                                                <h1 className="mx-2">{day}</h1>
                                              </div>
                                            ))}
                                          </div>

                                          <div className="flex flex-col mt-4">
                                            <div
                                              onClick={() =>
                                                setShowInstructions(
                                                  !showInstructions
                                                )
                                              }
                                              className="cursor-pointer"
                                            >
                                              <p className="border-b text-sm hover:text-cyan-500">
                                                Do we need additional instructions
                                                to deliver to this address?
                                              </p>
                                            </div>
                                            {showInstructions && (
                                              <div className="mt-2">
                                                <textarea
                                                  className="w-96 h-20 border border-black outline-none"
                                                  placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                                                />
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                  <div className="flex justify-end">
                                    <button className="rounded-full bg-blue-900 text-white border w-40 h-8 flex items-center justify-center">
                                      Save Instructions
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div>
                        <button
                          onClick={handleOpenAddress}
                          className="text-cyan-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    {/* </div>
                  </div> */}
                    <Payment />

                    <div>
                      <div className="my-2 border-b">
                        <h1> 3 Offers</h1>
                      </div>

                      <ItemsAndDelivery />

                      {/* <div>
                        <h1>4 Review items and delivery</h1>

                        <div className=" border rounded-md p-4 ">
                          <h1 className="text-lg font-semibold text-green-600">
                            Arriving 7 Sept 2024
                          </h1>
                          <p className="text-base">
                            If you order in the next 10 hours and 50 minutes (
                            Details )
                          </p>
                          <p className="text-base">
                            Items dispatched by Pharmetrade{" "}
                          </p>
                          {itemsdetails.map((itemsdetail, index) => (
                            <div
                              key={index}
                              className="flex justify-around my-4"
                            >
                              <div className="mt-4">
                                {/* <p>{itemsdetail.src}</p>  
                                <img src={offer} className="w-28 h-24  " />
                              </div>
                              <div>
                                <p className="text-base font-semibold">
                                  {itemsdetail.name}
                                </p>
                                <p className="text-base font-semibold">
                                  {itemsdetail.type}
                                </p>
                                <p className="text-base font-semibold">
                                  {itemsdetail.Strength}
                                </p>
                                <p className="text-red-600 font-semibold">
                                  {" "}
                                  ${itemsdetail.Price}
                                </p>
                                <input
                                  type="number"
                                  //  value={quantities[index]}
                                  // onChange={(e) =>
                                  //   handleQuantityChange(index, Number(e.target.value))
                                  // }
                                  className="text-xl border rounded-lg p-1 w-16"
                                  min="1"
                                />
                                <div className="flex">
                                  <p>{itemsdetail.purchase}</p>
                                  <p>{itemsdetail.Company_Name}</p>
                                </div>
                              </div>

                              <div>
                                <p className="text-base font-semibold">
                                  {itemsdetail.option} :
                                </p>
                                <label className="flex items-center text-base text-green-600 font-semibold">
                                  <input
                                    type="radio"
                                    name={`delivery${index}`}
                                    value={itemsdetail.delivery_type1}
                                    className="mr-2"
                                  />
                                  {itemsdetail.delivery1}
                                </label>
                                <p className="text-base ml-5">
                                  {itemsdetail.deliivery_type1}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className=" w-[30%] mx-16 flex flex-col pt-2 items-center">
                    <div className="border fixed shadow-md rounded-md p-7 py-5">
                      <div className="flex items-center justify-center">
                        <button className="border rounded-full text-sm flex justify-center items-center px-4 py-2 bg-blue-900 text-white">
                          Use this payment method
                        </button>
                      </div>
                      <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                        <p>Choose a payment method to continue</p>
                        <p>checking out. You will still have a chance to</p>
                        <p>review and edit your order before it is final.</p>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl my-2">
                          Order Summary
                        </h1>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Items :</p>
                        <p>--</p>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <p>Delivery:</p>
                        <p>--</p>
                      </div><div className="flex justify-between text-sm mt-3">
                        <p>Total:</p>
                        <p>--</p>
                      </div>
                      <div className="flex justify-between text-sm border-b my-2">
                        <p>Promotion Applied :</p>
                        <p>--</p>
                      </div>
                      <div className="flex justify-between text-red-500 font-semibold">
                        <p>Order Total:</p>
                        <p>${total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
