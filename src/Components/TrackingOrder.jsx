// import React from 'react';
// import { FaCheck, FaShippingFast, FaTruck, FaBox } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const TrackingOrder = () => {
//     // Define the order status with labels and corresponding icons
//     const orderStatus = [
//         { label: 'Order Proceeded', icon: FaCheck },
//         { label: 'Order Shipped', icon: FaShippingFast },
//         { label: 'Out For Delivery', icon: FaTruck },
//         { label: 'Order Arrived', icon: FaBox }
//     ];

//     // Set the currentStatus to represent where the order is in the process
//     const currentStatus = 1.2; // Example status for demonstration

//     // Function to determine the current stage of the order
//     const getCurrentStage = () => {
//         if (currentStatus < 1) {
//             return "Order Proceeded";
//         } else if (currentStatus >= 1 && currentStatus < 2) {
//             return "Order Shipped";
//         } else if (currentStatus >= 2 && currentStatus < 3) {
//             return "Out For Delivery";
//         } else if (currentStatus >= 3) {
//             return "Order Arrived";
//         }
//     };

//     return (
//         <div className="flex flex-col w-full py-8">
//             <div className='w-[85%]'>
//                 <div className='flex flex-col items-center'>
//                     <h1 className="text-2xl text-blue-900 font-semibold mb-6">Order Delivery Tracking</h1>
//                     <div className="w-full my-4 max-w-3xl flex items-center justify-between relative">
//                         {orderStatus.map((status, index) => (
//                             <div key={index} className="flex flex-col items-center">
//                                 {/* Progress Circle */}
//                                 <div className={`w-10 h-10 rounded-full flex items-center justify-center 
//                                     ${index <= currentStatus ? 'bg-green-500 z-20 text-white' : 'bg-gray-300 z-20 text-gray-600'}`}>
//                                     <status.icon />
//                                 </div>
//                                 {/* Status Text */}
//                                 <p className={`mt-2 text-center text-sm 
//                                     ${index <= currentStatus ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
//                                     {status.label}
//                                 </p>
//                             </div>
//                         ))}

//                         {/* Progress Line */}
//                         <div className="absolute top-5 left-0 w-full h-1 flex items-center justify-between">
//                             {orderStatus.map((_, index) => (
//                                 <div
//                                     key={index}
//                                     className={`h-1 w-full ${index < currentStatus ? 'bg-green-500' : 'bg-gray-300'} ${index === orderStatus.length - 1 ? 'hidden' : ''}`}
//                                 ></div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Delivery Info Section */}
//                 <div className='my-2 flex flex-col ml-20'>
//                     <h1 className='text-xl font-semibold'>Delivery by PharmEtrade</h1>
//                     <div className='flex'>
//                         <p>Tracking ID :</p>
//                         <p>346788678901</p>
//                     </div>
//                 </div>

//                 {/* Shipping Address and Order Info */}
//                 <div className='flex justify-around gap-4'>
//                     <div className='border rounded-md p-4 w-80 ml-2 shadow-md mt-4 h-auto'>
//                         <h1 className='font-semibold text-xl'>Shipping Address</h1>
//                         <div className="mt-4">
//                             <p>Umesh Kumar</p>
//                             <p>Plot No 25,</p>
//                             <p>Colony road no 4,</p>
//                             <div className="flex">
//                                 <p>Hyderabad,</p>
//                                 <p className="ml-2">500081.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='border rounded-md h-auto p-4 shadow-md gap-5 mt-4 w-80 items-center flex flex-col'>
//                         <h1 className='font-semibold text-xl'>Order Info</h1>
//                         <h1 className='text-blue-700 text-xl hover:underline'>
//                             <Link to="/layout/layoutorderlist">View Order Details</Link>
//                         </h1>
//                     </div>
//                 </div>

//                 {/* Current Stage Information */}
//                 <div className='mt-6'>
//                     <h2 className="text-lg font-semibold text-blue-700">
//                         Current Stage: {getCurrentStage()}
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrackingOrder;



import React, { useEffect, useState } from 'react';
import { FaCheck, FaShippingFast, FaTruck, FaBox } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrackNumberApi } from '../Api/TrackApi';

// const TrackingOrder = () => {
//   const [orderProceed, setOrderProceed] = useState([])
//   const trackdata = useSelector((state) => state.trackNumber.trackNumber)
//   console.log("dataTrackkkk", trackdata)
//   const dispatch = useDispatch()
//     const orderStatus = [
//       { label: 'Order Proceeded', icon: FaCheck },
//       { label: 'Order Shipped', icon: FaShippingFast },
//       { label: 'Out For Delivery', icon: FaTruck },
//       { label: 'Order Arrived', icon: FaBox }
//     ];
//   // const currentStatus = 1;
//   // const trackDetails =
//   //   if (trackdata?.trackResults[0].eventType === "OC") {
//   //     // orderStatus.find((status) => status.label === trackdata?.trackResults[0].eventType
//   //     //   }

//   // }
//   const eventTypeMap = {
//     'OC': 0.5, // Order Proceeded
//     'PU': 1, // Order Shipped
//     "AR": 1.1,
//     "AO": 1.2,
//     "DP": 1.3,
//     "IT": 1.4,
//     "RR": 1.5,
//     "AR": 1.6,
//     'OD': 2, // Out for Delivery
//     "HP": 1.5,
//     'OA': 3  // Order Arrived
//   };

//   // const currentStatus = trackdata?.status === "Shipped" ? 1 : 0;
//   const currentStatus = trackdata?.trackResults?.[0]?.eventType
//     ? eventTypeMap[trackdata.trackResults[0].eventType]
//     : 0; // Default to 'Order Proceeded'

//   useEffect(() => {
//     dispatch(TrackNumberApi(794843185271))
//   }, [])
//   return (
//     <div className="flex flex-col w-full  py-8">
//         <div className='w-[85%]'>
//         <div className='flex flex-col items-center'>
//       <h1 className="text-2xl text-blue-900 font-semibold mb-6">Order Delivery Tracking</h1>
//       <div className="w-full my-4 max-w-3xl flex items-center justify-between relative">
//         {orderStatus.map((status, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* Progress Circle */}
//             <div className={`w-10 h-10 rounded-full flex items-center justify-center
//               ${index <= currentStatus ? 'bg-green-500 z-20 text-white' : 'bg-gray-300 z-20 text-gray-600'}`}>
//             <status.icon />
//             </div>
//             {/* Status Text */}
//             <p className={`mt-2 text-center text-sm
//               ${index <= currentStatus ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
//               {status.label}
//             </p>
//           </div>
//         ))}

//         <div className="absolute top-5 left-0 w-full h-1 flex items-center justify-between">
//           {orderStatus.map((_, index) => (
//             <div
//               key={index}
//               className={`h-1 w-full ${index < currentStatus ? 'bg-green-500' : 'bg-gray-300'} ${index === orderStatus.length - 1 ? 'hidden' : ''}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//       </div>

//       <div className='my-2 flex flex-col ml-20'>
//         <h1 className='text-xl font-semibold'>Delivery by PharmEtrade</h1>
//         <div className='flex'>

//         <p>Tracking ID :</p>
//             <p>{trackdata.trackingNumber}</p>
//         </div>
//       </div>
//       <div className='flex justify-around gap-4'>

// <div className='border rounded-md p-4 w-80 ml-2 shadow-md mt-4 h-auto'>
//     <h1 className='font-semibold text-xl'> Shipping Address</h1>
//     <div>

//                           <div className="mt-4">
//                             <p>Umesh Kumar</p>
//                             <p>Plot No 25,</p>
//                             <p>Colony road no 4,</p>
//                             <div className="flex">
//                               <p>Hyderabad,</p>
//                               <p className="ml-2">500081.</p>
//                             </div>
//                           </div>

//                       </div>
// </div>
// <div className='border rounded-md h-auto p-4 shadow-md gap-5 mt-4 w-80 items-center flex flex-col'>
//     <h1 className='font-semibold text-xl'>Order Info</h1>
//     <h1 className='text-blue-700 text-xl hover:underline '>
//         <Link to="/layout/layoutorderlist ">View Order Details
//         </Link></h1>
// </div>
// </div>
// </div>
//     </div>
//   );
// };
const TrackingOrder = () => {
  const [orderProceed, setOrderProceed] = useState([]);
  const trackdata = useSelector((state) => state.trackNumber.trackNumber);
  console.log("Track Data", trackdata);
  const dispatch = useDispatch();

  const orderStatus = [
    { label: 'Order Proceeded', icon: FaCheck },
    { label: 'Order Shipped', icon: FaShippingFast },
    { label: 'Out For Delivery', icon: FaTruck },
    { label: 'Order Arrived', icon: FaBox }
  ];

  // Map event types to corresponding indices
  const eventTypeMap = {
    'OC': 0.5, // Order Proceeded
    'PU': 1,   // Order Shipped
    'AR': 1.1, // Additional statuses after shipping
    'AO': 1.2,
    'DP': 1.3,
    'IT': 1.4,
    'RR': 1.5,
    'OD': 2,   // Out for Delivery
    'OA': 3    // Order Arrived
  };

  // Determine current status based on eventType
  const currentStatus = trackdata?.trackResults?.[0]?.eventType
    ? eventTypeMap[trackdata.trackResults[0].eventType]
    : 0; // Default to 'Order Proceeded' if no event type is found

  console.log("curr status", currentStatus);
  useEffect(() => {
    dispatch(TrackNumberApi(794843185271)); // Replace with your actual tracking number
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full py-8">
      <div className="w-[85%]">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-blue-900 font-semibold mb-6">Order Delivery Tracking</h1>
          <div className="w-full my-4 max-w-3xl flex items-center justify-between relative">
            {orderStatus.map((status, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Progress Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${index <= Math.floor(currentStatus) ? 'bg-green-500 z-20 text-white' : 'bg-gray-300 z-20 text-gray-600'}`}>
                  <status.icon />
                </div>
                {/* Status Text */}
                <p className={`mt-2 text-center text-sm 
                  ${index <= Math.floor(currentStatus) ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                  {status.label}
                </p>
              </div>
            ))}

            {/* Line Progress */}
            <div className="absolute top-5 left-0 w-full h-1 flex items-center justify-between">
              <div
                className="h-1 w-full bg-gray-300 relative">
                <div
                  className="h-1 bg-green-500 absolute top-0 left-0"
                  style={{ width: `${(currentStatus / (orderStatus.length - 1)) * 100}%` }}>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display tracking ID */}
        <div className="my-2 flex flex-col ml-20">
          <h1 className="text-xl font-semibold">Delivery by PharmEtrade</h1>
          <div className="flex">
            <p>Tracking ID :</p>
            <p>{trackdata?.trackingNumber}</p>
          </div>
        </div>

        {/* Additional details like Shipping Address and Order Info */}
        <div className="flex justify-around gap-4">
          <div className="border rounded-md p-4 w-80 ml-2 shadow-md mt-4 h-auto">
            <h1 className="font-semibold text-xl">Shipping Address</h1>
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

          <div className="border rounded-md h-auto p-4 shadow-md gap-5 mt-4 w-80 items-center flex flex-col">
            <h1 className="font-semibold text-xl">Order Info</h1>
            <h1 className="text-blue-700 text-xl hover:underline">
              <Link to="/layout/layoutorderlist">View Order Details</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TrackingOrder;

