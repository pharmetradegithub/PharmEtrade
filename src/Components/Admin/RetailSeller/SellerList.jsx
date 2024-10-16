// import React, { useEffect, useState } from 'react';
// import { GetCustomers } from '../../../Api/AdminApi';
// import edit from "../../../assets/Edit.png";
// import Bin from "../../../assets/Bin.png";
// import Deactivate from "../../../assets/Deactivate.png";
// import { Tooltip } from "@mui/material";




// const SellerList = () => {
//   const [customers,setcustomers]=useState([]);
//   useEffect(() => {
//     const fetchcustomers =async ()=>{
//       const res  = await GetCustomers();
//       const filteredCustomers = res.filter(customer => 
//         [1, 2, 3].includes(customer.customerTypeId)
//       );
//       setcustomers(filteredCustomers);    
//     }
//       fetchcustomers();
//   }, [])
  
//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center">
//       <div className="w-[95%] h-full mt-8">
//         <h1 className="text-xl text-blue-900 font-semibold mb-4">Seller List</h1>
//         <div className="overflow-y-auto h-full">
//           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//             <thead className=" text-white text-lg bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th className="px-6 py-3 text-center">ID</th>
//                 <th className="px-6 py-3">User Profile</th>
//                 <th className="px-6 py-3 text-center">Status</th>
//                 <th className="px-6 py-3 text-center">Phone</th>
//                 <th className="px-6 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers?.map((customer, index) => (
//                 <tr
//                   key={index}
//                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                 >
//                   <td className="px-6  text-center">{index+1}</td>
//                   <th
//                     scope="row"
//                     className="flex items-center px-6  text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {/* <img
//                       className="w-10 h-10 rounded-full"
//                       src={customer.profileImage}
//                       alt={`${customer.name} profile`}
//                     /> */}
//                     <div className="">
//                       <div className="text-base items-center font-semibold">{customer.firstName}{""}{customer.lastName}</div>
//                       <div className="font-normal text-gray-500">{customer.email}</div>
//                     </div>
//                   </th>
//                   {/* <td className="px-6 py-4 text-center">{customer.country}</td> */}
//                   <td className="px-6  text-center">
//                     <div className="flex justify-center items-center">
//                       <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
//                       {customer.status} Active
//                     </div>
//                   </td>
//                   <td className="px-6  text-center">{customer.mobile}</td>
                 
//                       <td className="px-4  cursor-pointer text-center justify-center  flex items-center space-x-2">
//                           <Tooltip title="Edit" placement="top">
//                             <img
//                               src={edit}
//                               alt="Edit"
//                               className="cursor-pointer w-7 h-7 -mb-5"
//                               onClick={() => handleEditProduct(product)}
//                             />
//                           </Tooltip>
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={Bin}
//                               alt="Delete"
//                               className="cursor-pointer w-4 h-4 -mb-5"
//                               onClick={() => DeleteProduct(product.productID)}
//                             />
//                           </Tooltip>
//                           <Tooltip title="Deactivate" placement="top">
//                             <img
//                               src={Deactivate}
//                               alt="Deactivate" 
//                               className="cursor-pointer w-4 h-4 -mb-5"
//                               onClick={() => deactivatePopUp(product.productID)}
//                             />
//                           </Tooltip>
//                         </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerList;


import React, { useEffect, useState } from "react";
import { GetByAdminCriteriaAPI, GetCustomers } from "../../../Api/AdminApi";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";
import Pagination from "../../Pagination";
import { useNavigate } from "react-router-dom";
import { getUserByCustomerIdApi } from "../../../Api/UserApi";

const SellerList = () => {
  const [customers, setCustomers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState({
    customerName: '',
    customerTypeId: 0,
  });

  const navigate = useNavigate();

  // Fetch and filter customers
  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [1].includes(customer.customerTypeId)
      );

      // Sort by createdDate in descending order
      filteredCustomers.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
      setCustomers(filteredCustomers);
    };

    fetchCustomers();
  }, []);

  // Sorting configuration
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (sortConfig.key === key && sortConfig.direction === "descending") {
      direction = "ascending";
    }
    setSortConfig({ key, direction });
  };

  // Sorting logic
  const sortedItems = React.useMemo(() => {
    let items = [...customers];
    if (sortConfig.key) {
      items.sort((a, b) => {
        if (sortConfig.direction === "ascending") {
          return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        }
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      });
    }
    return items;
  }, [customers, sortConfig]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (Array.isArray(sortedItems) ? sortedItems : []).slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((customers?.length || 0) / itemsPerPage);

  const handleInputChange = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };

  const handleSearchClick = async () => {
    try {
      const response = await GetByAdminCriteriaAPI(searchInput);
      setCustomers(response);
    } catch (error) {
      console.log("no fields");
    }
  };

  const handleEditProduct = async (customerId) => {
    try {
      await getUserByCustomerIdApi(customerId);
      navigate(`/pharmEtradeadmin/EditSellerList`);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
        <div className="w-[95%] h-full mt-8">
          <div className="flex justify-between">
            <h1 className="text-xl text-blue-900 font-semibold mb-4">
            Retail Pharmacy List
            </h1>
            <div className="flex mb-4">
              <input
                className="rounded-lg p-1"
                placeholder="Search..."
                name="customerName"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                value={searchInput.customerName}
              />
            </div>
          </div>
          <div className="overflow-y-auto h-full clearfix">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 text-center">S.NO</th>
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("firstName")}
                  >
                    User Name{" "}
                    {sortConfig.key === "firstName" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : "▲"}
                  </th>
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("createdDate")}
                  >
                    Registration Date{" "}
                    {sortConfig.key === "createdDate" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : "▲"}
                  </th>
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("activationDate")}
                  >
                    Activation Date{" "}
                    {sortConfig.key === "activationDate" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : "▲"}
                  </th>
                  <th
                    className="px-6 py-3 text-center cursor-pointer"
                    onClick={() => handleSort("status")}
                  >
                    Status{" "}
                    {sortConfig.key === "status" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : "▲"}
                  </th>
                  <th
                    className="px-6 py-3 text-center cursor-pointer"
                    onClick={() => handleSort("mobile")}
                  >
                    Phone{" "}
                    {sortConfig.key === "mobile" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : "▲"}
                  </th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((customer, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 text-center">{indexOfFirstItem + index + 1}</td>
                      <th scope="row" className="flex items-center px-6 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="">
                          <div className="font-semibold">{customer.shopName}</div>
                          <div className="font-normal text-gray-500">
                            {customer.firstName} {customer.lastName}
                          </div>
                          <div className="font-normal text-gray-500">{customer.email}</div>
                        </div>
                      </th>
                      <td className="px-6 text-center">
                        {new Date(customer.createdDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }).replace(/\//g, "-")}
                      </td>
                      <td className="px-6 text-center">
                        {new Date(customer.activationDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }).replace(/\//g, "-")}
                      </td>
                      <td className="px-6 text-center">
                        <div className="flex justify-center items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                          {customer.status} Active
                        </div>
                      </td>
                      <td className="px-6 text-center">{customer.mobile}</td>
                      <td className="px-4 cursor-pointer text-center flex justify-center items-center space-x-2">
                        <Tooltip title="Edit" placement="top">
                          <img
                            src={edit}
                            alt="Edit"
                            className="cursor-pointer w-7 h-7 -mb-5"
                            onClick={() => handleEditProduct(customer.customerId)}
                          />
                        </Tooltip>
                        <Tooltip placement="top" title="Delete">
                          <img
                            src={Bin}
                            alt="Delete"
                            className="cursor-pointer w-4 h-4 -mb-5"
                            onClick={() => DeleteProduct(customer.customerId)}
                          />
                        </Tooltip>
                        <Tooltip placement="top" title="Deactivate">
                          <img
                            src={Deactivate}
                            alt="Deactivate"
                            className="cursor-pointer w-4 h-4 -mb-5"
                            onClick={() => DeactivateCustomer(customer.customerId)}
                          />
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">No customers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="flex justify-center mt-4">
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div> */}
           <div className="bg-gray-100  flex items-center justify-center ">
        {" "}
        <Pagination
           indexOfFirstItem={indexOfFirstItem}
           indexOfLastItem={indexOfLastItem}
           productList={customers}
           itemsPerPage={itemsPerPage}
           setItemsPerPage={setItemsPerPage}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
         />
       </div>
        </div>
      </div>
    </>
  );
};

export default SellerList;

