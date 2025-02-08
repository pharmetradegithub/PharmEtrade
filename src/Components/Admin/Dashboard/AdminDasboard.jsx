// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";
// import { fetchAdminLogin } from "../../../Api/AdminApi";

// const AdminDasboard = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const adminData = useSelector((state) => state.admin.admin)

//   const details = [
//     {
//       label: "Total No. of Users",
//       percentage: adminData?.totalCustomers,
//       color: "blue",
//       grid: "customersOrdered",
//       to: "/pharmEtradeadmin/customerList",
//     },
//     {
//       totalOrder: 65,
//       label: "Retail Pharmacy",
//       percentage: "$100.00",
//       color: "red",
//       grid: "totalProducts",
//     },
//     {
//       label: "General Merchandise Seller",
//       percentage: adminData?.totalProducts,
//       color: "green",
//       grid: "customersOrdered",
//       to: "/pharmEtradeadmin/products",
//     },
//     {
//       label: "Pharmacy Distributor",
//       percentage: adminData?.totalOrders,
//       color: "purple",
//       grid: "customersOrdered",
//     },
//     {
//       label: "Retail Customer",
//       percentage: 65,
//       color: "orange",
//       grid: "productsOrdered",
//       to: "/pharmEtradeadmin/sellerList",
//     },

//   ];

//   const detailsGrids = [
//     {
//       totalOrder: 65,
//       label: "Total Sales Amount",
//       percentage: "$100.00",
//       color: "red",
//       grid: "totalProducts",
//     },
//     {
//       label: "Total No. of Orders",
//       percentage: adminData?.totalOrders,
//       color: "purple",
//       grid: "customersOrdered",
//     },
//     {
//       label: "Total No. of Products",
//       percentage: adminData?.totalProducts,
//       color: "green",
//       grid: "customersOrdered",
//       to: "/pharmEtradeadmin/products",
//     },

//     // {
//     //   label: "Total No. of Sellers",
//     //   percentage: 65,
//     //   color: "orange",
//     //   grid: "productsOrdered",
//     //   to: "/pharmEtradeadmin/sellerList",
//     // },
//     // {
//     //   label: "Total No. of Customers",
//     //   percentage: adminData?.totalCustomers,
//     //   color: "blue",
//     //   grid: "customersOrdered",
//     //   to: "/pharmEtradeadmin/customerList",
//     // },
//   ];
//   const handleNavigation = (to) => {
//     if (to) {
//       navigate(to); // Navigate to the path when a card is clicked
//     }
//   };

//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchAdminLogin("1b8ec36a-6549-11ef-8a1f-0affd374995f"))
//   }, [])

//   // const CircleProgress = ({ percentage, color }) => {
//   //   const radius = 20;
//   //   const strokeWidth = 4;
//   //   const circumference = 2 * Math.PI * radius;
//   //   const progress = (percentage / 100) * circumference;

//   //   return (
//   //     <svg width={50} height={50}>
//   //       <circle
//   //         cx="25"
//   //         cy="25"
//   //         r={radius}
//   //         stroke="#e0e0e0"
//   //         strokeWidth={strokeWidth}
//   //         fill="none"
//   //       />
//   //       <circle
//   //         cx="25"
//   //         cy="25"
//   //         r={radius}
//   //         stroke={color}
//   //         strokeWidth={strokeWidth}
//   //         fill="none"
//   //         strokeDasharray={circumference}
//   //         strokeDashoffset={circumference - progress}
//   //         strokeLinecap="round"
//   //         transform="rotate(-90 25 25)" // Start progress from the top
//   //       />
//   //       {/* Percentage Text */}
//   //       <text
//   //         x="50%"
//   //         y="50%"
//   //         dominantBaseline="middle"
//   //         textAnchor="middle"
//   //         fontSize="10"
//   //         fill={color}
//   //         fontWeight="bold"
//   //       >
//   //         {percentage}
//   //       </text>
//   //     </svg>
//   //   );
//   // };
//   return (
//     <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
//       <div className="w-[95%] h-full mt-8">
//         <div className="flex justify-between">
//           <h1 className="text-[22px] text-blue-900  font-semibold">
//             Admin Dashboard
//           </h1>
//         </div>

//         <div className="flex justify-normal flex-wrap  gap-6 w-full mt-8 border p-4 rounded-lg shadow-lg">
//           <div className="flex  gap-3  ">
//             {details.map((detail) => (
//               <div className="flex ">
//                 <div
//                   className="bg-white w-44 rounded-lg shadow-xl cursor-pointer  h-28 p-2 flex flex-col justify-between"
//                   style={{ borderBottom: `4px solid ${detail.color}` }}
//                   onClick={() => handleNavigation(detail.to)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h1 className="hover:text-red-600 hover:underline ">
//                       {detail.label}
//                     </h1>
//                   </div>
//                   <div className="flex justify-between">
//                     <p className="items-center flex justify-center text-3xl mt-4 font-semibold">
//                       {detail.percentage}
//                     </p>
//                     {/* <CircleProgress
//                       percentage={detail.percentage}
//                       color={detail.color}
//                     /> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-normal flex-wrap  gap-6 w-full mt-8 border p-4 rounded-lg shadow-lg">
//           <div className="flex  gap-3  ">
//             {detailsGrids.map((detailgrid) => (
//               <div className="flex ">
//                 <div
//                   className="bg-white w-44 rounded-lg shadow-xl cursor-pointer  h-28 p-2 flex flex-col justify-between"
//                   style={{ borderBottom: `4px solid ${detailgrid.color}` }}
//                   onClick={() => handleNavigation(detailgrid.to)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h1 className="hover:text-red-600 hover:underline ">
//                       {detailgrid.label}
//                     </h1>
//                   </div>
//                   <div className="flex justify-between">
//                     <p className="items-center flex justify-center text-3xl mt-4 font-semibold">
//                       {detailgrid.percentage}
//                     </p>
//                     {/* <CircleProgress
//                       percentage={detail.percentage}
//                       color={detail.color}
//                     /> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDasboard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchAdminLogin, GetCustomers } from "../../../Api/AdminApi";

const AdminDasboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const adminData = useSelector((state) => state.admin?.admin || []);

  const [retailPhar, setretailPhar] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  const [generalMar, setGeneralMer] = useState([]);
  const [customer, setCustomer] = useState([]);

  const details = [
    {
      label: "Total No. of Users",
      percentage: adminData?.totalCustomers,
      color: "blue",
      grid: "customersOrdered",
      active: adminData.totalActiveCustomers,
      inActive: adminData.totalInActiveCustomers,
      // to: "/pharmEtradeadmin/customerList",
    },
    {
      totalOrder: 65,
      label: "Retail Pharmacy",
      percentage: retailPhar.length,
      color: "red",
      grid: "totalProducts",
      to: "/pharmEtradeadmin/RetailPharmacyList",
      active: adminData?.customersCounts?.[0]?.activeCount || 0,
      inActive: adminData?.customersCounts?.[0]?.inActiveCount ||0,
    },
    {
      label: "General Merchandise Seller",
      percentage: generalMar.length,
      color: "green",
      grid: "customersOrdered",
      to: "/pharmEtradeadmin/GeneralMerchandiseSellerList",
      active: adminData?.customersCounts?.[1]?.activeCount || 0,
      inActive: adminData?.customersCounts?.[1]?.inActiveCount || 0,
    },
    {
      label: "Pharmacy Distributor",
      percentage: pharmacy.length,
      color: "purple",
      grid: "customersOrdered",
      to: "/pharmEtradeadmin/PharmacyDistributorList",
      active: adminData?.customersCounts?.[2]?.activeCount||0,
      inActive: adminData?.customersCounts?.[2]?.inActiveCount ||0,
    },
    {
      label: "Retail Customer",
      percentage: customer.length,
      color: "orange",
      grid: "productsOrdered",
      to: "/pharmEtradeadmin/customerList",
      active: adminData?.customersCounts?.[3]?.activeCount||0,
      inActive: adminData?.customersCounts?.[3]?.inActiveCount||0,
    },
  ];

  const detailsGrids = [
    {
      totalOrder: 65,
      label: "Total Sales Amount",
      // amount: adminData?.totalSaleValue,
      amount: adminData?.totalSaleValue?.toFixed(2),

      color: "red",
      grid: "totalProducts",
      money: "$",
    },
    {
      label: "Total No. of Orders",
      amount: adminData?.totalOrders,
      color: "purple",
      grid: "customersOrdered",
    },
    {
      label: " No. of Cancelled Orders",
      amount: adminData?.totalCancelledOrders,
      color: "red",
      grid: "customersOrdered",
      // to: "/pharmEtradeadmin/products",
    },
    {
      label: "Total No. of Products",
      amount: adminData?.totalProducts,
      color: "green",
      grid: "customersOrdered",
      to: "/pharmEtradeadmin/products",
    },

    {
      label: " No. of Products Active",
      amount: adminData?.totalActiveProducts,
      color: "green",
      grid: "customersOrdered",
      // to: "/pharmEtradeadmin/products",
    },
    {
      label: "No. of Products Inactive",
      amount: adminData?.totalInActiveProducts,
      color: "red",
      grid: "customersOrdered",
      // to: "/pharmEtradeadmin/products",
    },

    // {
    //   label: "Total No. of Sellers",
    //   percentage: 65,
    //   color: "orange",
    //   grid: "productsOrdered",
    //   to: "/pharmEtradeadmin/sellerList",
    // },
    // {
    //   label: "Total No. of Customers",
    //   percentage: adminData?.totalCustomers,
    //   color: "blue",
    //   grid: "customersOrdered",
    //   to: "/pharmEtradeadmin/customerList",
    // },
  ];
  const handleNavigation = (to) => {
    if (to) {
      navigate(to); // Navigate to the path when a card is clicked
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminLogin("1b8ec36a-6549-11ef-8a1f-0affd374995f"));
  }, []);

  useEffect(() => {
    const data = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [1].includes(customer.customerTypeId)
      );
      setretailPhar(filteredCustomers);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [2].includes(customer.customerTypeId)
      );
      setGeneralMer(filteredCustomers);
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [3].includes(customer.customerTypeId)
      );
      setPharmacy(filteredCustomers);
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      const res = await GetCustomers();
      const filteredCustomers = res.filter((customer) =>
        [4].includes(customer.customerTypeId)
      );
      setCustomer(filteredCustomers);
    };
    data();
  }, []);
  // const CircleProgress = ({ percentage, color }) => {
  //   const radius = 20;
  //   const strokeWidth = 4;
  //   const circumference = 2 * Math.PI * radius;
  //   const progress = (percentage / 100) * circumference;

  //   return (
  //     <svg width={50} height={50}>
  //       <circle
  //         cx="25"
  //         cy="25"
  //         r={radius}
  //         stroke="#e0e0e0"
  //         strokeWidth={strokeWidth}
  //         fill="none"
  //       />
  //       <circle
  //         cx="25"
  //         cy="25"
  //         r={radius}
  //         stroke={color}
  //         strokeWidth={strokeWidth}
  //         fill="none"
  //         strokeDasharray={circumference}
  //         strokeDashoffset={circumference - progress}
  //         strokeLinecap="round"
  //         transform="rotate(-90 25 25)" // Start progress from the top
  //       />
  //       {/* Percentage Text */}
  //       <text
  //         x="50%"
  //         y="50%"
  //         dominantBaseline="middle"
  //         textAnchor="middle"
  //         fontSize="10"
  //         fill={color}
  //         fontWeight="bold"
  //       >
  //         {percentage}
  //       </text>
  //     </svg>
  //   );
  // };
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900  font-semibold">
            Dashboard
          </h1>
        </div>

        <div className="flex justify-normal flex-wrap  gap-6 w-full mt-8 border  p-4 rounded-lg shadow-lg">
          <div className="flex  gap-3  ">
            {details.map((detail, index) => (
              <div className="flex " key={index}>
                <div
                  className="bg-white w-44 rounded-lg shadow-xl cursor-pointer  h-auto p-2 flex flex-col justify-between"
                  style={{ borderBottom: `4px solid ${detail.color}` }}
                  onClick={() => handleNavigation(detail.to)}
                >
                  <div className="flex justify-between items-center">
                    {/* <h1 className="hover:text-red-600 hover:underline font-semibold ">
                      {detail.label}
                    </h1> */}
                    <h1
                      className={`${
                        index === 0
                          ? "font-semibold"
                          : "hover:text-red-600 hover:underline font-semibold"
                      }`}
                    >
                      {detail.label}
                    </h1>
                  </div>
                  <div className="flex justify-between -mt-2">
                    <p className="items-center flex justify-center text-xl  font-semibold">
                      {detail.percentage}
                    </p>
                    {/* <CircleProgress
                      percentage={detail.percentage}
                      color={detail.color}
                    /> */}
                  </div>
                  <div className="flex justify-between -mt-1">
                    <div className="flex flex-col">
                      <div className="flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500  mt-2 mr-1"></div>

                        <p className="text-green-700">Active</p>
                      </div>
                      <p>{detail.active}</p>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500  mt-2 mr-1"></div>
                        <p className="text-green-700">Inactive</p>
                      </div>
                      <p>{detail.inActive}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-normal flex-wrap  gap-6 w-full mt-8 border p-4 rounded-lg shadow-lg">
          <div className="flex  gap-3  ">
            {detailsGrids.map((detailgrid, index) => (
              <div className="flex " key={index}>
                <div
                  className="bg-white w-40 rounded-lg shadow-xl cursor-pointer  h-28 p-2 flex flex-col justify-between"
                  style={{ borderBottom: `4px solid ${detailgrid.color}` }}
                  onClick={() => handleNavigation(detailgrid.to)}
                >
                  <div className="flex justify-between items-center">
                    <h1 className="hover:text-red-600 hover:underline font-semibold ">
                      {detailgrid.label}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <p className="items-center  justify-center text-lg flex flex-wrap mt-4 font-semibold">
                      {detailgrid.money}
                      {detailgrid.amount}
                    </p>
                    {/* <CircleProgress
                      percentage={detail.percentage}
                      color={detail.color}
                    /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasboard;
