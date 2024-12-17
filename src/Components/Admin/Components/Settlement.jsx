import React, { useEffect, useRef } from 'react'
import { TextField } from '@mui/material'
import { useState } from "react";
import { SellerSettleGetDetailsApi, SettleAddApi } from '../../../Api/SettlementApi';
import { uploadCustomerImageApi } from '../../../Api/BannerApi';
import { useSelector } from 'react-redux';
import {GetCustomers } from '../../../Api/AdminApi';
import Notification from '../../Notification';

function Settlement() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [amountPaying, setAmountPaying] = useState('');
  const [error1, setError1] = useState('');
  const [error, setError] = useState({ dateFrom: '', dateTo: '', selectedUsersId: "" });
  const user = useSelector((state) => state.user.user)
  // const [payableTo, setPayableTo] = useState('');
  const [bankName, setBankName] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [chequeMailedOn, setChequeMailedOn] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [paymentMode, setPaymentMode] = useState(''); // 'Wire' or 'Cheque'
  const [chequeImage, setChequeImage] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const fileInputRef = useRef(null);
    const [notification, setNotification] = useState({
      show: false,
      message: "",
    });
  const handleShowBalance = async () => {
    let isValid = true;
    let errorMessages = { dateFrom: '', dateTo: '', selectedUsersId: "" };

    if (!selectedUserId) {
      errorMessages.selectedUsersId = 'Please select a seller.';
      isValid = false;
    }
    if (!dateFrom) {
      errorMessages.dateFrom = 'Invoice Date From is required';
      isValid = false;
    }

    if (!dateTo) {
      errorMessages.dateTo = 'Invoice Date To is required';
      isValid = false;
    }

    if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
      errorMessages.dateTo = 'Invoice Date To cannot be earlier than Invoice Date From';
      isValid = false;
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
      formData.append('image', chequeImage); // Use the exact field key expected by the API

      const imageUrl = await uploadCustomerImageApi(formData);
      // console.log('Image uploaded successfully:', imageUrl);
    // }
    // const imageUrl = await uploadCustomerImageApi(formData);
    
    const payload = {
      paidTo: selectedUserId,
      amountPaid: Number(amountPaying), // Ensure numeric
      paymentDate: paymentDate,
      // || new Date().toISOString(),
      paymentModeId: paymentMode === 'Wire' ? 1 : 2, // Assume 1 for Wire, 2 for Cheque
      transactionId: transactionId, // Replace with actual value if available
      accountNumber: accountNumber, // Replace with actual value
      bankName: bankName,
      // chequeImageUrl: chequeImage ? URL.createObjectURL(chequeImage) : 'string', // Assuming file upload
      chequeImageUrl: imageUrl, // Using uploaded image URL
      chequeMailedOn: chequeMailedOn || null,
      enteredBy: user.customerId, // Replace with actual user info
    }
    await SettleAddApi(payload)
    setNotification({
      show: true,
      message: "Saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    setAmountPaying("")
    // setPayableTo("")
    setBankName("")
    setAccountNumber("")
    setChequeMailedOn('')
    setPaymentDate("")
    setPaymentMode("")
    setTransactionId("")
    setChequeImage(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
    
  };

  const usersData = {
    1: {
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phoneNumber: "777-777-7777",
      email: "john@example.com",
    },
    2: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    3: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    4: {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phoneNumber: "888-888-8888",
      email: "jane@example.com",
    },
    // Add more user details as needed
  };

  // State to store the selected user ID (default is 1 for the first user)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Handle dropdown selection change
  const handleUserChange = (e) => {
    console.log("targetvalue====>", e.target.value)
    setSelectedUserId(e.target.value); // Update selected user ID
    if (selectedValue) {
      setError((prevError) => ({ ...prevError, selectedUsersId: "" }));
    }
  };
  
  console.log("selecteduserid ====>",selectedUserId)
  // Toggle the visibility of address details
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  // Get the selected user's details based on the selectedUserId
  const formData = usersData[selectedUserId];
  // const [amountPaying, setAmountPaying] = useState('');
  // const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Allow only numeric values and decimal points
    if (/^\d*\.?\d*$/.test(value)) {
      setAmountPaying(value);
      setError1('');
    }
  };

  const handleBlur = () => {
    if (!amountPaying) {
      setError1('Amount Paying Now is required');
    } else if (parseFloat(amountPaying) <= 0) {
      setError1('Amount must be greater than zero');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log('Form is valid, submit data.');
    } else {
      console.log('Form is invalid, show errors.');
    }
  };
  const [getDetails, setGetDetails] = useState({})
  const [optionCustomerId, setOptionCustomerId] = useState(null)
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
        const filteredCustomers = res.filter(customer => customer.customerTypeId !== 4);
        console.log("Filtered Customers:", filteredCustomers);
        setCustomers(filteredCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  console.log("customer--->", customers)
  const [searchTerm, setSearchTerm] = useState("");
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

  console.log("getAll", getDetails)

  return (
    <div className='w-[95%]  p-4 h-full overflow-y-scroll '>
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}

      <div>
        <h1 className='text-blue-900 text-2xl font-semibold ml-5'>Payment Settlements</h1>
      </div>

      <div className=' mt-4 '>



        <div className=' bg-white rounded-md p-2  mb-2 w-[50%] border ml-5  h-full '>
         

         
          <div className='flex flex-col'>

          <div>
              <div className='flex items-center ml-4 mt-5 relative'>
              <label className="font-semibold flex items-center mb-1">Member Name / DBA: </label>
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
                  className="border rounded-md ml-3 py-1 px-4 text-sm w-64"
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
                  className={`bg-blue-900 rounded-md w-28 ml-5 mb-1 text-white font-semibold text-base items-center flex justify-center ${!selectedUserId ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                    }`}
                >
                  {isDetailsVisible ? "Hide  Details" : "Show Details"}
                </button>
            </div>

            {/* Show address details only if isDetailsVisible is true */}
            {isDetailsVisible && (
              <div className="mt-4 border-4 p-1">
                <div className="flex my-1 gap-1">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">First Name:</label>
                      <p>{getDetails.sellerFirstName}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Last Name:</label>
                      <p>{getDetails.sellerLastName}</p>
                  </div>
                </div>

                <div className="my-4 flex gap-2">
                  <div className=" w-full flex gap-2">
                    <label className="font-semibold">Address:</label>
                    <p>{getDetails.sellerAddress}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">City:</label>
                    <p>{getDetails.sellerCity}</p>
                  </div>
                </div>

                <div className="flex my-2 gap-2">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">State:</label>
                      <p>{getDetails.sellerState}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Zip:</label>
                      <p>{getDetails.sellerZip}</p>
                  </div>
                </div>

                <div className="flex my-2 gap-2">
                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Phone Number:</label>
                      <p>{getDetails.sellerPhone}</p>
                  </div>

                  <div className="w-full flex gap-2">
                    <label className="font-semibold">Email:</label>
                      <p>{getDetails.sellerEmail}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
            {error.selectedUsersId && (
              <p className="text-red-500 text-sm text-center">{error.selectedUsersId}</p>
            )}
          <div>
            <div className='flex my-2 '>
              <label className='font-semibold text-left ml-4'>Total Amount Due : </label>
                {/* <span className='ml-7'>$ 11,444.00</span> */}
                <span className='ml-7'>
                  ${getDetails?.totalAmountDue !== undefined ? getDetails.totalAmountDue.toFixed(2) : '0.00'}
                </span>


            </div>

            <div className='flex gap-4 my-2 '>
              <label className='font-semibold ml-4'>Total Amount Paid Till date : </label>
                {/* <span className='ml-1'>$ 6,444.00</span> */}
               <span className='ml-7'>
                  ${getDetails?.totalAmountPaid !== undefined ? getDetails.totalAmountPaid.toFixed(2) : '0.00'}</span>


            </div>

            {/* <div className='flex justify-start gap-4 my-2'>
              <label className='font-semibold flex items-center'>Invoice Date From :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />


              <label className='ml-2 font-semibold flex items-center '>Invoice Date To :</label>
              <TextField type='date'
                className='border rounded-md'
                size='small'
              />
              <div className='flex justify-center'>

                <button className='rounded-md bg-blue-900 text-white w-28 p-2 font-semibold flex justify-center items-center'>Show Balance</button>
              </div>
            </div> */}<div className='flex justify-start gap-4 '>
              <label className='font-semibold flex items-center ml-4'>Invoice Date From:</label>
              <TextField
                type='date'
                className='border rounded-md'
                size='small'
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                error={!!error.dateFrom}
                helperText={error.dateFrom}
              />
        </div>
        <div className='flex my-2'>
              <label className=' font-semibold flex items-center mr-9 ml-4'>Invoice Date To:</label>
              <TextField
                type='date'
                className='border rounded-md ml-5'
                size='small'
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                error={!!error.dateTo}
                helperText={error.dateTo}
              />

{/* <div className='flex justify-center ml-4 '>
                <button
                  className='rounded-md bg-blue-900 text-white w-28 h-10 p-2 font-semibold flex justify-center items-center'

                >
                  Show Balance
                </button>
              </div> */}
              
            </div>
           

            {/* <div>
              <label className='font-semibold gap-2 my-2  items-center ml-4' >Amount Due :</label>
              <span className=' ml-1'> $ 11,656.00</span>
            </div> */}

            <div className='flex gap-2 my-2'>
              <label className='font-semibold flex items-center ml-4'>Amount Paying Now:</label>
              <TextField
                type='text'
                size='small'
                label="Amount Paying Now"
                className='border rounded-md'
                value={amountPaying}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                error1={!!error1}
                helperText={error1}
              />
              </div>
              {/* <div className='flex'>
              <label className='font-semibold flex items-center mr-16 ml-4'>Payable To :</label>
              <TextField type='text'
                label="Payable To"
                  size='small'
                  value={payableTo}
                  className='border rounded-md ml-8 '
                  onChange={(e) => setPayableTo(e.target.value)}
               />
            </div> */}

            <div className='flex gap-2 my-2'>
              <label className='font-semibold  flex items-center ml-4'>Save Cheque Image :</label>
                <input type='file'
                  ref={fileInputRef}
               name='Cheque_Image'
               accept="image/*"
               size='small'
               className='w-52 border p-1 border-gray-300 rounded-md  ' 
                  onChange={(e) => setChequeImage(e.target.files[0])}
                />
              </div>
              <div className='flex'>
              <label className='font-semibold flex items-center mr-12 ml-4'>Payment Date:</label>
              <TextField type='date'
                className='border rounded-md w-52'
                size='small'
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>

            <div className='my-3'>
              <label className='font-semibold  gap-2 ml-4 '>Mode of  payment :</label>
              <input
                type='radio'
                  className='mr-2 ml-2'
                  checked={paymentMode === 'Wire'}
                  onChange={() => setPaymentMode('Wire')}
                />
              <label className='mr-2'>Wire</label>

              <input
                  type='radio'
                  checked={paymentMode === 'Cheque'}
                  onChange={() => setPaymentMode('Cheque')}
                />
              <label className='ml-2'>Cheque</label>
            </div>

            <div className='flex my-2 gap-2'>
              <label className='font-semibold flex items-center mr-12 ml-4'>Bank Name   : </label>
              <TextField
                type='text'
                label="Bank Name"
                  size='small' 
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className='flex my-2 gap-2'>
                <label className='font-semibold flex items-center ml-4'>Account Number   : </label>
                <TextField
                  type='text'
                  label="Account Number"
                  size='small'
                  value={accountNumber}
                  sx={{ marginLeft: '20px' }}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div className='flex my-2 gap-2'>
                <label className='font-semibold flex items-center mr-12 ml-4'>TransactionId   : </label>
                <TextField
                  type='text'
                  label="TransactionId"
                  size='small'
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </div>
              <div className='flex'>
              <label className='font-semibold flex items-center mr-5 ml-4'>Cheque Mailed On  :</label>
              <TextField type='date'
                className='border rounded-md w-52 h-5'
                  size='small'
                  value={chequeMailedOn}
                  onChange={(e) => setChequeMailedOn(e.target.value)}
              />
            </div>

            <div className='gap-2 flex justify-center my-4'>
              <button className="bg-blue-900 text-white w-14 p-1 my-4 rounded-md font-semibold" onClick={handleShowBalance} >

                Save
              </button >
              <button className="bg-blue-900 text-white ml-3  my-4 w-14 p-1 rounded-md font-semibold">
                Cancel
              </button>
            </div>

          </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Settlement