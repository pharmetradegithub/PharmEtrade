
import React, { useEffect, useState } from "react";
import { AddBidAPI, fetchCustomer } from "../Api/BidApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCriteriaProductsApi } from "../Api/ProductApi";
import Notification from "./Notification";

const Bid = ({ topMargin }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
   const [notification, setNotification] = useState({
      show: false,
      message: "",
    });
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    quantity: "1",
    comments: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    strength: "",
    sellerType: "all",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!formData.productName.trim()) {
        setNotification({
          show: true,
          message: "Please enter a product name.",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        return;
      }
  
      // Prepare criteria for fetching products
      const Criteria = { customerId: user?.customerId, productName: formData.productName };
      console.log("Criteria:", Criteria);
  
      const products = await fetchCriteriaProductsApi(Criteria, "", true);
      console.log("Fetched Products:", products);
  
      if (!products || products.length === 0) {
        setNotification({
          show: true,
          message: "No products found matching your criteria. Please check the product name and try again.",
        });
        setTimeout(() => setNotification({ show: false, message: "" }), 3000);
        return;
      }
  
      const productIds = products.map((product) => product.productID);
  
      // Prepare bids for each product
      const currentDate = new Date().toISOString();
      const bidPromises = productIds.map((item) => {
        const bidData = {
          bidId: "",
          buyerId: user?.customerId,
          productId: item,
          price: formData.price,
          quantity: formData.quantity,
          comments: formData.comments,
          statusId: 1,
          // isActive: true,
          createdOn: currentDate,
        };
        return AddBidAPI(bidData);
      });
  
      await Promise.all(bidPromises);
  
      setNotification({
        show: true,
        message: "Bids submitted successfully!",
      });
      setFormData({
        productName: "",
        price: "",
        quantity: "",
        comments: "",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    } catch (error) {
      console.error("An error occurred while submitting bids:", error);
      setNotification({
        show: true,
        message: "An error occurred. Please try again.",
      });
      setTimeout(() => setNotification({ show: false, message: "" }), 3000);
    }
  };
  

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.mobile || "",
      }));
    }
    dispatch(fetchCustomer(user?.customerId));
  }, [user, dispatch]);

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ marginTop: `${topMargin}px` }}
    >
          {notification.show && (
        <Notification show={notification.show} message={notification.message} />
      )}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-slate-100 px-6 sm:px-10 md:px-16 py-8 h-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Request For Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="gap-4">
            <div>
              <label className="block text-base font-semibold text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product name you are looking for"
                value={formData.productName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2">
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 mt-4">
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
              Buyer Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-semibold text-gray-700">
                  Strength
                </label>
                <input
                  type="text"
                  name="strength"
                  value={formData.strength}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="mt-6 font-semibold px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
            >
              Request For Quote
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Bid;
