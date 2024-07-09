// import React, { useState } from "react";
// import { FaAlignLeft } from "react-icons/fa";
// import { FaAlignJustify } from "react-icons/fa";
// import { FaAlignCenter } from "react-icons/fa";
// import { FaAlignRight } from "react-icons/fa";
// import { SlCamera } from "react-icons/sl";
// function ProductFields() {
//   const products = [
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "img",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "img",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "img",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//   ];

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleClick = () => {
//     setIsPopupVisible(true);
//   };
//   const handleremove = () => {
//     setIsPopupVisible(false);
//   };

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);

//     const files = e.dataTransfer.files;
//     if (files && files[0]) {
//       setSelectedImage(URL.createObjectURL(files[0]));
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   const [selectedOption, setSelectedOption] = useState("full");

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const [selectedProductOption, setSelectedProductOption] = useState("");

//   const handleProductOptionChange = (e) => {
//     setSelectedProductOption(e.target.value);
//   };

//   return (
//     <div className="w-full h-full justify-center flex items-center">
//       <div className="w-[95%]  h-full">
//         <div className="  flex flex-col my-8">
//           <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
//           <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
//         </div>
//         {/* section1 start */}

//         <div className="flex justify-between items-center text-gray-600 my-6 ">
//           <div className="flex flex-col">
//             <label className="text-base">
//               Category Specification :
//               <span className="text-red-600 text-2xl ">*</span>
//             </label>{" "}
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>Merchandise</option>
//               <option>OTC Product</option>
//               <option>Rx Product</option>
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Product Type:<span className="text-red-600 text-2xl ">*</span>
//             </label>
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>General</option>
//               <option>Customizable</option>
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Product Name:<span className="text-red-600 text-2xl ">*</span>
//             </label>{" "}
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>Default Category</option>
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Product Name:<span className="text-red-600 text-2xl ">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               NDC / UPC:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section1 end */}

//         {/* section2 start */}
//         <div className="flex justify-between items-center text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Brand Name:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Price ($) Name:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">UPN Member Price ($):</label>
//             <input
//               type="text"
//               id="Upn_Mem"
//               className="w-56 h-10 border-slate-300 border "
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Amount In Stock:<span className="text-red-600 text-2xl ">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Taxable:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>No</option>
//             </select>
//           </div>
//         </div>

//         {/* section2 end */}

//         {/* section3 start */}

//         <div className="flex justify-between items-baseline text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Sale Price ($):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base"> Sale Price Form:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">Sale Price To:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">Manufacturer:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Strength:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section3 end */}

//         {/* section4 start */}
//         <div className="flex  items-center text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Form:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex justify-center mx-8 flex-col">
//             <label className="text-base"> Lot Number:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base"> Expiration Date:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section4 end */}

//         {/* section5 start */}
//         <div>
//           <div className="text-gray-600 my-6 flex items-center">
//             <span className="text-base">Pack Quantity :</span>

//             <div className=" flex items-center">
//               <div>
//                 <input
//                   type="radio"
//                   id="full"
//                   name="option"
//                   value="full"
//                   checked={selectedOption === "full"}
//                   onChange={handleOptionChange}
//                   className=""
//                 />
//                 <label htmlFor="full">Full</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="partial"
//                   name="option"
//                   value="partial"
//                   checked={selectedOption === "partial"}
//                   onChange={handleOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="partial">Partial</label>
//               </div>
//             </div>

//             <input
//               type="text"
//               className="w-[30%] h-10 border-slate-300 border"
//             />
//             <label>EA</label>
//           </div>
//         </div>
//         {/* section5 end */}
//         {/* section6 start */}

//         <div>
//           <div className="text-gray-600 my-6 flex items-center">
//             <span className="text-base">Pack Type :</span>

//             {/* <input type="radio" className="ml-[2%]" /> {""}
//             <label className="text-base ml-3">ORIGINAL PACKAGE</label>
//             <input type="radio" className="ml-[2%]" />
//             <label className="text-base ml-3">
//               ORIGINAL PACKAGE - NON SEALED
//             </label> */}

//             <div className="flex items-center">
//               <div>
//                 <input
//                   type="radio"
//                   id="original"
//                   name="product"
//                   value="original"
//                   checked={selectedProductOption === "original"}
//                   onChange={handleProductOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="original">ORIGINAL PACKAGE</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="non-original"
//                   name="product"
//                   value="non-original"
//                   checked={selectedProductOption === "non-original"}
//                   onChange={handleProductOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="non-original">
//                   ORIGINAL PACKAGE - NON SEALED
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* section6 end */}
//         {/* section7 start */}
//         <div className="text-gray-600 my-6">
//           <div>
//             <span className="text-base">Pack Condition :</span>
//             <input type="checkbox" className="ml-[2%]" />
//             <label className="text-base ml-3">TORN PACKAGE LABEL</label>

//             <input type="checkbox" className="ml-[2%]" />
//             <label className="text-base ml-3">OTHER</label>

//             <input
//               type="text"
//               className="w-[30%] h-10 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section7 end */}

//         {/* paragraph start */}

//         <div className="flex ">
//           <div className="w-[90%]">
//             <div className="toolbar">
//               <button
//                 onClick={() => this.format("bold")}
//                 className="border border-slate-800 w-8"
//               >
//                 <b>B</b>
//               </button>
//               <button
//                 onClick={() => this.format("italic")}
//                 className="border border-slate-800 w-8"
//               >
//                 <i>I</i>
//               </button>
//               <button
//                 onClick={() => this.format("underline")}
//                 className="border border-slate-800 w-8"
//               >
//                 <i>U</i>
//               </button>
//               <button
//                 onClick={() => this.format("justifyLeft")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignLeft />
//               </button>
//               <button
//                 onClick={() => this.format("justifyCenter")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignCenter />
//               </button>
//               <button
//                 onClick={() => this.format("justifyRight")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignRight />
//               </button>
//               <button
//                 onClick={() => this.format("justifyFull")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignJustify />
//               </button>
//             </div>
//             {/* <div className="content" contentEditable={true}>
//           Enter your paragraph here...
//         </div> */}
//             <textarea type="text" />
//           </div>

//           <div>
//             <div className="toolbar">
//               <button
//                 onClick={() => this.format("bold")}
//                 className="border border-slate-800 w-8"
//               >
//                 <b>B</b>
//               </button>
//               <button
//                 onClick={() => this.format("italic")}
//                 className="border border-slate-800 w-8"
//               >
//                 <i>I</i>
//               </button>
//               <button
//                 onClick={() => this.format("underline")}
//                 className="border border-slate-800 w-8"
//               >
//                 <i>U</i>
//               </button>
//               <button
//                 onClick={() => this.format("justifyLeft")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignLeft />
//               </button>
//               <button
//                 onClick={() => this.format("justifyCenter")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignCenter />
//               </button>
//               <button
//                 onClick={() => this.format("justifyRight")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignRight />
//               </button>
//               <button
//                 onClick={() => this.format("justifyFull")}
//                 className="border border-slate-800 w-8"
//               >
//                 <FaAlignJustify />
//               </button>
//             </div>
//             <textarea type="text" className="" />
//           </div>
//         </div>
//         {/* paragraph end */}
//         {/* section 8 strt */}
//         <div className="flex justify-between items-baseline text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">
//               Uri Key: (Related to goggle search)
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-80 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Meta Title:(Related to google search)
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-80 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Meta Keywords:(Related to google search)
//             </label>
//             <textarea
//               type=""
//               id="product_name"
//               className=" w-80 h-14 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Meta Description:(Research to google search)
//             </label>
//             <textarea
//               type="area"
//               id="product_name"
//               className=" w-80 h-14 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section8 end */}
//         {/* section text are start */}

//         {/* section text area end */}

//         {/* section9 start */}
//         <div className="flex justify-between items-baseline text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Salt Composition:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">Height {""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Width{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Length{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base"> Weight{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section9 end */}

//         {/* table1 start */}

//         <div className="flex flex-col">
//           <label className="text-base">Tier Price:</label>
//           <div className="border rounded-md  bg-white mt-4">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-xl border-b">
//                   <th className=" px-4 py-2 text-left text-base h-11">
//                     Websites
//                   </th>
//                   <th className=" px-4 py-2 text-left text-base ">
//                     Customer Group
//                   </th>
//                   <th className="   px-4 py-2 text-base  text-left p-2">Qty</th>
//                   <th className="   px-4 py-2 text-base  text-left p-2">
//                     ($) Price
//                   </th>
//                   <th className=" px-4 py-2  text-base  text-left p-2 ">
//                     Action
//                   </th>
//                   <th className=" px-4 py-2    text-base  text-left p-2 ">
//                     <button
//                       className="border border-gray-950 bg-slate-600 text-white w-14"
//                       onClick={handleClick}
//                     >
//                       Add
//                     </button>{" "}
//                   </th>
//                 </tr>
//               </thead>
//               {isPopupVisible && (
//                 // <div>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <select className="px-4 py-2 text-left text-base h-11">
//                         <option className="px-4 py-2 text-left text-base h-11">
//                           All Websites
//                         </option>
//                         <option>Main Website</option>
//                       </select>
//                     </td>
//                     <td>
//                       <select className="px-4 py-2 text-left text-base h-11">
//                         <option className="px-4 py-2 text-left text-base h-11">
//                           All Groups
//                         </option>
//                         <option>Not Logged In</option>
//                         <option>General</option>
//                         <option>Prescription seller</option>
//                         <option>General Merchandise seller</option>
//                         <option>UPN Member</option>
//                       </select>
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         className="px-4 py-2  bg-slate-100 text-left text-base h-11"
//                       />

//                       <input
//                         type="text"
//                         className="w-40  bg-slate-100  py-2 text-left text-base h-11"
//                       />

//                       <button
//                         className="border border-slate-700 bg-sky-500 w-24 p-2"
//                         onClick={handleremove}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               )}
//             </table>
//           </div>
//         </div>

//         {/* table1 end */}

//         {/* section start */}
//         <div className="my-6">
//           <span className="text-base">
//             States (Please select multiple states by clicking on Ctrl Button) :
//           </span>
//           <div>
//             <select className="w-60 h-11 border border-slate-500">
//               <option>All Selected</option>
//             </select>
//           </div>
//         </div>
//         {/* section end */}
//         {/* images & video start */}
//         <p>Product Image : (Accepted Fromats: JPEG,PNG)</p>
//         <div className="App">
//           <main className="container mx-auto p-4">
//             <div className="flex flex-col items-start">
//               <div
//                 className={`border-4 border-dashed p-2 rounded-lg ${
//                   dragActive ? "border-blue-500" : "border-gray-300"
//                 }`}
//                 onDragEnter={handleDragEnter}
//                 onDragLeave={handleDragLeave}
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   id="file-upload"
//                   onChange={handleImageUpload}
//                 />
//                 <label htmlFor="file-upload" className="cursor-pointer">
//                   <div className="flex flex-col items-start">
//                     {selectedImage ? (
//                       <img
//                         src={selectedImage}
//                         alt="Selected"
//                         className="max-w-xs mb-2"
//                       />
//                     ) : (
//                       <div className="text-justify flex flex-col justify-start items-start text-gray-500 p-2">
//                         <div>
//                           <SlCamera className="mx-7 my-2   text-4xl" />
//                         </div>
//                         <p>Drag & drop an </p>
//                         <p>image here, or</p>
//                         <p>click to select one</p>
//                       </div>
//                     )}
//                   </div>
//                 </label>
//               </div>
//             </div>
//           </main>
//         </div>
//         {/* images & video end */}
//         <div>
//           <div className="flex justify-between my-6">
//             <div className="flex flex-col">
//               <p>
//                 Customizable products allow customers to choose options (Ex:
//                 shirt color). You need to create a simple product for each
//               </p>
//               <p>customization (Ex: a product for each color).</p>
//             </div>
//             <div>
//               <button className="border border-gray-600 bg-blue-900 text-white text-base p-3 font-semibold">
//                 {" "}
//                 Create Customization
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* section end */}

//         {/* section inputs start */}
//         <div className="my-6">
//           <div className="flex flex-col">
//             <label>Height {""} in</label>
//             <input type="text" className="h-10 border border-gray-400" />
//           </div>
//           <div className="flex flex-col my-6">
//             <label>width {""} in</label>
//             <input type="text" className="h-10 border border-gray-400" />
//           </div>
//           <div className="flex flex-col my-6">
//             <label>Length {""} in</label>
//             <input type="text" className="h-10 border border-gray-400" />
//           </div>
//           <button className="border border-gray-400  bg-blue-900 text-white text-base  font-semibold  p-2 w-28 ">
//             SAVE
//           </button>
//         </div>
//         {/* section inputs end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Related Products </h1>
//         <div className="flex  justify-between">
//           <p>
//             Related products are shown to customers in addition to the item the
//             customer is looking at.{" "}
//           </p>
//           <button className="border border-gray-400 bg-blue-900 text-white text-xl font-semibold p-2">
//             {" "}
//             Filter
//           </button>
//         </div>
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6 border rounded-md bg-white ">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b">
//                 <th className=" p-2 h-2x text-left text-base  w-32">
//                   <select className="text-black"><option>-</option></select>
//                 </th>
//                 <th className=" p-2 h-2x text-left text-base w-32">ID</th>
//                 <th className=" p-2  text-left text-base w-40">Thumbnail</th>
//                 <th className=" p-2  text-left text-base  w-96">Name</th>
//                 <th className=" p-2  text-left text-base w-44">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2  text-left text-base w-32">Status</th>
//                 <th className=" p-2  text-left text-base bw-44">Type</th>
//                 <th className=" p-2  text-left text-base  w-44">SKU</th>
//                 <th className=" p-2  text-left text-base  w-44">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2" ><input className=" h-10 w-5" type="checkbox"/></td>
//                   <td className=" p-2"> {product.id}</td>
//                   <td className=" p-2">{product.thumbnail}</td>
//                   <td className=" p-2">{product.name}</td>
//                   <td className=" p-2">{product.attribute}</td>
//                   <td className=" p-2">{product.status}</td>
//                   <td className=" p-2">{product.type}</td>
//                   <td className=" p-2">{product.sku}</td>
//                   <td className=" p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
//         <div className="flex  justify-between">
//           <p>
//             An up-sell item is offered to the customer as a pricier or
//             higher-quality alternative to the product the customer is looking
//             at.
//           </p>
//           <button className="border border-gray-400 bg-blue-900 text-white text-xl font-semibold p-2">
//             {" "}
//             Filter
//           </button>
//         </div>
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6  border rounded-md bg-white">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b">
//                 <th className=" p-2 h-2x text-left text-base  w-32">
//                 <select className="text-black"><option>-</option></select>
//                 </th>
//                 <th className="  p-2  text-left text-base  w-40">ID</th>

//                 <th className="  p-2  text-left text-base  w-40">Thumbnail</th>
//                 <th className="p-2 text-left text-base  w-96">Name</th>
//                 <th className=" p-2  text-left text-base  w-44">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2  text-left text-base  w-32">Status</th>
//                 <th className=" p-2  text-left text-base  w-44">Type</th>
//                 <th className=" p-2  text-left text-base  w-44">SKU</th>
//                 <th className=" p-2  text-left text-base  w-32">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2" ><input className=" h-10 w-5" type="checkbox"/></td>
//                   <td className=" p-2"> {product.id}</td>
//                   <td className=" p-2">{product.thumbnail}</td>
//                   <td className=" p-2">{product.name}</td>
//                   <td className=" p-2">{product.attribute}</td>
//                   <td className=" p-2">{product.status}</td>
//                   <td className=" p-2">{product.type}</td>
//                   <td className=" p-2">{product.sku}</td>
//                   <td className=" p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
//         <div className="flex  justify-between">
//           <p>
//             These "impulse-buy" products appear next to the shopping cart as
//             cross-sells to the items already in the shopping cart.
//           </p>
//           <button className="border border-gray-400 bg-blue-900 text-white text-xl font-semibold p-2">
//             {" "}
//             Filter
//           </button>
//         </div>
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6 border rounded-md bg-white">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b">
//                 <th className=" p-2 h-2x text-left text-base  w-32">
//                 <select className="text-black"><option>-</option></select>
//                 </th>
//                 <th className=" p-2 h-2x text-left text-base w-32">ID</th>
//                 <th className="p-2  text-left text-base  w-40">Thumbnail</th>
//                 <th className=" p-2  text-left text-base w-96">Name</th>
//                 <th className=" p-2  text-left text-base w-44">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2  text-left text-base w-32">Status</th>
//                 <th className=" p-2  text-left text-base w-44">Type</th>
//                 <th className=" p-2  text-left text-base w-44">SKU</th>
//                 <th className=" p-2  text-left text-base w-32">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2" ><input className=" h-10 w-5" type="checkbox"/></td>
//                   <td className=" p-2"> {product.id}</td>
//                   <td className=" p-2">{product.thumbnail}</td>
//                   <td className=" p-2">{product.name}</td>
//                   <td className=" p-2">{product.attribute}</td>
//                   <td className=" p-2">{product.status}</td>
//                   <td className=" p-2">{product.type}</td>
//                   <td className=" p-2">{product.sku}</td>
//                   <td className=" p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//       </div>
//     </div>
//   );
// }

// export default ProductFields;


import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { SlCamera } from "react-icons/sl";
function ProductFields() {
  const products = [
    {
      serial: "",
      id: "26509",
      thumbnail: "img",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "img",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "img",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    setIsPopupVisible(true);
  };
  const handleremove = () => {
    setIsPopupVisible(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const [selectedOption, setSelectedOption] = useState("full");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedProductOption, setSelectedProductOption] = useState("");

  const handleProductOptionChange = (e) => {
    setSelectedProductOption(e.target.value);
  };

  // filter upsell pop ups
  const [isVisible, setIsVisible] =useState(false)
  const [ButtonUpClick, setButtonUpClick] = useState(false)

  const click =()=>{
    setIsVisible (true)
    setButtonUpClick(true)
  }

  const Click =()=>{
    setIsVisible (false)
    setButtonUpClick(false)
  }
  // Relate filter
  const [isvisible,setIsvisible] = useState(false)
const [buttonClick,setButtonClick] = useState(false)
  const handleRelateclick =()=>{
    setIsvisible (true)
    setButtonClick(true)
  }

  const handleRelateClick =()=>{
    setIsvisible (false)
    setButtonClick(false)
  }

  // crosee sell filter 
  const [visible, setVisible]= useState (false)
  const [isButtonClicked,setButtonClicked] = useState(false)
  const handleCrossClick =()=>{
    setVisible(true)
    setButtonClicked(true)
  }
  const handleCrossRemoveClick =()=>{
    setVisible (false)
    setButtonClicked(false)
  }
  return (
    <div className="w-full h-full justify-center overflow-x-hidden flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col my-8">
          <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
          <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
        </div>
        {/* section1 start */}

        <div className="flex justify-between items-center text-gray-600 my-6 ">
          <div className="flex flex-col">
            <label className="">
              Category Specification :
              <span className="text-red-600 text-xl ">*</span>
            </label>{" "}
            <select className=" w-48 h-8 border-slate-300 border">
              <option>Merchandise</option>
              <option>OTC Product</option>
              <option>Rx Product</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="">
              Product Type:<span className="text-red-600 text-xl ">*</span>
            </label>
            <select className=" w-48 h-8 border-slate-300 border">
              <option>General</option>
              <option>Customizable</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="">
              Product Name:<span className="text-red-600 text-xl ">*</span>
            </label>{" "}
            <select className=" w-48 h-8 border-slate-300 border">
              <option>Default Category</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="">
              Product Name:<span className="text-red-600 text-xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="">
              NDC / UPC:<span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Brand Name:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="">
              Price ($) Name:<span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">UPN Member Price ($):</label>
            <input
              type="text"
              id="Upn_Mem"
              className="w-48 h-8 border-slate-300 border "
            />
          </div>
          <div className="flex flex-col">
            <label className="">
              Amount In Stock:<span className="text-red-600 text-xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="">
              Taxable:<span className="text-red-600 text-xl">*</span>
            </label>
            <select className=" w-48 h-8 border-slate-300 border">
              <option>No</option>
            </select>
          </div>
        </div>

        {/* section2 end */}

        {/* section3 start */}

        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Sale Price ($):</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base"> Sale Price Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Sale Price To:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Manufacturer:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Strength:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
        </div>

        {/* section3 end */}

        {/* section4 start */}
        <div className="flex  items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex justify-center mx-8 flex-col">
            <label className="text-base"> Lot Number:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Expiration Date:</label>
            <input
              type="text"
              id="product_name"
              className=" w-48 h-8 border-slate-300 border"
            />
          </div>
        </div>
        {/* section4 end */}

        {/* section5 start */}
        <div>
          <div className="text-gray-600 my-6 flex items-center">
            <span className="text-base">Pack Quantity :</span>

            <div className=" flex items-center">
              <div>
                <input
                  type="radio"
                  id="full"
                  name="option"
                  value="full"
                  checked={selectedOption === "full"}
                  onChange={handleOptionChange}
                  className=""
                />
                <label htmlFor="full">Full</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="partial"
                  name="option"
                  value="partial"
                  checked={selectedOption === "partial"}
                  onChange={handleOptionChange}
                  className="ml-2"
                />
                <label htmlFor="partial">Partial</label>
              </div>
            </div>

            <input
              type="text"
              className="w-[30%] h-8 border-slate-300 border"
            />
            <label>EA</label>
          </div>
        </div>
        {/* section5 end */}
        {/* section6 start */}

        <div>
          <div className="text-gray-600 my-6 flex items-center">
            <span className="text-base">Pack Type :</span>

            {/* <input type="radio" className="ml-[2%]" /> {""}
            <label className="text-base ml-3">ORIGINAL PACKAGE</label>
            <input type="radio" className="ml-[2%]" />
            <label className="text-base ml-3">
              ORIGINAL PACKAGE - NON SEALED
            </label> */}

            <div className="flex items-center">
              <div>
                <input
                  type="radio"
                  id="original"
                  name="product"
                  value="original"
                  checked={selectedProductOption === "original"}
                  onChange={handleProductOptionChange}
                  className="ml-2"
                />
                <label htmlFor="original">ORIGINAL PACKAGE</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="non-original"
                  name="product"
                  value="non-original"
                  checked={selectedProductOption === "non-original"}
                  onChange={handleProductOptionChange}
                  className="ml-2"
                />
                <label htmlFor="non-original">
                  ORIGINAL PACKAGE - NON SEALED
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* section6 end */}
        {/* section7 start */}
        <div className="text-gray-600 my-6">
          <div>
            <span className="text-base">Pack Condition :</span>
            <input type="checkbox" className="ml-[2%]" />
            <label className="text-base ml-3">TORN PACKAGE LABEL</label>

            <input type="checkbox" className="ml-[2%]" />
            <label className="text-base ml-3">OTHER</label>

            <input
              type="text"
              className="w-[30%] h-8 border-slate-300 border"
            />
          </div>
        </div>
        {/* section7 end */}

        {/* paragraph start */}

        <div className="flex ">
          <div className="w-[90%]">
            <div className="toolbar">
              <button
                onClick={() => this.format("bold")}
                className="border border-slate-800 w-8"
              >
                <b>B</b>
              </button>
              <button
                onClick={() => this.format("italic")}
                className="border border-slate-800 w-8"
              >
                <i>I</i>
              </button>
              <button
                onClick={() => this.format("underline")}
                className="border border-slate-800 w-8"
              >
                <i>U</i>
              </button>
              <button
                onClick={() => this.format("justifyLeft")}
                className="border border-slate-800 w-8"
              >
                <FaAlignLeft />
              </button>
              <button
                onClick={() => this.format("justifyCenter")}
                className="border border-slate-800 w-8"
              >
                <FaAlignCenter />
              </button>
              <button
                onClick={() => this.format("justifyRight")}
                className="border border-slate-800 w-8"
              >
                <FaAlignRight />
              </button>
              <button
                onClick={() => this.format("justifyFull")}
                className="border border-slate-800 w-8"
              >
                <FaAlignJustify />
              </button>
            </div>
            {/* <div className="content" contentEditable={true}>
          Enter your paragraph here...
        </div> */}
            <textarea type="text" />
          </div>

          <div>
            <div className="toolbar">
              <button
                onClick={() => this.format("bold")}
                className="border border-slate-800 w-8"
              >
                <b>B</b>
              </button>
              <button
                onClick={() => this.format("italic")}
                className="border border-slate-800 w-8"
              >
                <i>I</i>
              </button>
              <button
                onClick={() => this.format("underline")}
                className="border border-slate-800 w-8"
              >
                <i>U</i>
              </button>
              <button
                onClick={() => this.format("justifyLeft")}
                className="border border-slate-800 w-8"
              >
                <FaAlignLeft />
              </button>
              <button
                onClick={() => this.format("justifyCenter")}
                className="border border-slate-800 w-8"
              >
                <FaAlignCenter />
              </button>
              <button
                onClick={() => this.format("justifyRight")}
                className="border border-slate-800 w-8"
              >
                <FaAlignRight />
              </button>
              <button
                onClick={() => this.format("justifyFull")}
                className="border border-slate-800 w-8"
              >
                <FaAlignJustify />
              </button>
            </div>
            <textarea type="text" className="" />
          </div>
        </div>
        {/* paragraph end */}
        {/* section 8 strt */}
        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">
              Uri Key: (Related to goggle search)
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-base">
              Meta Title:(Related to google search)
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-8 border-slate-300 border "
            />
          </div>

          <div className="flex flex-col mx-3">
            <label className="text-base">
              Meta Keywords:(Related to google search)
            </label>
            <textarea
              type=""
              id="product_name"
              className=" w-64 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              Meta Description:(Research to google search)
            </label>
            <textarea
              type="area"
              id="product_name"
              className=" w-64 h-8 border-slate-300 border"
            />
          </div>
        </div>
        {/* section8 end */}
        {/* section text are start */}

        {/* section text area end */}

        {/* section9 start */}
        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Salt Composition:</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Height {""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Width{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Length{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Weight{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 border-slate-300 border"
            />
          </div>
        </div>

        {/* section9 end */}

        {/* table1 start */}

        <div className="flex flex-col">
          <label className="text-base">Tier Price:</label>
          <div className="border rounded-md  bg-white mt-4">
            <table className="w-full">
              <thead>
                <tr className="text-xl border-b">
                  <th className="px-4   text-left text-base h-11">
                    Websites
                  </th>
                  <th className=" px-4  text-left text-base ">
                    Customer Group
                  </th>
                  <th className="  px-4   text-base  text-left p-2">Qty</th>
                  <th className=" px-4    text-base  text-left p-2">
                    ($) Price
                  </th>
                  <th className=" px-4   text-base  text-left p-2 ">
                    Action
                  </th>
                  <th className=" px-4     text-base  text-left p-2 ">
                    <button
                      className="border border-gray-950 bg-slate-600 text-white w-14"
                      onClick={handleClick}
                    >
                      Add
                    </button>{" "}
                  </th>
                </tr>
              </thead>
              { isPopupVisible &&(
                    // <div>
                      <tbody>
                      <tr>
                        <td className="border bg-slate-200">
                          <select className="px-4 py-1 text-left text-base h-11  w-44 m-2 ">
                            <option className="px-4 py-2 text-left text-base h-11 " >All Websites</option>
                            <option>Main Website</option>
                          </select>
                        </td>
                        <td className="border bg-slate-200">
                          <select className="px-4 py-1 text-left text-base h-11 w-44 m-2">
                            <option className="px-4 py-1 text-left text-base h-11 hover:bg-blue-900">All Groups</option>
                            <option>Not Logged In</option>
                            <option>General</option>
                            <option>Prescription seller</option>
                            <option>General Merchandise seller</option>
                            <option>UPN Member</option>
                          </select>
                        </td>
                        <td className="border bg-slate-200">
                          <input 
                          type="text"
                          className=" py-1  m-2  text-left text-base h-11 w-44 "/>
                          </td>
                          <td className="border bg-slate-200">
                        <input 
                          type="text"
                          className=" border m-2   py-1 text-left text-base h-11 w-44"
                          />
                          </td>
                          <td className=" w-36">

                          <button className=" m-2 border-slate-700 bg-blue-900 text-white w-24 flex justify-center p-2" onClick={handleremove}>Delete</button>
                        </td>
                      </tr>
                      </tbody>
                       ) }
            </table>
          </div>
        </div>

        {/* table1 end */}

        {/* section start */}
        <div className="my-6">
          <span className="text-base">
            States (Please select multiple states by clicking on Ctrl Button) :
          </span>
          <div>
            <select className="w-60 h-8 border border-slate-500">
              <option>All Selected</option>
            </select>
          </div>
        </div>
        {/* section end */}
        {/* images & video start */}
        <p>Product Image : (Accepted Fromats: JPEG,PNG)</p>
        <div className="App">
          <main className="container mx-auto p-4">
            <div className="flex flex-col items-start">
              <div
                className={`border-4 border-dashed p-2 rounded-lg ${
                  dragActive ? "border-blue-500" : "border-gray-300"
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={handleImageUpload}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-start">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-xs mb-2"
                      />
                    ) : (
                      <div className="text-justify flex flex-col justify-start items-start text-gray-500 p-2">
                        <div>
                          <SlCamera className="mx-7 my-2   text-4xl" />
                        </div>
                        <p>Drag & drop an </p>
                        <p>image here, or</p>
                        <p>click to select one</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </main>
        </div>
        {/* images & video end */}
        <div>
          <div className="flex justify-between my-6">
            <div className="flex flex-col">
              <p>
                Customizable products allow customers to choose options (Ex:
                shirt color). You need to create a simple product for each
              </p>
              <p>customization (Ex: a product for each color).</p>
            </div>
            <div>
              <button className="border border-gray-600 bg-blue-900 text-white text-base p-2 font-semibold w-60">
                {" "}
                Create Customization
              </button>
            </div>
          </div>
        </div>
        {/* section end */}

        {/* section inputs start */}
        <div className="my-6">
          <div className="flex flex-col">
            <label>Height {""} in</label>
            <input type="text" className="h-8 border border-gray-400" />
          </div>
          <div className="flex flex-col my-6">
            <label>width {""} in</label>
            <input type="text" className="h-8 border border-gray-400" />
          </div>
          <div className="flex flex-col my-6">
            <label>Length {""} in</label>
            <input type="text" className="h-8 border border-gray-400" />
          </div>
          <button className="border border-gray-400  bg-blue-900 text-white text-base  font-semibold  p-2 w-28 ">
            SAVE
          </button>
        </div>
        {/* section inputs end */}
        {/* section start */}
        <h1 className="text-2xl font-semibold">Related Products </h1>
        <div className="flex  justify-between">
          <p>
            Related products are shown to customers in addition to the item the
            customer is looking at.{" "}
          </p>
          <button
          className={`  text-xl font-semibold p-2 ${buttonClick ? 'bg-white text-blue-900' : 'bg-blue-900 text-white' }`}
          onClick={handleRelateclick}>
            {" "}
            Filter
          </button>
        </div>
        {   isvisible && (
          <div className=" bg-white p-2 px-5   ">
            <div className="flex justify-between">
              <div className="flex flex-col w-52">
                <label>Id From</label>
                <input
                className="border rounded-sm" />
                </div>
                <div className="flex flex-col w-52">
                <label>Price From</label>
                <input
                className="border rounded-sm" />
                </div>

                <div className="flex flex-col w-52">
                  <label>Name</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
              
              </div>

              <div className="flex justify-between">

                <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
 
                  <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>

                  <div className="flex flex-col w-52">
                <label>Status</label>
               <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                        <option>Disable</option>
               </select>
                </div>

                 
                </div>

                <div className="flex justify-between ">

                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                    <option></option>
                    <option>Merchandise</option>
                    <option>OTC Product</option>
                    <option>Rx Product</option>
                    </select>
                    
                    </div>

                    <div className="flex flex-col w-52">
                      <label>Type</label>
                      <select className="border rounded-sm w-">
                        <option></option>
                        <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
                       
                      </select>
                      </div>

                      <div className="flex flex-col w-52">
                        <label>SKU</label>
                        <input className="border rounded-sm"/>
                        </div>
                  </div>

                  <div className="my-4 flex justify-end">
                    <button onClick={ handleRelateClick} className="bg-blue-900 p-2 text-white border rounded-md"> Cancel</button>
                    <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">Apply Filter</button>
                    </div>

            </div>

        )
       }
        {/* section end */}

        {/* section table start */}

        <div className="my-6 border rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b">
                <th className=" p-2  text-left text-base  w-32">
                  <select className="text-black"><option>-</option></select>
                </th>
                <th className=" p-2  text-left text-base w-32">ID</th>
                <th className=" p-2  text-left text-base w-40">Thumbnail</th>
                <th className=" p-2  text-left text-base  w-96">Name</th>
                <th className=" p-2  text-left text-base w-44">
                  Attribute Set
                </th>
                <th className=" p-2  text-left text-base w-32">Status</th>
                <th className=" p-2  text-left text-base bw-44">Type</th>
                <th className=" p-2  text-left text-base  w-44">SKU</th>
                <th className=" p-2  text-left text-base  w-44">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2" ><input className=" h-8 w-5" type="checkbox"/></td>
                  <td className=" p-2"> {product.id}</td>
                  <td className=" p-2">{product.thumbnail}</td>
                  <td className=" p-2">{product.name}</td>
                  <td className=" p-2">{product.attribute}</td>
                  <td className=" p-2">{product.status}</td>
                  <td className=" p-2">{product.type}</td>
                  <td className=" p-2">{product.sku}</td>
                  <td className=" p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* section table end */}
        {/* section start */}
        <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
        <div className="flex  justify-between">
          <p>
            An up-sell item is offered to the customer as a pricier or
            higher-quality alternative to the product the customer is looking
            at.
          </p>
          <button 
          className={`   text-xl font-semibold p-2 ${ButtonUpClick ? 'bg-white text-blue-900' : 'bg-blue-900 text-white' }`}
          onClick={click}>
            {" "}
            Filter
          </button>
        </div>
        {   isVisible && (
          <div className=" bg-white p-2 px-5   ">
            <div className="flex justify-between">
              <div className="flex flex-col w-52">
                <label>Id From</label>
                <input
                className="border rounded-sm" />
                </div>
                <div className="flex flex-col w-52">
                <label>Price From</label>
                <input
                className="border rounded-sm" />
                </div>

                <div className="flex flex-col w-52">
                  <label>Name</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
              
              </div>

              <div className="flex justify-between">

                <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
 
                  <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>

                  <div className="flex flex-col w-52">
                <label>Status</label>
               <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                        <option>Disable</option>
               </select>
                </div>

                 
                </div>

                <div className="flex justify-between ">

                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                    <option></option>
                    <option>Merchandise</option>
                    <option>OTC Product</option>
                    <option>Rx Product</option>
                    </select>
                    
                    </div>

                    <div className="flex flex-col w-52">
                      <label>Type</label>
                      <select className="border rounded-sm w-">
                        <option></option>
                        <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
                       
                      </select>
                      </div>

                      <div className="flex flex-col w-52">
                        <label>SKU</label>
                        <input className="border rounded-sm"/>
                        </div>
                  </div>

                  <div className="my-4 flex justify-end">
                    <button onClick={ Click} className="bg-blue-900 p-2 text-white border rounded-md"> Cancel</button>
                    <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">Apply Filter</button>
                    </div>

            </div>

        )
       }
        {/* section end */}

        {/* section table start */}

        <div className="my-6 border rounded-md bg-white ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b">
                <th className=" p-2  text-left text-base  w-32">
                  <select className="text-black"><option>-</option></select>
                </th>
                <th className=" p-2  text-left text-base w-32">ID</th>
                <th className=" p-2  text-left text-base w-40">Thumbnail</th>
                <th className=" p-2  text-left text-base  w-96">Name</th>
                <th className=" p-2  text-left text-base w-44">
                  Attribute Set
                </th>
                <th className=" p-2  text-left text-base w-32">Status</th>
                <th className=" p-2  text-left text-base bw-44">Type</th>
                <th className=" p-2  text-left text-base  w-44">SKU</th>
                <th className=" p-2  text-left text-base  w-44">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2" ><input className=" h-8 w-5" type="checkbox"/></td>
                  <td className=" p-2"> {product.id}</td>
                  <td className=" p-2">{product.thumbnail}</td>
                  <td className=" p-2">{product.name}</td>
                  <td className=" p-2">{product.attribute}</td>
                  <td className=" p-2">{product.status}</td>
                  <td className=" p-2">{product.type}</td>
                  <td className=" p-2">{product.sku}</td>
                  <td className=" p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* section table end */}
        {/* section start */}
        <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
        <div className="flex justify-between">
        <p>
          These "impulse-buy" products appear next to the shopping cart as
          cross-sells to the items already in the shopping cart.
        </p>
        <button
          className={` text-xl font-semibold p-2 ${isButtonClicked ? 'bg-white text-blue-900' : 'bg-blue-900 text-white' }`}
          onClick={handleCrossClick}
        >
          Filter
        </button>
      </div>
        {   visible && (
          <div className=" bg-white p-2 px-5   ">
            <div className="flex justify-between">
              <div className="flex flex-col w-52">
                <label>Id From</label>
                <input
                className="border rounded-sm" />
                </div>
                <div className="flex flex-col w-52">
                <label>Price From</label>
                <input
                className="border rounded-sm" />
                </div>

                <div className="flex flex-col w-52">
                  <label>Name</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
              
              </div>

              <div className="flex justify-between">

                <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>
 
                  <div className="flex flex-col w-52">
                  <label>to</label>
                  <input
                  className="border rounded-sm"/>
                  </div>

                  <div className="flex flex-col w-52">
                <label>Status</label>
               <select className="border rounded-sm">
                <option></option>
                <option>Enable</option>
                        <option>Disable</option>
               </select>
                </div>

                 
                </div>

                <div className="flex justify-between ">

                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                    <option></option>
                    <option>Merchandise</option>
                    <option>OTC Product</option>
                    <option>Rx Product</option>
                    </select>
                    
                    </div>

                    <div className="flex flex-col w-52">
                      <label>Type</label>
                      <select className="border rounded-sm w-">
                        <option></option>
                        <option>Simple Product</option>
                <option>Virtual Product</option>
                <option>Configurable Product</option>
                <option>Downloadable Product</option>
                <option>Grouped Product</option>
                <option>Bundle Product</option>
                <option>Quote </option>
                       
                      </select>
                      </div>

                      <div className="flex flex-col w-52">
                        <label>SKU</label>
                        <input className="border rounded-sm"/>
                        </div>
                  </div>

                  <div className="my-4 flex justify-end">
                    <button onClick={ handleCrossRemoveClick} className="bg-blue-900 p-2 text-white border rounded-md"> Cancel</button>
                    <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">Apply Filter</button>
                    </div>

            </div>

        )
       }
        {/* section end */}

        {/* section table start */}

        <div className="my-6 border rounded-md bg-white">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b">
                <th className=" p-2  text-left text-base  w-32">
                <select className="text-black"><option>-</option></select>
                </th>
                <th className=" p-2  text-left text-base w-32">ID</th>
                <th className="p-2  text-left text-base  w-40">Thumbnail</th>
                <th className=" p-2  text-left text-base w-96">Name</th>
                <th className=" p-2  text-left text-base w-44">
                  Attribute Set
                </th>
                <th className=" p-2  text-left text-base w-32">Status</th>
                <th className=" p-2  text-left text-base w-44">Type</th>
                <th className=" p-2  text-left text-base w-44">SKU</th>
                <th className=" p-2  text-left text-base w-32">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className=" p-2" ><input className=" h-10 w-5" type="checkbox"/></td>
                  <td className=" p-2"> {product.id}</td>
                  <td className=" p-2">{product.thumbnail}</td>
                  <td className=" p-2">{product.name}</td>
                  <td className=" p-2">{product.attribute}</td>
                  <td className=" p-2">{product.status}</td>
                  <td className=" p-2">{product.type}</td>
                  <td className=" p-2">{product.sku}</td>
                  <td className=" p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* section table end */}
      </div>
    </div>
  );
}

export default ProductFields;
