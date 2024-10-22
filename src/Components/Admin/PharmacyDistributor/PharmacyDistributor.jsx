

// import React, { useEffect, useState } from "react";
// import { GetByAdminCriteriaAPI, GetCustomers } from "../../../Api/AdminApi";
// import edit from "../../../assets/Edit.png";
// import Bin from "../../../assets/Bin.png";
// import Deactivate from "../../../assets/Deactivate.png";
// import { Tooltip } from "@mui/material";
// // import AdminDasboard from "../Dashboard/AdminDasboard";
// import Pagination from "../../Pagination";
// import { useNavigate } from "react-router-dom";
// import { getUserByCustomerIdApi } from "../../../Api/UserApi";


// const PharmacyDistributor = () => {
//   const [customers, setcustomers] = useState([]);
//   const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     const fetchcustomers = async () => {
//       const res = await GetCustomers();
//       const filteredCustomers = res.filter((customer) =>
//         [3].includes(customer.customerTypeId)
//       );
//       setcustomers(filteredCustomers);
//     };
//     fetchcustomers();
//   }, []);

  
//   const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

//   const handleSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
//       direction = 'ascending'; // Reset to ascending after descending
//     }
//     setSortConfig({ key, direction });
//   };
  
  
//   const sortedItems = React.useMemo(() => {
//     if (sortConfig.key) {
//       return [...customers].sort((a, b) => {
//         if (sortConfig.direction === "ascending") {
//           return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//         }
//         return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//       });
//     }
//     return customers;
//   }, [customers, sortConfig]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
//   const currentItems = (Array.isArray(sortedItems) ? sortedItems : []).slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil((customers?.length || 0) / itemsPerPage);

//   // const indexOfLastItem = currentPage * itemsPerPage;
//   // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);
//   // const totalPages = Math.ceil((customers?.length || 0) / itemsPerPage);

//   const [SearchInput, setSearchInput] = useState({
//     customerName: null,
//     customerTypeId: 0,
//   });
//   const handleInputChange = (e) => {
//     console.log(e.target.name);
//     setSearchInput({
//       ...SearchInput,
//       [e.target.name]: e.target.value,
//     });

//   };
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent the default behavior
//       handleSearchClick(); // Call submit function when Enter is pressed
//     }
//   };
//   const handleSearchClick = async () => {
//     try {
//       const response = await GetByAdminCriteriaAPI(SearchInput)
//       setcustomers(response);
//     } catch (error) {
//       console.log("no fields");
//     }
//   }

//   const navigate = useNavigate();

//   const handleEditProduct = async (customerId) => {
//     try {
//       await getUserByCustomerIdApi(customerId);
//       navigate(`/pharmEtradeadmin/EditSellerList`);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <>
//       <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
//         <div className="w-[95%] h-full mt-8">
//           <div className="flex justify-between">
//             <h1 className="text-xl text-blue-900 font-semibold mb-4">
//               Pharmacy Distributor List
//             </h1>
//             <div className="flex  mb-4">
//               <input
//                 className="rounded-lg p-1"
//                 placeholder="Search..."
//                 name="customerName"
//                 onChange={(e) => handleInputChange(e)}
//                 onKeyDown={handleKeyDown}
//                 value={SearchInput.customerName}
//               />
//               {/* <button onClick={() => handleSearchClick()}>Search</button> */}


//             </div>
//           </div>
//           <div className="overflow-y-auto h-full clearfix">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-white  bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
//                 {/* <tr>
//                   <th className="px-6 py-3 text-center">S.NO</th>
//                   <th className="px-6 py-3"  onClick={() => handleSort('firstName')}>User Name
//                   {sortConfig.key === 'firstName' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}

//                   </th>
//                   <th className="px-6 py-3"  onClick={() => handleSort('RegistrationDate')}>Registration Date
//                   {sortConfig.key === 'RegistrationDate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}

//                   </th>
//                   <th className="px-6 py-3"  onClick={() => handleSort('Activationdate')}>Activation Date
//                   {sortConfig.key === 'Activationdate' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}

//                   </th>
//                   <th className="px-6 py-3 text-center"  onClick={() => handleSort('status')}>Status
//                   {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}

//                   </th>
//                   <th className="px-6 py-3 text-center" onClick={() => handleSort('mobile')} >Phone
//                   {sortConfig.key === 'mobile' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}


//                   </th>
//                   <th className="px-6 py-3 text-center">Actions</th>
//                 </tr> */}
//                 <tr>
//                   <th className="px-6 py-3 text-center">S.NO</th>
//                   <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('firstName')}>
//                     User Name{' '}
//                     {/* Show one icon dynamically based on sortConfig */}
//                     {sortConfig.key === 'firstName' ? (
//                       sortConfig.direction === 'ascending' ? '▲' : '▼'
//                     ) : '▲'} {/* Default icon before any click */}
//                   </th>
//                   <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('createdDate')}>
//                     Registration Date{' '}
//                     {sortConfig.key === 'createdDate' ? (
//                       sortConfig.direction === 'ascending' ? '▲' : '▼'
//                     ) : '▲'}
//                   </th>
//                   <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('activationDate')}>
//                     Activation Date{' '}
//                     {sortConfig.key === 'activationDate' ? (
//                       sortConfig.direction === 'ascending' ? '▲' : '▼'
//                     ) : '▲'}
//                   </th>
//                   <th className="px-6 py-3 text-center cursor-pointer" onClick={() => handleSort('status')}>
//                     Status{' '}
//                     {sortConfig.key === 'status' ? (
//                       sortConfig.direction === 'ascending' ? '▲' : '▼'
//                     ) : '▲'}
//                   </th>
//                   <th className="px-6 py-3 text-center cursor-pointer" onClick={() => handleSort('mobile')}>
//                     Phone{' '}
//                     {sortConfig.key === 'mobile' ? (
//                       sortConfig.direction === 'ascending' ? '▲' : '▼'
//                     ) : '▲'}
//                   </th>
//                   <th className="px-6 py-3 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.length > 0 ? ( currentItems.map((customer, index) => (
//                   <tr
//                     key={index}
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                   >
//                     <td className="px-6 text-center">{indexOfFirstItem+ index + 1}</td>
//                     <th
//                       scope="row"
//                       className="flex items-center px-6  text-gray-900 whitespace-nowrap dark:text-white"
//                     >
//                       {/* <img
//                       className="w-10 h-10 rounded-full"
//                       src={customer.profileImage}
//                       alt={`${customer.name} profile`}
//                     /> */}
//                       <div className="">
//                       <div className="font-semiboid ">
//                           {customer.shopName}
//                         </div>
//                         <div className="text-sm font-normal text-gray-500">
//                           {customer.firstName} {customer.lastName}
//                         </div>
//                         <div className="font-normal text-gray-500">
//                           {customer.email}
//                         </div>
                       
//                       </div>
//                     </th>
//                     {/* <td className="px-6  text-center">{""}</td>
//                     <td className="px-6  text-center">{""}</td> */}
//                      <td className="px-6 text-center">{new Date(customer.createdDate).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "2-digit",
//                       day: "2-digit",
//                     })
//                       .replace(/\//g, "-")}</td>
//                     <td className="px-6 text-center">{new Date(customer.activationDate).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "2-digit",
//                       day: "2-digit",
//                     })
//                       .replace(/\//g, "-")}</td>
//                     <td className="px-6  text-center">
//                       <div className="flex justify-center items-center">
//                         <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
//                         {customer.status} Active
//                       </div>
//                     </td>
//                     <td className="px-6  text-center">{customer.mobile}</td>
//                     {/* <td className="flex justify-center items-center px-6 py-4 space-x-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//                       Edit
//                     </a>
//                     <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
//                       Remove
//                     </a>
//                   </td> */}
//                     <td className="px-4  cursor-pointer text-center flex justify-center items-center space-x-2">
//                       <Tooltip title="Edit" placement="top">
//                         <img
//                           src={edit}
//                           alt="Edit"
//                           className="cursor-pointer w-7 h-7 -mb-5"
//                           onClick={() => handleEditProduct(customer.customerId)}
//                         />
//                       </Tooltip>
//                       <Tooltip placement="top" title="Delete">
//                         <img
//                           src={Bin}
//                           alt="Delete"
//                           className="cursor-pointer w-4 h-4 -mb-5"
//                           onClick={() => DeleteProduct(product.productID)}
//                         />
//                       </Tooltip>
//                       <Tooltip title="Deactivate" placement="top">
//                         <img
//                           src={Deactivate}
//                           alt="Deactivate"
//                           className="cursor-pointer w-4 h-4 -mb-5"
//                           onClick={() => deactivatePopUp(product.productID)}
//                         />
//                       </Tooltip>
//                     </td>
//                   </tr>
//                 ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4 text-black">
//                         No users available
//                       </td>
//                     </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-100  flex items-center justify-center ">
//         {" "}
//         <Pagination
//           indexOfFirstItem={indexOfFirstItem}
//           indexOfLastItem={indexOfLastItem}
//           productList={customers}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//     </>
//   );
// };

// export default PharmacyDistributor;




import React, { useEffect, useState } from "react";
import { GetByAdminCriteriaAPI, GetCustomers } from "../../../Api/AdminApi";
import edit from "../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from "@mui/material";
import Pagination from "../../Pagination";
import { useNavigate } from "react-router-dom";
import { DeactivateUserAPI, getUserByCustomerIdApi } from "../../../Api/UserApi";
import Loading from "../../Loading";
import wrong from '../../../assets/Icons/wrongred.png'
import Notification from "../../Notification";


const PharmacyDistributor = () => {
  const [customers, setCustomers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchInput, setSearchInput] = useState({
    customerName: '',
    customerTypeId: 0,
  });

  const navigate = useNavigate();

  const [openPop, setOpenPop] = useState(false);
  const [customerId, setCustomerId] = useState(null); // To store the ID of the customer being deactivated

  const closeButton = () => {
    setOpenPop(false);
  };

  const cancelButton = () => {
    closeButton();
  };

  // const successButton = () => {
  //   // Call your deactivate function here
  //   DeactivateCustomer(customerId);
  //   closeButton();
  // };

  // const handleDeactivateClick = (id) => {
  //   setCustomerId(id); // Store the customer ID
  //   setOpenPop(true); // Open the popup
  // };


  // Fetch and filter customers
  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     const res = await GetCustomers();
  //     const filteredCustomers = res.filter((customer) =>
  //       [1].includes(customer.customerTypeId)
  //     );

  //     // Sort by createdDate in descending order
  //     filteredCustomers.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  //     setCustomers(filteredCustomers);
  //   };

  //   fetchCustomers();
  // }, []);


  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true); // Set loading state before the request
  
      try {
        const res = await GetCustomers();
        const filteredCustomers = res.filter((customer) =>
          [3].includes(customer.customerTypeId)
        );
  
        // Sort by createdDate in descending order
        filteredCustomers.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        setCustomers(filteredCustomers);
      } catch (error) {
        setError(error); // Handle and store error
      } finally {
        setLoading(false); // Ensure loading is stopped
      }
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
      // await getUserByCustomerIdApi(customerId);
      navigate(`/pharmEtradeadmin/EditSellerList?CustomerId=${customerId}`);
    } catch (error) {
      console.log("error", error);
    }
  };
  // const DeactivateCustomer = async (customerId)=>{
  //     await DeactivateUserAPI(customerId);
  // }



  // const [customerId, setCustomerId] = useState(null);
  const [deactivatedProducts, setDeactivatedProducts] = useState([]); // State to track deactivated products
  const [notification, setNotification] = useState({ show: false, message: "" });

  // const closeButton = () => {
  //   setOpenPop(false);
  // };

  // const cancelButton = () => {
  //   closeButton();
  // };

  const successButton = async () => {
    await DeactivateCustomer(customerId);
    setDeactivatedProducts((prev) => [...prev, customerId]); // Add the deactivated product ID
    closeButton(); // Close the popup
    setNotification({
      show: true,
      message: "User Deactivated Successfully!",
    });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  };

  const handleDeactivateClick = (id) => {
    setCustomerId(id);
    setOpenPop(true);
  };

  const DeactivateCustomer = async (customerId) => {
    try {
      await DeactivateUserAPI(customerId);
      // Optionally, return a success response or perform other logic here
    } catch (error) {
      console.error("Error deactivating user:", error);
      // Optionally handle errors, such as showing an error notification
    }
  };




  return (
    <>
      <div className="bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center">
      {notification.show && (
          <Notification show={notification.show} message={notification.message} />
        )}
      {openPop && (
          <div
            className="fixed top-0 left-25 w-4/5 h-full flex justify-center items-center bg-slate-900 bg-opacity-20"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
              <div className="flex justify-end  ">
                <button className="w-5 p-1 -mt-8 mx-2" onClick={closeButton}>
                  <img src={wrong} className="w-6 h-4" />
                </button>
              </div>
              <h1 className="text-black text-center mt-2">
                Are you sure you want to deactivate this user ?
              </h1>
              <div className="flex justify-around mt-6">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={cancelButton}
                >
                  No
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={successButton}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-[95%] h-full mt-8">
          <div className="flex justify-between">
            <h1 className="text-xl text-blue-900 font-semibold mb-4">
            Pharmacy  Distributor List
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
          {loading && (
              <div>
                <Loading />
              </div>
            )}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && (
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
                {currentItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No users available
                      </td>
                    </tr>
                  ) : (
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
                      {/* <td className="px-6 text-center">
                        <div className="flex justify-center items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                          {customer.status} Active
                        </div>
                      </td> */}
                      <td className="px-6 text-center">
  <div className="flex justify-center items-center">
    <div
      className={`h-2.5 w-2.5 rounded-full mr-2 ${customer.isActive === 1 ? 'bg-green-500' : 'bg-red-500'}`}
    ></div>
    {customer.isActive === 1 ? 'Active' : 'InActive'}
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
                            // onClick={() => DeactivateCustomer(customer.customerId)}
                            onClick={() => handleDeactivateClick(customer.customerId)}
                          />
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                ) }
              </tbody>
            </table>
            )}
          </div>
           {/* <div className="bg-gray-100  flex items-center justify-center "> */}
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
       {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default PharmacyDistributor;






