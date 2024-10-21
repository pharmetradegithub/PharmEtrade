
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import edit from '../../../assets/Edit.png';

const TaxInformation = () => {
  // State to manage selected category, tax percentage, and added entries
  const [category, setCategory] = useState('');
  const [taxPercentage, setTaxPercentage] = useState('');
  const [addedEntries, setAddedEntries] = useState([]);
  const [isEditable, setIsEditable] = useState(false); // Controls edit mode
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controls success message visibility

  // Handle adding the entry
  const handleAdd = () => {
    if (category && taxPercentage) {
      setAddedEntries([...addedEntries, { category, taxPercentage }]);
      setCategory(''); // Reset after adding
      setTaxPercentage(''); // Reset after adding
    }
  };

  // Handle edit icon click
  const handleEditClick = () => {
    setIsEditable(true); // Enable editing
    setShowSuccessMessage(false); // Hide success message
  };

  // Handle save after editing
  const handleSave = () => {
    setIsEditable(false); // Disable editing
    setShowSuccessMessage(true); // Show success message
  };

  const tabledetails =[
    {
      category:"OTC",
      percentage:"40%"
      
    },
    {
      category:"Prescription",
      percentage:"90%"
    },
    {
      category:"General Merchandise",
      percentage:"40%"
    },
  ]

  return (
    <div className='w-[90%]'>
    <div className='bg-white w-[90%] border border-black rounded-lg px-8 mx-6 py-5 mt-8 relative my-6'>
      <div className='flex justify-between'>
        <h1 className='text-blue-900 text-xl font-semibold p-1 rounded-md'>Tax Information</h1>
        <img src={edit} className='w-6 h-6 cursor-pointer' onClick={handleEditClick} alt="edit" />
      </div>

      <div className='flex justify-around my-4'>
        <div>
          <select
            className='border rounded-md h-11'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={!isEditable} // Disable when not editable
          >
            <option value=''>Select a category</option>
            <option>Prescription Drug</option>
            <option>OTC Product</option>
            <option>General Merchandise</option>
          </select>
        </div>

        <div>
          <TextField
            type='phonenumber'
            label='Tax percentage'
            size='small'
            value={taxPercentage}
            onChange={(e) => setTaxPercentage(e.target.value)}
            disabled={!isEditable} // Disable when not editable
          />
        </div>

        <button
          className='bg-blue-900 text-white w-16 rounded-lg h-8'
          onClick={handleAdd}
          disabled={!isEditable} // Disable when not editable
        >
          ADD
        </button>
      </div>

      {/* <h2 className='text-lg font-semibold mb-4 mt-7'>Added Tax Information:</h2>

      <div className='flex gap-5 my-3'>
      <div className='flex'>
        <p className='font-semibold  mr-2'>Category: </p>
        <p> Prescription Drug</p>

      </div>
      <div className='flex'>
      <p className='font-semibold  mr-2'>Percentage: </p>
      <p>87</p>
      </div>
      </div>

      <div className='flex gap-5 my-3'>
      <div className='flex'>
        <p className='font-semibold mr-2'>Category: </p>
        <p> OTC Product</p>

      </div>
      <div className='flex '>
      <p className='font-semibold mr-2'>Percentage: </p>
      <p>67</p>
      </div>
      </div>

      <div className='flex gap-5'>
      <div className='flex'>
        <p className='font-semibold  mr-2'>Category: </p>
        <p> General Merchandise</p>

      </div>
      <div className='flex'>
      <p className='font-semibold  mr-2'>Percentage: </p>
      <p>97</p>
      </div>
      </div> */}

      {addedEntries.length > 0 && (
        <div className='mt-6'>
          <h2 className='text-lg font-semibold mb-4'>Added Tax Information:</h2>
          <ul className='list-disc list-inside'>
            {addedEntries.map((entry, index) => (
              <li key={index} className='my-2'>
                <strong>Category:</strong> {entry.category}, <strong>Tax Percentage:</strong> {entry.taxPercentage}%
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='flex justify-end mt-4'>
        <button
          className={`bg-blue-900 text-white p-1 rounded-md w-16 ${!isEditable ? 'cursor-not-allowed' : ''}`}
          onClick={handleSave}
          disabled={!isEditable} // Disable when not editable
        >
          Save
        </button>
      </div>

      {/* Success message */}
      {showSuccessMessage && (
        <div className='mt-4 text-green-600 font-semibold'>
          Tax Information saved successfully!
        </div>
      )}

      {/* Display added entries below */}
     
    </div>
   

    <div className="overflow-x-auto ml-5">
  {/* <table className="min-w-full text-left table-auto border-collapse">
    <thead className="bg-gray-200">
      <tr className='bg-blue-900 text-white'>
        <th className="px-6 py-3 text-sm font-bold uppercase ">Category</th>
        <th className="px-6 py-3 text-sm font-bold uppercase ">Percentage</th>
        <th className="px-6 py-3 text-sm font-bold uppercase ">Action</th>
      </tr>
    </thead>
    <tbody>
      {tabledetails.map((tabledetail)=>(
        <div>
           <tr className="bg-white hover:bg-gray-100 transition-colors">
        <td className="px-6 py-4 border-b border-gray-200 text-sm">{tabledetail.category}</td>
        <td className="px-6 py-4 border-b border-gray-200 text-sm">{tabledetail.percentage}</td>
        <td className="px-6 py-4 border-b border-gray-200 text-sm">
          <button className="px-4 py-2 text-white ">
            <img src={edit} className='w-6 h-6'/>
          </button>
        </td>
      </tr>
        </div>
      ))}
     
      
    </tbody>
  </table> */}

<table className="min-w-full text-left table-auto border-collapse">
  <thead className="bg-gray-200">
    <tr className="bg-blue-900 text-white">
      <th className="px-6 py-3 text-base font-bold ">Category</th>
      <th className="px-6 py-3 text-base font-bold ">Percentage</th>
      <th className="px-6 py-3 text-base font-bold ">Action</th>
    </tr>
  </thead>
  <tbody>
    {tabledetails.map((tabledetail, index) => (
      <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
        <td className="px-6  border-b border-gray-200 text-sm">{tabledetail.category}</td>
        <td className="px-6  border-b border-gray-200 text-sm">{tabledetail.percentage}</td>
        <td className="px-6  border-b border-gray-200 text-sm">
          <button className="px-4 py-2 text-white">
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
