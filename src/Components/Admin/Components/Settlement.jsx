import React, { useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import {
  SellerSettleGetDetailsApi,
  SettleAddApi,
} from "../../../Api/SettlementApi";
import { uploadCustomerImageApi } from "../../../Api/BannerApi";
import { useSelector } from "react-redux";
import { GetCustomers } from "../../../Api/AdminApi";
import Notification from "../../Notification";

function Settlement() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [amountPaying, setAmountPaying] = useState("");
  const [error1, setError1] = useState("");
  const [error, setError] = useState({
    dateFrom: "",
    dateTo: "",
    selectedUsersId: "",
    amountPaying: ""
  });
  const user = useSelector((state) => state.user.user);
  // const [payableTo, setPayableTo] = useState('');
  const [bankName, setBankName] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [chequeMailedOn, setChequeMailedOn] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [paymentMode, setPaymentMode] = useState(""); // 'Wire' or 'Cheque'
  const [chequeImage, setChequeImage] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  // const usersData = {
  //   1: {
  //     firstName: "John",
  //     lastName: "Doe",
  //     address: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zip: "10001",
  //     phoneNumber: "777-777-7777",
  //     email: "john@example.com",
  //   },
  //   2: {
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     address: "456 Elm St",
  //     city: "Los Angeles",
  //     state: "CA",
  //     zip: "90001",
  //     phoneNumber: "888-888-8888",
  //     email: "jane@example.com",
  //   },
  //   3: {
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     address: "456 Elm St",
  //     city: "Los Angeles",
  //     state: "CA",
  //     zip: "90001",
  //     phoneNumber: "888-888-8888",
  //     email: "jane@example.com",
  //   },
  //   4: {
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     address: "456 Elm St",
  //     city: "Los Angeles",
  //     state: "CA",
  //     zip: "90001",
  //     phoneNumber: "888-888-8888",
  //     email: "jane@example.com",
  //   },
  //   // Add more user details as needed
  // };

  // State to store the selected user ID (default is 1 for the first user)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Handle dropdown selection change
  const handleUserChange = (e) => {
    console.log("targetvalue====>", e.target.value);
    setSelectedUserId(e.target.value); // Update selected user ID
    if (selectedValue) {
      setError((prevError) => ({ ...prevError, selectedUsersId: "" }));
    }
  };

  console.log("selecteduserid ====>", selectedUserId);
  // Toggle the visibility of address details
  const toggleDetails = () => {
    // setIsDetailsVisible(!isDetailsVisible);

    if (searchTerm.trim() && selectedUserId) {
      // Toggle visibility only if searchTerm has valid data and a user is selected
      setIsDetailsVisible(!isDetailsVisible);
    } else {
      // Ensure details are hidden if no searchTerm or user is selected
      setIsDetailsVisible(false);
    }
  };

  useEffect(() => {
    // Close details if the search term is cleared
    if (!searchTerm.trim()) {
      setIsDetailsVisible(false);
    }
  }, [searchTerm]);

  // const formData = usersData[selectedUserId];
  // Get the selected user's details based on the selectedUserId
  // const [amountPaying, setAmountPaying] = useState('');
  // const [error, setError] = useState('');

  // const handleAmountChange = (e) => {
  //   const value = e.target.value;

  //   // Allow only numeric values and decimal points
  //   if (/^\d*\.?\d*$/.test(value)) {
  //     setAmountPaying(value);
  //     setError1('');
  //   }
  // };
  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Allow empty value for intermediate edits
    if (value === "" || /^[0-9]*\.?[0-9]{0,2}$/.test(value)) {
      setAmountPaying(value);

      // Validate only when the value is a valid number
      const numericValue = parseFloat(value);
      const maxAmount = parseFloat(storeDetails.TotalAmountToBePaid);

      if (!isNaN(numericValue)) {
        if (numericValue > maxAmount) {
          setError1(`Amount cannot exceed $${maxAmount.toFixed(2)}.`);
        } else {
          setError1("");
        }
      } else {
        setError1("");
      }
    }
  };

  // const handleBlur = () => {
  //   if (!amountPaying) {
  //     setError1('Amount Paying Now is required');
  //   } else if (parseFloat(amountPaying) <= 0) {
  //     setError1('Amount must be greater than zero');
  //   }
  // };
  const handleBlur = () => {
    if (!amountPaying) {
      setError1("Amount Paying Now is required");
    } else if (parseFloat(amountPaying) <= 0) {
      setError1("Amount must be greater than zero");
    } else {
      // Format the value to 2 decimal places
      const formattedValue = parseFloat(amountPaying).toFixed(2);
      setAmountPaying(formattedValue);
      setError1(""); // Clear any previous error
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form is valid, submit data.");
    } else {
      console.log("Form is invalid, show errors.");
    }
  };
  const [getDetails, setGetDetails] = useState({});
  const [storeDetails, setStoreDetails] = useState({});

  useEffect(() => {
    if (getDetails) {
      setStoreDetails({
        FirstName: getDetails.sellerFirstName,
        LastName: getDetails.sellerLastName,
        Address: getDetails.sellerAddress,
        City: getDetails.sellerCity,
        State: getDetails.sellerState,
        Zip: getDetails.sellerZip,
        PhoneNumber: getDetails.sellerPhone,
        Email: getDetails.sellerEmail,
        TotalAmountToBePaid: getDetails.totalAmountToBePaid,
        TotalAmountDue: getDetails.totalAmountDue,
        TotalAmountPaid: getDetails.totalAmountPaid,
      });
    }
  }, [getDetails]);
  const [optionCustomerId, setOptionCustomerId] = useState(null);
  // useEffect(() => {
  //   const res = SellerSettleGetDetailsApi(selectedUserId)
  //   setGetDetails(res)
  // }, [selectedUserId]);

  useEffect(() => {
    SellerSettleGetDetailsApi(selectedUserId)
      .then((res) => {
        setGetDetails(res); // set the resolved result to state
      })
      .catch((error) => {
        console.error("Error fetching seller details:", error);
      });
  }, [selectedUserId]);

  const [customers, setCustomers] = useState([]);
  const [searchInput, setSearchInput] = useState({
    customerName: "",
    customerTypeId: 1, // Array of customerTypeIds to filter
  });
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await GetCustomers();
        const filteredCustomers = res.filter(
          (customer) => customer.customerTypeId !== 4
        );
        console.log("Filtered Customers:", filteredCustomers);
        setCustomers(filteredCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  console.log("customer--->", customers);
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter customers based on search term
    if (value.trim() === "") {
      setFilteredCustomers(customers);
    } else {
      setFilteredCustomers(
        customers.filter((customer) =>
          `${customer.firstName} ${customer.lastName}`
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
    }
  };

  // Handle customer selection
  const handleSelect = (customerId) => {
    const selectedCustomer = customers.find(
      (customer) => customer.customerId === customerId
    );
    setSearchTerm(`${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
    setSelectedUserId(customerId);
    setFilteredCustomers([]); // Hide dropdown after selection
  };

  console.log("getAll", getDetails);

  const handleShowBalance = async () => {
    let isValid = true;
    let errorMessages = { dateFrom: "", dateTo: "", selectedUsersId: "", amountPaying: "" };

    if (!selectedUserId) {
      errorMessages.selectedUsersId = "Please select a seller.";
      isValid = false;
    }
    if (!dateFrom) {
      errorMessages.dateFrom = "Invoice Date From is required";
      isValid = false;
    }

    if (!dateTo) {
      errorMessages.dateTo = "Invoice Date To is required";
      isValid = false;
    }


    if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
      errorMessages.dateTo =
        "Invoice Date To cannot be earlier than Invoice Date From";
      isValid = false;
    }
    if (Number(amountPaying) > Number(storeDetails.TotalAmountToBePaid || 0)) {
      setError1(`Amount cannot exceed ${storeDetails.TotalAmountToBePaid || 0}.`);
      isValid = false;
    } else {
      setError1(""); // Clear error if valid
    }

    setError(errorMessages);

    if (!isValid) {
      return; // Exit if validation fails
    }
    // if (isValid) {
    //   // Proceed with balance display logic
    //   console.log('Show balance');
    // }
    // if (chequeImage) {
    // Prepare the image for upload
    const formData = new FormData();
    formData.append("image", chequeImage); // Use the exact field key expected by the API

    const imageUrl = await uploadCustomerImageApi(formData);
    // console.log('Image uploaded successfully:', imageUrl);
    // }
    // const imageUrl = await uploadCustomerImageApi(formData);

    const payload = {
      paidTo: selectedUserId,
      amountPaid: Number(amountPaying), // Ensure numeric
      paymentDate: paymentDate,
      // || new Date().toISOString(),
      paymentModeId: paymentMode === "Wire" ? 1 : 2, // Assume 1 for Wire, 2 for Cheque
      transactionId: transactionId, // Replace with actual value if available
      accountNumber: accountNumber, // Replace with actual value
      bankName: bankName,
      // chequeImageUrl: chequeImage ? URL.createObjectURL(chequeImage) : 'string', // Assuming file upload
      chequeImageUrl: imageUrl, // Using uploaded image URL
      chequeMailedOn: chequeMailedOn || null,
      enteredBy: user.customerId, // Replace with actual user info
    };
    await SettleAddApi(payload);
    setNotification({
      show: true,
      message: "Saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setAmountPaying("");
    // setPayableTo("")
    setBankName("");
    setAccountNumber("");
    setChequeMailedOn("");
    setPaymentDate("");
    setPaymentMode("");
    setTransactionId("");
    setChequeImage(null);
    setDateFrom("");
    setDateTo("");
    setSearchTerm("");
    setStoreDetails({});
    setIsDetailsVisible(false);
    setSelectedUserId('')

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  return (
    <div className="w-[95%]  p-4 h-full overflow-y-scroll ">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}

      <div>
        <h1 className="ml-5 text-2xl font-semibold text-blue-900">
          Payment Settlements
        </h1>
      </div>

      <div className="mt-4 ">
        <div className=" bg-white rounded-md p-2  mb-2 w-[90%] border ml-5  h-full ">
          <div className="flex flex-col">
            <div>
              <div className="relative flex items-center mt-5 ml-4">
                <label className="flex items-center mb-1 font-semibold">
                  Member Name / DBA:{" "}
                </label>
                {/* <select
                  className={`rounded-mdborder mt-5 text-sm ${error.selectedUsersId ? "border-red-500" : ""
                    }`}
        value={selectedUserId}
        onChange={handleUserChange} // Update on selection change
      >
        <option value="">Select Seller</option> {/* Default option 
        {customers.map((customer) => (
          <option key={customer.customerId} value={customer.customerId}>
            {`${customer.firstName} ${customer.lastName}`}
          </option>
        ))}
      </select> */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search for a Seller Name"
                  className="w-64 px-4 py-1 ml-3 text-sm border rounded-md"
                />
                {/* Dropdown Options */}
                {filteredCustomers.length > 0 && (
                  <ul className="absolute top-9 left-0 w-64 bg-white border rounded-md shadow-lg h-48 overflow-scroll z-10 ml-[29%]">
                    {filteredCustomers.map((customer) => (
                      <li
                        key={customer.customerId}
                        onClick={() => handleSelect(customer.customerId)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {`${customer.firstName} ${customer.lastName}`}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={toggleDetails}
                  disabled={!selectedUserId} // Disable button when no seller is selected
                  className={`bg-blue-900 rounded-md w-28 ml-5 mb-1 text-white font-semibold text-base items-center flex justify-center ${!selectedUserId || !searchTerm.trim()
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                    }`}
                >
                  {isDetailsVisible ? "Hide  Details" : "Show Details"}
                </button>
              </div>

              {/* Show address details only if isDetailsVisible is true */}
              {isDetailsVisible && (
                <div className="p-1 mt-4 border-4">
                  <div className="flex gap-1 my-1">
                    <div className="flex w-full gap-2">
                      <label className="font-semibold">First Name:</label>
                      <p>{storeDetails.FirstName}</p>
                    </div>

                    <div className="flex w-full gap-2">
                      <label className="font-semibold">Last Name:</label>
                      <p>{storeDetails.LastName}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 my-4">
                    <div className="flex w-full gap-2 ">
                      <label className="font-semibold">Address:</label>
                      <p>{storeDetails.Address}</p>
                    </div>

                    <div className="flex w-full gap-2">
                      <label className="font-semibold">City:</label>
                      <p>{storeDetails.City}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 my-2">
                    <div className="flex w-full gap-2">
                      <label className="font-semibold">State:</label>
                      <p>{storeDetails.State}</p>
                    </div>

                    <div className="flex w-full gap-2">
                      <label className="font-semibold">Zip:</label>
                      <p>{storeDetails.Zip}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 my-2">
                    <div className="flex w-full gap-2">
                      <label className="font-semibold">Phone Number:</label>
                      <p>{storeDetails.PhoneNumber}</p>
                    </div>

                    <div className="flex w-full gap-2">
                      <label className="font-semibold">Email:</label>
                      <p>{storeDetails.Email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {error.selectedUsersId && (
              <p className="text-sm text-center text-red-500">
                {error.selectedUsersId}
              </p>
            )}
            <div className="flex flex-col mt-4">
              <div className="flex flex-col">
                <div className="my-2 ">
                  <label className="ml-4 font-semibold text-left">
                    Total Amount To Be Paid :{" "}
                  </label>
                  {/* <span className='ml-7'>$ 11,444.00</span> */}
                  <span className="ml-7">
                    $
                    {storeDetails.TotalAmountToBePaid !== undefined
                      ? storeDetails.TotalAmountToBePaid.toFixed(2)
                      : "0.00"}
                  </span>
                </div>
                <div className="flex my-2 ">
                  <label className="ml-4 font-semibold text-left">
                    Total Amount Due :{" "}
                  </label>
                  {/* <span className='ml-7'>$ 11,444.00</span> */}
                  <span className="ml-7">
                    $
                    {storeDetails.TotalAmountDue !== undefined
                      ? storeDetails.TotalAmountDue.toFixed(2)
                      : "0.00"}
                  </span>
                </div>

                <div className="flex gap-4 my-2 ">
                  <label className="ml-4 font-semibold">
                    Total Amount Paid Till date :{" "}
                  </label>
                  {/* <span className='ml-1'>$ 6,444.00</span> */}
                  <span className="ml-7">
                    $
                    {storeDetails.TotalAmountPaid !== undefined
                      ? storeDetails.TotalAmountPaid.toFixed(2)
                      : "0.00"}
                  </span>
                </div>
              </div>
              {/* <div className='flex justify-start gap-4 my-2'>
              <label className='flex items-center font-semibold'>Invoice Date From :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />


              <label className='flex items-center ml-2 font-semibold '>Invoice Date To :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />
              <div className='flex justify-center'>

                <button className='flex items-center justify-center p-2 font-semibold text-white bg-blue-900 rounded-md w-28'>Show Balance</button>
              </div>
            </div> */}
              <div className="flex flex-row">
                <div className="flex justify-start gap-4 mx-1 my-2">
                  <label className="flex items-center ml-3 font-semibold">
                    Invoice Date From:
                  </label>
                  <TextField
                    type="date"
                    className="mt-2 ml-2 border rounded-md "
                    size="small"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    error={!!error.dateFrom}
                    helperText={error.dateFrom}
                  />
                </div>
                <div className="flex my-2">
                  <label
                    className="flex items-center ml-16 mr-10 font-semibold"
                    style={{ marginLeft: "72px" }}
                  >
                    Invoice Date To:
                  </label>
                  <TextField
                    type="date"
                    className="mt-4 ml-4 border rounded-md"
                    size="small"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    error={!!error.dateTo}
                    helperText={error.dateTo}
                  />

                  {/* <div className='flex justify-center ml-4 '>
                <button
                  className='flex items-center justify-center h-10 p-2 font-semibold text-white bg-blue-900 rounded-md w-28'

                >
                  Show Balance
                </button>
              </div> */}
                </div>
              </div>
              {/* <div>
              <label className='items-center gap-2 my-2 ml-4 font-semibold' >Amount Due :</label>
              <span className='ml-1 '> $ 11,656.00</span>
            </div> */}
              <div className="flex flex-row">
                <div className="flex justify-between my-2">
                  <label className="flex items-center ml-4 font-semibold">
                    Amount Paying Now:
                  </label>
                  {/* <TextField
                type='text'
                size='small'
                label="Amount Paying Now"
                className='border rounded-md'
                value={amountPaying}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                error1={!!error1}
                helperText={error1}
              /> */}
                  <TextField
                    type="text"
                    size="small"
                    label="Amount"
                    className="w-auto border rounded-md"
                    value={amountPaying}
                    onChange={handleAmountChange}
                    onBlur={handleBlur}
                    error={!!error1}
                    helperText={error1}
                  />
                </div>
                {/* <div className='flex'>
              <label className='flex items-center ml-4 mr-16 font-semibold'>Payable To :</label>
              <TextField type='text'
                label="Payable To"
                  size='small'
                  value={payableTo}
                  className='ml-8 border rounded-md '
                  onChange={(e) => setPayableTo(e.target.value)}
               />
            </div> */}

                <div className="flex gap-2 my-2">
                  <label className="flex items-center ml-4 font-semibold">
                    Save Cheque Image :
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    name="Cheque_Image"
                    accept="image/*"
                    size="small"
                    className="p-1 border border-gray-300 rounded-md w-52 "
                    onChange={(e) => setChequeImage(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="flex justify-between">
                  <label className="flex items-center ml-4 mr-10 font-semibold">
                    Payment Date:
                  </label>
                  <TextField
                    type="date"
                    className="ml-10 border rounded-md w-52"
                    size="small"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <label className="gap-2 ml-8 font-semibold ">
                    Mode of payment :
                  </label>
                  <input
                    type="radio"
                    className="ml-6 mr-2"
                    checked={paymentMode === "Wire"}
                    onChange={() => setPaymentMode("Wire")}
                  />
                  <label className="mr-2">Wire</label>

                  <input
                    type="radio"
                    checked={paymentMode === "Cheque"}
                    onChange={() => setPaymentMode("Cheque")}
                  />
                  <label className="ml-2">Cheque</label>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="flex justify-between my-2">
                  <label className="flex items-center ml-4 mr-6 font-semibold">
                    Bank Name :{" "}
                  </label>
                  <TextField
                    type="text"
                    label="Bank Name"
                    size="small"
                    className="w-[55%] ml-10"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex my-2">
                  <label className="flex items-center ml-12 font-semibold">
                    Account Number :{" "}
                  </label>
                  <TextField
                    type="text"
                    label="Account Number"
                    className="ml-10 w-[45%]"
                    size="small"
                    value={accountNumber}
                    sx={{ marginLeft: "30px" }}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex justify-between my-2">
                  <label className="flex items-center ml-4 mr-2 font-semibold">
                    TransactionId :{" "}
                  </label>
                  <TextField
                    type="text"
                    label="TransactionId"
                    className="w-[55%]"
                    size="small"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="flex items-center ml-12 mr-5 font-semibold">
                    Cheque Mailed On :
                  </label>
                  <TextField
                    type="date"
                    className="w-auto h-5 ml-2 border rounded-md"
                    size="small"
                    value={chequeMailedOn}
                    onChange={(e) => setChequeMailedOn(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 my-4">
                <button
                  className="p-1 my-4 font-semibold text-white bg-blue-900 rounded-md w-14"
                  onClick={handleShowBalance}
                >
                  Save
                </button>
                <button className="p-1 my-4 ml-3 font-semibold text-white bg-red-500 rounded-md w-14">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settlement;
