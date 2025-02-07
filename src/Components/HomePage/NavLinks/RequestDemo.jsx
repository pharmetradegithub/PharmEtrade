
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import background_image from "../../../assets/Demobg.jpg";

const RequestDemo = ({ topMargin }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    areaCode: '',
    phoneNumber: '',
    companyName: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});
  
  // State for success message
  const [successMessage, setSuccessMessage] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  // Function to validate individual fields and clear errors
  const validateField = (name, value) => {
    let tempErrors = { ...errors };

    switch (name) {
      case 'firstName':
        tempErrors.firstName = value ? '' : 'First Name is required';
        break;
      case 'lastName':
        tempErrors.lastName = value ? '' : 'Last Name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        tempErrors.email = emailRegex.test(value) ? '' : 'Invalid email format';
        break;
      case 'areaCode':
        tempErrors.areaCode = value ? '' : 'Area Code is required';
        break;
      case 'phoneNumber':
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        tempErrors.phoneNumber = phoneRegex.test(value) ? '' : 'Phone Number must be in the format xxx-xxx-xxxx';
        break;
      case 'companyName':
        tempErrors.companyName = value ? '' : 'Company Name is required';
        break;
      default:
        break;
    }

    setErrors(tempErrors);
  };

  // Handle form input changes and validate individual fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value); // Validate the field as the user types
  };

  // Handle phone input formatting and validate it
  const handlePhoneInputChange = (e) => {
    const phone = e.target.value;
    const formattedPhone = phone
      .replace(/\D/g, '') // Remove non-numeric characters
      .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') // Format the number as 333-333-3333
      .slice(0, 12); // Ensure max length of 12 characters (xxx-xxx-xxxx)

    setFormData({ ...formData, phoneNumber: formattedPhone });
    validateField('phoneNumber', formattedPhone); // Validate phone field as user types
  };

  // Validate the entire form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName) {
      tempErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName) {
      tempErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    // Area Code validation
    if (!formData.areaCode) {
      tempErrors.areaCode = "Area Code is required";
      isValid = false;
    }

    // Phone Number validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Phone Number must be in the format xxx-xxx-xxxx";
      isValid = false;
    }

    // Company Name validation
    if (!formData.companyName) {
      tempErrors.companyName = "Company Name is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   // Validate form before submission
  //   if (validateForm()) {
  //     try {
  //       // Simulating a POST request to send data to a database/API
  //       await fetch('/api/request-demo', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       // Show success message and hide form
  //       setSuccessMessage('Request demo successful!');
  //       setFormVisible(false);

  //       // Reset form after 5 seconds
  //       setTimeout(() => {
  //         setFormVisible(true);
  //         setSuccessMessage('');
  //         setFormData({
  //           firstName: '',
  //           lastName: '',
  //           email: '',
  //           areaCode: '',
  //           phoneNumber: '',
  //           companyName: ''
  //         });
  //         setErrors({});
  //       }, 5000);

  //     } catch (error) {
  //       console.error('Error submitting the form:', error);
  //     }
  //   }
  // };

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.firstName) newErrors.firstName = "First Name is required.";
  //   if (!formData.lastName) newErrors.lastName = "Last Name is required.";
  //   if (!formData.email) {
  //     newErrors.email = "Email Address is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Enter a valid email address.";
  //   }
  //   if (!formData.companyName) newErrors.companyName = "Company Name is required.";
  //   if (!formData.phoneNumber) {
  //     newErrors.phoneNumber = "Phone Number is required.";
  //   } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
  //     newErrors.phoneNumber = "Enter a valid 10-digit phone number.";
  //   }

  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Show a loading indicator (optional)
        setIsSubmitting(true);

        // Simulate a POST request
        const response = await fetch('/api/request-demo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to submit the form. Please try again.');
        }

        // Reset form and show success message
        setSuccessMessage('Request demo successful!');
        setFormVisible(false);

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormVisible(true);
          setSuccessMessage('');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            areaCode: '',
            phoneNumber: '',
            companyName: '',
          });
          setErrors({});
        }, 5000);
      } catch (error) {
        console.error('Error submitting the form:', error);
        setErrorMessage('There was an issue submitting your request. Please try again later.');
      } finally {
        // Hide the loading indicator
        setIsSubmitting(false);
      }
    }
  };


  return (

<div
  className="w-full relative flex flex-col md:flex-row justify-center items-center"
  style={{ marginTop: `${topMargin}px` }}
>
  <div className="absolute top-0 w-full h-full sm:h-[70vh] md:h-[95vh] lg:h-screen z-[-1] flex justify-center items-center">
    <img className="w-full h-full opacity-50" src={background_image} alt="Background" />
  </div>

  <div className="w-full h-auto md:h-screen flex flex-col sm:flex-col md:flex-row lg:flex-row items-center">
    {/* Left side content */}
    <div className="w-full sm:w-full md:w-[54%] lg:w-[54%] p-6 sm:p-10 md:p-20 m-4 flex flex-col gap-6">
      <h1 className='text-3xl sm:text-2xl md:text-2xl lg:text-6xl text-black font-semibold pt-15'>
            Unlock Your Marketplace Potential
            {/* with a Live Demo */}
      </h1>
      {/* <p className='text-black text-base sm:text-base md:text-base font-medium'>
        See how our platform can elevate your buying and selling experience.
        Join our live demo to explore powerful features designed for your success.
      </p> */}
    </div>

    {/* Right side form */}
    <div className="w-full sm:w-full md:w-[46%] lg:w-[46%] flex flex-col m-4 bg-white p-6 sm:p-8">
      {formVisible ? (
        <>
          {/* <h2 className="text-xl font-bold mb-4">SCHEDULE A LIVE DEMO TODAY</h2> */}
          {/* <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-col md:flex-row space-x-0 md:space-x-4">
                  <div className="flex-1">
                    <label>First Name</label>
                <TextField
                  // label="First Name"
                  variant="outlined"
                  fullWidth
                   size='small'
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label>Last Name</label>
                <TextField
                  // label="Last Name"
                  variant="outlined"
                  fullWidth
                   size='small'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
            </div>

             <label>Email Address</label>
            <TextField
              // label="Email Address"
              variant="outlined"
              fullWidth
               size='small'
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <div className="flex flex-col sm:flex-col md:flex-row space-x-0 md:space-x-4">
            <div className="flex-1">
              {/* <TextField
                label="Area Code"
                variant="outlined"
                fullWidth
                 size='small'
                name="areaCode"
                value={formData.areaCode}
                onChange={handleInputChange}
                error={!!errors.areaCode}
                helperText={errors.areaCode}
              /> 
                    <label htmlFor="companyName">Company Name</label>
                    <TextField
                      // label="Company Name"
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      error={!!errors.companyName}
                      helperText={errors.companyName}
                    />
              </div>
                            <div className="flex-1 mt-4 md:mt-0">

                    
                    <label htmlFor="PhoneNumber">Phone Number</label>
              <TextField
                // label="Phone Number"
                variant="outlined"
                fullWidth
                 size='small'
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneInputChange} // Custom phone input handler
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              </div>
            </div>

            {/* <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              size='small'
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              error={!!errors.companyName}
              helperText={errors.companyName}
            /> 

            <button
              type="submit"
              className='bg-blue-900 text-white p-2 rounded-md font-semibold'
            >
              Request Your Demo
            </button>
          </form> */}
              <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-col md:flex-row space-x-0 md:space-x-4">
                  <div className="flex-1">
                    <label>
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label>
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </div>
                </div>

                <label>
                  Company Name <span className="text-red-600">*</span>
                </label>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  error={!!errors.companyName}
                  helperText={errors.companyName}
                />

                <div className="flex flex-col sm:flex-col md:flex-row space-x-0 md:space-x-4">
                  <div className="flex-1">
                   
                    <label>
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label>
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handlePhoneInputChange}
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-900 text-white p-2 rounded-md font-semibold"
                >
                  Request Your Demo
                </button>
              </form>
          <p className="mt-4 text-gray-600 text-center">
            We don’t share your info, promise
          </p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">{successMessage}</h2>
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default RequestDemo;

