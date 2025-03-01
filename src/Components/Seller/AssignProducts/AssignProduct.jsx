import React from "react";

const AssignProduct = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="w-[95%] h-full mt-4">
        <p className="text-[22px] mb-4 text-blue-900 font-semibold">
          Marketplace Assigned Product
        </p>
        <p className="bg-yellow-50 p-2 mb-4">
          Assign product is available for Simple, Configurable and Virtual type
          products.
        </p>

        <h2 className="text-xl border-b p-2 border-b-black mb-8">
          Assign Product
        </h2>
        <div className="flex items-center">
          <label className="text-[17px]">
            Search For Product<span className="text-red-700"> *</span>
          </label>
          <input className="p-1 border m-2  focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400" />
          <button className="p-1 bg-blue text-white w-24 rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignProduct;
