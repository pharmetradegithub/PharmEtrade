
// import React, { useState } from 'react';
// import plus from '../../../assets/Icons/plus[1].png';
// import { TextField, Snackbar, Alert } from '@mui/material'; // Import Snackbar and Alert for notifications
// import edit from '../../../assets/Edit.png';

// const LayoutProfileAddress = () => {
//   const [isTabEdit, setIsTabEdit] = useState(false);
//   const [usePresentForPermanent, setUsePresentForPermanent] = useState(false);

//   // State to store Present Address values
//   const [presentAddress, setPresentAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // State to store Permanent Address values
//   const [permanentAddress, setPermanentAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // Notification state
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   // Handle Present Address changes
//   const handlePresentAddressChange = (e) => {
//     const { name, value } = e.target;
//     setPresentAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Automatically update Permanent Address if checkbox is checked
//     if (usePresentForPermanent) {
//       setPermanentAddress((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle checkbox click
//   const handleCheckboxClick = (e) => {
//     const isChecked = e.target.checked;
//     setUsePresentForPermanent(isChecked);

//     // Copy Present Address to Permanent Address when checkbox is checked
//     if (isChecked) {
//       setPermanentAddress(presentAddress);
//     }
//   };

//   // Edit and save logic for tab
//   const handleTabClick = () => {
//     setIsTabEdit(true);
//   };

//   const handleTabSave = () => {
//     setIsTabEdit(false);
//     // Show success notification when fields are saved
//     setNotificationOpen(true);
//   };

//   // Close notification
//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };

//   return (
//     <div className='w-full h-full'>
//       <div className='w-full h-full'>
//         {/* Present Address Section */}
//         <div className='flex justify-between ml-6 mt-8'>
//           <h1 className='text-xl text-blue-900 font-semibold'>Present Address</h1>
//           <button className='bg-blue-900 text-white p-2 flex rounded-md'>
//             <img src={plus} className='w-6 h-6' alt="Add New" /> Add New Address
//           </button>
//         </div>
//         <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//           <div className='flex justify-between'>
//             <div className='flex flex-col py-4'>
//               <label>Building Name</label>
//               <TextField
//                 name="buildingName"
//                 value={presentAddress.buildingName}
//                 onChange={handlePresentAddressChange}
//                 label="Building Name"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//               <label>Zip</label>
//               <TextField
//                 name="zip"
//                 value={presentAddress.zip}
//                 onChange={handlePresentAddressChange}
//                 label="Zip"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col py-4'>
//               <label>City</label>
//               <TextField
//                 name="city"
//                 value={presentAddress.city}
//                 onChange={handlePresentAddressChange}
//                 label="City"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//               <label>State</label>
//               <TextField
//                 name="state"
//                 value={presentAddress.state}
//                 onChange={handlePresentAddressChange}
//                 label="State"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col py-4'>
//               <label>Location</label>
//               <TextField
//                 name="location"
//                 value={presentAddress.location}
//                 onChange={handlePresentAddressChange}
//                 label="Location"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col justify-between py-4'>
//               <img src={edit} className='w-6 h-6' alt="Edit" onClick={handleTabClick} />
//               <button
//                 className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
//                 onClick={handleTabSave}
//                 disabled={!isTabEdit}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className='ml-6 mt-4'>
//           <input type='checkbox' onChange={handleCheckboxClick} />
//           <label className='ml-2'>Use Present Address as Permanent Address</label>
//         </div>

//         {/* Permanent Address Section */}
//         <h1 className='text-xl text-blue-900 font-semibold ml-6 mt-6'>Permanent Address</h1>
//         <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
//           <div className='flex justify-between'>
//             <div className='flex flex-col py-4'>
//               <label>Building Name</label>
//               <TextField
//                 name="buildingName"
//                 value={permanentAddress.buildingName}
//                 label="Building Name"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//               <label>Zip</label>
//               <TextField
//                 name="zip"
//                 value={permanentAddress.zip}
//                 label="Zip"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col py-4'>
//               <label>City</label>
//               <TextField
//                 name="city"
//                 value={permanentAddress.city}
//                 label="City"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//               <label>State</label>
//               <TextField
//                 name="state"
//                 value={permanentAddress.state}
//                 label="State"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col py-4'>
//               <label>Location</label>
//               <TextField
//                 name="location"
//                 value={permanentAddress.location}
//                 label="Location"
//                 className='w-full'
//                 size='small'
//                 disabled={!isTabEdit}
//               />
//             </div>

//             <div className='flex flex-col justify-between py-4'>
//               <button
//                 className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold`}
//                 onClick={handleTabSave}
//                 disabled={!isTabEdit}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Notification */}
//       <Snackbar
//         open={notificationOpen}
//         autoHideDuration={3000} // Auto hide after 3 seconds
//         onClose={handleNotificationClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning top-right
//       >
//         <Alert
//           onClose={handleNotificationClose}
//           severity="success"
//           sx={{ 
//             width: '100%', 
//             backgroundColor: '#1E3A8A',  // blue-900 color
//             color: '#ffffff'  // White text color
//           }}
//         >
//           Address saved successfully!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default LayoutProfileAddress;







import React, { useState } from 'react';
import plus from '../../../assets/Icons/plus[1].png';
import { TextField, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material'; // Import additional Material-UI components
import edit from '../../../assets/Edit.png';

const LayoutProfileAddress = () => {
  const [isTabEdit, setIsTabEdit] = useState(false);
  const [usePresentForPermanent, setUsePresentForPermanent] = useState(false);
  const [addresses, setAddresses] = useState([]); // Store additional addresses
  const [selectedAddress, setSelectedAddress] = useState(null); // Store selected address for permanent

  // State for dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // State to store Present Address values
  const [presentAddress, setPresentAddress] = useState({
    buildingName: '',
    zip: '',
    city: '',
    state: '',
    location: '',
  });

  // State to store Permanent Address values
  const [permanentAddress, setPermanentAddress] = useState({
    buildingName: '',
    zip: '',
    city: '',
    state: '',
    location: '',
  });

  // New Address Fields
  const [newAddress, setNewAddress] = useState({
    buildingName: '',
    zip: '',
    city: '',
    state: '',
    location: '',
  });

  // Notification state
  const [notificationOpen, setNotificationOpen] = useState(false);

  // Handle Present Address changes
  const handlePresentAddressChange = (e) => {
    const { name, value } = e.target;
    setPresentAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Permanent Address when radio button is selected
  const handleRadioSelect = (address) => {
    setPermanentAddress(address);
    setSelectedAddress(address);
  };

  // Handle New Address changes
  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open the dialog for adding new address
  const handleAddNewAddressClick = () => {
    setDialogOpen(true);
  };

  // Close dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // Add new address logic
  const handleAddNewAddressSave = () => {
    // Add new address to the list and set it as the Present Address as well
    setAddresses([...addresses, newAddress]);
    setPresentAddress(newAddress); // Auto-fill Present Address fields
    setNewAddress({
      buildingName: '',
      zip: '',
      city: '',
      state: '',
      location: '',
    });
    setDialogOpen(false);
    setNotificationOpen(true); // Show success notification
  };

  // Close notification
  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <div className='w-full h-full'>
      {/* Present Address Section */}
      <div className='flex justify-end ml-6 mt-8'>
        <button className='bg-blue-900 text-white p-2 flex rounded-md' onClick={handleAddNewAddressClick}>
          <img src={plus} className='w-6 h-6' alt="Add New" /> Add New Address
        </button>
      </div>

      <div className={`bg-white border  ${isTabEdit ? 'border-blue-900' : 'border-gray-400'} rounded-lg px-8 mx-6 w-[90%] mt-8 relative`}>
  {/* Conditionally display heading on the border */}
  {isTabEdit && (
    <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
      Address 
    </h1>
  )}            {/* <h1 className="text-xl font-semibold text-blue-900 my-2">Address Information</h1> */}

            <h1 className={`text-xl font-semibold my-2 ${isTabEdit ? 'invisible' : 'text-blue-900'}`}>Address </h1>
 

        <div className='flex justify-between'>
          <div className='flex flex-col py-4'>
            <label>Building Name</label>
            <TextField
              name="buildingName"
              value={presentAddress.buildingName}
              onChange={handlePresentAddressChange}
              label="Building Name"
              className='w-full'
              size='small'
              disabled={!isTabEdit}
            />
            <label>Zip</label>
            <TextField
              name="zip"
              value={presentAddress.zip}
              onChange={handlePresentAddressChange}
              label="Zip"
              className='w-full'
              size='small'
              disabled={!isTabEdit}
            />
          </div>

          <div className='flex flex-col py-4'>
            <label>City</label>
            <TextField
              name="city"
              value={presentAddress.city}
              onChange={handlePresentAddressChange}
              label="City"
              className='w-full'
              size='small'
              disabled={!isTabEdit}
            />
            <label>State</label>
            <TextField
              name="state"
              value={presentAddress.state}
              onChange={handlePresentAddressChange}
              label="State"
              className='w-full'
              size='small'
              disabled={!isTabEdit}
            />
          </div>

          <div className='flex flex-col py-4'>
            <label>Location</label>
            <TextField
              name="location"
              value={presentAddress.location}
              onChange={handlePresentAddressChange}
              label="Location"
              className='w-full'
              size='small'
              disabled={!isTabEdit}
            />
          </div>

          <div className='flex flex-col justify-between py-4'>
            <img src={edit} className='w-6 h-6' alt="Edit" onClick={() => setIsTabEdit(true)} />
            <button
              className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => setIsTabEdit(false)}
              disabled={!isTabEdit}
            >
              Save
            </button>
          </div>
        </div>

        {/* Radio Button for Present Address */}
        <FormControlLabel
          control={<Radio checked={selectedAddress === presentAddress} onChange={() => handleRadioSelect(presentAddress)} />}
          label="Use as Shipping Address"
        />
      </div>

      {/* Render Additional Addresses with Radio Buttons */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-6 mt-6">
      
        {addresses.map((address, index) => (
          <div key={index} className="bg-white border border-gray-400 rounded-lg p-6">
           <h1 className='text-blue-900 text-xl font-semibold'>Add New Address</h1>
            <div className="flex flex-col space-y-4">
              <TextField
                label="Building"
                value={address.buildingName}
                size="small"
                margin="dense"
                fullWidth
              />
              <TextField
                label="City"
                value={address.city}
                size="small"
                margin="dense"
                fullWidth
              />
              <TextField
                label="State"
                value={address.state}
                size="small"
                margin="dense"
                fullWidth
              />
              <TextField
                label="Zip"
                value={address.zip}
                size="small"
                margin="dense"
                fullWidth
              />
              <TextField
                label="Location"
                value={address.location}
                size="small"
                margin="dense"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedAddress === address}
                    onChange={() => handleRadioSelect(address)}
                  />
                }
                label="Use as Shipping Address"
              />
            </div>
          </div>
        ))}
      </div>


      {/* Permanent Address Section */}
      <h1 className='text-xl text-blue-900 font-semibold ml-6 mt-6'>Shipping Address</h1>
      <div className="bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[90%] mt-4">
        <div className='flex justify-between'>
          <div className='flex flex-col py-4'>
            <label>Building Name</label>
            <TextField
              name="buildingName"
              value={permanentAddress.buildingName}
              label="Building Name"
              className='w-full'
              size='small'
              disabled
            />
            <label>Zip</label>
            <TextField
              name="zip"
              value={permanentAddress.zip}
              label="Zip"
              className='w-full'
              size='small'
              disabled
            />
          </div>

          <div className='flex flex-col py-4'>
            <label>City</label>
            <TextField
              name="city"
              value={permanentAddress.city}
              label="City"
              className='w-full'
              size='small'
              disabled
            />
            <label>State</label>
            <TextField
              name="state"
              value={permanentAddress.state}
              label="State"
              className='w-full'
              size='small'
              disabled
            />
          </div>

          <div className='flex flex-col py-4'>
            <label>Location</label>
            <TextField
              name="location"
              value={permanentAddress.location}
              label="Location"
              className='w-full'
              size='small'
              disabled
            />
          </div>
        </div>
      </div>

      {/* Add New Address Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Address</DialogTitle>
        <DialogContent>
          <TextField
            name="buildingName"
            label="Building Name"
            value={newAddress.buildingName}
            onChange={handleNewAddressChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="zip"
            label="Zip"
            value={newAddress.zip}
            onChange={handleNewAddressChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="city"
            label="City"
            value={newAddress.city}
            onChange={handleNewAddressChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="state"
            label="State"
            value={newAddress.state}
            onChange={handleNewAddressChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="location"
            label="Location"
            value={newAddress.location}
            onChange={handleNewAddressChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddNewAddressSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification for saved changes */}
      <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={handleNotificationClose}>
        <Alert onClose={handleNotificationClose} severity="success">
          Address saved successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LayoutProfileAddress;






















// import React, { useState } from 'react';
// import plus from '../../../assets/Icons/plus[1].png';
// import { TextField, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material'; 
// import edit from '../../../assets/Edit.png';

// const LayoutProfileAddress = () => {
//   const [isTabEdit, setIsTabEdit] = useState(false);
//   const [addresses, setAddresses] = useState([]); // Store additional addresses
//   const [selectedAddress, setSelectedAddress] = useState(null); // Store selected address for permanent
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   // State for Present Address
//   const [presentAddress, setPresentAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // State for New Address
//   const [newAddress, setNewAddress] = useState({
//     buildingName: '',
//     zip: '',
//     city: '',
//     state: '',
//     location: '',
//   });

//   // Handle Present Address changes
//   const handlePresentAddressChange = (e) => {
//     const { name, value } = e.target;
//     setPresentAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle New Address changes
//   const handleNewAddressChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Open the dialog for adding new address
//   const handleAddNewAddressClick = () => {
//     setDialogOpen(true);
//   };

//   // Close dialog
//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   // Add new address logic
//   const handleAddNewAddressSave = () => {
//     setAddresses([...addresses, newAddress]); // Add new address to the list
//     setNewAddress({
//       buildingName: '',
//       zip: '',
//       city: '',
//       state: '',
//       location: '',
//     });
//     setDialogOpen(false);
//     setNotificationOpen(true); // Show success notification
//   };

//   // Close notification
//   const handleNotificationClose = () => {
//     setNotificationOpen(false);
//   };

//   return (
//     <div className='w-full h-full'>
//       {/* Present Address Section */}
//       <div className='flex justify-between ml-6 mt-8'>
//         <h1 className='text-xl text-blue-900 font-semibold'>Present Address</h1>
//         <button className='bg-blue-900 text-white p-2 flex rounded-md' onClick={handleAddNewAddressClick}>
//           <img src={plus} className='w-6 h-6' alt="Add New" /> Add New Address
//         </button>
//       </div>
// <div className='flex '>
//       <div className="flex bg-white border border-gray-400 rounded-lg px-8 mx-6 w-[50%] mt-4 space-x-4">
//         {/* Present Address Form */}
//         <div className='flex flex-col py-4'>
//           <label>Building Name</label>
//           <TextField
//             name="buildingName"
//             value={presentAddress.buildingName}
//             onChange={handlePresentAddressChange}
//             label="Building Name"
//             className='w-full'
//             size='small'
//             disabled={!isTabEdit}
//           />
//           <label>Zip</label>
//           <TextField
//             name="zip"
//             value={presentAddress.zip}
//             onChange={handlePresentAddressChange}
//             label="Zip"
//             className='w-full'
//             size='small'
//             disabled={!isTabEdit}
//           />

// {/* <div className='flex flex-col py-4'> */}
//           <label>Location</label>
//           <TextField
//             name="location"
//             value={presentAddress.location}
//             onChange={handlePresentAddressChange}
//             label="Location"
//             className='w-full'
//             size='small'
//             disabled={!isTabEdit}
//           />
       
//         </div>

//         <div className='flex flex-col py-4'>
//           <label>City</label>
//           <TextField
//             name="city"
//             value={presentAddress.city}
//             onChange={handlePresentAddressChange}
//             label="City"
//             className='w-full'
//             size='small'
//             disabled={!isTabEdit}
//           />
//           <label>State</label>
//           <TextField
//             name="state"
//             value={presentAddress.state}
//             onChange={handlePresentAddressChange}
//             label="State"
//             className='w-full'
//             size='small'
//             disabled={!isTabEdit}
//           />
//         </div>

      

//         <div className='flex flex-col justify-between py-4'>
//           <img src={edit} className='w-6 h-6' alt="Edit" onClick={() => setIsTabEdit(true)} />
//           <button
//             className={`bg-blue-900 text-white p-1 w-16 rounded-md font-semibold ${!isTabEdit ? "opacity-50 cursor-not-allowed" : ""}`}
//             onClick={() => setIsTabEdit(false)}
//             disabled={!isTabEdit}
//           >
//             Save
//           </button>
//         </div>

//         {/* Render Additional Addresses beside Present Address */}
        
//       </div>

//       {addresses.length > 0 && (
//           <div className="flex flex-col p-4 w-[50%] space-x-4">
//             {addresses.map((address, index) => (
//               <div className='flex'>
//                 <p className='m-2'>
//                   {/* <strong>Building Name: </strong> */}
//                   <TextField 
//                   value={address.buildingName}
//                   size='small'/>
//                   </p>
//                 <p  className='m-2'><TextField 
//                   value={address.city}
//                   size='small'/></p>
//                 <p  className='m-2'><TextField 
//                   value={address.state}
//                   size='small'/></p>
//                 <p ><TextField 
//                   value={address.zip}
//                   size='small'/></p>
//                 <p><TextField 
//                   value={address.location}
//                   size='small'/></p>
//               </div>
//             )
//             )}
//           </div>
//         )}

//         </div>

//       {/* Add New Address Dialog */}
//       <Dialog open={dialogOpen} onClose={handleDialogClose}>
//         <DialogTitle>Add New Address</DialogTitle>
//         <DialogContent>
//           <TextField
//             name="buildingName"
//             label="Building Name"
//             value={newAddress.buildingName}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             name="zip"
//             label="Zip"
//             value={newAddress.zip}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             name="city"
//             label="City"
//             value={newAddress.city}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             name="state"
//             label="State"
//             value={newAddress.state}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             name="location"
//             label="Location"
//             value={newAddress.location}
//             onChange={handleNewAddressChange}
//             fullWidth
//             margin="dense"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose}>Cancel</Button>
//           <Button onClick={handleAddNewAddressSave} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Notification for saved changes */}
//       <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={handleNotificationClose}>
//         <Alert onClose={handleNotificationClose} severity="success">
//           Address saved successfully!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default LayoutProfileAddress;
