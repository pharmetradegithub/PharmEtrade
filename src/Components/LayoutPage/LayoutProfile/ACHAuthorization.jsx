import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../../assets/Edit.png';

function ACHAuthorization() {
  const user = useSelector((state) => state.user?.user || []);
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
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    const regex = /^[0-9]*$/; // For numeric validation

    if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
    if (!formData.BankAddress) newErrors.BankAddress = 'Bank Address is required';
    if (!formData.RoutingNumber) newErrors.RoutingNumber = 'Routing Number is required';
    if (!formData.AccountNumber) newErrors.AccountNumber = 'Account Number is required';
    if (!formData.AccountType) newErrors.AccountType = 'Account Type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
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
      });
      setErrors({});
    }
  };

  const [isTabEdit, setIsTabEdit] = useState(false);

  const handleTabClick = () => {
    setIsTabEdit(true);
  };

  const handleTabSave = async () => {
    setIsTabEdit(false);
    const payload = {
      id: '',
      customerId: user.customerId,
      bankName: formData.bankName,
      bankAddress: formData.BankAddress,
      routingNumber: formData.RoutingNumber,
      accountNumber: formData.AccountNumber,
      accountType: formData.AccountType,
    };
    // await dispatch(fetchBeneficiaryAdd(payload));

    // Show an alert message after saving
    // alert("Beneficiary details saved successfully!"); 
    setNotification({
      show: true,
      message: "Beneficiary details saved Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const accountTypes = ['Savings', 'Checking']; // Example account types

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "RoutingNumber" && (!/^\d*$/.test(value) || value.length > 9)) {
      return; // Ignore invalid input
    }
    setFormData({
      ...formData,
      [name]: value,
    });
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
  // useEffect(() => {
  //   if (getBeneficiaryDetails) {
  //     setFormData({
  //       bankName: getBeneficiaryDetails.bankName || '',
  //       BankAddress: getBeneficiaryDetails.bankAddress || '',
  //       RoutingNumber: getBeneficiaryDetails.routingNumber || '',
  //       AccountNumber: getBeneficiaryDetails.accountNumber || '',
  //       AccountType: getBeneficiaryDetails.accountType || '',
  //     });
  //   }
  // }, [getBeneficiaryDetails]);

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     dispatch(fetchGetBeneficiary(user.customerId));  // Dispatch function to get beneficiary details
  //   };
  //   if (user.customerId) {
  //     fetchdata();
  //   }
  // }, [user.customerId, dispatch]);
  return (
    <div>
      <h1 className="text-xl text-blue-900 font-semibold mx-6 py-4">ACH Authorization</h1>
      <div className={`bg-white border ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
        {isTabEdit && (
          <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
            ACH Authorization
          </h1>
        )}

        <div className="flex justify-between my-2">
          <div className='flex flex-col'>
          <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>
            ACH Authorization
          </h1>
            <p>I hereby authorize IBG Drugs LLC d/b/a PharmEtrade to initiate entries to my checking/savings accounts at the financial institution listed below (THE FINANCIAL INSTITUTION), and, if necessary, initiate adjustments for any transactions credited/debited in error.<br />
              This authority will remain in effect until is notified by me in writing to cancel authorization in such time as to afford and THE FINANCIAL INSTITUTION a reasonable opportunity to act on it.
            </p>
          </div>
          <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" onClick={handleTabClick} alt="Edit" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4 mt-7">
            <div className="mr-2 xl:ml-2">
              {/* <label className="block mb-1">Bank Name</label> */}
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
              {/* <label className="block mb-1">Bank Address</label> */}
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
              {/* <label className="block mb-1">Routing Number</label> */}
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
              {/* <label className="block mb-1">Account Number</label> */}
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
            <div className="xl:ml-6 mr-2 my-2 md:my-0 w-full md:w-[45%] xl:w-[23%]">
              {/* <label className="block mb-1">Account Type</label> */}
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
          </div>
          <div className="flex justify-end py-2">
            <button
              className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""
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
  )
}
export default ACHAuthorization