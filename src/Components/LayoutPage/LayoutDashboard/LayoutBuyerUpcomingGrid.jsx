// import React, { useState,useEffect } from 'react';
// import image from '../../../assets/offers_3.png';
// import image1 from '../../../assets/offers_2.png'
// import next from '../../../assets/Next_icon.png'
// import previous from "../../../assets/Previous_icon.png";
// import { useNavigate } from 'react-router-dom';
// import { CiSearch, CiMenuKebab } from "react-icons/ci";
// import Pagination from '../../Pagination';

// const LayoutBuyerUpcomingGrid = () => {
//     const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
//   const [currentPage, setCurrentPage] = useState(1);
//     const Buyergrids = [
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         {
//             src: image1,
//             itemName: "2SAN VAGINAL PH SCREENING TEST",
//             itemDetails: "Monocef-O 200 Tablet is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the lungs (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and skin. It kills bacteria, which helps to improve your s",
//             itempackage: "string",
//             unitprice: 1200.00,
//         },
//         // Add more items...
//     ];

//     const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
//   const [currentItems, setcurrentItems] = useState(
//     Buyergrids.slice(indexOfFirstItem, indexOfLastItem)
//   );
//   useEffect(() => {
//     if (Buyergrids) {
//       const indexOfLastItem = currentPage * itemsPerPage;
//       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//       setcurrentItems(Buyergrids.slice(indexOfFirstItem, indexOfLastItem));
//     }
//   }, [currentPage, Buyergrids]);
//     const [expandedItemIndex, setExpandedItemIndex] = useState(null);

//     // Calculate the total number of pages
//     const totalPages = Math.ceil(Buyergrids.length / itemsPerPage);

//     // Function to handle pagination
//     const handlePageChange = (pageNumber) => {
//         if (pageNumber > 0 && pageNumber <= totalPages) {
//             setCurrentPage(pageNumber);
//         }
//     };

//     // Function to toggle item details
//     const toggleItemDetails = (index) => {
//         if (expandedItemIndex === index) {
//             setExpandedItemIndex(null);
//         } else {
//             setExpandedItemIndex(index);
//         }
//     };

//     // Calculate the index range for items to display on the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const displayedItems = Buyergrids.slice(startIndex, endIndex);

//     const navigate = useNavigate();

//     const handleclick = () => {
//         navigate("/detailspage/:id")
//     }
//     return (
//         <div className='w-full h-[80vh] mt-4 overflow-y-auto'>
//             <div className='flex flex-col mx-5'>
//                 <div className='flex justify-between'>
//                 <h1 className='text-xl text-blue-900 font-semibold mt-4'>Upcoming Deliveries</h1>
//                 {/* search start */}
//                 <div className="relative flex mb-9">
//                     <input
//                         type="text"
//                         placeholder="Search Product....."
//                         //   value={searchQuery}
//                         //   onChange={(e) => setSearchQuery(e.target.value)}
//                         className="border rounded-xl h-10 w-64 text-left px-8 gap-2 flex "
//                     />
//                     <CiSearch className="absolute left-2 top-3 text-gray-400 " />
//                 </div>
//                 </div>
//                 {/* search end */}
//                 <div className='w-full '>
//                     {currentItems.map((Buyergrid, index) => (
//                         <div key={index} className='pb-4 border rounded-lg shadow-lg  justify-around mb-4 flex'>
//                             <div>
//                                 <img src={Buyergrid.src} alt={Buyergrid.itemName} className='w-36 h-28 p-2 cursor-pointer' onClick={handleclick} />
//                                 <p>Upcoming Date : <span className='text-red-500 text-sm'>04-17-2024</span></p>

//                             </div>
//                             <div className='flex flex-col mt-2 ml-4'>
//                                 <p className='text-base font-semibold'>Item Details</p>
//                                 <p className='text-base flex flex-wrap font-semibold'>{Buyergrid.itemName}</p>
//                                 <p className='text-sm w-48'>
//                                     {expandedItemIndex === index
//                                         ? Buyergrid.itemDetails
//                                         : Buyergrid.itemDetails.slice(0, 100) + '...'}
//                                     <button
//                                         onClick={() => toggleItemDetails(index)}
//                                         className='text-blue-500 ml-2'
//                                     >
//                                         {expandedItemIndex === index ? 'See Less' : 'See More'}
//                                     </button>
//                                 </p>
//                             </div>
//                             <div className='mt-2 ml-4'>
//                                 <span className='text-base font-semibold'>Package </span>
//                                 <p>{Buyergrid.itempackage}</p>
//                             </div>
//                             <div className='mt-2 ml-4'>
//                                 <span className='text-base font-semibold'>Unit Price </span>
//                                 <p>${Buyergrid.unitprice.toFixed(2)}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <Pagination
//               indexOfFirstItem={indexOfFirstItem}
//               indexOfLastItem={indexOfLastItem}
//               productList={Buyergrids}
//               itemsPerPage={itemsPerPage}
//               setItemsPerPage={setItemsPerPage}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//             />
//                 {/* Pagination controls with Next and Previous */}
//                 {/* <div className='flex justify-end mt-4 space-x-2 my-4'>
//                     <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//                         disabled={currentPage === 1}
//                     >
//                         <img src={previous} className='w-4 h-4' />
//                     </button>

//                     {/* Page number buttons */}
//                     {/* {Array.from({ length: totalPages }, (_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => handlePageChange(i + 1)}
//                             className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                         >
//                             {i + 1}
//                         </button>
//                     ))} 
//                     <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//                         {currentPage} of {totalPages}
//                     </span>

//                     <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//                         disabled={currentPage === totalPages}
//                     >
//                         <img src={next} className='w-4 h-4' />
//                     </button>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// export default LayoutBuyerUpcomingGrid;




import React, { useState, useEffect } from 'react';
import image from '../../../assets/offers_2.png';
import image1 from '../../../assets/offers_3.png';
import image3 from '../../../assets/offers_1.png';
import next from '../../../assets/Next_icon.png';
import previous from '../../../assets/Previous_icon.png';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import Pagination from '../../Pagination';
import { useSelector } from 'react-redux';
import { fetchOrderByStatus } from '../../../Api/OrderApi';

const LayoutBuyerUpcomingGrid = () => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);

    const getOrders = useSelector((state) => state.order.getOrder);
    const [Buyergrids, setBuyerGrids] = useState([]);
    const user = useSelector((state) => state.user.user)
    console.log("Cancelled", Buyergrids);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetchOrderByStatus(user.customerId);
                const filteredOrders = res
                    .filter((Ordergrid) => Ordergrid.orderedProductStatusId === 3) // Only include orders with orderStatusId = 5
                    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

                setBuyerGrids(filteredOrders); // Update state with filtered orders
                console.log("responseUp", filteredOrders)
                setCurrentPage(1); // Reset to the first page if needed
            } catch (error) {
                setError(error);
            }
        };

        fetchOrders();
    }, [getOrders]);

    console.log("Cancelled Orders", Buyergrids);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Buyergrids.slice(indexOfFirstItem, indexOfLastItem);

    const [expandedItemIndex, setExpandedItemIndex] = useState(null);
    const totalPages = Math.ceil(Buyergrids.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const toggleItemDetails = (index) => {
        setExpandedItemIndex(expandedItemIndex === index ? null : index);
    };

    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/detailspage/:id");
    };

    console.log("currentItems", currentItems)

    return (
        <div className='w-full h-[80vh] mt-4 overflow-y-auto'>
            <div className='flex flex-col mx-5'>
                <div className='flex justify-between'>
                    <h1 className='text-xl text-blue-900 font-semibold mt-4'>Upcoming Deliveries</h1>
                    {/* <div className="relative flex mb-9">
                        <input
                            type="text"
                            placeholder="Search Product....."
                            className="border rounded-xl h-10 w-64 text-left px-8 gap-2"
                        />
                        <CiSearch className="absolute left-2 top-3 text-gray-400 " />
                    </div> */}
                </div>
                <div className='w-full'>
                    {currentItems.map((Ordergrid, index) => (
                        <div key={index} className='pb-4 border rounded-lg shadow-lg justify-around mb-4 flex'>
                            <div>
                                <img src={Ordergrid.imageUrl}  className='w-36 h-28 cursor-pointer p-2' onClick={handleclick} />
                                <p>Upcoming Date :<span className='text-blue-500 text-sm'>
                                    {new Date(Ordergrid.upcomingDate)
                                        .toLocaleDateString("en-US", {
                                            month: "2-digit",
                                            day: "2-digit",
                                            year: "numeric",
                                        })
                                        .replace(/\//g, "-")}
                                </span></p>
                            </div>
                            <div className='flex flex-col mt-2 ml-4'>
                                <p className='text-base font-semibold'>Item Details</p>
                                <p className="font-bold text-blue-900  w-32 text-sm">{Ordergrid.productName}</p>

                                {/* <p className='text-base font-semibold flex flex-wrap'>{Ordergrid?.productDescription}</p> */}
                                <p className='text-sm w-48'>
                                     {expandedItemIndex === index
                                         ? Ordergrid.productDescription
                                         : Ordergrid.productDescription.slice(0, 100) + '...'}
                                     <button
                                         onClick={() => toggleItemDetails(index)}
                                         className='text-blue-500 ml-2'
                                     >
                                         {expandedItemIndex === index ? 'See Less' : 'See More'}
                                     </button>
                                 </p>
                            </div>
                            <div className='mt-2 ml-4'>
                                <div>
                                <span className='text-base font-semibold'>Package </span>
                                <p>{Ordergrid.packCondition}{" "}</p>
                                </div>
                                <div>
                                <span className='text-base font-semibold'>Quantity </span>
                                <p>{Ordergrid.quantity}</p>
                                </div>

                            </div>
                            <div className='mt-2 ml-4'>
                                <span className='text-base font-semibold'>Unit Price </span>
                                <p>${Ordergrid?.pricePerProduct?.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination
                    indexOfFirstItem={indexOfFirstItem}
                    indexOfLastItem={indexOfLastItem}
                    productList={Buyergrids}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default LayoutBuyerUpcomingGrid;

