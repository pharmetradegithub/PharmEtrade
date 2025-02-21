
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAchCustomer } from '../../../Api/AddressApi';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import edit from '../../../assets/Edit.png'
function ACHAuthorizationAdmin() {
  const getAch = useSelector((state) => state.address.achGet);
  const searchParams = new URLSearchParams(location.search);
  const CustomerId = searchParams.get("CustomerId");
  const [isTabEdit, setIsTabEdit] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
      const fetchdata = async () => {
        dispatch(fetchGetAchCustomer(CustomerId));
      };
    if (CustomerId) {
        fetchdata();
      }
  }, [CustomerId, dispatch]);
  
  return (
    <div>
      {/* <h1 className="text-xl text-blue-900 font-semibold mx-6 py-4">ACH Authorization</h1> */}
      <div className={`bg-white border ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[80%] mt-8 relative`}>
        {/* {isTabEdit && ( */}
          {/* <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
            ACH Authorization
          </h1> */}
        {/* )} */}

        <div className="flex justify-between my-2">
          <div className='flex flex-col'>
            <h1 className='text-blue-900 md:text-xl font-semibold my-2'>
              ACH Authorization
            </h1>

           {/* <h1 className={`text-base md:text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>
              ACH Authorization
            </h1> */}

            {/* <p>I hereby authorize IBG Drugs LLC d/b/a PharmEtrade to initiate entries to my checking/savings accounts at the financial institution listed below (THE FINANCIAL INSTITUTION), and, if necessary, initiate adjustments for any transactions credited/debited in error.<br />
              This authority will remain in effect until is notified by me in writing to cancel authorization in such time as to afford and THE FINANCIAL INSTITUTION a reasonable opportunity to act on it.
            </p> */}
          </div>
          {/* <img src={edit} className="w-6 h-6 ml-4 cursor-pointer" alt="Edit" /> */}
        </div>
        <form>
          <div className="flex flex-col md:flex-row mb-4 mt-7">
            <div className="mr-2 xl:ml-2">
                         <TextField
  label="Bank Name"
  value={getAch?.[0]?.bankName || ""}
  size="small"
  InputProps={{ readOnly: true }}
/>
              {/* <TextField
                label="Bank Name"
                // name="bankName"
                value={getAch[0]?.
                  bankName || " "
}
                // onChange={handleChange}
                size="small"
                InputProps={{ readOnly: true }}
                // disabled={!isTabEdit}
                // error={!!errors.bankName}
                // helperText={errors.bankName}
                // fullWidth
              /> */}
            </div>
            <div className="ml-0 my-2 md:my-0 xl:ml-6 mr-2">
                         <TextField
  label="Bank Address"
  value={getAch?.[0]?.bankAddress || ""}
  size="small"
  InputProps={{ readOnly: true }}
/>
              {/* <TextField
                label="Bank Address"
                // name="BankAddress"
                value={getAch[0]?.bankAddress || " "}
                // onChange={handleChange}
                size="small"
                InputProps={{ readOnly: true }}
                // disabled={!isTabEdit}
                // error={!!errors.BankAddress}
                // helperText={errors.BankAddress}
                // fullWidth
              /> */}
            </div>
            <div className="mr-2 xl:ml-6">
              {/* <TextField
                label="Routing Number"
                // name="RoutingNumber"
                value={getAch[0]?.routingNumber || " "}
                // onChange={handleChange}
                // onBlur={handleBlur}
                size="small"
                InputProps={{ readOnly: true }}
                // disabled={!isTabEdit}
                // error={!!errors.RoutingNumber}
                // helperText={errors.RoutingNumber}
                // fullWidth
              /> */}
              <TextField
  label="Routing Number"
  value={getAch?.[0]?.routingNumber || ""}
  size="small"
  InputProps={{ readOnly: true }}
/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="xl:ml-2 mr-2">
              <TextField
  label="Account Number"
  value={getAch?.[0]?.accountNumber || ""}
  size="small"
  InputProps={{ readOnly: true }}
/>
              {/* <TextField
                label="Account Number"
                // name="AccountNumber"
                value={getAch[0]?.accountNumber || " "}
                // onChange={handleChange}
                size="small"
                InputProps={{ readOnly: true }}
                // disabled={!isTabEdit}
                // error={!!errors.AccountNumber}
                // helperText={errors.AccountNumber}
                // fullWidth
              /> */}
            </div>
            <div className="xl:ml-6 mr-2 my-2 md:my-0 w-full md:w-[45%] xl:w-[23%]">
              {/* <FormControl fullWidth size="small">
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
                <Select
                  labelId="account-type-label"
                  name="AccountType"
                  value={getAch[0].accountTypeId}
                  onChange={handleChange}
                  label="Account Type"
                >
                  {accountTypes.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                  <MenuItem value={1}>Saving</MenuItem>
                  <MenuItem value={2}>Checking</MenuItem>
                </Select>
                {errors.AccountType && <FormHelperText>{errors.AccountType}</FormHelperText>}
              </FormControl> */}
              <TextField
  label="Account Type"
  size="small"
  value={getAch?.[0]?.accountTypeId === 1 ? "Saving" : getAch?.[0]?.accountTypeId === 2 ? "Checking" : ""}
  InputProps={{ readOnly: true }}
/>
            </div>
          </div>
          {/* <div className="flex justify-end py-2">
            <button
              className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit || !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              // onClick={handleTabSave}
              disabled={!isTabEdit || !isFormValid()} // Disable if not in edit mode or form is invalid
            >
              {isEditMode ? 'Update' : 'Save'}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default ACHAuthorizationAdmin