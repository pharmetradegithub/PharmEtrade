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





import React, { useState } from 'react';
import LayoutDashboardgrid from '../LayoutDashboard/LayoutDashboardGrid'
const LayoutDashboard = () => {

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isPercentageShown, setIsPercentageShown] = useState(false);

// Handle Latest button click to show percentage or close the grid
const handleClick = () => {
  if (isGridOpen) {
    // If grid is open, close it
    setIsGridOpen(false);
    setIsPercentageShown(false);
  } else if (!isPercentageShown) {
    // Show percentage first
    setIsPercentageShown(true);
  } else {
    // If percentage is shown, open the grid
    setIsGridOpen(true);
  }
};

 // Handle closing the grid
 const closeGrid = () => {
  setIsGridOpen(false);
  setIsPercentageShown(false); // Reset everything when the grid is closed
};

   // Handle percentage click to show the grid
   const handlePercentageClick = () => {
    setIsGridVisible(true);
  };
// grid data
const products = [
  {
    id: "000",
    thumbnail: "D061D23",
    name: "Generic Medicine",
    attributeSet: "350",
    productStatus: "",
    status: "",
    type: "View Order",
  },
  {
    id: "001",
    thumbnail: "D061D23",
    name: "Another Medicine",
    attributeSet: "250",
    productStatus: "",
    status: "",
    type: "View Order",
  },
  {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
  {
      id: "001",
      thumbnail: "D061D23",
      name: "Another Medicine",
      attributeSet: "250",
      productStatus: "",
      status: "",
      type: "View Order",
    },
];


  const details = [
    { totalOrder:10,label: "Pending", percentage: 85, color: "red" }, // Red
    { label: "Processing", percentage: 65, color: "orange" }, // Yellow
    { label: "Completed", percentage: 10, color: "green" }, // Green
 
  ];

  const productdetails =[
    {totalproducts:9,heading:"Top Selling Products",label:"ALEGRA 24 HOUR",number:5,sales:"Sales",text:"DAYQUIL LIQ 80Z",quantity:3},
    
  ]
  const customerdetails =[
    {totalcutomers:200,label:"This month customer count",Quantity:0,text:"Last month customer count", number:0}
  ]

  const [selectedOption, setSelectedOption] = useState('Yearly'); // Default option

  // Handle dropdown selection
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Images for each option (you can replace these with actual image URLs or paths)
  const imageMap = {
    Yearly: 'https://th.bing.com/th/id/OIP.CS3OjmHCzVZEsK3JNkHNyQHaE8?w=222&h=180&c=7&r=0&o=5&pid=1.7',
    Monthly: 'https://th.bing.com/th/id/OIP.TKhbxQD2DPdLgz6sBKPUuQAAAA?w=183&h=183&c=7&r=0&o=5&pid=1.7',
    Weekly: 'https://th.bing.com/th/id/OIP.Kr5OwT-qB9UclxQ8uzsYgwHaJl?w=122&h=180&c=7&r=0&o=5&pid=1.7',
    Daily: 'https://th.bing.com/th/id/OIP.aoXhfbHqx42fr7fUzSHh4gHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7',
  };

  const CircleProgress = ({ percentage, color }) => {
    const radius = 20;
    const strokeWidth = 4;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    return (
      <svg width={50} height={50}>
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 25 25)" // Start progress from the top
        />
         {/* Percentage Text */}
         <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="10"
          fill={color}
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] h-full mt-8">
        <div className="flex justify-between">
          <h1 className="text-[22px] text-blue-900  font-semibold">Seller Dashboard</h1>
        </div>

        <div className="flex flex-col ">
          <div className='flex justify-normal flex-wrap  gap-4 w-full mt-8 border p-4 rounded-lg shadow-lg'>
           
            <div className='flex flex-col items-center justify-center ml-7'>
          <h1 className='text-xl font-semibold'>Order(s)</h1>
          <p className='text-3xl '>10</p>
          </div>
          <div className='flex gap-4 ml-2 '>
          {details.map((detail, index) => (
            <div className='flex gap-4'>
              
             {/* <h1 className='text-3xl  items-center text-center  justify-start flex'>{detail.totalOrder}</h1> */}
            <div
              key={index}
              className="bg-white w-48 rounded-lg shadow-xl   h-28 p-4 flex flex-col justify-between"
              style={{ borderBottom: `4px solid ${detail.color}` }} // Set bottom border color
            >
              
              <div className="flex justify-between items-center">
                <h1>{detail.label}</h1>
               
              </div>
              <div className="flex justify-between">
              <p className='items-center flex justify-center text-3xl mt-4 font-semibold'>{detail.percentage}%</p>
                <CircleProgress percentage={detail.percentage} color={detail.color} />
              </div>
            </div>
            </div>
          ))}
          </div>
          {/* <div className='w-48 h-28 bg-white rounded-lg shadow-xl   border-b-4 border-b-blue-900'>
          <h1 className=' cursor-pointer hover:text-red-500 items-center justify-center flex font-semibold text-xl text-center p-10'
          onClick={handleClick}>
                {isGridOpen ? 'Close Latest' : 'Latest'} 
                </h1>
          </div> */}

<div
            className="w-48 h-28 bg-white rounded-lg shadow-xl border-b-4 border-b-blue-900 flex items-center justify-center cursor-pointer"
            onClick={handleClick}
          >
            {!isPercentageShown ? (
              <h1 className="hover:text-red-500 font-semibold text-xl text-center">
                Latest
              </h1>
            ) : !isGridOpen ? (
              <h1 className="text-blue-900 font-semibold text-3xl text-center">
                85%
              </h1> // Example percentage
            ) : (
              <h1 className="hover:text-red-500 font-semibold text-xl text-center">
                Close Latest
              </h1>
            )}
          </div>
          

          </div>

          <div className='flex flex-wrap gap-6 w-full mt-8 border rounded-lg shadow-lg p-4'>
          {/* products */}
           
            {/* <h1 className='text-xl font-semibold'> Product(s)</h1> */}
            <div className='flex flex-col items-center justify-center ml-4'>
          <h1 className='text-xl font-semibold'>Product(s)</h1>
          <p className='text-3xl '>9</p>
          </div>
            {/* <p>Top Selling Products</p> */}
           
            <div className=''>
              {productdetails.map((productdetail,index)=>(
                <div >
                  {/* <h1 className='text-3xl items-center justify-start text-center flex'>{productdetail.totalproducts}</h1> */}
                <div className='w-48 p-4  border rounded-lg shadow-lg  h-28 bg-white '>
                  <div className=''>
                  <h1 className='flex justify-center '>{productdetail.heading}</h1>
                  <p className='border mt-2'></p>
                  </div>
                  <div className='overflow-y-scroll h-10 '>
                    
                  <div className='flex justify-between mt-2  '>
                    <h1 className=' flex flex-wrap'> {productdetail.label}</h1>
                    <div className='flex flex-col'>
                    <p>{productdetail.number}</p>
                    <p>{productdetail.sales}</p>
                    </div>
                    </div>
                    <div className='flex justify-between  '>
                    <h1 className=' flex flex-wrap'> {productdetail.text}</h1>
                    <div className='flex flex-col '>
                    <p>{productdetail.quantity}</p>
                    <p>{productdetail.sales}</p>
                    </div>

                      </div>
                      <div className='flex justify-between mt-2  '>
                    <h1 className='flex flex-wrap'> {productdetail.label}</h1>
                    <div className='flex flex-col'>
                    <p>{productdetail.number}</p>
                    <p>{productdetail.sales}</p>
                    </div>
                    </div>
                      <div className='flex justify-between  '>
                    <h1 className=' flex flex-wrap'> {productdetail.text}</h1>
                    <div className='flex flex-col '>
                    <p>{productdetail.quantity}</p>
                    <p>{productdetail.sales}</p>
                    </div>

                      </div>
                      </div>
                    </div>
                    </div>
              ))}
            </div>

            {/* customers */}

            <div className=' flex gap-8'>
            <div className='flex flex-col items-center justify-center ml-5'>
          <h1 className='text-xl font-semibold'>Customers(s)</h1>
          <p className='text-3xl '>50</p>
          </div>
              <div   >
                {customerdetails.map((customerdetail,index)=>(
                  <div className='flex'>
                    {/* <h1 className='text-3xl items-center text-center -ml-5 justify-start flex'>{customerdetail.totalcutomers}</h1> */}
                  <div className='w-48 p-4 ml-8  border rounded-lg shadow-lg h-28 bg-white'>
                    <div className='flex border-b -mt-2'>
                    <h1> {customerdetail.label} :</h1>
                    <p className=''>{customerdetail.Quantity}</p>
                    </div>
            

                    <div className='flex '>
                    <h1> {customerdetail.text} :</h1>
                    < p className=''>{customerdetail.number}</p>
                    </div>
                    </div>
                    </div>
                ))}

              </div>
            </div>

          </div>
        </div>

{/* lifetime sales */}
<div className='flex flex-col  mt-8 gap-2'>

  <h1 className='text-2xl font-semibold text-blue-900'>Earnings</h1>
  <div className='flex gap-2'>
<div className='flex border bg-white gap-1 w-60 p-3 justify-center items-center rounded-lg shadow-lg '>
  <h1 className='text-xl'> Lifetime Sales  {" "}</h1>
  <span className='text-xl text-orange-500 ml-1'> $37.84</span>
</div>
{/* Totalpayout */}
<div>
  <div className='flex  gap-1  p-3  justify-between  rounded-lg shadow-lg w-72'>
   <div className='flex '>
    <h1 className='text-xl'>Total Payout    {"  "}</h1>
    <span className='text-xl text-orange-500 ml-1'> $0.00</span>
    </div>
    <div>
          <select value={selectedOption} onChange={handleOptionChange} className='border  rounded'>
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>

        {/* Display corresponding image below based on the dropdown selection */}
     
  </div>
</div>

{/* Activity */}
<div className='flex  gap-1  p-3  justify-between  rounded-lg shadow-lg w-60'>
  <h1 className='text-xl'>Acitivities</h1>
  <p className='bg-white text-sm h-6 items-center rounded-md justify-center flex p-1'>View All</p>
</div>
</div>
</div>

<div className='mt-5'>
        {selectedOption && (
          <div className='flex flex-col '>
            {/* <h1 className='text-xl mb-3'>{selectedOption} Report</h1> */}
            <img src={imageMap[selectedOption]} alt={`${selectedOption} Report`} className='w-[78%] h-56 rounded-lg shadow-lg' />
          </div>
        )}
      </div>

      <div className='mt-8'>
            {isGridOpen && (
              <LayoutDashboardgrid data={products} onClose={closeGrid} />
            )}
          </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
