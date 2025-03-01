import React, { useState, useRef } from "react";
import { AiFillCamera } from "react-icons/ai"; // Importing camera icon from react-icons
import { TextField, Grid } from "@mui/material";
import camera from "../../../assets/Camera.png"

const Settings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "logo") {
          setLogo(reader.result);
        } else if (type === "banner") {
          setBanner(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full bg-slate-200  flex justify-center items-center ">
      <div className="w-[95%] h-full mt-8">
        <p className="text-2xl text-blue-900 font-semibold">Settings</p>
        <div className="w-full bg-white border-gray-400 rounded-lg border my-4  p-4 flex flex-col  items-start  ">
          <div className=" w-full  flex items-center  mb-8">
            <div className="w-32 h-32 relative bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
              <img
                src={profileImage || "https://via.placeholder.com/64"}
                alt="Profile"
                className="w-full h-full object-cover  "
              />
              {/* <button
                onClick={handleCameraClick}
                className="absolute bottom-0 right-0 p-1  rounded-full text-white"
              >
              </button> */}
            </div>
                <img src={camera} className="w-10 absolute z-10 top-64 left-30 h-10" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <div className="ml-4 flex items-center space-x-2 font-semibold text-[18px]">
              <button className="bg-blue text-white p-2 rounded">
                UserName: <span className="font-medium"> Sofiya Khan </span>
              </button>
              <button className="bg-blue text-white p-2 font-semibold rounded">
                Designation:<span className="font-medium">Software Developer</span> 
              </button>
            </div>
          </div>
          <div className="flex w-full gap-6 mb-4">
            <TextField
              label="Contact Number"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField label="Email" variant="outlined" className="w-full" size="small" />
            <TextField label="Address" variant="outlined" className="w-full" size="small" />
          </div>
          {/* <div className="w-full">
            <TextField label="Address" variant="outlined" className="w-64" />
          </div> */}
        </div>
        <div className="w-full bg-white border-gray-400 rounded-lg border my-4 p-4 flex flex-col  ">
          <div className="flex gap-4">
            <div className="flex flex-col  ">
              <span className="mt-2 text-xl text-black">Company Banner</span>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "banner")}
                />
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center rounded-lg">
                  {banner ? (
                    <img
                      src={banner}
                      alt="Company Banner"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Upload Banner</span>
                  )}
                </div>
              </label>
            </div>
            <div className="flex flex-col ">
              <span className="mt-2 text-xl text-black">Company Logo</span>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "logo")}
                />
                <div className="w-80 h-32 bg-gray-200 flex items-center justify-center rounded-lg">
                  {logo ? (
                    <img
                      src={logo}
                      alt="Company Logo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500 ">Upload Logo</span>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Company Name"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Shop Title"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField label="Location" variant="outlined" className="w-full" size="small" />
          </div>
          <div className="flex w-full gap-6 my-4">
            <TextField label="Country" variant="outlined" className="w-full" size="small"/>
            <TextField
              label="Return Policy"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Shipping Policy"
              variant="outlined"
              className="w-full"
              size="small"
            />
          </div>
          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Privacy Policy"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Store Pick Up"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Tax Number"
              variant="outlined"
              className="w-full"
              size="small"
            />
          </div>

          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Description"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Meta Keywords"
              variant="outlined"
              className="w-full"
              size="small"
            />
            <TextField
              label="Meta Description"
              variant="outlined"
              className="w-full"
              size="small"
            />
          </div>
          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Company Website URL"
              variant="outlined"
              className="w-96"
              size="small"
            />
            <button className="text-white bg-blue px-4 rounded-lg">
              Save
            </button>
          </div>

          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Payment Information"
              variant="outlined"
              className="w-96"
              size="small"
            />
            <button className="text-white bg-blue px-4 rounded-lg">
              Save
            </button>
          </div>
          <div className="flex w-full gap-6 my-4">
            <TextField
              label="Payment Details"
              variant="outlined"
              className="w-96"
              size="small"
            />
            
          </div>

        </div>
        <div className="w-full flex justify-between gap-4">
          <div className="flex w-full gap-4">
            <button className="text-white bg-blue font-semibold w-44 p-4 rounded-lg ">
              View Profile
            </button>
            <button className="text-white bg-blue font-semibold w-44 p-4 rounded-lg ">
              View Collection
            </button>
          </div>
          <div>
          <button className="text-white bg-blue font-semibold w-24 p-4 rounded-lg ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
