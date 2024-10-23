
import React from 'react';
import { FaCheck, FaShippingFast, FaTruck, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrackingOrder = () => {
    const orderStatus = [
      { label: 'Order Proceeded', icon: FaCheck }, 
      { label: 'Order Shipped', icon: FaShippingFast }, 
      { label: 'Out For Delivery', icon: FaTruck }, 
      { label: 'Order Arrived', icon: FaBox }
    ];
  const currentStatus = 1; 

  return (
    <div className="flex flex-col w-full  py-8">
        <div className='w-[85%]'>
        <div className='flex flex-col items-center'>
      <h1 className="text-2xl text-blue-900 font-semibold mb-6">Order Delivery Tracking</h1>
      <div className="w-full my-4 max-w-3xl flex items-center justify-between relative">
        {orderStatus.map((status, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Progress Circle */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center 
              ${index <= currentStatus ? 'bg-green-500 z-20 text-white' : 'bg-gray-300 z-20 text-gray-600'}`}>
            <status.icon />
            </div>
            {/* Status Text */}
            <p className={`mt-2 text-center text-sm 
              ${index <= currentStatus ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
              {status.label}
            </p>
          </div>
        ))}

        <div className="absolute top-5 left-0 w-full h-1 flex items-center justify-between">
          {orderStatus.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-full ${index < currentStatus ? 'bg-green-500' : 'bg-gray-300'} ${index === orderStatus.length - 1 ? 'hidden' : ''}`}
            ></div>
          ))}
        </div>
      </div>
      </div>

      <div className='my-2 flex flex-col ml-20'>
        <h1 className='text-xl font-semibold'>Delivery by PharmEtrade</h1>
        <div className='flex'>

        <p>Tracking ID :</p>
        <p>346788678901</p>
        </div>
      </div>
      <div className='flex justify-around gap-4'>

<div className='border rounded-md p-4 w-80 ml-2 shadow-md mt-4 h-auto'>
    <h1 className='font-semibold text-xl'> Shipping Address</h1>
    <div>
                       
                          <div className="mt-4">
                            <p>Umesh Kumar</p>
                            <p>Plot No 25,</p>
                            <p>Colony road no 4,</p>
                            <div className="flex">
                              <p>Hyderabad,</p>
                              <p className="ml-2">500081.</p>
                            </div>
                          </div>
                       
                      </div>
</div>
<div className='border rounded-md h-auto p-4 shadow-md gap-5 mt-4 w-80 items-center flex flex-col'>
    <h1 className='font-semibold text-xl'>Order Info</h1>
    <h1 className='text-blue-700 text-xl hover:underline '>
        <Link to="/layout/layoutorderlist ">View Order Details
        </Link></h1>
</div>
</div>
</div>
    </div>
  );
};

export default TrackingOrder;
