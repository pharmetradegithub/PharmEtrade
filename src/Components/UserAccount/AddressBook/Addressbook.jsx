import React from "react";

const Addressbook = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-semibold mb-8">
            {" "}
            Address Details{" "}
          </p>
        </div>

        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">DEFAULT ADDRESSES</h2>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="mb-2 font-semibold">Default Billing Address</h3>
              <p>Venkat Gollapalli</p>
              <p>Valley Pharmacy</p>
              <p>107 rt 10 E</p>
              <p>Succasunna New Jersey 07876</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Default Shipping Address</h3>
              <p>Venkat Gollapalli</p>
              <p>Valley Pharmacy</p>
              <p>107 rt 10 E</p>
              <p>Succasunna New Jersey 07876</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2 className="font-semibold">ADDITIONAL ADDRESS ENTRIES</h2>
          </div>
          <div className="">
            <p>You have no other address entries in your address book.</p>
          </div>
        </div>
        <div className="flex justify-between">
            <button className="bg-blue text-white p-2 rounded-lg">Add New Address</button>
            <button className="bg-blue text-white p-3 h-7 flex justify-center items-center rounded-lg ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default Addressbook;
