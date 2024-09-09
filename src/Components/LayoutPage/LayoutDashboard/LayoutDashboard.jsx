// import React, { useState } from "react";
// import { Link } from "react-router-dom";


// import next from '../../../assets/Next_icon.png'
// import previous from '../../../assets/Previous_icon.png';
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import search from "../../../assets/search1.png";
// // import { useNavbarContext } from "./NavbarContext";
// import { useNavbarContext } from '../../../Components/NavbarContext'
// import { useNavigate } from "react-router-dom";
// import emptyHeart from '../../../assets/Wishlist1_icon.png'
// import filledHeart from  '../../../assets/wishlist2_icon.png'
// // import filter from "../assets/Icons/filter_icon.png";
// import image1 from '../../../assets/offers_1.png'
// import image2 from "../../../assets/offers_2.png";
// import image3 from "../../../assets/offers_3.png";
// import cart from "../../../assets/cartw_icon.png";
// import time from '../../../assets/Expicon.png'
// import './LayoutDashboard'

// function LayoutDashboard ({ topMargin, addCart, wishList }) {
//   const { pop, setPop } = useNavbarContext();
//   const navigate = useNavigate();
//   const images = Array(115).fill(image1);
//   const itemsPerPage = 12;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favoriteItems, setFavoriteItems] = useState({});
//   const [quantities, setQuantities] = useState(
//     Array(images.length).fill(1)
//   );

//   const products = [
//     {
//       src: image2,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image1,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image2,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image3,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image1,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image2,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image3,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '3/2040',
//       src1: time,
//     },
//     {
//       src: image1,
//       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
//       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
//       package: "( EA)",
//       package1: 'Original Package-Sealed',
//       price: "$50.99",
//       Date: '2/2044',
//       src1: time,
//     },

//   ];

//   const handleClose = (event) => {
//     event.stopPropagation();
//     console.log("Clicked to close Items");
//     setPop(false);
//   };

//   function handleCart(index) {
//     const prolist = {
//       id: index,
//       src: image3[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     addCart(prolist);
//   }

//   function handleClick(index) {
//     setFavoriteItems((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//     const prolist = {
//       id: index,
//       src: images[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     wishList(prolist);
//   }

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = newQuantity;
//     setQuantities(updatedQuantities);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));


//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "black",
//     border: "1px solid gray",
//     borderRadius: "5px",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   return (
//     <div className="w-full overflow-scroll mt-2 ml-4 h-full">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
//         <div className="flex">
//           <div className="flex gap-1 ">
//             {/* <img src={filter} className="w-5 h-4" />
//             <p className="text-white">Filter</p> */}
//             <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
//               <option>Discounted Price Low to High</option>
//               <option>Discounted Price High to Low</option>
//               <option>Posted date : Old to Latest</option>
//               <option>Show Prescription Products First</option>
//               <option>Show OTC Products First</option>
//               <option>Discount Percentage Low to High</option>
//               <option>Discounted Percentage High to Low</option>
//               <option>Expiry date : Short to Long</option>
//               <option>Expiry date : Long to Short</option>
//               <option>Name : Ascending (A-Z)</option>
//               <option>Name : Decending (Z-A)</option>
//               <option>Strength Low to High</option>
//               <option>Strength Hign to Low</option>
//             </select>
//           </div>
//           {/* <div>
//             <Search>
//               <SearchIconWrapper>
//                 <img src={search} className="w-6" />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </div> */}
//         </div>
//       </div>

//       <div className="flex items-center justify-center mt-5">
//         <div className="">
//           <div className="flex flex-col">


//             {/* <div className="w-full flex flex-col"> */}
//             <div className="flex flex-col justify-between xl:w-full xl:flex xl:justify-evenly 2xl:p-0 2xl:m-0 2xl:justify-evenly">
//               {products.map((product, index) => (
//                 // <div key={index}
//                 //   className="w-screen flex justify-evenly p-4 border shadow-lg rounded-md  mb-4
//                 //   "
//                 // >
//                 <div
//                   key={index}
//                   className="flex p-4 border w-[95%] shadow-lg rounded-md  mb-4 lg:w-[100%]  lg:justify-evenly xl:w-full xl:flex xl:justify-evenly 2xl:w-screen 2xl:flex 2xl:justify-evenly"
//                 >
//                   <div className="flex flex-col mx-2 cursor-pointer">
//                     <p></p>
//                     <img
//                       src={product.src}
//                       className="w-36 p-2 rounded-lg h-28 bg-slate-200 "
//                       alt="Product"
//                     />
//                   </div>

//                   <div className="flex flex-col mx-3">
//                     <p className="font-semibold">Item Details</p>
//                     <div className="mt-2">
//                       <p className="font-semibold">{product.Details}</p>
//                       <p className="text-xs mt-1">{product.Details1}</p>
//                       <div className="flex mt-1 gap-2 ">
//                         <img src={product.src1} className="w-5 h-5" />
//                         <div className="flex gap-2 ">
//                           <p>Exp.Date :</p>
//                           <p className="font-semibold">{product.Date}</p>
//                         </div>
//                       </div>

//                     </div>
//                   </div>

//                   <div className="flex flex-col mx-3">
//                     <p className="font-semibold">Package Details</p>
//                     <div className="mt-2">
//                       <p className=" text-red-500 font-semibold">{product.package}</p>
//                       <p className="text-xs mt-1">{product.package1}</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col mx-3">
//                     <p className="font-semibold">Unit Price</p>
//                     <div className="mt-2">
//                       <p className="font-semibold ">{product.price}</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col mx-3">
//                     <p className="font-semibold">Quantity</p>
//                     <div className="my-2">
//                       <input
//                         type="number"
//                         value={quantities[index]}
//                         onChange={(e) =>
//                           handleQuantityChange(index, Number(e.target.value))
//                         }
//                         className="text-xl border rounded-lg p-1 w-10 h-8"
//                         min="1"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex  flex-col mx-3 items-center gap-2 justify-between">
//                     <img
//                       src={favoriteItems[index] ? filledHeart : emptyHeart}
//                       alt="Wishlist"
//                       className="w-6 h-6 cursor-pointer"
//                       onClick={() => handleClick(index)}
//                     />
//                     <div className="flex h-8 w-16 bg-blue-900 text-white items-center justify-center gap-1 rounded-md p-2">
//                       <img src={cart} className="w-5 h-5 cursor-pointer" alt="Cart" />
//                       <button
//                         className="font-semibold"
//                         onClick={() => handleCart(index)}
//                       >
//                         ADD
//                       </button>
//                     </div>
//                   </div>


//                   {/* <div className="flex flex-col ">
//                     <div className="flex justify-between items-center">
//                       <p></p>
//                       <p className="font-semibold">Item Details</p>
//                       <p className="font-semibold">Package Details</p>
//                       <p className="font-semibold">Unit Price</p>
//                       <p className="font-semibold">Quantity</p>
//                       <p></p>
//                     </div>

//                     <div className="flex justify-between p-2 mt-2">
//                       <img
//                         src={product.src}
//                         className="w-28 h-20"
//                         alt="Product"
//                       />
//                       <div className="w-72 ">
//                         <p>{product.Details}</p>
//                       </div>
//                       <p className="w-60">{product.package}</p>
//                       <p className="w-36 ">{product.price}</p>
//                       <input
//                         type="number"
//                         value={quantities[index]}
//                         onChange={(e) =>
//                           handleQuantityChange(index, Number(e.target.value))
//                         }
//                         className="text-xl border rounded-lg p-1 w-9 h-7"
//                         min="1"
//                       />
//                       <div className="flex  flex-col items-center gap-2">
//                         <img
//                           src={favoriteItems[index] ? filledHeart : emptyHeart}
//                           alt="Wishlist"
//                           className="w-6 h-6 cursor-pointer"
//                           onClick={() => handleClick(index)}
//                         />
//                         <div className="flex h-8 w-16 bg-blue-900 text-white items-center justify-center gap-1 rounded-md p-2">
//                           <img src={cart} className="w-5 h-5" alt="Cart" />
//                           <button
//                             className="font-semibold"
//                             onClick={() => handleCart(index)}
//                           >
//                             ADD
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end my-2">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={previous} className="w-2" alt="Previous" />
//         </button>
//         <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={next} className="w-2" alt="Next" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LayoutDashboard;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // import next from '../../../assets/Next_icon.png'
// // import previous from '../../../assets/Previous_icon.png';
// // import { styled, alpha } from "@mui/material/styles";
// // import InputBase from "@mui/material/InputBase";
// // import search from "../../../assets/search1.png";
// // // import { useNavbarContext } from "./NavbarContext";
// // import { useNavbarContext } from '../../../Components/NavbarContext'
// // import { useNavigate } from "react-router-dom";
// // import emptyHeart from '../../../assets/Wishlist1_icon.png'
// // import filledHeart from  '../../../assets/wishlist2_icon.png'
// // // import filter from "../assets/Icons/filter_icon.png";
// // import image1 from '../../../assets/offers_1.png'
// // import image2 from "../../../assets/offers_2.png";
// // import image3 from "../../../assets/offers_3.png";
// // import cart from "../../../assets/cartw_icon.png";
// // import time from '../../../assets/Expicon.png'

// // function LayoutDashboard ({ topMargin, addCart, wishList }) {
// //   const { pop, setPop } = useNavbarContext();
// //   const navigate = useNavigate();
// //   const images = Array(115).fill(image1);
// //   const itemsPerPage = 12;
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [favoriteItems, setFavoriteItems] = useState({});
// //   const [quantities, setQuantities] = useState(
// //     Array(images.length).fill(1)
// //   );

// //   const products = [
// //     {
// //       src: image2,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image1,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image2,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image3,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image1,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image2,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image3,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '3/2040',
// //       src1: time,
// //     },
// //     {
// //       src: image1,
// //       Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
// //       Details1: 'STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments',
// //       package: "( EA)",
// //       package1: 'Original Package-Sealed',
// //       price: "$50.99",
// //       Date: '2/2044',
// //       src1: time,
// //     },

// //   ];

// //   const handleClose = (event) => {
// //     event.stopPropagation();
// //     console.log("Clicked to close Items");
// //     setPop(false);
// //   };

// //   function handleCart(index) {
// //     const prolist = {
// //       id: index,
// //       src: image3[index],
// //       price: "$50.99",
// //       rate: "SKU 6545555",
// //       rates: "UPN member price:",
// //       ratesupn: "$45.00",
// //     };
// //     addCart(prolist);
// //   }

// //   function handleClick(index) {
// //     setFavoriteItems((prevState) => ({
// //       ...prevState,
// //       [index]: !prevState[index],
// //     }));
// //     const prolist = {
// //       id: index,
// //       src: images[index],
// //       price: "$50.99",
// //       rate: "SKU 6545555",
// //       rates: "UPN member price:",
// //       ratesupn: "$45.00",
// //     };
// //     wishList(prolist);
// //   }

// //   const handleQuantityChange = (index, newQuantity) => {
// //     const updatedQuantities = [...quantities];
// //     updatedQuantities[index] = newQuantity;
// //     setQuantities(updatedQuantities);
// //   };

// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

// //   const totalPages = Math.ceil(images.length / itemsPerPage);

// //   const handleNextPage = () => {
// //     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
// //   };

// //   const handlePreviousPage = () => {
// //     setCurrentPage((prev) => Math.max(prev - 1, 1));
// //   };

// //   const Search = styled("div")(({ theme }) => ({
// //     position: "relative",
// //     borderRadius: theme.shape.borderRadius,
// //     backgroundColor: alpha(theme.palette.common.white, 0.15),
// //     "&:hover": {
// //       backgroundColor: alpha(theme.palette.common.white, 0.25),
// //     },
// //     marginLeft: 0,
// //     width: "100%",
// //     [theme.breakpoints.up("sm")]: {
// //       marginLeft: theme.spacing(1),
// //       width: "auto",
// //     },
// //   }));


// //   const SearchIconWrapper = styled("div")(({ theme }) => ({
// //     padding: theme.spacing(0, 2),
// //     height: "100%",
// //     position: "absolute",
// //     pointerEvents: "none",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   }));

// //   const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //     color: "black",
// //     border: "1px solid gray",
// //     borderRadius: "5px",
// //     width: "100%",
// //     "& .MuiInputBase-input": {
// //       padding: theme.spacing(1, 1, 1, 0),
// //       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //       transition: theme.transitions.create("width"),
// //       [theme.breakpoints.up("sm")]: {
// //         width: "12ch",
// //         "&:focus": {
// //           width: "20ch",
// //         },
// //       },
// //     },
// //   }));

// //   return (
// //     <div className="w-[95%] overflow-scroll mt-2  ml-4 h-full ">
// //       <div className="flex justify-between">
// //         <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
// //         <div className="flex">
// //           <div className="flex gap-1 ">
// //             {/* <img src={filter} className="w-5 h-4" />
// //             <p className="text-white">Filter</p> */}
// //             <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
// //               <option>Discounted Price Low to High</option>
// //               <option>Discounted Price High to Low</option>
// //               <option>Posted date : Old to Latest</option>
// //               <option>Show Prescription Products First</option>
// //               <option>Show OTC Products First</option>
// //               <option>Discount Percentage Low to High</option>
// //               <option>Discounted Percentage High to Low</option>
// //               <option>Expiry date : Short to Long</option>
// //               <option>Expiry date : Long to Short</option>
// //               <option>Name : Ascending (A-Z)</option>
// //               <option>Name : Decending (Z-A)</option>
// //               <option>Strength Low to High</option>
// //               <option>Strength Hign to Low</option>
// //             </select>
// //           </div>
// //           {/* <div>
// //             <Search>
// //               <SearchIconWrapper>
// //                 <img src={search} className="w-6" />
// //               </SearchIconWrapper>
// //               <StyledInputBase
// //                 placeholder="Search…"
// //                 inputProps={{ "aria-label": "search" }}
// //               />
// //             </Search>
// //           </div> */}
// //         </div>
// //       </div>

// //       <div className="w-[95%] mt-5">
// //         <div className="">
// //           <div className="flex flex-col">


// //             <div className="flex flex-col  justify-between">
// //               {products.map((product, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex p-4 border shadow-lg rounded-md  mb-4"
// //                 >
// //                   <div className="flex flex-col mx-2 cursor-pointer">
// //                     <p></p>
// //                     <img
// //                       src={product.src}
// //                       className="w-36 p-2 rounded-lg h-28 bg-slate-200 "
// //                       alt="Product"
// //                     />
// //                   </div>

// //                   <div className="flex flex-col mx-3">
// //                     <p className="font-semibold">Item Details</p>
// //                     <div className="mt-2">
// //                       <p className="font-semibold">{product.Details}</p>
// //                       <p className="text-xs mt-1">{product.Details1}</p>
// //                       <div className="flex mt-1 gap-2 ">
// //                         <img src={product.src1} className="w-5 h-5" />
// //                         <div className="flex gap-2 ">
// //                           <p>Exp.Date :</p>
// //                           <p className="font-semibold">{product.Date}</p>
// //                         </div>
// //                       </div>

// //                     </div>
// //                   </div>

// //                   <div className="flex flex-col mx-3">
// //                     <p className="font-semibold">Package Details</p>
// //                     <div className="mt-2">
// //                       <p className=" text-red-500 font-semibold">{product.package}</p>
// //                       <p className="text-xs mt-1">{product.package1}</p>
// //                     </div>
// //                   </div>

// //                   <div className="flex flex-col mx-3">
// //                     <p className="font-semibold">Unit Price</p>
// //                     <div className="mt-2">
// //                       <p className="font-semibold ">{product.price}</p>
// //                     </div>
// //                   </div>

// //                   <div className="flex flex-col mx-3">
// //                     <p className="font-semibold">Quantity</p>
// //                     <div className="my-2">
// //                       <input
// //                         type="number"
// //                         value={quantities[index]}
// //                         onChange={(e) =>
// //                           handleQuantityChange(index, Number(e.target.value))
// //                         }
// //                         className="text-xl border rounded-lg p-1 w-10 h-8"
// //                         min="1"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="flex  flex-col mx-3 items-center gap-2 justify-between">
// //                     <img
// //                       src={favoriteItems[index] ? filledHeart : emptyHeart}
// //                       alt="Wishlist"
// //                       className="w-6 h-6 cursor-pointer"
// //                       onClick={() => handleClick(index)}
// //                     />
// //                     <div className="flex h-8 w-16 bg-blue-900 text-white items-center justify-center gap-1 rounded-md p-2">
// //                       <img src={cart} className="w-5 h-5 cursor-pointer" alt="Cart" />
// //                       <button
// //                         className="font-semibold"
// //                         onClick={() => handleCart(index)}
// //                       >
// //                         ADD
// //                       </button>
// //                     </div>
// //                   </div>


// //                   {/* <div className="flex flex-col ">
// //                     <div className="flex justify-between items-center">
// //                       <p></p>
// //                       <p className="font-semibold">Item Details</p>
// //                       <p className="font-semibold">Package Details</p>
// //                       <p className="font-semibold">Unit Price</p>
// //                       <p className="font-semibold">Quantity</p>
// //                       <p></p>
// //                     </div>

// //                     <div className="flex justify-between p-2 mt-2">
// //                       <img
// //                         src={product.src}
// //                         className="w-28 h-20"
// //                         alt="Product"
// //                       />
// //                       <div className="w-72 ">
// //                         <p>{product.Details}</p>
// //                       </div>
// //                       <p className="w-60">{product.package}</p>
// //                       <p className="w-36 ">{product.price}</p>
// //                       <input
// //                         type="number"
// //                         value={quantities[index]}
// //                         onChange={(e) =>
// //                           handleQuantityChange(index, Number(e.target.value))
// //                         }
// //                         className="text-xl border rounded-lg p-1 w-9 h-7"
// //                         min="1"
// //                       />
// //                       <div className="flex  flex-col items-center gap-2">
// //                         <img
// //                           src={favoriteItems[index] ? filledHeart : emptyHeart}
// //                           alt="Wishlist"
// //                           className="w-6 h-6 cursor-pointer"
// //                           onClick={() => handleClick(index)}
// //                         />
// //                         <div className="flex h-8 w-16 bg-blue-900 text-white items-center justify-center gap-1 rounded-md p-2">
// //                           <img src={cart} className="w-5 h-5" alt="Cart" />
// //                           <button
// //                             className="font-semibold"
// //                             onClick={() => handleCart(index)}
// //                           >
// //                             ADD
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div> */}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex justify-end my-2">
// //         <button
// //           onClick={handlePreviousPage}
// //           disabled={currentPage === 1}
// //           className="mx-2 px-4 border p-2 text-white rounded-lg"
// //         >
// //           <img src={previous} className="w-2" alt="Previous" />
// //         </button>
// //         <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
// //           {currentPage} of {totalPages}
// //         </span>
// //         <button
// //           onClick={handleNextPage}
// //           disabled={currentPage === totalPages}
// //           className="mx-2 px-4 border p-2 text-white rounded-lg"
// //         >
// //           <img src={next} className="w-2" alt="Next" />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LayoutDashboard;






import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useNavbarContext } from "../../NavbarContext";
import Notification from "../../../Components/Notification"; // Import Notification component

import other from "../../../assets/compare1_Icon.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import Expicon from "../../../assets/Expicon.png";
import search from "../../../assets/search1.png";
import nature from "../../../assets/img1.png";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";

function LayoutDashboard({
  topMargin,
  addCart,
  wishList,
  quantities,
  setQuantities,
}) {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState({});
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  console.log("cart--->",cart)

  const [wishlistProductIDs, setWishlistProductIDs] = useState([]);

  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setWishlistProductIDs(wishlist.map((wishItem) => wishItem.product.productID));
    }
  }, [wishlist]);

  // const [wishlistProductIDs, setwishlistProductIDs] = useState(
  //   wishlist.map((wishItem) => wishItem.product.productID)
  // );
  // const getWishlistIdByProductID = (productID) => {
  //   const wishlistItem = wishlist.find(
  //     (item) => item.product.productID === productID
  //   );
  //   return wishlistItem ? wishlistItem.wishListId : null;
  // };


  const products = useSelector((state) => state.product.Products);
  const [productList, setproductList] = useState(products);
  useEffect(() => {
    if (products) {
      const updatedProducts = products.map((product) => ({
        ...product,
        CartQuantity: 1, // Set initial quantity to 1 for all products
      }));
      setproductList(updatedProducts);
    }
  }, [products]);

  const handleCart = async (productID, Quantity) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: Quantity,
      isActive: 1,
    };

    try {
      await addCartApi(cartData);
      
    } catch (error) {
      console.error("Error adding product to cart:", error);
      
    }
  };
  const handleClick = async (productID) => {
    if (wishlistProductIDs.includes(productID)) {
      setwishlistProductIDs(
        wishlistProductIDs.filter((id) => id !== productID)
      );
      await removeFromWishlistApi(getWishlistIdByProductID(productID));
    } else {
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1,
      };
      await addToWishlistApi(wishListData);
    }
  };
  // const handleClick = async (index) => {
  //   setFavoriteItems(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));

  //   const jsondata = {
  //     wishListId: "0",
  //     productID: productList[index].productID,
  //     customerId: customerId,
  //     isActive: 1
  //   };

  //   try {
  //     const response = await fetch(
  //       'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/Add',
  //       {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(jsondata),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetails = await response.json();
  //       throw new Error(
  //         `Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
  //       );
  //     }

  //     const result = await response.json();
  //     fetchWishListData();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const handleQuantityChange = (index, newQuantity) => {
    // if (newQuantity) {
      const quantity = Math.max(1, newQuantity);
      setproductList((prev) => {
        const updatedList = [...prev];
        updatedList[index] = {
          ...updatedList[index],
          CartQuantity: quantity,
        };
        return updatedList;
      });
    // }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleProductDetails = (productID, product) => {
    navigate(`/detailspage/${productID}`);
  };
  return (
    <div className="w-[95%] mt-4 ml-4 h-full overflow-y-scroll">
      {notification.show && <Notification show={notification.show} message={notification.message} />}

      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
        <div className="flex">
          <div className="flex gap-1">
            <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
              <option>Discounted Price Low to High</option>
              <option>Discounted Price High to Low</option>
              <option>Posted date : Old to Latest</option>
              <option>Show Prescription Products First</option>
              <option>Show OTC Products First</option>
              <option>Discount Percentage Low to High</option>
              <option>Discounted Percentage High to Low</option>
              <option>Expiry date : Short to Long</option>
              <option>Expiry date : Long to Short</option>
              <option>Name : Ascending (A-Z)</option>
              <option>Name : Decending (Z-A)</option>
              <option>Strength Low to High</option>
              <option>Strength High to Low</option>
            </select>
          </div>
          <div>
            <Search>
              <SearchIconWrapper>
                <img src={search} className="w-6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-between">
              {productList.length > 0 ? (
                productList.map((product, index) => (
                  <div
                    key={index}
                    className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
                  >
                    <div className="flex flex-col mx-2">
                      <img
                        src={product.productGallery.imageUrl}
                        className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
                        alt="Product"
                        onClick={() =>
                          handleProductDetails(product.productID, product)
                        }
                      />
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Item Details</p>
                      <div className="mt-2">
                        <p className="font-semibold">{product.productName}</p>

                        <p className="text-xs mt-1 w-60">
                          {showMore[index]
                            ? product.productDescription
                            : `${product.productDescription.slice(0, 50)}...`}
                          {product.productDescription.length > 50 && (
                            <button
                              className="text-blue-500 ml-1"
                              onClick={() => toggleShowMore(index)}
                            >
                              {showMore[index] ? "See Less" : " More details"}
                            </button>
                          )}
                        </p>
                        <div className="flex w-full mt-1 gap-1">
                          <img src={Expicon} className="w-6 h-6" />
                          <div className="flex flex-col">
                            <p>Exp.Date :</p>
                            <p className="font-semibold">
                              {product.expiryDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Package Details</p>
                      <div className="mt-2">
                        <p className="text-red-500 font-semibold">
                          {product.package}
                        </p>
                        <p className="text-base mt-1">
                          {product.packCondition}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Unit Price</p>
                      <div className="mt-2">
                        <p className="font-semibold">${product.salePrice}</p>
                      </div>
                    </div>

                    <div className="flex flex-col mx-3">
                      <p className="font-semibold">Quantity</p>
                      <div className="mt-2 flex">
                        <input
                          type="number"
                          disabled={
                            cart.some(
                              (item) =>
                                item.product.productID == product.productID
                            ) === 1
                          }
                          value={product.CartQuantity
                            // cart.some(
                            //     (item) =>
                            //         item.product.productID === product.productID
                            //   )
                            //     ? cart.find(
                            //         (item) =>
                            //             item.product.productID === product.productID
                            //       ).quantity
                            //       : product.CartQuantity
                              }
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 border rounded-md text-center"
                          min="1"
                        />
                      </div>
                    </div>

                    {/* Wishlist */}
                    <div className="flex flex-col items-center justify-between">
                      <div className="mt-2">
                        <img
                          src={
                            wishlistProductIDs.includes(product.productID)
                              ? filledHeart
                              : emptyHeart
                          }
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleClick(product.productID)}
                          alt="Wishlist Icon"
                        />
                      </div>

                      {/* Add to Cart */}
                      {/* {cart.some(
                        (item) => item.product.productID == product.productID
                      ) == 0 ? ( */}
                        <div
                          onClick={() =>
                            handleCart(product.productID, product.CartQuantity)
                          }
                          className="flex text-white h-[40px] cursor-pointer px-2 rounded-lg bg-blue-900 mx-3 justify-center items-center"
                        >
                          <div className="mr-1">
                            <img
                              src={addcart}
                              className="w-6 h-6 cursor-pointer"
                              alt="Add to Cart Icon"
                            />
                          </div>
                          <p className="font-semibold">{"Add to Cart"}</p>
                        </div>
                      {/* ) : ( */}
                        {/* <div className="flex text-white cursor-pointer h-[40px] px-2 rounded-lg bg-sky-600 mx-3 justify-center items-center">
                          <div className="mr-1">
                            <img
                              src={addcart}
                              className="w-6 h-6 "
                              alt="Add to Cart Icon"
                            />
                          </div>
                          <p className="font-semibold">{"Added Cart"}</p>
                        </div> */}
                      {/* )} */}
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
