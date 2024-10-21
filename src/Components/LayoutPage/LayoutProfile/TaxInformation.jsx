
// import React, { useState } from 'react';
// import { TextField } from '@mui/material';
// import edit from '../../../assets/Edit.png';

// const TaxInformation = () => {
//   // State to manage selected category, tax percentage, and added entries
//   const [category, setCategory] = useState('');
//   const [taxPercentage, setTaxPercentage] = useState('');
//   const [addedEntries, setAddedEntries] = useState([]);
//   const [isEditable, setIsEditable] = useState(false); // Controls edit mode
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controls success message visibility

//   // Handle adding the entry
//   const handleAdd = () => {
//     if (category && taxPercentage) {
//       setAddedEntries([...addedEntries, { category, taxPercentage }]);
//       setCategory(''); // Reset after adding
//       setTaxPercentage(''); // Reset after adding
//     }
//   };

//   // Handle edit icon click
//   const handleEditClick = () => {
//     setIsEditable(true); // Enable editing
//     setShowSuccessMessage(false); // Hide success message
//   };

//   // Handle save after editing
//   const handleSave = () => {
//     setIsEditable(false); // Disable editing
//     setShowSuccessMessage(true); // Show success message
//   };



//   return (
//     <div className='w-[90%]'>
//     <div className='bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6'>
//       <div className='flex justify-between'>
//         <h1 className='text-blue-900 text-xl font-semibold p-1 rounded-md'>Tax Information</h1>
//         <img src={edit} className='w-6 h-6 cursor-pointer' onClick={handleEditClick} alt="edit" />
//       </div>

//       <div className='flex justify-around my-4'>
//         <div>
//           <select
//             className='border rounded-md h-11'
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             disabled={!isEditable} // Disable when not editable
//           >
//             <option value=''>Select a category</option>
//             <option>Prescription Drug</option>
//             <option>OTC Product</option>
//             <option>General Merchandise</option>
//           </select>
//         </div>

//         <div>
//           <TextField
//             type='phonenumber'
//             label='Tax percentage'
//             size='small'
//             value={taxPercentage}
//             onChange={(e) => setTaxPercentage(e.target.value)}
//             disabled={!isEditable} // Disable when not editable
//           />
//         </div>

//         <button
//           className='bg-blue-900 text-white w-16 rounded-lg h-8'
//           onClick={handleAdd}
//           disabled={!isEditable} // Disable when not editable
//         >
//           ADD
//         </button>
//       </div>


//     </div>


//     <div className="overflow-x-auto ml-5">


// <table className="min-w-full text-left table-auto border-collapse">
//   <thead className="bg-gray-200">
//     <tr className="bg-blue-900 text-white">

//     <th className="px-6 py-3 text-base font-bold ">State </th>

//       <th className="px-6 py-3 text-base font-bold ">Category Name</th>
//       <th className="px-6 py-3 text-base font-bold "> Tax Percentage</th>
//       <th className="px-6 py-3 text-base font-bold ">Created Date</th>
//       <th className="px-6 py-3 text-base font-bold ">Modify Date</th>

//       <th className="px-6 py-3 text-base font-bold ">Action</th>
//     </tr>
//   </thead>
//   <tbody>

//      {addedEntries.map((entry, index) => (

//               <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
//               <td className="px-6  border-b border-gray-200 text-sm">{entry.stateName}</td>
//               <td className="px-6  border-b border-gray-200 text-sm">{entry.categorySpecificationID}</td>

//               <td className="px-6  border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
//               <td className="px-6  border-b border-gray-200 text-sm">{entry.createdDate}</td>
//               <td className="px-6  border-b border-gray-200 text-sm">{entry.modifiedDate}</td>


//               <td className="px-6  border-b border-gray-200 text-sm">
//                 <button className="px-4 py-2 text-white">
//                   <img src={edit} alt="Edit" className="w-6 h-6" />
//                 </button>
//               </td>
//             </tr>
//             ))}
//   </tbody>
// </table>

// </div>


//     </div>
//   );
// };

// export default TaxInformation;



import React, { useState } from 'react';
import { TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';

const TaxInformation = () => {
  const [category, setCategory] = useState('');
  const [taxPercentage, setTaxPercentage] = useState('');
  const [addedEntries, setAddedEntries] = useState([]);
  const [isEditable, setIsEditable] = useState(false); // Controls edit mode
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controls success message visibility
  const [editingIndex, setEditingIndex] = useState(null); // Track which entry is being edited

  // Handle adding the entry or saving the edited entry
  const handleAddOrSave = () => {
    if (category && taxPercentage) {
      if (editingIndex !== null) {
        // Update the existing entry
        const updatedEntries = [...addedEntries];
        updatedEntries[editingIndex] = { ...updatedEntries[editingIndex], category, taxPercentage };
        setAddedEntries(updatedEntries);
        setEditingIndex(null); // Reset the editing index
      } else {
        // Add a new entry
        setAddedEntries([...addedEntries, { category, taxPercentage }]);
      }

      setCategory(''); // Reset after adding or editing
      setTaxPercentage(''); // Reset after adding or editing
      setIsEditable(false); // Disable edit mode
      setShowSuccessMessage(true); // Show success message
    }
  };

  // Handle edit icon click
  const handleEditClick = (index) => {
    const entryToEdit = addedEntries[index];
    setCategory(entryToEdit.category);
    setTaxPercentage(entryToEdit.taxPercentage);
    setEditingIndex(index); // Set the index of the entry being edited
    setIsEditable(true); // Enable edit mode
    setShowSuccessMessage(false); // Hide success message
  };

  return (
    <div className="w-[90%]">
      {showSuccessMessage && <p className=" mt-4 flex justify-end  text-green-600 font-semibold text-xl">Entry saved successfully!</p>}

      <div className="bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6">
        <div className="flex justify-between">
          <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">Tax Information</h1>
          <img src={edit} className="w-6 h-6 cursor-pointer" onClick={() => setIsEditable(true)} alt="edit" />
        </div>

        <div className="flex justify-around my-4">
          <div>
            <select
              className="border rounded-md h-11"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={!isEditable} // Disable when not editable
            >
              <option value="">Select a category</option>
              <option>Prescription Drug</option>
              <option>OTC Product</option>
              <option>General Merchandise</option>
            </select>
          </div>

          <div>
            <TextField
              type="text"
              label="Tax percentage"
              size="small"
              value={taxPercentage}
              onChange={(e) => setTaxPercentage(e.target.value)}
              disabled={!isEditable} // Disable when not editable
            />
          </div>

          <button
            className="bg-blue-900 text-white w-16 rounded-lg h-8"
            onClick={handleAddOrSave}
            disabled={!isEditable} // Disable when not editable
          >
            {editingIndex !== null ? 'Save' : 'ADD'}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto ml-5">
        <table className="min-w-full text-left table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 text-base font-bold">S NO. </th>

              <th className="px-6 py-3 text-base font-bold">State </th>

              <th className="px-6 py-3 text-base font-bold">Category Name</th>
              <th className="px-6 py-3 text-base font-bold">Tax Percentage</th>
              <th className="px-6 py-3 text-base font-bold">Created Date </th>
              <th className="px-6 py-3 text-base font-bold">Modify Date</th>


              <th className="px-6 py-3 text-base font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {addedEntries.map((entry, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
                <td className="px-6 border-b border-gray-200 text-sm">{ }</td>

                <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>

                <td className="px-6 border-b border-gray-200 text-sm">{entry.category}</td>
                <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
                <td className="px-6 border-b border-gray-200 text-sm">{entry.createdDate}</td>
                <td className="px-6 border-b border-gray-200 text-sm">{entry.modifiedDate}</td>


                <td className="px-6 border-b border-gray-200 text-sm">
                  <button className="px-4 py-2 text-white" onClick={() => handleEditClick(index)}>
                    <img src={edit} alt="Edit" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TaxInformation;
