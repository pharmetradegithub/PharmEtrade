// import React, { useState } from "react";
// import background_image from "../assets/homepharma.png";
// import logo from "../assets/logo2.png";
// import FormControl from "@mui/material/FormControl";
// import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

// // import Otp from './Otp';
// import { Link } from "react-router-dom";
// import { sendChangePasswordLinkApi } from "../Api/UserApi";
// const Password = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(email)) {
//       errors.email = "Email is not valid";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const [message,setmessage] = useState(null);
//   const handleSubmit =async () => {
//     if (validate()) {
//       // Handle form submission
//       const response = await sendChangePasswordLinkApi(email);
//       setmessage(response);
//       // Reset form
//       setEmail("");
//       setPassword("");
//       setErrors({});
//     }
//   };

//   return (
//     <div className="h-screen w-screen">
//       <img
//         src={background_image}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//         }}
//       />
//       <div className="w-full h-full ">
//         <Link to="/">
//           <img src={logo} style={{ width: "220px" }} />
//         </Link>

//         <div className=" h-full flex justify-center items-center">
//           <div className="bg-white  w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
//             <div
//               className="w-full h-full flex  justify-center my-8"
//             >
//               <div className="w-full h-full flex flex-col justify-center ">
//                 <h2 className="font-semibold text-2xl text-blue-900 flex justify-center ">
//                   Forgot Password
//                 </h2>

//                 <div className=" flex items-center justify-center  my-5">
//                   <TextField
//                     label="Email"
//                     id="outlined-size-small"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     error={!!errors.email}
//                     size="small"
//                   />
//                 </div>
//                 {message && (
//                   <div>
//                     {message}
//                   </div>
//                 )}

//                 <div className="flex justify-center my-2">
//                   <button
//                     type="submit"
//                     className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
//                     onClick={()=>handleSubmit()}

//                   >
//                     Submit
//                   </button>
//                 </div>

//                 <div className=" text-[18px] my-4 gap-1 flex justify-center">
//                   {" "}
//                   {/* <span className="text-black">Note :</span>*  */}
//                   {/* Having trouble logging in get help */}
//                   Having trouble?{" "}
//                   <Link to="/gethelphere">
//                   <span className="text-blue-900 underline">
//                      Get help here.
//                   </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Password;

import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import FormControl from "@mui/material/FormControl";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { sendChangePasswordLinkApi } from "../Api/UserApi";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false); // State to control the popup visibility

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is not valid";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      const response = await sendChangePasswordLinkApi(email);
      setMessage(response);

      // Check if the response is exactly "A Link has been sent to your Email address"
      if (response === "A Link has been sent to your Email address") {
        setOpen(true); // Open the popup only if the response matches
      }

      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  // Function to close the popup
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-screen w-screen">
      <img
        src={background_image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="w-full h-full">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>

        <div className="h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
            <div className="w-full h-full flex justify-center my-8">
              <div className="w-full h-full flex flex-col justify-center">
                <h2 className="font-semibold text-2xl text-blue-900 flex justify-center">
                  Forgot Password
                </h2>

                <div className="flex items-center justify-center my-5">
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    size="small"
                  />
                </div>
                {message &&
                  message !== "A Link has been sent to your Email address" && (
                    <div className="text-red-500 text-center mt-2">
                      {message} {/* Display error message */}
                    </div>
                  )}
                  

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>

                <div className="text-[18px] my-4 gap-1 flex justify-center">
                  Having trouble?{" "}
                  <Link to="/gethelphere">
                    <span className="text-blue-900 underline">
                      Get help here.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Recover Password
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col items-center">
            <CheckCircleIcon style={{ fontSize: 60, color: "green" }} />
            <h3 className="text-lg font-semibold mt-2">Email Sent</h3>
            {message && (
              <p className="text-gray-700 text-center mt-2">{message}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Password;