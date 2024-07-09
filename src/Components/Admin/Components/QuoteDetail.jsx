import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const QuoteDetail = ({ request }) => {
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
  return (
    <div className="pl-8 w-full h-full flex flex-col">
      <p className="text-2xl py-8 text-blue-900 font-medium">
        Requested Quote Details
      </p>
      <div className="w-full flex pb-8 border-b-gray-400 border-b">
        <div className="flex w-[50%] flex-col space-y-4 pl-4">
          <h2 className="text-2xl font-normal">
            Requested Quote For:<span> {request.quote} </span>
          </h2>
          <p className="font-semibold">
            Created At: <span className="font-thin">{request.created}</span>
          </p>
          <p className="font-semibold">
            Destination Country:{" "}
            <span className="font-thin">United States</span>
          </p>
          <p className="font-semibold">
            Customer Name:<span className="font-thin"> {request.customer}</span>
          </p>
          <p className="font-semibold">
            Requested Bulk Quantity:{" "}
            <span className="font-thin">{request.bulkQuantity}</span>
          </p>
          <p className="font-semibold">
            Requested Price:<span className="font-thin"> $10.000 </span>
          </p>
          <p className="font-semibold">
            Notes/Comments:<span className="font-thin"> test </span>
          </p>
        </div>
        <div className=" w-[50%] space-y-4">
          <h2 className="text-2xl  font-medium ">Quote Details:</h2>
          <p className="font-semibold">
            First Name :<span className="font-thin">Rama</span>
          </p>
          <p className="font-semibold">
            Last Name: <span className="font-thin">Manda</span>
          </p>
          <p className="font-semibold">
            Email:<span className="font-thin"> ram@pharmetrade.com</span>
          </p>
          <p className="font-semibold">
            Phone: <span className="font-thin">7665432987</span>
          </p>
          <p className="font-semibold">
            Strength<span className="font-thin"> </span>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <h2 className="text-2xl pt-2 text-blue-900 font-medium">Seller Name</h2>
        <form>
          <div className=" w-full flex flex-col ">
            <div className="w-full my-8 flex ">
              <input
                placeholder="Bulk Quoted Quantity"
                type="text"
                // onChange={(e) => handleInput(e)}
                name="name"
                className="w-[42%]  mr-5 p-2 border border-gray-600 text-black rounded-lg"
              />
              <input
                placeholder="Per Unit Price"
                type="email"
                name="email"
                // onChange={(e) => handleInput(e)}
                className="w-[42%]  p-2 border border-gray-600 text-black rounded-lg"
              />
            </div>

            <textarea
              placeholder="Write your response here including all necessary details."
              type="text"
              name="msg"
              // onChange={(event) => handleInput(event)}
              className="w-[85%] h-32 p-2  border border-gray-600 text-black rounded-lg"
            />

              <main className="container py-4">
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
                              <MdAdd className="mx-7 my-2   text-4xl" />
                            </div>
                            <p className="w-32">Click here to add sample files </p>
                            
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </main>
            <button
              type="submit"
              className="w-40 p-2 my-10 bg-blue-900 text-white rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteDetail;
