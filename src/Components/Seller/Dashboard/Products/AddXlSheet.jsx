import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const AddXlSheet = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

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
      setError("Please upload a valid Excel file ( .xlsx or .xls ).");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls",
    multiple: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Logic to handle file upload goes here
    } else {
      console.log("No file selected or invalid file type.");
    }
  };

  return (
    <div className="flex flex-col  justify-center pl-8 mt-4 bg-gray-100">
      <div className="flex flex-col justify-start ">
        <h1 className="text-2xl font-bold text-blue2 ">ADD PRODUCT</h1>
        <p className="border-b border-blue-900 w-40  "></p>
      </div>
      <div className="w-full max-w-md p-8 mt-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Add Excel Sheet</h1>
        <form onSubmit={handleSubmit}>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
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
            className="w-full bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddXlSheet;
