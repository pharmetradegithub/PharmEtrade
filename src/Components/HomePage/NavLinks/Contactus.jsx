// import React from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import location from "../../../assets/Location.png";
// import call from "../../../assets/Call.png";
// import mail from "../../../assets/Mail.png";

// const Contactus = ({ topMargin }) => {
//   return (
//     <div
//       className="h-screen w-full flex justify-center items-center"
//       style={{
//         marginTop: `${topMargin}px`,
//       }}
//     >
//       <div className="w-full h-full flex items-center mb-8">
//         <div className="w-[30%] h-full flex flex-col p-6 bg-opacity-75 rounded-lg shadow-lg">
//           <h2 className="text-3xl text-blue-900 font-semibold my-4">
//             Contact Us
//           </h2>
//           <form className="flex flex-col gap-4">
//             <TextField label="Enter Name" variant="outlined" fullWidth size="small"/>
//             <TextField label="Mobile Number" variant="outlined" fullWidth size="small"/>
//             <TextField label="Email" variant="outlined" fullWidth  size="small"/>
//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//             />
//             <button className="text-white p-2 rounded-lg bg-blue">
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="w-[30%] h-full flex flex-col mt-8 items-center bg-slate-200">
//           <div className="w-[210px] flex flex-col justify-center items-center my-5">
//             <img src={location} className="h-10 w-12" />
//             <h2 className="text-2xl text-blue-900 font-semibold">Location</h2>
//             <p className="text-[17px] w-full">5 Cold Hill Road South, Unit 27, Mendham, NJ 07945</p>
//           </div>
//           <div className="flex w-[200px] flex-col justify-center items-center my-5">
//             <img src={call} className="h-10 w-10" />
//             <h2 className="text-2xl text-blue-900 font-semibold">Call Us</h2>
//             <p>1 (234) 567-891</p>
//             <p>1 (234) 567-891</p>
//           </div>
//           <div className="flex w-[200px] flex-col justify-center items-center my-5">
//             <img src={mail} className="h-7 w-7" />
//             <h2 className="text-2xl text-blue-900 font-semibold">Email Address</h2>
//             <p>info@pharmetrade.com</p>
//             <p>info@pharmetrade.com</p>
//           </div>
//         </div>

//         <div className="w-[40%] h-full flex justify-center p-8">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120287.9396004678!2d-74.69342315465147!3d40.77969971207323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1c6e4c4b5b5b5%3A0xb1ae32c5508fbc82!2s5%20Cold%20Hill%20Rd%20S%2C%20Mendham%2C%20NJ%2007945!5e0!3m2!1sen!2sus!4v1698123456789!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             title="Google Maps"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;


import React, { useState } from "react";
import { Link } from "react-router-dom";
// import background_image from '../../../assets/Contactusbg.png';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import call from "../../../assets/Call.png";
import mail from "../../../assets/Mail.png";
// import Address from '../../../assets/ContactAddress.png';
import location from "../../../assets/Location.png";
import logo from "../../../assets/logo3.png";
import Footer from "../../Footers";
import Notification from "../../Notification";
const Contactus = ({ topMargin }) => {
  const [locationUrl] = useState(
    "https://www.google.com/maps?q=5+Cold+Hill+Road+South,+Unit+27,+Mendham,+NJ+07945"
  );

  const handleOpenMap = () => {
    window.open(locationUrl, "_blank");
  };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "mobile") {
      // Remove all non-numeric characters (except hyphen) before formatting
      let formattedValue = value.replace(/[^\d]/g, "");

      // Add hyphens for phone number formatting
      if (formattedValue.length > 3 && formattedValue.length <= 6) {
        formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
          3
        )}`;
      } else if (formattedValue.length > 6) {
        formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
          3,
          6
        )}-${formattedValue.slice(6, 10)}`;
      }

      // Ensure the length does not exceed 12 characters
      if (formattedValue.length <= 12) {
        setFormData({
          ...formData,
          mobile: formattedValue,
        });
      }
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setNotification({
        show: true,
        message: "Successfully submitted. Thank you!",
      });

      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 3000); // Hide the notification after 3 seconds
    } else {
      setNotification({
        show: true,
        message: "Please fill out all required fields correctly.",
      });

      setTimeout(() => {
        setNotification({ show: false, message: "" });
      }, 3000);
    }
  };

  return (
    <div
      className="w-full relative flex justify-center bg-slate-300 items-center cursor-pointer"
      style={{ marginTop: `${topMargin}px` }}
    >
      {/* <div className="flex w-full h-full z-[-1] top-0 absolute justify-center items-center">
            <img className="w-full opacity-50" src={background_image} alt="Background" />
          </div> */}

      <div className="text-left absolute top-3 left-9 ">
        <Link to="/">
          <img src={logo} className="w-32 sm:w-44 md:w-52" />
        </Link>
      </div>
      <div className="w-full h-full flex flex-col items-center px-4 sm:px-0 ">
        <div className="my-4 flex">
          <h1 className="text-2xl sm:text-3xl text-center text-blue2 font-semibold mt-5 sm:my-4">
            Contact Us
          </h1>
        </div>

        {/* {submitted && (
          <p className="fixed top-4 right-4 p-2 px-2 rounded-md text-white bg-blue font-semibold mt-4">Successfully submitted. Thank you!</p>
        )} */}
        {notification.show && (
          <Notification
            show={notification.show}
            message={notification.message}
          />
        )}
        <div className="flex flex-col sm:flex-row my-2 sm:my-4  w-full sm:w-[93%]  sm:gap-6 justify-between">
          {/* Location */}
          <div
            className="flex items-center gap-3 bg-white rounded-md p-3 sm:p-0 w-full sm:w-[30%]  lg:justify-center"
            onClick={handleOpenMap}
          >
            <div>
              <img
                src={location}
                className="h-10 w-12 sm:h-11 sm:w-12"
                alt="Location"
              />
            </div>
            <div className="flex-col flex">
              <h1 className="text-lg sm:text-xl text-blue2 font-semibold">
                Location
              </h1>
              <p className="text-sm sm:text-base text-blue2 hover:text-green2 hover:underline">
                5 Cold Hill Road South, Mendham, NJ 07945
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center  gap-3 bg-white rounded-md p-3 sm:p-4 w-full sm:w-[30%] justify-start">
            <div>
              <img
                src={call}
                className="h-10 w-10 sm:h-11 sm:w-12"
                alt="Phone"
              />
            </div>
            <div className="flex-col flex ml-1">
              <h1 className="text-lg sm:text-xl text-blue2 font-semibold">
                Phone
              </h1>
              <p className="text-sm sm:text-base text-blue2 hover:text-green2 hover:underline ">
                973-302-8568
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-3 bg-white rounded-md p-2 sm:p-3 w-full sm:w-[30%] justify-start">
            <div>
              <img src={mail} className="h-9 w-9 sm:h-9 sm:w-9" alt="Mail" />
            </div>
            <div className="flex-col flex ml-4">
              <h1 className="text-lg sm:text-xl text-blue2 font-semibold">
                Email
              </h1>
              <p className="text-sm sm:text-base text-blue2 hover:text-green2">
                info@pharmetrade.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-[95%] justify-around gap-6">
          <div className="w-full sm:w-[45%] md:w-full p-6 bg-white shadow-md rounded-md">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl text-center flex justify-start  items-center ml-2 text-blue2 font-semibold ">
                Send Message
              </h2>
              <p className="border-b w-40 -mt-5 text-center flex items-center justify-center border-b-blue-900"></p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-4 items-center">
                {/* Name Field */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  {/* <div className="flex items-center justify-between my-2 mx-9"> */}
                  <label className="w-full sm:w-32 text-left text-blue2 font-semibold">
                    Enter Name:
                  </label>
                  <TextField
                    label="Enter Name"
                    variant="outlined"
                    size="small"
                    name="name"
                    className="w-full sm:w-56"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                  />
                </div>

                {/* Mobile Number Field */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <label className="w-full sm:w-32 text-left text-blue2 font-semibold">
                    Mobile Number:
                  </label>
                  {/* <TextField
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    name="mobile"
                    className='w-56'
                    value={formData.mobile}
                    onChange={handleInputChange}
                    error={!!errors.mobile}
                  // helperText={errors.mobile}
                  /> */}
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    name="mobile"
                    className="w-full sm:w-56"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    error={!!errors.mobile}
                    inputProps={{ maxLength: 12 }}
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <label className="w-full sm:w-32 text-left text-blue2 font-semibold">Email:</label>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    name="email"
                    className="w-full sm:w-56"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col sm:flex-row items-start gap-2">
                  <label className="w-full sm:w-32 text-left text-blue2 font-semibold">Message:</label>
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={3}
                    name="message"
                    className="w-full sm:w-56"
                    value={formData.message}
                    onChange={handleInputChange}
                    error={!!errors.message}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                {/* <Button
                  className="text-white  text-right w-full sm:w-56 p-2  rounded-lg bg-blue2 hover:bg-green2"
                  // variant="contained"
                  type="submit"
                >
                  Submit
                </Button> */}
                <button
                  className="text-white  text-center w-full sm:w-56 p-2  rounded-lg bg-blue2 hover:bg-green2"
                  // variant="contained"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full sm:w-[45%]  md:w-full bg-white shadow-md rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120287.9396004678!2d-74.69342315465147!3d40.77969971207323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1c6e4c4b5b5b5%3A0xb1ae32c5508fbc82!2s5%20Cold%20Hill%20Rd%20S%2C%20Mendham%2C%20NJ%2007945!5e0!3m2!1sen!2sus!4v1698123456789!5m2!1sen!2sus"
              width="100%"
              height="450px"
              className="rounded-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contactus;