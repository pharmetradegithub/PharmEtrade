import React, { useState } from 'react';

function UpsShipping() {
  const [formData, setFormData] = useState({
    accessLicenseNumber: '',
    userId: '',
    password: '',
    shipperNumber: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { accessLicenseNumber, userId, password, shipperNumber } = formData;

    if (!accessLicenseNumber || !userId || !password || !shipperNumber) {
      setMessage('All fields are must be required.');
      setIsError(true);
    } else {
      setMessage('UPS Shipping details saved successfully.');
      setIsError(false);
    }
  };

  return (

    
    <div className=' w-full  px-4 '>
      {message && (
        <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'} `}>
          {message}
        </div>
      )}
      <div className='flex justify-between  border-b border-black my-5 p-4'>
        <h1 className='text-xl text-blue-900 font-semibold'>MARKETPLACE UPS CONFIGURATION</h1>
        <button 
          className='border rounded-lg px-4 text-[15px] bg-blue-900 text-white '
          onClick={handleSubmit}
        >
          SAVE
        </button>
      </div>

      <div className='w-full flex flex-col justify-center'>

      <div className="w-[80%] flex justify-between text-gray-600 my-4">
        <div className="flex flex-col">
          <label className="text-lg">
            Access License Number:<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="accessLicenseNumber"
            className='border rounded-md h-8 w-80'
            value={formData.accessLicenseNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">
            User Id:<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            name="userId"
            className='border rounded-md h-8 w-80'
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-[80%] flex justify-between text-gray-600 my-4">
        <div className="flex flex-col">
          <label className="text-lg">
            Password:<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="password"
            className='border rounded-md h-8 w-80'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">
            Shipper Number:<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="shipperNumber"
            className='border rounded-md h-8 w-80'
            value={formData.shipperNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default UpsShipping;
