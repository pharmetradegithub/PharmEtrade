// import React, { useState } from 'react';
// import { TextField } from '@mui/material';
// import edit from '../../../assets/Edit.png';

// const TaxInformation = () => {
//   const [category, setCategory] = useState('');
//   const [taxPercentage, setTaxPercentage] = useState('');
//   const [addedEntries, setAddedEntries] = useState([]);
//   const [isEditable, setIsEditable] = useState(false); // Controls edit mode
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controls success message visibility
//   const [editingIndex, setEditingIndex] = useState(null); // Track which entry is being edited

//   // Handle adding the entry or saving the edited entry
//   const handleAddOrSave = () => {
//     if (category && taxPercentage) {
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

//   return (
//     <div className="w-[90%]">
//       {showSuccessMessage && <p className=" mt-4 flex justify-end  text-green-600 font-semibold text-xl">Entry saved successfully!</p>}

//       <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
//         <div className="flex justify-between">
//           <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1>
//           <img src={edit} className="w-6 h-6 cursor-pointer" onClick={() => setIsEditable(true)} alt="edit" />
//         </div>

//         <div className="flex justify-around my-4">
//           <div>
//             <select
//               className="border rounded-md h-11"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               disabled={!isEditable} // Disable when not editable
//             >
//               <option value="">Select a category</option>
//               <option>Prescription Drug</option>
//               <option>OTC Product</option>
//               <option>General Merchandise</option>
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
//             {addedEntries.map((entry, index) => (
//               <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
//                 <td className="px-6 border-b border-gray-200 text-sm">{ }</td>

//                 <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>

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

// export default TaxInformation;

import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import edit from "../../../assets/Edit.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductOffer } from "../../../Api/ProductApi";
import {
  taxAddInformationApi,
  TaxGetByStateNameApi,
  TaxInfoEdit,
} from "../../../Api/TaxInfoApi";
import Notification from "../../Notification";
import { AdminChargesGetApi, AdminChargesInformationAdd } from "../../../Api/AdminApi";

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
const ChargesInformations = () => {
  const searchParams = new URLSearchParams(location.search);
  const CustomerId = searchParams.get("CustomerId");
  console.log("customerId--->", CustomerId)
  const getproductSpecialOffer = useSelector(
    (state) => state.product.productSpecialOffer
  );
  const [category, setCategory] = useState(null); // Initialize as an empty string for selected category
  const [taxPercentage, setTaxPercentage] = useState("");
  const[transactionfee, setTransactionfee] = useState("")
  const [addedEntries, setAddedEntries] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const businessInfo = useSelector((state) => state.user.businessInfo);
  const dispatch = useDispatch();
//   const stateNameData = useSelector((state) => state.tax.stateName);

  const [editingEntry, setEditingEntry] = useState({}); // Store current entry being edited

  console.log("edittttt", editingEntry);

  let selectedCategory;

//   const handleAddOrSave = async () => {
//     selectedCategory = getproductSpecialOffer.find(
//       (item) => item.categorySpecificationId === category
//     );

//     if (editingIndex !== null) {
//       // Update the existing entry in stateNameData (editing case)
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
//       setAddedEntries([
//         ...addedEntries,
//         { category: selectedCategory, taxPercentage },
//       ]);
//     }

//     // Determine whether to call add or edit API based on filled fields
//     if (
//       !editingEntry.taxInformationId ||
//       !editingEntry.categorySpecificationId
//     ) {
//       // If the fields are empty, call add API
//       const payloadAdd = {
//         taxInformationID: "",
//         stateName: businessInfo?.state,
//         categorySpecificationID: selectedCategory?.categorySpecificationId,
//         taxPercentage: taxPercentage,
//         createdDate: new Date().toISOString(),
//         modifiedDate: new Date().toISOString(),
//         isActive: 1,
//       };
//       await dispatch(taxAddInformationApi(payloadAdd));
//       setNotification({
//         show: true,
//         message: "Added Item Successfully!",
//       });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     } else {
//       // If the fields are filled, call edit API
//       const payloadEdit = {
//         taxInformationID: editingEntry.taxInformationId,
//         stateName: editingEntry.stateName,
//         // categorySpecificationID: category, // Use updated category
//         categorySpecificationID: category, // Use updated category
//         taxPercentage: taxPercentage,
//         createdDate: editingEntry.createdDate,
//         modifiedDate: new Date().toISOString(), // Update modified date
//         isActive: 1,
//       };
//       await dispatch(TaxInfoEdit(payloadEdit));
//       setNotification({
//         show: true,
//         message: "Edit Item Successfully!",
//       });
//       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
//     }

//     // Fetch updated tax data
//     await dispatch(TaxGetByStateNameApi(businessInfo?.state));

//     // Reset form fields after adding or editing
//     setCategory("");
//     setTaxPercentage("");
//     setIsEditable(false);
//     setShowSuccessMessage(true);
//   };

  // Handle edit icon click: populate the form with the selected row data
//   const handleEditClick = (
//     index,
//     taxInformationId,
//     categorySpecificationId,
//     taxPercentage,
//     stateName,
//     createdDate,
//     modifiedDate
//   ) => {
//     const entryToEdit = stateNameData[index]; // Get the selected entry

//     if (entryToEdit && entryToEdit.categorySpecificationID) {
//       setCategory(entryToEdit.categorySpecificationID); // Set the category in the form
//       setTaxPercentage(entryToEdit.taxPercentage); // Set the tax percentage in the form
//       setEditingIndex(index); // Set the index of the row being edited
//       setIsEditable(true); // Make form editable
//       setShowSuccessMessage(false); // Hide success message while editing
//       setEditingEntry({
//         taxInformationId,
//         categorySpecificationId,
//         taxPercentage,
//         stateName,
//         createdDate,
//         modifiedDate,
//       }); // Store the editing entry data
//     } else {
//       console.error("Category is undefined for the selected entry.");
//     }
//   };
//   useEffect(() => {
//     dispatch(TaxGetByStateNameApi(businessInfo?.state));
//   }, [dispatch, businessInfo?.state]);

//   useEffect(() => {
//     dispatch(fetchProductOffer());
//   }, [dispatch]);

  console.log("cccc-->", category)
  console.log("taxxxxx", taxPercentage)
  const handleAddOrSave = async () => {
    const payload = {
      sellerId: CustomerId,
      chargeTypeId: category,
      chargePercentage: taxPercentage
    }
    await AdminChargesInformationAdd(payload)
  }
  useEffect(() => {
    const data = async () => {
      await AdminChargesGetApi(CustomerId)
    }
    data()
  }, [])
  return (
    <div className="w-[90%]">
      {/* {showSuccessMessage && (
        <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">
          Entry saved successfully!
        </p>
      )} */}
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
        <div className="flex justify-between">
          {/* <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">
            Charges Information
          </h1> */}
           {isEditable && (
                <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
                  Charges Information
                </h1>
              )}
              <h1
                className={`text-xl font-semibold my-2 ${
                  isEditable ? "invisible" : "text-blue-900"
                }`}
              >
                Charges Information
              </h1>
          <img
            src={edit}
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsEditable(true)}
          />
        </div>

        <div className="flex justify-around my-4">
          <div>
            <select
              className="border rounded-md h-11"
              value={category} // The numeric ID is stored here
              onChange={(e) => {
                console.log("Selected value:", e.target.value); // Debug selected value
                const value = e.target.value;
                setCategory(value ? Number(value) : ""); // Avoid NaN
              }}// Update category when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            >
              <option value="">Select a category</option>
              <option value={1}>Credit card charges</option>
              <option value={2}>PharmEtrade charges</option>
              {/* <option value="credit card charges">Credit card charges</option>
              <option value="pharmetrade charges">PharmEtrade charges</option> */}

              {/* {getproductSpecialOffer.map((item) => (
                <option
                  key={item.categorySpecificationId}
                  value={item.categorySpecificationId}
                >
                  {item.specificationName}
                </option>
              ))} */}
            </select>
          </div>

          <div>
            <TextField
              type="text"
              label="Charge percentage"
              size="small"
              value={taxPercentage} // Set the tax percentage in the input
              onChange={(e) => setTaxPercentage(e.target.value)} // Update when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            />
          </div>
          <div>
            <TextField
              type="text"
              label="Transaction fee"
              size="small"
              value={transactionfee} // Set the tax percentage in the input
              onChange={(e) => setTransactionfee(e.target.value)} // Update when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            />
          </div>

          <button
            className="bg-blue-900 text-white w-16 rounded-lg h-8"
            onClick={handleAddOrSave}
            disabled={!isEditable} // Disable if not in edit mode
          >
            {editingIndex !== null ? "Save" : "ADD"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto ml-5">
        <table className="min-w-full text-left table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 text-base font-bold">S NO.</th>
              <th className="px-6 py-3 text-base font-bold">State</th>
              <th className="px-6 py-3 text-base font-bold">Category Name</th>
              <th className="px-6 py-3 text-base font-bold">
                Charge Percentage
              </th>
              <th className="px-6 py-3 text-base font-bold">Created Date</th>
              <th className="px-6 py-3 text-base font-bold">Modify Date</th>
              <th className="px-6 py-3 text-base font-bold">Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {stateNameData.map((entry, index) => {
              const matchedCategory = getproductSpecialOffer.find(
                (item) =>
                  item.categorySpecificationId === entry.categorySpecificationID
              );
              return (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {index + 1}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {entry.stateName}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {matchedCategory
                      ? matchedCategory.specificationName
                      : "Unknown Category"}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {entry.taxPercentage}%
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {new Date(entry.createdDate)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {new Date(entry.modifiedDate)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}{" "}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <button
                      className="px-4 py-2 text-white"
                      onClick={() =>
                        handleEditClick(
                          index,
                          entry?.taxInformationID,
                          entry.categorySpecificationID,
                          entry.taxPercentage,
                          entry.stateName,
                          entry.createdDate,
                          entry.modifiedDate
                        )
                      }
                    >
                      <img src={edit} alt="Edit" className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
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

export default ChargesInformations;
