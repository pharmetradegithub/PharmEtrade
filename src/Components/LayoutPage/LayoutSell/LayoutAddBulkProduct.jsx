

// / import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const LayoutAddBulkProduct = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");

  

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     const fileType = selectedFile.type;

//     if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//       fileType === "application/vnd.ms-excel"
//     ) {
//       setFile(selectedFile);
//       setError("");
//     } else {
//       setFile(null);
//       setError("Please upload a valid Excel file ( .xlsx or .xls ).");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: ".xlsx, .xls",
//     multiple: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (file) {
//       // Logic to handle file upload goes here
//       console.log("File submitted:", file);
//     } else {
//       console.log("No file selected or invalid file type.");
//     }
//   };

//   return (
//     <div className="flex flex-col  justify-center pl-8 mt-4 bg-gray-100">
//       <div className="flex flex-col justify-start ">
//         <h1 className="text-2xl font-bold text-blue-900 ">ADD PRODUCT</h1>
//         <p className="border-b border-blue-900 w-40  "></p>
//       </div>
//       <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
//         <form onSubmit={handleSubmit}>
//           <div
//             {...getRootProps()}
//             className={`border-2 border-dashed rounded-lg p-4 text-center ${
//               isDragActive ? "border-blue-500" : "border-gray-300"
//             } mb-4`}
//           >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-blue-500">Drop the files here ...</p>
//             ) : (
//               <p className="text-gray-500">
//                 Drag 'n' drop an Excel file here, or click to select one
//               </p>
//             )}
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LayoutAddBulkProduct;















// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";


// const LayoutAddBulkProduct = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");

  

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     const fileType = selectedFile.type;

//     if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//       fileType === "application/vnd.ms-excel"
//     ) {
//       setFile(selectedFile);
//       setError("");
//     } else {
//       setFile(null);
//       setError("Please upload a valid Excel file ( .xlsx or .xls ).");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: ".xlsx, .xls",
//     multiple: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (file) {
//       // Logic to handle file upload goes here
//       console.log("File submitted:", file);
//     } else {
//       console.log("No file selected or invalid file type.");
//     }
//   };

//   // download file
//   const handleDownload = () => {
//     // Replace this with the actual path to your Excel file
//     const fileUrl = '/Users/Public/Desktop/13sep24_0546pm.xlsx'; // Path relative to the public folder
//     const fileUrl2 = '/BulkProducts.xlsx'; 
//     const link = document.createElement('a');       
//     link.href = fileUrl2;
//     link.download = 'BulkProducts.xlsx';  
//     // "C:\Users\Bhargav\Desktop\Signup Input Field doc.xlsx"; // This will set the name of the downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
  
//     <div className="flex flex-col  justify-start mt-8 pl-1 sm:p-8  bg-gray-100  overflow-y-scroll w-full">
//     <div className="flex flex-col justify-start  ">
//       <h1 className="text-sm sm:text-2xl font-bold text-blue-900 ">
//         ADD BULK PRODUCTS{" "}
//         <span className="text-sm sm:text-base text-black">
//           ( To Upload Bulk Products , Please Download Sample Excel Sheet And
//           kindly Re-upload The Excel Sheet)
//         </span>
//       </h1>
//       <p className="border-b border-blue-900 w-52  "></p>
//     </div>
//     <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 ">
//       <div className="w-full max-w-md p-3 sm:p-8  mt-7 bg-white rounded-lg shadow-lg">
//         <h1 className="text-xl sm:text-2xl font-bold text-left  sm:text-center mb-4">
//           Add Excel Sheet
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div
//             {...getRootProps()}
//             className={`border-2 border-dashed rounded-lg p-0 sm:p-4 w-60 sm:w-full text-center ${
//               isDragActive ? "border-blue-500" : "border-gray-300"
//             } mb-4`}
//           >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-blue-500">Drop the files here ...</p>
//             ) : (
//               <p className="text-gray-500">
//                 Drag 'n' drop an Excel file here, or click to select one
//               </p>
//             )}
//           </div>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {file && (
//             <p className="text-green-500 mb-4">{file.name} selected</p>
//           )}
//           <button
//             type="submit"
//             className="w-60 sm:w-full bg-blue-900 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Upload
//           </button>
//         </form>
//       </div>

//       <div className=" max-w-md sm:p-10 p-4  mt-8 ">
//         <h1 className="text-2xl font-bold sm:text-center text-left mb-4  ">
//           Download Excel Sheet
//         </h1>
//         <div
//           className="  mb-4 sm:text-center text-left w-full "
//           onClick={handleDownload}
//         >
//           <p className=" w-60 border-green-500 text-green-500 hover:text-red-600 cursor-pointer hover:border-red-600 hover:border-b">
//             Download Sample Excel file here
//           </p>
//         </div>
        
//       </div>
      
//     </div>
//   </div>
//   );
// };

// export default LayoutAddBulkProduct;




import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "../../../Api/api"; 
import { useSelector } from "react-redux";

const LayoutAddBulkProduct = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const user = useSelector((state) => state.user.user)

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    const fileType = selectedFile.type;

    if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      fileType === "application/vnd.ms-excel"
    ) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a valid Excel file (.xlsx or .xls).");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls",
    multiple: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("sellerId", user.customerId)
      formData.append("ExcelFile", file); // Use the key expected by the backend
      
      try {
        setUploadStatus("Uploading...");
        const response = await axios.post('/api/Product/AddBulkProducts', formData, null, true);
  
        if (response.status === 200) {
          setUploadStatus("File uploaded successfully!");
          console.log("Response data:", response.data);
        } else {
          setUploadStatus("File upload failed. Please try again.");
          console.error("Upload failed:", response.data.message);
        }
      } catch (error) {
        setUploadStatus("Error occurred during upload.");
        console.error("Error uploading file:", error);
      }
    } else {
      setError("No file selected or invalid file type.");
    }
  };
  

  const handleDownload = () => {
    // const fileUrl = "/Sample Bulk Products Sheet..xlsx"; // Replace with actual path
    const fileUrl = "/Copy of Update Bulk Products Sheet.xlsx"; // Replace with actual path

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "BulkProducts.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-start mt-8 pl-1 sm:p-8 bg-gray-100 overflow-y-scroll w-full">
      <div className="flex flex-col justify-start">
        <h1 className="text-sm sm:text-2xl font-bold text-blue-900">
          ADD BULK PRODUCTS{" "}
          <span className="text-sm sm:text-base text-black">
            (To upload bulk products, please download the sample Excel sheet and
            re-upload it after filling in the data.)
          </span>
        </h1>
        <p className="border-b border-blue-900 w-52"></p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full max-w-md p-3 sm:p-8 mt-7 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold text-left sm:text-center mb-4">
            Add Excel Sheet
          </h1>
          <form onSubmit={handleSubmit}>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-0 sm:p-4 w-60 sm:w-full text-center ${
                isDragActive ? "border-blue-500" : "border-gray-300"
              } mb-4`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-500">Drop the files here ...</p>
              ) : (
                <p className="text-gray-500">
                  Drag 'n' drop an Excel file here, or click to select one
                </p>
              )}
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
            <button
              type="submit"
              className="w-60 sm:w-full bg-blue-900 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Upload
            </button>
          </form>
          {uploadStatus && (
            <p
              className={`mt-4 ${
                uploadStatus.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {uploadStatus}
            </p>
          )}
        </div>

        <div className="max-w-md sm:p-10 p-4 mt-8">
          <h1 className="text-2xl font-bold sm:text-center text-left mb-4">
            Download Excel Sheet
          </h1>
          <div
            className="mb-4 sm:text-center text-left w-full"
            onClick={handleDownload}
          >
            <p className="w-60 border-green-500 text-green-500 hover:text-red-600 cursor-pointer hover:border-red-600 hover:border-b">
              Download Sample Excel file here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAddBulkProduct;















// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const LayoutAddBulkProduct = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");
//   const [fileUrl, setFileUrl] = useState(""); // Store the file URL

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     const fileType = selectedFile.type;

//     if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//       fileType === "application/vnd.ms-excel"
//     ) {
//       setFile(selectedFile);
//       setError("");

//       // Create a URL for the file so it can be downloaded
//       const fileURL = URL.createObjectURL(selectedFile);
//       setFileUrl(fileURL);
//     } else {
//       setFile(null);
//       setError("Please upload a valid Excel file (.xlsx or .xls).");
//       setFileUrl(""); // Clear the URL if file is invalid
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: ".xlsx, .xls",
//     multiple: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (file) {
//       // Logic to handle file upload goes here
//       console.log("File submitted:", file);
//     } else {
//       console.log("No file selected or invalid file type.");
//     }
//   };

//   // const handleDownloadTemplate = () => {
//   //   const fileUrl2 = "/SideMenu.xlsx";
//   //   const link = document.createElement("a");
//   //   link.href = fileUrl2;
//   //   link.download = "SideMenu.xlsx"; // Name of the downloaded template file
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);
//   // };

//   return (
//     <div className="flex flex-col justify-center pl-8 mt-4 bg-gray-100">
//       <div className="flex flex-col justify-start">
//         <h1 className="text-2xl font-bold text-blue-900">ADD PRODUCT</h1>
//         <p className="border-b border-blue-900 w-40"></p>
//       </div>
//       <div className="flex flex-col">
//         {/* Download Excel Template */}
       

//         {/* Upload Excel Sheet */}
//         <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
//           <form onSubmit={handleSubmit}>
//             <div
//               {...getRootProps()}
//               className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                 isDragActive ? "border-blue-500" : "border-gray-300"
//               } mb-4`}
//             >
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p className="text-blue-500">Drop the files here ...</p>
//               ) : (
//                 <p className="text-gray-500">
//                   Drag 'n' drop an Excel file here, or click to select one
//                 </p>
//               )}
//             </div>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             {file && <p className="text-green-500 mb-4">{file.name} selected</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </form>

//           {/* Display download link for uploaded file */}
          
//         </div>
//         {file && (
//             <div className="mt-4">
//               <p className="text-left text-green-500">
//                 File uploaded successfully!
//               </p>
//               <a
//                 href={fileUrl}
//                 download={file.name}
//                 className="block text-left text-blue-700 underline"
//               >
//                 Download {file.name}
//               </a>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default LayoutAddBulkProduct;
