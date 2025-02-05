// import React, { useState, useRef } from "react";

// import { Link } from "react-router-dom";
// const OTPInput = ({ length, onChangeOTP }) => {
//   const [otp, setOTP] = useState(new Array(length).fill(""));
//   const inputRefs = useRef([]);

//   const handleChange = (element, index) => {
//     const value = element.value.replace(/[^0-9]/g, ""); // Allow only numeric input
//     if (value) {
//       const newOTP = [...otp];
//       newOTP[index] = value;
//       setOTP(newOTP);
//       if (index < length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//       onChangeOTP(newOTP.join(""));
//     }
//   };

//   const handleBackspace = (element, index) => {
//     if (element.value === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus();
//       }
//     }
//   };

//   return (
//     <div style={{ display: "flex", marginLeft: "250px", marginTop: "-50px" }}>
//       {otp.map((data, index) => (
//         <input
//           key={index}
//           type="text"
//           value={data}
//           maxLength="1"
//           onChange={(e) => handleChange(e.target, index)}
//           onKeyDown={(e) =>
//             e.key === "Backspace" && handleBackspace(e.target, index)
//           }
//           ref={(el) => (inputRefs.current[index] = el)}
//           style={inputStyle}
//         />
//       ))}
//     </div>
//   );
// };

// const Otp = () => {
//   const handleOTPChange = (otp) => {
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "26px" ,marginLeft:'10px'}}>
//       <h5 style={{ marginTop: "-22px", marginLeft: "-270px" }}>Enter OTP</h5>
//       <OTPInput length={6} onChangeOTP={handleOTPChange} />
//     </div>
//   );
// };

// const inputStyle = {
//   width: "20px",
//   height: "20px",
//   // marginLeft:'-386px',
//   margin: "2px",
//   fontSize: "12px",
//   marginLeft: "135px",
//   marginBottom: "-10px",
//   display: "flex",
//   marginTop: "25px",
//   alignself:'center',
//   // textAlign: "center",
//   border: "1px solid #ddd",
//   borderRadius: "4px",
//   // marginTop:'5px',
//   marginRight: "-190px",
//   //  marginRight:'368px'
// };

// export default Otp;

import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
const OTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Allow only numeric input
    if (value) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      onChangeOTP(newOTP.join(""));
    }
  };

  const handleBackspace = (element, index) => {
    if (element.value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div 
    className="flex items-center justify-center"
    // style={{ display: "flex", marginLeft: "250px", marginTop: "-50px" }}
    >
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          value={data}
          maxLength="1"
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) =>
            e.key === "Backspace" && handleBackspace(e.target, index)
          }
          ref={(el) => (inputRefs.current[index] = el)}
          // style={inputStyle}
          className="w-6 flex items-center justify-center border border-gray-400  rounded-md mx-1 -mt-5"
        />
      ))}
    </div>
  );
};

const Otp = () => {
  const handleOTPChange = (otp) => {
  };

  return (
    <div 
    className="text-center"
    // style={{ textAlign: "center", marginTop: "26px" }}
    >
      <h5
      className=" flex justify-start items-start mx-6"
      //  style={{ marginTop: "-15px", marginLeft: "-50px" }}
       >Enter OTP</h5>
      <OTPInput length={6} onChangeOTP={handleOTPChange} />
    </div>
  );
};



export default Otp;
