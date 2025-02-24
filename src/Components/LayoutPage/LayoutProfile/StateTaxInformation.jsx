
import React, { useEffect, useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import edit from "../../../assets/Edit.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductOffer } from "../../../Api/ProductApi";
import {
  taxAddInformationApi,
  TaxGetByStateNameApi,
  TaxInfoEdit,
} from "../../../Api/TaxInfoApi";
import Notification from "../../Notification";

import Bin from "../../../assets/Bin.png"
import wrong from "../../../assets/Icons/wrongred.png"
import { AdminChargesGetApi, AdminChargesInformationAdd, deleteChargesAPi, editChargesApi } from "../../../Api/AdminApi";
import Loading from "../../Loading";
import Pagination from "../../Pagination";


const StateTaxInformation = () => {
  const searchParams = new URLSearchParams(location.search);
  const CustomerId = searchParams.get("CustomerId");

  const getproductSpecialOffer = useSelector(
    (state) => state.product?.productSpecialOffer || []
  );
  const [category, setCategory] = useState(''); // Initialize as an empty string for selected category
  const [taxPercentage, setTaxPercentage] = useState("");
  // const[transactionfee, setTransactionfee] = useState("")
  const [addedEntries, setAddedEntries] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });
  const businessInfo = useSelector((state) => state.user?.businessInfo || []);
  const user = useSelector((state) => state.user?.user || []);

  const dispatch = useDispatch();
  //   const stateNameData = useSelector((state) => state.tax.stateName);

  const [editingEntry, setEditingEntry] = useState({}); // Store current entry being edited

const [itemsPerPage, setItemsPerPage] = useState(10); // Set initial items per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let selectedCategory;

  //   const handleAddOrSave = async () => {
  //     selectedCategory = getproductSpecialOffer.find(
  //       (item) => item.categorySpecificationId === category
  //     );

  //     if (editingIndex !== null) {
  //       // Update the existing entry in stateNameData (editing case)
  //       const updatedEntries = [...stateNameData];
  //       updatedEntries[editingIndex] = {
  //         ...updatedEntries[editingIndex],
  //         category: selectedCategory,
  //         taxPercentage: taxPercentage,
  //       };
  //       setAddedEntries(updatedEntries);
  //       setEditingIndex(null); // Reset the editing index after saving
  //     } else {
  //       // Add a new entry (if no editingIndex is set)
  //       setAddedEntries([
  //         ...addedEntries,
  //         { category: selectedCategory, taxPercentage },
  //       ]);
  //     }

  //     // Determine whether to call add or edit API based on filled fields
  //     if (
  //       !editingEntry.taxInformationId ||
  //       !editingEntry.categorySpecificationId
  //     ) {
  //       // If the fields are empty, call add API
  //       const payloadAdd = {
  //         taxInformationID: "",
  //         stateName: businessInfo?.state,
  //         categorySpecificationID: selectedCategory?.categorySpecificationId,
  //         taxPercentage: taxPercentage,
  //         createdDate: new Date().toISOString(),
  //         modifiedDate: new Date().toISOString(),
  //         isActive: 1,
  //       };
  //       await dispatch(taxAddInformationApi(payloadAdd));
  //       setNotification({
  //         show: true,
  //         message: "Added Item Successfully!",
  //       });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     } else {
  //       // If the fields are filled, call edit API
  //       const payloadEdit = {
  //         taxInformationID: editingEntry.taxInformationId,
  //         stateName: editingEntry.stateName,
  //         // categorySpecificationID: category, // Use updated category
  //         categorySpecificationID: category, // Use updated category
  //         taxPercentage: taxPercentage,
  //         createdDate: editingEntry.createdDate,
  //         modifiedDate: new Date().toISOString(), // Update modified date
  //         isActive: 1,
  //       };
  //       await dispatch(TaxInfoEdit(payloadEdit));
  //       setNotification({
  //         show: true,
  //         message: "Edit Item Successfully!",
  //       });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     }

  //     // Fetch updated tax data
  //     await dispatch(TaxGetByStateNameApi(businessInfo?.state));

  //     // Reset form fields after adding or editing
  //     setCategory("");
  //     setTaxPercentage("");
  //     setIsEditable(false);
  //     setShowSuccessMessage(true);
  //   };

  const [newTax, setNewTax] = useState("")
  const [newCategory, setNewCategory] = useState("")
  // Handle edit icon click: populate the form with the selected row data
  const handleEditClick = (
    index,
    chargeTypeId,
    chargeType,
    chargePercentage,
    // taxPercentage,entry.createdOn
    // stateName,
    createdOn,
    modifiedOn,
    // transactionFee
  ) => {

    // setCategory(chargeType); // Update category
    const mappedChargeTypeId =
      chargeType === "Credit card charges"
        ? 1
        : chargeType === "PharmEtrade charges"
          ? 2
          : chargeTypeId; // Fall back to chargeTypeId if it's already correct
    setCategory(mappedChargeTypeId);
    setNewCategory(mappedChargeTypeId)
    setTaxPercentage(chargePercentage); // Update tax percentage
    setNewTax(taxPercentage)
    // setTransactionfee(transactionFee); // Update transaction fee
    setEditingIndex(index); // Set the index of the row being edited
    setIsEditable(true); // Enable editing
    setShowSuccessMessage(false); // Hide success messages during edit
    setEditingEntry({
      chargeType,
      chargePercentage,
      createdOn,
      modifiedOn,
    }); // Store the current entry for reference
  };

  //   useEffect(() => {
  //     dispatch(TaxGetByStateNameApi(businessInfo?.state));
  //   }, [dispatch, businessInfo?.state]);

  //   useEffect(() => {
  //     dispatch(fetchProductOffer());
  //   }, [dispatch]);

  // const [getCharge, setGetCharge] = useState([])
  // console.log("cccc-->", category)
  // console.log("taxxxxx", taxPercentage)
  // const handleAddOrSave = async () => {
  //   const payload = {
  //     sellerId: CustomerId,
  //     chargeTypeId: category,
  //     chargePercentage: taxPercentage
  //   }
  //   await AdminChargesInformationAdd(payload)
  // }
  // useEffect(() => {
  //   const data = async () => {
  //     const res = await AdminChargesGetApi(CustomerId)
  //     setGetCharge(res || []);
  //   }
  //   data()
  // }, [CustomerId])
  const stateNameData = useSelector((state) => state.tax.stateName) || [];
  const [getCharge, setGetCharge] = useState(stateNameData || []);
  const [loading, setLoading] = useState(false)
  const fetchCharges = async () => {
    setLoading(true)
    try {
      const res = await dispatch(TaxGetByStateNameApi(user.customerId));
      setCategory("")
      setTaxPercentage("")
      setLoading(false)
    } catch (error) {
      console.error("Error fetching charges:", error);
      setLoading(false)
    }
  };


  // const handleAddOrSave = async () => {
  //   const payload = {
  //     sellerId: CustomerId,
  //     chargeTypeId: category,
  //     chargePercentage: taxPercentage,
  //   };
  //   try {
  //     await AdminChargesInformationAdd(payload);
  //     // Immediately fetch the updated data after saving
  //     fetchCharges();
  //   } catch (error) {
  //     console.error("Error adding or saving charges:", error);
  //   }
  //   const payloadEdit = {
  //     sellerId: CustomerId,
  //     chargeTypeId: category,
  //     chargePercentage: taxPercentage
  //   }
  //   await editChargesApi(payloadEdit)
  // };

  // const handleAddOrSave = async () => {
  //   const payload = {
  //     sellerId: CustomerId,
  //     chargeTypeId: category,
  //     chargePercentage: taxPercentage,
  //   };

  //   try {
  //     if (editingIndex !== null) {
  //       console.log("newwwcategory==>", newCategory)
  //       console.log("newwwcategory==>", newTax)
  //       // Edit Mode: Call editChargesApi
  //       const payloadEdit = {
  //         sellerId: CustomerId,
  //         chargeTypeId: newCategory,
  //         chargePercentage: taxPercentage,
  //       }
  //       await editChargesApi(payloadEdit);
  //       console.log("Successfully edited the charge.");
  //       setNotification({ show: true, message: "Successfully edited the charge." });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     } else {
  //       // Add Mode: Call AdminChargesInformationAdd
  //       await AdminChargesInformationAdd(payload);
  //       console.log("Successfully added the charge.");
  //       setNotification({ show: true, message: "Successfully added the charge." });
  //       setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  //     }

  //     // Immediately fetch the updated data after saving/editing
  //     fetchCharges();
  //     setIsEditable(false); // Disable edit mode
  //     setEditingIndex(null); // Reset editing index
  //   } catch (error) {
  //     console.error("Error in handleAddOrSave:", error);
  //   }
  // };


  useEffect(() => {
    fetchCharges(); // Fetch data on component mount
  }, [user.customerId]);

  const [deletePop, setDeletePop] = useState(false);
  const [deletePharma, setDeletePharma] = useState(null);
  const handleDeleteClick = (pharmEtradeChargesId) => {
    setDeletePop(true);
    setDeletePharma(pharmEtradeChargesId);
  }
  const cancelDeleteButton = () => {
    // console.log("Canceling delete operation");
    setDeletePop(false); // Close modal without deleting
    // setDeleteProduct(null); // Reset selected product
  };

  // Success Delete Button
  const successDeleteButton = async () => {
    try {

      if (deletePharma) {
        await deleteChargesAPi(deletePharma); // Call delete API
        setDeletePop(false); // Close modal after deletion
        setDeletePharma(null); // Reset selected product
        setNotification({ show: true, message: "Charge Deleted Successfully!" });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        await fetchCharges()
      }
    } catch (error) {
      console.error("Error while deleting product:", error);
      setNotification({ show: true, message: "Error deleting charge." });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }
  };

  // Close Modal Button
  const closeDeleteButton = () => {
    // console.log("Closing delete modal");
    setDeletePop(false); // Close modal
    setDeletePharma(null); // Reset selected product
  };
  console.log("==", getCharge)

 const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const sortedProducts = React.useMemo(() => {
     // Default sort by `paymentDate` in descending order
    let sortedData = [...getCharge].sort((a, b) => {
       const aDate = new Date(a.paymentDate).getTime();
       const bDate = new Date(b.paymentDate).getTime();
       return bDate - aDate; // Descending order
     });
 
     // Apply additional sorting based on `sortConfig`
     if (sortConfig.key) {
       sortedData.sort((a, b) => {
         const aValue = a[sortConfig.key];
         const bValue = b[sortConfig.key];
       
 
         if (aValue === bValue) return 0;
 
         if (sortConfig.direction === 'ascending') {
           return aValue > bValue ? 1 : -1;
         }
         return aValue < bValue ? 1 : -1;
       });
     }
 
     return sortedData;
  }, [getCharge, sortConfig]);
  const currentItems = Array.isArray(sortedProducts)
    ? sortedProducts.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  return (
    <div className="w-[90%]">
      {/* {showSuccessMessage && (
        <p className="mt-4 flex justify-end text-green-600 font-semibold text-xl">
          Entry saved successfully!
        </p>
      )} */}


      {deletePop && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-96 h-40 bg-white rounded-md shadow-md flex flex-col justify-center">
            <div className="flex justify-end">
              <button className="w-5 p-1 -mt-8 mx-2" onClick={closeDeleteButton}>
                <img src={wrong} className="w-6 h-4" alt="Close" />
              </button>
            </div>
            <h1 className="text-black text-center mt-2">
              Are you sure you want to delete this charge?
            </h1>
            <div className="flex justify-around mt-6">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={cancelDeleteButton}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={successDeleteButton}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="w-[90%] border rounded-lg px-4 mx-2 py-3 mt-8 relative my-3">
        <div className="flex justify-between">
          {/* <h1 className="text-blue-900 text-xl font-semibold p-1 rounded-md">
            Charges Information
          </h1> */}
          {/* {isEditable && ( */}
          {/* <h1 className="absolute -top-4 left-4 bg-blue-900 px-2 text-xl font-semibold text-white rounded-md">
              Charges Information
            </h1> */}
          {/* )} */}
          <h1
            className={`text-xl font-semibold my-2 ${isEditable ? "invisible" : "text-blue-900"
              }`}
          >
            Tax Information
          </h1>
          {/* <img
            src={edit}
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsEditable(true)}
          /> */}
          {/* <img
            src={edit}
            className={`w-6 h-6 cursor-pointer ${getCharge.length >= 2 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => {
              if (getCharge.length < 2) setIsEditable(true); // Enable only if less than 2 rows
            }}
            alt="Edit"
          /> */}

        </div>

        {/* <div className="flex justify-around my-4">
          <div>
            <select
              className="border rounded-md h-11"
              value={category} // The numeric ID is stored here
              onChange={(e) => {
                console.log("Selected value:", e.target.value); // Debug selected value
                const value = e.target.value;
                setCategory(value ? Number(value) : ""); // Avoid NaN
              }}// Update category when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            >
              <option value="">Select a category</option>
              <option value={1}>Credit card charges</option>
              <option value={2}>PharmEtrade charges</option>
              {/* <option value="credit card charges">Credit card charges</option>
              <option value="pharmetrade charges">PharmEtrade charges</option> */}

        {/* {getproductSpecialOffer.map((item) => (
                <option
                  key={item.categorySpecificationId}
                  value={item.categorySpecificationId}
                >
                  {item.specificationName}
                </option>
              ))} 
            </select>
          </div>

          <div>
            <TextField
              type="text"
              label="Charge percentage"
              size="small"
              value={taxPercentage} // Set the tax percentage in the input
              onChange={(e) => setTaxPercentage(e.target.value)} // Update when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            />
          </div>
          {/* <div>
            <TextField
              type="text"
              label="Transaction fee"
              size="small"
              value={transactionfee} // Set the tax percentage in the input
              onChange={(e) => setTransactionfee(e.target.value)} // Update when changed
              disabled={!isEditable} // Enable/disable based on edit mode
            />
          </div> 

          {/* <button
            className="bg-blue-900 text-white w-16 rounded-lg h-8"
            onClick={handleAddOrSave}
            disabled={!isEditable} // Disable if not in edit mode
          >
            {editingIndex !== null ? "Save" : "ADD"}
          </button> 
          <button
            className={`bg-blue-900 text-white w-16 rounded-lg h-8 ${editingIndex === null && getCharge.length >= 2 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={handleAddOrSave}
            disabled={editingIndex === null && getCharge.length >= 2}
          >
            {editingIndex !== null ? "Save" : "ADD"}
          </button>
        </div> */}
      </div>



      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {!loading && (
        <>
          <div className="overflow-x-auto ml-5">
            <table className="min-w-full text-left table-auto border-collapse">

              <thead className="bg-gray-200">
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-base font-bold">S NO.</th>
                  <th className="px-6 py-3 text-base font-bold">State</th>
                  <th className="px-6 py-3 text-base font-bold">Category Name</th>
                  <th className="px-6 py-3 text-base font-bold">
                    Tax Percentage
                  </th>
                  <th className="px-6 py-3 text-base font-bold">Created Date</th>
                  <th className="px-6 py-3 text-base font-bold">Modify Date</th>
                  {/* <th className="px-6 py-3 text-base font-bold">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {/* {getCharge.map((entry, index) => {
              // const matchedCategory = getproductSpecialOffer.find(
              //   (item) =>
              //     item.categorySpecificationId === entry.categorySpecificationID
              // );
              return (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {index + 1}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {entry.chargeType}
                  </td>
                  {/* <td className="px-6 border-b border-gray-200 text-sm">
                    {matchedCategory
                      ? matchedCategory.specificationName
                      : "Unknown Category"}
                  </td> 
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {entry.chargePercentage}%
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {new Date(entry.
                      createdOn)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    {new Date(entry.modifiedOn)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}{" "}
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <button
                      className="px-4 py-2 text-white"
                      onClick={() =>
                        handleEditClick(
                          index,
                          entry?.taxInformationID,
                          entry.categorySpecificationID,
                          entry.taxPercentage,
                          entry.stateName,
                          entry.createdDate,
                          entry.modifiedDate
                        )
                      }
                    >
                      <img src={edit} alt="Edit" className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              );
            })} */}

                {currentItems && currentItems.length > 0 ? (
                  currentItems.map((entry, index) => {
                    const matchedCategory = getproductSpecialOffer.find(
                      (item) => item.categorySpecificationId === entry.categorySpecificationID
                    );
                    return (
                      <tr key={index} className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-6 border-b border-gray-200 text-sm">{indexOfFirstItem + index + 1}</td>
                        <td className="px-6 border-b border-gray-200 text-sm">{entry.stateName}</td>
                        <td className="px-6 border-b border-gray-200 text-sm">{matchedCategory? matchedCategory.specificationName : 'Unknown Category'}</td>
                        <td className="px-6 border-b border-gray-200 text-sm">{entry.taxPercentage}%</td>
                        <td className="px-6 border-b border-gray-200 text-sm">
                          {new Date(entry.createdDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }).replace(/\//g, "-")}
                        </td>
                        <td className="px-6 border-b border-gray-200 text-sm">
                          {new Date(entry.
                            modifiedDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }).replace(/\//g, "-")}
                        </td>
                        {/* <td className="px-6 border-b border-gray-200 text-sm flex">
                    <button
                      className=" py-2 text-white"
                      onClick={() => handleEditClick(index, entry.chargeTypeId, entry.chargeType, entry.chargePercentage, entry.createdOn, entry.modifiedOn)}
                    >
                      <Tooltip placement="top" title="Edit">
                        <img src={edit} alt="Edit" className="w-6 h-6" />
                      </Tooltip>
                    </button>
                    <button
                      className="px-2 text-white"
                      onClick={() => handleDeleteClick(entry.pharmEtradeChargesId)}
                    >
                      <Tooltip placement="top" title="Delete">

                        <img src={Bin} alt="Delete" className="w-4 h-4" />
                      </Tooltip>
                    </button>
                  </td> */}
                        {/* <td className="px-6 border-b border-gray-200 text-sm">
                    
                  </td> */}
                      </tr>
                    )
                  }
                  )
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-gray-500">
                      No Tax available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Pagination
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        productList={stateNameData}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default StateTaxInformation