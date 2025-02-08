
import React, { useEffect, useState } from "react";
import trash from "../../../assets/trash.png";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../../assets/Edit.png";
import {
  addBannerApi,
  deleteBannerApi,
  editBannerApi,
  uploadCustomerImageApi,
} from "../../../Api/BannerApi";
import { deleteBanner } from "../../../Store/Store";
import { AddOfferApi, deleteOfferAPi, EditOfferApi, offerGetAll } from "../../../Api/OfferAdminApi";
import { fetchCategorySpecificationsGetAll } from "../../../Api/MasterDataApi";
import Notification from "../../Notification";

const OffersImgs = () => {
  const [banners, setBanners] = useState([]);
  const [newBanners, setNewBanners] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editBanner, setEditBanner] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [bannerImage, setBannerImage] = useState(null); // State to store the uploaded image
  const [isDragOver, setIsDragOver] = useState(false);
  const MAX_WIDTH = 7680;
  const MAX_HEIGHT = 2200;
  
  const [categorySpecification, setCategorySpecification] = useState(0)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(offerGetAll())
  }, [])

  // Handle new banners file input with validation for size
  const handleBannerChange = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
          setErrorMessage(
            `Please upload a banner with dimensions less than or equal to ${MAX_WIDTH}px width and ${MAX_HEIGHT}px height.`
          );
        } else {
          // Clear error and add the file itself if valid
          setErrorMessage(null);
          setNewBanners((prevBanners) => [...prevBanners, file]);
        }
      };
    });
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    const file = event.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the dropped image
      setBannerImage(imageUrl); // Set the image URL for display
      // Add any further processing logic here (e.g., uploading the file)
    }
    setIsDragOver(false); // Reset drag state after drop
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior to allow dropping
    setIsDragOver(true); // Set drag state to true
  };

  const [formErrors, setFormErrors] = useState({});
  const handleDragLeave = () => {
    setIsDragOver(false); // Reset drag state when the file leaves the drop area
  };
  // Handle adding new banners
  // const handleAddBanners = async () => {
  //   if (newBanners.length > 0) {
  //     // setBanners((prevBanners) => [...prevBanners, ...newBanners]);

  //     // Upload each file in newBanners
  //     newBanners.forEach(async (banner) => {
  //       const formData = new FormData();
  //       formData.append("image", banner); // Append the file to FormData

  //       try {
  //         const imageUrl = await uploadCustomerImageApi(formData);
  //         const bannerObj = {
  //           // bannerId: 0,
  //           // imageUrl: imageUrl,
  //           // bannerText: "string",
  //           // orderSequence: 0,
  //           // uploadedOn: "2024-11-03T18:15:55.037Z",
  //           // isActive: 1,
            
  //         imageUrl: imageUrl,
  //         categorySpecificationId: 0,
  //         isActive: 1
          
  //         };
  //         const response = await dispatch(AddOfferApi(bannerObj));
  //         await dispatch(offerGetAll())
  //       } catch (error) {
  //         console.error("Error uploading banner:", error);
  //       }
  //     });

  //     setNewBanners([]); // Clear the newBanners after adding
  //   }
  // };
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  
  const handleAddBanners = async () => {
    const errors = {};
    if (!categorySpecification) {
      errors.categorySpecification = "Please select a category.";
    }
    if (newBanners.length === 0) {
      errors.newBanners = "Please upload the image.";
    }
    setFormErrors(errors);

    // Stop execution if there are validation errors
    if (Object.keys(errors).length > 0) {
      return; // Exit the function early if there are errors
    }

    if (newBanners.length > 0 && categorySpecification > 0) {
      for (const banner of newBanners) {
        const formData = new FormData();
        formData.append("image", banner); // Append the file to FormData

        try {
          const imageUrl = await uploadCustomerImageApi(formData);
          const bannerObj = {
            imageUrl: imageUrl,
            categorySpecificationId: categorySpecification, // Set dynamically
            isActive: 1,
          };

          // Dispatch the add offer API
          const response = await dispatch(AddOfferApi(bannerObj));

          // Fetch all offers
          await dispatch(offerGetAll());
          setNotification({
            show: true,
            message: "Added Successfully!",
          });
          setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        } catch (error) {
          console.error("Error uploading banner:", error);
        }
      }

      setNewBanners([]); // Clear the newBanners after adding
      setCategorySpecification(0)
    }
  };



  const [bannerIds, setBannerIds] = useState()
  const [category, setCategory] = useState(null)

  // Handle editing banner
  // const handleEditBanner = (index, bannerID, categorySpecificationId) => {
  //   setCategory(categorySpecificationId);
  //   setBannerIds(bannerID)
  //   // setBannerIds(Number(bannerID));
  //   setEditingIndex(index);
  //   setEditBanner(banners[index]);
  // };
  const handleEditBanner = (index, categorySpecificationId, bannerID) => {
    setCategory(categorySpecificationId);  // Ensure this is setting the correct value
    setBannerIds(bannerID);  // Ensure this is setting the correct banner ID
    setEditingIndex(index);
    setEditBanner(BannerData[index]);  // Ensure this is setting the correct banner data
  };


  // const handleSaveEdit = async () => {
  //   try {
  //     // Ensure `editBanner` and `bannerIds` are defined
  //     if (!editBanner || !bannerIds) {
  //       throw new Error("Missing required data: `editBanner` or `bannerIds`");
  //     }

      
  //     const formData = new FormData();
  //     formData.append('image', editBanner); // Adjust key to match API expectations

  //     // Upload image and get URL
  //     const imageUrl = await uploadCustomerImageApi(formData);

  //     // Prepare payload
  //     const updatedBannerData = {
  //       // imageUrl: imageUrl,
  //       // bannerText: "string", // Replace with actual data if necessary
  //       // orderSequence: 0,
  //       // uploadedOn: new Date().toISOString(),
  //       // isActive: 1,
        
  //     offerImageId: bannerIds,
  //       categorySpecificationId: category,
  //     imageUrl: imageUrl,
  //     isActive: 1
      
  //     };

  //     // Call API
  //     // await editBannerApi(bannerIds, updatedBannerData);
  //     await dispatch(EditOfferApi(updatedBannerData));
  //     await dispatch(offerGetAll())

  //     // Update state
  //     if (editBanner && editingIndex !== null) {
  //       const updatedBanners = banners.map((banner, index) =>
  //         index === editingIndex ? { ...banner, ...updatedBannerData } : banner
  //       );
  //       setBanners(updatedBanners);
  //       setEditingIndex(null);
  //       setEditBanner(null);
  //     }
  //   } catch (error) {
  //     console.error("Error in handleSaveEdit:", error);
  //   }
  // };

  const handleSaveEdit = async () => {
    try {
      // Log the current state values to debug

      // Ensure `editBanner`, `bannerIds`, and `category` are defined
      if (!editBanner || !bannerIds) {
        throw new Error("Missing required data: `editBanner`, `bannerIds`, or `category`");
      }

      const formData = new FormData();
      formData.append('image', editBanner); // Adjust key to match API expectations

      // Upload image and get URL
      const imageUrl = await uploadCustomerImageApi(formData);

      // Prepare payload with categorySpecificationId
      const updatedBannerData = {
        offerImageId: bannerIds,
        categorySpecificationId: category,  // Passing category here
        imageUrl: imageUrl,
        isActive: 1
      };

      // Call API to edit the banner
      await dispatch(EditOfferApi(updatedBannerData));
      await dispatch(offerGetAll());
      setNotification({
        show: true,
        message: "Edit Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);

      // Update state
      if (editBanner && editingIndex !== null) {
        const updatedBanners = banners.map((banner, index) =>
          index === editingIndex ? { ...banner, ...updatedBannerData } : banner
        );
        setBanners(updatedBanners);
        setEditingIndex(null);
        setEditBanner(null);
      }
    } catch (error) {
      console.error("Error in handleSaveEdit:", error);
    }
  };



  const handleDeleteBanner = (index) => {
    const filteredBanners = banners.filter((_, i) => i !== index);
    setBanners(filteredBanners);
  };

  // Handle edited banner input
  // const handleEditBannerChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setEditBanner(URL.createObjectURL(file));
  //   }
  // };
  const handleEditBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditBanner(file); // Set the File object
      setBannerImage(URL.createObjectURL(file)); // Generate a preview URL
    }
  };


  // Dropzone setup
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true, // Enable selecting multiple files
    onDrop: (acceptedFiles) => handleBannerChange(acceptedFiles),
  });

  const BannerData = useSelector((state) => state.offer?.offerGetAll || []);

  const handleRemoveNewBanner = (index) => {
    // setNewBanners((prevBanners) => prevBanners.filter((_, i) => i !== index));
    const updatedBanners = newBanners.filter((_, i) => i !== index);
    setNewBanners(updatedBanners);
  };

  // const dispatch = useDispatch();
  // const banners = useSelector((state) => state.banner.banner); // Accessing the banner state from Redux

  // Function to handle the delete action
  const handleDelete = async (bannerId) => {
    try {
      await deleteOfferAPi(bannerId); // Call the API to delete the banner
      await dispatch(offerGetAll())
      setNotification({
        show: true,
        message: "Deleted Successfully!",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
      // dispatch(deleteBanner(bannerId)); // Update the Redux store after successful deletion
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  const [toggleStates, setToggleStates] = useState(
    BannerData.map((item) => item.isActive === 1) // Initialize based on isActive value
  );

  const handleToggle = async (index) => {
    const currentToggleState = toggleStates[index];
    const newToggleState = !currentToggleState;

    // Update local toggle state
    const updatedToggleStates = [...toggleStates];
    updatedToggleStates[index] = newToggleState;
    setToggleStates(updatedToggleStates);

    // Prepare payload for API
    const updatedBannerData = {
      // offerImageId: BannerData[index].offerImageId,
      // isActive: newToggleState ? 1 : 0,
      ...BannerData[index],
      isActive: newToggleState ? 1 : 0,
    };

    try {
      // Call API to update banner
      await dispatch(EditOfferApi(updatedBannerData));
    } catch (error) {
      console.error("Error updating banner:", error);

      // Revert toggle state on error
      updatedToggleStates[index] = currentToggleState;
      setToggleStates(updatedToggleStates);
    }
  };


  const categorySpecificationGetAll = useSelector(
    (state) => state.master?.setCategorySpecificationsGetAll || []
  );


  useEffect(() => {
    dispatch(fetchCategorySpecificationsGetAll());
  }, []);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value);

    // Update the category specification
    setCategorySpecification(numericValue);

    // Clear the error if a valid category is selected
    if (value) {
      setFormErrors((prevErrors) => {
        const { categorySpecification, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 overflow-y-scroll">
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <h1 className="flex items-center text-3xl font-bold mb-6">
        Manage Offers{" "}
       
        {/* <p className="flex text-lg mt-2 ml-2 items-center justify-center">
          (
          <p className="text-lg   text-red-500">
            {" "}
            Banner Size Should be in Width: 7680px , Height: 2200px ,
            Resolution:300{" "}
          </p>
          )
        </p> */}
      </h1>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 mb-4 rounded">
          {errorMessage}
        </div>
      )}

      {/* Add Banners Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Offers</h2>
        <div className="flex flex-col mr-5 mb-3">
          <label className="font-semibold">
            Category Specification:
            <span className="text-red-600">*</span>
          </label>
          <select
            className="w-56 h-8  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
            onChange={handleCategoryChange}
            value={categorySpecification}
            name="categorySpecification"
          >
            <option value="">Select a category</option>
            {/* <option value="1"> Prescription Drug</option>
                      <option value="2">OTC Product</option>
                      <option value="3">General Merchandise</option> */}
            {categorySpecificationGetAll.map((item) => {
              return (
                <option value={item.categorySpecificationId}>
                  {item.specificationName}
                </option>
              );
            })}
          </select>
          {formErrors.categorySpecification && (
            <span className="text-red-500 text-sm">{formErrors.categorySpecification}</span>
          )}
          {/* {formErrors.categorySpecification && (
            <span className="text-red-500 text-sm">
              {formErrors.categorySpecification}
            </span>
          )} */}
        </div>
        <div
          {...getRootProps()}
          className="w-96 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
        >
          <input {...getInputProps()} multiple />
          <p className="text-gray-500 text-center">
            Click here or Drag and Drop image
          </p>
        
        </div>
        {formErrors.newBanners && (
          <span className="text-red-500 text-sm">{formErrors.newBanners}</span>
        )}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {newBanners.map((banner, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(banner)}  // Convert file to URL for display
                alt={`New Banner ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              <button
                onClick={() => handleRemoveNewBanner(index)}
                className="absolute top-2 right-2 p-1 rounded-full"
              >
                <img src={trash} alt="Remove" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddBanners}
          className="bg-blue-900 text-white px-6 mx-4 py-2 rounded"
        >
          Save Offers
        </button>
      </div>

      {/* Display Banners */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Offers</h2>
        {/* <div className="grid grid-cols-3 gap-4">
          <div className="w-full relative  overflow-hidden">
            {BannerData.length > 0 ? (
              <div>
                {BannerData.map((item, index) => (
                  <div key={index} className="">
                    <img
                      src={item.imageUrl}
                      alt={`Carousel Image ${index + 1}`}
                    />
                    <div className="flex ">
                      <button onClick={() => handleEditBanner(index, item.offerImageId, item.categorySpecificationId)}>
                        <img src={edit} className="w-8 h-8" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.offerImageId)}
                        // onClick={() => handleDeleteBanner(index)}
                        className="bg-white text-white px-4 py-2 rounded"
                      >
                        <img src={trash} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No banners available</p>
            )}
          </div>
        </div> */}
          <div className="grid grid-cols-3 gap-4">
            {BannerData.length > 0 ? (
              BannerData.map((item, index) => (
                <div key={index} className="relative overflow-hidden p-2 border rounded">
                  <img src={item.imageUrl} alt={`Carousel Image ${index + 1}`} className="rounded-md" />
                  <div className="flex justify-between items-center mt-2">
                    <button onClick={() => handleEditBanner(index, item.categorySpecificationId, item.offerImageId)}>
                      <img src={edit} className="w-8 h-8" alt="Edit" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.offerImageId)}
                      className="bg-white text-white px-4 py-2 rounded"
                    >
                      <img src={trash} className="w-5 h-5" alt="Delete" />
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-4">
                    {/* <span className="mr-2 text-gray-600">Toggle:</span> */}
                    <div
                      className={`relative w-14 h-8 rounded-full cursor-pointer transition ${toggleStates[index] ? "bg-green-500" : "bg-gray-300"
                        }`}
                      onClick={() => handleToggle(index)}
                    >
                      <div
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${toggleStates[index] ? "transform translate-x-6" : ""
                          }`}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">
                      {toggleStates[index] ? "YES" : "NO"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No banners available</p>
            )}
          </div>
      </div>
      {editingIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit Banner</h2>

            <div
              className={`relative w-96 p-4 border-2 rounded-lg cursor-pointer hover:border-gray-400 ${isDragOver ? "border-blue-500" : "border-dashed border-gray-300"
                }`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleEditBannerChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <p className="text-gray-500 text-center">
                Click here or drag and drop images
              </p>
              {/* {bannerImage ? (
          <img
            src={bannerImage}
            alt="Banner Preview"
            className="w-full h-auto rounded-lg object-cover"
          />
        ) : (
          <p className="text-gray-500 text-center">
            Click here or drag and drop images
          </p>
        )} */}
            </div>

            {(editBanner && editBanner instanceof Blob) && (
              <img
                src={URL.createObjectURL(editBanner)}
                alt="Edited Banner"
                className="w-32 h-20 object-cover mb-4"
              />
            )}
            

            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2 my-2"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditingIndex(null);
                setEditBanner(null);
                setBannerImage(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded my-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default OffersImgs;
