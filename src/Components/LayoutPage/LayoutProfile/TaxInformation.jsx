
import React, { useEffect, useState } from 'react';
import { Autocomplete, Button, FormControl, FormHelperText, InputLabel, Modal, TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductOffer } from '../../../Api/ProductApi';
import { AddTaxBUlk, taxAddInformationApi, TaxGetByStateNameApi, TaxInfoEdit } from '../../../Api/TaxInfoApi';
import Notification from '../../Notification';
import { useStates } from "react-us-states";
import { fetchCategorySpecificationsGetAll } from '../../../Api/MasterDataApi';
import Loading from '../../Loading';
import Pagination from '../../Pagination';
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
  // const getproductSpecialOffer = useSelector((state) => state.product.productSpecialOffer);
  const getproductSpecialOffer = useSelector(
    (state) => state.master.setCategorySpecificationsGetAll
  );
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
  const [loading, setLoading] = useState(false)
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

  const excludedStates = [
    "AMERICAN SAMOA",
    "GUAM",
    "NORTHERN MARIANA ISLANDS",
    "PALAU",
    "PUERTO RICO",
  ];

  const filteredStates = states.filter(
    (state) => !excludedStates.includes(state.name.toUpperCase())
  );


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

  // const handleAddOrSave = async () => {
  //   if (validate()) {
  //     console.log("Form is valid:", formData);
  //   } else {
  //     console.log("Form has errors:", errors);
  //   }

  //   selectedCategory = getproductSpecialOffer.find(
  //     (item) => item.categorySpecificationId === category
  //   );

  //   if (editingIndex !== null) {
  //     // Update the existing entry in stateNameData (editing case)
  //     const updatedEntries = [...stateNameData];
  //     updatedEntries[editingIndex] = {
  //       ...updatedEntries[editingIndex],
  //       category: selectedCategory,
  //       // stateName: formData.State,
  //       taxPercentage: taxPercentage,
  //     };
  //     setAddedEntries(updatedEntries);
  //     setEditingIndex(null); // Reset the editing index after saving
  //   } else {
  //     // Add a new entry (if no editingIndex is set)
  //     setAddedEntries([...addedEntries, { category: selectedCategory, taxPercentage }]);
  //   }

  //   // Determine whether to call add or edit API based on filled fields
  //   if (!editingEntry.taxInformationId || !editingEntry.categorySpecificationId) {
  //     // If the fields are empty, call add API
  //     const payloadAdd = {
  //       taxInformationID: '',
  //       sellerId: user.customerId,
  //       stateName: formData.State,
  //       categorySpecificationID: selectedCategory?.categorySpecificationId,
  //       taxPercentage: taxPercentage,
  //       createdDate: new Date().toISOString(),
  //       modifiedDate: new Date().toISOString(),
  //       isActive: 1,
  //     };
  //     await dispatch(taxAddInformationApi(payloadAdd));
  //     setNotification({
  //       show: true,
  //       message: "Added Item Successfully!",
  //     });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);

  //   } else {
  //     // If the fields are filled, call edit API
  //     const payloadEdit = {
  //       taxInformationID: editingEntry.taxInformationId,
  //       sellerId: user.customerId,
  //       stateName: editingEntry.stateName,
  //       // categorySpecificationID: category, // Use updated category
  //       categorySpecificationID: category, // Use updated category
  //       taxPercentage: taxPercentage,
  //       createdDate: editingEntry.createdDate,
  //       modifiedDate: new Date().toISOString(), // Update modified date
  //       isActive: 1,
  //     };
  //     await dispatch(TaxInfoEdit(payloadEdit));
  //     setNotification({
  //       show: true,
  //       message: "Edit Item Successfully!",
  //     });
  //     setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //   }

  //   // Fetch updated tax data
  //   await dispatch(TaxGetByStateNameApi(user.customerId));

  //   // Reset form fields after adding or editing
  //   setFormData('')
  //   setCategory("");
  //   setTaxPercentage('');
  //   setIsEditable(false);
  //   setShowSuccessMessage(true);
  // };
  const [CallHistory, setCallHistory] = useState(0);
  const handleAddOrSave = async () => {
    if (validate()) {
      console.log("Form is valid:", formData);
    } else {
      console.log("Form has errors:", errors);
      return; // Stop execution if form validation fails
    }

    // Find selected category details
    const selectedCategory = getproductSpecialOffer.find(
      (item) => item.categorySpecificationId === category
    );

    // Check for duplicate entries
    if (editingIndex === null) {
      const isDuplicate = stateNameData.some(
        (entry) =>
          entry.stateName === formData.State &&
          entry.categorySpecificationID === selectedCategory?.categorySpecificationId
      );

      if (isDuplicate) {
        setNotification({
          show: true,
          message: `Tax is already defined for the state "${formData.State}" and category "${selectedCategory?.specificationName}".`,
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        setFormData('');
        setCategory("");
        setTaxPercentage('');
        return; // Stop execution if duplicate entry is found
      }
    }
    if (editingIndex !== null) {
      // Update the existing entry in stateNameData (editing case)
      const updatedEntries = [...stateNameData];
      updatedEntries[editingIndex] = {
        ...updatedEntries[editingIndex],
        category: selectedCategory,
        taxPercentage: taxPercentage,
      };
      setAddedEntries(updatedEntries);
      setEditingIndex(null); // Reset the editing index after saving
    } else {
      // Add a new entry (if no editingIndex is set)
      setAddedEntries([
        ...addedEntries,
        { category: selectedCategory, taxPercentage },
      ]);
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
        message: "Tax has been Added Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setCallHistory((prev) => prev + 1);

    } else {
      // If the fields are filled, call edit API
      const payloadEdit = {
        taxInformationID: editingEntry.taxInformationId,
        sellerId: user.customerId,
        stateName: editingEntry.stateName,
        categorySpecificationID: category, // Use updated category
        taxPercentage: taxPercentage,
        createdDate: editingEntry.createdDate,
        modifiedDate: new Date().toISOString(),
        isActive: 1,
      };
      // setLoading(true)
      await dispatch(TaxInfoEdit(payloadEdit));
      // setLoading(true)
      setNotification({
        show: true,
        message: "Tax has been Update Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      setCallHistory((prev) => prev + 1);
      
    }
    
    // Fetch updated tax data
    // await dispatch(TaxGetByStateNameApi(user.customerId));
    // setLoading(false)

    // Reset form fields after adding or editing
    setFormData('');
    setCategory("");
    setTaxPercentage('');
    setIsEditable(false);
    setShowSuccessMessage(true);
  };


  // Handle edit icon click: populate the form with the selected row data
  // const handleEditClick = (index, taxInformationId, categorySpecificationId, taxPercentage, stateName, createdDate, modifiedDate) => {
  //   console.log("taxId", taxInformationId, categorySpecificationId, taxPercentage, stateName)
  //   const entryToEdit = stateNameData[index]; // Get the selected entry

  //   if (entryToEdit && entryToEdit.categorySpecificationID) {
  //     setCategory(categorySpecificationID); // Set the category in the form
  //     setTaxPercentage(taxPercentage); // Set the tax percentage in the form
  //     setFormData({ State: stateName })
  //     setEditingIndex(index); // Set the index of the row being edited
  //     setIsEditable(true); // Make form editable
  //     setShowSuccessMessage(false); // Hide success message while editing
  //     setEditingEntry({
  //       taxInformationId,
  //       categorySpecificationId,
  //       taxPercentage,
  //       stateName,
  //       createdDate,
  //       modifiedDate
  //     }); // Store the editing entry data
  //   } else {
  //     console.error('Category is undefined for the selected entry.');
  //   }
  // };

// const handleEditClick = (
//   index,
//   taxInformationId,
//   categorySpecificationId,
//   taxPercentage,
//   stateName,
//   createdDate,
//   modifiedDate
// ) => {
//   console.log("handleEditClick called with:", {
//     index,
//     taxInformationId,
//     categorySpecificationId,
//     taxPercentage,
//     stateName,
//     createdDate,
//     modifiedDate,
//   });

//   // Get the selected entry
//   const entryToEdit = stateNameData[index];

//   if (!entryToEdit) {
//     console.error("No entry found at index:", index);
//     return;
//   }

//   if (!entryToEdit.categorySpecificationId) {
//     console.error("Category Specification ID is undefined:", entryToEdit);
//     return;
//   }

//   // Update state for the selected entry
//   setCategory(categorySpecificationId); // Use mapped data
//   setTaxPercentage(taxPercentage);
//   setFormData({ State: stateName });
//   setEditingIndex(index);
//   setIsEditable(true);
//   setShowSuccessMessage(false);

//   // Store the editing entry's data
//   setEditingEntry({
//     taxInformationId: taxInformationId,
//     categorySpecificationId: categorySpecificationId,
//     taxPercentage: taxPercentage,
//     stateName: stateName,
//     createdDate: createdDate,
//     modifiedDate: modifiedDate,
//   });
// };

  const handleEditClick = (index, taxInformationId, categorySpecificationId, taxPercentage, stateName, createdDate, modifiedDate) => {
    console.log("Editing entry:", {
      index,
      taxInformationId,
      categorySpecificationId,
      taxPercentage,
      stateName,
    });

    setCategory(categorySpecificationId); // Set the category in the form
    setFormData({ State: stateName }); // Set the state name in the form
    setTaxPercentage(taxPercentage); // Set the tax percentage in the form

    setEditingIndex(index); // Save the index of the row being edited
    setIsEditable(true); // Enable editing mode
    setShowSuccessMessage(false); // Hide success message during editing

    setEditingEntry({
      taxInformationId,
      categorySpecificationId,
      taxPercentage,
      stateName,
      createdDate,
      modifiedDate,
    });
  };


  useEffect(() => {
    const data = () => {
      setLoading(true)
      try {
        dispatch(TaxGetByStateNameApi(user.customerId));
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    data()
  }, [dispatch, user.customerId, CallHistory]);

  useEffect(() => {
    dispatch(fetchCategorySpecificationsGetAll());
  }, [dispatch]);

  // useEffect(() => {
  //   const data = async () => {
  //     await TaxGetAll()
  //   }
  //   data()
  // }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStates, setSelectedStates] = useState([]);
  const [customField, setCustomField] = useState("");

  // const handleModalSubmit = async () => {
  //   // // Process the data from the modal
  //   // console.log("Selected States:", selectedStates);
  //   // console.log("Custom Field Value:", customField);

  //   // // Close the modal after submission
  //   setIsModalOpen(false);
  //   const payload = {
  //     sellerId: user.customerId,
  //     taxPercentage: customField,
  //     isActive: 1
  //   }
  //      try {
  //        setLoading(true)
  //        const res = await dispatch(AddTaxBUlk(payload))
  //         setNotification({
  //           show: true,
  //           message: "Added Successfully!",
  //         });
  //        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //        await dispatch(TaxGetByStateNameApi(user.customerId))
  //        setLoading(false)
  //        setCustomField('')
  //       } catch (error) {
  //         console.error("Error adding product to cart:", error);
  //       }
  // };
  const handleModalSubmit = async () => {
    setIsModalOpen(false);
    const payload = {
      sellerId: user.customerId,
      taxPercentage: customField,
      isActive: 1,
    };

    try {
      setLoading(true);

      const res = await dispatch(AddTaxBUlk(payload));
      console.log("resssss", res)

      if (res?.statusCode === 200) {
        setNotification({
          show: true,
          message: "Added Successfully!",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        await dispatch(TaxGetByStateNameApi(user.customerId));

      } else {
        setNotification({
          show: true,
          message:"Failed to add tax. Please try again.",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setNotification({
        show: true,
        message: "An error occurred. Please try again.",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } finally {
      setLoading(false);
      setCustomField('');
    }
  };
  const handleCancel = () => {
    // Process the data from the modal
    console.log("Selected States:", selectedStates);
    console.log("Custom Field Value:", customField);

    // Close the modal after submission
    setIsModalOpen(false);
  };
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (filteredStates?.length) {
      setSelectedStates(filteredStates); // Select all states by default
    }
  }, [filteredStates]);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   useEffect(() => {
     if (stateNameData) {
       setCurrentItems(stateNameData.slice(indexOfFirstItem, indexOfLastItem));
      }
   }, [currentPage, stateNameData, indexOfFirstItem, indexOfLastItem]);
  
  

  return (
    <div className="w-full overflow-y-scroll">
      {/* {showSuccessMessage && (
        <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">
          Entry saved successfully!
        </p>
      )} */}
      <div>
        {/* Modal */}
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg mx-auto mt-20">
            <h2 id="modal-title" className="text-xl font-bold mb-4">
              Configure Tax Information
            </h2>

            {/* Row Layout */}
            <div className="flex flex-row items-center gap-4">
              {/* Field 1: General Merchandise */}
              {/* <TextField
                label="General Merchandise"
                value="General Merchandise"
                disabled
                fullWidth
              /> */}
              {/* <select
                className="border rounded-md h-11"
                value={category}
                onChange={(e) => setCategory(Number(e.target.value))}
                // disabled={editingIndex !== null}
              >
                <option value="">Select a category</option>
                {getproductSpecialOffer.map((item) => (
                  <option
                    key={item.categorySpecificationId}
                    value={item.categorySpecificationId}
                  >
                    {item.specificationName}
                  </option>
                ))}
              </select> */}

              {/* Field 2: State Selection */}
              {/* <Autocomplete
                multiple
                options={states}
                getOptionLabel={(option) => option.name}
                value={selectedStates} // All states selected by default
                onChange={(event, newValue) => setSelectedStates(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select States"
                    variant="outlined"
                    fullWidth
                    sx={{ width: '300px'}} 
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        maxHeight: '50px', // Set the maximum height for the input area
                        overflowY: 'auto',  // Enable vertical scrolling inside the input
                      },
                    }}
                  />
                )}
              /> */}

              {/* Field 3: Custom Field */}
              <TextField
                label="Tax Percentage"
                value={customField}
                // onChange={(e) => setCustomField(e.target.value)}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value <= 99) {
                    setCustomField(value); // Update when value is less than or equal to 99
                  }
                }}
                fullWidth
                sx={{ width: '400px'}}
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-between mt-6">
              <div className='flex'>

              <Button
                variant="contained"
                color="warning"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleModalSubmit}
              >
                Apply to All
              </Button>
            </div>
          </div>
        </Modal>
      </div>

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
          {/* <img src={edit} className='w-6 h-6 cursor-pointer' onClick={() => setIsEditable(true)} /> */}
        </div>

        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-around my-4">
          <div className=''>
            <div className="">
              {/* <select
                className="border rounded-md h-11"
                value={category}
                onChange={(e) => setCategory(Number(e.target.value))}
                // disabled={editingIndex !== null}
              >
                <option value="">Select a category</option>
                {getproductSpecialOffer.map((item) => (
                  <option
                    key={item.categorySpecificationId}
                    value={item.categorySpecificationId}
                  >
                    {item.specificationName}
                  </option>
                ))}
              </select> */}
              <select
                className="border rounded-md h-11"
                value={category} // Bound to `category` state
                onChange={(e) => setCategory(Number(e.target.value))}
                disabled={editingIndex !== null}
              >
                <option value="">Select a category</option>
                {getproductSpecialOffer.map((item) => (
                  <option
                    key={item.categorySpecificationId}
                    value={item.categorySpecificationId}
                  >
                    {item.specificationName}
                  </option>
                ))}
              </select>

            </div>
          </div>
          <div>
            {/* <FormControl className="w-44" error={!!errors.State}>
              <Autocomplete
                id="state-select"
                options={states}
                getOptionLabel={(option) => option.name}
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
                disabled={ editingIndex !== null}
              />
              {errors.State && <FormHelperText>{errors.State}</FormHelperText>}
            </FormControl> */}
            <FormControl className="w-44" error={!!errors.State}>
              <InputLabel id="state-select-label"></InputLabel>
              {/* <Autocomplete
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
              /> */}
              <Autocomplete
                id="state-select"
                options={filteredStates}
                getOptionLabel={(option) => option.name}
                value={filteredStates.find((state) => state.name === formData.State) || null} // Bound to `formData.State`
                onChange={(event, newValue) => {
                  handleInputChange({
                    target: {
                      name: "State",
                      value: newValue ? newValue.name : "",
                    },
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} label="State" size="small" variant="outlined" />
                )}
                // disabled={editingIndex !== null}
              />
              {errors.State && <FormHelperText>{errors.State}</FormHelperText>}
            </FormControl>
          </div>
          <div>
            {/* <TextField
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
              // disabled={!isEditable} // Enable/disable based on edit mode
              inputProps={{
                max: 99, // Set the maximum value to 99
                min: 0,  // Optional: Set the minimum value to 0
              }}
            /> */}
            <TextField
              type="phone"
              label="Tax percentage"
              size="small"
              value={taxPercentage} // Bound to `taxPercentage` state
              onChange={(e) => setTaxPercentage(e.target.value)} // Update state on change
              inputProps={{
                max: 99, // Maximum value
                min: 0,  // Minimum value
              }}
            />
          </div>

          <button
            className="bg-blue-900 text-white w-16 rounded-lg h-8"
            onClick={handleAddOrSave}
            // disabled={isDuplicateEntry}
          >
            {editingIndex !== null ? "Update" : "ADD"}
          </button>
        </div>
      </div>

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {!loading && (
        <>
      <div className="overflow-x-auto ml-5">
        <table className="w-full text-left table-auto border-collapse hidden md:table">
          <thead className="bg-gray-200">
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 text-base font-bold">S.NO</th>
              <th className="px-6 py-3 text-base font-bold">State</th>
              <th className="px-6 py-3 text-base font-bold">Category Name</th>
              <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
              <th className="px-6 py-3 text-base font-bold">Created Date</th>
              <th className="px-6 py-3 text-base font-bold">Modify Date</th>
              <th className="px-6 py-3 text-base font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
                {currentItems?.length > 0 ? (
                  currentItems.map((entry, index) => {
                const matchedCategory = getproductSpecialOffer.find(
                  (item) => item.categorySpecificationId === entry.categorySpecificationID
                );
                return (
                  <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
                    <td className="px-6 border-b border-gray-200 text-sm">{indexOfFirstItem + index + 1}</td>
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
                        onClick={() => handleEditClick(index, entry?.taxInformationID, entry?.categorySpecificationID, entry?.taxPercentage, entry?.stateName, entry?.createdDate, entry?.modifiedDate)}
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
                currentItems.map((entry, index) => {
              const matchedCategory = getproductSpecialOffer.find(
                (item) => item.categorySpecificationId === entry.categorySpecificationID
              );
              return (
                <div key={index} className="bg-white shadow rounded-lg p-4 border">
                    <div className="flex gap-2">
                    <span className="font-semibold text-sm">S.No:</span>
                    <span>{indexOfFirstItem + index + 1}</span>
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
        </>
      )}
      <Pagination
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        productList={stateNameData}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
