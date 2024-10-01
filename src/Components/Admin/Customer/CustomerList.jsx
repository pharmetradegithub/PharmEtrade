import React, { useEffect, useState } from 'react';
import { GetCustomers } from '../../../Api/AdminApi';
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";




const CustomerList = () => {

  const [customers,setcustomers]=useState([]);
  useEffect(() => {
    const fetchcustomers =async ()=>{
      const res  = await GetCustomers();
      const filteredCustomers = res.filter(customer => 
        [4].includes(customer.customerTypeId)
      );
      setcustomers(filteredCustomers);    
    }
      fetchcustomers();
  }, [])


  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-8">
        <h1 className="text-xl text-blue-900 font-semibold mb-4">Customer List</h1>
        <div className="overflow-y-auto h-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-center">ID</th>
                <th className="px-6 py-3">USER NAME</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Phone</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 text-center">{index+1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="w-10 h-10 rounded-full"
                      src={customer.profileImage}
                      alt={`${customer.name} profile`}
                    /> */}
                    <div className="">
                      <div className="text-base font-semibold">{customer.firstName}{" "}{customer.lastName}</div>
                      <div className="font-normal text-gray-500">{customer.email}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      {customer.status} Active
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{customer.mobile}</td>
                  {/* <td className="flex justify-center items-center px-6 py-4 space-x-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                      Remove
                    </a>
                  </td> */}
                   <td className="px-4  cursor-pointer text-center flex justify-center items-center space-x-2">
                          <Tooltip title="Edit" placement="top">
                            <img
                              src={edit}
                              alt="Edit"
                              className="cursor-pointer w-7 h-7"
                              onClick={() => handleEditProduct(product)}
                            />
                          </Tooltip>
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={Bin}
                              alt="Delete"
                              className="cursor-pointer w-4 h-4"
                              onClick={() => DeleteProduct(product.productID)}
                            />
                          </Tooltip>
                          <Tooltip title="Deactivate" placement="top">
                            <img
                              src={Deactivate}
                              alt="Deactivate"
                              className="cursor-pointer w-4 h-4"
                              onClick={() => deactivatePopUp(product.productID)}
                            />
                          </Tooltip>
                        </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
