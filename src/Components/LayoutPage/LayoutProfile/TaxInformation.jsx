
import React, { useEffect, useState } from 'react';
import { Autocomplete, FormControl, FormHelperText, InputLabel, TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductOffer } from '../../../Api/ProductApi';
import { taxAddInformationApi, TaxGetByStateNameApi, TaxInfoEdit } from '../../../Api/TaxInfoApi';
import Notification from '../../Notification';
import { useStates } from "react-us-states";
// const TaxInformation = () => {
//   const getproductSpecialOffer = useSelector((state) => state.product.productSpecialOffer)
//   const [category, setCategory] = useState(getproductSpecialOffer);
//   const [taxPercentage, setTaxPercentage] = useState('');
//   const [addedEntries, setAddedEntries] = useState([]);
//   const [isEditable, setIsEditable] = useState(false); // Controls edit mode
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controls success message visibility
//   const [editingIndex, setEditingIndex] = useState(null); // Track which entry is being edited
//   console.log("gettttppp==>", getproductSpecialOffer)
//   console.log("caaa", category)
//   const businessInfo = useSelector((state) => state.user.businessInfo)
//   console.log("bussss-->", businessInfo)
//   const dispatch = useDispatch()
//   // Handle adding the entry or saving the edited entry
//   const handleAddOrSave = () => {
//     if (category.specificationName && taxPercentage) {
//       if (editingIndex !== null) {
//         // Update the existing entry
//         const updatedEntries = [...addedEntries];
//         updatedEntries[editingIndex] = { ...updatedEntries[editingIndex], category, taxPercentage };
//         setAddedEntries(updatedEntries);
//         setEditingIndex(null); // Reset the editing index
//       } else {
//         // Add a new entry
//         setAddedEntries([...addedEntries, { category, taxPercentage }]);
//       }

//       setCategory(''); // Reset after adding or editing
//       setTaxPercentage(''); // Reset after adding or editing
//       setIsEditable(false); // Disable edit mode
//       setShowSuccessMessage(true); // Show success message
//     }

//     const payloadAdd = {
//       taxInformationID: "",
//       stateName: businessInfo?.state,
//       categorySpecificationID: category?.categorySpecificationId,
//       taxPercentage: taxPercentage,
//       createdDate: "",
//       modifiedDate: "",
//       isActive: 1
//     }
//     dispatch(taxAddInformationApi(payloadAdd))
//   };

//   // Handle edit icon click
//   const handleEditClick = (index) => {
//     const entryToEdit = addedEntries[index];
//     setCategory(entryToEdit.category);
//     setTaxPercentage(entryToEdit.taxPercentage);
//     setEditingIndex(index); // Set the index of the entry being edited
//     setIsEditable(true); // Enable edit mode
//     setShowSuccessMessage(false); // Hide success message

//   };

//   useEffect(() => {
//     dispatch(fetchProductOffer())
//   },[])
//   return (
//     <div className="w-[90%]">
//             {showSuccessMessage && <p className=" mt-4 flex justify-end  text-green-600 font-semibold text-xl">Entry saved successfully!</p>}

//       <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
//         <div className="flex justify-between">
//           <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1>
//           <img src={edit} className="w-6 h-6 cursor-pointer" onClick={() => setIsEditable(true)} alt="edit" />
//         </div>

//         <div className="flex justify-around my-4">
//           <div>
//             <select
//               className="border rounded-md h-11"
//               value={category.specificationName}
//               onChange={(e) => setCategory(e.target.value)}
//               disabled={!isEditable} // Disable when not editable
//             >
//               <option value="">Select a category</option>
//               {/* <option>Prescription Drug</option>
//               <option>OTC Product</option> */}
//               {/* {category.map((item) => {
//                 return(
//                   <option value={item.categorySpecificationId}>{item.specificationName}</option>
//                 )
//               })} */}
//               {/* {Array.isArray(category) ? ( */}
//               {category.map((item) => (
//                 <option key={item.categorySpecificationId} value={item.categorySpecificationId}>
//                   {item.specificationName}
//                 </option>
//               ))}
//               {/* ) : (
//                 <option value="">No categories available</option> */}

//             </select>
//           </div>

//           <div>
//             <TextField
//               type="text"
//               label="Tax percentage"
//               size="small"
//               value={taxPercentage}
//               onChange={(e) => setTaxPercentage(e.target.value)}
//               disabled={!isEditable} // Disable when not editable
//             />
//           </div>

//           <button
//             className="bg-blue-900 text-white w-16 rounded-lg h-8"
//             onClick={handleAddOrSave}
//             disabled={!isEditable} // Disable when not editable
//           >
//             {editingIndex !== null ? 'Save' : 'ADD'}
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto ml-5">
//         <table className="min-w-full text-left table-auto border-collapse">
//           <thead className="bg-gray-200">
//             <tr className="bg-blue-900 text-white">
//             <th className="px-6 py-3 text-base font-bold">S NO. </th>

//             <th className="px-6 py-3 text-base font-bold">State </th>

//               <th className="px-6 py-3 text-base font-bold">Category Name</th>
//               <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
//               <th className="px-6 py-3 text-base font-bold">Created Date </th>
//               <th className="px-6 py-3 text-base font-bold">Modify Date</th>


//               <th className="px-6 py-3 text-base font-bold">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {addedEntries.map((entry, index) => (
//               <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
//                                 <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>

//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.category}</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.createdDate}</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.modifiedDate}</td>


//                 <td className="px-6 border-b border-gray-200 text-sm">
//                   <button className="px-4 py-2 text-white" onClick={() => handleEditClick(index)}>
//                     <img src={edit} alt="Edit" className="w-6 h-6" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };
// const TaxInformation = () => {
//   const getproductSpecialOffer = useSelector((state) => state.product.productSpecialOffer);
//   const [category, setCategory] = useState(''); // Initialize as an empty string for selected category
//   const [taxPercentage, setTaxPercentage] = useState('');
//   const [addedEntries, setAddedEntries] = useState([]);
//   const [isEditable, setIsEditable] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const businessInfo = useSelector((state) => state.user.businessInfo);
//   const dispatch = useDispatch();
//   const stateNameData = useSelector((state) => state.tax.stateName)
//   console.log("statee",stateNameData)
//   let selectedCategory

//   // Handle adding the entry or saving the edited entry
//   const handleAddOrSave = async () => {
//     selectedCategory = getproductSpecialOffer.find(
//       (item) => item.categorySpecificationId === category
//     );

//     if (editingIndex !== null) {
//       // Update the existing entry in stateNameData
//       const updatedEntries = [...stateNameData];
//       updatedEntries[editingIndex] = {
//         ...updatedEntries[editingIndex],
//         category: selectedCategory,
//         taxPercentage: taxPercentage,
//       };
//       setAddedEntries(updatedEntries);
//       setEditingIndex(null); // Reset the editing index after saving
//     } else {
//       // Add a new entry (if no editingIndex is set)
//       setAddedEntries([...addedEntries, { category: selectedCategory, taxPercentage }]);
//     }

//     // Reset form fields after adding or editing
//     setCategory('');
//     setTaxPercentage('');
//     setIsEditable(false);
//     setShowSuccessMessage(true);

//     // API call to save the new entry
//     const payloadAdd = {
//       taxInformationID: '',
//       stateName: businessInfo?.state,
//       categorySpecificationID: selectedCategory?.categorySpecificationId,
//       taxPercentage: taxPercentage,
//       createdDate: new Date().toISOString(),
//       modifiedDate: new Date().toISOString(),
//       isActive: 1
//     };
//     await dispatch(taxAddInformationApi(payloadAdd));
//     await dispatch(TaxGetByStateNameApi(businessInfo?.state));
//   };

//   // Handle edit icon click: populate the form with the selected row data
//   const handleEditClick = (index) => {
//     const entryToEdit = stateNameData[index]; // Get the selected entry

//     if (entryToEdit && entryToEdit.category) {
//       setCategory(entryToEdit.category.categorySpecificationId); // Set the category in the form
//       setTaxPercentage(entryToEdit.taxPercentage); // Set the tax percentage in the form
//       setEditingIndex(index); // Set the index of the row being edited
//       setIsEditable(true); // Make form editable
//       setShowSuccessMessage(false); // Hide success message while editing
//     } else {
//       console.error('Category is undefined for the selected entry.');
//     }
//   };



//   useEffect(() => {
//     dispatch(TaxGetByStateNameApi(businessInfo?.state))
//   }, [])
//   // Handle edit icon click
//   // const handleEditClick = (index) => {
//   //   const entryToEdit = addedEntries[index];
//   //   setCategory(entryToEdit.category.categorySpecificationId); // Set the ID of the category to dropdown value
//   //   setTaxPercentage(entryToEdit.taxPercentage);
//   //   setEditingIndex(index);
//   //   setIsEditable(true);
//   //   setShowSuccessMessage(false);
//   // };
// //   const handleEditClick = (index) => {
// //   const entryToEdit = addedEntries[index];

// //   if (entryToEdit && entryToEdit.category) {
// //     // Check if entryToEdit and its category are defined
// //     setCategory(entryToEdit.category.categorySpecificationId); // Set the ID of the category to dropdown value
// //     setTaxPercentage(entryToEdit.taxPercentage);
// //     setEditingIndex(index);
// //     setIsEditable(true);
// //     setShowSuccessMessage(false);
// //   } else {
// //     console.error('Category is undefined for the selected entry.');
// //   }
// // };

//   useEffect(() => {
//     dispatch(fetchProductOffer());
//   }, [dispatch]);

//   return (
//     <div className="w-[90%]">
//       {showSuccessMessage && (
//         <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">Entry saved successfully!</p>
//       )}

//       <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
//         <div className="flex justify-between">
//           <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1>
//           <img src={edit} className="w-6 h-6 cursor-pointer" onClick={() => setIsEditable(true)} alt="edit" />
//         </div>

//         <div className="flex justify-around my-4">
//           <div>
//             <select
//               className="border rounded-md h-11"
//               value={category} // Set category in select box
//               onChange={(e) => setCategory(e.target.value)} // Update category when changed
//               disabled={!isEditable}
//             >
//               <option value="">Select a category</option>
//               {getproductSpecialOffer.map((item) => (
//                 <option key={item.categorySpecificationId} value={item.categorySpecificationId}>
//                   {item.specificationName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <TextField
//               type="text"
//               label="Tax percentage"
//               size="small"
//               value={taxPercentage} // Set the tax percentage in the input
//               onChange={(e) => setTaxPercentage(e.target.value)} // Update when changed
//               disabled={!isEditable}
//             />
//           </div>

//           <button
//             className="bg-blue-900 text-white w-16 rounded-lg h-8"
//             onClick={handleAddOrSave}
//             disabled={!isEditable}
//           >
//             {editingIndex !== null ? 'Save' : 'ADD'}
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto ml-5">
//         <table className="min-w-full text-left table-auto border-collapse">
//           <thead className="bg-gray-200">
//             <tr className="bg-blue-900 text-white">
//               <th className="px-6 py-3 text-base font-bold">S NO. </th>
//               <th className="px-6 py-3 text-base font-bold">State </th>
//               <th className="px-6 py-3 text-base font-bold">Category Name</th>
//               <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
//               <th className="px-6 py-3 text-base font-bold">Created Date </th>
//               <th className="px-6 py-3 text-base font-bold">Modify Date</th>
//               <th className="px-6 py-3 text-base font-bold">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stateNameData.map((entry, index) => {
//               const matchedCategory = getproductSpecialOffer.find(
//                 (item) => item.categorySpecificationId === entry.categorySpecificationID
//               );
//               return (
//                 <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
//                   <td className="px-6 border-b border-gray-200 text-sm">{index + 1}</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">{matchedCategory ? matchedCategory.specificationName : 'Unknown Category'}</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">{new Date(entry.createdDate).toLocaleDateString('en-US')}</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">{new Date(entry.modifiedDate).toLocaleDateString('en-US')}</td>
//                   <td className="px-6 border-b border-gray-200 text-sm">
//                     <button className="px-4 py-2 text-white" onClick={() => handleEditClick(index)}>
//                       <img src={edit} alt="Edit" className="w-6 h-6" />
//                     </button>
//                   </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// Handle adding the entry or saving the edited entry
// const handleAddOrSave = async (taxInformationId, categorySpecificationId, stateName, taxPercentage, createdDate, modifiedDate) => {
//   selectedCategory = getproductSpecialOffer.find(
//     (item) => item.categorySpecificationId === category
//   );

//   if (editingIndex !== null) {
//     // Update the existing entry in stateNameData
//     const updatedEntries = [...stateNameData];
//     updatedEntries[editingIndex] = {
//       ...updatedEntries[editingIndex],
//       category: selectedCategory,
//       taxPercentage: taxPercentage,
//     };
//     setAddedEntries(updatedEntries);
//     setEditingIndex(null); // Reset the editing index after saving
//   } else {
//     // Add a new entry (if no editingIndex is set)
//     setAddedEntries([...addedEntries, { category: selectedCategory, taxPercentage }]);
//   }

//   // Reset form fields after adding or editing
//   setCategory('');
//   setTaxPercentage('');
//   setIsEditable(false);
//   setShowSuccessMessage(true);

//   // API call to save the new entry
//   const payloadAdd = {
//     taxInformationID: '',
//     stateName: stateName,
//     categorySpecificationID: selectedCategory?.categorySpecificationId,
//     taxPercentage: taxPercentage,
//     createdDate: new Date().toISOString(),
//     modifiedDate: new Date().toISOString(),
//     isActive: 1
//   };
//   await dispatch(taxAddInformationApi(payloadAdd));
//   await dispatch(TaxGetByStateNameApi(businessInfo?.state));

//   const payloadEdit = {
//     taxInformationID: taxInformationId,
//     stateName: stateName,
//     categorySpecificationID: categorySpecificationId,
//     taxPercentage: 0,
//     createdDate: createdDate,
//     modifiedDate: modifiedDate,
//     isActive: 1
//   }
//   dispatch(TaxInfoEdit(payloadEdit))
// };
const TaxInformation = () => {
  const getproductSpecialOffer = useSelector((state) => state.product.productSpecialOffer);
  const [category, setCategory] = useState(null); // Initialize as an empty string for selected category
  const [taxPercentage, setTaxPercentage] = useState('');
  const [addedEntries, setAddedEntries] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const businessInfo = useSelector((state) => state.user.businessInfo);
  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch();
  const stateNameData = useSelector((state) => state.tax.stateName);


  const [editingEntry, setEditingEntry] = useState({}); // Store current entry being edited



  let selectedCategory;

  const allStates = useStates(); // Fetches the list of states from react-us-states
  const [states, setStates] = useState([]); // Holds the states list
  const [formData, setFormData] = useState({ State: "" }); // Holds selected form data
  const [errors, setErrors] = useState({}); // Holds validation errors

  // Load states from `useStates` on component mount
  useEffect(() => {
    setStates(allStates); // Populate states array with data from useStates
  }, [allStates]);


  // Handles input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset error for the field
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Validates the form
  const validate = () => {
    const newErrors = {};

    if (!formData.State) {
      newErrors.State = "Please select a state.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddOrSave = async () => {
    if (validate()) {
      console.log("Form is valid:", formData);
    } else {
      console.log("Form has errors:", errors);
    }

    selectedCategory = getproductSpecialOffer.find(
      (item) => item.categorySpecificationId === category
    );

    if (editingIndex !== null) {
      // Update the existing entry in stateNameData (editing case)
      const updatedEntries = [...stateNameData];
      updatedEntries[editingIndex] = {
        ...updatedEntries[editingIndex],
        category: selectedCategory,
        // stateName: formData.State,
        taxPercentage: taxPercentage,
      };
      setAddedEntries(updatedEntries);
      setEditingIndex(null); // Reset the editing index after saving
    } else {
      // Add a new entry (if no editingIndex is set)
      setAddedEntries([...addedEntries, { category: selectedCategory, taxPercentage }]);
    }

    // Determine whether to call add or edit API based on filled fields
    if (!editingEntry.taxInformationId || !editingEntry.categorySpecificationId) {
      // If the fields are empty, call add API
      const payloadAdd = {
        taxInformationID: '',
        sellerId: user.customerId,
        stateName: formData.State,
        categorySpecificationID: selectedCategory?.categorySpecificationId,
        taxPercentage: taxPercentage,
        createdDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
        isActive: 1,
      };
      await dispatch(taxAddInformationApi(payloadAdd));
      setNotification({
        show: true,
        message: "Added Item Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);

    } else {
      // If the fields are filled, call edit API
      const payloadEdit = {
        taxInformationID: editingEntry.taxInformationId,
        sellerId: user.customerId,
        stateName: editingEntry.stateName,
        // categorySpecificationID: category, // Use updated category
        categorySpecificationID: category, // Use updated category
        taxPercentage: taxPercentage,
        createdDate: editingEntry.createdDate,
        modifiedDate: new Date().toISOString(), // Update modified date
        isActive: 1,
      };
      await dispatch(TaxInfoEdit(payloadEdit));
      setNotification({
        show: true,
        message: "Edit Item Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }

    // Fetch updated tax data
    await dispatch(TaxGetByStateNameApi(user.customerId));

    // Reset form fields after adding or editing
    setFormData('')
    setCategory("");
    setTaxPercentage('');
    setIsEditable(false);
    setShowSuccessMessage(true);
  };

  // Handle edit icon click: populate the form with the selected row data
  const handleEditClick = (index, taxInformationId, categorySpecificationId, taxPercentage, stateName, createdDate, modifiedDate) => {
    const entryToEdit = stateNameData[index]; // Get the selected entry

    if (entryToEdit && entryToEdit.categorySpecificationID) {
      setCategory(entryToEdit.categorySpecificationID); // Set the category in the form
      setTaxPercentage(entryToEdit.taxPercentage); // Set the tax percentage in the form
      setFormData({ State: entryToEdit.stateName })
      setEditingIndex(index); // Set the index of the row being edited
      setIsEditable(true); // Make form editable
      setShowSuccessMessage(false); // Hide success message while editing
      setEditingEntry({
        taxInformationId,
        categorySpecificationId,
        taxPercentage,
        stateName,
        createdDate,
        modifiedDate
      }); // Store the editing entry data
    } else {
      console.error('Category is undefined for the selected entry.');
    }
  };
  useEffect(() => {
    dispatch(TaxGetByStateNameApi(user.customerId));
  }, [dispatch, user.customerId]);

  useEffect(() => {
    dispatch(fetchProductOffer());
  }, [dispatch]);

  // useEffect(() => {
  //   const data = async () => {
  //     await TaxGetAll()
  //   }
  //   data()
  // }, [])
  return (
    <div className="w-full overflow-y-scroll">
      {/* {showSuccessMessage && (
        <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">
          Entry saved successfully!
        </p>
      )} */}
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
     <h1 className="text-xl text-blue-900 font-semibold mx-6 py-4">Tax Information</h1>
      <div className="bg-white w-[85%] md:w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
        <div className="flex justify-between">
        {isEditable && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  Tax Information
                </h1>
              )}
              <h1
                className={`text-xl font-semibold my-2 ${
                  isEditable ? "invisible" : "text-blue-900"
                }`}
              >
                Tax Information
              </h1>
          {/* <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1> */}
          <img src={edit} className='w-6 h-6 cursor-pointer' onClick={() => setIsEditable(true)} />
        </div>

        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-around my-4">
          <div className=''>
            <select
              className="border rounded-md h-11"
              value={category} // Set category in select box
              onChange={(e) => setCategory(Number(e.target.value))} // Update category when changed
              // disabled={isEditable && editingIndex !== null}
              disabled={!isEditable || editingIndex !== null}
              // disabled={!isEditable}
            >
              <option value="">Select a category</option>
              {getproductSpecialOffer.map((item) => (
                <option key={item.categorySpecificationId} value={item.categorySpecificationId}>
                  {item.specificationName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <FormControl className="w-44" error={!!errors.State}>
              <Autocomplete
                id="state-select"
                options={states} // Populate dropdown with states
                getOptionLabel={(option) => option.name} // Use `name` property for display
                value={
                  states.find((state) => state.name === formData.State) || null
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
                    value={formData.State}
                    error={!!errors.State}
                    helperText={errors.State}
                  />
                )}
                filterOptions={(options, { inputValue }) =>
                  options.filter((option) =>
                    option.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                }
                // disabled={isEditable && editingIndex !== null} 
                disabled={!isEditable || editingIndex !== null}
              />
              {errors.State && (
                <FormHelperText>{errors.State}</FormHelperText>
              )}
            </FormControl>
          </div>
          <div>
            <TextField
              type="phone"
              label="Tax percentage"
              size="small"
              value={taxPercentage} // Set the tax percentage in the input
              onChange={(e) => {
                const value = e.target.value;
                if (value <= 99) {
                  setTaxPercentage(value); // Update when value is less than or equal to 99
                }
              }}// Update when changed
              disabled={!isEditable} // Enable/disable based on edit mode
              inputProps={{
                max: 99, // Set the maximum value to 99
                min: 0,  // Optional: Set the minimum value to 0
              }}
            />
          </div>

          <button
            className="bg-blue-900 text-white w-16 rounded-lg h-8"
            onClick={handleAddOrSave}
            disabled={!isEditable} // Disable if not in edit mode
          >
            {editingIndex !== null ? 'Save' : 'ADD'}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto ml-5">
        <table className="w-full text-left table-auto border-collapse hidden md:table">
          <thead className="bg-gray-200">
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 text-base font-bold">S NO.</th>
              <th className="px-6 py-3 text-base font-bold">State</th>
              <th className="px-6 py-3 text-base font-bold">Category Name</th>
              <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
              <th className="px-6 py-3 text-base font-bold">Created Date</th>
              <th className="px-6 py-3 text-base font-bold">Modify Date</th>
              <th className="px-6 py-3 text-base font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {stateNameData?.length > 0 ? (
              stateNameData.map((entry, index) => {
                const matchedCategory = getproductSpecialOffer.find(
                  (item) => item.categorySpecificationId === entry.categorySpecificationID
                );
                return (
                  <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
                    <td className="px-6 border-b border-gray-200 text-sm">{index + 1}</td>
                    <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>
                    <td className="px-6 border-b border-gray-200 text-sm">
                      {matchedCategory ? matchedCategory.specificationName : 'Unknown Category'}
                    </td>
                    <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
                    <td className="px-6 border-b border-gray-200 text-sm">
                      {new Date(entry.createdDate)
                        .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                        .replace(/\//g, '-')}
                    </td>
                    <td className="px-6 border-b border-gray-200 text-sm">
                      {new Date(entry.modifiedDate)
                        .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                        .replace(/\//g, '-')}                  </td>
                    <td className="px-6 border-b border-gray-200 text-sm">
                      <button
                        className="px-4 py-2 text-white"
                        onClick={() => handleEditClick(index, entry?.taxInformationID, entry.categorySpecificationID, entry.taxPercentage, entry.stateName, entry.createdDate, entry.modifiedDate)}
                      >
                        <img src={edit} alt="Edit" className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">No data available</td>
            </tr>
)}
            {/* })} */}
          </tbody>
        </table>

        <div className='block md:hidden space-y-4'>
          {
            stateNameData.map((entry, index) => {
              const matchedCategory = getproductSpecialOffer.find(
                (item) => item.categorySpecificationId === entry.categorySpecificationID
              );
              return (
                <div key={index} className="bg-white shadow rounded-lg p-4 border">
                    <div className="flex gap-2">
                    <span className="font-semibold text-sm">S.No:</span>
                    <span>{index + 1}</span>
                  </div>

                  <div className='mt-2'>
                    <p>
                    <span className="font-semibold">
                      State :
                      </span>
                      {entry.stateName}
                    </p>
                    <p>
                    <span className="font-semibold">
                      Category Name :

                      </span>
                      {matchedCategory ? matchedCategory.specificationName : 'Unknown Category'}
                    </p>
                    <p>
                    <span className="font-semibold">
                      Tax Percentage :
                      </span>
                      {entry.taxPercentage}%
                    </p>
                    <p>
                    <span className="font-semibold">
                      Created Date :
                      </span>
                      {new Date(entry.createdDate)
                      .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                      .replace(/\//g, '-')}
                    </p>
                    <p>
                    <span className="font-semibold">
                      Modify Date :
                      </span>
                      {new Date(entry.modifiedDate)
                      .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                      .replace(/\//g, '-')} 
                    </p>
                    <p>
                    <span className="font-semibold">
                      Action :
                      </span>
                      <button
                      className="px-4 py-2 text-white"
                      onClick={() => handleEditClick(index, entry?.taxInformationID, entry.categorySpecificationID, entry.taxPercentage, entry.stateName, entry.createdDate, entry.modifiedDate)}
                    >
                      <img src={edit} alt="Edit" className="w-6 h-6" />
                    </button>
                    </p>
                    </div>

                  </div>

              
              ); 
          })}

        </div>
      </div>
    </div>
  );
};

















// const TaxInformation = () => {
//   const getproductSpecialOffer = useSelector((state) => state.product.productSpecialOffer);
//   const [category, setCategory] = useState(''); // Initialize as an empty string for selected category
//   const [taxPercentage, setTaxPercentage] = useState('');
//   const [addedEntries, setAddedEntries] = useState([]);
//   const [isEditable, setIsEditable] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const businessInfo = useSelector((state) => state.user.businessInfo);
//   const stateNameData = useSelector((state) => state.tax.stateName);
//   const dispatch = useDispatch();

//   let selectedCategory;

//   // Handle adding the entry or saving the edited entry
//   const handleAddOrSave = async () => {
//     selectedCategory = getproductSpecialOffer.find(
//       (item) => item.categorySpecificationId === category
//     );

//     if (editingIndex !== null) {
//       // Update the existing entry
//       const updatedEntries = [...addedEntries];
//       updatedEntries[editingIndex] = {
//         ...updatedEntries[editingIndex],
//         category: selectedCategory,
//         taxPercentage,
//       };
//       setAddedEntries(updatedEntries);
//       setEditingIndex(null); // Reset the editing index
//     } else {
//       // Add a new entry
//       setAddedEntries([...addedEntries, { category: selectedCategory, taxPercentage }]);
//     }

//     setCategory(''); // Reset category to empty after adding or editing
//     setTaxPercentage(''); // Reset after adding or editing
//     setIsEditable(false);
//     setShowSuccessMessage(true);

//     const payloadAdd = {
//       taxInformationID: '',
//       stateName: businessInfo?.state,
//       categorySpecificationID: selectedCategory?.categorySpecificationId,
//       taxPercentage: taxPercentage,
//       createdDate: new Date().toISOString(),
//       modifiedDate: new Date().toISOString(),
//       isActive: 1
//     };
//     await dispatch(taxAddInformationApi(payloadAdd));
//     await dispatch(TaxGetByStateNameApi(businessInfo?.state));
//   };

//   // Handle edit icon click
//   const handleEditClick = (index) => {
//     const entryToEdit = stateNameData[index];

//     if (entryToEdit && entryToEdit.category) {
//       setCategory(entryToEdit.category.categorySpecificationId); // Set the ID of the category to dropdown value
//       setTaxPercentage(entryToEdit.taxPercentage);
//       setEditingIndex(index);
//       setIsEditable(true);
//       setShowSuccessMessage(false);
//     } else {
//       console.error('Category is undefined for the selected entry.');
//     }
//   };

//   useEffect(() => {
//     dispatch(TaxGetByStateNameApi(businessInfo?.state));
//   }, [dispatch, businessInfo?.state]);

//   return (
//     <div className="w-[90%]">
//       {showSuccessMessage && (
//         <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">Entry saved successfully!</p>
//       )}

//       <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
//         <div className="flex justify-between">
//           <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1>
//         </div>

//         <div className="flex justify-around my-4">
//           <div>
//             <select
//               className="border rounded-md h-11"
//               value={category} // The value now reflects the selected category ID
//               onChange={(e) => setCategory(e.target.value)} // Update the category ID in state
//               disabled={!isEditable}
//             >
//               <option value="">Select a category</option>
//               {getproductSpecialOffer.map((item) => (
//                 <option key={item.categorySpecificationId} value={item.categorySpecificationId}>
//                   {item.specificationName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <TextField
//               type="text"
//               label="Tax percentage"
//               size="small"
//               value={taxPercentage}
//               onChange={(e) => setTaxPercentage(e.target.value)}
//               disabled={!isEditable}
//             />
//           </div>

//           <button
//             className="bg-blue-900 text-white w-16 rounded-lg h-8"
//             onClick={handleAddOrSave}
//             disabled={!isEditable}
//           >
//             {editingIndex !== null ? 'Save' : 'ADD'}
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto ml-5">
//         <table className="min-w-full text-left table-auto border-collapse">
//           <thead className="bg-gray-200">
//             <tr className="bg-blue-900 text-white">
//               <th className="px-6 py-3 text-base font-bold">S NO. </th>
//               <th className="px-6 py-3 text-base font-bold">State </th>
//               <th className="px-6 py-3 text-base font-bold">Category Name</th>
//               <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
//               <th className="px-6 py-3 text-base font-bold">Created Date </th>
//               <th className="px-6 py-3 text-base font-bold">Modify Date</th>
//               <th className="px-6 py-3 text-base font-bold">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stateNameData.map((entry, index) => (
//               <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
//                 <td className="px-6 border-b border-gray-200 text-sm">{index + 1}</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.category?.specificationName}</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
//                 <td className="px-6 border-b border-gray-200 text-sm">
//                   {new Date(entry.createdDate).toLocaleDateString('en-US')}
//                 </td>
//                 <td className="px-6 border-b border-gray-200 text-sm">
//                   {new Date(entry.modifiedDate).toLocaleDateString('en-US')}
//                 </td>
//                 <td className="px-6 border-b border-gray-200 text-sm">
//                   <button className="px-4 py-2 text-white" onClick={() => handleEditClick(index)}>
//                     <img src={edit} alt="Edit" className="w-6 h-6" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };









export default TaxInformation;
