import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-[22px] text-blue-900 font-semibold">
            Newsletter Subscription
          </h1>
        </div>
        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">SUBSCRIPTION OPTION</h2>
          </div>

          <div className="flex items-center mb-10">
            <input
              type="checkbox"
              id="subscription"
              name="subscription"
              className="mr-2"
            />
            <label htmlFor="changeEmail">General Subscription</label>
          </div>

          <div className="flex justify-between">
            <button className="bg-blue text-white text-[12px] px-4 rounded-lg font-semibold h-8 items-centerflex justify-center">
              SAVE
            </button>
            <button className="bg-blue text-white text-[12px] p-4 items-center justify-center flex rounded-lg h-8 font-semibold">
              {" "}
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
