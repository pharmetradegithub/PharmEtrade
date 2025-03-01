import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import ProductFields from "../Components/ProductFields";
import filter from "../../../assets/Filter_icon.png";


const Review = () => {
  const stats = [
    { label: "Review Trends", value: 150, percentage: 75 },
    { label: "Positive Review", value: 120, percentage: 60 },
    { label: "Negative Review", value: 90, percentage: -11 },
    { label: "Neutral", value: 20, percentage: 50 },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleAddNewProductClick = () => {
    setShowDetailPopup(true);
  };

  const handleContinueClick = () => {
    setShowDetailPopup(true);
  };

  // Assuming this is your data array
  const records = [];

  return (
    <div className="relative bg-gray-100 w-full h-full flex justify-center items-center ">
      <div className=" w-[95%] h-full mt-4">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold">
            {" "}
            Marketplace Review{" "}
          </p>
          <div
            className="flex items-center bg-blue p-2 rounded-lg text-white text-[15px] cursor-pointer"
            onClick={handleAddNewProductClick}
          >
            <FiPlus />
            <button className="ml-1"> Add Review</button>
          </div>

          {showDetailPopup && (
            <div className="absolute inset-0 flex items-center justify-center overflow-scroll bg-gray-100 ">
              <ProductFields />
            </div>
          )}
        </div>

        <div className="flex my-4 gap-2 flex-wrap justify-normal items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[15px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div
                    className={`text-sm p-1 rounded-lg ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {stat.percentage > 0 ? "↑" : "↓"}{" "}
                    {Math.abs(stat.percentage)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <button className="bg-green-300 p-2 h-7 rounded-md flex items-center">
              <img src={filter} className="w-6 h-6" />
              Filter
            </button>{" "}
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="overflow-x-scroll text-[15px] w-full mt-4 font-sans">
            <table className="rounded-lg bg-white w-full">
              <thead className="bg-blue text-white">
                <tr>
                  <th className="border-b-2 py-4 min-w-36 pl-4 text-left">
                    ID
                  </th>
                  <th className="border-b-2 min-w-36 text-left">
                    Price Rating
                  </th>
                  <th className="border-b-2 min-w-36 text-left">
                    Value Rating
                  </th>
                  <th className="border-b-2 min-w-36 text-left">
                    Quality Rating
                  </th>
                  <th className="border-b-2 min-w-36 text-left">Feed Review</th>
                  <th className="border-b-2 min-w-36 text-left">
                    Customer Name
                  </th>
                  <th className="border-b-2 min-w-36 text-left">Status</th>
                  <th className="border-b-2 min-w-36 text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
                      We couldn't find any records
                    </td>
                  </tr>
                ) : (
                  records.map((record, index) => (
                    <tr key={index}>
                      {/* Replace these with actual record fields */}
                      <td className="border-b-2 py-4 min-w-36 pl-4 text-left">
                        {record.id}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.priceRating}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.valueRating}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.qualityRating}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.feedReview}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.customerName}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.status}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.created}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {record.action}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
