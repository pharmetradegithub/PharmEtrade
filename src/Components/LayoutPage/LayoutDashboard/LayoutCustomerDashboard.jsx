import React, { useState } from 'react';
import LayoutBuyerReceiversgrid from './LayoutBuyerReceiversgrid';
import LayoutBuyerUpcomingGrid from './LayoutBuyerUpcomingGrid';
import LayoutBuyerCancelledgrid from './LayoutBuyerCancelledgrid';
import { useSelector } from 'react-redux';

const LayoutDashboard = () => {
  const [visibleGrid, setVisibleGrid] = useState(null); // To track which grid is visible
  const customerDashboard = useSelector((state) => state.dashboard.getCustomerId)
  console.log("customerDash-->", customerDashboard)

  const toggleGrid = (grid) => {
    setVisibleGrid((prev) => (prev === grid ? null : grid)); // Toggle the grid visibility
  };

  const orders = [
    {label:"Orders",quantity:60},
    { label: "Received", quantity: 20, grid: "received" },
    { label: "Upcoming", quantity: 30, grid: "upcoming" },
    { label: "Cancelled", quantity: 10, grid: "cancelled" },
  ];

  return (
    <div className='w-full h-full bg-gray-100 flex items-center justify-center overflow-y-scroll'>
      <div className='w-[95%] h-full mt-4 '>
        <div>
          <h1 className='text-2xl text-blue-900 font-semibold'>Customer dashboard</h1>
        </div>

        <div className='flex gap-6 mt-4'>
          {orders.map((order) => (
            <div
              key={order.label}
              className='p-4 w-56 h-28 justify-between items-center flex shadow-lg rounded-lg bg-white cursor-pointer'
              onClick={() => toggleGrid(order.grid)} // Toggle the corresponding grid
            >
              <div className='w-full flex justify-between flex-col'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-3xl hover:text-red-500'>{order.label}</p>
                </div>
                <p className='text-2xl flex justify-center'>{order.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render the grids based on which one is selected */}
        <div>
          {visibleGrid === "received" && <LayoutBuyerReceiversgrid />}
        </div>
        <div>
          {visibleGrid === "upcoming" && <LayoutBuyerUpcomingGrid />}
        </div>
        <div>
          {visibleGrid === "cancelled" && <LayoutBuyerCancelledgrid />}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
