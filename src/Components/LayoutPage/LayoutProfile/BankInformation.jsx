import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const BankInformation = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    firstName: '',
    lastName: '',
    branchNumber: '',
    branchName: '',
    branchAddress: '',
    accountType: '',
    city: '',
    state: '',
    zip: '',
    bankAccountDollars: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const regex = /^[0-9]*$/; // For numeric validation

    if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.branchNumber) newErrors.branchNumber = 'Branch Number is required';
    if (!formData.branchName) newErrors.branchName = 'Branch Name is required';
    if (!formData.branchAddress) newErrors.branchAddress = 'Branch Address is required';
    if (!formData.accountType) newErrors.accountType = 'Account Type is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip || !regex.test(formData.zip)) newErrors.zip = 'Valid Zip is required';
    if (!formData.bankAccountDollars || !regex.test(formData.bankAccountDollars)) {
      newErrors.bankAccountDollars = 'Valid Bank Account Dollars is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, perform save action
      console.log('Form Data:', formData);
      // Reset form and errors
      setFormData({
        bankName: '',
        firstName: '',
        lastName: '',
        branchNumber: '',
        branchName: '',
        branchAddress: '',
        accountType: '',
        city: '',
        state: '',
        zip: '',
        bankAccountDollars: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bank Information</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className="block mb-1">Bank Name</label>
          <TextField
            label="Bank Name"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            size='small'
            error={!!errors.bankName}
            helperText={errors.bankName}
            fullWidth
          />
        </div>
        <div className='flex mb-4'>
          <div className='mr-2 w-1/2'>
            <label className="block mb-1">First Name</label>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              size='small'
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
            />
          </div>
          <div className='ml-2 w-1/2'>
            <label className="block mb-1">Last Name</label>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              size='small'
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='mr-2 w-1/2'>
            <label className="block mb-1">Branch Number</label>
            <TextField
              label="Branch Number"
              name="branchNumber"
              value={formData.branchNumber}
              onChange={handleChange}
              size='small'
              error={!!errors.branchNumber}
              helperText={errors.branchNumber}
              fullWidth
            />
          </div>
          <div className='ml-2 w-1/2'>
            <label className="block mb-1">Branch Name</label>
            <TextField
              label="Branch Name"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
              size='small'
              error={!!errors.branchName}
              helperText={errors.branchName}
              fullWidth
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='mr-2 w-1/2'>
            <label className="block mb-1">Branch Address</label>
            <TextField
              label="Branch Address"
              name="branchAddress"
              value={formData.branchAddress}
              onChange={handleChange}
              size='small'
              error={!!errors.branchAddress}
              helperText={errors.branchAddress}
              fullWidth
            />
          </div>
          <div className='ml-2 w-1/2'>
            <label className="block mb-1">Account Type</label>
            <TextField
              label="Account Type"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              size='small'
              error={!!errors.accountType}
              helperText={errors.accountType}
              fullWidth
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='mr-2 w-1/2'>
            <label className="block mb-1">City</label>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              size='small'
              error={!!errors.city}
              helperText={errors.city}
              fullWidth
            />
          </div>
          <div className='ml-2 w-1/2'>
            <label className="block mb-1">State</label>
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              size='small'
              error={!!errors.state}
              helperText={errors.state}
              fullWidth
            />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='mr-2 w-1/2'>
            <label className="block mb-1">Zip</label>
            <TextField
              label="Zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              size='small'
              error={!!errors.zip}
              helperText={errors.zip}
              fullWidth
            />
          </div>
          <div className='ml-2 w-1/2'>
            <label className="block mb-1">Bank Account Dollars</label>
            <TextField
              label="Bank Account Dollars"
              name="bankAccountDollars"
              value={formData.bankAccountDollars}
              onChange={handleChange}
              size='small'
              error={!!errors.bankAccountDollars}
              helperText={errors.bankAccountDollars}
              fullWidth
            />
          </div>
        </div>
        <button className='bg-blue-900 text-white w-16 rounded-md font-semibold p-1' type="submit">Save</button>
      </form>
    </div>
  );
}

export default BankInformation;
