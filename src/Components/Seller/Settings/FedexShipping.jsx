

import React, { useState } from 'react';

function  FedexShipping() {
  const [formData, setFormData] = useState({
    accountid: '',
    meterNumber: '',
    key: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { accountid, meterNumber, key, password } = formData;

    if (!accountid || !meterNumber || !key || !password) {
      setMessage('All fields are must be required.');
      setIsError(true);
    } else {
      setMessage('Fedex Shipping details saved successfully.');
      setIsError(false);
    }
  };

  return (
    <div className=' w-full px-4'>
      {message && (
        <div className={`my-4 p-1 text-lg ${isError ? 'text-red-800 bg-red-200' : 'text-green-800 bg-green-200'} `}>
          {message}
        </div>
      )}
      <div className='flex justify-between border-b border-black my-5 p-4'>
        <h1 className='text-xl text-blue-900 font-semibold'>Manage Fedex Configuration</h1>
        <button 
          className='border font-bold text-[15px] rounded-lg p-2 px-4 h-8 flex justify-center items-center bg-blue text-white hover:bg-green2'
          onClick={handleSubmit}
        >
          SAVE
        </button>
      </div>

      <div className='w-full flex flex-col justify-center'>

      <div className="w-[80%] flex justify-between text-gray-600 my-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold">
            Account ID:<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="accountid"
            className='border rounded-md h-8 w-80 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.accountid}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">
            Meter Number<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="meterNumber"
            className='border rounded-md h-8 w-80 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.meterNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-[80%] flex justify-between text-gray-600 my-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold">
            Key<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="key"
            className='border rounded-md h-8 w-80 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.key}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">
            Password:<span className="text-red-600 text-xl">*</span>
          </label>
          <input
            type="text"
            name="password"
            className='border rounded-md h-8 w-80 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default  FedexShipping;

