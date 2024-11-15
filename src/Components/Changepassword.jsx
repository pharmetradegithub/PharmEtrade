


import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { changePasswordUserApi } from "../Api/UserApi";

const Confirmpassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(""); // State to handle API errors if any
  const [successMessage, setSuccessMessage] = useState(""); // State to show success message if needed

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  const validate = () => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Password conditions
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*]/.test(newPassword);
    const isValidLength = newPassword.length >= 8;

    if (!username) {
      errors.username = "Email Id is required";
    } else if (!emailRegex.test(username)) {
      errors.username = "Enter a valid email id";
    }

    if (!newPassword) {
      errors.newPassword = "New password is required";
    } else {
      if (!isValidLength) {
        errors.newPassword = "Password must be at least 8 characters long.";
      } else if (!hasUpperCase) {
        errors.newPassword = "Password must include at least one capital letter.";
      } else if (!hasNumber) {
        errors.newPassword = "Password must include at least one number.";
      } else if (!hasSpecialChar) {
        errors.newPassword = "Password must include at least one special character.";
      }
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const success = await changePasswordUserApi(username, newPassword);
        if (success == false) {
          setApiError("Failed to change password. Please try again.");
          return;
        }
        setSuccessMessage("Password changed successfully.");
        setUsername("");
        setNewpassword("");

        setConfirmpassword("");
        setErrors({});
        setApiError(""); // Clear any previous errors

        navigate("/login")

      } catch (error) {
        setApiError("Failed to change password. Please try again.");
      }
    }
  };

  const handleInputChange = (setter, field) => (event) => {
    setter(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "", // Clear the error for the specific field
    }));
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
            <form onSubmit={handleSubmit} className="w-full h-full flex justify-center my-8">
              <div className="w-full h-full flex flex-col justify-center">
                <h2 className="font-semibold text-2xl text-blue-900 flex justify-center">
                  Change Password
                </h2>

                {apiError && (
                  <div className="text-red-500 text-center my-2">
                    {apiError}
                  </div>
                )}

                {successMessage && (
                  <div className="text-green-500 text-center my-2">
                    {successMessage}
                  </div>
                )}

                <div className="flex mt-6 items-center justify-center my-2">
                  <TextField
                    label="Email Id"
                    value={username}
                    onChange={handleInputChange(setUsername, "username")}
                    error={!!errors.username}
                    helperText={errors.username}
                    size="small"
                  />
                </div>

                <div className="flex items-center justify-center my-2">
                  <TextField
                    label="New password"
                    type={showPassword ? "text" : "password"}
                    id="New password"
                    value={newPassword}
                    onChange={handleInputChange(setNewpassword, "newPassword")}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    className="w-56"
                  />
                </div>

                <div className="flex items-center justify-center my-2">
                  <TextField
                    label="Confirm password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="Confirm password"
                    value={confirmPassword}
                    onChange={handleInputChange(setConfirmpassword, "confirmPassword")}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    size="small"
                    className="w-56"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
                  >
                    Submit
                  </button>
                </div>

                <div className="text-[18px] my-4 gap-1 flex justify-center">
                  Need help?{" "}
                  <span className="text-blue-900 underline">Contact support</span>.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmpassword;
